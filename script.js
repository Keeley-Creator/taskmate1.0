const DEFAULT_CATEGORY_KEYS = ["daily", "study", "work", "other"];

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
    "mate.species": "蛋的动物原型",
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
    "nav.library": "Task Library",
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
    "mate.species": "Animal origin of the egg",
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

const localizedPresets = {
  zh: {
    categories: { daily: "日常", study: "学习", work: "工作", other: "其他" },
    personalities: ["温柔鼓励", "理性监督", "活泼元气", "安静治愈"],
    genders: ["女孩子", "男孩子", "中性"],
    species: [
      { value: "dog", label: "小狗", emoji: "🐶" },
      { value: "cat", label: "小猫", emoji: "🐱" },
      { value: "lion", label: "狮子", emoji: "🦁" },
      { value: "tiger", label: "老虎", emoji: "🐯" },
      { value: "dragon", label: "龙", emoji: "🐲" },
      { value: "rabbit", label: "兔子", emoji: "🐰" },
    ],
    hair: ["短发", "长发", "双马尾", "卷发"],
    face: ["元气笑脸", "温柔微笑", "清冷表情", "认真神情"],
    outfit: ["学院制服", "针织外套", "森林斗篷", "简约卫衣"],
    foods: {
      cotton: { name: "棉花糖", hint: "更偏温柔" },
      durian: { name: "榴莲", hint: "更偏毒舌" },
      energy: { name: "能量饮料", hint: "更偏活力" },
      syringe: { name: "针头", hint: "更偏冷漠" },
    },
  },
  en: {
    categories: { daily: "Daily", study: "Study", work: "Work", other: "Other" },
    personalities: ["Gentle", "Disciplined", "Energetic", "Calm"],
    genders: ["Female", "Male", "Neutral"],
    species: [
      { value: "dog", label: "Dog", emoji: "🐶" },
      { value: "cat", label: "Cat", emoji: "🐱" },
      { value: "lion", label: "Lion", emoji: "🦁" },
      { value: "tiger", label: "Tiger", emoji: "🐯" },
      { value: "dragon", label: "Dragon", emoji: "🐲" },
      { value: "rabbit", label: "Rabbit", emoji: "🐰" },
    ],
    hair: ["Short hair", "Long hair", "Twin tails", "Wavy hair"],
    face: ["Bright smile", "Soft smile", "Cool face", "Focused look"],
    outfit: ["School uniform", "Cardigan", "Forest cape", "Simple hoodie"],
    foods: {
      cotton: { name: "Marshmallow", hint: "warmer mood" },
      durian: { name: "Durian", hint: "sharper tongue" },
      energy: { name: "Energy drink", hint: "more lively" },
      syringe: { name: "Needle", hint: "colder mood" },
    },
  },
};

const feedMoodMap = {
  cotton: { zh: "温柔", en: "gentle" },
  durian: { zh: "毒舌", en: "sharp-tongued" },
  energy: { zh: "活力", en: "energetic" },
  syringe: { zh: "冷漠", en: "aloof" },
};

const presetTranslationGroups = {
  category: {
    zh: localizedPresets.zh.categories,
    en: localizedPresets.en.categories,
  },
  gender: {
    zh: localizedPresets.zh.genders,
    en: localizedPresets.en.genders,
  },
  personality: {
    zh: localizedPresets.zh.personalities,
    en: localizedPresets.en.personalities,
  },
  hair: {
    zh: localizedPresets.zh.hair,
    en: localizedPresets.en.hair,
  },
  face: {
    zh: localizedPresets.zh.face,
    en: localizedPresets.en.face,
  },
  outfit: {
    zh: localizedPresets.zh.outfit,
    en: localizedPresets.en.outfit,
  },
};

const speciesEmojiStages = {
  dog: { egg: "🥚", juvenile: "🐶", young: "🐕", adult: "🐕", legend: "🐕" },
  cat: { egg: "🥚", juvenile: "🐱", young: "🐈", adult: "🐈", legend: "🐈" },
  lion: { egg: "🥚", juvenile: "🦁", young: "🦁", adult: "🦁", legend: "🦁" },
  tiger: { egg: "🥚", juvenile: "🐯", young: "🐅", adult: "🐅", legend: "🐅" },
  dragon: { egg: "🥚", juvenile: "🐲", young: "🐉", adult: "🐉", legend: "🐉" },
  rabbit: { egg: "🥚", juvenile: "🐰", young: "🐇", adult: "🐇", legend: "🐇" },
};

const defaultPetState = {
  species: "dog",
  growthPoints: 0,
  spentCredits: 0,
  feedCounts: { cotton: 0, durian: 0, energy: 0, syringe: 0 },
  lastFedDate: "",
  lastNeglectCheck: "",
  lastComplaint: "",
  setupDone: false,
};

const defaultGuideState = {
  taskmateSetup: false,
  firstTaskAdded: false,
  firstTaskCompleted: false,
};

const state = {
  lang: localStorage.getItem("taskmate-lang") || "zh",
  mode: "login",
  session: null,
  dashboard: null,
  apiUnavailable: false,
  expandedTasks: new Set(),
  customCategoryActive: false,
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
  taskCategoryPresetGroup: document.querySelector("#taskCategoryPresetGroup"),
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
  mateStage: document.querySelector("#mateStage"),
  mateSummary: document.querySelector("#mateSummary"),
  dailyMatePrompt: document.querySelector("#dailyMatePrompt"),
  feedPanel: document.querySelector("#feedPanel"),
  onboardingCard: document.querySelector("#onboardingCard"),
  mateForm: document.querySelector("#mateForm"),
  langZhBtn: document.querySelector("#langZhBtn"),
  langEnBtn: document.querySelector("#langEnBtn"),
  mateSpecies: document.querySelector("#mateSpecies"),
  mateSpeciesGroup: document.querySelector("#mateSpeciesGroup"),
  mateGender: document.querySelector("#mateGender"),
  mateGenderGroup: document.querySelector("#mateGenderGroup"),
  matePersonality: document.querySelector("#matePersonality"),
  matePersonalityGroup: document.querySelector("#matePersonalityGroup"),
  mateNickname: document.querySelector("#mateNickname"),
  mateUserCall: document.querySelector("#mateUserCall"),
  mateHair: document.querySelector("#mateHair"),
  mateHairGroup: document.querySelector("#mateHairGroup"),
  mateFace: document.querySelector("#mateFace"),
  mateFaceGroup: document.querySelector("#mateFaceGroup"),
  mateOutfit: document.querySelector("#mateOutfit"),
  mateOutfitGroup: document.querySelector("#mateOutfitGroup"),
  randomizeMateBtn: document.querySelector("#randomizeMateBtn"),
  mateAvatar: document.querySelector("#mateAvatar"),
  petCore: document.querySelector("#petCore"),
  petPattern: document.querySelector("#petPattern"),
  petSpeciesBadge: document.querySelector("#petSpeciesBadge"),
  petAccessory: document.querySelector("#petAccessory"),
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

function t(key) {
  return translations[state.lang][key] || key;
}

function presets() {
  return localizedPresets[state.lang];
}

function getLocalizedDefaultCategories() {
  return DEFAULT_CATEGORY_KEYS.map((key) => presets().categories[key]);
}

function translatePresetValue(type, value, targetLang = state.lang) {
  if (!value) {
    return value;
  }

  const group = presetTranslationGroups[type];
  if (!group) {
    return value;
  }

  if (type === "category") {
    for (const key of DEFAULT_CATEGORY_KEYS) {
      if (group.zh[key] === value || group.en[key] === value) {
        return group[targetLang][key];
      }
    }
    return value;
  }

  const zhList = group.zh;
  const enList = group.en;
  const zhIndex = zhList.indexOf(value);
  if (zhIndex >= 0) {
    return group[targetLang][zhIndex];
  }
  const enIndex = enList.indexOf(value);
  if (enIndex >= 0) {
    return group[targetLang][enIndex];
  }
  return value;
}

function normalizeProfileForLanguage(ai) {
  if (!ai) {
    return null;
  }

  return {
    ...ai,
    gender: translatePresetValue("gender", ai.gender),
    personality: translatePresetValue("personality", ai.personality),
    hair_style: translatePresetValue("hair", ai.hair_style),
    face_style: translatePresetValue("face", ai.face_style),
    outfit_style: translatePresetValue("outfit", ai.outfit_style),
  };
}

function displayCategory(category) {
  return translatePresetValue("category", category);
}

function populateSelectors() {
  const preset = presets();
  populateCategorySelect([]);
  populateSimpleSelect(els.mateSpecies, preset.species.map((item) => item.value));
  populateSimpleSelect(els.mateGender, preset.genders);
  populateSimpleSelect(els.matePersonality, preset.personalities);
  populateSimpleSelect(els.mateHair, preset.hair);
  populateSimpleSelect(els.mateFace, preset.face);
  populateSimpleSelect(els.mateOutfit, preset.outfit);
  renderChipGroups();
}

function populateSimpleSelect(select, items) {
  const previousValue = select.value;
  select.innerHTML = items.map((item) => `<option value="${item}">${item}</option>`).join("");
  if (items.includes(previousValue)) {
    select.value = previousValue;
  } else if (items.length) {
    select.value = items[0];
  }
}

function renderChipGroups() {
  renderSelectableChips({
    container: els.taskCategoryPresetGroup,
    select: els.taskCategorySelect,
    items: [
      ...getLocalizedDefaultCategories().map((item) => ({ value: item, label: item })),
      { value: "custom", label: state.lang === "zh" ? "自定义" : "Custom" },
    ],
    selected: els.taskCategorySelect.value || getLocalizedDefaultCategories()[0],
    onSelect: (value) => {
      els.taskCategorySelect.value = value;
      state.customCategoryActive = value === "custom";
      els.customCategoryInput.classList.toggle("hidden", !state.customCategoryActive);
    },
  });

  renderSelectableChips({
    container: els.mateSpeciesGroup,
    select: els.mateSpecies,
    items: presets().species.map((item) => ({ value: item.value, label: `${item.emoji} ${item.label}` })),
    selected: els.mateSpecies.value || presets().species[0].value,
  });

  [
    [els.mateGenderGroup, els.mateGender, presets().genders],
    [els.matePersonalityGroup, els.matePersonality, presets().personalities],
    [els.mateHairGroup, els.mateHair, presets().hair],
    [els.mateFaceGroup, els.mateFace, presets().face],
    [els.mateOutfitGroup, els.mateOutfit, presets().outfit],
  ].forEach(([container, select, items]) => {
    renderSelectableChips({
      container,
      select,
      items: items.map((item) => ({ value: item, label: item })),
      selected: select.value || items[0],
    });
  });

  els.customCategoryInput.classList.toggle("hidden", els.taskCategorySelect.value !== "custom");
}

function renderSelectableChips({ container, select, items, selected, onSelect }) {
  container.innerHTML = items
    .map(
      (item) => `
        <button type="button" class="option-chip ${item.value === selected ? "active" : ""}" data-chip-value="${escapeHtml(item.value)}">
          ${item.label}
        </button>
      `
    )
    .join("");

  container.querySelectorAll("[data-chip-value]").forEach((button) => {
    button.addEventListener("click", () => {
      select.value = button.dataset.chipValue;
      renderChipGroups();
      if (onSelect) {
        onSelect(button.dataset.chipValue);
      }
    });
  });
}

function populateCategorySelect(extraCategories) {
  const previousValue = els.taskCategorySelect.value;
  const extra = extraCategories.filter((item) => {
    const normalized = translatePresetValue("category", item, "en");
    return !DEFAULT_CATEGORY_KEYS.some((key) => localizedPresets.en.categories[key] === normalized);
  });
  const names = [...getLocalizedDefaultCategories(), ...extra];
  els.taskCategorySelect.innerHTML = [
    ...names.map((item) => `<option value="${item}">${item}</option>`),
    `<option value="custom">${state.lang === "zh" ? "自定义" : "Custom"}</option>`,
  ].join("");
  els.customCategoryInput.placeholder = state.lang === "zh" ? "输入自定义分类" : "Type a custom category";
  if (previousValue === "custom") {
    els.taskCategorySelect.value = "custom";
    return;
  }
  const localizedPrevious = translatePresetValue("category", previousValue);
  if (names.includes(localizedPrevious)) {
    els.taskCategorySelect.value = localizedPrevious;
    return;
  }
  els.taskCategorySelect.value = names[0] || "custom";
}

function switchLanguage(lang) {
  state.lang = lang;
  localStorage.setItem("taskmate-lang", lang);
  normalizeFormValuesForLanguage();
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

function normalizeFormValuesForLanguage() {
  if (els.taskCategorySelect.value && els.taskCategorySelect.value !== "custom") {
    els.taskCategorySelect.value = translatePresetValue("category", els.taskCategorySelect.value);
  }
  if (els.mateGender.value) {
    els.mateGender.value = translatePresetValue("gender", els.mateGender.value);
  }
  if (els.matePersonality.value) {
    els.matePersonality.value = translatePresetValue("personality", els.matePersonality.value);
  }
  if (els.mateHair.value) {
    els.mateHair.value = translatePresetValue("hair", els.mateHair.value);
  }
  if (els.mateFace.value) {
    els.mateFace.value = translatePresetValue("face", els.mateFace.value);
  }
  if (els.mateOutfit.value) {
    els.mateOutfit.value = translatePresetValue("outfit", els.mateOutfit.value);
  }
}

function applyLanguage() {
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  els.langZhBtn.classList.toggle("active", state.lang === "zh");
  els.langEnBtn.classList.toggle("active", state.lang === "en");
  els.taskTitleInput.placeholder = state.lang === "zh" ? "例如：整理英语错题" : "For example: revise English mistakes";
  els.taskDateInput.title = state.lang === "zh" ? "计划日期" : "Planned date";
  els.authUsername.placeholder = state.lang === "zh" ? "输入用户名" : "Enter username";
  els.authDisplayName.placeholder = state.lang === "zh" ? "输入显示名" : "Enter display name";
  els.authPassword.placeholder = state.lang === "zh" ? "输入密码" : "Enter password";
  els.mateNickname.placeholder = state.lang === "zh" ? "例如：小森" : "For example: Moss";
  els.mateUserCall.placeholder = state.lang === "zh" ? "例如：小秋" : "For example: Keeley";
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
  processPetNeglect();
  renderDashboard();
}

function renderGuestDashboard() {
  state.dashboard = null;
  els.yesterdaySummary.innerHTML = `<strong>${state.lang === "zh" ? "登录后开始记录你的每日节奏" : "Sign in to start tracking your routine"}</strong>`;
  els.migrationBanner.classList.add("hidden");
  els.onboardingCard.classList.add("hidden");
  els.todayBoard.innerHTML = `<div class="drop-hint">${state.lang === "zh" ? "登录后可把任务拖入今日必做，并保存到数据库。" : "Sign in to drag tasks into today's must-do list and save them."}</div>`;
  els.libraryBoard.innerHTML = `<div class="library-empty">${state.lang === "zh" ? "登录后可以建立你的第一个任务库任务。" : "Sign in to create your first library task."}</div>`;
  els.pickerList.innerHTML = "";
  updatePie(0, 0);
  els.todayStatsText.textContent = state.lang === "zh" ? "登录后开始统计。" : "Statistics appear after login.";
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
      <strong>${t("account.guest")}</strong>
      <span>${t("account.guestHint")}</span>
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
  updateGuideProgress();
  renderOnboardingCard();
  renderYesterdaySummary(summary);
  renderCarryoverBanner(carryover);
  renderTodayBoard(todayTasks);
  renderLibraryBoard(libraryTasks);
  renderTaskPicker(libraryTasks);
  renderMatePreview(normalizeProfileForLanguage(ai));
  updateStats(todayTasks);
}

function updateGuideProgress() {
  if (!state.dashboard || !state.session) {
    return;
  }
  const guide = getGuideState();
  if (state.dashboard.library_tasks.length > 0) {
    guide.firstTaskAdded = true;
  }
  if (state.dashboard.library_tasks.some((task) => task.completed)) {
    guide.firstTaskCompleted = true;
  }
  saveGuideState(guide);
}

function renderOnboardingCard() {
  if (!state.session || !state.dashboard) {
    els.onboardingCard.classList.add("hidden");
    return;
  }

  const guide = getGuideState();
  const steps = [
    {
      done: guide.taskmateSetup,
      title: state.lang === "zh" ? "先设置你的 Taskmate 蛋与性格" : "Set up your Taskmate egg and mood",
    },
    {
      done: guide.firstTaskAdded,
      title: state.lang === "zh" ? "添加任务库里的第一个任务" : "Add your first library task",
    },
    {
      done: guide.firstTaskCompleted,
      title: state.lang === "zh" ? "双击今日任务完成第一步打卡" : "Double-click a today's task to complete it",
    },
  ];

  const allDone = steps.every((item) => item.done);
  els.onboardingCard.classList.toggle("hidden", allDone);
  if (allDone) {
    return;
  }

  els.onboardingCard.innerHTML = `
    <strong>${state.lang === "zh" ? "注册后引导" : "Starter guide"}</strong>
    <p>${state.lang === "zh" ? "按这个顺序完成，会更快进入完整体验。" : "Follow these steps to unlock the full flow faster."}</p>
    <div class="onboarding-list">
      ${steps
        .map(
          (step, index) => `
          <div class="onboarding-step ${step.done ? "done" : ""}">
            <div class="step-dot">${step.done ? "✓" : index + 1}</div>
            <div>${step.title}</div>
          </div>
        `
        )
        .join("")}
    </div>
  `;
}

function renderYesterdaySummary(summary) {
  const pet = getPetState();
  const mood = getDominantMood(pet);
  const text =
    state.lang === "zh"
      ? `昨天你完成了 ${summary.completed_count} 项任务，未完成 ${summary.unfinished_count} 项。${summary.completed_count > 0 ? "继续保持这个节奏，你真的在前进。" : "没关系，今天我们重新开始。"}`
      : `Yesterday you finished ${summary.completed_count} task(s) and left ${summary.unfinished_count} unfinished. ${summary.completed_count > 0 ? "You're building momentum." : "That's okay, today is a fresh start."}`;
  const moodLine =
    pet.lastComplaint ||
    (state.lang === "zh"
      ? `Taskmate 现在更偏${mood}，今天也想等你来照顾。`
      : `Taskmate feels more ${mood} today and wants your attention.`);
  els.yesterdaySummary.innerHTML = `<strong>${state.lang === "zh" ? "昨日总结" : "Yesterday recap"}</strong><p>${text}</p><p>${moodLine}</p>`;
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
      const categoryLabel = displayCategory(category);
      return `
        <div class="today-category-group" data-category="${escapeHtml(category)}">
          <div class="today-item-meta">
            <strong>${escapeHtml(categoryLabel)}</strong>
            <span class="task-chip">${items.length} ${state.lang === "zh" ? "项" : "items"}</span>
          </div>
          <div class="group-dropzone">
            ${
              items.length
                ? items
                    .map(
                      (task) => `
                  <article class="today-card ${task.completed ? "completed" : ""}" data-task-id="${task.id}">
                    <div class="task-title ${task.completed ? "completed" : ""}">${escapeHtml(task.title)}</div>
                    <p>${formatTaskMeta(task)}</p>
                    <div class="task-chip-row">
                      <span class="task-chip">${task.is_one_time ? (state.lang === "zh" ? "单次" : "One-time") : state.lang === "zh" ? "重复" : "Repeatable"}</span>
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
  els.libraryBoard.innerHTML = categories.length
    ? categories
        .map((category) => {
          const items = grouped[category] || [];
          const categoryLabel = displayCategory(category);
          return `
          <div class="library-category-group">
            <div class="today-item-meta">
              <strong>${escapeHtml(categoryLabel)}</strong>
              <span class="task-chip">${items.length} ${state.lang === "zh" ? "项" : "items"}</span>
            </div>
            ${items.map((task) => renderLibraryTaskRow(task)).join("")}
          </div>
        `;
        })
        .join("")
    : `<div class="library-empty">${state.lang === "zh" ? "还没有任务，先创建第一个任务吧。" : "No tasks yet. Create your first one."}</div>`;

  document.querySelectorAll("[data-drag-task-id]").forEach((row) => {
    row.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", row.dataset.dragTaskId);
    });
  });

  document.querySelectorAll("[data-expand-task]").forEach((button) => {
    button.addEventListener("click", () => toggleLibraryExpansion(button.dataset.expandTask));
  });

  document.querySelectorAll("[data-add-today]").forEach((button) => {
    button.addEventListener("click", async () => moveTaskToToday(button.dataset.addToday));
  });

  document.querySelectorAll("[data-edit-task]").forEach((button) => {
    button.addEventListener("click", async () => editLibraryTask(button.dataset.editTask));
  });

  document.querySelectorAll("[data-delete-task]").forEach((button) => {
    button.addEventListener("click", async () => deleteLibraryTask(button.dataset.deleteTask));
  });
}

function renderLibraryTaskRow(task) {
  const expanded = state.expandedTasks.has(String(task.id));
  return `
    <div class="library-item-row" draggable="true" data-drag-task-id="${task.id}">
      <div class="library-row-head">
        <button type="button" class="library-task-name" data-expand-task="${task.id}">
          <span>${escapeHtml(task.title)}</span>
        </button>
        <button type="button" class="icon-btn" data-add-today="${task.id}">+</button>
      </div>
      ${expanded ? renderLibraryExpanded(task) : ""}
    </div>
  `;
}

function renderLibraryExpanded(task) {
  return `
    <div class="library-row-extra">
      <p class="library-meta">${state.lang === "zh" ? "类别" : "Category"}: ${escapeHtml(displayCategory(task.category))} · ${formatTaskMeta(task)}</p>
      <div class="inline-actions">
        <button type="button" class="task-inline-btn" data-edit-task="${task.id}">${state.lang === "zh" ? "重新编辑" : "Edit task"}</button>
        <button type="button" class="task-inline-btn" data-delete-task="${task.id}">${state.lang === "zh" ? "删除任务" : "Delete task"}</button>
      </div>
    </div>
  `;
}

function toggleLibraryExpansion(taskId) {
  const key = String(taskId);
  if (state.expandedTasks.has(key)) {
    state.expandedTasks.delete(key);
  } else {
    state.expandedTasks.add(key);
  }
  renderLibraryBoard(state.dashboard.library_tasks);
}

async function editLibraryTask(taskId) {
  const task = state.dashboard.library_tasks.find((item) => String(item.id) === String(taskId));
  if (!task) {
    return;
  }
  const title = window.prompt(state.lang === "zh" ? "修改任务名称" : "Edit task name", task.title);
  if (!title) {
    return;
  }
  const category = window.prompt(state.lang === "zh" ? "修改任务类别" : "Edit category", displayCategory(task.category));
  if (!category) {
    return;
  }
  const dueDate = window.prompt(
    state.lang === "zh" ? "修改计划日期（YYYY-MM-DD，可留空）" : "Edit due date (YYYY-MM-DD or leave blank)",
    task.due_date || ""
  );
  await updateTask(taskId, { title: title.trim(), category: category.trim(), due_date: dueDate?.trim() || null });
}

async function deleteLibraryTask(taskId) {
  const confirmed = window.confirm(state.lang === "zh" ? "确定删除这个任务吗？" : "Delete this task?");
  if (!confirmed) {
    return;
  }
  await fetchJson(`/api/tasks/${taskId}`, { method: "DELETE" });
  await loadDashboard();
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
  const pet = getPetState();
  const profile = {
    mate_name: ai?.mate_name || "Taskmate",
    user_nickname: ai?.user_nickname || (state.lang === "zh" ? "同学" : "friend"),
    gender: ai?.gender || presets().genders[2],
    personality: ai?.personality || presets().personalities[0],
    hair_style: ai?.hair_style || presets().hair[0],
    face_style: ai?.face_style || presets().face[0],
    outfit_style: ai?.outfit_style || presets().outfit[0],
  };

  const stage = getPetStage(pet.growthPoints);
  const species = presets().species.find((item) => item.value === pet.species) || presets().species[0];
  const currentMood = getDominantMood(pet, profile.personality);
  const currentEmoji = speciesEmojiStages[pet.species]?.[stage] || "🥚";

  els.mateName.textContent = profile.mate_name || "Taskmate";
  els.mateStage.textContent =
    state.lang === "zh"
      ? `当前阶段：${getStageLabel(stage)} · 当前气质：${currentMood}`
      : `Current stage: ${getStageLabel(stage)} · Current mood: ${currentMood}`;
  els.mateSummary.textContent =
    state.lang === "zh"
      ? `${profile.mate_name} 会叫你“${profile.user_nickname}”，蛋的原型是 ${species.label}，目前偏${currentMood}，外观搭配 ${profile.hair_style}、${profile.face_style} 和 ${profile.outfit_style}。`
      : `${profile.mate_name} calls you "${profile.user_nickname}". The egg belongs to a ${species.label.toLowerCase()} line, feels more ${currentMood}, and presents ${profile.hair_style.toLowerCase()}, ${profile.face_style.toLowerCase()}, and ${profile.outfit_style.toLowerCase()}.`;
  els.dailyMatePrompt.textContent = createDailyMatePrompt(profile, pet, currentMood);
  els.petCore.textContent = currentEmoji;
  els.petSpeciesBadge.textContent = `${species.emoji} ${species.label}`;
  els.petPattern.classList.toggle("hidden", pet.growthPoints < 3);
  els.petAccessory.classList.toggle("hidden", pet.growthPoints < 365);
  els.petAccessory.textContent = pet.growthPoints >= 365 ? "🎀" : "✨";
  els.mateAvatar.dataset.stage = stage;
  syncMateForm(profile, pet);
  renderFeedPanel(profile, pet);
}

function renderFeedPanel(profile, pet) {
  const completedCount = state.dashboard ? state.dashboard.library_tasks.filter((task) => task.completed).length : 0;
  const availableFeeds = Math.max(completedCount - pet.spentCredits, 0);
  const foods = presets().foods;
  const complaint = pet.lastComplaint;

  els.feedPanel.innerHTML = `
    <strong>${state.lang === "zh" ? "喂养你的蛋" : "Feed your egg"}</strong>
    <p>
      ${
        state.lang === "zh"
          ? `你目前还有 ${availableFeeds} 次可用喂养机会。完成任务后可以选择不同养料，让 Taskmate 的性格和成长发生变化。`
          : `You currently have ${availableFeeds} feeding chance(s). Complete tasks, then choose food to change Taskmate's growth and mood.`
      }
    </p>
    ${complaint ? `<p>${complaint}</p>` : ""}
    <div class="feed-actions">
      ${Object.entries(foods)
        .map(
          ([key, item]) => `
        <button type="button" class="feed-btn" data-feed-type="${key}" ${availableFeeds === 0 ? "disabled" : ""}>
          <strong>${item.name}</strong>
          <span>${item.hint} · ${pet.feedCounts[key]}</span>
        </button>
      `
        )
        .join("")}
    </div>
  `;

  els.feedPanel.querySelectorAll("[data-feed-type]").forEach((button) => {
    button.addEventListener("click", () => feedPet(button.dataset.feedType, profile));
  });
}

function getPetStage(points) {
  if (points >= 365) return "legend";
  if (points >= 90) return "adult";
  if (points >= 30) return "young";
  if (points >= 7) return "juvenile";
  return "egg";
}

function getStageLabel(stage) {
  const labels = {
    zh: {
      egg: "蛋期",
      juvenile: "幼年体",
      young: "青年体",
      adult: "成熟体",
      legend: "饰品觉醒体",
    },
    en: {
      egg: "Egg",
      juvenile: "Juvenile",
      young: "Young form",
      adult: "Mature form",
      legend: "Accessory form",
    },
  };
  return labels[state.lang][stage];
}

function getDominantMood(pet, fallback) {
  const entries = Object.entries(pet.feedCounts || {});
  const top = entries.sort((a, b) => b[1] - a[1])[0];
  if (!top || top[1] === 0) {
    return fallback || (state.lang === "zh" ? "温柔" : "gentle");
  }
  return feedMoodMap[top[0]][state.lang];
}

function createDailyMatePrompt(profile, pet, mood) {
  const stats = computeTodayStats(state.dashboard ? state.dashboard.today_tasks : []);
  const stage = getStageLabel(getPetStage(pet.growthPoints));
  if (state.lang === "zh") {
    return `${profile.user_nickname}，我是 ${profile.mate_name}。我现在处于${stage}，整体气质更偏${mood}。今天还有 ${stats.pending} 项任务没完成，完成后别忘了回来喂我。`;
  }
  return `${profile.user_nickname}, I'm ${profile.mate_name}. I'm in the ${stage.toLowerCase()} stage and feel more ${mood}. You still have ${stats.pending} task(s) left today, so come back and feed me after you finish one.`;
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
      ? "双击完成任务后，Taskmate 会马上夸奖你，并提醒剩余任务与今天剩余时间。"
      : "Double-click a task to complete it. Taskmate will praise you and show the remaining tasks and time.";
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
    const key = translatePresetValue("category", task.category, "en");
    acc[key] = acc[key] || [];
    acc[key].push(task);
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
  els.authSubmitBtn.textContent = t(isRegister ? "auth.registerAction" : "auth.loginAction");
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

  if (state.mode === "register") {
    saveGuideState(defaultGuideState);
    savePetState(defaultPetState);
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
    els.taskCategorySelect.value = getLocalizedDefaultCategories()[0];
    renderChipGroups();
    const guide = getGuideState();
    guide.firstTaskAdded = true;
    saveGuideState(guide);
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
    state.lang === "zh" ? "输入任务类别（如 学习 / 工作）" : "Enter a category (for example Study or Work)",
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
    const guide = getGuideState();
    guide.firstTaskCompleted = true;
    saveGuideState(guide);
    const stats = computeTodayStats(state.dashboard.today_tasks);
    const hoursLeft = calculateHoursLeft();
    const ai = state.dashboard.ai_profile;
    const name = ai ? ai.mate_name : "Taskmate";
    els.matePraise.textContent =
      state.lang === "zh"
        ? `${name}：太棒了，这项任务已经完成。你今天还剩 ${stats.pending} 项任务，距离今天结束还有 ${hoursLeft} 小时。现在可以去喂蛋了。`
        : `${name}: Great job, that task is done. You have ${stats.pending} task(s) left today, with about ${hoursLeft} hour(s) remaining. You can feed the egg now.`;
    showToast(els.matePraise.textContent);
    renderDashboard();
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

function syncMateForm(profile, pet) {
  els.mateNickname.value = profile.mate_name || "";
  els.mateUserCall.value = profile.user_nickname || "";
  els.mateSpecies.value = pet.species || presets().species[0].value;
  els.mateGender.value = profile.gender;
  els.matePersonality.value = profile.personality;
  els.mateHair.value = profile.hair_style;
  els.mateFace.value = profile.face_style;
  els.mateOutfit.value = profile.outfit_style;
  renderChipGroups();
}

function randomizeMateForm() {
  els.mateSpecies.selectedIndex = randomIndex(els.mateSpecies.options.length);
  els.mateGender.selectedIndex = randomIndex(els.mateGender.options.length);
  els.matePersonality.selectedIndex = randomIndex(els.matePersonality.options.length);
  els.mateHair.selectedIndex = randomIndex(els.mateHair.options.length);
  els.mateFace.selectedIndex = randomIndex(els.mateFace.options.length);
  els.mateOutfit.selectedIndex = randomIndex(els.mateOutfit.options.length);
  if (!els.mateNickname.value) {
    els.mateNickname.value = state.lang === "zh" ? "森森" : "Moss";
  }
  if (!els.mateUserCall.value) {
    els.mateUserCall.value = state.lang === "zh" ? "同学" : "friend";
  }
  renderChipGroups();
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
  const pet = getPetState();
  pet.species = els.mateSpecies.value;
  pet.setupDone = true;
  savePetState(pet);
  const guide = getGuideState();
  guide.taskmateSetup = true;
  saveGuideState(guide);

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

function getPetState() {
  const stored = localStorage.getItem(userScopedKey("pet"));
  return stored ? { ...structuredCloneSafe(defaultPetState), ...JSON.parse(stored) } : structuredCloneSafe(defaultPetState);
}

function savePetState(pet) {
  localStorage.setItem(userScopedKey("pet"), JSON.stringify(pet));
}

function getGuideState() {
  const stored = localStorage.getItem(userScopedKey("guide"));
  return stored ? { ...structuredCloneSafe(defaultGuideState), ...JSON.parse(stored) } : structuredCloneSafe(defaultGuideState);
}

function saveGuideState(guide) {
  localStorage.setItem(userScopedKey("guide"), JSON.stringify(guide));
}

function userScopedKey(suffix) {
  return `taskmate-${state.session?.username || "guest"}-${suffix}`;
}

function processPetNeglect() {
  if (!state.session) {
    return;
  }
  const pet = getPetState();
  const today = todayKey();
  if (pet.lastNeglectCheck === today) {
    return;
  }

  if (pet.lastFedDate) {
    const missedDays = dateDiffInDays(pet.lastFedDate, today);
    if (missedDays > 1) {
      const blocks = Math.floor(missedDays / 3);
      if (blocks > 0) {
        reduceFeedCounts(pet, blocks * 3);
      }
      pet.lastComplaint = createComplaintText(missedDays, getDominantMood(pet));
    } else {
      pet.lastComplaint = "";
    }
  }
  pet.lastNeglectCheck = today;
  savePetState(pet);
}

function reduceFeedCounts(pet, amount) {
  pet.growthPoints = Math.max(0, pet.growthPoints - amount);
  for (let count = 0; count < amount; count += 1) {
    const biggest = Object.entries(pet.feedCounts).sort((a, b) => b[1] - a[1])[0];
    if (!biggest || biggest[1] <= 0) {
      break;
    }
    pet.feedCounts[biggest[0]] -= 1;
  }
}

function createComplaintText(missedDays, mood) {
  if (state.lang === "zh") {
    return missedDays >= 3
      ? `Taskmate 已经 ${missedDays} 天没有被喂养了，现在有点${mood}地抱怨你。每连续 3 天没喂养会扣除 3 份养料。`
      : `Taskmate 超过一天没有被喂养了，正在用有点${mood}的语气提醒你回来看看。`;
  }
  return missedDays >= 3
    ? `Taskmate has gone ${missedDays} day(s) without food and is complaining in a more ${mood} voice. Every 3 missed days remove 3 food points.`
    : `Taskmate has not been fed for over a day and is calling you back in a more ${mood} tone.`;
}

function feedPet(foodKey, profile) {
  const pet = getPetState();
  const completedCount = state.dashboard ? state.dashboard.library_tasks.filter((task) => task.completed).length : 0;
  const availableFeeds = Math.max(completedCount - pet.spentCredits, 0);
  if (availableFeeds <= 0) {
    showToast(state.lang === "zh" ? "先完成任务，再回来喂蛋吧。" : "Finish a task first, then come back to feed the egg.");
    return;
  }

  pet.feedCounts[foodKey] += 1;
  pet.growthPoints += 1;
  pet.spentCredits += 1;
  pet.lastFedDate = todayKey();
  pet.lastNeglectCheck = todayKey();
  pet.lastComplaint = "";
  savePetState(pet);
  renderMatePreview(profile);
  showToast(createFeedToast(foodKey, pet));
}

function createFeedToast(foodKey, pet) {
  const food = presets().foods[foodKey];
  const stage = getStageLabel(getPetStage(pet.growthPoints));
  if (state.lang === "zh") {
    return `${food.name} 已喂给蛋。Taskmate 现在更偏${getDominantMood(pet)}，成长阶段来到${stage}。`;
  }
  return `${food.name} was fed to the egg. Taskmate now feels more ${getDominantMood(pet)} and has reached the ${stage.toLowerCase()} stage.`;
}

function randomIndex(max) {
  return Math.floor(Math.random() * max);
}

function todayKey() {
  return new Date().toLocaleDateString("sv-SE");
}

function dateDiffInDays(a, b) {
  const start = new Date(`${a}T00:00:00`);
  const end = new Date(`${b}T00:00:00`);
  return Math.floor((end - start) / 86400000);
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

function structuredCloneSafe(value) {
  if (typeof structuredClone === "function") {
    return structuredClone(value);
  }
  return JSON.parse(JSON.stringify(value));
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
