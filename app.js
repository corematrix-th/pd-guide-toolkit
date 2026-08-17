
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
    "Lenovo Vantage Update", "Battery Health", "Reset Battery",
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
    {label:"Check BIOS", options:"swap"},
    {label:"Move LCD lid", options:"select"},
    {label:"External Monitor test", options:"swap"},
    {label:"Graphics Driver Update", options:"select"},
    {label:"Physical damage / Liquid spilled", options:"yesno"},
    {label:"Other issue", options:"yesno", text:true}
  ];
  return {...sym, common};
}

// v5.0.0 Final Normalization: canonical checklist labels + runtime de-duplication
// Excel-only data rule (v5.2.4)
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
    return {...biosData, ...codeData};
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
    guide: el("tabUserGuide")
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
  if(trouble){
    if(activeModule === "troubleshooting") trouble.classList.remove("hidden");
    else trouble.classList.add("hidden");
  }
  if(reference){
    if(activeModule === "troubleshooting") reference.classList.add("hidden");
    else reference.classList.remove("hidden");
  }
}

function switchModule(moduleName, options = {}){
  if(!["troubleshooting", "code", "guide"].includes(moduleName)) return;
  activeModule = moduleName;
  if(!options.keepSearch && el("search")) el("search").value = "";
  setSearchClearVisibility();
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

  // v5.2.4: Code and Guide are direct-reference lists. Category mappings remain
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

function updateCurrentSelection(){
  const product = el("product").options[el("product").selectedIndex].text;
  const text = isManual() ? current().name : `${product} → ${LEVELS[selectedLevel].name} → ${current().name}`;
  el("currentSelection").innerHTML = `<b>Current Selection:</b> ${text}`;
}


function getManualGuide(key){
  const manuals = LEVELS.manual && LEVELS.manual.symptoms ? LEVELS.manual.symptoms : {};
  return manuals[key] || null;
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
  el("modalBody").textContent = getGuideTextForCurrentModel(guide);
  el("guideModal").classList.remove("hidden");
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

  return {
    status: errors.length ? "FAIL" : "PASS",
    errors,
    meta,
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

function renderRelatedGuide(){
  const rightBox = el("rightRelatedGuide") || el("relatedGuide");
  if(rightBox){
    rightBox.innerHTML = "";
    rightBox.classList.add("hidden");
  }

  const old = document.getElementById("relatedGuideInline");
  if(old) old.remove();

  if(isManual()) return;

  const keys = getRelatedGuideKeys();
  const valid = keys.map(key => [key, getManualGuide(key)]).filter(x => x[1]);
  if(!valid.length) return;

  const wrapper = document.createElement("div");
  wrapper.id = "relatedGuideInline";
  wrapper.className = "related-guide-inline";

  const title = document.createElement("div");
  title.className = "section-title related-title";
  title.textContent = "RELATED GUIDE";
  wrapper.appendChild(title);

  const box = document.createElement("div");
  box.className = "related-guide";
  valid.forEach(([key, guide]) => {
    const chip = document.createElement("span");
    chip.className = "guide-chip";
    chip.textContent = shortGuideName(guide.name);
    chip.onclick = () => openGuideModal(key);
    box.appendChild(chip);
  });
  wrapper.appendChild(box);

  const checklist = el("checklist");
  if(checklist) checklist.appendChild(wrapper);
}

function shortGuideName(name){
  return name
    .replace("Lenovo Vantage Update","Vantage")
    .replace("Lenovo Diagnostics","Diagnostics")
    .replace("Microsoft Office Activation","Office Activation")
    .replace("Re-install Windows","Re-install Windows")
    .replace("Bypass Windows 11 OOBE","Windows 11 Bypass");
}


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
  const progress = el("checklistProgress");
  const progressText = el("checklistProgressText");
  const progressBar = el("checklistProgressBar");
  if(!progress || !progressText || !progressBar) return;

  if(isKnowledgeLevel() || !current()){
    progress.classList.add("hidden");
    progressText.classList.add("hidden");
    progressBar.style.width = "0%";
    return;
  }

  const questions = getQuestions();
  const total = questions.length;
  let completed = 0;
  questions.forEach((question, index) => {
    const done = checklistItemCompleted(question, index);
    if(done) completed += 1;
    const row = el(`checkRow${index}`);
    if(row){
      if(done) row.classList.add("is-complete");
      else row.classList.remove("is-complete");
    }
  });

  const percent = total ? Math.round((completed / total) * 100) : 0;
  progressText.textContent = `Checklist ${completed} / ${total} completed`;
  progressBar.style.width = `${percent}%`;
  progress.classList.remove("hidden");
  progressText.classList.remove("hidden");
}

function handleChecklistUpdate(){
  updateRecommendation();
  updateChecklistProgress();
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
      select.addEventListener("change", handleChecklistUpdate);
      row.appendChild(select);
    }else{
      row.appendChild(document.createElement("div"));
    }

    // Excel-only rule: show a text box only when the dropdown syntax contains Text Input.
    if(q.text){
      const input = document.createElement("input");
      input.id = `t${i}`;
      input.placeholder = "detail";
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
    checklist.appendChild(detail);
  }
  renderRelatedGuide();
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
  return label === "Physical damage / Liquid spilled" || label === "Other issue" || label === "FRU P/N";
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
  const hit = ans.find(x => x.q === label);
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
    addIfMissing("External Monitor test");
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
  const hit = ans.find(x => x.q === label);
  return hit ? hit.a : undefined;
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
  const external = selectedAny(ans, ["External Monitor test", "Swap Monitor", "External Monitor"]);
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
        reason:["External Monitor test = Working"],
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
      reason:["External Monitor test = Same Issue"],
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
  if(isWorking(ans, "External Monitor test")) return {result:"Dispatch", part:"LCD Panel"};
  if(isSame(ans, "External Monitor test")) return continueTroubleshooting();
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

    const adapterOther = selectedAnswer(ans, "Adapter test on other machine");
    const swapAdapter = selectedAnswer(ans, "Swap Adapter");
    const typec = selectedAnswer(ans, "Swap other Type-C port");
    const resetSame = isSame(ans, "Power Reset / Emergency Reset") || isSame(ans, "Power Reset");

    // If another Type-C port works, dispatch the part that owns the port for the model.
    // For current Toolkit models this is Mainboard.
    if(typec === "Working") return {result:"Dispatch", part:"Mainboard"};

    // Customer adapter failed on another machine = adapter evidence.
    if(adapterOther === "Same Issue") return {result:"Dispatch", part:"Adapter"};

    // Customer adapter works on another machine = do not dispatch adapter.
    if(adapterOther === "Working"){
      if((typec === "Same Issue" || typec === "No Other Port" || typec === undefined) && resetSame) return {result:"Dispatch", part:"Mainboard"};
      return continueTroubleshooting();
    }

    // Swapping to a known-good adapter fixes the issue, but only when not contradicted by other adapter evidence.
    if(swapAdapter === "Working") return {result:"Dispatch", part:"Adapter"};

    return continueTroubleshooting();
  }

  if(selectedSymptom === "pond"){
    // Power On No Display is used only when external monitor also has no image.
    // Customer cannot run BIOS/Diagnostics when no display.
    if(isWorking(ans, "Power Reset / Emergency Reset") || isWorking(ans, "Power Reset")) return {result:"FOP", part:"-"};
    if(isYes(ans, "Physical damage / Liquid spilled")) return {result:"CID", part:"-"};

    const powerLed = selectedAnswer(ans, "Power LED");
    const external = selectedAnswer(ans, "External Monitor test") || selectedAnswer(ans, "Swap Monitor");
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
    const extReview = selectedAnswer(ans, "External Monitor test") || selectedAnswer(ans, "Swap Monitor");
    const extLabel = selectedAnswer(ans, "External Monitor test") ? "External Monitor" : "Swap Monitor";
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
    if(r.q.includes("External Monitor") && r.a === "Same Issue") return {result:"Dispatch", part:"Mainboard"};
    if(r.q.includes("Monitor test on other machine") && r.a === "Working") return {result:"Dispatch", part:"PC / Graphics Output"};
    if(r.q.includes("Swap Monitor") && r.a === "Working") return {result:"Dispatch", part:"Monitor"};
    if((r.q.includes("USB Keyboard") || r.q.includes("Swap Keyboard") || r.q.includes("On-Screen Keyboard")) && r.a === "Working") return {result:"Dispatch", part:"Keyboard"};
    if(r.q.includes("USB Keyboard") && r.a === "Same Issue") return {result:"Dispatch", part:"Mainboard"};
    if(r.q.includes("Swap HDD") && r.a === "Working") return {result:"Dispatch", part:"HDD"};
    if(r.q.includes("Swap Smart Card") && r.a === "Working") return {result:"Dispatch", part:"Smart Card Reader"};
    if(r.q.includes("Swap SIM") && r.a === "Working") return {result:"Dispatch", part:"SIM Tray / WWAN Card"};
    if(r.q.includes("Swap Mouse") && r.a === "Working") return {result:"Dispatch", part:"Mouse Replacement"};
    if((r.q.includes("Mouse test") || r.q.includes("Mouse works")) && (r.a === "Working" || r.a === "Yes")) return {result:"Dispatch", part:sym.defaultPart || "Touchpad / ClickPad"};
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

function calculate(){
  return sanitizeDecision(normalizeConclusion(calculateRaw()));
}

function suggestion(){
  // v4.8.6 UI rule: Suggested PD is hidden in normal cases.
  // Symptom recommendations are shown only in Generate Note through Review/Suggestion text.
  return "";
}

function updateRecommendation(){
  if(isManual()) return;
  const rec = normalizeConclusion(calculate());
  const box = el("recommendation");
  if(rec.result === "Pending"){
    box.innerHTML = `Result : ${rec.result}<br>Part : ${rec.part}`;
  }else{
    box.innerHTML = `Result : ${rec.result}<br>Part : ${rec.part}`;
  }
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
    "External Monitor test": "Connect an external monitor and check the display result.",
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
      box.innerHTML = `Result : ${review.rec.result}<br>Part : ${review.rec.part}`;
    }
  }
  // If there is inconsistent information or a wrong-symptom suggestion, show only the Review/Suggestion content.
  if(review && (review.conflicts || review.reviewLines)) return reviewText(review);

  return checklistSummaryText();
}


function guideFromChecklist(){
  const q = getQuestions().map(x => x.label.toLowerCase());
  let lines = [current().name, "", "รบกวนช่วยทดสอบและตรวจสอบเบื้องต้นตามขั้นตอนดังนี้ครับ"];
  q.forEach((item, i) => lines.push(`${i+1}. ${item}`));
  return lines.join("\n");
}



// v4.8.3 Email TH rule: write customer steps, keep only final result request at the bottom.
function setNote(text){ el("note").value = text; }
function generateNote(){
  gaTrack("generate_note", {
    level1: getLevelName(),
    symptom: getSymptomName()
  });
  setNote(generateText());
  updateRecommendation();
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
function copyNote(){
  const n = el("note");
  n.select();
  document.execCommand("copy");
  alert("Copied");
}
function clearAll(){
  el("search").value = "";
  setSearchClearVisibility();
  renderMain();
  el("note").value = "";
}

function filterSymptoms(){
  renderGlobalSearch();
}

function renderAll(){
  ensureSelectionAvailable();
  renderModuleTabs();
  if(activeModule === "troubleshooting"){
    renderLevel1();
    renderSymptoms();
    renderMain();
  }else{
    renderReferenceView();
  }
  setSearchClearVisibility();
  if(el("search") && el("search").value.trim()) renderGlobalSearch();
  else {
    const panel = el("globalSearchPanel");
    if(panel) panel.classList.add("hidden");
    showModuleView();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if(el("tabTroubleshooting")) el("tabTroubleshooting").addEventListener("click", () => switchModule("troubleshooting"));
  if(el("tabCode")) el("tabCode").addEventListener("click", () => switchModule("code"));
  if(el("tabUserGuide")) el("tabUserGuide").addEventListener("click", () => switchModule("guide"));
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
  if(el("searchClearBtn")) el("searchClearBtn").addEventListener("click", clearSearchOnly);
  el("topClearBtn").addEventListener("click", clearAll);
  el("generateBtn").addEventListener("click", generateNote);
  el("emailThBtn").addEventListener("click", sendEmailTH);
  el("emailEnBtn").addEventListener("click", sendEmailEN);
  el("clearBtn").addEventListener("click", clearAll);
  el("modalCloseBtn").addEventListener("click", closeGuideModal);
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
// v5.2.4 Excel-Only Data Rules
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
  if(sym.questions && Array.isArray(sym.questions[product])) return sym.questions[product].slice();
  if(Array.isArray(sym.common)) return sym.common.slice();
  return [];
}

function getQuestionOptions(question){
  return question && Array.isArray(question.optionsList) ? question.optionsList.slice() : [];
}

function getRelatedGuideKeys(){
  if(isManual()) return [];
  const manuals = (LEVELS.manual && LEVELS.manual.symptoms) ? LEVELS.manual.symptoms : {};
  const tokens = [];
  getQuestions().forEach(row => {
    String(row.relatedGuide || '')
      .split(/\s*\|\s*|\r?\n|\s*;\s*/)
      .map(x => x.trim())
      .filter(Boolean)
      .forEach(token => { if(!tokens.includes(token)) tokens.push(token); });
  });

  const resolved = [];
  tokens.forEach(token => {
    let key = manuals[token] ? token : null;
    const displayName = (typeof RELATED_GUIDE_MASTER !== "undefined" && RELATED_GUIDE_MASTER[token])
      ? RELATED_GUIDE_MASTER[token]
      : token;
    if(!key){
      key = Object.keys(manuals).find(candidate =>
        String(manuals[candidate].name || '').trim().toLowerCase() === String(displayName).trim().toLowerCase()
      );
    }
    if(key && !resolved.includes(key)) resolved.push(key);
  });
  return resolved;
}

function stripLegacyItemNumber(text){
  return String(text || "")
    .replace(/^\s*(?:ข้อ\s*)?\d+\s*[.\)\-:]\s*/i, "")
    .trim();
}

function emailFromChecklist(lang){
  if(isManual()) return lang === "EN" ? (current().emailEN || "") : (current().emailTH || "");
  const field = lang === "EN" ? "emailEN" : "emailTH";
  const header = lang === "EN"
    ? ["Dear Customer,", "", "Please follow the steps below."]
    : ["เรียน คุณลูกค้า", "", "รบกวนช่วยดำเนินการตามขั้นตอนดังต่อไปนี้"];
  const footer = lang === "EN"
    ? "Once completed, please send us the result and attach any photo or test result if available, so we can proceed with the next step."
    : "หากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับ พร้อมแนบรูปหรือผลการทดสอบ (ถ้ามี) เพื่อให้ทางเราดำเนินการในขั้นตอนถัดไปครับ";
  const body = getQuestions()
    .map(row => stripLegacyItemNumber(row[field]))
    .filter(Boolean)
    .map((line, index) => `${index + 1}. ${line}`);
  const spacedBody = [];
  body.forEach((line, index) => {
    if(index) spacedBody.push("");
    spacedBody.push(line);
  });
  return header.concat([""], spacedBody, ["", footer]).join("\n");
}

