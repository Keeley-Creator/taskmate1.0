# Taskmate Forest

A forest-themed planner web app with:

- user signup/login/logout
- task library and today's must-do tasks
- AI mate customization
- bilingual Chinese/English UI

## Run locally

```bash
python3 app.py
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000).

## Important deployment note

This project currently stores data in a local SQLite file.

That works for local development, but it is **not suitable for Vercel persistence**. Vercel's official docs say SQLite cannot be used as durable storage in their serverless environment because local storage is ephemeral.

If you want a real public deployment on Vercel, the next step is to replace SQLite with an external database such as Neon, Supabase, Turso, or another managed DB.
