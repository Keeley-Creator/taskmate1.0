const DEFAULT_CATEGORIES = ["daily", "study", "work", "other"];

const translations = {
  zh: {
    "nav.today": "今日必做",
    "nav.library": "任务库",
    "nav.mate": "Taskmate",
    "hero.eyebrow": "Forest Productivity Space",
    "hero.title": "有 AI 学习搭子的森林系计划站",
    "hero.subtitle": "管理任务库、挑选今日必做、记录完成节奏，并让 Taskmate 每天像学习搭子一样提醒和鼓励你。",
    "account.guest": "游客模式",
    "account.guestHint": "登录后可保存任务与 AI 设定",
    "account.login": "登录 / 注册",
    "account.logout": "退出登录",
    "today.title": "今日必做任务",
    "today.addFromLibrary": "从任务库添加",
    "today.quickAdd": "快速新增",
    "today.progressTitle": "今日完成度",
    "today.pickerTitle": "从任务库选择加入今日任务",
    "library.title": "任务库",
    "library.taskName": "任务名称",
    "library.category": "任务类别",
    "library.date": "计划日期",
    "library.single": "单次任务",
    "library.add": "加入任务库",
    "mate.title": "Taskmate AI 搭子",
    "mate.openSettings": "设定 AI mate",
    "mate.preview": "Your Mate",
    "mate.dailyPromptTitle": "今日搭子提醒",
    "auth.loginTab": "登录",
    "auth.registerTab": "注册",
    "auth.username": "用户名",
    "auth.displayName": "显示名",
    "auth.password": "密码",
    "auth.loginAction": "登录并进入",
    "auth.registerAction": "注册并开始使用",
    "mate.settingsTitle": "设定你的 AI 学习搭子",
    "mate.gender": "AI 性别",
    "mate.personality": "AI 性格",
    "mate.nick": "AI 昵称",
    "mate.callUser": "AI 对你的称呼",
    "mate.hair": "发型",
    "mate.face": "面部",
    "mate.outfit": "服装",
    "mate.random": "随机拼装",
    "mate.save": "保存设定",
  },
  en: {
    "nav.today": "Today",
    "nav.library": "Library",
    "nav.mate": "Taskmate",
    "hero.eyebrow": "Forest Productivity Space",
    "hero.title": "A forest-themed planner with an AI study mate",
    "hero.subtitle": "Manage your task library, choose today's must-do list, track progress, and get daily encouragement from Taskmate.",
    "account.guest": "Guest mode",
    "account.guestHint": "Sign in to save tasks and AI settings",
    "account.login": "Login / Sign up",
    "account.logout": "Logout",
    "today.title": "Today's Must-Do",
    "today.addFromLibrary": "Add from library",
    "today.quickAdd": "Quick add",
    "today.progressTitle": "Today's progress",
    "today.pickerTitle": "Pick tasks from your library",
    "library.title": "Task Library",
    "library.taskName": "Task name",
    "library.category": "Category",
    "library.date": "Planned date",
    "library.single": "One-time task",
    "library.add": "Add to library",
    "mate.title": "Taskmate AI Mate",
    "mate.openSettings": "Set up AI mate",
    "mate.preview": "Your Mate",
    "mate.dailyPromptTitle": "Daily mate prompt",
    "auth.loginTab": "Login",
    "auth.registerTab": "Sign up",
    "auth.username": "Username",
    "auth.displayName": "Display name",
    "auth.password": "Password",
    "auth.loginAction": "Login and enter",
    "auth.registerAction": "Create account",
    "mate.settingsTitle": "Customize your AI study mate",
    "mate.gender": "AI gender",
    "mate.personality": "AI personality",
    "mate.nick": "AI nickname",
    "mate.callUser": "How AI calls you",
    "mate.hair": "Hair",
    "mate.face": "Face",
    "mate.outfit": "Outfit",
    "mate.random": "Randomize",
    "mate.save": "Save settings",
  },
};

const mateOptions = {
  gender: {
    zh: ["女孩子", "男孩子", "中性"],
    en: ["Female", "Male", "Neutral"],
  },
  personality: {
    zh: ["温柔鼓励", "理性监督", "活泼元气", "安静治愈"],
    en: ["Gentle", "Disciplined", "Energetic", "Calm"],
  },
  hair: {
    zh: ["短发", "长发", "双马尾", "卷发"],
    en: ["Short hair", "Long hair", "Twin tails", "Wavy hair"],
  },
  face: {
    zh: ["元气笑脸", "温柔微笑", "清冷表情", "认真神情"],
    en: ["Bright smile", "Soft smile", "Cool face", "Focused look"],
  },
  outfit: {
    zh: ["学院制服", "针织外套", "森林斗篷", "简约卫衣"],
    en: ["School uniform", "Cardigan", "Forest cape", "Simple hoodie"],
  },
};

const state = {
  lang: localStorage.getItem("taskmate-lang") || "zh",
  mode: "login",
  session: null,
  dashboard: null,
  apiUnavailable: false,
};

const els = {
  accountSummary: document.querySelector("#accountSummary"),
  logoutBtn: document.querySelector("#logoutBtn"),
  openAuthBtn: document.querySelector("#openAuthBtn"),
  openMateSettingsBtn: document.querySelector("#openMateSettingsBtn"),
  quickTodayBtn: document.querySelector("#quickTodayBtn"),
  openTaskPickerBtn: document.querySelector("#openTaskPickerBtn"),
  authModal: document.querySelector("#authModal"),
  mateModal: document.querySelector("#mateModal"),
  pickerModal: document.querySelector("#pickerModal"),
  authForm: document.querySelector("#authForm"),
  authUsername: document.querySelector("#authUsername"),
  authDisplayName: document.querySelector("#authDisplayName"),
  authPassword: document.querySelector("#authPassword"),
  authMessage: document.querySelector("#authMessage"),
  authSubmitBtn: document.querySelector("#authSubmitBtn"),
  displayNameWrap: document.querySelector("#displayNameWrap"),
  loginTabBtn: document.querySelector("#loginTabBtn"),
  registerTabBtn: document.querySelector("#registerTabBtn"),
  libraryForm: document.querySelector("#libraryForm"),
  taskTitleInput: document.querySelector("#taskTitleInput"),
  taskCategorySelect: document.querySelector("#taskCategorySelect"),
  customCategoryInput: document.querySelector("#customCategoryInput"),
  taskDateInput: document.querySelector("#taskDateInput"),
  taskSingleInput: document.querySelector("#taskSingleInput"),
  todayBoard: document.querySelector("#todayBoard"),
  libraryBoard: document.querySelector("#libraryBoard"),
  pickerList: document.querySelector("#pickerList"),
  progressPie: document.querySelector("#progressPie"),
  progressText: document.querySelector("#progressText"),
  todayStatsText: document.querySelector("#todayStatsText"),
  yesterdaySummary: document.querySelector("#yesterdaySummary"),
  migrationBanner: document.querySelector("#migrationBanner"),
  matePraise: document.querySelector("#matePraise"),
  mateName: document.querySelector("#mateName"),
  mateSummary: document.querySelector("#mateSummary"),
  dailyMatePrompt: document.querySelector("#dailyMatePrompt"),
  mateForm: document.querySelector("#mateForm"),
  langZhBtn: document.querySelector("#langZhBtn"),
  langEnBtn: document.querySelector("#langEnBtn"),
  mateGender: document.querySelector("#mateGender"),
  matePersonality: document.querySelector("#matePersonality"),
  mateNickname: document.querySelector("#mateNickname"),
  mateUserCall: document.querySelector("#mateUserCall"),
  mateHair: document.querySelector("#mateHair"),
  mateFace: document.querySelector("#mateFace"),
  mateOutfit: document.querySelector("#mateOutfit"),
  randomizeMateBtn: document.querySelector("#randomizeMateBtn"),
  mateAvatar: document.querySelector("#mateAvatar"),
  toast: document.querySelector("#toast"),
  runtimeBanner: document.querySelector("#runtimeBanner"),
};

init();

function init() {
  bindGlobalEvents();
  populateSelectors();
  applyLanguage();
  renderRuntimeBanner();
  loadSession();
}

function bindGlobalEvents() {
  document.querySelectorAll("[data-target]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(`#${button.dataset.target}`).scrollIntoView({ behavior: "smooth", block: "start" });
      document.querySelectorAll(".nav-link").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
    });
  });

  document.querySelectorAll("[data-close]").forEach((button) => {
    button.addEventListener("click", () => document.querySelector(`#${button.dataset.close}`).classList.add("hidden"));
  });

  els.openAuthBtn.addEventListener("click", () => openModal("auth"));
  els.logoutBtn.addEventListener("click", logout);
  els.openMateSettingsBtn.addEventListener("click", handleOpenMateSettings);
  els.quickTodayBtn.addEventListener("click", quickAddTodayTask);
  els.openTaskPickerBtn.addEventListener("click", openTaskPicker);
  els.loginTabBtn.addEventListener("click", () => setAuthMode("login"));
  els.registerTabBtn.addEventListener("click", () => setAuthMode("register"));
  els.authForm.addEventListener("submit", submitAuthForm);
  els.libraryForm.addEventListener("submit", submitLibraryTask);
  els.mateForm.addEventListener("submit", submitMateForm);
  els.randomizeMateBtn.addEventListener("click", randomizeMateForm);
  els.langZhBtn.addEventListener("click", () => switchLanguage("zh"));
  els.langEnBtn.addEventListener("click", () => switchLanguage("en"));
}

function populateSelectors() {
  const lang = state.lang;
  populateCategorySelect([]);
  populateMateSelect("mateGender", mateOptions.gender[lang]);
  populateMateSelect("matePersonality", mateOptions.personality[lang]);
  populateMateSelect("mateHair", mateOptions.hair[lang]);
  populateMateSelect("mateFace", mateOptions.face[lang]);
  populateMateSelect("mateOutfit", mateOptions.outfit[lang]);
}

function populateMateSelect(id, items) {
  const select = els[id];
  select.innerHTML = items.map((item) => `<option value="${item}">${item}</option>`).join("");
}

function populateCategorySelect(extraCategories) {
  const names = getLocalizedDefaultCategories().concat(extraCategories.filter((item) => !DEFAULT_CATEGORIES.includes(item)));
  els.taskCategorySelect.innerHTML = [
    ...names.map((item) => `<option value="${item}">${item}</option>`),
    `<option value="custom">${state.lang === "zh" ? "自定义" : "Custom"}</option>`,
  ].join("");
  els.customCategoryInput.placeholder = state.lang === "zh" ? "输入自定义分类" : "Custom category";
}

function getLocalizedDefaultCategories() {
  if (state.lang === "zh") {
    return ["日常", "学习", "工作", "其他"];
  }
  return ["Daily", "Study", "Work", "Other"];
}

function switchLanguage(lang) {
  state.lang = lang;
  localStorage.setItem("taskmate-lang", lang);
  applyLanguage();
  renderRuntimeBanner();
  if (state.session) {
    fetchJson("/api/preferences/language", {
      method: "POST",
      body: JSON.stringify({ language: lang }),
    });
  }
  if (state.dashboard) {
    renderDashboard();
  }
}

function applyLanguage() {
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = translations[state.lang][node.dataset.i18n];
  });
  els.langZhBtn.classList.toggle("active", state.lang === "zh");
  els.langEnBtn.classList.toggle("active", state.lang === "en");
  populateSelectors();
  setAuthMode(state.mode);
}

async function loadSession() {
  const session = await fetchJson("/api/session");
  if (!session.ok) {
    state.session = null;
    renderAccount();
    renderGuestDashboard();
    return;
  }
  state.session = session.user || null;
  if (state.session && state.session.language && state.session.language !== state.lang) {
    state.lang = state.session.language;
    localStorage.setItem("taskmate-lang", state.lang);
    applyLanguage();
  }
  renderAccount();
  if (state.session) {
    await loadDashboard();
  } else {
    renderGuestDashboard();
  }
}

async function loadDashboard() {
  const dashboard = await fetchJson("/api/dashboard");
  if (!dashboard.ok) {
    if (dashboard.status === 401) {
      state.session = null;
      renderAccount();
      renderGuestDashboard();
    }
    return;
  }
  state.dashboard = dashboard;
  populateCategorySelect(dashboard.categories || []);
  renderDashboard();
}

function renderGuestDashboard() {
  state.dashboard = null;
  els.yesterdaySummary.innerHTML = `<strong>${state.lang === "zh" ? "登录后开始记录你的每日节奏" : "Sign in to start tracking your routine"}</strong>`;
  els.migrationBanner.classList.add("hidden");
  els.todayBoard.innerHTML = `<div class="drop-hint">${state.lang === "zh" ? "登录后可把任务拖入今日必做，并保存到数据库。" : "Sign in to drag tasks into today's must-do list and save them."}</div>`;
  els.libraryBoard.innerHTML = `<div class="drop-hint">${state.lang === "zh" ? "登录后可建立任务库、设定日期和分类。" : "Sign in to build your task library and save due dates."}</div>`;
  els.pickerList.innerHTML = "";
  updatePie(0, 0);
  renderMatePreview(null);
}

function renderRuntimeBanner() {
  if (window.location.protocol === "file:") {
    els.runtimeBanner.classList.remove("hidden");
    els.runtimeBanner.textContent =
      state.lang === "zh"
        ? "当前是直接打开本地文件，登录和注册接口不会生效。请先在项目目录运行 `python3 app.py`，再通过 http://127.0.0.1:8000 打开网站。"
        : "You're opening the page as a local file, so login and signup cannot work. Run `python3 app.py` in this folder first, then open http://127.0.0.1:8000.";
    return;
  }

  if (state.apiUnavailable) {
    els.runtimeBanner.classList.remove("hidden");
    els.runtimeBanner.textContent =
      state.lang === "zh"
        ? "当前无法连接到本地服务。请确认已经在项目目录启动 `python3 app.py`，然后重新打开 http://127.0.0.1:8000。"
        : "The local service is unavailable. Start `python3 app.py` in this project folder, then reopen http://127.0.0.1:8000.";
    return;
  }

  els.runtimeBanner.classList.add("hidden");
  els.runtimeBanner.textContent = "";
}

function renderAccount() {
  if (!state.session) {
    els.accountSummary.innerHTML = `
      <strong>${translations[state.lang]["account.guest"]}</strong>
      <span>${translations[state.lang]["account.guestHint"]}</span>
    `;
    els.logoutBtn.classList.add("hidden");
    els.openAuthBtn.classList.remove("hidden");
    return;
  }

  els.accountSummary.innerHTML = `
    <strong>${escapeHtml(state.session.display_name)}</strong>
    <span>@${escapeHtml(state.session.username)}</span>
  `;
  els.logoutBtn.classList.remove("hidden");
  els.openAuthBtn.classList.add("hidden");
}

function renderDashboard() {
  const { yesterday_summary: summary, carryover_tasks: carryover, library_tasks: libraryTasks, today_tasks: todayTasks, ai_profile: ai } = state.dashboard;

  renderYesterdaySummary(summary);
  renderCarryoverBanner(carryover);
  renderTodayBoard(todayTasks);
  renderLibraryBoard(libraryTasks);
  renderTaskPicker(libraryTasks);
  renderMatePreview(ai);
  updateStats(todayTasks);
}

function renderYesterdaySummary(summary) {
  const text =
    state.lang === "zh"
      ? `昨天你完成了 ${summary.completed_count} 项任务，未完成 ${summary.unfinished_count} 项。${summary.completed_count > 0 ? "继续保持这个节奏，你真的在前进。" : "没关系，今天我们重新开始。"}`
      : `Yesterday you finished ${summary.completed_count} task(s) and left ${summary.unfinished_count} unfinished. ${summary.completed_count > 0 ? "You're building momentum." : "That's okay, today is a fresh start."}`;
  els.yesterdaySummary.innerHTML = `<strong>${state.lang === "zh" ? "昨日总结" : "Yesterday recap"}</strong><p>${text}</p>`;
}

function renderCarryoverBanner(carryover) {
  if (!carryover.length) {
    els.migrationBanner.classList.add("hidden");
    return;
  }

  els.migrationBanner.classList.remove("hidden");
  els.migrationBanner.innerHTML = `
    <strong>${state.lang === "zh" ? "发现昨日未完成任务" : "Unfinished tasks from yesterday detected"}</strong>
    <p>${state.lang === "zh" ? `共有 ${carryover.length} 项任务未完成，要迁移到今天吗？` : `${carryover.length} unfinished task(s) can be moved to today. Move them now?`}</p>
    <div class="section-actions">
      <button id="migrateYesBtn" class="primary-btn">${state.lang === "zh" ? "迁移到今日" : "Move to today"}</button>
      <button id="migrateNoBtn" class="secondary-btn">${state.lang === "zh" ? "暂不迁移" : "Not now"}</button>
    </div>
  `;
  document.querySelector("#migrateYesBtn").addEventListener("click", migrateCarryoverTasks);
  document.querySelector("#migrateNoBtn").addEventListener("click", dismissCarryoverTasks);
}

function renderTodayBoard(tasks) {
  const grouped = groupByCategory(tasks);
  const categories = Object.keys(grouped).length ? Object.keys(grouped) : getLocalizedDefaultCategories();
  els.todayBoard.innerHTML = categories
    .map((category) => {
      const items = grouped[category] || [];
      return `
        <div class="today-category-group" data-category="${escapeHtml(category)}">
          <div class="today-item-meta">
            <strong>${escapeHtml(category)}</strong>
            <span class="task-chip">${items.length} ${state.lang === "zh" ? "项" : "items"}</span>
          </div>
          <div class="group-dropzone" data-drop-category="${escapeHtml(category)}">
            ${
              items.length
                ? items
                    .map(
                      (task) => `
                  <article class="today-card ${task.completed ? "completed" : ""}" data-task-id="${task.id}">
                    <div class="task-title ${task.completed ? "completed" : ""}">${escapeHtml(task.title)}</div>
                    <p>${formatTaskMeta(task)}</p>
                    <div class="task-chip-row">
                      <span class="task-chip">${task.is_one_time ? (state.lang === "zh" ? "单次" : "One-time") : state.lang === "zh" ? "可重复" : "Repeatable"}</span>
                      <button class="pill-btn remove-today-btn" data-task-id="${task.id}">${state.lang === "zh" ? "移出今日" : "Remove"}</button>
                    </div>
                  </article>
                `
                    )
                    .join("")
                : `<div class="drop-hint">${state.lang === "zh" ? "可从任务库拖动任务到这里" : "Drag tasks from the library here"}</div>`
            }
          </div>
        </div>
      `;
    })
    .join("");

  document.querySelectorAll(".group-dropzone").forEach((zone) => {
    zone.addEventListener("dragover", (event) => event.preventDefault());
    zone.addEventListener("drop", async (event) => {
      event.preventDefault();
      const taskId = event.dataTransfer.getData("text/plain");
      await moveTaskToToday(taskId);
    });
  });

  document.querySelectorAll(".today-card").forEach((card) => {
    card.addEventListener("dblclick", async () => toggleTaskComplete(card.dataset.taskId));
  });

  document.querySelectorAll(".remove-today-btn").forEach((button) => {
    button.addEventListener("click", async () => {
      await updateTask(button.dataset.taskId, { in_today: false });
    });
  });
}

function renderLibraryBoard(tasks) {
  const grouped = groupByCategory(tasks);
  const categories = Object.keys(grouped);
  els.libraryBoard.innerHTML = categories
    .map((category) => {
      const items = grouped[category] || [];
      return `
        <div class="library-category-group">
          <div class="today-item-meta">
            <strong>${escapeHtml(category)}</strong>
            <span class="task-chip">${items.length} ${state.lang === "zh" ? "项" : "items"}</span>
          </div>
          <div class="group-dropzone">
            ${items
              .map(
                (task) => `
                <article class="library-card" draggable="true" data-drag-task-id="${task.id}">
                  <div class="task-title">${escapeHtml(task.title)}</div>
                  <p>${formatTaskMeta(task)}</p>
                  <div class="task-chip-row">
                    <span class="task-chip">${task.in_today ? (state.lang === "zh" ? "已在今日" : "In today") : state.lang === "zh" ? "未加入今日" : "Not in today"}</span>
                    <button class="pill-btn move-today-btn" data-task-id="${task.id}">${state.lang === "zh" ? "加入今日" : "Move to today"}</button>
                  </div>
                </article>
              `
              )
              .join("")}
          </div>
        </div>
      `;
    })
    .join("");

  document.querySelectorAll("[data-drag-task-id]").forEach((card) => {
    card.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", card.dataset.dragTaskId);
    });
  });

  document.querySelectorAll(".move-today-btn").forEach((button) => {
    button.addEventListener("click", async () => moveTaskToToday(button.dataset.taskId));
  });
}

function renderTaskPicker(tasks) {
  const available = tasks.filter((task) => !task.in_today);
  els.pickerList.innerHTML = available.length
    ? available
        .map(
          (task) => `
        <div class="picker-item">
          <strong>${escapeHtml(task.title)}</strong>
          <p>${formatTaskMeta(task)}</p>
          <button class="picker-btn" data-pick-task-id="${task.id}">${state.lang === "zh" ? "加入今日" : "Add to today"}</button>
        </div>
      `
        )
        .join("")
    : `<div class="drop-hint">${state.lang === "zh" ? "任务库里的任务都已经安排进今日任务了。" : "All library tasks are already scheduled for today."}</div>`;

  document.querySelectorAll("[data-pick-task-id]").forEach((button) => {
    button.addEventListener("click", async () => {
      await moveTaskToToday(button.dataset.pickTaskId);
      closeModal("picker");
    });
  });
}

function renderMatePreview(ai) {
  const profile = ai || {
    mate_name: "Taskmate",
    user_nickname: state.lang === "zh" ? "同学" : "friend",
    gender: state.lang === "zh" ? "中性" : "Neutral",
    personality: state.lang === "zh" ? "温柔鼓励" : "Gentle",
    hair_style: state.lang === "zh" ? "短发" : "Short hair",
    face_style: state.lang === "zh" ? "温柔微笑" : "Soft smile",
    outfit_style: state.lang === "zh" ? "针织外套" : "Cardigan",
  };

  els.mateName.textContent = profile.mate_name || "Taskmate";
  els.mateSummary.textContent =
    state.lang === "zh"
      ? `${profile.mate_name} 会叫你“${profile.user_nickname}”，是 ${profile.personality} 的 ${profile.gender} 形象，搭配 ${profile.hair_style}、${profile.face_style} 和 ${profile.outfit_style}。`
      : `${profile.mate_name} calls you "${profile.user_nickname}". The mate is ${profile.personality.toLowerCase()}, ${profile.gender.toLowerCase()}, with ${profile.hair_style.toLowerCase()}, ${profile.face_style.toLowerCase()}, and a ${profile.outfit_style.toLowerCase()}.`;
  els.dailyMatePrompt.textContent = createDailyMatePrompt(profile);
  applyMateAvatar(profile);
  syncMateForm(profile);
}

function applyMateAvatar(profile) {
  const hair = els.mateAvatar.querySelector(".avatar-hair");
  const face = els.mateAvatar.querySelector(".avatar-face");
  const outfit = els.mateAvatar.querySelector(".avatar-outfit");
  const hairMap = {
    "短发": "54px 54px 24px 24px",
    "Short hair": "54px 54px 24px 24px",
    "长发": "62px 62px 18px 18px",
    "Long hair": "62px 62px 18px 18px",
    "双马尾": "50px 50px 26px 26px",
    "Twin tails": "50px 50px 26px 26px",
    "卷发": "58px 58px 32px 32px",
    "Wavy hair": "58px 58px 32px 32px",
  };
  const outfitMap = {
    "学院制服": "#7fa86b",
    "School uniform": "#7fa86b",
    "针织外套": "#96be77",
    "Cardigan": "#96be77",
    "森林斗篷": "#547d49",
    "Forest cape": "#547d49",
    "简约卫衣": "#6c958c",
    "Simple hoodie": "#6c958c",
  };
  hair.style.borderRadius = hairMap[profile.hair_style] || "60px 60px 28px 28px";
  hair.style.background = profile.gender.includes("男") || profile.gender === "Male" ? "#45634a" : "#3e5f34";
  face.style.borderRadius = profile.face_style.includes("清冷") || profile.face_style.includes("Cool") ? "36px" : "40px 40px 34px 34px";
  outfit.style.background = outfitMap[profile.outfit_style] || "#7fa86b";
}

function createDailyMatePrompt(profile) {
  const stats = computeTodayStats(state.dashboard ? state.dashboard.today_tasks : []);
  if (state.lang === "zh") {
    return `${profile.user_nickname}，我是 ${profile.mate_name}。今天还有 ${stats.pending} 项任务没完成，先从最容易开始的一件出发，我会陪你走完今天。`;
  }
  return `${profile.user_nickname}, I'm ${profile.mate_name}. You still have ${stats.pending} task(s) left today. Start with the easiest one, and I'll stay with you through the day.`;
}

function updateStats(todayTasks) {
  const stats = computeTodayStats(todayTasks);
  updatePie(stats.completed, stats.total);
  els.todayStatsText.textContent =
    state.lang === "zh"
      ? `已完成 ${stats.completed} 项，未完成 ${stats.pending} 项。`
      : `${stats.completed} done, ${stats.pending} remaining.`;
  els.matePraise.textContent =
    state.lang === "zh"
      ? `完成任务后，Taskmate 会在这里夸奖你，并提醒你今天还剩下多少任务以及多少时间。`
      : `Taskmate will praise you here whenever you finish a task, and remind you how many tasks and how much time remain today.`;
}

function computeTodayStats(tasks) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  return { total, completed, pending: Math.max(total - completed, 0) };
}

function updatePie(completed, total) {
  const ratio = total ? completed / total : 0;
  const deg = Math.round(ratio * 360);
  els.progressPie.style.background = `conic-gradient(var(--forest) ${deg}deg, rgba(47, 107, 61, 0.12) ${deg}deg)`;
  els.progressText.textContent = `${Math.round(ratio * 100)}%`;
}

function formatTaskMeta(task) {
  const dueDate = task.due_date || (state.lang === "zh" ? "未设置日期" : "No date");
  const status = task.completed ? (state.lang === "zh" ? "已完成" : "Completed") : state.lang === "zh" ? "未完成" : "Pending";
  return `${state.lang === "zh" ? "日期" : "Date"}: ${dueDate} · ${status}`;
}

function groupByCategory(tasks) {
  return tasks.reduce((acc, task) => {
    acc[task.category] = acc[task.category] || [];
    acc[task.category].push(task);
    return acc;
  }, {});
}

function openModal(name) {
  els[`${name}Modal`].classList.remove("hidden");
}

function closeModal(name) {
  els[`${name}Modal`].classList.add("hidden");
}

function setAuthMode(mode) {
  state.mode = mode;
  const isRegister = mode === "register";
  els.loginTabBtn.classList.toggle("active", !isRegister);
  els.registerTabBtn.classList.toggle("active", isRegister);
  els.displayNameWrap.classList.toggle("hidden", !isRegister);
  els.authSubmitBtn.textContent = translations[state.lang][isRegister ? "auth.registerAction" : "auth.loginAction"];
  els.authMessage.textContent = "";
}

async function submitAuthForm(event) {
  event.preventDefault();
  const payload = {
    username: els.authUsername.value.trim(),
    password: els.authPassword.value.trim(),
    display_name: els.authDisplayName.value.trim(),
    language: state.lang,
  };
  const endpoint = state.mode === "register" ? "/api/register" : "/api/login";
  const response = await fetchJson(endpoint, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    els.authMessage.textContent =
      response.error ||
      (state.lang === "zh" ? "登录请求失败，请确认本地服务已经启动。" : "Authentication failed. Please make sure the local server is running.");
    return;
  }

  state.session = response.user;
  closeModal("auth");
  renderAccount();
  await loadDashboard();
  showToast(state.lang === "zh" ? "欢迎来到 Taskmate 森林空间。" : "Welcome to the Taskmate forest.");
}

async function logout() {
  await fetchJson("/api/logout", { method: "POST" });
  state.session = null;
  state.dashboard = null;
  renderAccount();
  renderGuestDashboard();
}

async function submitLibraryTask(event) {
  event.preventDefault();
  if (!requireLogin()) {
    return;
  }

  const selectedCategory = els.taskCategorySelect.value;
  const category = selectedCategory === "custom" ? els.customCategoryInput.value.trim() : selectedCategory;
  const payload = {
    title: els.taskTitleInput.value.trim(),
    category,
    due_date: els.taskDateInput.value,
    is_one_time: els.taskSingleInput.checked,
  };

  if (!payload.title || !payload.category) {
    showToast(state.lang === "zh" ? "请先填写任务名称和类别。" : "Please fill in task name and category.");
    return;
  }

  const response = await fetchJson("/api/tasks", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    els.libraryForm.reset();
    els.taskSingleInput.checked = true;
    await loadDashboard();
    showToast(state.lang === "zh" ? "任务已加入任务库。" : "Task added to the library.");
  }
}

async function quickAddTodayTask() {
  if (!requireLogin()) {
    return;
  }

  const title = window.prompt(state.lang === "zh" ? "输入今天想完成的任务" : "Enter a task for today");
  if (!title) {
    return;
  }

  const category = window.prompt(
    state.lang === "zh" ? "输入任务类别（如 学习 / 工作）" : "Enter a category (e.g. Study / Work)",
    getLocalizedDefaultCategories()[0]
  );

  await fetchJson("/api/tasks", {
    method: "POST",
    body: JSON.stringify({
      title: title.trim(),
      category: (category || getLocalizedDefaultCategories()[0]).trim(),
      due_date: todayKey(),
      is_one_time: true,
      in_today: true,
    }),
  });
  await loadDashboard();
}

function openTaskPicker() {
  if (!requireLogin()) {
    return;
  }
  openModal("picker");
}

async function moveTaskToToday(taskId) {
  await updateTask(taskId, { in_today: true, due_date: todayKey() });
}

async function toggleTaskComplete(taskId) {
  const task = state.dashboard.today_tasks.find((item) => String(item.id) === String(taskId));
  if (!task) {
    return;
  }

  await updateTask(taskId, { completed: !task.completed });
  const refreshedTask = state.dashboard.today_tasks.find((item) => String(item.id) === String(taskId));
  if (refreshedTask && refreshedTask.completed) {
    const stats = computeTodayStats(state.dashboard.today_tasks);
    const hoursLeft = calculateHoursLeft();
    const ai = state.dashboard.ai_profile;
    const name = ai ? ai.mate_name : "Taskmate";
    els.matePraise.textContent =
      state.lang === "zh"
        ? `${name}：太棒了，这项任务已经完成。你今天还剩 ${stats.pending} 项任务，距离今天结束还有 ${hoursLeft} 小时。`
        : `${name}: Great job, that task is done. You have ${stats.pending} task(s) left today, with about ${hoursLeft} hour(s) remaining.`;
    showToast(els.matePraise.textContent);
  }
}

function calculateHoursLeft() {
  const now = new Date();
  const end = new Date();
  end.setHours(24, 0, 0, 0);
  return Math.max(1, Math.floor((end - now) / 3600000));
}

async function updateTask(taskId, payload) {
  await fetchJson(`/api/tasks/${taskId}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });
  await loadDashboard();
}

async function handleOpenMateSettings() {
  if (!requireLogin()) {
    return;
  }
  openModal("mate");
}

function syncMateForm(profile) {
  els.mateNickname.value = profile.mate_name || "";
  els.mateUserCall.value = profile.user_nickname || "";
  setSelectValue(els.mateGender, profile.gender);
  setSelectValue(els.matePersonality, profile.personality);
  setSelectValue(els.mateHair, profile.hair_style);
  setSelectValue(els.mateFace, profile.face_style);
  setSelectValue(els.mateOutfit, profile.outfit_style);
}

function setSelectValue(select, value) {
  if ([...select.options].some((option) => option.value === value)) {
    select.value = value;
  }
}

function randomizeMateForm() {
  els.mateGender.selectedIndex = randomIndex(els.mateGender.options.length);
  els.matePersonality.selectedIndex = randomIndex(els.matePersonality.options.length);
  els.mateHair.selectedIndex = randomIndex(els.mateHair.options.length);
  els.mateFace.selectedIndex = randomIndex(els.mateFace.options.length);
  els.mateOutfit.selectedIndex = randomIndex(els.mateOutfit.options.length);
  if (!els.mateNickname.value) {
    els.mateNickname.value = state.lang === "zh" ? "森森" : "Mossy";
  }
  if (!els.mateUserCall.value) {
    els.mateUserCall.value = state.lang === "zh" ? "同学" : "friend";
  }
}

async function submitMateForm(event) {
  event.preventDefault();
  const payload = {
    gender: els.mateGender.value,
    personality: els.matePersonality.value,
    mate_name: els.mateNickname.value.trim() || "Taskmate",
    user_nickname: els.mateUserCall.value.trim() || (state.lang === "zh" ? "同学" : "friend"),
    hair_style: els.mateHair.value,
    face_style: els.mateFace.value,
    outfit_style: els.mateOutfit.value,
  };
  await fetchJson("/api/ai-profile", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  closeModal("mate");
  await loadDashboard();
  showToast(state.lang === "zh" ? "AI mate 设定已保存。" : "AI mate settings saved.");
}

async function migrateCarryoverTasks() {
  await fetchJson("/api/tasks/migrate-carryover", { method: "POST" });
  await loadDashboard();
}

async function dismissCarryoverTasks() {
  await fetchJson("/api/tasks/dismiss-carryover", { method: "POST" });
  await loadDashboard();
}

function requireLogin() {
  if (state.session) {
    return true;
  }
  openModal("auth");
  showToast(state.lang === "zh" ? "请先登录后再继续。" : "Please log in first.");
  return false;
}

function randomIndex(max) {
  return Math.floor(Math.random() * max);
}

function todayKey() {
  return new Date().toLocaleDateString("sv-SE");
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => els.toast.classList.remove("show"), 3600);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function fetchJson(url, options = {}) {
  try {
    const response = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      ...options,
    });
    const data = await response.json();
    state.apiUnavailable = false;
    renderRuntimeBanner();
    return { ok: response.ok, status: response.status, ...data };
  } catch (error) {
    state.apiUnavailable = true;
    renderRuntimeBanner();
    return {
      ok: false,
      status: 0,
      error:
        state.lang === "zh"
          ? "无法连接到本地服务，请先运行 python3 app.py。"
          : "Cannot reach the local service. Please run python3 app.py first.",
    };
  }
}
