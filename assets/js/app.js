
function gaTrack(eventName, params = {}){
  if(typeof gtag !== "function") return;
  gtag("event", eventName, params);
}

function getLevelName(){
  return LEVELS[selectedLevel] ? LEVELS[selectedLevel].name : selectedLevel;
}

function getSymptomName(){
  return current() ? current().name : selectedSymptom;
}

function getProductKey(){
  const productEl = el("product");
  return productEl ? productEl.value : "thinkpad";
}

function ensureSelectionAvailable(){
  const visibleLevels = getVisibleLevelKeys();
  if(!visibleLevels.includes(selectedLevel)){
    selectedLevel = visibleLevels[0];
  }
  const visibleSymptoms = getVisibleSymptomKeys(selectedLevel);
  if(!visibleSymptoms.includes(selectedSymptom)){
    selectedSymptom = visibleSymptoms[0];
  }
}

let selectedLevel = "boot";
let selectedSymptom = "no_power";
let activeModule = "troubleshooting";

// v5.2.8 — Preserve troubleshooting work while navigating between modules.
const TROUBLESHOOTING_SESSION = new Map();

function troubleshootingStateKey(){
  return `${getProductKey()}::${selectedLevel}::${selectedSymptom}`;
}

function saveTroubleshootingState(){
  if(activeModule !== "troubleshooting" || isKnowledgeLevel() || !current()) return;
  const questions = getQuestions();
  const rows = questions.map((question, index) => ({
    select: el(`a${index}`) ? el(`a${index}`).value : "",
    text: el(`t${index}`) ? el(`t${index}`).value : ""
  }));
  TROUBLESHOOTING_SESSION.set(troubleshootingStateKey(), {
    rows,
    additionalDetail: el("additionalDetail") ? el("additionalDetail").value : "",
    note: el("note") ? el("note").value : ""
  });
}

function restoreTroubleshootingState(){
  if(isKnowledgeLevel() || !current()) return;
  const state = TROUBLESHOOTING_SESSION.get(troubleshootingStateKey());
  if(!state) return;
  (state.rows || []).forEach((row, index) => {
    const select = el(`a${index}`);
    const text = el(`t${index}`);
    if(select && row && row.select !== undefined) select.value = row.select;
    if(text && row && row.text !== undefined) text.value = row.text;
  });
  const detail = el("additionalDetail");
  if(detail) detail.value = state.additionalDetail || "";
  if(el("note")) el("note").value = state.note || "";
}

function clearTroubleshootingState(){
  TROUBLESHOOTING_SESSION.delete(troubleshootingStateKey());
}

const CODE_CATEGORIES = {
  "All Codes": [],
  "BIOS / Firmware": [
    "BIOS Password",
    "Supervisor Password",
    "0162 Setup Data Integrity Check Failure",
    "0183 Bad CRC of Security Settings in EFI Variable",
    "0271 Date and Time Error"
  ],
  "Power / Battery": ["0190 Critical Low-Battery Error"],
  "Boot / Storage": [
    "1962 No Operating System Found",
    "2100 Detection Error on Storage Device",
    "2101 Detection Error on HDD",
    "Boot Device Missing"
  ],
  "Network / PXE": [
    "1802 Unauthorized Network Card Is Plugged in",
    "PXE"
  ],
  "System Information": [
    "0188 Invalid Rfid Serialization Information Area",
    "2200 Machine Type and Serial Number Are Invalid",
    "2201 Machine Uuid Is Invalid"
  ],
  "Chassis / Security": ["Button Cover Tamper Detection"]
};

const GUIDE_CATEGORIES = {
  "All": [],
  "Windows": [
    "Uninstall Windows Update", "Safe Mode", "Bypass Windows 11 Oobe", "Sfc /Scannow"
  ],
  "Diagnostics": [
    "Lenovo Diagnostics", "Event Viewer", "Dump File"
  ],
  "Recovery": [
    "Reset This Pc", "Startup Repair", "System Restore", "Re-install Windows"
  ],
  "Power": [
    "Emergency Reset", "Power Reset"
  ],
  "Battery": [
    "Battery Report"
  ],
  "Storage": [
    "SSD Not Found During Install OS"
  ],
  "Display": [
    "LCD Self-Test"
  ],
  "Audio": [
    "Disable Audio Enhancements"
  ],
  "Lenovo Vantage": [
    "Lenovo Vantage Update", "Battery Status", "Reset Battery",
    "Fn & Ctrl Key Swap", "Always on USB", "Lock on Leave Function"
  ],
  "USB / Port": [],
  "Security / Activation": [
    "Windows Product Key", "Windows Activation", "BitLocker Recovery",
    "Microsoft Office Activation"
  ],
  "BIOS / Firmware": [
    "BIOS Version", "BIOS / Supervisor Password", "Downgrade BIOS"
  ],
  "Tools / Commands": []
};

const selectedReferenceCategory = {
  code: "All Codes",
  guide: "All"
};
const selectedReferenceItem = {
  code: null,
  guide: null
};

function el(id){ return document.getElementById(id); }
function forceConclusionRed(){
  const r = el("recommendation");
  if(!r) return;
  r.className = "recommendation recommendation-dispatch";
}

function current(){ return LEVELS[selectedLevel] && LEVELS[selectedLevel].symptoms ? (LEVELS[selectedLevel].symptoms[selectedSymptom] || null) : null; }
function isManual(){ return !!(LEVELS[selectedLevel] && LEVELS[selectedLevel].manual === true); }
function isKnowledgeLevel(){ return selectedLevel === "bios" || selectedLevel === "error" || selectedLevel === "manual"; }
function getKnowledgeText(){
  const section = selectedLevel === "bios" ? "BIOS" : selectedLevel === "error" ? "Code" : "Troubleshooting Guide";
  const item = (typeof KNOWLEDGE_BASE !== "undefined" && KNOWLEDGE_BASE[section]) ? KNOWLEDGE_BASE[section][current().name] : null;
  if(!item) return "No information available.";
  if(section === "Troubleshooting Guide") return item.content || "";
  const causes = Array.isArray(item.possibleCause) ? item.possibleCause.map(x => `• ${x}`).join("\n") : (item.possibleCause || "");
  const actions = Array.isArray(item.recommendedAction) ? item.recommendedAction.map(x => `• ${x}`).join("\n") : (item.recommendedAction || "");
  return `Description\n${item.description || ""}\n\nPossible Cause\n${causes}\n\nRecommended Action\n${actions}`;
}

function withDisplayQuestions(sym){
  if(!sym.display) return sym;
  const common = [
    {label:"BIOS Check", options:"swap"},
    {label:"Move LCD lid", options:"select"},
    {label:"External Monitor Test", options:"swap"},
    {label:"Graphics Driver Update", options:"select"},
    {label:"Physical damage / Liquid spilled", options:"yesno"},
    {label:"Other issue", options:"yesno", text:true}
  ];
  return {...sym, common};
}

// v5.0.0 Final Normalization: canonical checklist labels + runtime de-duplication
// Excel-only data rule (v5.2.7)
// LEVEL 1, SYMPTOM / GUIDE, CHECKLIST, Drop Down, Email TH, Email EN,
// and Related Guide are rendered directly from database.js, which is generated
// from PD_Guide_Database.xlsx. No checklist-name normalization, insertion,
// removal, reordering, or fallback mapping is allowed here.


function referenceConfig(moduleName = activeModule){
  if(moduleName === "code"){
    return {
      module: "code",
      section: "Code",
      listTitle: "ERROR POST",
      categories: CODE_CATEGORIES,
      allCategory: "All Codes",
      emptyText: "No error/post references available."
    };
  }
  return {
    module: "guide",
    section: "Troubleshooting Guide",
    listTitle: "USER GUIDE",
    categories: GUIDE_CATEGORIES,
    allCategory: "All",
    emptyText: "No user guides available."
  };
}

function referenceData(moduleName = activeModule){
  if(moduleName === "code"){
    const codeData = (typeof KNOWLEDGE_BASE !== "undefined" && KNOWLEDGE_BASE["Code"]) ? KNOWLEDGE_BASE["Code"] : {};
    const biosData = (typeof KNOWLEDGE_BASE !== "undefined" && KNOWLEDGE_BASE["BIOS"]) ? KNOWLEDGE_BASE["BIOS"] : {};
    // Keep ERROR POST in the operational reading order. BIOS / Supervisor Password
    // stay near the bottom, immediately before Boot Device Missing.
    const ordered = {};
    let insertedBiosPasswords = false;
    Object.entries(codeData).forEach(([name, item]) => {
      if(name === "Boot Device Missing"){
        ["BIOS Password", "Supervisor Password"].forEach(biosName => {
          if(biosData[biosName]) ordered[biosName] = biosData[biosName];
        });
        insertedBiosPasswords = true;
      }
      ordered[name] = item;
    });
    if(!insertedBiosPasswords){
      ["BIOS Password", "Supervisor Password"].forEach(biosName => {
        if(biosData[biosName]) ordered[biosName] = biosData[biosName];
      });
    }
    return ordered;
  }
  const cfg = referenceConfig(moduleName);
  return (typeof KNOWLEDGE_BASE !== "undefined" && KNOWLEDGE_BASE[cfg.section])
    ? KNOWLEDGE_BASE[cfg.section]
    : {};
}

function referenceCategoryForItem(moduleName, itemName){
  const cfg = referenceConfig(moduleName);
  return Object.entries(cfg.categories)
    .find(([category, names]) => category !== cfg.allCategory && names.includes(itemName))?.[0]
    || cfg.allCategory;
}

function referenceItemsForCategory(moduleName, category){
  const cfg = referenceConfig(moduleName);
  const data = referenceData(moduleName);
  if(category === cfg.allCategory) return Object.keys(data);
  return (cfg.categories[category] || []).filter(name => data[name]);
}

function renderModuleTabs(){
  const tabs = {
    troubleshooting: el("tabTroubleshooting"),
    code: el("tabCode"),
    guide: el("tabUserGuide"),
    labor: el("tabLaborMapping"),
    battery: el("tabBatteryHealth")
  };
  Object.entries(tabs).forEach(([key, tab]) => {
    if(!tab) return;
    const selected = key === activeModule;
    tab.className = "module-tab" + (selected ? " active" : "");
    tab.ariaSelected = selected ? "true" : "false";
  });
}

function showModuleView(){
  const trouble = el("troubleshootingView");
  const reference = el("referenceView");
  const labor = el("laborMappingView");
  const battery = el("batteryHealthView");
  const controlbar = el("mainControlbar");
  if(trouble){
    if(activeModule === "troubleshooting") trouble.classList.remove("hidden");
    else trouble.classList.add("hidden");
  }
  if(reference){
    if(activeModule === "code" || activeModule === "guide") reference.classList.remove("hidden");
    else reference.classList.add("hidden");
  }
  if(labor){
    if(activeModule === "labor") labor.classList.remove("hidden");
    else labor.classList.add("hidden");
  }
  if(battery) battery.classList.toggle("hidden", activeModule !== "battery");
  if(controlbar){
    if(activeModule === "labor" || activeModule === "battery") controlbar.classList.add("hidden");
    else controlbar.classList.remove("hidden");
  }
}

function switchModule(moduleName, options = {}){
  if(!["troubleshooting", "code", "guide", "labor", "battery"].includes(moduleName)) return;
  activeModule = moduleName;
  if(!options.keepSearch && el("search")) el("search").value = "";
  setSearchClearVisibility();
  closeInlineSuggestions("search");
  closeInlineSuggestions("laborSearch");
  const searchPanel = el("globalSearchPanel");
  if(searchPanel) searchPanel.classList.add("hidden");
  renderAll();
  gaTrack("module_selected", { module: moduleName });
}

function appendReferenceSection(parent, title, textOrItems){
  const section = document.createElement("div");
  section.className = "reference-detail-section";
  const heading = document.createElement("div");
  heading.className = "reference-detail-heading";
  heading.textContent = title;
  section.appendChild(heading);

  if(Array.isArray(textOrItems)){
    const list = document.createElement("ul");
    list.className = "reference-bullets";
    textOrItems.forEach(value => {
      const li = document.createElement("li");
      li.textContent = value;
      list.appendChild(li);
    });
    section.appendChild(list);
  }else{
    const body = document.createElement("div");
    body.className = "reference-detail-text";
    body.textContent = String(textOrItems || "-");
    section.appendChild(body);
  }
  parent.appendChild(section);
}

function renderReferenceDetail(){
  const moduleName = activeModule === "code" ? "code" : "guide";
  const data = referenceData(moduleName);
  const name = selectedReferenceItem[moduleName];
  const category = name ? referenceCategoryForItem(moduleName, name) : selectedReferenceCategory[moduleName];
  const title = el("referenceDetailTitle");
  const heading = el("referenceDetailHeading");
  const currentSelection = el("referenceCurrentSelection");
  const infoTitle = el("referenceInfoTitle");
  const meta = el("referenceMeta");
  const hint = el("referenceInfoHint");
  const body = el("referenceDetailBody");
  if(!title || !body) return;

  if(heading) heading.textContent = moduleName === "code" ? "ERROR POST DETAIL" : "USER GUIDE DETAIL";
  if(infoTitle) infoTitle.textContent = moduleName === "code" ? "RELATED" : "REFERENCE INFO";

  if(currentSelection){
    if(moduleName === "code") currentSelection.textContent = name ? `ERROR POST → ${name}` : "ERROR POST → Select an item";
    else currentSelection.textContent = name ? `GUIDE → ${name}` : "GUIDE → Select a user guide";
  }

  if(meta){
    if(moduleName === "code"){
      meta.innerHTML = `
        <div class="reference-meta-row"><span>Category</span><strong>${category || "-"}</strong></div>
        <div class="reference-meta-row"><span>Reference</span><strong>${name || "-"}</strong></div>
      `;
    }else{
      meta.innerHTML = `
        <div class="reference-meta-row"><span>Module</span><strong>User Guide</strong></div>
        <div class="reference-meta-row"><span>Item</span><strong>${name || "-"}</strong></div>
      `;
    }
  }

  if(hint){
    if(moduleName === "code") hint.textContent = name
      ? "Use Search All to find related Symptoms or User Guides for this code."
      : "Select an ERROR POST item above to view its detail and related reference information.";
    else hint.textContent = name
      ? "User guide content is shown in the left panel."
      : "Select a user guide above to view the reference.";
  }

  body.innerHTML = "";
  body.className = "reference-detail-body";
  if(!name || !data[name]){
    title.textContent = moduleName === "code" ? "Select an ERROR POST item" : "Select a user guide";
    body.className = "reference-detail-body empty-state reference-detail-empty";
    body.textContent = moduleName === "code"
      ? "Select an ERROR POST item above to view information."
      : "Select a user guide to view information.";
    return;
  }

  title.textContent = name;
  const item = data[name];
  if(moduleName === "guide"){
    const content = document.createElement("div");
    content.className = "guide-content";
    content.textContent = item.content || "No information available.";
    body.appendChild(content);
    return;
  }

  appendReferenceSection(body, "DESCRIPTION", item.description || "-");
  appendReferenceSection(body, "POSSIBLE CAUSE", Array.isArray(item.possibleCause) ? item.possibleCause : [item.possibleCause || "-"]);
  appendReferenceSection(body, "RECOMMENDED ACTION", Array.isArray(item.recommendedAction) ? item.recommendedAction : [item.recommendedAction || "-"]);
}

function renderReferenceView(){
  if(activeModule === "troubleshooting") return;
  const moduleName = activeModule === "code" ? "code" : "guide";
  const cfg = referenceConfig(moduleName);
  const referenceView = el("referenceView");
  const categoryColumn = el("referenceCategoryColumn");
  const categoriesBox = el("referenceCategories");
  const itemsBox = el("referenceItems");
  const listTitle = el("referenceListTitle");
  if(!categoriesBox || !itemsBox || !listTitle) return;

  if(referenceView){
    referenceView.classList.remove("code-mode", "guide-mode");
    referenceView.classList.add(moduleName === "code" ? "code-mode" : "guide-mode");
  }

  listTitle.textContent = cfg.listTitle;
  categoriesBox.innerHTML = "";

  // v5.2.7: Code and Guide are direct-reference lists. Category mappings remain
  // internal metadata for Search/Diagnostics, but are not shown as navigation.
  selectedReferenceCategory[moduleName] = cfg.allCategory;
  if(categoryColumn) categoryColumn.classList.add("hidden");

  const names = Object.keys(referenceData(moduleName));

  if(selectedReferenceItem[moduleName] && !names.includes(selectedReferenceItem[moduleName])){
    selectedReferenceItem[moduleName] = null;
  }
  itemsBox.innerHTML = "";
  if(!names.length){
    const empty = document.createElement("div");
    empty.className = "empty-state list-empty";
    empty.textContent = cfg.emptyText;
    itemsBox.appendChild(empty);
  }else{
    names.forEach(name => {
      const div = document.createElement("div");
      div.className = "item reference-item" + (name === selectedReferenceItem[moduleName] ? " active" : "");
      div.textContent = name;
      div.onclick = () => {
        selectedReferenceItem[moduleName] = name;
        renderReferenceView();
      };
      itemsBox.appendChild(div);
    });
  }
  renderReferenceDetail();
}

function knowledgeSearchText(section, name, item){
  if(section === "Troubleshooting Guide") return `${name} ${item && item.content ? item.content : ""}`.toLowerCase();
  const causes = Array.isArray(item && item.possibleCause) ? item.possibleCause.join(" ") : (item && item.possibleCause) || "";
  const actions = Array.isArray(item && item.recommendedAction) ? item.recommendedAction.join(" ") : (item && item.recommendedAction) || "";
  return `${name} ${(item && item.description) || ""} ${causes} ${actions}`.toLowerCase();
}

function collectGlobalSearchResults(keyword){
  const kw = String(keyword || "").trim().toLowerCase();
  if(!kw) return [];
  const results = [];

  getVisibleLevelKeys().forEach(levelKey => {
    getVisibleSymptomKeys(levelKey).forEach(symKey => {
      const obj = LEVELS[levelKey].symptoms[symKey];
      const hay = `${LEVELS[levelKey].name} ${obj.name} ${obj.description || ""}`.toLowerCase();
      if(hay.includes(kw)){
        results.push({
          type: "Troubleshooting",
          title: obj.name,
          subtitle: LEVELS[levelKey].name,
          levelKey,
          symKey
        });
      }
    });
  });

  Object.entries(referenceData("code")).forEach(([name, item]) => {
    if(knowledgeSearchText("Code", name, item).includes(kw)){
      results.push({
        type: "Error Post",
        title: name,
        subtitle: referenceCategoryForItem("code", name),
        moduleName: "code"
      });
    }
  });

  Object.entries(referenceData("guide")).forEach(([name, item]) => {
    if(knowledgeSearchText("Troubleshooting Guide", name, item).includes(kw)){
      results.push({
        type: "User Guide",
        title: name,
        subtitle: referenceCategoryForItem("guide", name),
        moduleName: "guide"
      });
    }
  });
  return results;
}

function openGlobalSearchResult(result){
  if(result.type === "Troubleshooting"){
    activeModule = "troubleshooting";
    selectedLevel = result.levelKey;
    selectedSymptom = result.symKey;
  }else{
    activeModule = result.moduleName;
    selectedReferenceCategory[result.moduleName] = referenceCategoryForItem(result.moduleName, result.title);
    selectedReferenceItem[result.moduleName] = result.title;
  }
  if(el("search")) el("search").value = "";
  setSearchClearVisibility();
  renderAll();
}

function renderGlobalSearch(){
  const search = el("search");
  const panel = el("globalSearchPanel");
  if(!search || !panel) return;
  const kw = search.value.trim();
  setSearchClearVisibility();
  if(!kw){
    panel.innerHTML = "";
    panel.classList.add("hidden");
    showModuleView();
    return;
  }

  if(el("troubleshootingView")) el("troubleshootingView").classList.add("hidden");
  if(el("referenceView")) el("referenceView").classList.add("hidden");
  panel.classList.remove("hidden");
  panel.innerHTML = "";

  const results = collectGlobalSearchResults(kw);
  const heading = document.createElement("div");
  heading.className = "global-search-heading";
  heading.textContent = `SEARCH RESULTS — “${kw}” (${results.length})`;
  panel.appendChild(heading);

  if(!results.length){
    const empty = document.createElement("div");
    empty.className = "empty-state global-search-empty";
    empty.textContent = "No matching results";
    panel.appendChild(empty);
    return;
  }

  const list = document.createElement("div");
  list.className = "global-search-list";
  results.forEach(result => {
    const row = document.createElement("div");
    row.className = "global-search-result";
    const badge = document.createElement("span");
    badge.className = "search-badge " + (result.type === "Troubleshooting" ? "badge-ts" : result.type === "Error Post" ? "badge-code" : "badge-guide");
    badge.textContent = result.type === "Troubleshooting" ? "TS" : result.type === "Error Post" ? "POST" : "GUIDE";
    const text = document.createElement("div");
    text.className = "global-search-result-text";
    const title = document.createElement("div");
    title.className = "global-search-result-title";
    title.textContent = result.title;
    const subtitle = document.createElement("div");
    subtitle.className = "global-search-result-subtitle";
    subtitle.textContent = result.subtitle;
    text.appendChild(title);
    text.appendChild(subtitle);
    row.appendChild(badge);
    row.appendChild(text);
    row.onclick = () => openGlobalSearchResult(result);
    list.appendChild(row);
  });
  panel.appendChild(list);
}

// v5.3.2: local, non-navigating autocomplete; no external service required.
let suggestionIndex = {search: 0, laborSearch: 0};
function closeInlineSuggestions(id){
  const box = el(id === "laborSearch" ? "laborSuggestions" : "searchSuggestions");
  if(box){box.classList.add("hidden");box.replaceChildren();}
  if(el(id) && el(id).setAttribute) el(id).setAttribute("aria-expanded", "false");
}
function showInlineSuggestions(id, items){
  const input = el(id), box = el(id === "laborSearch" ? "laborSuggestions" : "searchSuggestions");
  if(!input || !box) return;
  box.replaceChildren();
  suggestionIndex[id] = -1;
  if(!input.value.trim() || !items.length){closeInlineSuggestions(id);return;}
  items.slice(0,5).forEach((item,i)=>{
    const button = document.createElement("button");
    button.type = "button";
    button.className = "inline-suggestion-item";
    button.setAttribute("role","option");
    const title = document.createElement("span");title.textContent = item.title;
    const sub = document.createElement("small");
    sub.textContent = id === "laborSearch" ? "" : (item.subtitle ? "(" + item.subtitle + ")" : "");
    button.appendChild(title);
    if(sub.textContent) button.appendChild(sub);
    button.addEventListener("mousedown",e=>e.preventDefault());
    button.addEventListener("click",()=>{closeInlineSuggestions(id);item.choose();});
    box.appendChild(button);
  });
  box.classList.remove("hidden");
  input.setAttribute("aria-expanded", "true");
}
function renderInlineSearchSuggestions(){
  const input = el("search");if(!input)return;
  setSearchClearVisibility();
  const q=input.value.trim().toLowerCase();
  if(!q){closeInlineSuggestions("search");return;}
  const matches = collectGlobalSearchResults(q);
  const score = r => {const t=String(r.title||"").toLowerCase();return t===q?0:t.startsWith(q)?1:t.split(/\s+/).some(w=>w.startsWith(q))?2:3;};
  matches.sort((a,b)=>score(a)-score(b)||String(a.title).localeCompare(String(b.title)));
  showInlineSuggestions("search",matches.slice(0,5).map(r=>({title:r.title,subtitle:r.type === "Troubleshooting" ? "Symptoms" : r.type === "User Guide" ? "Guide" : "Error Post",choose:()=>openGlobalSearchResult(r)})));
}
function renderLaborSuggestions(){
  const input=el("laborSearch");if(!input)return;
  setLaborSearchClearVisibility();
  const q=input.value.trim().toLowerCase();
  if(!q){closeInlineSuggestions("laborSearch");return;}
  const values=new Map();
  for(const row of laborRows()){
    const province=String(row.province||"").trim();
    if(province && province.toLowerCase().includes(q))values.set("p:"+province,{title:province,subtitle:"Province",value:province});
    const from=Number(row.postalFrom),to=Number(row.postalTo);
    if(/^\d+$/.test(q) && Number.isFinite(from)&&Number.isFinite(to)){
      // Ranges can contain many postcodes; enumerate only plausible five-digit candidates.
      const lo=Math.max(from,0),hi=Math.min(to,99999);
      if(hi-lo<=2000)for(let n=lo;n<=hi;n++){
        const code=String(n).padStart(5,"0");
        if(code.startsWith(q))values.set("z:"+code,{title:code,subtitle:province,value:code});
      }
      else {
        const prefix=Number(q.padEnd(5,"0")),last=Number(q.padEnd(5,"9"));
        const first=Math.max(lo,prefix),end=Math.min(hi,last);
        for(let n=first;n<=Math.min(end,first+4);n++){
          const code=String(n).padStart(5,"0");
          if(code.startsWith(q))values.set("z:"+code,{title:code,subtitle:province,value:code});
        }
      }
    }
  }
  const list=Array.from(values.values()).sort((a,b)=>{
    const ap=a.title.toLowerCase().startsWith(q),bp=b.title.toLowerCase().startsWith(q);
    return Number(bp)-Number(ap)||a.title.localeCompare(b.title);
  }).slice(0,5);
  showInlineSuggestions("laborSearch",list.map(item=>({...item,choose:()=>{input.value=item.value;renderLaborMapping();}})));
}
function wireSuggestionKeys(id){
  const input=el(id);if(!input)return;
  input.addEventListener("keydown",event=>{
    const box=el(id==="laborSearch"?"laborSuggestions":"searchSuggestions");
    if(event.key==="Escape"){closeInlineSuggestions(id);return;}
    const rows=box && !box.classList.contains("hidden") ? [...box.querySelectorAll(".inline-suggestion-item")] : [];
    if(!rows.length){if(event.key==="Enter" && id==="laborSearch")renderLaborMapping();return;}
    if(event.key==="ArrowDown"||event.key==="ArrowUp"){
      event.preventDefault();suggestionIndex[id]=(suggestionIndex[id]+(event.key==="ArrowDown"?1:-1)+rows.length)%rows.length;
      rows.forEach((row,i)=>row.classList.toggle("is-active",i===suggestionIndex[id]));
    }else if(event.key==="Enter"){
      event.preventDefault();rows[Math.max(0,suggestionIndex[id])].click();
    }
  });
}
document.addEventListener("pointerdown",event=>{
  for(const id of ["search","laborSearch"]){
    const input=el(id), box=el(id==="search"?"searchSuggestions":"laborSuggestions");
    if(input && box && event.target!==input && !box.contains(event.target))closeInlineSuggestions(id);
  }
});

function renderLevel1(){
  const box = el("level1");
  box.innerHTML = "";
  getVisibleLevelKeys().forEach(key => {
    const div = document.createElement("div");
    div.className = "item" + (key === selectedLevel ? " active" : "");
    div.textContent = LEVELS[key].name;
    div.onclick = () => {
      selectedLevel = key;
      selectedSymptom = getVisibleSymptomKeys(key)[0];
      gaTrack("level1_selected", {
        level1: LEVELS[key].name
      });
      gaTrack("symptom_selected", {
        level1: LEVELS[key].name,
        symptom: LEVELS[key].symptoms[selectedSymptom].name
      });
      renderAll();
    };
    box.appendChild(div);
  });
}

function renderSymptoms(){
  const box = el("symptom");
  box.innerHTML = "";
  const symptomKeys = getVisibleSymptomKeys(selectedLevel);
  if(!symptomKeys.length){
    const empty = document.createElement("div");
    empty.className = "empty-state list-empty";
    empty.textContent = "No symptoms available for this product.";
    box.appendChild(empty);
    return;
  }
  symptomKeys.forEach(key => {
    const div = document.createElement("div");
    div.className = "item" + (key === selectedSymptom ? " active" : "");
    div.textContent = LEVELS[selectedLevel].symptoms[key].name;
    div.onclick = () => {
      selectedSymptom = key;
      gaTrack("symptom_selected", {
        level1: getLevelName(),
        symptom: getSymptomName()
      });
      renderSymptoms();
      renderMain();
    };
    box.appendChild(div);
  });
}


function laborRows(){
  return Array.isArray(typeof LABOR_MAPPING !== "undefined" ? LABOR_MAPPING : null) ? LABOR_MAPPING : [];
}

function normalizeLaborProvince(value){
  return String(value || "").trim().toLowerCase().replace(/\s+/g, " ");
}

function laborPostalLabel(row){
  const from = Number(row.postalFrom);
  const to = Number(row.postalTo);
  if(from === to) return String(from);
  return `${from} – ${to}`;
}

function findLaborMappings(query){
  const raw = String(query || "").trim();
  if(!raw) return [];
  if(/^\d+$/.test(raw)){
    if(raw.length !== 5) return [];
    const postal = Number(raw);
    return laborRows().filter(row => postal >= Number(row.postalFrom) && postal <= Number(row.postalTo));
  }
  const needle = normalizeLaborProvince(raw);
  return laborRows().filter(row => normalizeLaborProvince(row.province).includes(needle));
}

function laborSupportSignature(support){
  const source = support || {};
  return [
    source.sapAccountNumber || "",
    source.laborVendorId || "",
    source.premierVendor || ""
  ].map(value => String(value).trim()).join("|");
}

function dedupeLaborPostalMatches(matches){
  const seen = new Set();
  return (matches || []).filter(row => {
    // Keep the source data untouched. Only collapse duplicate UI results when
    // the exact Postal Code range and both support mappings are identical.
    // If any Vendor/Labor/SAP value differs, both results remain visible.
    const signature = [
      Number(row.postalFrom),
      Number(row.postalTo),
      laborSupportSignature(row.standardPcare),
      laborSupportSignature(row.premierSupport)
    ].join("||");
    if(seen.has(signature)) return false;
    seen.add(signature);
    return true;
  });
}

function setLaborSearchClearVisibility(){
  const search = el("laborSearch");
  const clear = el("laborSearchClearBtn");
  if(!search || !clear) return;
  // Keep the labeled Clear button visible beside the Labor Mapping search box.
  clear.classList.remove("hidden");
  clear.disabled = !search.value.trim();
}

function appendLaborSupportRow(tbody, supportType, support, rowMeta = null, rowClass = ""){
  const tr = document.createElement("tr");
  if(rowClass) tr.className = rowClass;
  if(rowMeta){
    const postal = document.createElement("th");
    postal.className = "labor-postal-cell";
    postal.textContent = rowMeta.postalLabel || "-";
    postal.rowSpan = 2;
    tr.appendChild(postal);

    const province = document.createElement("td");
    province.className = "labor-province-cell";
    province.textContent = rowMeta.provinceName || "-";
    province.rowSpan = 2;
    tr.appendChild(province);
  }

  const type = document.createElement("th");
  type.className = "labor-support-type";
  type.textContent = supportType;

  const id = document.createElement("td");
  id.className = "labor-id";
  id.textContent = support && support.laborVendorId ? support.laborVendorId : "-";

  const vendor = document.createElement("td");
  vendor.textContent = support && support.premierVendor ? support.premierVendor : "-";

  tr.appendChild(type);
  tr.appendChild(id);
  tr.appendChild(vendor);
  tbody.appendChild(tr);
}

function buildLaborTable(headers, className = ""){
  const tableWrap = document.createElement("div");
  tableWrap.className = "labor-table-wrap";
  const table = document.createElement("table");
  table.className = `labor-compare-table ${className}`.trim();
  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  headers.forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);
  table.appendChild(thead);
  const tbody = document.createElement("tbody");
  table.appendChild(tbody);
  tableWrap.appendChild(table);
  return { tableWrap, tbody };
}

function renderLaborResults(matches, resultsBox){
  const groups = new Map();
  matches.forEach(row => {
    const key = String(row.province || "");
    if(!groups.has(key)) groups.set(key, []);
    groups.get(key).push(row);
  });

  groups.forEach((rows, provinceName) => {
    const card = document.createElement("div");
    card.className = "labor-result-card labor-province-card";

    const location = document.createElement("div");
    location.className = "labor-result-location";
    const province = document.createElement("strong");
    province.textContent = provinceName;
    const rangeCount = document.createElement("span");
    rangeCount.textContent = `${rows.length} Postal Code range${rows.length === 1 ? "" : "s"}`;
    location.appendChild(province);
    location.appendChild(rangeCount);
    card.appendChild(location);

    const { tableWrap, tbody } = buildLaborTable(
      ["Postal Code", "Province", "Support Type", "Labor Vendor ID", "Premier Vendor"],
      "labor-unified-table"
    );
    rows.forEach((row, rowIndex) => {
      const rowMeta = {
        postalLabel: laborPostalLabel(row),
        provinceName: row.province
      };
      // Keep both support rows for the same Postal Code visually grouped.
      // Alternate the background only when moving to the next Postal Code range.
      const rowClass = rowIndex % 2 === 1 ? "labor-postal-alt" : "labor-postal-base";
      appendLaborSupportRow(tbody, "Standard / Premium care", row.standardPcare, rowMeta, rowClass);
      appendLaborSupportRow(tbody, "Premier Support", row.premierSupport, null, rowClass);
    });
    card.appendChild(tableWrap);
    resultsBox.appendChild(card);
  });
}

function renderLaborMapping(){
  const search = el("laborSearch");
  const resultsBox = el("laborResults");
  const summary = el("laborResultSummary");
  if(!search || !resultsBox || !summary) return;
  const query = search.value.trim();
  setLaborSearchClearVisibility();
  resultsBox.innerHTML = "";

  if(!query){
    summary.textContent = "Enter a Province or Postal Code to find Labor Mapping.";
    const empty = document.createElement("div");
    empty.className = "labor-empty-state";
    empty.textContent = "Search by Province name or a 5-digit Postal Code.";
    resultsBox.appendChild(empty);
    return;
  }
  if(/^\d+$/.test(query) && query.length !== 5){
    summary.textContent = "Postal Code must contain 5 digits.";
    const empty = document.createElement("div");
    empty.className = "labor-empty-state";
    empty.textContent = "Enter a complete 5-digit Postal Code.";
    resultsBox.appendChild(empty);
    return;
  }

  const matches = findLaborMappings(query);
  const isPostalSearch = /^\d{5}$/.test(query);
  const displayMatches = isPostalSearch ? dedupeLaborPostalMatches(matches) : matches;
  if(displayMatches.length){
    if(isPostalSearch){
      summary.textContent = `LABOR MAPPING RESULTS — “${query}” (${displayMatches.length})`;
    }else{
      const provinceCount = new Set(displayMatches.map(row => String(row.province || ""))).size;
      summary.textContent = `LABOR MAPPING RESULTS — “${query}” (${provinceCount} province${provinceCount === 1 ? "" : "s"}, ${displayMatches.length} postal range${displayMatches.length === 1 ? "" : "s"})`;
    }
  }else{
    summary.textContent = `No Labor Mapping found for “${query}”.`;
  }

  if(!displayMatches.length){
    const empty = document.createElement("div");
    empty.className = "labor-empty-state";
    empty.textContent = "No matching Province or Postal Code.";
    resultsBox.appendChild(empty);
    return;
  }

  // Use one consistent five-column table for both Province and Postal Code searches.
  renderLaborResults(displayMatches, resultsBox);

  gaTrack("labor_mapping_search", {
    search_type: isPostalSearch ? "postal_code" : "province",
    result_count: displayMatches.length,
    source_match_count: matches.length
  });
}

function clearLaborSearch(){
  const search = el("laborSearch");
  if(!search) return;
  search.value = "";
  closeInlineSuggestions("laborSearch");
  setLaborSearchClearVisibility();
  renderLaborMapping();
  if(typeof search.focus === "function") search.focus();
}

function updateCurrentSelection(){
  const product = el("product").options[el("product").selectedIndex].text;
  const text = isManual() ? current().name : `${product} → ${LEVELS[selectedLevel].name} → ${current().name}`;
  el("currentSelection").innerHTML = `<b>Current Selection:</b> ${text}`;
}


function getManualGuide(key){
  const manuals = LEVELS.manual && LEVELS.manual.symptoms ? LEVELS.manual.symptoms : {};
  return manuals[key] || null;
}

// v5.2.7 — Selective Related Guide popup policy.
// Keep the troubleshooting page in place and expose ⓘ only for steps where
// the operator is likely to need a setting, Vantage/BIOS path, command, or
// longer recovery procedure. Basic procedures intentionally stay icon-free.
const SELECTIVE_RELATED_GUIDE_NAMES = new Set([
  "lenovo diagnostics",
  "re-install windows",
  "reset this pc",
  "dump file",
  "battery health",
  "battery status",
  "battery report",
  "fn & ctrl key swap",
  "ssd not found during install os",
  "disable audio enhancements",
  "lock on leave function"
]);

function resolveManualGuideKey(token){
  const manuals = LEVELS.manual && LEVELS.manual.symptoms ? LEVELS.manual.symptoms : {};
  const raw = String(token || "").trim();
  if(!raw) return null;
  if(manuals[raw]) return raw;

  const displayName = (typeof RELATED_GUIDE_MASTER !== "undefined" && RELATED_GUIDE_MASTER[raw])
    ? RELATED_GUIDE_MASTER[raw]
    : raw;
  const target = String(displayName || "").trim().toLowerCase();
  return Object.keys(manuals).find(candidate =>
    String(manuals[candidate].name || "").trim().toLowerCase() === target
  ) || null;
}

function getPopupGuideKeysForQuestion(question){
  const keys = [];
  String((question && question.relatedGuide) || "")
    .split(/\s*\|\s*|\r?\n|\s*;\s*/)
    .map(value => value.trim())
    .filter(Boolean)
    .forEach(token => {
      const key = resolveManualGuideKey(token);
      const guide = key ? getManualGuide(key) : null;
      const name = String((guide && guide.name) || "").trim().toLowerCase();
      if(key && SELECTIVE_RELATED_GUIDE_NAMES.has(name) && !keys.includes(key)) keys.push(key);
    });
  return keys;
}

function getGuidePopupText(guide){
  if(!guide) return "No information available.";
  return String(guide.guide || guide.content || "No information available.").trim();
}

function openGuideModal(key){
  const guide = getManualGuide(key);
  if(!guide) return;
  gaTrack("related_guide_open", {
    guide: guide.name,
    level1: getLevelName(),
    symptom: getSymptomName()
  });
  el("modalTitle").textContent = guide.name;
  el("modalBody").textContent = getGuidePopupText(guide);
  el("guideModal").classList.remove("hidden");
  if(el("modalCloseBtn") && typeof el("modalCloseBtn").focus === "function") el("modalCloseBtn").focus();
}

function closeGuideModal(){
  el("guideModal").classList.add("hidden");
}

function collectDiagnostics(){
  const meta = (typeof DATABASE_META !== "undefined" && DATABASE_META) ? DATABASE_META : {};
  const errors = [];
  const relatedNames = new Set(
    Object.values(typeof RELATED_GUIDE_MASTER !== "undefined" ? RELATED_GUIDE_MASTER : {})
      .map(value => String(value || "").trim().toLowerCase())
      .filter(Boolean)
  );
  const noPhysicalLevels = new Set(["windows", "battery", "network", "storage", "audio", "camera"]);
  const externalFruProducts = new Set(["desktop", "tiny", "aio"]);
  const externalFruLevels = new Set(["monitor", "adapter", "keyboard", "mouse"]);
  let checklistRows = 0;
  let fruRows = 0;
  let levelEntries = 0;
  let symptomEntries = 0;

  Object.entries(typeof MODEL_STRUCTURE !== "undefined" ? MODEL_STRUCTURE : {}).forEach(([product, structureRows]) => {
    levelEntries += structureRows.length;
    structureRows.forEach(structureRow => {
      const level = LEVELS[structureRow.level];
      if(!level){
        errors.push(`${product}: missing Level 1 key ${structureRow.level}`);
        return;
      }
      const levelName = String(level.name || "").trim();
      const levelNameNorm = levelName.toLowerCase();
      structureRow.symptoms.forEach(symptomKey => {
        symptomEntries += 1;
        const symptom = (level.symptoms || {})[symptomKey];
        if(!symptom){
          errors.push(`${product} > ${levelName}: missing symptom key ${symptomKey}`);
          return;
        }
        const questions = symptom.questions && Array.isArray(symptom.questions[product])
          ? symptom.questions[product]
          : null;
        if(!questions) return;
        checklistRows += questions.length;
        const labels = questions.map(row => String(row.label || "").trim().toLowerCase());
        const seen = new Set();
        labels.forEach((label, index) => {
          if(seen.has(label)) errors.push(`${product} > ${levelName} > ${symptom.name}: duplicate checklist ${questions[index].label}`);
          seen.add(label);
        });
        if(noPhysicalLevels.has(levelNameNorm) && labels.includes("physical damage")){
          errors.push(`${product} > ${levelName} > ${symptom.name}: Physical Damage is not allowed`);
        }
        if(levelNameNorm === "monitor" && labels.includes("other issue")){
          errors.push(`${product} > Monitor > ${symptom.name}: Other Issue is not allowed`);
        }
        const fruIndexes = labels.map((label, index) => label === "fru p/n" ? index : -1).filter(index => index >= 0);
        fruRows += fruIndexes.length;
        if(fruIndexes.length && fruIndexes[fruIndexes.length - 1] !== labels.length - 1){
          errors.push(`${product} > ${levelName} > ${symptom.name}: FRU P/N is not the final checklist item`);
        }
        if(externalFruProducts.has(product) && externalFruLevels.has(levelNameNorm) && fruIndexes.length !== 1){
          errors.push(`${product} > ${levelName} > ${symptom.name}: expected exactly one FRU P/N`);
        }
        questions.forEach(row => {
          (row.optionsList || []).forEach(value => {
            const option = String(value || "").trim().toLowerCase();
            if(option === "blank" || option === "text input"){
              errors.push(`${product} > ${levelName} > ${symptom.name} > ${row.label}: internal dropdown token is visible`);
            }
          });
          String(row.relatedGuide || "")
            .split("|")
            .map(value => value.trim())
            .filter(Boolean)
            .forEach(name => {
              if(!relatedNames.has(name.toLowerCase())){
                errors.push(`${product} > ${levelName} > ${symptom.name} > ${row.label}: unresolved Related Guide ${name}`);
              }
            });
        });
      });
    });
  });

  if(meta.checklistRows !== undefined && Number(meta.checklistRows) !== checklistRows){
    errors.push(`Checklist row count mismatch: metadata=${meta.checklistRows}, runtime=${checklistRows}`);
  }
  const runtimeProducts = Object.keys(typeof MODEL_STRUCTURE !== "undefined" ? MODEL_STRUCTURE : {}).length;
  if(meta.productSheets !== undefined && Number(meta.productSheets) !== runtimeProducts){
    errors.push(`Product count mismatch: metadata=${meta.productSheets}, runtime=${runtimeProducts}`);
  }

  [
    ["Error Post", "code", CODE_CATEGORIES, "All Codes"],
    ["Troubleshooting Guide", "guide", GUIDE_CATEGORIES, "All"]
  ].forEach(([section, moduleName, categories, allCategory]) => {
    const data = referenceData(moduleName);
    const actualNames = Object.keys(data);
    const mappedNames = Object.entries(categories)
      .filter(([category]) => category !== allCategory)
      .flatMap(([, names]) => names);
    const counts = new Map();
    mappedNames.forEach(name => counts.set(name, (counts.get(name) || 0) + 1));
    actualNames.forEach(name => {
      if(!counts.has(name)) errors.push(`${section}: uncategorized item ${name}`);
      else if(counts.get(name) !== 1) errors.push(`${section}: item categorized more than once ${name}`);
    });
    mappedNames.forEach(name => {
      if(!data[name]) errors.push(`${section}: category points to missing item ${name}`);
    });
  });

  const laborMeta = (typeof LABOR_MAPPING_META !== "undefined" && LABOR_MAPPING_META) ? LABOR_MAPPING_META : {};
  const laborData = laborRows();
  if(String(laborMeta.version || "") !== String(meta.version || "")){
    errors.push(`Labor Mapping version mismatch: ${laborMeta.version || "missing"} != ${meta.version || "missing"}`);
  }
  if(laborMeta.rows !== undefined && Number(laborMeta.rows) !== laborData.length){
    errors.push(`Labor Mapping row count mismatch: metadata=${laborMeta.rows}, runtime=${laborData.length}`);
  }
  laborData.forEach((row, index) => {
    if(!row.province) errors.push(`Labor Mapping row ${index + 1}: missing Province`);
    if(Number(row.postalFrom) > Number(row.postalTo)) errors.push(`Labor Mapping row ${index + 1}: invalid Postal Code range`);
    [row.standardPcare, row.premierSupport].forEach((support, supportIndex) => {
      const label = supportIndex === 0 ? "Standard / Premium care" : "Premier Support";
      if(!support || !support.laborVendorId || !support.premierVendor){
        errors.push(`Labor Mapping row ${index + 1}: incomplete ${label} mapping`);
      }
    });
  });

  return {
    status: errors.length ? "FAIL" : "PASS",
    errors,
    meta,
    laborMeta,
    laborRows: laborData.length,
    checklistRows,
    fruRows,
    levelEntries,
    symptomEntries,
  };
}

function runBackgroundDiagnostics(){
  const info = collectDiagnostics();
  if(info.status !== "PASS" && typeof console !== "undefined" && console.error){
    console.error("PD Guide Toolkit runtime diagnostics failed", info.errors);
  }
  return info;
}

// Related Guides are rendered inline as ⓘ beside selected checklist labels.


function setSearchClearVisibility(){
  const search = el("search");
  const clear = el("searchClearBtn");
  if(!search || !clear) return;
  if(search.value.trim()) clear.classList.remove("hidden");
  else clear.classList.add("hidden");
}

function clearSearchOnly(){
  const search = el("search");
  if(!search) return;
  search.value = "";
  setSearchClearVisibility();
  renderAll();
  if(typeof search.focus === "function") search.focus();
}

function renderChecklistEmptyState(message = "Select a symptom to view checklist") {
  const checklist = el("checklist");
  if(!checklist) return;
  checklist.innerHTML = "";
  const empty = document.createElement("div");
  empty.className = "empty-state checklist-empty";
  empty.textContent = message;
  checklist.appendChild(empty);
}

function checklistItemCompleted(question, index){
  const select = el(`a${index}`);
  const text = el(`t${index}`);
  const selected = select ? String(select.value || "").trim() : "";
  const detail = text ? String(text.value || "").trim() : "";
  if(detail) return true;
  return !!selected && selected !== "-- Select --";
}

function updateChecklistProgress(){
  // v5.3.4: retain original pale-green row background for answered checks.
  // No progress counter or progress bar is displayed.
  if(isKnowledgeLevel() || !current()) return;
  getQuestions().forEach((question, index) => {
    const row = el(`checkRow${index}`);
    if(row) row.classList.toggle("is-complete", checklistItemCompleted(question, index));
  });
}

function handleChecklistUpdate(){
  updateRecommendation();
  updateChecklistProgress();
  saveTroubleshootingState();
}

function shouldShowAdditionalDetail(){
  return !isManual() && selectedLevel !== "error";
}

function getAdditionalDetail(){
  const box = el("additionalDetail");
  return box ? box.value.trim() : "";
}

function renderErrorDescription(){
  const checklist = el("checklist");
  const sym = current();
  if((selectedLevel === "error" || selectedLevel === "bios") && sym.description){
    const div = document.createElement("div");
    div.className = "error-description";
    div.textContent = "Description : " + sym.description;
    checklist.appendChild(div);
  }
}



// Battery Health email templates provide guidance only; warranty/repair decisions remain unchanged.
function batteryHealthEmailBelow50(percentage){
  return [
    "เรียน คุณลูกค้า",
    "",
    "จากการตรวจสอบข้อมูล Battery Report เบื้องต้น พบว่าสุขภาพแบตเตอรี่ (Battery Health) เท่ากับ " + percentage.toFixed(1) + "% ซึ่งต่ำกว่า 50%",
    "",
    "รบกวนส่งภาพ Battery Report และผลการตรวจสอบ Battery Status / Lenovo Diagnostics พร้อมหมายเลข Serial Number (S/N) ของเครื่อง เพื่อให้เจ้าหน้าที่ตรวจสอบเพิ่มเติม",
    "",
    "การพิจารณาซ่อมหรือเปลี่ยนแบตเตอรี่จะขึ้นอยู่กับผลตรวจสอบจริง สถานะประกัน และเงื่อนไขการรับประกันที่เกี่ยวข้อง โดยยังไม่ถือเป็นการอนุมัติเคลมอัตโนมัติ",
    "",
    "ขออภัยในความไม่สะดวก และขอบคุณครับ"
  ].join("\n");
}
function batteryHealthEmailAbove50(percentage){
  const health = percentage === null ? "____" : percentage.toFixed(1);
  return [
    "เรียน คุณลูกค้า",
    "",
    "สำหรับตัวเครื่อง S/N: _____ ที่แจ้งปัญหาแบตเตอรี่ลดไว",
    "",
    "จากการตรวจสอบ Battery Report เบื้องต้น พบว่าปัจจุบันสุขภาพแบตเตอรี่ (Battery Health) อยู่ที่ประมาณ " + health + "%",
    "",
    "ตามเงื่อนไขการรับประกันที่เกี่ยวข้อง การเคลมแบตเตอรี่จำเป็นต้องมีสถานะเป็น Poor หรือมีค่า Battery Health ต่ำกว่า 50% และสามารถเคลมแบตเตอรี่ได้ 1 ครั้งตลอดระยะเวลารับประกัน",
    "ดังนั้น สำหรับผลการตรวจสอบในปัจจุบัน จึงยังไม่สามารถดำเนินการเคลมแบตเตอรี่ได้",
    "",
    "ปัจจัยที่อาจส่งผลให้แบตเตอรี่ลดลงเร็วกว่าปกติ ได้แก่",
    "1. มีการเชื่อมต่ออุปกรณ์ต่อพ่วงหลายรายการ",
    "2. เปิดใช้งานโหมด High Performance",
    "3. มีแอปพลิเคชันทำงานพร้อมกันหลายรายการ",
    "4. ระบบอยู่ระหว่างการดำเนินการ Windows Update",
    "",
    "คำแนะนำในการตั้งค่าแบตเตอรี่ผ่าน Lenovo Commercial Vantage",
    "1. ตั้งค่าระดับเริ่มชาร์จและหยุดชาร์จ (Charging Threshold) เพื่อช่วยลดความร้อนสะสมและถนอมแบตเตอรี่",
    "2. ปิดฟังก์ชัน Always On Charge หากไม่มีความจำเป็นต้องใช้งาน",
    "",
    "ทางเราต้องขออภัยในความไม่สะดวกที่เกิดขึ้น และขอขอบคุณที่ให้ความไว้วางใจในการใช้บริการ"
  ].join("\n");
}
// English equivalent of the Thai battery-information templates.
function batteryHealthEmailBelow50EN(percentage){
  const value = percentage === null ? "[Battery Health %]" : percentage.toFixed(1) + "%";
  return [
    "Dear Customer,", "",
    "Based on an initial review of the Battery Report, the battery health is " + value + ", which is below 50%. Further verification is required.", "",
    "Please provide a screenshot of the Battery Report, the Battery Status / Lenovo Diagnostics results, and the device serial number (S/N) for further review.", "",
    "Any repair or battery replacement decision depends on actual diagnostic findings, warranty status and applicable warranty terms. This is not an automatic claim approval.", "",
    "We apologize for any inconvenience and thank you."
  ].join("\n");
}
function batteryHealthEmailAbove50EN(percentage){
  const health = percentage === null ? "____" : percentage.toFixed(1);
  return [
    "Dear Customer,",
    "",
    "Regarding device S/N: _____ with the reported rapid battery drain issue:",
    "",
    "Based on our preliminary Battery Report review, the current Battery Health is approximately " + health + "%.",
    "",
    "Under the applicable warranty terms, a battery claim requires a Poor status or Battery Health below 50%. Only one battery claim is permitted during the warranty period.",
    "Therefore, the battery is not currently eligible for a warranty claim based on the available results.",
    "",
    "Possible causes of faster battery drain include:",
    "1. Multiple connected peripherals",
    "2. High Performance mode enabled",
    "3. Multiple applications running simultaneously",
    "4. Windows Update running in the background",
    "",
    "Recommended settings in Lenovo Commercial Vantage:",
    "1. Configure Charging Thresholds to reduce heat buildup and help preserve battery health.",
    "2. Disable Always On Charge when not needed.",
    "",
    "We apologize for any inconvenience and appreciate your understanding and continued trust in our service.",
    "",
    "Best regards,",
    "Technical Support Team"
  ].join("\n");
}
function batteryHealthEmailPending(language){
  return language === "en"
    ? "Dear Customer,\n\nPlease provide the Design Capacity and Full Charge Capacity from the Battery Report so we can confirm the battery health percentage. Please also provide the Battery Report and device serial number (S/N).\n\nAny repair or warranty decision is subject to diagnostics and the applicable warranty terms.\n\nThank you."
    : "เรียน คุณลูกค้า\n\nรบกวนแจ้งค่า Design Capacity และ Full Charge Capacity จาก Battery Report เพื่อให้ตรวจสอบเปอร์เซ็นต์สุขภาพแบตเตอรี่ พร้อมแนบ Battery Report และหมายเลข Serial Number (S/N) ของเครื่อง\n\nการพิจารณาซ่อมหรือเคลมขึ้นอยู่กับผลตรวจสอบและเงื่อนไขการรับประกันที่เกี่ยวข้อง\n\nขอบคุณครับ";
}
function batteryHealthEmailText(language, percentage){
  // Email previews can always open; an empty calculator shows the original
  // normal-health template with an unfilled percentage placeholder.
  if(language === "en") return percentage !== null && percentage < 50 ? batteryHealthEmailBelow50EN(percentage) : batteryHealthEmailAbove50EN(percentage);
  return percentage !== null && percentage < 50 ? batteryHealthEmailBelow50(percentage) : batteryHealthEmailAbove50(percentage);
}
// Independent email preview dialog: it never changes the checklist or calculator layout.
function openBatteryEmailPreview(language, getPercentage){
  const old = document.getElementById("batteryEmailOverlay");
  if(old) old.remove();
  const overlay = document.createElement("div");
  overlay.id = "batteryEmailOverlay";
  overlay.className = "battery-calc-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  const modal = document.createElement("div");
  modal.className = "battery-calc-modal battery-email-modal";
  const heading = document.createElement("div");
  heading.className = "battery-calc-title";
  const percentage = getPercentage();
  const conditionLabel = percentage !== null && percentage < 50 ? "<50%" : "≥50%";
  heading.textContent = "Battery Email " + language.toUpperCase() + " (" + conditionLabel + ")";
  const textArea = document.createElement("textarea");
  textArea.className = "battery-calc-email";
  textArea.setAttribute("aria-label", heading.textContent);
  textArea.value = batteryHealthEmailText(language, percentage);
  const actions = document.createElement("div");
  actions.className = "battery-calc-actions";
  const copy = document.createElement("button");
  copy.type = "button"; copy.textContent = "Copy";
  copy.addEventListener("click", () => copyBatteryHealthText(textArea.value, textArea));
  const close = document.createElement("button");
  close.type = "button"; close.textContent = "Close";
  const dismiss = () => overlay.remove();
  close.addEventListener("click", dismiss);
  overlay.addEventListener("click", e => {if(e.target === overlay) dismiss();});
  overlay.addEventListener("keydown", e => {if(e.key === "Escape"){e.stopPropagation();dismiss();}});
  actions.append(copy, close);
  modal.append(heading, textArea, actions);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  close.focus();
}
function batteryHealthPercentage(designValue,fullValue){
  const d = Number(designValue), f = Number(fullValue);
  if(String(designValue).trim() === "" || String(fullValue).trim() === "" || !Number.isFinite(d) || !Number.isFinite(f) || d <= 0 || f < 0) return null;
  return f / d * 100;
}
function copyBatteryHealthText(value, target){
  const fallback = () => {target.focus();target.select();document.execCommand("copy");};
  if(navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(value).catch(fallback);
  else fallback();
}
// Battery Health calculator: helper only; no changes to recommendation rules.
function openBatteryHealthCalculator(questionIndex){
  const existing = document.getElementById("batteryCalcOverlay");
  if(existing && existing.parentNode) existing.parentNode.removeChild(existing);
  const overlay = document.createElement("div");
  overlay.id = "batteryCalcOverlay";
  overlay.className = "battery-calc-overlay";
  const modal = document.createElement("div");
  modal.className = "battery-calc-modal";
  overlay.appendChild(modal);
  const title = document.createElement("div");
  title.className = "battery-calc-title";
  title.textContent = "Battery Calculator";
  modal.appendChild(title);
  function field(labelText, placeholder){
    const label = document.createElement("label");
    label.textContent = labelText;
    const input = document.createElement("input");
    input.type = "number";
    input.min = "0";
    input.step = "any";
    input.placeholder = placeholder;
    label.appendChild(input);
    modal.appendChild(label);
    return input;
  }
  const design = field("Design Capacity (mWh)", "48000");
  const full = field("Full Charge Capacity (mWh)", "24000");
  const result = document.createElement("div");
  result.className = "battery-calc-result";
  result.textContent = "Battery Health (%) —";
  modal.appendChild(result);
  const guidance = document.createElement("div");
  guidance.className = "battery-calc-guidance";
  modal.appendChild(guidance);
  const actions = document.createElement("div");
  actions.className = "battery-calc-actions";
  const use = document.createElement("button");
  use.type = "button";
  use.textContent = "Use Result";
  use.disabled = true;
  const emailTh = document.createElement("button");
  emailTh.type = "button"; emailTh.textContent = "Email TH";
  const emailEn = document.createElement("button");
  emailEn.type = "button"; emailEn.textContent = "Email EN";
  const clear = document.createElement("button");
  clear.type = "button"; clear.textContent = "Clear";
  const close = document.createElement("button");
  close.type = "button"; close.textContent = "Close";
  actions.append(use, emailTh, emailEn, clear, close);
  modal.appendChild(actions);
  let selected = "";
  function calculate(){
    const percentage = batteryHealthPercentage(design.value, full.value);
    const valid = percentage !== null;
    selected = valid ? (percentage < 50 ? "Below 50%" : "50% or Above") : "";
    result.textContent = valid ? "Battery Health (%) " + percentage.toFixed(1) + "% — " + selected : "Battery Health (%) —";
    guidance.textContent = !valid ? "Full Charge Capacity ÷ Design Capacity × 100" : selected === "50% or Above" ? "กรณีสุขภาพแบตเตอรี่ตั้งแต่ 50% ขึ้นไป ให้แจ้งลูกค้าตามข้อความด้านล่าง หากลูกค้าปฏิเสธ ให้ส่งต่อ L2 (ตรวจสอบเงื่อนไขประกันก่อนแจ้งลูกค้า)" : "Battery Health ต่ำกว่า 50% — ตรวจสอบ Battery Status, Diagnostics และเงื่อนไขประกันเพิ่มเติม";
    // Above-50 original email remains unchanged; below-50 uses an informational request for verification.
    use.disabled = !valid;
  }
  full.addEventListener("input", calculate);
  design.addEventListener("input", calculate);
  use.onclick = () => {
    const dropdown = document.getElementById("a" + questionIndex);
    if(dropdown){ dropdown.value = selected; dropdown.dispatchEvent(new Event("change", {bubbles:true})); }
    overlay.remove();
  };
  emailTh.onclick = () => openBatteryEmailPreview("th", () => batteryHealthPercentage(design.value, full.value));
  emailEn.onclick = () => openBatteryEmailPreview("en", () => batteryHealthPercentage(design.value, full.value));
  clear.onclick = () => {design.value = ""; full.value = ""; calculate();};
  close.onclick = () => overlay.remove();
  overlay.addEventListener("click", event => {if(event.target === overlay) overlay.remove();});
  document.body.appendChild(overlay);
  calculate();
}

function renderMain(){
  el("note").value = "";
  const checklist = el("checklist");
  const manualBox = el("manualBox");

  if(!current()){
    el("currentSelection").innerHTML = "<b>Current Selection:</b> -";
    el("mainTitle").textContent = "TROUBLESHOOTING CHECKLIST";
    el("recTitle").textContent = "CONCLUSION";
    el("recommendation").textContent = "-";
    manualBox.classList.add("hidden");
    el("suggestion").classList.add("hidden");
    renderChecklistEmptyState();
    updateChecklistProgress();
    return;
  }

  updateCurrentSelection();

  if(isKnowledgeLevel()){
    el("mainTitle").textContent = isKnowledgeLevel() ? "INFORMATION" : "TROUBLESHOOTING CHECKLIST";
    el("recTitle").textContent = "INFORMATION";
    el("recommendation").innerHTML = current().name;
    el("recommendation").className = "recommendation recommendation-dispatch";
    checklist.innerHTML = "";
    manualBox.textContent = getKnowledgeText();
    manualBox.classList.remove("hidden");
    el("suggestion").classList.add("hidden");
    updateChecklistProgress();
    return;
  }

  el("mainTitle").textContent = "TROUBLESHOOTING CHECKLIST";
  el("recTitle").textContent = "CONCLUSION";
  manualBox.classList.add("hidden");
  checklist.innerHTML = "";
  renderErrorDescription();

  getQuestions().forEach((q, i) => {

    const row = document.createElement("div");
    row.id = `checkRow${i}`;
    row.className = "check-row";

    const label = document.createElement("div");
    label.className = "check-label";
    label.textContent = q.label;

    if(q.label === "Battery Health (%)"){
      const calcButton = document.createElement("button");
      calcButton.type = "button";
      calcButton.className = "check-guide-info";
      calcButton.textContent = "🧮";
      calcButton.classList.add("battery-calculator-icon");
      calcButton.title = "Battery Health Calculator";
      calcButton.onclick = event => {
        if(event && event.stopPropagation) event.stopPropagation();
        openBatteryHealthCalculator(i);
      };
      label.appendChild(calcButton);
    }

    const popupGuideKeys = getPopupGuideKeysForQuestion(q);
    popupGuideKeys.filter(key => q.label !== "Battery Health (%)").forEach(key => {
      const guide = getManualGuide(key);
      const info = document.createElement("button");
      info.type = "button";
      info.className = "check-guide-info";
      info.textContent = "ⓘ";
      info.title = guide ? `Open ${guide.name} guide` : "Open guide";
      info.onclick = event => {
        if(event && typeof event.stopPropagation === "function") event.stopPropagation();
        openGuideModal(key);
      };
      label.appendChild(info);
    });
    row.appendChild(label);

    const options = getQuestionOptions(q);
    if(options.length){
      const select = document.createElement("select");
      select.id = `a${i}`;
      options.forEach(value => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        select.appendChild(option);
      });
      select.addEventListener("change", () => {
        if(q.additionalCheck){
          const detail = el(`t${i}`);
          if(detail){
            const yes = select.value === "Yes";
            detail.disabled = !yes;
            detail.classList.toggle("hidden", !yes);
            if(!yes) detail.value = "";
          }
        }
        handleChecklistUpdate();
      });
      row.appendChild(select);
    }else{
      row.appendChild(document.createElement("div"));
    }

    // Excel-only rule: show a text box only when the dropdown syntax contains Text Input.
    if(q.text){
      const input = document.createElement("input");
      input.id = `t${i}`;
      input.placeholder = "detail";
      if(q.additionalCheck){
        input.classList.add("additional-check-detail");
        input.disabled = true;
        input.classList.add("hidden");
      }
      input.addEventListener("input", handleChecklistUpdate);
      row.appendChild(input);
    }else{
      row.appendChild(document.createElement("div"));
    }
    checklist.appendChild(row);
  });
  if(shouldShowAdditionalDetail()){
    const detail = document.createElement("textarea");
    detail.id = "additionalDetail";
    detail.className = "detail-box";
    detail.placeholder = "Additional Detail";
    detail.addEventListener("input", handleChecklistUpdate);
    checklist.appendChild(detail);
  }
  restoreTroubleshootingState();
  getQuestions().forEach((q, i) => {
    if(!q.additionalCheck) return;
    const select = el(`a${i}`);
    const detail = el(`t${i}`);
    if(detail){
      const yes = !!select && select.value === "Yes";
      detail.disabled = !yes;
      detail.classList.toggle("hidden", !yes);
      if(!yes) detail.value = "";
    }
  });
  updateRecommendation();
  updateChecklistProgress();
  forceConclusionRed();
}

function answers(){
  if(isManual()) return [];
  return getQuestions().map((q, i) => {
    const sel = el(`a${i}`);
    const txt = el(`t${i}`);
    let a = sel ? sel.value : "-- Select --";

    if(q.text && Array.isArray(q.optionsList) && q.optionsList.length <= 1){
      a = txt && txt.value.trim() ? txt.value.trim() : "-- Select --";
      return {q:q.label, a:a};
    }

    if(q.additionalCheck){
      if(a === "Yes" && txt && txt.value.trim()) a = `Yes : ${txt.value.trim()}`;
      return {q:q.label, a:a};
    }
    if(txt && txt.value.trim()){
      if(a === "Failed") a = `Failed : ${txt.value.trim()}`;
      else a = txt.value.trim();
    }
    return {q:q.label, a:a};
  });
}

function isAnsweredValue(a){
  return !!a && a !== "-- Select --";
}

function isTailChecklist(label){
  return /^(physical damage \/ liquid spilled|other issue|any physical damage, liquid spilled|any cid|any other issue|fru p\/n)$/i.test(String(label).trim());
}

// v4.8.6 revision: Checklist Priority Rule
// Not Test must not block Dispatch unless the item is truly required to choose a part.
// Optional/Recommended items add confidence only.
function isOptionalChecklist(label){
  
const optionalLabels = [
    "Lenovo Vantage Update",
    "Driver Update", "Driver / Windows Update", "Driver / Firmware Update",
    "Audio Driver Update", "Camera Driver Update", "Fingerprint Driver Update", "Touchpad Driver Update", "TrackPoint Driver Update", "Hotkey Driver Update", "Graphics Driver Update", "Thunderbolt Driver Update", "LAN Driver Update", "WLAN Driver Update", "Bluetooth Driver Update", "Chipset / Power Driver Update", "RST / RSTe Driver Update",
    "BIOS Update",
    "Load BIOS Default",
    "Can Access Windows", "Lenovo Diagnostics", "Check Temperature", "Fan Check", "Check Task Manager Usage", "Check Power Mode",
    "Physical damage / Liquid spilled", "Other issue", "FRU P/N"
  ];

  return optionalLabels.includes(label) || isTailChecklist(label);
}

function isRequiredChecklist(label){
  return !isOptionalChecklist(label);
}

function decisionProgress(ans){
  const required = ans.filter(r => isRequiredChecklist(r.q));
  const answered = required.filter(r => isAnsweredValue(r.a) && r.a !== "Not Test");
  return {required: required.length, answered: answered.length};
}

function hasAnyChecklistAnswer(ans){
  return ans.some(r => isAnsweredValue(r.a));
}

function hasEnoughDecisionEvidence(ans){
  const p = decisionProgress(ans);
  if(p.required === 0) return hasAnyChecklistAnswer(ans);
  // Escalate/default conclusions are last-resort results.
  // They may appear only after all or almost all decision checklist items are answered.
  const needed = Math.max(1, Math.ceil(p.required * 0.8));
  return p.answered >= needed;
}

function pendingConclusion(){
  return {
    result: "Pending",
    part: "-",
    recommendation: ""
  };
}

function normalizeConclusion(rec){
  if(!rec) return rec;
  if(rec.result === "FOP" || rec.result === "Escalate L2" || rec.result === "Pending") rec.part = "-";
  return rec;
}

function answerValue(ans, label){
  const hit = ans.find(x => String(x.q).trim().toLowerCase() === String(label).trim().toLowerCase());
  return hit ? hit.a : undefined;
}

function storageEliminationRule(ans){
  if(selectedLevel !== "storage") return null;
  let part = null;
  let swapLabel = null;
  if(selectedSymptom === "ssd") { part = "SSD"; }
  if(selectedSymptom === "hdd") { part = "HDD"; swapLabel = "Swap HDD"; }
  if(!part) return null;

  const bios = answerValue(ans, "BIOS detects storage");
  const swap = swapLabel ? answerValue(ans, swapLabel) : undefined;
  if(swap === "Same Issue") return {result:"Dispatch", part:"Mainboard"};
  if(swap === "Working") return {result:"Dispatch", part:part};
  if(bios === "No") return {result:"Dispatch", part:part};
  return null;
}

function monitorEliminationRule(ans){
  if(selectedLevel !== "monitor") return null;
  const cable = answerValue(ans, "Swap HDMI / DisplayPort cable");
  const monitorOther = answerValue(ans, "Monitor test on other machine");
  const swapMonitor = answerValue(ans, "Swap Monitor");
  const powerCord = answerValue(ans, "Swap Power Cord");

  if(selectedSymptom === "abnormal_line"){
    if(cable === "Working") return {result:"Dispatch", part:"HDMI / DP Cable"};
    if(monitorOther === "Same Issue") return {result:"Dispatch", part:"Monitor"};
    if(swapMonitor === "Working") return {result:"Dispatch", part:"Monitor"};
    if(monitorOther === "Working" || swapMonitor === "Same Issue") return {result:"Dispatch", part:"Mainboard / Graphics Output"};
  }

  if(selectedSymptom === "no_power"){
    if(powerCord === "Working") return {result:"Dispatch", part:"Power Cord"};
    if(swapMonitor === "Working") return {result:"Dispatch", part:"Monitor"};
    if(swapMonitor === "Same Issue") return {result:"FOP", part:"Power source / Environment"};
  }
  return null;
}


function dockEliminationRule(ans){
  if(selectedLevel !== "dock") return null;
  const val = label => answerValue(ans, label);

  // Dock decision logic must be conservative.
  // Dispatch only when a checklist result clearly identifies the failed item.
  // Same Issue after Swap Dock must NOT dispatch Docking or Mainboard.
  const dispatchOnWorkFine = [
    ["Swap USB-A Port", "Docking"],
    ["Swap HDMI / DisplayPort cable", "HDMI / DisplayPort Cable"],
    ["Swap DisplayPort cable", "DisplayPort Cable"],
    ["Swap HDMI cable", "HDMI Cable"],
    ["Swap LAN cable", "LAN Cable"],
    ["Swap Adapter", "Adapter"],
    ["Swap USB-C cable", "USB-C Cable"],
    ["Swap Dock", "Docking"]
  ];

  for(const [label, part] of dispatchOnWorkFine){
    if(val(label) === "Working") return {result:"Dispatch", part};
  }

  // Software/Firmware resolved = FOP with no FRU part.
  if(val("Lenovo Vantage Update") === "Working") return {result:"FOP", part:"-"};
  if(val("Dock Firmware Update") === "Working") return {result:"FOP", part:"-"};

  // Peripheral reference tests that work normally indicate the customer's external device,
  // not the Dock, may be the cause. FOP has no FRU part.
  if(val("USB Mouse / Keyboard test") === "Working") return {result:"FOP", part:"-"};
  if(val("Headphone Test") === "Working") return {result:"FOP", part:"-"};
  if(val("Swap Headphone") === "Working") return {result:"FOP", part:"-"};

  // No Dock fallback here. Global Decision State will show Pending until enough
  // checklist evidence exists, then the symptom default may be used as last resort.
  return null;
}


function cableAndAccessoryRule(ans){
  for(const r of ans){
    const q = String(r.q || "");
    const a = r.a;
    if(a !== "Working" && a !== "Same Issue") continue;

    // Swapping with a known-good cable/accessory and the issue becomes Working = customer cable/accessory is defective.
    if(a === "Working"){
      if(/Swap Power Cord|Swap Power Cable|Swap Power Cord/i.test(q)) return {result:"Dispatch", part:"Power Cord"};
      if(/Swap HDMI cable/i.test(q)) return {result:"Dispatch", part:"HDMI Cable"};
      if(/Swap DisplayPort cable/i.test(q)) return {result:"Dispatch", part:"DisplayPort Cable"};
      if(/Swap HDMI \/ DisplayPort cable|Swap HDMI\/DP/i.test(q)) return {result:"Dispatch", part:"Display Cable"};
      if(/Swap USB-C cable/i.test(q)) return {result:"Dispatch", part:"USB-C Cable"};
      if(/Swap LAN cable/i.test(q)) return {result:"Dispatch", part:"LAN Cable"};
      if(/Swap Adapter/i.test(q)) return {result:"Dispatch", part:"Adapter"};
      if(/Swap Power Outlet/i.test(q)) return {result:"FOP", part:"-"};
      if(/Swap PSU/i.test(q)) return {result:"Dispatch", part:"PSU"};
    }

    // Cross-test on other machine: Same Issue follows the tested customer part.
    if(a === "Same Issue"){
      if(/Adapter test on other machine/i.test(q)) return {result:"Dispatch", part:"Adapter"};
      if(/Monitor test on other machine/i.test(q)) return {result:"Dispatch", part:"Monitor"};
      if(/Mouse test on other machine/i.test(q)) return {result:"Dispatch", part:"Mouse"};
      if(/Keyboard test on other machine/i.test(q)) return {result:"Dispatch", part:"Keyboard"};
    }
  }
  return null;
}

function recoveryActionRule(ans){
  const recoveryLabels = [
    "Power Reset / Emergency Reset", "Power Reset", "Emergency Reset", "Emergency Reset Hole",
    "BIOS Update", "Load BIOS Default", "Windows Update", "Driver Update", "Driver / Windows Update",
    "Lenovo Vantage Update", "Dock Firmware Update", "Clean Cooling System",
    "Windows Startup Repair", "Re-install Windows", "Safe Mode Test"
  ];
  for(const label of recoveryLabels){
    if(isWorking(ans, label)) return {result:"FOP", part:"-"};
  }
  return null;
}

function nextRequiredChecklist(ans){
  const missing = [];
  const addIfMissing = label => { if(isNotTested(ans, label)) missing.push(label); };

  if(selectedLevel === "boot" && selectedSymptom === "no_power"){
    const product = getProductKey();
    if(product === "desktop" || product === "aio"){
      addIfMissing("Swap Power Cable");
      addIfMissing("Swap Power Outlet");
    }else{
      addIfMissing("Adapter test on other machine");
      addIfMissing(product === "thinkpad" ? "Emergency Reset" : "Power Reset");
    }
  }else if(selectedLevel === "boot" && selectedSymptom === "pond"){
    addIfMissing("External Monitor Test");
    addIfMissing(getProductKey() === "thinkpad" ? "Emergency Reset" : "Power Reset");
  }else{
    getQuestions().forEach(q => {
      if(isRequiredChecklist(q.label) && isNotTested(ans, q.label) && missing.length < 3) missing.push(q.label);
    });
  }

  return [...new Set(missing)].slice(0,3);
}

function accessorySuggestionForPart(part){
  // Legacy helper disabled by v4.8.6 UI rule.
  // Normal Dispatch/FOP cases must not show Suggested PD.
  return "";
}


// v4.8.3 Smart Dispatch Engine helpers
function isMultiPart(part){
  return typeof part === "string" && /\s\/\s/.test(part);
}

function onePart(part){
  if(!part) return "-";
  let p = String(part).replace(/Thermal Module/gi, "Fan").replace(/Thermal/gi, "Fan");
  if(p.includes("/")) p = p.split("/")[0].trim();
  return p || "-";
}

function continueTroubleshooting(){
  return {result:"", part:""};
}

function selectedAnswer(ans, label){
  const key = String(label).trim().toLowerCase();
  const hit = ans.find(x => String(x.q).trim().toLowerCase() === key);
  if(hit) return String(hit.a).startsWith("Yes :") ? "Yes" : hit.a;
  // Legacy decision rules may reference the formerly separate damage/liquid fields.
  if(["physical damage", "liquid spilled", "physical damage / liquid spilled"].includes(key)){
    const combined = ans.find(x => String(x.q).trim().toLowerCase() === "any cid");
    if(combined) return String(combined.a).startsWith("Yes") ? "Yes" : combined.a;
  }
  if(key === "other issue"){
    const other = ans.find(x => String(x.q).trim().toLowerCase() === "any other issue");
    if(other) return String(other.a).startsWith("Yes") ? "Yes" : other.a;
  }
  return undefined;
}

function isSame(ans, label){ return selectedAnswer(ans, label) === "Same Issue"; }
function isWorking(ans, label){ return selectedAnswer(ans, label) === "Working"; }
function isNotTested(ans, label){
  const v = selectedAnswer(ans, label);
  return !v || v === "-- Select --" || v === "Not Test";
}
function isYes(ans, label){ return selectedAnswer(ans, label) === "Yes"; }
function isNo(ans, label){ return selectedAnswer(ans, label) === "No"; }
function hasFailed(ans, label){
  const v = selectedAnswer(ans, label) || "";
  return String(v).startsWith("Failed");
}
function hasUnresolvedSoftwareCause(ans){
  const task = selectedAnswer(ans, "Check Task Manager Usage");
  if(["CPU High","RAM High","Disk High","GPU High"].includes(task)) return true;
  if(selectedAnswer(ans, "Check Power Mode") === "High Performance") return true;
  return false;
}


// v4.8.6 Symptom Recommendation Engine
function selectedAny(ans, labels){
  for(const label of labels){
    const v = selectedAnswer(ans, label);
    if(v !== undefined) return v;
  }
  return undefined;
}

function symptomRecommendation(ans){
  const powerLed = selectedAny(ans, ["Power LED", "LED on power button"]);
  const external = selectedAny(ans, ["External Monitor Test", "Swap Monitor", "External Monitor"]);
  const caps = selectedAnswer(ans, "Caps Lock Toggle");
  const temp = selectedAnswer(ans, "Check Temperature");
  const fanNoiseEvidence = selectedAnswer(ans, "Clean Cooling System") || selectedAnswer(ans, "Check for Dust and Foreign Objects");

  // Critical inconsistency that applies to any symptom containing these two checks.
  if(powerLed === "No" && caps === "Yes"){
    return {
      rec:{result:"Verify Checklist", part:"-"},
      reason:["Power LED = No", "Caps Lock Toggle = Yes"],
      conflicts:[{aLabel:"Power LED", aValue:"No", bLabel:"Caps Lock Toggle", bValue:"Yes"}],
      recommendation:'Please verify the power status with the customer.'
    };
  }

  // Boot symptom routing.
  if(selectedLevel === "boot" && selectedSymptom === "pond"){
    if(powerLed === "No"){
      return {
        rec:{result:'Select "Boot → No Power"', part:"-"},
        reason:["Power LED = No"],
        recommendation:'Boot → No Power'
      };
    }
    if(external === "Working"){
      return {
        rec:{result:'Select "Display → Black Screen"', part:"-"},
        reason:["External Monitor Test = Working"],
        recommendation:'Display → Black Screen'
      };
    }
  }

  if(selectedLevel === "boot" && selectedSymptom === "no_power"){
    if(powerLed === "Yes"){
      return {
        rec:{result:'Select "Boot → Power On No Display"', part:"-"},
        reason:["Power LED = Yes"],
        recommendation:'Boot → Power On No Display'
      };
    }
  }

  // Display routing: if external monitor has the same issue on an internal-display symptom,
  // the case is no longer an internal LCD-only symptom.
  if(selectedLevel === "display" && external === "Same Issue"){
    return {
      rec:{result:'Select "Boot → Power On No Display"', part:"-"},
      reason:["External Monitor Test = Same Issue"],
      recommendation:'Boot → Power On No Display'
    };
  }

  // Fan symptom routing examples.
  if(selectedLevel === "fan" && selectedSymptom === "fan_overheat" && temp === "Normal" && fanNoiseEvidence){
    return {
      rec:{result:'Select "Fan → Fan Noise"', part:"-"},
      reason:["Check Temperature = Normal"],
      recommendation:'Fan → Fan Noise'
    };
  }

  return null;
}

function smartFanRule(ans){
  if(selectedLevel !== "fan") return null;
  if(isYes(ans, "Physical damage / Liquid spilled")) return {result:"CID", part:"-"};

  if(selectedSymptom === "fan_error"){
    if(hasFailed(ans, "Lenovo Diagnostics")) return {result:"Dispatch", part:"Fan"};
    // Lenovo Diagnostics is optional/recommended for Fan Error.
    // If BIOS Update and Load BIOS Default do not resolve the error and there is no damage/other issue, dispatch Fan.
    if(isSame(ans, "BIOS Update") && isSame(ans, "Load BIOS Default")) return {result:"Dispatch", part:"Fan"};
    return continueTroubleshooting();
  }

  if(selectedSymptom === "fan_not_spin"){
    if(selectedAnswer(ans, "Fan Check") === "No Spin" && isNo(ans, "Check for Dust and Foreign Objects") && (hasFailed(ans, "Lenovo Diagnostics") || (isSame(ans, "BIOS Update") && isSame(ans, "Load BIOS Default")))){
      return {result:"Dispatch", part:"Fan"};
    }
    if(isYes(ans, "Check for Dust and Foreign Objects")) return {result:"FOP", part:"Clean Fan / Air Vent"};
    return continueTroubleshooting();
  }

  if(selectedSymptom === "fan_noise"){
    if(isYes(ans, "Check for Dust and Foreign Objects") && isWorking(ans, "Clean Cooling System")) return {result:"FOP", part:"-"};
    if(isSame(ans, "Clean Cooling System") && (hasFailed(ans, "Lenovo Diagnostics") || (isSame(ans, "BIOS Update") && isSame(ans, "Load BIOS Default")))) return {result:"Dispatch", part:"Fan"};
    return continueTroubleshooting();
  }

  if(selectedSymptom === "fan_spin_high"){
    if(hasUnresolvedSoftwareCause(ans)) return continueTroubleshooting();
    if(isSame(ans, "BIOS Update") && isSame(ans, "Load BIOS Default") && selectedAnswer(ans, "Check Task Manager Usage") === "Normal" && selectedAnswer(ans, "Check Power Mode") === "Balanced") return {result:"Dispatch", part:"Fan"};
    return continueTroubleshooting();
  }

  if(selectedSymptom === "fan_overheat"){
    if(isYes(ans, "Check for Dust and Foreign Objects")) return {result:"FOP", part:"Clean Fan / Air Vent"};
    if(hasUnresolvedSoftwareCause(ans)) return continueTroubleshooting();
    if(selectedAnswer(ans, "Check Temperature") === "Overheat" && isNo(ans, "Check for Dust and Foreign Objects") && selectedAnswer(ans, "Check Task Manager Usage") === "Normal" && isSame(ans, "BIOS Update") && isSame(ans, "Load BIOS Default")) return {result:"Dispatch", part:"Fan"};
    return continueTroubleshooting();
  }
  return null;
}

function smartDisplayRule(ans){
  if(selectedLevel !== "display") return null;
  if(isWorking(ans, "External Monitor Test")) return {result:"Dispatch", part:"LCD Panel"};
  if(isSame(ans, "External Monitor Test")) return continueTroubleshooting();
  return null;
}

function smartBootRule(ans){
  if(selectedLevel !== "boot") return null;
  const product = getProductKey();

  if(selectedSymptom === "no_power"){
    // Customer-first No Power logic.
    // Recovery actions that fix the unit = FOP. Swap/cross tests that identify a failed external part = Dispatch that part.
    if(isWorking(ans, "Power Reset / Emergency Reset") || isWorking(ans, "Power Reset")) return {result:"FOP", part:"-"};
    if(isYes(ans, "Physical damage / Liquid spilled")) return {result:"CID", part:"-"};

    // Desktop/AIO power path.
    if(product === "desktop" || product === "aio"){
      if(isWorking(ans, "Swap Power Cable") || isWorking(ans, "Swap Power Cord") || isWorking(ans, "Swap Power Cord")) return {result:"Dispatch", part:"Power Cord"};
      if(isWorking(ans, "Swap Power Outlet")) return {result:"FOP", part:"-"};
      if(isWorking(ans, "Swap PSU")) return {result:"Dispatch", part:"PSU"};
      if(isSame(ans, "Swap Power Cable") && isSame(ans, "Swap Power Outlet")) return {result:"Dispatch", part:"Mainboard"};
      return continueTroubleshooting();
    }

    const adapterOther = selectedAny(ans, ["AC adaptor check", "Adapter Test on Other Machine", "Adapter test on other machine"]);
    const swapAdapter = selectedAnswer(ans, "Swap Adapter");
    const typec = selectedAnswer(ans, "Swap Other Type-C Port");
    const reset = selectedAny(ans, ["Emergency Reset", "Power Reset / Emergency Reset", "Power Reset"]);
    const powerLed = selectedAnswer(ans, "Power LED");
    const chargeLed = selectedAnswer(ans, "Charge LED");
    const damage = selectedAnswer(ans, "Physical Damage");
    const liquid = selectedAnswer(ans, "Liquid Spilled");
    if(damage === "Yes" || liquid === "Yes") return {result:"CID", part:"-"};
    if(reset === "Working") return {result:"FOP", part:"-"};
    // A working original adapter does not prove that the adapter is faulty.
    if(adapterOther === "Working" && swapAdapter === "Working") return {result:"Verify Checklist", part:"-"};
    if(adapterOther === "Not work") return {result:"Dispatch", part:"Adapter"};
    if(adapterOther === "Same Issue" && swapAdapter === "Working") return {result:"Dispatch", part:"Adapter"};
    if(adapterOther === "Same Issue" && swapAdapter !== "Same Issue") return {result:"Dispatch", part:"Adapter"};
    if(swapAdapter === "Working") return {result:"Dispatch", part:"Adapter"};
    // v5.3.9: Evidence-complete ThinkPad/IdeaPad No Power path (no adapter cross-test in this checklist).
    // Both LEDs are off, power reset and tests with a replacement adapter/other Type-C port
    // still show the same issue. Tail questions are not required.
    // A working substitute adapter is implied by "Swap Adapter = Same Issue"; do not
    // infer Mainboard from untested or incomplete steps.
    const noPowerElimination = (product === "thinkpad" || product === "ideapad") &&
       powerLed === "No" && chargeLed === "No" && reset === "Same Issue" &&
       swapAdapter === "Same Issue" && typec === "Same Issue" &&
       // Any CID / Any Other Issue are supporting notes, not required to conclude.
       // Explicit CID = Yes is handled above before the dispatch path.
       selectedAnswer(ans, "Any CID") !== "Yes";
    if(noPowerElimination) return {result:"Dispatch", part:"Mainboard", evidenceKey:"NO_POWER_ELIMINATION"};
    if(typec === "Working") return {result:"Dispatch", part:"Mainboard", modelVerification:true};
    // Required evidence is symptom-specific, not a percentage of completed questions.
    if(adapterOther === "Working" && swapAdapter === "Same Issue" && reset === "Same Issue" &&
       (typec === "Same Issue" || typec === "No Other Port") &&
       powerLed === "No" && chargeLed === "No" && damage === "No" && liquid === "No"){
      return {result:"Dispatch", part:"Mainboard", modelVerification:true};
    }
    if(adapterOther === "Working") return {result:"Pending", part:"-", suspectedPart:"Mainboard"};
    return continueTroubleshooting();
  }

  if(selectedSymptom === "pond"){
    // Power On No Display is used only when external monitor also has no image.
    // Customer cannot run BIOS/Diagnostics when no display.
    if(isWorking(ans, "Power Reset / Emergency Reset") || isWorking(ans, "Power Reset")) return {result:"FOP", part:"-"};
    if(isYes(ans, "Physical damage / Liquid spilled")) return {result:"CID", part:"-"};

    const powerLed = selectedAnswer(ans, "Power LED");
    const external = selectedAnswer(ans, "External Monitor Test") || selectedAnswer(ans, "Swap Monitor");
    const caps = selectedAnswer(ans, "Caps Lock Toggle");
    const resetSame = isSame(ans, "Power Reset / Emergency Reset") || isSame(ans, "Power Reset");

    if(caps === "Yes" && external === "Same Issue") return {result:"Verify Checklist", part:"-"};

    // Evidence-first rule:
    // Power LED = Yes + Caps Lock Toggle = No + External Monitor = Same Issue is enough to dispatch Mainboard.
    // Power Reset is helpful, but must not block dispatch if the evidence is already clear.
    if(powerLed === "Yes" && caps === "No" && external === "Same Issue") return {result:"Dispatch", part:"Mainboard"};
    if(powerLed === "Yes" && external === "Same Issue" && resetSame) return {result:"Dispatch", part:"Mainboard"};
    return continueTroubleshooting();
  }
  return null;
}

function checklistSummaryText(){
  const lines = [formatSymptomTitle(current().name)];
  answers().forEach(r => {
    lines.push(formatNoteLine(r.q, r.a));
  });
  const extra = getAdditionalDetail();
  if(extra){
    extra.split(/\r?\n/).map(x => x.trim()).filter(Boolean).forEach(x => lines.push(`- ${x}`));
  }
  return lines.join("\n");
}

// v4.8.6 Smart Review Engine
function reviewEngine(ans, rec){
  const conflicts = [];
  let override = null;
  const symRec = symptomRecommendation(ans);
  if(symRec){
    if(symRec.conflicts && symRec.conflicts.length){
      return {rec: symRec.rec, conflicts: symRec.conflicts, blockEmail:false};
    }
    return {
      rec: symRec.rec,
      recommendation: true,
      reviewLines: ["Suggestion", "Please select", "", symRec.recommendation]
    };
  }
  const addConflict = (aLabel, aValue, bLabel, bValue) => conflicts.push({aLabel, aValue, bLabel, bValue});

  if(selectedLevel === "boot" && selectedSymptom === "no_power"){
    if(isWorking(ans, "Adapter test on other machine") && rec && rec.part === "Adapter"){
      addConflict("Adapter test on other machine", "Working", "Part", "Adapter");
    }
    if(isWorking(ans, "Swap Adapter") && isWorking(ans, "Adapter test on other machine")){
      addConflict("Swap Adapter", "Working", "Adapter test on other machine", "Working");
    }
  }

  if(selectedLevel === "boot" && selectedSymptom === "pond"){
    const extReview = selectedAnswer(ans, "External Monitor Test") || selectedAnswer(ans, "Swap Monitor");
    const extLabel = selectedAnswer(ans, "External Monitor Test") ? "External Monitor" : "Swap Monitor";
    if(extReview === "Working"){
      addConflict(extLabel, "Working", "Power On No Display", "Selected");
    }
    if(selectedAnswer(ans, "Power LED") === "No" && selectedAnswer(ans, "Caps Lock Toggle") === "Yes"){
      addConflict("Power LED", "No", "Caps Lock Toggle", "Yes");
    }
    if(selectedAnswer(ans, "Caps Lock Toggle") === "Yes" && extReview === "Same Issue"){
      addConflict("Caps Lock Toggle", "Yes", extLabel, "Same Issue");
    }
  }

  if(override) return {rec: override.rec, reviewLines: override.lines, blockEmail:false, override:true};
  if(conflicts.length){
    return {rec:{result:"Verify Checklist", part:"-"}, conflicts, blockEmail:true};
  }
  return {rec, reviewLines:null, blockEmail:false};
}

function reviewText(info){
  if(!info) return "";
  const lines = [checklistSummaryText(), ""];
  if(info.conflicts && info.conflicts.length){
    lines.push("Review");
    lines.push("Inconsistent information detected.");
    lines.push("");
    info.conflicts.forEach((c, idx) => {
      if(idx) lines.push("");
      lines.push(`• ${c.aLabel} = ${c.aValue}`);
      lines.push(`  ↔ ${c.bLabel} = ${c.bValue}`);
    });
    lines.push("");
    lines.push("Please verify with the customer.");
    return lines.join("\n");
  }
  if(info.reviewLines){
    lines.push(...info.reviewLines);
    return lines.join("\n");
  }
  return "";
}

function sanitizeDecision(rec){
  if(!rec) return rec;
  if(rec.result === "Dispatch"){
    rec.part = onePart(rec.part);
    if(isMultiPart(rec.part) || rec.part === "-" || /Software Troubleshooting/i.test(rec.part)) return continueTroubleshooting();
  }
  if(/Thermal Module|Thermal/i.test(rec.part || "")) rec.part = onePart(rec.part);
  if(!rec.result || rec.result === "FOP" || rec.result === "Escalate L2" || rec.result === "Pending") rec.part = rec.result ? "-" : "";
  return rec;
}

function calculateRaw(){
  const sym = withDisplayQuestions(current());
  const ans = answers();

  const symRec = symptomRecommendation(ans);
  if(symRec) return sanitizeDecision(symRec.rec);

  // A reported CID must not be masked by a generic accessory/recovery dispatch.
  // Respect only explicit CID evidence, never an unanswered optional field.
  if(selectedAnswer(ans, "Any CID") === "Yes" || selectedAnswer(ans, "Physical damage / Liquid spilled") === "Yes"){
    return {result:"CID", part:"-"};
  }

  const recoveryRule = recoveryActionRule(ans);
  if(recoveryRule) return sanitizeDecision(recoveryRule);
  const accessoryRule = cableAndAccessoryRule(ans);
  if(accessoryRule) return sanitizeDecision(accessoryRule);

  const fanRule = smartFanRule(ans);
  if(fanRule) return sanitizeDecision(fanRule);
  const bootRule = smartBootRule(ans);
  if(bootRule) return sanitizeDecision(bootRule);
  const displayRule = smartDisplayRule(ans);
  if(displayRule) return sanitizeDecision(displayRule);

  for(const r of ans){
    if(r.a.startsWith("Failed")){
      const detail = r.a.replace("Failed", "").replace(":", "").trim();
      return sanitizeDecision({result:"Dispatch", part: detail || onePart(sym.defaultPart)});
    }
  }

  // Symptom-specific logic must run before static default results.
  // This is required for Dock: default is safe L2, but Working on a swapped item must still dispatch the identified FRU.
  const storageRule = storageEliminationRule(ans);
  if(storageRule) return storageRule;
  const monitorRule = monitorEliminationRule(ans);
  if(monitorRule) return monitorRule;
  const dockRule = dockEliminationRule(ans);
  if(dockRule) return dockRule;

  for(const r of ans){
    // Cross-test logic: customer part tested on another machine.
    // Working = that part is OK, so do not dispatch it. Same Issue = dispatch that part.
    if(r.q.includes("Adapter test on other machine") && r.a === "Same Issue") return {result:"Dispatch", part:"Adapter"};
    if(r.q.includes("Mouse test on other machine") && r.a === "Same Issue") return {result:"Dispatch", part:"Mouse Replacement"};
    if(r.q.includes("Keyboard test on other machine") && r.a === "Same Issue") return {result:"Dispatch", part:"Keyboard"};
    if(r.q.includes("Monitor test on other machine") && r.a === "Same Issue") return {result:"Dispatch", part:"Monitor"};
    if(r.q.includes("SD Card test on other machine") && r.a === "Same Issue") return {result:"FOP", part:"SD Card"};
  }

  for(const r of ans){
    if(r.q.includes("Swap Adapter") && r.a === "Working") return {result:"Dispatch", part:"Adapter"};
    if(r.q.includes("Swap PSU") && r.a === "Working") return {result:"Dispatch", part:"PSU"};
    if((r.q.toLowerCase().includes("ac power cord") || r.q.toLowerCase().includes("power cable") || r.q.toLowerCase().includes("power cord")) && r.a === "Working") return {result:"Dispatch", part:"Power Cord"};
    if((r.q.includes("Swap HDMI") || r.q.includes("Swap HDMI/DP")) && r.a === "Working") return {result:"Dispatch", part:"HDMI / DP Cable"};
    if(r.q.includes("Swap LAN cable") && r.a === "Working") return {result:"Dispatch", part:"LAN Cable"};
    if(r.q.includes("Swap DisplayPort cable") && r.a === "Working") return {result:"Dispatch", part:"DisplayPort Cable"};
    if(r.q.includes("Swap USB-C cable") && r.a === "Working") return {result:"Dispatch", part:"USB-C Cable"};
    if(r.q.includes("Swap Dock") && r.a === "Working") return {result:"Dispatch", part:"Dock"};
    if(r.q.includes("Swap USB-A Port") && r.a === "Working") return {result:"Dispatch", part:"Dock USB-A Port"};
    if(r.q.includes("Swap USB Device") && r.a === "Working") return {result:"Dispatch", part:"USB Device"};
    if(r.q.includes("Swap USB port") && r.a === "Working") return {result:"Dispatch", part:"USB Port"};
    if(r.q.includes("External Monitor") && r.a === "Working") return {result:"Dispatch", part:"LCD Panel"};
    // Same Issue on an external monitor is not enough by itself to identify a Mainboard.
    if(r.q.includes("Monitor test on other machine") && r.a === "Working") return {result:"Dispatch", part:"PC / Graphics Output"};
    if(r.q.includes("Swap Monitor") && r.a === "Working") return {result:"Dispatch", part:"Monitor"};
    if((r.q.includes("USB Keyboard") || r.q.includes("External Keyboard Test") || r.q.includes("Swap Keyboard") || r.q.includes("On-Screen Keyboard")) && r.a === "Working") return {result:"Dispatch", part:"Keyboard"};
    if((r.q.includes("USB Keyboard") || r.q.includes("External Keyboard Test")) && r.a === "Same Issue") return {result:"Dispatch", part:"Mainboard"};
    if(r.q.includes("Swap HDD") && r.a === "Working") return {result:"Dispatch", part:"HDD"};
    if(r.q.includes("Swap Smart Card") && r.a === "Working") return {result:"Dispatch", part:"Smart Card Reader"};
    if(r.q.includes("Swap SIM") && r.a === "Working") return {result:"Dispatch", part:"SIM Tray / WWAN Card"};
    if(r.q.includes("Swap Mouse") && r.a === "Working") return {result:"Dispatch", part:"Mouse Replacement"};
    // A functioning mouse alone does not prove a failed Touchpad / ClickPad.
    if((r.q.includes("Headphone Test") || r.q.includes("Swap Headphone")) && r.a === "Working") return {result:"Dispatch", part:"Speaker"};
    if(r.q.includes("External Mic Test") && r.a === "Working") return {result:"Dispatch", part:"Microphone"};
    if(r.q.includes("Swap Bluetooth Device") && r.a === "Working") return {result:"Dispatch", part:"Bluetooth Device / WLAN Card"};
    if((r.q.includes("Swap SD Card") || r.q.includes("SD Card test")) && r.a === "Working") return {result:"Dispatch", part:"SD Card Reader"};
    if(r.q.includes("Novo Button") && (r.a === "Work Fine" || r.a === "Working" || r.a === "Yes")) return {result:"Dispatch", part:"Power Button / Top Cover"};
  }


  if(!hasEnoughDecisionEvidence(ans)) return pendingConclusion();

  if(sym.defaultResult === "Escalate L2") return {result:"Escalate L2", part:"-"};
  if(sym.defaultResult === "CID") return {result:"CID", part:sym.defaultPart || "-"};

  const fallback = normalizeConclusion({result:sym.defaultResult || "Dispatch", part:sym.defaultPart || "-"});
  if(fallback.result === "Dispatch" && isMultiPart(sym.defaultPart || "")) return continueTroubleshooting();
  return sanitizeDecision(fallback);
}

// v5.3.1: evidence-based suspect layer. Preserve the original raw engine for confirmed decisions.
function suspectDecision(rec, ans){
  if(!rec || ["CID", "FOP", "Verify Checklist"].includes(rec.result) || String(rec.result).startsWith("Select")) return rec;
  const get = label => selectedAnswer(ans, label);
  const level = selectedLevel;
  const symptom = (current() && current().name || "").toLowerCase();
  const chargeCase = (level === "port" && /charg/.test(symptom));
  const powerCase = level === "boot" && /no power/i.test(symptom);
  if(chargeCase || powerCase){
    const cross = get("AC adaptor check") || get("Adapter Test on Other Machine");
    const swap = get("Swap Adapter");
    const reset = get("Power Reset") || get("Emergency Reset") || get("Power Reset / Emergency Reset");
    const port = get("Swap Type-C Port Charge") || get("Swap Other Type-C Port");
    const damage = get("Physical Damage");
    const liquid = get("Liquid Spilled");
    if(cross === "Working" && swap === "Same Issue" && reset === "Same Issue" && port === "Same Issue" && damage !== "Yes" && liquid !== "Yes"){
      return {result:"Suspect", part:"Mainboard", evidenceKey:"POWER_CIRCUIT", recommendation:""};
    }
    if(cross === "Working" && rec.result === "Escalate L2") return {result:"Suspect",part:"Mainboard",evidenceKey:"ADAPTER_OK",recommendation:""};
  }
  // Never dispatch a default FRU solely because 80% of a checklist was completed.
  const hasPositivePartEvidence = ans.some(x => /^Failed(?:\b|:)|^Working$/i.test(x.a || "") && /diagnos|swap|test|external|replace/i.test(x.q || ""));
  if(rec.result === "Dispatch" && rec.evidenceKey === "NO_POWER_ELIMINATION") return rec;
  if(rec.result === "Dispatch" && !hasPositivePartEvidence && rec.part && rec.part !== "-"){
    return {result:"Suspect",part:rec.part,recommendation:""};
  }
  return rec;
}
// v5.4.0: the context-based engine is authoritative for the visible Conclusion.
// Legacy calculateRaw remains available for audit/comparison; never silently
// fall back to it when model-specific evidence is insufficient.
function calculate(){
  const ans = answers();
  if(!window.PDDecisionEngine) return {result:"Escalate L2",part:"-",evidenceReason:"Decision Engine failed to load"};
  const sym = current() || {};
  return sanitizeDecision(normalizeConclusion(window.PDDecisionEngine.evaluate({
    model:getProductKey(), level:selectedLevel, symptom:selectedSymptom,
    answers:ans, defaultPart:sym.defaultPart, defaultResult:sym.defaultResult
  })));
}

function suggestion(){
  // v4.8.6 UI rule: Suggested PD is hidden in normal cases.
  // Symptom recommendations are shown only in Generate Note through Review/Suggestion text.
  return "";
}

// v5.3.0: Explanation follows the actual decision and selected evidence; no AI/network required.
function conclusionReason(rec, ans){
  if(rec && rec.evidenceReason) return rec.evidenceReason;
  const get = label => selectedAnswer(ans, label);
  const result = rec.result || "Pending";
  const part = rec.part || "";
  if(result === "Pending"){
    if(rec.suspectedPart === "Mainboard") return "Adapter เดิมใช้กับเครื่องอื่นได้ จึงควรตรวจสอบ Emergency Reset, Adapter ทดแทน และพอร์ตชาร์จตามรุ่นเพิ่มเติม ก่อนระบุ Part";
    const missing = ans.filter(x => !isAnsweredValue(x.a) || x.a === "Not Test").map(x => x.q).filter(x => !/other issue|fru p\/n/i.test(x)).slice(0,3);
    return missing.length ? "หลักฐานยังไม่เพียงพอ กรุณาตรวจสอบเพิ่มเติม: " + missing.join(", ") : "ผลตรวจสอบยังไม่สามารถระบุ Part ได้อย่างชัดเจน ควรทบทวนหลักฐานหรือส่งต่อ L2";
  }
  if(result === "Verify Checklist") return "พบคำตอบที่อาจขัดแย้งกัน กรุณาตรวจสอบผลทดสอบกับลูกค้าอีกครั้งก่อนสรุปผล";
  if(result.startsWith("Select")) return "ข้อมูลที่ตรวจพบอาจไม่ตรงกับอาการที่เลือก กรุณายืนยันอาการและเลือกหัวข้อ Troubleshooting ที่เหมาะสม";
  if(result === "CID") return "พบข้อมูลความเสียหายภายนอกหรือของเหลว ควรตรวจสอบตามขั้นตอน CID ก่อนดำเนินการ";
  if(result === "FOP") return "อาการได้รับการแก้ไขจากขั้นตอน Troubleshooting ที่ทำแล้ว กรุณายืนยันว่าเครื่องกลับมาใช้งานได้ตามปกติ";
  if(result === "Escalate L2") return "ผลตรวจสอบยังไม่สามารถระบุ Part ได้อย่างชัดเจน ควรทบทวนหลักฐานหรือส่งต่อ L2";
  if(result === "Suspect"){
    if(rec.evidenceKey === "POWER_CIRCUIT") return "Adapter สามารถใช้งานกับเครื่องอื่นได้ แต่เครื่องยังมีอาการหลังเปลี่ยน Adapter ทดสอบพอร์ต Type-C และทำ Power Reset จึงสงสัยว่า Mainboard หรือวงจรชาร์จภายในอาจมีปัญหา";
    if(rec.evidenceKey === "ADAPTER_OK") return "Adapter เดิมสามารถใช้งานกับเครื่องอื่นได้ จึงสงสัยวงจรจ่ายไฟหรือ Mainboard ภายในเครื่อง แต่ยังต้องตรวจสอบผลการทดสอบอื่นเพิ่มเติม";
    const evidence = ans.filter(x => isAnsweredValue(x.a) && x.a !== "Not Test").slice(0,2).map(x => x.q + " = " + x.a);
    return "ผลการตรวจสอบ" + (evidence.length ? " (" + evidence.join(", ") + ")" : "เบื้องต้น") + " ทำให้สงสัย " + part + " แต่หลักฐานยังไม่เพียงพอที่จะยืนยันการเปลี่ยนอะไหล่";
  }
  if(result === "Dispatch" && selectedLevel === "boot" && selectedSymptom === "no_power"){
    if(part === "Mainboard"){
      if(rec.evidenceKey === "NO_POWER_ELIMINATION") return "Power LED และ Charge LED ไม่ติด หลัง Emergency Reset, ทดสอบ Adapter ทดแทน และพอร์ต Type-C อีกช่องหนึ่งยังพบอาการเดิม จึงแนะนำเบิก Mainboard โดยยืนยัน Part/FRU ตามรุ่น และตรวจสอบ BitLocker Recovery Key ก่อนเปลี่ยน";
      if(get("Swap Other Type-C Port") === "Working") return "เครื่องทำงานผ่านพอร์ต Type-C อีกช่องหนึ่ง จึงสงสัยวงจรชาร์จของพอร์ตเดิม ต้องยืนยัน FRU ตามรุ่นก่อนเปลี่ยน Mainboard";
      return "Adapter เดิมใช้กับเครื่องอื่นได้ แต่เครื่องยังไม่เปิดหลัง Reset, เปลี่ยน Adapter และทดสอบพอร์ตอื่น จึงสงสัยวงจร Power ภายในเครื่อง ต้องยืนยัน FRU ตามรุ่นก่อน Dispatch";
    }
    if(part === "Adapter") return "ผลการทดสอบ Adapter สนับสนุนว่าอุปกรณ์จ่ายไฟเดิมอาจผิดปกติ ควรยืนยันกำลังไฟและรุ่น Adapter ที่ใช้ทดสอบก่อน Dispatch";
  }
  if(result === "Dispatch"){
    const evidence = ans.filter(x => isAnsweredValue(x.a) && x.a !== "Not Test" && /^(Failed|Working|Same Issue|No)$/i.test(x.a)).slice(0,2);
    const observed = evidence.length ? " จากผล " + evidence.map(x => x.q + " = " + x.a).join(" และ ") : " จากผลการตรวจสอบที่บันทึกไว้";
    return "ระบบแนะนำ " + part + observed + " กรุณายืนยันผลทดสอบและความเข้ากันได้ของ Part ตามรุ่นก่อน Dispatch";
  }
  return "โปรดตรวจสอบผล Troubleshooting และยืนยันข้อมูลก่อนดำเนินการต่อ";
}
function renderConclusion(rec){
  const box = el("recommendation");
  if(!box) return;
  const ans = answers();
  // An untouched checklist is a blank conclusion, not a Pending diagnosis.
  const hasEvidence = ans.some(x => isAnsweredValue(x.a) && x.a !== "Not Test");
  const resultText = rec.result === "Dispatch" ? "Dispatch " + (rec.part && rec.part !== "-" ? rec.part : "") : rec.result === "Suspect" ? (rec.part && rec.part !== "-" ? rec.part + " Suspect" : "Pending") : rec.result;
  box.innerHTML = "";
  if(typeof document.querySelectorAll === "function") document.querySelectorAll("body > .conclusion-reason-overlay").forEach(node => node.remove());
  if(window.__reasonPopoverCleanup) window.__reasonPopoverCleanup();
  if(!hasEvidence || !String(resultText || "").trim() || resultText === "Pending") {
    const emptyHeading = document.createElement("div");
    emptyHeading.className = "conclusion-result";
    emptyHeading.textContent = "Result :";
    box.appendChild(emptyHeading);
    return;
  }
  const heading = document.createElement("div");
  heading.className = "conclusion-result";
  heading.textContent = "Result : " + resultText.trim();
  box.appendChild(heading);

  // Reason is available only from the info icon beside a populated Result.
  if(typeof document.querySelectorAll === "function") document.querySelectorAll("body > .conclusion-reason-overlay").forEach(node => node.remove());
  if(window.__reasonPopoverCleanup) window.__reasonPopoverCleanup();
  const fullReason = hasEvidence ? conclusionReason(rec, ans) : "";
  if(hasEvidence && String(resultText || "").trim() && fullReason){
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "reason-toggle";
    toggle.textContent = "ⓘ";
    toggle.title = "ดูเหตุผลของ Result";
    toggle.setAttribute("aria-label", "ดูเหตุผลของ Result");
    toggle.setAttribute("aria-expanded", "false");
    heading.appendChild(toggle);
    const overlay = document.createElement("div");
    overlay.className = "conclusion-reason-overlay hidden";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-label", "Reason");
    overlay.textContent = fullReason;
    (document.body || box).appendChild(overlay);
    const close = () => {overlay.classList.add("hidden");toggle.setAttribute("aria-expanded","false");};
    const position = () => {
      const rect = toggle.getBoundingClientRect();
      const width = Math.min(340,window.innerWidth-20);
      overlay.style.width = width+"px";
      const roomRight = window.innerWidth - rect.right - 12;
      overlay.style.left = (roomRight >= width ? rect.right + 8 : Math.max(10,window.innerWidth-width-10)) + "px";
      const below = window.innerHeight-rect.bottom-16;
      const above = rect.top-16;
      const useBelow = below>=130 || below>=above;
      overlay.style.maxHeight = Math.min(220,Math.max(65,useBelow?below:above))+"px";
      overlay.style.top = (useBelow?rect.bottom+8:Math.max(10,rect.top-Math.min(220,above)-8))+"px";
    };
    toggle.addEventListener("click", event => {
      event.stopPropagation();
      if(overlay.classList.contains("hidden")){overlay.classList.remove("hidden");position();toggle.setAttribute("aria-expanded","true");}
      else close();
    });
    const outside = event => {if(!overlay.classList.contains("hidden") && !overlay.contains(event.target) && !toggle.contains(event.target))close();};
    const escape = event => {if(event.key==="Escape" && !overlay.classList.contains("hidden")){close();toggle.focus();}};
    const reposition = () => {if(!overlay.classList.contains("hidden"))position();};
    document.addEventListener("pointerdown",outside);
    document.addEventListener("keydown",escape);
    window.addEventListener("resize",reposition);
    document.addEventListener("scroll",reposition,true);
    window.__reasonPopoverCleanup = () => {
      if(document.removeEventListener){document.removeEventListener("pointerdown",outside);document.removeEventListener("keydown",escape);document.removeEventListener("scroll",reposition,true);}
      if(window.removeEventListener)window.removeEventListener("resize",reposition);
      if(overlay.remove)overlay.remove();
    };
  }
  // Display-only reminders: never modify checklist answers, result, reason, or Note/Email.
  const reminderItems = [];
  const cid = ans.find(item => String(item.q || "").trim().toLowerCase() === "any cid");
  if(cid && /^Yes(?:\s*:|$)/i.test(String(cid.a || "").trim())){
    reminderItems.push(["CID Detected", "ตรวจสอบรายละเอียด CID ก่อนดำเนินการ Dispatch"]);
  }
  // Remind on both Suspect and Dispatch, but never on Pending, FOP, or Escalate L2.
  if(hasEvidence && (rec.result === "Dispatch" || rec.result === "Suspect")){
    const part = String(rec.part || "").toLowerCase();
    if(/main\s*board|mother\s*board/.test(part)){
      reminderItems.push(["Bitlocker Reminder", "ตรวจสอบ BitLocker Recovery Key ก่อนเปลี่ยน Mainboard"]);
    }
    if(/\bssd\b|solid.state/.test(part)){
      reminderItems.push(["Backup Data / Hold SSD", "ยืนยันการสำรองข้อมูลและสอบถาม Hold SSD กับลูกค้า"]);
    }
  }
  if(reminderItems.length){
    const reminders = document.createElement("div");
    reminders.className = "conclusion-reminders";
    reminders.setAttribute("role", "status");
    reminderItems.forEach(([title, message]) => {
      const item = document.createElement("div");
      item.className = "conclusion-reminder";
      const heading = document.createElement("strong");
      heading.textContent = "⚠ " + title + " :";
      const description = document.createElement("span");
      description.textContent = message;
      item.append(heading, description);
      reminders.appendChild(item);
    });
    box.appendChild(reminders);
  }
  // Re-rendering on another symptom resets the overlay to closed automatically.
}

function updateRecommendation(){
  if(isManual()) return;
  const rec = normalizeConclusion(calculate());
  const box = el("recommendation");
  renderConclusion(rec);
  box.className = "recommendation";
  const lower = `${rec.result} ${rec.part}`.toLowerCase();
  if(lower.includes("fop")) box.classList.add("rec-fop");
  else if(lower.includes("adapter") || lower.includes("power cord")) box.classList.add("rec-adapter");
  else if(lower.includes("lcd") || lower.includes("camera")) box.classList.add("rec-lcd");
  else if(lower.includes("escalate")) box.classList.add("rec-l2");
  else if(lower.includes("mainboard")) box.classList.add("rec-mainboard");

  const s = suggestion();
  const sbox = el("suggestion");
  if(s){ sbox.textContent = s; sbox.classList.remove("hidden"); }
  else{ sbox.textContent = ""; sbox.classList.add("hidden"); }
  forceConclusionRed();
}


function formatSymptomTitle(text){
  let out = String(text || "").trim().toLowerCase();
  out = out.replace(/\busb\b/g, "USB");
  out = out.replace(/^./, c => c.toUpperCase());
  return out;
}

function formatOutputText(text){
  let out = String(text || "").trim().toLowerCase();
  // RESULT / EMAIL rule: keep only USB and FRU P/N uppercase; keep type-c and bios lowercase.
  out = out.replace(/\busb\b/g, "USB");
  out = out.replace(/\bfru p\/n\b/g, "FRU P/N");
  return out;
}

function formatNoteLine(label, answer){
  const isBlank = !answer || answer === "-- Select --";
  const normalizedLabel = String(label || "").trim().toLowerCase();
  if(normalizedLabel === "fru p/n"){
    return "- FRU P/N - " + (isBlank ? "" : String(answer).toUpperCase());
  }
  if(normalizedLabel === "specific keys listed"){
    return "- Specific Keys Listed - " + (isBlank ? "" : String(answer).toUpperCase());
  }
  return `- ${formatOutputText(label)} - ${isBlank ? "" : formatOutputText(answer)}`;
}

function nextRequiredActionText(label){
  const map = {
    "External Monitor Test": "Connect an external monitor and check the display result.",
    "Swap Monitor": "Test with another monitor.",
    "Adapter test on other machine": "Test the adapter on another machine.",
    "Swap Adapter": "Test with another adapter.",
    "Swap other Type-C port": "Test another Type-C charging port.",
    "Power Reset / Emergency Reset": "Complete Power Reset / Emergency Reset.",
    "Power Reset": "Complete Power Reset.",
    "Emergency Reset": "Complete Emergency Reset.",
    "Swap Power Cable": "Test with another power cable.",
    "Swap Power Cord": "Test with another power cord.",
    "Swap Power Outlet": "Test with another power outlet.",
    "Swap HDMI cable": "Test with another HDMI cable.",
    "Swap USB-C cable": "Test with another USB-C cable.",
    "Swap LAN cable": "Test with another LAN cable.",
    "Swap USB Device": "Test with another USB device.",
    "Swap USB port": "Test another USB port."
  };
  return map[label] || `Complete ${label}.`;
}

function generateText(){
  if(isKnowledgeLevel()) return getKnowledgeText();
  const ans = answers();
  const baseRec = normalizeConclusion(calculate());
  const review = reviewEngine(ans, baseRec);
  if(review && review.rec){
    const box = el("recommendation");
    if(box){
      renderConclusion(review.rec);
    }
  }
  // If there is inconsistent information or a wrong-symptom suggestion, show only the Review/Suggestion content.
  if(review && (review.conflicts || review.reviewLines)) return reviewText(review);

  return checklistSummaryText();
}


function guideFromChecklist(){
  const q = getQuestions().map(x => x.label.toLowerCase());
  let lines = [current().name, "", "รบกวนช่วยทดสอบและตรวจสอบเบื้องต้นตามขั้นตอนดังนี้"];
  q.forEach((item, i) => lines.push(`${i+1}. ${item}`));
  return lines.join("\n");
}



// v4.8.3 Email TH rule: write customer steps, keep only final result request at the bottom.
function setNote(text){
  el("note").value = text;
  saveTroubleshootingState();
}
function generateNote(){
  gaTrack("generate_note", {
    level1: getLevelName(),
    symptom: getSymptomName()
  });
  setNote(generateText());
  updateRecommendation();
}
async function copyCurrentNote(){
  const note = el("note");
  const button = el("copyNoteBtn");
  if(!note || !button || !note.value) return;
  const value = note.value;
  let copied = false;
  try {
    if(navigator.clipboard && window.isSecureContext){
      await navigator.clipboard.writeText(value);
      copied = true;
    }
  } catch(_error){}
  if(!copied){
    // Fallback for local file:// use in offline Chrome.
    note.focus();
    note.select();
    try { copied = document.execCommand("copy"); } catch(_error){}
    note.setSelectionRange(note.value.length, note.value.length);
  }
  if(copied){
    const text = button.querySelector("span");
    if(text){
      text.textContent = "Copied!";
      clearTimeout(button._copyReset);
      button._copyReset = setTimeout(() => { text.textContent = "Copy"; }, 1600);
    }
  }
}
function copyGuide(){ setNote(isKnowledgeLevel() ? getKnowledgeText() : guideFromChecklist()); }
function sendEmailTH(){
  gaTrack("email_th", {
    level1: getLevelName(),
    symptom: getSymptomName()
  });
  setNote(emailFromChecklist("TH"));
}
function sendEmailEN(){
  gaTrack("email_en", {
    level1: getLevelName(),
    symptom: getSymptomName()
  });
  setNote(emailFromChecklist("EN"));
}
function clearAll(){
  if(activeModule === "troubleshooting") clearTroubleshootingState();
  el("search").value = "";
  setSearchClearVisibility();
  renderMain();
  el("note").value = "";
}

function filterSymptoms(){
  renderInlineSearchSuggestions();
}

function renderAll(){
  ensureSelectionAvailable();
  renderModuleTabs();
  if(activeModule === "troubleshooting"){
    renderLevel1();
    renderSymptoms();
    renderMain();
  }else if(activeModule === "code" || activeModule === "guide"){
    renderReferenceView();
  }else if(activeModule === "labor"){
    renderLaborMapping();
  }
  setSearchClearVisibility();
  if(false) renderGlobalSearch();
  else {
    const panel = el("globalSearchPanel");
    if(panel) panel.classList.add("hidden");
    showModuleView();
  }
}


// Main Battery Calculator lives within its own tab; only email previews are modal.
function initBatteryHealthCalculator(){
  const design = el("batteryDesign"), full = el("batteryFull"), output = el("batteryResult");
  const clear = el("batteryClear");
  if(!design || !full || !output || !clear) return;
  function update(){
    const percentage = batteryHealthPercentage(design.value,full.value);
    output.textContent = percentage === null ? "Battery Health (%) —" : "Battery Health (%) " + percentage.toFixed(1) + "%";
  }
  [design,full].forEach(input => input.addEventListener("input",update));
  clear.addEventListener("click",() => {design.value = "";full.value = "";update();design.focus();});
  el("batteryEmailTh").addEventListener("click",() => openBatteryEmailPreview("th",() => batteryHealthPercentage(design.value,full.value)));
  el("batteryEmailEn").addEventListener("click",() => openBatteryEmailPreview("en",() => batteryHealthPercentage(design.value,full.value)));
  update();
}

document.addEventListener("DOMContentLoaded", () => {
  if(el("tabTroubleshooting")) el("tabTroubleshooting").addEventListener("click", () => switchModule("troubleshooting"));
  if(el("tabCode")) el("tabCode").addEventListener("click", () => switchModule("code"));
  if(el("tabUserGuide")) el("tabUserGuide").addEventListener("click", () => switchModule("guide"));
  if(el("tabLaborMapping")) el("tabLaborMapping").addEventListener("click", () => switchModule("labor"));
  if(el("tabBatteryHealth")) el("tabBatteryHealth").addEventListener("click", () => switchModule("battery"));
  initBatteryHealthCalculator();
  el("product").addEventListener("change", () => {
    const productText = el("product").options[el("product").selectedIndex].text;
    gaTrack("product_selected", { product: productText });
    // v4.7.0: force clean state and re-render to prevent missing Level 1 / Symptom items.
    if(el("search")) el("search").value = "";
    ensureSelectionAvailable();
    const visibleSymptoms = getVisibleSymptomKeys(selectedLevel);
    if(visibleSymptoms.length) selectedSymptom = visibleSymptoms[0];
    renderAll();
  });
  el("search").addEventListener("input", filterSymptoms);
  wireSuggestionKeys("search");
  wireSuggestionKeys("laborSearch");
  if(el("searchClearBtn")) el("searchClearBtn").addEventListener("click", clearSearchOnly);
  if(el("laborSearch")) el("laborSearch").addEventListener("input", renderLaborSuggestions);
  if(el("laborSearchClearBtn")) el("laborSearchClearBtn").addEventListener("click", clearLaborSearch);
  el("topClearBtn").addEventListener("click", clearAll);
  el("generateBtn").addEventListener("click", generateNote);
  el("copyNoteBtn").addEventListener("click", copyCurrentNote);
  el("emailThBtn").addEventListener("click", sendEmailTH);
  el("emailEnBtn").addEventListener("click", sendEmailEN);
  if(el("note")) el("note").addEventListener("input", saveTroubleshootingState);
  el("clearBtn").addEventListener("click", clearAll);
  el("modalCloseBtn").addEventListener("click", closeGuideModal);
  if(el("guideModal")) el("guideModal").addEventListener("click", event => {
    if(event && event.target === el("guideModal")) closeGuideModal();
  });
  document.addEventListener("keydown", event => {
    if(event && event.key === "Escape" && el("guideModal") && !el("guideModal").classList.contains("hidden")) closeGuideModal();
  });
  renderAll();
  runBackgroundDiagnostics();
});


// v4.9.3 Email Writing Rules - Full Audit update
// Customer emails must be concise instructions, not raw checklist labels.
// One checklist item must become one customer-friendly instruction.
// Use short imperative wording and preserve the visible checklist order.

function _cleanLabel(label){
  return String(label || "").trim();
}

function _stripKnownSuffix(text){
  return String(text || "").replace(/\s+Driver$/i, "").replace(/\s+Device$/i, "").trim();
}

// ============================================================================
// v5.2.7 Excel-Only Data Rules
// PD_Guide_Database.xlsx is the sole source of truth for:
// LEVEL 1, SYMPTOM / GUIDE, CHECKLIST, Dropdown ID, Email TH, Email EN,
// and Related Guide Key. Master values are resolved during database.js generation. No legacy mapping, fallback text, injection, removal,
// renumbering, or reordering is allowed for these fields.
// ============================================================================
function getVisibleLevelKeys(){
  const product = getProductKey();
  const structure = (typeof MODEL_STRUCTURE !== "undefined" && MODEL_STRUCTURE[product])
    ? MODEL_STRUCTURE[product]
    : [];
  return structure
    .map(item => item.level)
    .filter(levelKey => LEVELS[levelKey] && levelKey !== "bios" && levelKey !== "error" && levelKey !== "manual");
}

function getVisibleSymptomKeys(levelKey){
  const product = getProductKey();
  const structure = (typeof MODEL_STRUCTURE !== "undefined" && MODEL_STRUCTURE[product])
    ? MODEL_STRUCTURE[product]
    : [];
  const row = structure.find(item => item.level === levelKey);
  return row ? row.symptoms.filter(symptomKey => LEVELS[levelKey] && LEVELS[levelKey].symptoms[symptomKey]) : [];
}

function getQuestions(){
  if(isManual()) return [];
  const sym = current();
  const product = getProductKey();
  const source = sym.questions && Array.isArray(sym.questions[product])
    ? sym.questions[product].slice()
    : (Array.isArray(sym.common) ? sym.common.slice() : []);
  // Shared checks are sourced from Excel; retain legacy hiding of CID/physical-damage rows.
  // TODO: migrate legacy Physical Damage / Liquid Spilled into the workbook's visible scope rules.
  return source.filter(q => !/^(physical damage|liquid spilled|physical damage\s*\/\s*liquid spilled|any physical damage, liquid spilled)$/i.test(String(q.label || "").trim()));
}

function getQuestionOptions(question){
  return question && Array.isArray(question.optionsList) ? question.optionsList.slice() : [];
}

function getRelatedGuideKeys(){
  if(isManual()) return [];
  const resolved = [];
  getQuestions().forEach(question => {
    getPopupGuideKeysForQuestion(question).forEach(key => {
      if(!resolved.includes(key)) resolved.push(key);
    });
  });
  return resolved;
}

function stripLegacyItemNumber(text){
  return String(text || "")
    .replace(/^\s*(?:ข้อ\s*)?\d+\s*[.\)\-:]\s*/i, "")
    .trim();
}

function neutralThaiEmail(text){
  return String(text || "").replace(/(?:ครับ\s*\/\s*ค่ะ|ค่ะ\s*\/\s*ครับ|ครับ|ค่ะ)/g, "").replace(/[ \t]+(?=\n|$)/gm, "");
}
function emailFromChecklist(lang){
  if(isManual()) return lang === "EN" ? (current().emailEN || "") : neutralThaiEmail(current().emailTH || "");
  const field = lang === "EN" ? "emailEN" : "emailTH";
  const header = lang === "EN"
    ? ["Dear Customer,", "", "Please follow the steps below."]
    : ["เรียน คุณลูกค้า", "", "รบกวนช่วยดำเนินการตามขั้นตอนดังต่อไปนี้"];
  const footer = lang === "EN"
    ? "Once completed, please send us the result and attach any photo or test result if available, so we can proceed with the next step."
    : "หากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับ พร้อมแนบรูปหรือผลการทดสอบ (ถ้ามี) เพื่อให้ทางเราดำเนินการในขั้นตอนถัดไป";
  const body = getQuestions()
    .filter(row => !(lang === "TH" && selectedLevel === "battery" && /^(Battery Health \(\%\)|Sealed Battery Warranty)$/i.test(row.label || "")))
    .map(row => lang === "TH" ? neutralThaiEmail(stripLegacyItemNumber(row[field])) : stripLegacyItemNumber(row[field]))
    .filter(Boolean)
    .map((line, index) => `${index + 1}. ${line}`);
  const spacedBody = [];
  body.forEach((line, index) => {
    if(index) spacedBody.push("");
    spacedBody.push(line);
  });
  return header.concat([""], spacedBody, ["", footer]).join("\n");
}

