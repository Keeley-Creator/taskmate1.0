import hashlib
import json
import secrets
import sqlite3
from datetime import UTC, datetime, timedelta
from http import cookies
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parent
DB_PATH = ROOT / "taskmate.db"
SESSION_COOKIE = "taskmate_session"


def now_iso():
    return datetime.now(UTC).replace(microsecond=0).isoformat()


def today_key():
    return datetime.now().strftime("%Y-%m-%d")


def yesterday_key():
    return (datetime.now() - timedelta(days=1)).strftime("%Y-%m-%d")


def db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = db()
    cur = conn.cursor()
    cur.executescript(
        """
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            display_name TEXT NOT NULL,
            language TEXT NOT NULL DEFAULT 'zh',
            created_at TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS sessions (
            id TEXT PRIMARY KEY,
            user_id INTEGER NOT NULL,
            expires_at TEXT NOT NULL,
            created_at TEXT NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users(id)
        );

        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            title TEXT NOT NULL,
            category TEXT NOT NULL,
            due_date TEXT,
            is_one_time INTEGER NOT NULL DEFAULT 1,
            in_today INTEGER NOT NULL DEFAULT 0,
            completed INTEGER NOT NULL DEFAULT 0,
            carryover_dismissed INTEGER NOT NULL DEFAULT 0,
            completed_at TEXT,
            created_at TEXT NOT NULL,
            updated_at TEXT NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users(id)
        );

        CREATE TABLE IF NOT EXISTS ai_profiles (
            user_id INTEGER PRIMARY KEY,
            gender TEXT NOT NULL,
            personality TEXT NOT NULL,
            mate_name TEXT NOT NULL,
            user_nickname TEXT NOT NULL,
            hair_style TEXT NOT NULL,
            face_style TEXT NOT NULL,
            outfit_style TEXT NOT NULL,
            updated_at TEXT NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users(id)
        );
        """
    )
    conn.commit()
    conn.close()


def hash_password(password: str) -> str:
    salt = secrets.token_hex(16)
    digest = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), salt.encode("utf-8"), 120000)
    return f"{salt}${digest.hex()}"


def verify_password(password: str, password_hash: str) -> bool:
    salt, digest = password_hash.split("$", 1)
    candidate = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), salt.encode("utf-8"), 120000).hex()
    return secrets.compare_digest(candidate, digest)


def parse_json(handler):
    length = int(handler.headers.get("Content-Length", "0"))
    if length == 0:
      return {}
    raw = handler.rfile.read(length)
    return json.loads(raw.decode("utf-8"))


class AppHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == "/":
            return self.serve_file("index.html", "text/html; charset=utf-8")
        if parsed.path == "/styles.css":
            return self.serve_file("styles.css", "text/css; charset=utf-8")
        if parsed.path == "/script.js":
            return self.serve_file("script.js", "application/javascript; charset=utf-8")
        if parsed.path == "/api/session":
            return self.handle_session()
        if parsed.path == "/api/dashboard":
            return self.handle_dashboard()
        return self.send_json({"error": "Not found"}, 404)

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/register":
            return self.handle_register()
        if parsed.path == "/api/login":
            return self.handle_login()
        if parsed.path == "/api/logout":
            return self.handle_logout()
        if parsed.path == "/api/tasks":
            return self.handle_create_task()
        if parsed.path == "/api/ai-profile":
            return self.handle_save_ai_profile()
        if parsed.path == "/api/tasks/migrate-carryover":
            return self.handle_migrate_carryover()
        if parsed.path == "/api/tasks/dismiss-carryover":
            return self.handle_dismiss_carryover()
        if parsed.path == "/api/preferences/language":
            return self.handle_save_language()
        return self.send_json({"error": "Not found"}, 404)

    def do_PATCH(self):
        parsed = urlparse(self.path)
        if parsed.path.startswith("/api/tasks/"):
            task_id = parsed.path.split("/")[-1]
            return self.handle_update_task(task_id)
        return self.send_json({"error": "Not found"}, 404)

    def serve_file(self, name, content_type):
        content = (ROOT / name).read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(content)))
        self.end_headers()
        self.wfile.write(content)

    def send_json(self, payload, status=200, extra_headers=None):
        data = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        if extra_headers:
            for key, value in extra_headers.items():
                self.send_header(key, value)
        self.end_headers()
        self.wfile.write(data)

    def current_user(self):
        raw_cookie = self.headers.get("Cookie")
        if not raw_cookie:
            return None
        jar = cookies.SimpleCookie()
        jar.load(raw_cookie)
        session_cookie = jar.get(SESSION_COOKIE)
        if not session_cookie:
            return None
        session_id = session_cookie.value
        conn = db()
        row = conn.execute(
            """
            SELECT users.*
            FROM sessions
            JOIN users ON users.id = sessions.user_id
            WHERE sessions.id = ? AND sessions.expires_at > ?
            """,
            (session_id, now_iso()),
        ).fetchone()
        conn.close()
        return row

    def require_user(self):
        user = self.current_user()
        if not user:
            self.send_json({"error": "Authentication required"}, 401)
            return None
        return user

    def create_session(self, user_id):
        session_id = secrets.token_hex(24)
        expires_at = (datetime.now(UTC) + timedelta(days=14)).replace(microsecond=0).isoformat()
        conn = db()
        conn.execute(
            "INSERT INTO sessions (id, user_id, expires_at, created_at) VALUES (?, ?, ?, ?)",
            (session_id, user_id, expires_at, now_iso()),
        )
        conn.commit()
        conn.close()
        return session_id

    def handle_session(self):
        user = self.current_user()
        if not user:
            return self.send_json({"user": None})
        return self.send_json({"user": serialize_user(user)})

    def handle_register(self):
        payload = parse_json(self)
        username = payload.get("username", "").strip()
        password = payload.get("password", "").strip()
        display_name = payload.get("display_name", "").strip() or username
        language = payload.get("language", "zh")

        if len(username) < 3 or len(password) < 4:
            return self.send_json({"error": "Username/password too short"}, 400)

        conn = db()
        try:
            cur = conn.execute(
                """
                INSERT INTO users (username, password_hash, display_name, language, created_at)
                VALUES (?, ?, ?, ?, ?)
                """,
                (username, hash_password(password), display_name, language, now_iso()),
            )
            user_id = cur.lastrowid
            conn.execute(
                """
                INSERT INTO ai_profiles
                (user_id, gender, personality, mate_name, user_nickname, hair_style, face_style, outfit_style, updated_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    user_id,
                    "中性" if language == "zh" else "Neutral",
                    "温柔鼓励" if language == "zh" else "Gentle",
                    "Taskmate",
                    "同学" if language == "zh" else "friend",
                    "短发" if language == "zh" else "Short hair",
                    "温柔微笑" if language == "zh" else "Soft smile",
                    "针织外套" if language == "zh" else "Cardigan",
                    now_iso(),
                ),
            )
            conn.commit()
        except sqlite3.IntegrityError:
            conn.close()
            return self.send_json({"error": "Username already exists"}, 400)
        user = conn.execute("SELECT * FROM users WHERE id = ?", (user_id,)).fetchone()
        conn.close()
        session_id = self.create_session(user_id)
        return self.send_json(
            {"user": serialize_user(user)},
            200,
            {"Set-Cookie": f"{SESSION_COOKIE}={session_id}; Path=/; HttpOnly; SameSite=Lax"},
        )

    def handle_login(self):
        payload = parse_json(self)
        username = payload.get("username", "").strip()
        password = payload.get("password", "").strip()
        conn = db()
        user = conn.execute("SELECT * FROM users WHERE username = ?", (username,)).fetchone()
        conn.close()
        if not user or not verify_password(password, user["password_hash"]):
            return self.send_json({"error": "Invalid credentials"}, 400)
        session_id = self.create_session(user["id"])
        return self.send_json(
            {"user": serialize_user(user)},
            200,
            {"Set-Cookie": f"{SESSION_COOKIE}={session_id}; Path=/; HttpOnly; SameSite=Lax"},
        )

    def handle_logout(self):
        raw_cookie = self.headers.get("Cookie")
        if raw_cookie:
            jar = cookies.SimpleCookie()
            jar.load(raw_cookie)
            session_cookie = jar.get(SESSION_COOKIE)
            if session_cookie:
                conn = db()
                conn.execute("DELETE FROM sessions WHERE id = ?", (session_cookie.value,))
                conn.commit()
                conn.close()
        return self.send_json({}, 200, {"Set-Cookie": f"{SESSION_COOKIE}=; Path=/; Max-Age=0"})

    def handle_dashboard(self):
        user = self.require_user()
        if not user:
            return
        conn = db()
        tasks = conn.execute(
            """
            SELECT *
            FROM tasks
            WHERE user_id = ?
            ORDER BY created_at DESC
            """,
            (user["id"],),
        ).fetchall()
        ai_profile = conn.execute("SELECT * FROM ai_profiles WHERE user_id = ?", (user["id"],)).fetchone()
        conn.close()

        current_day = today_key()
        library_tasks = [serialize_task(row) for row in tasks]
        today_tasks = [serialize_task(row) for row in tasks if row["in_today"] == 1]
        carryover = [
            serialize_task(row)
            for row in tasks
            if row["in_today"] == 1
            and row["completed"] == 0
            and row["updated_at"][:10] <= yesterday_key()
            and row["carryover_dismissed"] == 0
        ]
        yesterday_completed = sum(1 for row in tasks if row["completed_at"] and row["completed_at"][:10] == yesterday_key())
        yesterday_unfinished = sum(
            1
            for row in tasks
            if row["in_today"] == 1 and row["completed"] == 0 and row["updated_at"][:10] <= yesterday_key()
        )

        return self.send_json(
            {
                "today": current_day,
                "categories": sorted({row["category"] for row in tasks}),
                "library_tasks": library_tasks,
                "today_tasks": today_tasks,
                "carryover_tasks": carryover,
                "yesterday_summary": {
                    "completed_count": yesterday_completed,
                    "unfinished_count": yesterday_unfinished,
                },
                "ai_profile": serialize_ai(ai_profile),
            }
        )

    def handle_create_task(self):
        user = self.require_user()
        if not user:
            return
        payload = parse_json(self)
        title = payload.get("title", "").strip()
        category = payload.get("category", "").strip()
        if not title or not category:
            return self.send_json({"error": "Missing title/category"}, 400)
        conn = db()
        conn.execute(
            """
            INSERT INTO tasks (user_id, title, category, due_date, is_one_time, in_today, completed, carryover_dismissed, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, 0, 0, ?, ?)
            """,
            (
                user["id"],
                title,
                category,
                payload.get("due_date") or None,
                1 if payload.get("is_one_time", True) else 0,
                1 if payload.get("in_today", False) else 0,
                now_iso(),
                now_iso(),
            ),
        )
        conn.commit()
        conn.close()
        return self.send_json({"ok": True})

    def handle_update_task(self, task_id):
        user = self.require_user()
        if not user:
            return
        payload = parse_json(self)
        conn = db()
        task = conn.execute("SELECT * FROM tasks WHERE id = ? AND user_id = ?", (task_id, user["id"])).fetchone()
        if not task:
            conn.close()
            return self.send_json({"error": "Task not found"}, 404)

        completed = task["completed"]
        completed_at = task["completed_at"]
        if "completed" in payload:
            completed = 1 if payload["completed"] else 0
            completed_at = now_iso() if completed else None

        conn.execute(
            """
            UPDATE tasks
            SET title = ?, category = ?, due_date = ?, is_one_time = ?, in_today = ?, completed = ?, completed_at = ?, carryover_dismissed = ?, updated_at = ?
            WHERE id = ? AND user_id = ?
            """,
            (
                payload.get("title", task["title"]),
                payload.get("category", task["category"]),
                payload.get("due_date", task["due_date"]),
                1 if payload.get("is_one_time", bool(task["is_one_time"])) else 0,
                1 if payload.get("in_today", bool(task["in_today"])) else 0,
                completed,
                completed_at,
                1 if payload.get("carryover_dismissed", bool(task["carryover_dismissed"])) else 0,
                now_iso(),
                task_id,
                user["id"],
            ),
        )
        conn.commit()
        conn.close()
        return self.send_json({"ok": True})

    def handle_save_ai_profile(self):
        user = self.require_user()
        if not user:
            return
        payload = parse_json(self)
        conn = db()
        conn.execute(
            """
            INSERT INTO ai_profiles
            (user_id, gender, personality, mate_name, user_nickname, hair_style, face_style, outfit_style, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(user_id) DO UPDATE SET
              gender = excluded.gender,
              personality = excluded.personality,
              mate_name = excluded.mate_name,
              user_nickname = excluded.user_nickname,
              hair_style = excluded.hair_style,
              face_style = excluded.face_style,
              outfit_style = excluded.outfit_style,
              updated_at = excluded.updated_at
            """,
            (
                user["id"],
                payload.get("gender", "Neutral"),
                payload.get("personality", "Gentle"),
                payload.get("mate_name", "Taskmate"),
                payload.get("user_nickname", "friend"),
                payload.get("hair_style", "Short hair"),
                payload.get("face_style", "Soft smile"),
                payload.get("outfit_style", "Cardigan"),
                now_iso(),
            ),
        )
        conn.commit()
        conn.close()
        return self.send_json({"ok": True})

    def handle_migrate_carryover(self):
        user = self.require_user()
        if not user:
            return
        conn = db()
        conn.execute(
            """
            UPDATE tasks
            SET due_date = ?, carryover_dismissed = 1, updated_at = ?
            WHERE user_id = ? AND in_today = 1 AND completed = 0 AND updated_at <= ? AND carryover_dismissed = 0
            """,
            (today_key(), now_iso(), user["id"], f"{yesterday_key()}T23:59:59"),
        )
        conn.commit()
        conn.close()
        return self.send_json({"ok": True})

    def handle_dismiss_carryover(self):
        user = self.require_user()
        if not user:
            return
        conn = db()
        conn.execute(
            """
            UPDATE tasks
            SET carryover_dismissed = 1, updated_at = ?
            WHERE user_id = ? AND in_today = 1 AND completed = 0 AND updated_at <= ? AND carryover_dismissed = 0
            """,
            (now_iso(), user["id"], f"{yesterday_key()}T23:59:59"),
        )
        conn.commit()
        conn.close()
        return self.send_json({"ok": True})

    def handle_save_language(self):
        user = self.require_user()
        if not user:
            return
        payload = parse_json(self)
        conn = db()
        conn.execute("UPDATE users SET language = ? WHERE id = ?", (payload.get("language", "zh"), user["id"]))
        conn.commit()
        conn.close()
        return self.send_json({"ok": True})


def serialize_user(row):
    return {
        "id": row["id"],
        "username": row["username"],
        "display_name": row["display_name"],
        "language": row["language"],
    }


def serialize_task(row):
    return {
        "id": row["id"],
        "title": row["title"],
        "category": row["category"],
        "due_date": row["due_date"],
        "is_one_time": bool(row["is_one_time"]),
        "in_today": bool(row["in_today"]),
        "completed": bool(row["completed"]),
        "completed_at": row["completed_at"],
    }


def serialize_ai(row):
    if not row:
        return None
    return {
        "gender": row["gender"],
        "personality": row["personality"],
        "mate_name": row["mate_name"],
        "user_nickname": row["user_nickname"],
        "hair_style": row["hair_style"],
        "face_style": row["face_style"],
        "outfit_style": row["outfit_style"],
    }


def run():
    init_db()
    server = ThreadingHTTPServer(("127.0.0.1", 8000), AppHandler)
    print("Taskmate running at http://127.0.0.1:8000")
    server.serve_forever()


if __name__ == "__main__":
    run()
