
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

function getProductModelGroupForMapping(){
  const key = (typeof getProductKey === "function") ? getProductKey() : "thinkpad";
  if(key === "ideapad") return "ideapad";
  return "f10";
}

function getModelSpecificDiagnosticsText(label, lang){
  const normalized = String(label || "").trim();
  const diagLabels = new Set([
    "Run Lenovo Diagnostics",
    "Lenovo Diagnostics",
    "Lenovo Diagnostics Storage",
    "Lenovo Diagnostics Battery"
  ]);
  if(!diagLabels.has(normalized)) return "";

  const modelGroup = getProductModelGroupForMapping();
  const isStorage = normalized === "Lenovo Diagnostics Storage";
  const isBattery = normalized === "Lenovo Diagnostics Battery";

  if(lang === "en"){
    const prefix = isStorage
      ? "Run Lenovo Diagnostics to check storage."
      : (isBattery ? "Run Lenovo Diagnostics to check the battery." : "Run Lenovo Diagnostics.");
    const steps = modelGroup === "ideapad"
      ? "Press the Novo Button → select UEFI Diagnostics → Run All → Quick, then check whether the result is Pass or Failed."
      : "Press F10 repeatedly while turning on the machine → select Run All → Quick → Quick Unattended, then check whether the result is Pass or Failed.";
    return prefix + "\n" + steps;
  }

  const prefix = isStorage
    ? "ทดสอบ Run Lenovo Diagnostics เพื่อตรวจสอบ Storage"
    : (isBattery ? "ทดสอบ Run Lenovo Diagnostics เพื่อตรวจสอบ Battery" : "ทดสอบ Run Diagnostics");
  const steps = modelGroup === "ideapad"
    ? "กด Novo Button → เลือก UEFI Diagnostics → Run All → Quick จากนั้นตรวจสอบว่า Pass หรือ Failed"
    : "กด F10 รัว ๆ ขณะเปิดเครื่อง → เลือก Run All → Quick → Quick Unattended จากนั้นตรวจสอบว่า Pass หรือ Failed";
  return prefix + "\n" + steps;
}

function getModelSpecificDiagnosticsGuideText(){
  const modelGroup = getProductModelGroupForMapping();
  if(modelGroup === "ideapad"){
    return "Lenovo Diagnostics\n\nทดสอบ Run Diagnostics\n\n1. กด Novo Button\n2. เลือก UEFI Diagnostics\n3. เลือก Run All\n4. เลือก Quick\n5. รอจนการทดสอบเสร็จสิ้น\n6. ตรวจสอบว่าผลการทดสอบเป็น Pass หรือ Failed";
  }
  return "Lenovo Diagnostics\n\nทดสอบ Run Diagnostics\n\n1. เปิดเครื่องและกด F10 รัว ๆ\n2. เลือก Run All\n3. เลือก Quick\n4. เลือก Quick Unattended\n5. รอจนการทดสอบเสร็จสิ้น\n6. ตรวจสอบว่าผลการทดสอบเป็น Pass หรือ Failed";
}

function getGuideTextForCurrentModel(guide){
  if(!guide) return "";
  return guide.guide || "";
}

function getChecklistMappingText(label, lang){
  const modelSpecific = getModelSpecificDiagnosticsText(label, lang);
  if(modelSpecific) return modelSpecific;
  if(typeof GLOBAL_CHECKLIST_MAPPING === "undefined") return "";
  const canonical = {
    "LED beside charging port":"Charge LED",
    "LED beside Type-C port":"Charge LED",
    "LED beside port":"Charge LED",
    "LED on power button":"Power LED",
    "Can Access Windows":"Can access Windows",
    "Check Task Manager usage":"Check Task Manager Usage",
    "Check Temperature":"Check temperature / Overheat",
    "Re-install Windows":"Re-install Windows",
    "Re-install Windows":"Re-install Windows",
    "Lenovo Vantage update":"Lenovo Vantage Update",
    "BIOS update":"BIOS Update",
    "Dump File collected":"Event Viewer / Dump file collected",
    "Dump file collected":"Event Viewer / Dump file collected",
    "Minidump collected":"Event Viewer / Dump file collected",
    "Stop code / Error code":"Stop code / Error code collected",
    "Fan Check":"Fan Check",
    "Caps Lock LED works":"Caps Lock Toggle",
    "Run Lenovo Diagnostics":"Run Lenovo Diagnostics",
    "Lenovo Diagnostics":"Run Lenovo Diagnostics",
    "Load BIOS default":"Load BIOS Default",
    "Graphics Driver Update":"Graphics Driver Update",
    "Update Graphics Driver":"Graphics Driver Update",
    "Wi-Fi Driver Update":"WLAN Driver Update",
    "Wifi Driver Update":"WLAN Driver Update",
    "WIFI Driver Update":"WLAN Driver Update",
    "WLAN Driver Update":"WLAN Driver Update",
    "Camera Driver Update / Lenovo Vantage":"Camera Driver Update",
    "Fingerprint Driver Update / Lenovo Vantage":"Fingerprint Driver Update",
    "USB Driver Update / Lenovo Vantage":"USB Driver Update"
  };
  const key = GLOBAL_CHECKLIST_MAPPING[label] ? label : (canonical[label] || label);
  const item = GLOBAL_CHECKLIST_MAPPING[key];
  if(!item) return "";

  // v5.0.0: External Monitor test uses Mapping as the single source of truth,
  // but the Thai/English wording must be selected by symptom context.
  // No Display / No Image / Black Screen asks whether an image appears.
  // Display-quality symptoms ask whether the same issue appears on the external monitor.
  if(key === "External Monitor test"){
    const noDisplayKeys = new Set(["black", "black_login", "no_display", "no_image", "blank", "no_signal"]);
    const symptomKey = String(typeof selectedSymptom !== "undefined" ? selectedSymptom : "").toLowerCase();
    const symptomName = String((typeof current === "function" && current() && current().name) ? current().name : "").toLowerCase();
    const isNoDisplay = noDisplayKeys.has(symptomKey) || /no display|no image|black screen|blank screen/.test(symptomName);
    if(lang === "th") return isNoDisplay ? (item.th_no_display || item.th || "") : (item.th_display_issue || item.th || "");
    if(lang === "en") return isNoDisplay ? (item.en_no_display || item.en || item.th_no_display || "") : (item.en_display_issue || item.en || item.th_display_issue || "");
  }

  if(lang === "th") return item.th || "";
  if(lang === "en") return item.en || item.th || "";
  return item.th || "";
}


const PRODUCT_CAPABILITY_EXCLUDE = {
  desktop: {
    dock: ['usb_a_not_working', 'displayport_not_working', 'hdmi_not_working', 'lan_not_working', 'audio_jack_not_working', 'dock_not_charging', 'dock_not_detected', 'external_monitor_flickering'],
    charging: ["typec", "runtime", "swollen", "slow_charge", "not_detect"],
    touchpad: ["cursor", "click", "jump", "track"],
    camera: ["face_recognition", "lock_on_leave"],
    keyboard: ["backlight", "fn", "left_ctrl"],
    network: ["wwan", "sim"],
    error: ["e0190"]
  },
  aio: {
    dock: ['usb_a_not_working', 'displayport_not_working', 'hdmi_not_working', 'lan_not_working', 'audio_jack_not_working', 'dock_not_charging', 'dock_not_detected', 'external_monitor_flickering'],
    charging: ["typec", "runtime", "swollen", "slow_charge", "not_detect"],
    touchpad: ["cursor", "click", "jump", "track"],
    camera: ["lock_on_leave"],
    keyboard: ["backlight", "fn", "left_ctrl"],
    network: ["wwan", "sim"],
    error: ["e0190"]
  },
  ideapad: {
    dock: ['usb_a_not_working', 'displayport_not_working', 'hdmi_not_working', 'lan_not_working', 'audio_jack_not_working', 'dock_not_charging', 'dock_not_detected', 'external_monitor_flickering'],
    touchpad: ["track"],
    keyboard: ["left_ctrl"],
    camera: ["lock_on_leave"],
    network: ["wwan", "sim", "smart_card_reader"],
    port: ["smart"]
  }
};

function getProductKey(){
  const productEl = el("product");
  return productEl ? productEl.value : "thinkpad";
}

function isSymptomAllowed(levelKey, symptomKey){
  const product = getProductKey();
  const excluded = PRODUCT_CAPABILITY_EXCLUDE[product] || {};
  return !(excluded[levelKey] || []).includes(symptomKey);
}

function getVisibleLevelKeys(){
  const product = getProductKey();
  if(typeof MODEL_STRUCTURE !== "undefined" && MODEL_STRUCTURE[product]){
    return MODEL_STRUCTURE[product].map(item => item.level).filter(levelKey => LEVELS[levelKey]);
  }
  return Object.keys(LEVELS).filter(levelKey => {
    if(LEVELS[levelKey].manual === true) return true;
    return getVisibleSymptomKeys(levelKey).length > 0;
  });
}

function getVisibleSymptomKeys(levelKey){
  const product = getProductKey();
  const level = LEVELS[levelKey];
  if(!level || !level.symptoms) return [];
  if(typeof MODEL_STRUCTURE !== "undefined" && MODEL_STRUCTURE[product]){
    const row = MODEL_STRUCTURE[product].find(item => item.level === levelKey);
    if(row) return row.symptoms.filter(symptomKey => level.symptoms[symptomKey]);
    return [];
  }
  if(level.manual === true) return Object.keys(level.symptoms);
  return Object.keys(level.symptoms).filter(symptomKey => isSymptomAllowed(levelKey, symptomKey));
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

function el(id){ return document.getElementById(id); }
function forceConclusionRed(){
  const r = el("recommendation");
  if(!r) return;
  r.className = "recommendation recommendation-dispatch";
}

function current(){ return LEVELS[selectedLevel].symptoms[selectedSymptom]; }
function isManual(){ return LEVELS[selectedLevel].manual === true; }

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

function isFruPnAllowed(){
  // FRU P/N is requested only for optional external accessories when appropriate.
  const product = getProductKey();
  if(selectedLevel === "adapter_power") return true; // Adapter / Power Cord
  if(selectedLevel === "mouse") return true; // External Mouse
  if(selectedLevel === "keyboard" && (product === "desktop" || product === "tiny" || product === "aio")) return true; // External Keyboard
  const part = (current().defaultPart || "").toLowerCase();
  return part.includes("external mouse") || part.includes("external keyboard") || part.includes("adapter") || part.includes("power cord");
}


// v5.0.0 Final Normalization: canonical checklist labels + runtime de-duplication
function canonicalChecklistLabel(label){
  const raw = String(label || '').trim();
  const map = {
    'Update Graphics Driver':'Graphics Driver Update',
    'Graphics Driver Update':'Graphics Driver Update',
    'Wi-Fi Driver Update':'WLAN Driver Update',
    'Wifi Driver Update':'WLAN Driver Update',
    'WIFI Driver Update':'WLAN Driver Update',
    'WLAN Driver Update':'WLAN Driver Update',
    'Bluetooth Driver Update':'Bluetooth Driver Update',
    'LAN Driver Update':'LAN Driver Update',
    'Lenovo Vantage update':'Lenovo Vantage Update',
    'BIOS update':'BIOS Update',
    'Load BIOS default':'Load BIOS Default',
    'Can Access Windows':'Can Access Windows',
    'Camera Driver Update / Lenovo Vantage':'Camera Driver Update',
    'Fingerprint Driver Update / Lenovo Vantage':'Fingerprint Driver Update',
    'USB Driver Update / Lenovo Vantage':'USB Driver Update',
    'Reinstall Windows':'Re-install Windows',
    'Windows Installation':'Re-install Windows',
    'Install Windows':'Re-install Windows',
    'Lenovo Diagnostics':'Run Lenovo Diagnostics'
  };
  if(map[raw]) return map[raw];
  const m = raw.match(/^(.+?)\s+Driver Update\s*\/\s*Lenovo Vantage$/i);
  if(m) return `${m[1].trim()} Driver Update`;
  return raw;
}



// v5.0.9 UI naming standard. Display-only; underlying checklist keys and Generate Note remain unchanged.
function displayChecklistLabel(label){
  const acronyms = {sd:'SD',ssd:'SSD',hdd:'HDD',usb:'USB',bios:'BIOS',uefi:'UEFI',hdmi:'HDMI',lan:'LAN',wan:'WAN',tpm:'TPM',efi:'EFI',crc:'CRC',rst:'RST',rste:'RSTe',os:'OS',fru:'FRU',pin:'PIN',led:'LED',lcd:'LCD'};
  const minorWords = new Set(['and','or','of','to','in','on','for','at','by','from','with']);
  let wordIndex = 0;
  return String(label || '').split(/(\s+|\/|&|\+|\(|\)|:)/).map(part => {
    if(/^\s+$/.test(part) || /^(\/|&|\+|\(|\)|:)$/.test(part)) return part;
    return part.split('-').map(token => {
      const lower=token.toLowerCase();
      const currentIndex=wordIndex++;
      if(acronyms[lower]) return acronyms[lower];
      if(lower==='wi') return 'Wi';
      if(lower==='fi') return 'Fi';
      if(lower==='trackpoint') return 'TrackPoint';
      if(lower==='displayport') return 'DisplayPort';
      if(lower==='bitlocker') return 'BitLocker';
      if(/^re-install$/i.test(token)) return 'Re-install';
      if(lower==="can't") return "Can't";
      if(minorWords.has(lower) && currentIndex > 0) return lower;
      if(!token) return token;
      return token.charAt(0).toUpperCase()+token.slice(1).toLowerCase();
    }).join('-');
  }).join('').replace(/\bSd Card\b/g,'SD Card').replace(/\bRe-Install\b/g,'Re-install');
}
function dedupeQuestionsByCanonical(list){
  const seen = new Map();
  const out = [];
  (list || []).forEach(q => {
    if(!q || !q.label) return;
    const nq = Object.assign({}, q, {label: canonicalChecklistLabel(q.label)});
    const key = nq.label;
    if(seen.has(key)){
      const old = seen.get(key);
      if(nq.options === 'update_status' || nq.update){
        old.options = 'update_status';
        old.update = true;
      }
      return;
    }
    seen.set(key, nq);
    out.push(nq);
  });
  return out;
}

function normalizeQuestionOrder(list){
  const product = getProductKey();
  const notebookTestAfterSwapLabels = new Set(["Audio Jack on notebook test"]);
  const removeLabels = ["Clean / Reseat RAM", "Video clip provided", "Photo / Video provided", "Photo / Video evidence", "Photo provided"];
  let filtered = dedupeQuestionsByCanonical(list.slice()
    .filter(q => !removeLabels.includes(q.label))
    .filter(q => !(q.label.includes("Video") || q.label.includes("Photo"))));

  // v5.1.0 ThinkPad Reset Rule:
  // Emergency Reset is allowed only for ThinkPad Boot > No power / Power on no display / Power on no display + Beep Sound.
  const emergencyAllowed = product === "thinkpad" && selectedLevel === "boot" && ["no_power", "pond", "pond_beep"].includes(selectedSymptom);
  const expanded = [];
  filtered.forEach(q => {
    if(q.label === "Power Reset / Emergency Reset"){
      expanded.push({...q, label: emergencyAllowed ? "Emergency Reset" : "Power Reset"});
    }else if(q.label === "Emergency Reset" && !emergencyAllowed){
      return;
    }else if(q.label === "Power Reset" && emergencyAllowed){
      return;
    }else{
      expanded.push(q);
    }
  });
  filtered = dedupeQuestionsByCanonical(expanded);

  // v5.1.0 final UI enforcement: apply requested removals after all dynamic checklist rules.
  filtered = filtered.map(q => ({...q, label: String(q.label || "")
    .replace(/\bPower LED\b/g, "Power LED")
    .replace(/\bCharge LED\b/g, "Charge LED")
    .replace(/\bLcd\b/g, "LCD")}));

  if(selectedLevel === "fan"){
    const removedFanLabels = new Set([
      "Check Temperature / Overheat", "Check Temperature", "Check temperature / Overheat",
      "Check for Dust and Foreign Objects",
      "Load BIOS Default", "Load Default BIOS", "Load BIOS default"
    ]);
    filtered = filtered.filter(q => !removedFanLabels.has(q.label));
  }

  if(selectedLevel === "boot" && selectedSymptom === "auto_repair"){
    filtered = filtered.filter(q => q.label !== "Lenovo Vantage Update");
  }
  if(selectedLevel === "boot" && selectedSymptom === "black_login"){
    filtered = filtered.filter(q => q.label !== "Graphics Driver Update");
  }
  if(product === "thinkpad" && selectedLevel === "boot" && ["no_power", "pond", "pond_beep"].includes(selectedSymptom)){
    filtered = filtered.filter(q => q.label !== "Power Reset" && q.label !== "Power Reset / Emergency Reset");
    if(!filtered.some(q => q.label === "Emergency Reset")){
      const insertAt = Math.min(3, filtered.length);
      filtered.splice(insertAt, 0, {label:"Emergency Reset", options:"select"});
    }
  }
  filtered = dedupeQuestionsByCanonical(filtered);

  if(!isFruPnAllowed()){
    filtered = filtered.filter(q => q.label !== "FRU P/N");
  }

  // v4.9.2: FRU P/N must remain at the end of every checklist, including ThinkCentre Tiny keyboard.

  // v4.9.1: Device Manager check must stay before the matching Uninstall Driver step.
  const checkItems = filtered.filter(q => /^Check .+ in Device Manager$/.test(q.label));
  if(checkItems.length){
    checkItems.forEach(checkQ => {
      const device = checkQ.label.replace(/^Check /, "").replace(/ in Device Manager$/, "");
      const uninstallLabel = `Uninstall ${device.replace(/ Driver$/, "")} Driver and Restart`;
      const checkIndex = filtered.indexOf(checkQ);
      const uninstallIndex = filtered.findIndex(q => q.label === uninstallLabel);
      if(uninstallIndex >= 0 && checkIndex > uninstallIndex){
        filtered.splice(checkIndex, 1);
        const newUninstallIndex = filtered.findIndex(q => q.label === uninstallLabel);
        filtered.splice(newUninstallIndex, 0, checkQ);
      }
    });
  }

  // Fan not spin rule: Fan Check must always be the first checklist item.
  const frontItems = [];
  if(selectedLevel === "fan" && selectedSymptom === "fan_not_spin"){
    filtered = filtered.filter(q => {
      if(q.label === "Fan Check"){
        frontItems.push(q);
        return false;
      }
      return true;
    });
  }

  const rankUpdateTail = (label) => {
    const l = String(label || "").toLowerCase();
    // Standard Troubleshooting Workflow tail order (v4.9.2)
    if(l.includes("driver update")) return 10;
    if(l.includes("windows update")) return 20;
    if(l === "lenovo vantage update") return 30;
    if(l === "bios update") return 40;
    if(l === "load default bios" || l === "load bios default") return 41;
    if(l.includes("firmware update") || l.includes("thunderbolt")) return 45;
    if(l === "power reset") return 50;
    if(l === "emergency reset") return 51;
    if(l.includes("enabled") && l.includes("bios")) return 70;
    if(l.includes("lenovo diagnostics") || l === "run lenovo diagnostics") return 80;
    if(l === "re-install windows") return 110;
    if(l === "swap ram" || l === "swap ssd" || l === "swap hdd" || l === "swap ssd / hdd") return 112;
    if(l === "event viewer / dump file collected" || l === "event viewer" || l === "dump file") return 115;
    if(l === "physical damage / liquid spilled") return 120;
    if(l === "other issue") return 130;
    if(l === "fru p/n") return 150;
    return 0;
  };

  let normal = [];
  let orderedTail = [];
  filtered.forEach((q, idx) => {
    const rank = rankUpdateTail(q.label);
    if(rank){
      orderedTail.push({q, idx, rank});
    }else{
      normal.push(q);
    }
  });

  // Keep Swap items together, then notebook/direct-device test, then update items.
  const notebookTests = normal.filter(q => notebookTestAfterSwapLabels.has(q.label));
  if(notebookTests.length){
    normal = normal.filter(q => !notebookTestAfterSwapLabels.has(q.label));
    const lastSwapIndex = normal.reduce((last, q, idx) => q.label.startsWith("Swap ") ? idx : last, -1);
    const insertAt = lastSwapIndex >= 0 ? lastSwapIndex + 1 : normal.length;
    normal.splice(insertAt, 0, ...notebookTests);
  }

  orderedTail.sort((a,b) => (a.rank - b.rank) || (a.idx - b.idx));
  return dedupeQuestionsByCanonical(frontItems.concat(normal).concat(orderedTail.map(x => x.q)));
}



// v4.8.7 Software / Driver / BIOS Update mapping
const UPDATE_RULES = {
  audio: {speaker_no:{vantage:true, driver:"Audio"}, speaker_noise:{vantage:true, driver:"Audio"}, jack:{vantage:true, driver:"Audio"}, mic:{vantage:true, driver:"Audio"}, echo:{vantage:true, driver:"Audio"}, low:{vantage:true, driver:"Audio"}, mic_low:{vantage:true, driver:"Audio"}},
  camera: {not_work:{vantage:true, driver:"Camera"}, blurry:{vantage:true, driver:"Camera"}, face_recognition:{vantage:true, driver:"Camera"}, lock_on_leave:{vantage:true, driver:"Camera"}},
  touchpad: {cursor:{vantage:true, driver:"Touchpad"}, click:{vantage:true, driver:"Touchpad"}, jump:{vantage:true, driver:"Touchpad"}, track:{vantage:true, driver:"Touchpad"}},
  keyboard: {few:{vantage:true}, all:{vantage:true}, auto_type:{vantage:true}, backlight:{vantage:true}, fn:{vantage:true}, left_ctrl:{vantage:true}, hotkey:{vantage:true}},
  windows: {fingerprint:{vantage:true, driver:"Fingerprint"}, freeze:{vantage:true, bios:true}, bsod:{vantage:true, bios:true}, auto_reboot:{vantage:true, bios:true}, slow:{vantage:true}, login:{vantage:true}, black_login:{vantage:true}},
  network: {wifi:{vantage:true, driver:"WLAN"}, lan:{vantage:true, driver:"LAN"}, bluetooth:{vantage:true, driver:"Bluetooth"}},
  port: {usba:{vantage:true}, usbc:{vantage:true, bios:true}},
  dock: {default:{vantage:true, driver:"Thunderbolt", bios:true}},
  monitor: {default:{vantage:true, driver:"Graphics", bios:true}},
  display: {flickering:{vantage:true, driver:"Graphics"}, dim:{vantage:true, driver:"Graphics"}, black:{vantage:true, driver:"Graphics"}, abnormal_line:{vantage:true, driver:"Graphics"}},
  charging: {typec:{vantage:true}, runtime:{vantage:true, bios:true}, not_detect:{vantage:true, bios:true}, slow_charge:{vantage:true}, swollen:{}},
  fan: {fan_noise:{vantage:true, bios:true}, fan_spin_high:{vantage:true, bios:true}, fan_overheat:{vantage:true, bios:true}, fan_error:{vantage:true, bios:true}, fan_not_spin:{vantage:true, bios:true}},
  boot: {boot_loop:{vantage:true}, stuck_logo:{}, auto_repair:{vantage:true}},
  storage: {}
};

function getUpdateRule(){
  const levelRules = UPDATE_RULES[selectedLevel];
  if(!levelRules) return null;
  return levelRules[selectedSymptom] || levelRules.default || null;
}

function updateQuestion(label){
  return {label, options:"update_status", text:false, diag:false, update:true};
}

function applyUpdateChecklistRules(qs){
  const rule = getUpdateRule();
  if(!rule) return qs;
  const removeUpdateLabels = new Set([
    "Lenovo Vantage Update", "Lenovo Vantage update", "Driver Update", "Driver update", "Driver / Firmware Update", "Driver / Windows Update",
    "BIOS Update", "BIOS update", "Windows Update", "Audio Driver Update", "Audio Driver Update", "Camera Driver Update", "Camera driver update", "Camera Driver Update / Lenovo Vantage",
    "Fingerprint Driver Update / Lenovo Vantage", "Fingerprint Driver Update", "Touchpad Driver Update", "TrackPoint Driver Update", "Hotkey Driver Update",
    "Graphics Driver Update", "Update Graphics Driver", "Wi-Fi Driver Update", "Wifi Driver Update", "WLAN Driver Update",
    "Bluetooth Driver Update", "LAN Driver Update", "Thunderbolt Driver Update", "Chipset / Power Driver Update",
    "RST / RSTe Driver Update", "Storage Firmware Update", "WWAN Driver Update", "Serial IO Driver Update",
    "USB Driver Update / Lenovo Vantage", "USB Driver Update", "Dock Firmware Update", "SD Card Reader Driver Update", "Smart Card Driver Update"
  ]);
  let base = qs.filter(q => !removeUpdateLabels.has(q.label));
  const tailLabels = new Set(["Physical damage / Liquid spilled", "Other issue", "FRU P/N"]);
  const tail = base.filter(q => tailLabels.has(q.label));
  base = base.filter(q => !tailLabels.has(q.label));
  const updates = [];
  if(rule.vantage) updates.push(updateQuestion("Lenovo Vantage Update"));
  if(rule.driver) updates.push(updateQuestion(`${rule.driver} Driver Update`));
  if(rule.bios) updates.push(updateQuestion("BIOS Update"));
  return dedupeQuestionsByCanonical(base.concat(updates).concat(tail));
}

function getQuestions(){
  if(isManual()) return [];
  const sym = withDisplayQuestions(current());
  const product = el("product").value;
  let qs = [];
  if(sym.questions && sym.questions[product]) qs = sym.questions[product].slice();
  else if(product === "tiny" && sym.questions && sym.questions.desktop) qs = sym.questions.desktop.slice();
  else if(sym.common) qs = sym.common.slice();

  // v4.7.0: add easy checks for Keyboard > All key only.
  if(selectedLevel === "keyboard" && selectedSymptom === "all"){
    const addFront = [];
    if(!qs.some(q => q.label === "Caps Lock LED works")){
      addFront.push({label:"Caps Lock LED works", options:"yesno", text:false, diag:false});
    }
    const resetLabel = "Power Reset";
    if(!qs.some(q => q.label === "Power Reset / Emergency Reset" || q.label === "Power Reset")){
      addFront.push({label:resetLabel, options:"swap", text:false, diag:false});
    }
    qs = addFront.concat(qs);
  }

  qs = normalizeQuestionOrder(applyUpdateChecklistRules(qs));
  if(typeof filterChecklistByModelScope === "function") qs = filterChecklistByModelScope(qs, product);
  return qs;
}

function getOptions(code){
  return APP_OPTIONS[code] || APP_OPTIONS.select;
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
  getVisibleSymptomKeys(selectedLevel).forEach(key => {
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

function getRelatedGuideKeys(){
  if(isManual()) return [];

  // v5.0.0 Full Impact Audit Rule:
  // Related Guide must be driven by checklist items for the selected symptom only.
  // Do not show guides for actions that are not present in the checklist.
  // Power Reset and Emergency Reset are routine daily steps and must not appear here.
  const questions = getQuestions();
  const labels = questions.map(q => String(q.label || "").trim());
  const normalized = labels.map(label => label.toLowerCase());

  const hasLabel = (label) => normalized.includes(String(label || "").toLowerCase());
  const hasAnyLabel = (items) => items.some(item => hasLabel(item));

  const keys = [];

  const add = (key) => {
    if(key && !keys.includes(key)) keys.push(key);
  };

  if(hasLabel("Windows Recovery")){
    ["reset_pc", "startup_repair", "system_restore", "uninstall_updates"].forEach(add);
  }
  if(hasLabel("Uninstall Windows Update")) add("uninstall_updates");
  if(hasLabel("System Restore")) add("system_restore");
  if(hasLabel("Downgrade BIOS")) add("downgrade_bios");

  if(hasLabel("Re-install Windows")) add("reinstall_windows");
  if(hasLabel("Run Lenovo Diagnostics") || hasLabel("Lenovo Diagnostics Storage") || hasLabel("Lenovo Diagnostics Battery")) add("lenovo_diagnostics");
  // Lenovo Vantage Update is a routine update step and must not appear in Related Guide.
  if(hasLabel("Battery Report collected")) add("battery_report");
  if(hasLabel("Battery Health in Lenovo Vantage")) add("battery_health");
  if(hasLabel("Event Viewer / Dump file collected")) add("dump_file");
  if(hasLabel("Safe Mode Test") || hasLabel("Can Access Safe Mode")) add("safe_mode");
  if(hasAnyLabel(["LCD Self-Test", "LCD self-test", "LCD Self Test"])) add("lcd_self_test");
  if(hasLabel("FN & Ctrl Swap")) add("fn_ctrl_key_swap");
  if(hasLabel("BIOS Password") || hasLabel("Supervisor Password")) add("bios_password");

  // ThinkPad → Audio → Echo only.
  if(getProductKey() === "thinkpad" && selectedLevel === "audio" && selectedSymptom === "echo" && hasLabel("Microphone enhancement disabled")){
    add("disable_audio_enhancements");
  }

  // Legacy RELATED_GUIDES entries are allowed only when their trigger checklist exists.
  // This keeps older special guides working while blocking unrelated guides.
  const cfg = (typeof RELATED_GUIDES !== "undefined" && RELATED_GUIDES[selectedLevel]) ? RELATED_GUIDES[selectedLevel] : null;
  const configured = cfg ? (cfg[selectedSymptom] || cfg.default || []) : [];
  const legacyTrigger = {
    "battery_report": ["Battery Report collected"],
    "battery_health": ["Battery Health in Lenovo Vantage"],
    "reset_battery": ["Emergency Reset"],
    "safe_mode": ["Safe Mode Test", "Can Access Safe Mode"],
    "dump_file": ["Event Viewer / Dump file collected"],
    "lcd_self_test": ["LCD Self-Test", "LCD self-test", "LCD Self Test"],
    // Lenovo Vantage Update is intentionally excluded from Related Guide.
    "reinstall_windows": ["Re-install Windows"],
    "reset_pc": ["Windows Recovery"],
    "startup_repair": ["Windows Recovery"],
    "system_restore": ["Windows Recovery", "System Restore"],
    "uninstall_updates": ["Windows Recovery", "Uninstall Windows Update"],
    "downgrade_bios": ["Downgrade BIOS"],
    "fn_ctrl_key_swap": ["FN & Ctrl Swap"],
    "lock_on_leave": ["Lock on Leave Function"],
    "disable_audio_enhancements_external_mic": ["Disable Audio Enhancements", "Disable Audio Enhancements (External Microphone)"],
    "thinkcentre_raid1_ssd_not_found_os_install": ["Re-install Windows USB recreated"],
    "bios_password": ["BIOS Password", "Supervisor Password"]
  };

  configured.forEach(key => {
    // Never show routine reset guides in Related Guide.
    if(key === "power_reset" || key === "emergency_reset" || key === "reset_battery" || key === "vantage_update" || key === "lenovo_vantage_update") return;

    const triggers = legacyTrigger[key] || [];
    if(triggers.length && hasAnyLabel(triggers)) add(key);
  });

  return keys;
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
  updateCurrentSelection();
  el("note").value = "";
  const checklist = el("checklist");
  const manualBox = el("manualBox");

  if(isManual()){
    el("mainTitle").textContent = "TROUBLESHOOTING GUIDE";
    el("recTitle").textContent = "GUIDE";
    el("recommendation").innerHTML = current().name;
    el("recommendation").className = "recommendation recommendation-dispatch";
    checklist.innerHTML = "";
    manualBox.textContent = getGuideTextForCurrentModel(current());
    manualBox.classList.remove("hidden");
    el("suggestion").classList.add("hidden");
    renderRelatedGuide();
    return;
  }

  el("mainTitle").textContent = "TROUBLESHOOTING CHECKLIST";
  el("recTitle").textContent = "CONCLUSION";
  manualBox.classList.add("hidden");
  checklist.innerHTML = "";
  renderErrorDescription();

  getQuestions().forEach((q, i) => {
    const row = document.createElement("div");
    row.className = "check-row";
    let html = `<div class="check-label">${displayChecklistLabel(q.label)}</div><select id="a${i}" onchange="updateRecommendation()">`;
    getOptions(q.options).forEach(opt => html += `<option value="${opt}">${opt}</option>`);
    html += "</select>";
    html += (q.text || q.diag) ? `<input id="t${i}" oninput="updateRecommendation()" placeholder="${q.diag ? 'failed part detail' : 'detail'}">` : "<div></div>";
    row.innerHTML = html;
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
  forceConclusionRed();
}

function answers(){
  if(isManual()) return [];
  return getQuestions().map((q, i) => {
    const sel = el(`a${i}`);
    const txt = el(`t${i}`);
    let a = sel ? sel.value : "-- Select --";

    if(q.options === "detail_only"){
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
  if(selectedSymptom === "ssd") { part = "SSD"; swapLabel = "Swap SSD"; }
  if(selectedSymptom === "hdd") { part = "HDD"; swapLabel = "Swap HDD"; }
  if(!part) return null;

  const bios = answerValue(ans, "BIOS detects storage");
  const swap = answerValue(ans, swapLabel);
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

function conclusionLine(rec){
  if(!rec || !rec.result) return "Conclusion:";
  if(rec.result === "Dispatch") return `Conclusion: Dispatch ${rec.part || ""}`.trim();
  if(rec.result === "FOP") return "Conclusion: FOP";
  return "Conclusion:";
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
    lines.push("");
    lines.push("Conclusion:");
    return lines.join("\n");
  }
  if(info.reviewLines){
    lines.push(...info.reviewLines);
    lines.push("");
    lines.push("Conclusion:");
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
    if(r.q.includes("Swap SSD / HDD") && r.a === "Working") return {result:"Dispatch", part:"SSD / HDD"};
    if(r.q.includes("Swap SSD") && r.a === "Working") return {result:"Dispatch", part:"SSD"};
    if(r.q.includes("Swap HDD") && r.a === "Working") return {result:"Dispatch", part:"HDD"};
    if(r.q.includes("Swap RAM") && r.a === "Working") return {result:"Dispatch", part:"RAM"};
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
  if(label === "FRU P/N"){
    return "- FRU P/N - " + (isBlank ? "" : String(answer).toUpperCase());
  }
  if(label === "Specific keys listed"){
    return `- ${formatOutputText(label)} - ${isBlank ? "" : String(answer).toUpperCase()}`;
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
  if(isManual()) return current().guide;
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

  const lines = [checklistSummaryText()];
  const rec = (review && review.rec) || baseRec;
  lines.push("");
  lines.push(conclusionLine(rec));
  return lines.join("\n");
}


function guideFromChecklist(){
  const q = getQuestions().map(x => x.label.toLowerCase());
  let lines = [current().name, "", "รบกวนช่วยทดสอบและตรวจสอบเบื้องต้นตามขั้นตอนดังนี้ครับ"];
  q.forEach((item, i) => lines.push(`${i+1}. ${item}`));
  return lines.join("\n");
}



function customerStepTH(label){
  const mapped = getChecklistMappingText(label, "th");
  if(mapped) return mapped;
  const map = {
    "Lenovo Diagnostics": "ทดสอบ Run Diagnostics\nสำหรับ ThinkPad, ThinkCentre Desktop, ThinkCentre Tiny และ AIO: กด F10 รัว ๆ ขณะเปิดเครื่อง → เลือก Run All → Quick → Quick Unattended จากนั้นตรวจสอบว่า Pass หรือ Failed\nสำหรับ IdeaPad: กด Novo Button → เลือก UEFI Diagnostics → Run All → Quick จากนั้นตรวจสอบว่า Pass หรือ Failed",
    "Lenovo Diagnostics Storage": "ทดสอบ Run Lenovo Diagnostics เพื่อตรวจสอบ Storage โดยใช้ขั้นตอนตามรุ่นเครื่อง จากนั้นแจ้งผลว่า Pass หรือ Failed",
    "Lenovo Diagnostics Battery": "ทดสอบ Run Lenovo Diagnostics เพื่อตรวจสอบ Battery โดยใช้ขั้นตอนตามรุ่นเครื่อง จากนั้นแจ้งผลว่า Pass หรือ Failed",
    "Battery Report collected": "รบกวนสร้าง Battery Report โดยเปิด Command Prompt (CMD) พิมพ์คำสั่ง powercfg /batteryreport แล้วกด Enter จากนั้นส่งไฟล์ battery-report.html กลับมาให้ทางเราครับ",
    "Dump File collected": "รบกวนส่งไฟล์ Minidump ที่อยู่ในโฟลเดอร์ C:\\Windows\\Minidump กลับมาให้ทางเราครับ",
    "Dump file collected": "รบกวนส่งไฟล์ Minidump ที่อยู่ในโฟลเดอร์ C:\\Windows\\Minidump กลับมาให้ทางเราครับ",
    "Minidump collected": "รบกวนส่งไฟล์ Minidump ที่อยู่ในโฟลเดอร์ C:\\Windows\\Minidump กลับมาให้ทางเราครับ",
    "Power Reset / Emergency Reset": "รบกวนทำ Power Reset / Emergency Reset เพื่อเคลียร์ไฟของตัวเครื่อง แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Power Reset": "รบกวนทำ Power Reset โดยปิดเครื่อง ถอดสายชาร์จ จากนั้นกดปุ่ม Power ค้างประมาณ 30 วินาที แล้วเปิดเครื่องใหม่ครับ",
    "Emergency Reset": "รบกวนทำ Emergency Reset โดยกดที่รู Emergency Reset ใต้เครื่องประมาณ 10 วินาที แล้วเปิดเครื่องใหม่ครับ",
    "Emergency Reset Hole": "รบกวนทำ Emergency Reset โดยใช้เข็มหรือคลิปหนีบกระดาษกดที่รู Emergency Reset ใต้เครื่องค้างประมาณ 10 วินาที แล้วเปิดเครื่องใหม่ครับ",
    "Can Access Safe Mode": "รบกวนเข้า Safe Mode เพื่อตรวจสอบว่าอาการยังคงเกิดขึ้นหรือไม่ แล้วแจ้งผลกลับมาครับ",
    "Adapter test on other machine": "รบกวนนำ Adapter ของเครื่องไปทดลองใช้งานกับเครื่อง Lenovo รุ่นที่รองรับอีกเครื่องหนึ่ง แล้วแจ้งผลว่าสามารถใช้งานได้ปกติหรือไม่",
    "Swap Adapter": "รบกวนสลับ Adapter ที่ใช้งานได้มาทดสอบกับเครื่อง แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Swap PSU": "หากสะดวก รบกวนสลับ PSU ที่ใช้งานได้มาทดสอบกับเครื่อง แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Swap SSD": "หากสะดวกและมี SSD ที่สามารถใช้งานได้ รบกวนสลับทดสอบ แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Swap HDD": "หากสะดวกและมี HDD ที่สามารถใช้งานได้ รบกวนสลับทดสอบ แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Swap RAM": "หากสะดวกและมี RAM ที่สามารถใช้งานได้ รบกวนสลับทดสอบ แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Caps Lock LED works": "ตรวจสอบว่าไฟ Caps Lock ตอบสนองหรือไม่",

    "LED on power button": "ตรวจสอบว่าไฟแสดงสถานะบริเวณปุ่ม Power ติดหรือไม่",
    "LED beside Type-C port": "ตรวจสอบว่าไฟแสดงสถานะบริเวณช่องชาร์จ Type-C ติดหรือไม่",
    "LED beside charging port": "ตรวจสอบว่าไฟแสดงสถานะบริเวณช่องชาร์จติดหรือไม่",
    "Power LED": "ตรวจสอบว่าไฟแสดงสถานะของตัวเครื่องติดหรือไม่",
    "Fan spinning": "ตรวจสอบว่าพัดลมหมุนหรือไม่",
    "Swap Adapter": "รบกวนสลับ Adapter ที่ใช้งานได้มาทดสอบกับเครื่อง แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Swap other Type-C port": "ทดสอบชาร์จกับพอร์ต Type-C ช่องอื่นของเครื่อง แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Adapter test on other machine": "นำ Adapter ไปทดสอบกับเครื่องอื่นที่รองรับ แล้วแจ้งผลว่าสามารถใช้งานได้ปกติหรือไม่",
    "Adapter test on other machine": "นำ Adapter ไปทดสอบกับเครื่องอื่นที่รองรับ แล้วแจ้งผลว่าสามารถใช้งานได้ปกติหรือไม่",
    "Emergency Reset Hole": "รบกวนทำ Emergency Reset โดยใช้เข็มหรือคลิปหนีบกระดาษกดที่รู Emergency Reset ใต้เครื่องค้างประมาณ 10 วินาที แล้วเปิดเครื่องใหม่ครับ",
    "Power Reset": "รบกวนทำ Power Reset โดยปิดเครื่อง ถอดสายชาร์จ จากนั้นกดปุ่ม Power ค้างประมาณ 30 วินาที แล้วเปิดเครื่องใหม่ครับ",
    "Novo Button": "ทดสอบกดปุ่ม Novo Button เพื่อตรวจสอบว่าเครื่องตอบสนองหรือไม่",
    "External Monitor test": "ทดสอบต่อจอนอกและตรวจสอบว่าพบปัญหาเดียวกันหรือไม่",
    "Clean / Reseat RAM": "ทดสอบถอดทำความสะอาดและใส่ RAM ใหม่",
    "Beep sound / pattern": "ตรวจสอบจำนวนเสียง Beep Sound หรือรูปแบบเสียง Beep Sound ที่เกิดขึ้น",
    "Can Access BIOS": "ตรวจสอบว่าสามารถเข้า BIOS ได้หรือไม่",
    "Can Access Safe Mode": "รบกวนเข้า Safe Mode เพื่อตรวจสอบว่าอาการยังคงเกิดขึ้นหรือไม่ แล้วแจ้งผลกลับมาครับ",
    "Windows Startup Repair": "ทดสอบ Startup Repair ของ Windows",
    "Lenovo Diagnostics": "ทดสอบ Run Diagnostics\nสำหรับ ThinkPad, ThinkCentre Desktop, ThinkCentre Tiny และ AIO: กด F10 รัว ๆ ขณะเปิดเครื่อง → เลือก Run All → Quick → Quick Unattended จากนั้นตรวจสอบว่า Pass หรือ Failed\nสำหรับ IdeaPad: กด Novo Button → เลือก UEFI Diagnostics → Run All → Quick จากนั้นตรวจสอบว่า Pass หรือ Failed",
    "Lenovo Diagnostics Storage": "ทดสอบ Run Lenovo Diagnostics เพื่อตรวจสอบ Storage โดยใช้ขั้นตอนตามรุ่นเครื่อง จากนั้นแจ้งผลว่า Pass หรือ Failed",
    "Lenovo Diagnostics Battery": "ทดสอบ Run Lenovo Diagnostics เพื่อตรวจสอบ Battery โดยใช้ขั้นตอนตามรุ่นเครื่อง จากนั้นแจ้งผลว่า Pass หรือ Failed",
    "Re-install Windows": "ทดสอบติดตั้ง Windows ใหม่",
    "Windows Update": "ทดสอบอัปเดต Windows เป็นเวอร์ชันล่าสุด",
    "BIOS Update": "ทดสอบอัปเดต BIOS เป็นเวอร์ชันล่าสุด",
    "Driver Update": "ทดสอบอัปเดต Driver ผ่าน Lenovo Vantage",
    "Driver Update / Lenovo Vantage": "ทดสอบอัปเดต Driver ผ่าน Lenovo Vantage",
    "Camera Shutter": "ตรวจสอบว่า Camera Shutter ถูกปิดอยู่หรือไม่",
    "Issue happens on all apps": "ตรวจสอบว่าอาการเกิดขึ้นทุกโปรแกรม หรือเฉพาะบางโปรแกรม",
    "Check Camera in Device Manager": "ทดลองเปิดใช้งานกล้องผ่านโปรแกรม Camera ของ Windows",
    "Check Camera in Device Manager": "ตรวจสอบใน Device Manager ว่ายังพบอุปกรณ์ Camera หรือไม่",
    "Uninstall Camera Driver and Restart": "ทดสอบถอนติดตั้ง Driver Camera และ Restart เครื่อง",
    "BIOS Camera enabled": "ตรวจสอบว่า Camera ถูก Enable ใน BIOS หรือไม่",
    "Clean camera lens": "ทำความสะอาดบริเวณเลนส์กล้องและทดสอบอีกครั้ง",
    "Photo / Video provided": "รบกวนแนบรูปหรือวิดีโอขณะเกิดอาการเพิ่มเติม",
    "Specific keys listed": "ระบุปุ่มที่กดไม่ติดเพิ่มเติม",
    "USB Keyboard test": "ทดสอบใช้งานด้วย USB Keyboard ภายนอก",
    "FRU P/N": "ส่งภาพถ่ายอุปกรณ์ที่มีปัญหา ให้เห็น FRU P/N หรือ Barcode",
    "On-Screen Keyboard test": "ทดสอบใช้งานผ่าน On-Screen Keyboard",
    "Driver / Windows Update": "ทดสอบอัปเดต Windows และ Driver ที่เกี่ยวข้อง",
    "Output device selected correctly": "ตรวจสอบว่าเลือก Output Device ถูกต้องหรือไม่",
    "Input device selected correctly": "ตรวจสอบว่าเลือก Input Device ถูกต้องหรือไม่",
    "Mute checked": "ตรวจสอบว่าเครื่องถูกปิดเสียง (Mute) อยู่หรือไม่",
    "Check Audio Device in Device Manager": "ตรวจสอบใน Device Manager ว่ายังพบอุปกรณ์ Audio หรือไม่",
    "Headphone Test": "ทดสอบใช้งานร่วมกับหูฟัง",
    "Voice Recorder Test": "ทดสอบบันทึกเสียงผ่านโปรแกรม Voice Recorder",
    "Physical damage / Liquid spilled": "ตรวจสอบว่ามีร่องรอยชำรุด หรือคราบน้ำหรือไม่",
    "Other issue": "ตัวเครื่องมีอาการผิดปกติอื่น ๆ เพิ่มเติมหรือไม่",
    "Can detect Wi-Fi signal": "ตรวจสอบว่าเครื่องสามารถค้นหาสัญญาณ Wi-Fi ได้หรือไม่",
    "Another Wi-Fi / Hotspot test": "ทดสอบเชื่อมต่อ Wi-Fi อื่น หรือ Hotspot จากโทรศัพท์มือถือ",
    "Airplane Mode": "ตรวจสอบว่า Airplane Mode ถูกปิดอยู่หรือไม่",
    "Check Wireless Driver in Device Manager": "ตรวจสอบใน Device Manager ว่ายังพบ Wireless Driver หรือไม่",
    "Uninstall Wireless Driver and Restart": "ทดสอบถอนติดตั้ง Wireless Driver และ Restart เครื่อง",
    "WLAN Driver Update": "ทดสอบอัปเดต Driver WLAN",
    "Bluetooth Driver Update": "ทดสอบอัปเดต Driver Bluetooth",
    "Swap Type-C port charge": "ทดสอบสลับพอร์ตชาร์จ Type-C",
    "LED beside port": "ตรวจสอบไฟแสดงสถานะบริเวณพอร์ตชาร์จ",
    "Battery Report collected": "รบกวนสร้าง Battery Report โดยเปิด Command Prompt (CMD) พิมพ์คำสั่ง powercfg /batteryreport แล้วกด Enter จากนั้นส่งไฟล์ battery-report.html กลับมาให้ทางเราครับ",
    "Battery Health in Lenovo Vantage": "รบกวนส่ง Battery Health โดยเปิด Lenovo Vantage -> Device -> Power -> ตรวจสอบหัวข้อ Battery Health",
    "Battery swollen confirmed": "ตรวจสอบว่า Battery มีอาการบวมหรือไม่",
    "Photo provided": "รบกวนแนบรูปถ่ายเพิ่มเติมเพื่อตรวจสอบ",
    "Stop using device advised": "หาก Battery บวม รบกวนหยุดใช้งานเครื่องชั่วคราวเพื่อความปลอดภัย",
    "Power Reset / Emergency Reset": "รบกวนทำ Power Reset / Emergency Reset เพื่อเคลียร์ไฟของตัวเครื่อง แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Disable UEFI IPv4 / IPv6": "ปิด UEFI IPv4 / IPv6 ใน BIOS เพื่อป้องกันเครื่อง Boot ผ่าน Network",
    "Storage Firmware Update": "ทดสอบติดตั้ง Storage Firmware เป็นเวอร์ชันล่าสุด",
    "Intel RST / Storage Driver loaded": "โหลด Intel RST / Storage Driver ระหว่างติดตั้ง Windows",
    "Re-install Windows USB recreated": "ทดสอบสร้าง USB Re-install Windows ใหม่อีกครั้ง",
    "Fingerprint setup in Windows Hello": "ตรวจสอบการตั้งค่า Fingerprint ใน Windows Hello",
    "Check Fingerprint Device in Device Manager": "ตรวจสอบใน Device Manager ว่ายังพบอุปกรณ์ Fingerprint หรือไม่",
    "Uninstall Fingerprint Driver and Restart": "ทดสอบถอนติดตั้ง Driver Fingerprint และ Restart เครื่อง",
    "Windows Hello Face setup": "ตรวจสอบการตั้งค่า Face Recognition ใน Windows Hello",
    "Lock on leave setting enabled": "ตรวจสอบว่าเปิดใช้งาน Lock on leave function อยู่หรือไม่",
    "Presence Detection setting checked": "ตรวจสอบการตั้งค่า Presence Detection",
    "Smart Card Driver Update": "ทดสอบอัปเดต Driver Smart Card Reader",
    "Input volume level checked": "ตรวจสอบระดับเสียง Input ของ Microphone",
    "High CPU usage checked": "ตรวจสอบว่ามีการใช้งาน CPU สูงผิดปกติหรือไม่",
    "Task Manager checked": "ตรวจสอบ Task Manager เพื่อดูโปรแกรมที่ใช้งานทรัพยากรสูง",
    "Fan area cleaned": "ตรวจสอบและทำความสะอาดบริเวณช่องระบายอากาศ",
    "Check temperature / Overheat": "ตรวจสอบอุณหภูมิและอาการเครื่องร้อนผิดปกติ",
    "Key stuck / sunk": "ตรวจสอบว่ามีปุ่มจม ค้าง หรือกดติดอยู่หรือไม่",
    "Power Reset": "รบกวนทำ Power Reset โดยปิดเครื่อง ถอดสายชาร์จ จากนั้นกดปุ่ม Power ค้างประมาณ 30 วินาที แล้วเปิดเครื่องใหม่ครับ",
    "Check USB Error in Device Manager": "ตรวจสอบใน Device Manager ว่ามี USB error หรือเครื่องหมายแจ้งเตือนที่เกี่ยวข้องกับ USB หรือไม่",
    "Swap USB Port": "รบกวนสลับทดสอบกับพอร์ต USB ช่องอื่นบนเครื่อง แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Swap USB Device": "รบกวนสลับใช้งานกับอุปกรณ์ USB ตัวอื่นที่ใช้งานได้ แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Swap USB-C Port": "รบกวนสลับทดสอบกับพอร์ต USB-C ช่องอื่นบนเครื่อง แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Swap Smart Card": "รบกวนสลับทดสอบด้วย Smart Card ใบอื่นที่ใช้งานได้ แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Check Smart Card Reader in Device Manager": "ตรวจสอบใน Device Manager ว่ายังพบอุปกรณ์ Smart Card Reader หรือไม่",
    "Swap Mouse": "รบกวนสลับทดสอบด้วย Mouse ตัวอื่นที่ใช้งานได้ แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Mouse test on other machine": "รบกวนนำ Mouse ตัวเดิมไปทดสอบกับเครื่องอื่น แล้วแจ้งผลว่าสามารถใช้งานได้ปกติหรือไม่",
    "Swap Battery": "รบกวนสลับ Battery ก้อนใหม่หรือ Battery ที่ใช้งานได้กับ Mouse แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",

    "Can access Windows": "ตรวจสอบว่าสามารถเข้าสู่ Windows ได้หรือไม่",
    "BIOS detects storage": "ตรวจสอบว่า BIOS สามารถตรวจพบ SSD/HDD ได้หรือไม่",
    "BIOS detects HDD": "ตรวจสอบว่า BIOS สามารถตรวจพบ HDD ได้หรือไม่",
    "Charge LED": "ตรวจสอบว่าไฟแสดงสถานะการชาร์จติดหรือไม่",
    "Caps Lock Toggle": "ตรวจสอบว่าปุ่ม Caps Lock สามารถเปิด/ปิดไฟสถานะได้หรือไม่",
    "Display Backlight": "ตรวจสอบว่าหน้าจอมีแสงหรือมีภาพจาง ๆ หรือไม่",
    "Adapter test": "ทดสอบใช้งานกับ Adapter ตัวอื่นที่ใช้งานได้",
    "Adapter works with another cord": "ทดสอบ Adapter ร่วมกับสายไฟอีกเส้นที่ใช้งานได้",
    "Another Router test": "ทดสอบเชื่อมต่อกับ Router ตัวอื่นหรือเครือข่ายอื่น",
    "Auto reboot occurs": "ตรวจสอบว่าเครื่องมีอาการ Restart เองหรือไม่",
    "BIOS Fingerprint enabled": "ตรวจสอบว่า Fingerprint ถูก Enable ใน BIOS หรือไม่",
    "BIOS Hotkey mode": "ตรวจสอบการตั้งค่า Hotkey Mode ใน BIOS",
    "BIOS Keyboard Backlight setting": "ตรวจสอบการตั้งค่า Keyboard Backlight ใน BIOS",
    "BIOS Touchpad enabled": "ตรวจสอบว่า Touchpad ถูก Enable ใน BIOS หรือไม่",
    "BIOS default loaded": "โหลดค่า BIOS Default แล้วทดสอบอีกครั้ง",
    "BSOD occurs": "ตรวจสอบว่าเครื่องมีอาการจอฟ้า (BSOD) หรือไม่",
    "Battery Conservation Mode": "ตรวจสอบว่าเปิด Battery Conservation Mode อยู่หรือไม่",
    "Battery charge level checked": "ตรวจสอบระดับ Battery ว่าสามารถชาร์จเพิ่มขึ้นได้หรือไม่",
    "Battery percentage": "ตรวจสอบเปอร์เซ็นต์ Battery ที่แสดงบน Windows",
    "Bluetooth toggle available": "ตรวจสอบว่ามีปุ่มเปิด/ปิด Bluetooth ใน Windows หรือไม่",
    "Boot order checked": "ตรวจสอบลำดับ Boot ใน BIOS ว่าถูกต้องหรือไม่",
    "CMOS battery / RTC check": "ตรวจสอบ CMOS Battery / RTC ว่าทำงานปกติหรือไม่",
    "Can login with another account": "ทดสอบ Login ด้วยบัญชีผู้ใช้อื่น",
    "Check BIOS": "เข้า BIOS เพื่อตรวจสอบการตั้งค่าที่เกี่ยวข้อง",
    "Check LAN pin / damage": "ตรวจสอบขา LAN และร่องรอยชำรุดบริเวณพอร์ต LAN",
    "Check Task Manager usage": "ตรวจสอบการใช้งาน CPU / RAM / Disk ใน Task Manager",
    "Clean scroll wheel": "ทำความสะอาดบริเวณ Scroll Wheel แล้วทดสอบอีกครั้ง",
    "Clean touchpad surface": "ทำความสะอาดพื้นผิว Touchpad แล้วทดสอบอีกครั้ง",
    "ClickPad enabled": "ตรวจสอบว่า ClickPad ถูก Enable อยู่หรือไม่",
    "Customer knows password": "ตรวจสอบว่าลูกค้าทราบรหัสผ่านที่ใช้งานอยู่หรือไม่",
    "Check Bluetooth Device in Device Manager": "ตรวจสอบใน Device Manager ว่ายังพบอุปกรณ์ Bluetooth หรือไม่",
    "Check Card Reader in Device Manager": "ตรวจสอบใน Device Manager ว่ายังพบอุปกรณ์ Card Reader หรือไม่",
    "Disable Touchpad test": "ทดสอบปิด Touchpad แล้วตรวจสอบว่าอาการยังเกิดขึ้นหรือไม่",
    "Driver / Firmware Update": "ทดสอบอัปเดต Driver และ Firmware ที่เกี่ยวข้องเป็นเวอร์ชันล่าสุด",
    "Enable LAN in BIOS": "ตรวจสอบว่า LAN ถูก Enable ใน BIOS หรือไม่",
    "Error photo provided": "รบกวนแนบรูป Error ที่พบเพิ่มเติม",
    "Event Viewer / Dump file collected": "รบกวนเก็บข้อมูล Event Viewer หรือ Dump file เพิ่มเติมเพื่อตรวจสอบ",
    "External Mic Test": "ทดสอบใช้งานร่วมกับ Microphone ภายนอก",
    "Mouse test": "ทดสอบใช้งานร่วมกับ Mouse ภายนอก",
    "Mouse works": "ตรวจสอบว่า Mouse ภายนอกสามารถใช้งานได้ปกติหรือไม่",
    "FN & Ctrl Swap": "ตรวจสอบการตั้งค่า FN & Ctrl Swap ใน BIOS หรือ Lenovo Vantage",
    "FN Lock checked": "ตรวจสอบสถานะ FN Lock ว่าเปิดหรือปิดอยู่",
    "Freeze occurs": "ตรวจสอบว่าเครื่องมีอาการค้างหรือไม่",

    "Audio Driver Update": "ทดสอบอัปเดต Audio Driver เป็นเวอร์ชันล่าสุด",
    "Camera Driver Update": "ทดสอบอัปเดต Camera Driver เป็นเวอร์ชันล่าสุด",
    "Camera Driver Update / Lenovo Vantage": "ทดสอบอัปเดต Camera Driver และ Lenovo Vantage เป็นเวอร์ชันล่าสุด",
    "Fingerprint Driver Update / Lenovo Vantage": "ทดสอบอัปเดต Fingerprint Driver และ Lenovo Vantage เป็นเวอร์ชันล่าสุด",
    "SD Card Reader Driver Update": "ทดสอบอัปเดต SD Card Reader Driver เป็นเวอร์ชันล่าสุด",
    "Smart Card Driver Update": "ทดสอบอัปเดต Smart Card Driver เป็นเวอร์ชันล่าสุด",
    "Touchpad Driver Update": "ทดสอบอัปเดต Touchpad Driver เป็นเวอร์ชันล่าสุด",
    "TrackPoint Driver Update": "ทดสอบอัปเดต TrackPoint Driver เป็นเวอร์ชันล่าสุด",
    "USB Driver Update / Lenovo Vantage": "ทดสอบอัปเดต USB Driver และ Lenovo Vantage เป็นเวอร์ชันล่าสุด",
    "Swap Headphone": "ทดลองสลับ Headphone ที่ใช้งานได้",
    "Swap HDMI / DisplayPort cable": "ทดลองสลับสาย HDMI หรือ DisplayPort",
    "Graphics Driver Update": "ทดสอบอัปเดต Driver การ์ดจอเป็นเวอร์ชันล่าสุด",
    "Hotkey Driver Update": "ทดสอบอัปเดต Hotkey Driver เป็นเวอร์ชันล่าสุด",
    "Issue occurs all apps": "ตรวจสอบว่าอาการเกิดขึ้นกับทุกโปรแกรมหรือไม่",
    "Keyboard / Touchpad affected by swollen battery": "ตรวจสอบว่า Keyboard / Touchpad ได้รับผลกระทบจาก Battery บวมหรือไม่",
    "Keyboard Online Test": "ทดสอบ Keyboard ผ่าน Online Keyboard Test",
    "Keyboard backlight hotkey test": "ทดสอบปุ่มลัดสำหรับเปิด/ปิดไฟ Keyboard Backlight",
    "Keyboard test on other machine": "นำ Keyboard ไปทดสอบกับเครื่องอื่น",
    "LAN Driver Update": "ทดสอบอัปเดต Driver LAN เป็นเวอร์ชันล่าสุด",
    "Lenovo Hotkey Features update": "ทดสอบอัปเดต Lenovo Hotkey Features เป็นเวอร์ชันล่าสุด",
    "Lenovo Vantage Update": "ทดสอบอัปเดต Lenovo Vantage เป็นเวอร์ชันล่าสุด",
    "Lenovo Vantage setting": "ตรวจสอบการตั้งค่าที่เกี่ยวข้องใน Lenovo Vantage",
    "Load BIOS default": "โหลดค่า BIOS Default แล้วทดสอบอีกครั้ง",
    "Load default BIOS": "โหลดค่า BIOS Default แล้วทดสอบอีกครั้ง",
    "Microphone enhancement disabled": "ทดสอบปิด Microphone Enhancement แล้วทดสอบอีกครั้ง",
    "Monitor test on other machine": "นำ Monitor ไปทดสอบกับเครื่องอื่น",
    "Network boot disabled": "ตรวจสอบว่าได้ปิด Network Boot แล้วหรือไม่",
    "Noise occurs all apps": "ตรวจสอบว่าเสียงผิดปกติเกิดขึ้นกับทุกโปรแกรมหรือไม่",
    "Noise occurs all the time": "ตรวจสอบว่าเสียงผิดปกติเกิดขึ้นตลอดเวลาหรือไม่",
    "Original Adapter used": "ตรวจสอบว่าใช้งาน Adapter เดิมของเครื่องหรือ Adapter ที่รองรับรุ่นนี้",
    "Password / PIN reset": "ทดสอบ Reset Password / PIN ของ Windows",
    "Pixel location confirmed": "ตรวจสอบตำแหน่ง Pixel ที่ผิดปกติบนหน้าจอ",
    "Proof of ownership checked": "ตรวจสอบหลักฐานความเป็นเจ้าของเครื่องตามขั้นตอน",
    "RTC battery / CMOS check": "ตรวจสอบ RTC Battery / CMOS ว่าทำงานปกติหรือไม่",
    "SD Card test on other machine": "นำ SD Card ไปทดสอบกับเครื่องอื่น",
    "SIM card detected": "ตรวจสอบว่าเครื่องสามารถตรวจพบ SIM Card หรือไม่",
    "SIM detected": "ตรวจสอบว่าเครื่องสามารถตรวจพบ SIM หรือไม่",
    "SIM tray damage": "ตรวจสอบถาด SIM ว่ามีร่องรอยชำรุดหรือไม่",
    "Safe Mode Test": "ทดสอบใช้งานใน Safe Mode",
    "Secure Boot disabled": "ทดสอบปิด Secure Boot แล้วตรวจสอบอีกครั้ง",
    "Set date and time in BIOS": "ตั้งค่าวันที่และเวลาใน BIOS ให้ถูกต้อง",
    "Specific hotkey listed": "ระบุปุ่ม Hotkey ที่มีปัญหาเพิ่มเติม",
    "Stop code / Error code collected": "รบกวนแจ้ง Stop Code หรือ Error Code ที่พบเพิ่มเติม",
    "Swap Power Cord": "ทดสอบสลับสาย AC Power Cord เส้นอื่นที่ใช้งานได้",
    "Swap Adapter / Power Cable": "ทดสอบสลับ Adapter หรือสาย Power Cable ที่ใช้งานได้",
    "Swap Bluetooth Device": "ทดสอบเชื่อมต่อกับอุปกรณ์ Bluetooth ตัวอื่นที่ใช้งานได้",
    "Swap HDMI cable": "ทดสอบสลับสาย HDMI เส้นอื่นที่ใช้งานได้",
    "Swap HDMI / DisplayPort cable": "ทดสอบสลับสาย HDMI/DP เส้นอื่นที่ใช้งานได้",
    "Swap LAN cable": "ทดสอบสลับสาย LAN เส้นอื่นที่ใช้งานได้",
    "Swap SD Card": "ทดสอบสลับ SD Card ใบอื่นที่ใช้งานได้",
    "Swap SIM": "ทดสอบสลับ SIM Card ใบอื่นที่ใช้งานได้",
    "Swap SSD / HDD": "หากสะดวก รบกวนสลับ SSD/HDD ที่ใช้งานได้มาทดสอบ",
    "Swap Wi-Fi / Hotspot": "ทดสอบเชื่อมต่อ Wi-Fi อื่น หรือ Hotspot จากโทรศัพท์มือถือ",
    "Swap App": "ทดสอบใช้งานผ่านโปรแกรมอื่นที่รองรับ",
    "Swap Headphone": "ทดสอบใช้งานร่วมกับหูฟังตัวอื่นที่ใช้งานได้",
    "Swap Keyboard": "ทดสอบสลับ Keyboard ตัวอื่นที่ใช้งานได้",
    "Swap Monitor": "ทดสอบสลับ Monitor ตัวอื่นที่ใช้งานได้",
    "Swap Power Cable": "ทดสอบสลับสาย Power Cable เส้นอื่นที่ใช้งานได้",
    "Swap Power Cord": "ทดสอบสลับสาย Power Cord เส้นอื่นที่ใช้งานได้",
    "Swap Power Outlet": "ทดสอบเสียบใช้งานกับปลั๊กไฟช่องอื่น",
    "Windows Recovery": "ทดสอบ Windows Recovery โดยเลือกวิธีที่เหมาะสมกับอาการ เช่น Reset This PC, Startup Repair, System Restore หรือ Uninstall Updates",
    "System Restore": "ทดสอบ Windows Recovery โดยเลือกวิธีที่เหมาะสมกับอาการ เช่น Reset This PC, Startup Repair, System Restore หรือ Uninstall Updates",
    "Touchpad enabled in Settings": "ตรวจสอบว่า Touchpad ถูกเปิดใช้งานใน Settings ของ Windows หรือไม่",
    "TrackPoint enabled in BIOS": "ตรวจสอบว่า TrackPoint ถูก Enable ใน BIOS หรือไม่",
    "USB Mouse / Keyboard test": "ทดสอบใช้งานร่วมกับ USB Mouse หรือ USB Keyboard ภายนอก",
    "USB to LAN Adapter test": "ทดสอบใช้งานร่วมกับ USB to LAN Adapter",
    "Uninstall Audio Driver and Restart": "ทดสอบถอนติดตั้ง Audio Driver และ Restart เครื่อง",
    "Uninstall Bluetooth Driver and Restart": "ทดสอบถอนติดตั้ง Bluetooth Driver และ Restart เครื่อง",
    "Volume Mixer checked": "ตรวจสอบ Volume Mixer ว่าระดับเสียงถูกต้องหรือไม่",
    "Volume level checked": "ตรวจสอบระดับเสียงของเครื่องว่าไม่ได้ถูกลดไว้ต่ำเกินไป",
    "WLAN / WWAN card changed before issue": "ตรวจสอบว่ามีการเปลี่ยน WLAN / WWAN Card ก่อนเกิดอาการหรือไม่",
    "WWAN Driver Update": "ทดสอบอัปเดต Driver WWAN เป็นเวอร์ชันล่าสุด",
    "Check WWAN Device in Device Manager": "ตรวจสอบใน Device Manager ว่ายังพบอุปกรณ์ WWAN หรือไม่",
    "Re-install Windows": "ทดสอบติดตั้ง Windows ใหม่",
    "Video clip provided": "รบกวนแนบคลิปวิดีโอขณะเกิดอาการเพิ่มเติม",
    "Swap USB-A Port": "ทดลองเปลี่ยนไปใช้งานพอร์ต USB-A ช่องอื่นบน Dock",
    "USB Mouse / Keyboard test": "ทดลองใช้งานด้วย USB Mouse หรือ USB Keyboard",
    "Swap USB-C cable": "ทดลองสลับสาย USB-C",
    "Swap Dock": "ทดลองสลับ Dock",
    "Dock Firmware Update": "อัปเดต Dock Firmware ให้เป็นเวอร์ชันล่าสุด",
    "Lenovo Vantage Update": "อัปเดตผ่าน Lenovo Vantage ให้เป็นเวอร์ชันล่าสุด",
    "Swap DisplayPort cable": "ทดลองสลับสาย DisplayPort",
    "Swap HDMI cable": "ทดลองสลับสาย HDMI",
    "HDMI Port on notebook test": "ทดลองเชื่อมต่อจอภาพผ่านพอร์ต HDMI ของเครื่องคอมพิวเตอร์โดยตรง",
    "Wi-Fi test": "ทดลองเชื่อมต่ออินเทอร์เน็ตผ่าน Wi-Fi",
    "Swap LAN cable": "ทดลองสลับสาย LAN",
    "LAN Port on notebook test": "ทดลองเชื่อมต่อสาย LAN เข้ากับเครื่องคอมพิวเตอร์โดยตรง",
    "Built-in Speaker test": "ทดลองใช้งานลำโพงของเครื่องคอมพิวเตอร์",
    "Headphone Test": "ทดลองใช้งานด้วย Headphone",
    "Audio Jack on notebook test": "ทดลองเชื่อมต่อ Headphone กับ Audio Jack ของเครื่องคอมพิวเตอร์โดยตรง",
    "Swap Adapter": "ทดลองสลับ Adapter"
  };

  const standardMap = {
    "Can Access Windows": "ตรวจสอบว่าสามารถเข้า Windows ได้หรือไม่",
    "Can access Windows": "ตรวจสอบว่าสามารถเข้า Windows ได้หรือไม่",
    "Check Temperature": "ตรวจสอบว่าเครื่องมีความร้อนผิดปกติหรือไม่",
    "Check for Dust and Foreign Objects": "ตรวจสอบว่าพัดลมหรือช่องระบายอากาศมีฝุ่นหรือสิ่งแปลกปลอมหรือไม่",
    "Check for Dust or Obstruction": "ตรวจสอบว่าพัดลมหรือช่องระบายอากาศมีฝุ่นหรือสิ่งแปลกปลอมหรือไม่",
    "Fan Check": "ตรวจสอบว่าพัดลมทำงานหรือไม่",
    "Check Task Manager Usage": "เปิด Task Manager และตรวจสอบการใช้งาน CPU / RAM / Disk / GPU",
    "Check Task Manager usage": "เปิด Task Manager และตรวจสอบการใช้งาน CPU / RAM / Disk / GPU",
    "Check Power Mode": "ตรวจสอบ Power Mode และทดลองเปลี่ยนเป็น Balanced",
    "Windows Update": "ตรวจสอบและติดตั้ง Windows Update ที่ค้างอยู่ (หากมี)",
    "BIOS Update": "อัปเดต BIOS เป็นเวอร์ชันล่าสุด",
    "Load BIOS Default": "ทำการ Load BIOS Default",
    "Load BIOS default": "ทำการ Load BIOS Default",
    "Load default BIOS": "ทำการ Load BIOS Default",
    "Lenovo Diagnostics": "ทดสอบ Run Diagnostics\nสำหรับ ThinkPad, ThinkCentre Desktop, ThinkCentre Tiny และ AIO: กด F10 รัว ๆ ขณะเปิดเครื่อง → เลือก Run All → Quick → Quick Unattended จากนั้นตรวจสอบว่า Pass หรือ Failed\nสำหรับ IdeaPad: กด Novo Button → เลือก UEFI Diagnostics → Run All → Quick จากนั้นตรวจสอบว่า Pass หรือ Failed",
    "Lenovo Diagnostics Storage": "ทดสอบ Run Lenovo Diagnostics เพื่อตรวจสอบ Storage โดยใช้ขั้นตอนตามรุ่นเครื่อง จากนั้นแจ้งผลว่า Pass หรือ Failed",
    "Lenovo Diagnostics Battery": "ทดสอบ Run Lenovo Diagnostics เพื่อตรวจสอบ Battery โดยใช้ขั้นตอนตามรุ่นเครื่อง จากนั้นแจ้งผลว่า Pass หรือ Failed",
    "Clean Cooling System": "ทำความสะอาดระบบระบายความร้อน แล้วทดลองใช้งานอีกครั้ง",
    "Physical damage / Liquid spilled": "ตรวจสอบว่าตัวเครื่องมีความเสียหาย หรือมีของเหลวหกใส่ตัวเครื่องหรือไม่",
    "Other issue": "ตัวเครื่องมีอาการผิดปกติอื่น ๆ เพิ่มเติมหรือไม่"
  };
  return standardMap[label] || map[label] || getChecklistMappingText(label, "th") || label;
}

function customerStepEN(label){
  const mapped = getChecklistMappingText(label, "en");
  if(mapped) return mapped;
  const map = {
    "Lenovo Diagnostics": "Run Lenovo Diagnostics.\nFor ThinkPad, ThinkCentre Desktop, ThinkCentre Tiny, and AIO: press F10 repeatedly while turning on the machine → select Run All → Quick → Quick Unattended, then check whether the result is Pass or Failed.\nFor IdeaPad: press the Novo Button → select UEFI Diagnostics → Run All → Quick, then check whether the result is Pass or Failed.",
    "Lenovo Diagnostics Storage": "Run Lenovo Diagnostics.\nFor ThinkPad, ThinkCentre Desktop, ThinkCentre Tiny, and AIO: press F10 repeatedly while turning on the machine → select Run All → Quick → Quick Unattended, then check whether the result is Pass or Failed.\nFor IdeaPad: press the Novo Button → select UEFI Diagnostics → Run All → Quick, then check whether the result is Pass or Failed.",
    "Lenovo Diagnostics Battery": "Run Lenovo Diagnostics.\nFor ThinkPad, ThinkCentre Desktop, ThinkCentre Tiny, and AIO: press F10 repeatedly while turning on the machine → select Run All → Quick → Quick Unattended, then check whether the result is Pass or Failed.\nFor IdeaPad: press the Novo Button → select UEFI Diagnostics → Run All → Quick, then check whether the result is Pass or Failed.",
    "Battery Report collected": "Please generate a Battery Report by opening Command Prompt (CMD), running the command powercfg /batteryreport, and then send us the generated battery-report.html file.",
    "Dump File collected": "Please send us the Minidump files located in C:\\Windows\\Minidump.",
    "Dump file collected": "Please send us the Minidump files located in C:\\Windows\\Minidump.",
    "Minidump collected": "Please send us the Minidump files located in C:\\Windows\\Minidump.",
    "Emergency Reset Hole": "Please perform an Emergency Reset by inserting a pin or paper clip into the Emergency Reset hole on the bottom of the system, press and hold for approximately 10 seconds, then power the system on again.",
    "Power Reset / Emergency Reset": "Please perform Power Reset / Emergency Reset to clear residual power, then power the system on again.",
    "Power Reset": "Please perform a Power Reset by turning the system off, disconnecting the power source, then press and hold the Power button for approximately 30 seconds before turning the system back on.",
    "Emergency Reset": "Please perform Emergency Reset by pressing the Emergency Reset hole on the bottom cover for approximately 10 seconds, then power the system on again.",
    "Can Access Safe Mode": "Please boot the system into Safe Mode and let us know whether the issue still occurs.",
    "Adapter test on other machine": "Please test the Adapter with another compatible Lenovo machine and let us know whether it works fine.",
    "Swap Adapter": "Please test the system with another known-good Adapter.",
    "Swap PSU": "Please test the system with another working PSU and let us know whether the issue remains or works fine.",
    "Swap SSD": "If a known-good SSD is available, please swap it for testing and let us know whether the issue remains or works fine.",
    "Swap HDD": "If a known-good HDD is available, please swap it for testing and let us know whether the issue remains or works fine.",
    "Swap RAM": "If known-good RAM is available, please swap it for testing and let us know whether the issue remains or works fine.",
    "Caps Lock LED works": "Check whether the Caps Lock LED responds.",
    "Caps Lock Toggle": "Check whether Caps Lock can toggle on and off.",
    "Display Backlight": "Check whether the display has faint image or backlight.",
    "Swap USB Port": "Please test with another USB port on the machine and let us know whether the issue remains or works fine.",
    "Swap USB Device": "Please test with another known-good USB device and let us know whether the issue remains or works fine.",
    "Swap USB-C Port": "Please test with another USB-C port on the machine and let us know whether the issue remains or works fine.",
    "Swap Smart Card": "Please test with another known-good Smart Card and let us know whether the issue remains or works fine.",
    "Check Smart Card Reader in Device Manager": "Please check Device Manager and confirm whether the Smart Card Reader is detected.",
    "Swap Mouse": "Please test with another known-good mouse and let us know whether the issue remains or works fine.",
    "Mouse test on other machine": "Please test the same mouse on another machine and let us know whether it works fine.",
    "Swap Battery": "Please replace the mouse battery with a new or known-good battery and let us know whether the issue remains or works fine.",

    "LED on power button": "Check whether the LED on the power button is on.",
    "LED beside Type-C port": "Check whether the LED beside the Type-C charging port is on.",
    "Swap Adapter": "Please test the system with another known-good Adapter.",
    "Swap other Type-C port": "Test with another Type-C charging port.",
    "Adapter test on other machine": "Test the Adapter with another compatible machine.",
    "Emergency Reset Hole": "Please perform an Emergency Reset by inserting a pin or paper clip into the Emergency Reset hole on the bottom of the system, press and hold for approximately 10 seconds, then power the system on again.",
    "Power Reset": "Please perform a Power Reset by turning the system off, disconnecting the power source, then press and hold the Power button for approximately 30 seconds before turning the system back on.",
    "External Monitor test": "Connect an external monitor and check the display result.",

    "Audio Driver Update": "Please update the Audio Driver to the latest version.",
    "Camera Driver Update": "Please update the Camera Driver to the latest version.",
    "Camera Driver Update / Lenovo Vantage": "Please update the Camera Driver and Lenovo Vantage to the latest version.",
    "Fingerprint Driver Update / Lenovo Vantage": "Please update the Fingerprint Driver and Lenovo Vantage to the latest version.",
    "SD Card Reader Driver Update": "Please update the SD Card Reader Driver to the latest version.",
    "Smart Card Driver Update": "Please update the Smart Card Driver to the latest version.",
    "Touchpad Driver Update": "Please update the Touchpad Driver to the latest version.",
    "TrackPoint Driver Update": "Please update the TrackPoint Driver to the latest version.",
    "USB Driver Update / Lenovo Vantage": "Please update the USB Driver and Lenovo Vantage to the latest version.",
    "Swap Headphone": "Please test with another known-good headphone.",
    "Swap HDMI / DisplayPort cable": "Please swap the HDMI or DisplayPort cable.",
    "Camera Shutter": "Check whether the Camera Shutter is closed.",
    "Check Camera in Device Manager": "Check if the Camera device appears in Device Manager.",
    "Check Camera in Device Manager": "Test the camera using the Windows Camera application.",
    "Uninstall Camera Driver and Restart": "Uninstall the Camera driver and restart the machine.",
    "BIOS Camera enabled": "Check whether Camera is enabled in BIOS.",
    "Swap USB-A Port": "Test another USB-A port on the Dock.",
    "USB Mouse / Keyboard test": "Test with a USB mouse or USB keyboard.",
    "Swap USB-C cable": "Swap the USB-C cable.",
    "Swap Dock": "Swap the Dock.",
    "Dock Firmware Update": "Update the Dock Firmware to the latest version.",
    "Lenovo Vantage Update": "Update through Lenovo Vantage to the latest version.",
    "Swap DisplayPort cable": "Swap the DisplayPort cable.",
    "Swap HDMI cable": "Swap the HDMI cable.",
    "HDMI Port on notebook test": "Test the monitor through the HDMI port on the computer.",
    "Wi-Fi test": "Test the internet connection through Wi-Fi.",
    "Swap LAN cable": "Swap the LAN cable.",
    "LAN Port on notebook test": "Connect the LAN cable directly to the computer.",
    "Built-in Speaker test": "Test the built-in speaker on the computer.",
    "Headphone Test": "Test with a headphone.",
    "Audio Jack on notebook test": "Connect the headphone directly to the audio jack on the computer.",
    "Swap Adapter": "Swap the Adapter.",
    "Physical damage / Liquid spilled": "Check for any physical damage or liquid damage.",
    "Other issue": "Check whether there are any additional issues."
  };
  return map[label] || label;
}


// v4.8.3 Email TH rule: write customer steps, keep only final result request at the bottom.
function customerStepTH(label){
  const map = {
    "Can Access Windows": "ตรวจสอบว่าสามารถเข้า Windows ได้หรือไม่",
    "Can access Windows": "ตรวจสอบว่าสามารถเข้า Windows ได้หรือไม่",
    "Power LED": "ตรวจสอบว่าไฟแสดงสถานะของตัวเครื่องติดหรือไม่",
    "Charge LED": "ตรวจสอบว่าไฟแสดงสถานะการชาร์จติดหรือไม่",
    "Caps Lock Toggle": "ตรวจสอบว่าปุ่ม Caps Lock สามารถเปิด/ปิดไฟสถานะได้หรือไม่",
    "Display Backlight": "ตรวจสอบว่าหน้าจอมีแสงหรือมีภาพจาง ๆ หรือไม่",
    "LED on power button": "ตรวจสอบว่าไฟแสดงสถานะบริเวณปุ่ม Power ติดหรือไม่",
    "LED beside Type-C port": "ตรวจสอบว่าไฟแสดงสถานะบริเวณช่องชาร์จ Type-C ติดหรือไม่",
    "LED beside charging port": "ตรวจสอบว่าไฟแสดงสถานะบริเวณช่องชาร์จติดหรือไม่",
    "Fan spinning": "ตรวจสอบว่าพัดลมหมุนหรือไม่",
    "Fan Check": "ตรวจสอบว่าพัดลมทำงานหรือไม่",
    "Check Temperature": "ตรวจสอบว่าเครื่องมีความร้อนผิดปกติหรือไม่",
    "Check for Dust and Foreign Objects": "ตรวจสอบว่าพัดลมหรือช่องระบายอากาศมีฝุ่นหรือสิ่งแปลกปลอมหรือไม่",
    "Check Task Manager Usage": "เปิด Task Manager และตรวจสอบการใช้งาน CPU / RAM / Disk / GPU",
    "Check Power Mode": "ตรวจสอบ Power Mode และทดลองเปลี่ยนเป็น Balanced",
    "Swap Adapter": "ตรวจสอบ Power Adapter และทดลองใช้งานกับ Adapter ที่ใช้งานได้ปกติ",
    "Adapter test on other machine": "นำ Adapter ไปทดสอบกับเครื่องอื่นที่รองรับ",
    "Swap other Type-C port": "ทดสอบชาร์จกับพอร์ต Type-C ช่องอื่นของเครื่อง",
    "Swap Type-C port charge": "ทดสอบชาร์จกับพอร์ต Type-C ช่องอื่นของเครื่อง",
    "Swap Power Cable": "ทดสอบสลับสาย Power Cable เส้นอื่นที่ใช้งานได้",
    "Swap Power Cord": "ทดสอบสลับสาย Power Cord เส้นอื่นที่ใช้งานได้",
    "Swap Power Outlet": "ทดสอบเสียบใช้งานกับปลั๊กไฟช่องอื่น",
    "Swap PSU": "ทดสอบสลับ PSU ที่ใช้งานได้",
    "Power Reset / Emergency Reset": "ทำการ Power Reset / Emergency Reset เพื่อเคลียร์ไฟของตัวเครื่อง แล้วทดลองเปิดเครื่องอีกครั้ง",
    "Power Reset": "ทำการ Power Reset โดยปิดเครื่อง ถอดสายชาร์จ และกดปุ่ม Power ค้างประมาณ 30 วินาที แล้วเปิดเครื่องใหม่",
    "Emergency Reset Hole": "ทำการ Emergency Reset โดยกดที่รู Emergency Reset ใต้เครื่องประมาณ 10 วินาที แล้วเปิดเครื่องใหม่",
    "Novo Button": "ทดสอบกดปุ่ม Novo Button เพื่อตรวจสอบว่าเครื่องตอบสนองหรือไม่",
    "BIOS Update": "อัปเดต BIOS เป็นเวอร์ชันล่าสุด แล้วทดลองใช้งานอีกครั้ง",
    "Load BIOS Default": "ทำการ Load BIOS Default แล้วทดลองใช้งานอีกครั้ง",
    "Windows Update": "ตรวจสอบและติดตั้ง Windows Update ที่ค้างอยู่ แล้วทดลองใช้งานอีกครั้ง",
    "Driver Update": "อัปเดต Driver ผ่าน Lenovo Vantage แล้วทดลองใช้งานอีกครั้ง",
    "Driver Update / Lenovo Vantage": "อัปเดต Driver ผ่าน Lenovo Vantage แล้วทดลองใช้งานอีกครั้ง",
    "Lenovo Vantage Update": "อัปเดตผ่าน Lenovo Vantage ให้เป็นเวอร์ชันล่าสุด แล้วทดลองใช้งานอีกครั้ง",
    "Lenovo Diagnostics": "ทดสอบ Run Diagnostics\nสำหรับ ThinkPad, ThinkCentre Desktop, ThinkCentre Tiny และ AIO: กด F10 รัว ๆ ขณะเปิดเครื่อง → เลือก Run All → Quick → Quick Unattended จากนั้นตรวจสอบว่า Pass หรือ Failed\nสำหรับ IdeaPad: กด Novo Button → เลือก UEFI Diagnostics → Run All → Quick จากนั้นตรวจสอบว่า Pass หรือ Failed",
    "Lenovo Diagnostics Storage": "ทดสอบ Run Lenovo Diagnostics เพื่อตรวจสอบ Storage โดยใช้ขั้นตอนตามรุ่นเครื่อง จากนั้นแจ้งผลว่า Pass หรือ Failed",
    "Lenovo Diagnostics Battery": "ทดสอบ Run Lenovo Diagnostics เพื่อตรวจสอบ Battery โดยใช้ขั้นตอนตามรุ่นเครื่อง จากนั้นแจ้งผลว่า Pass หรือ Failed",
    "Clean Cooling System": "ทำความสะอาดระบบระบายความร้อน แล้วทดลองใช้งานอีกครั้ง",
    "External Monitor test": "ทดสอบต่อจอนอกและตรวจสอบว่าพบปัญหาเดียวกันหรือไม่",
    "Swap Monitor": "ทดสอบสลับ Monitor ตัวอื่นที่ใช้งานได้",
    "Swap HDMI / DisplayPort cable": "ทดสอบสลับสาย HDMI หรือ DisplayPort",
    "Swap HDMI cable": "ทดสอบสลับสาย HDMI",
    "Swap DisplayPort cable": "ทดสอบสลับสาย DisplayPort",
    "Swap LAN cable": "ทดสอบสลับสาย LAN",
    "Swap USB-C cable": "ทดสอบสลับสาย USB-C",
    "Swap Dock": "ทดสอบสลับ Dock ที่ใช้งานได้",
    "Dock Firmware Update": "อัปเดต Dock Firmware ให้เป็นเวอร์ชันล่าสุด แล้วทดลองใช้งานอีกครั้ง",
    "USB Keyboard test": "ทดสอบใช้งานด้วย USB Keyboard ภายนอก",
    "USB Mouse / Keyboard test": "ทดสอบใช้งานด้วย USB Mouse หรือ USB Keyboard ภายนอก",
    "On-Screen Keyboard test": "ทดสอบใช้งานผ่าน On-Screen Keyboard",
    "Headphone Test": "ทดสอบใช้งานร่วมกับหูฟัง",
    "External Mic Test": "ทดสอบใช้งานร่วมกับไมโครโฟนภายนอก",
    "Voice Recorder Test": "ทดสอบบันทึกเสียงผ่านโปรแกรม Voice Recorder",
    "Check Camera in Device Manager": "เปิด Device Manager และตรวจสอบว่ายังพบอุปกรณ์ Camera หรือไม่",
    "Check Audio Device in Device Manager": "เปิด Device Manager และตรวจสอบว่ายังพบอุปกรณ์ Audio หรือไม่",
    "Check Wireless Driver in Device Manager": "เปิด Device Manager และตรวจสอบว่ายังพบ Wireless Driver หรือไม่",
    "Check Fingerprint Device in Device Manager": "เปิด Device Manager และตรวจสอบว่ายังพบอุปกรณ์ Fingerprint หรือไม่",
    "Camera Shutter": "ตรวจสอบว่า Camera Shutter เปิดอยู่หรือไม่",
    "Check Camera in Device Manager": "ทดลองเปิดใช้งานกล้องผ่านโปรแกรม Camera ของ Windows",
    "Battery Report collected": "สร้าง Battery Report ผ่าน Command Prompt ด้วยคำสั่ง powercfg /batteryreport",
    "Battery Health in Lenovo Vantage": "รบกวนส่ง Battery Health โดยเปิด Lenovo Vantage -> Device -> Power -> ตรวจสอบหัวข้อ Battery Health",
    "Battery swollen confirmed": "ตรวจสอบว่า Battery มีอาการบวมหรือไม่",
    "Dump File collected": "เก็บไฟล์ Minidump จากโฟลเดอร์ C:\\Windows\\Minidump",
    "Dump file collected": "เก็บไฟล์ Minidump จากโฟลเดอร์ C:\\Windows\\Minidump",
    "Minidump collected": "เก็บไฟล์ Minidump จากโฟลเดอร์ C:\\Windows\\Minidump",
    "Physical damage / Liquid spilled": "ตรวจสอบว่าตัวเครื่องมีความเสียหาย หรือมีของเหลวหกใส่ตัวเครื่องหรือไม่",
    "Other issue": "ตัวเครื่องมีอาการผิดปกติอื่น ๆ เพิ่มเติมหรือไม่",
    "FRU P/N": "ส่งภาพถ่ายอุปกรณ์ที่มีปัญหา ให้เห็น FRU P/N หรือ Barcode"
  };
  return map[label] || label;
}

function emailFromChecklist(lang){
  // Email TH / EN are customer troubleshooting templates.
  // They do not depend on selected dropdown answers or Smart Review results.
  // Smart Review applies to Generate Note only.
  if(isManual()) return lang === "EN" ? current().emailEN : current().emailTH;

  const q = getQuestions().map(x => x.label);

  if(lang === "EN"){
    let lines = [
      "Dear Customer,",
      "",
      "Please follow the steps below."
    ];
    q.forEach((item, i) => lines.push(`${i+1}. ${customerStepEN(item)}`));
    lines.push("", "Once completed, please send us the result and attach any photo or test result if available, so we can proceed with the next step.");
    return lines.join("\n");
  }

  let lines = [
    "เรียน คุณลูกค้า",
    "",
    "รบกวนช่วยดำเนินการตามขั้นตอนดังต่อไปนี้"
  ];
  q.forEach((item, i) => lines.push(`${i+1}. ${customerStepTH(item)}`));
  lines.push("", "หากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับ พร้อมแนบรูปหรือผลการทดสอบ (ถ้ามี) เพื่อให้ทางเราดำเนินการในขั้นตอนถัดไปครับ");
  return lines.join("\n");
}


function setNote(text){ el("note").value = text; }
function generateNote(){
  gaTrack("generate_note", {
    level1: getLevelName(),
    symptom: getSymptomName()
  });
  setNote(generateText());
  updateRecommendation();
}
function copyGuide(){ setNote(isManual() ? getGuideTextForCurrentModel(current()) : guideFromChecklist()); }
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
  renderMain();
  el("note").value = "";
}

function filterSymptoms(){
  const kw = el("search").value.toLowerCase().trim();
  if(!kw){ renderAll(); return; }
  const box = el("symptom");
  box.innerHTML = "";
  getVisibleLevelKeys().forEach(levelKey => {
    getVisibleSymptomKeys(levelKey).forEach(symKey => {
      const obj = LEVELS[levelKey].symptoms[symKey];
      const hay = `${LEVELS[levelKey].name} ${obj.name}`.toLowerCase();
      if(hay.includes(kw)){
        const div = document.createElement("div");
        div.className = "item";
        div.textContent = `${LEVELS[levelKey].name} > ${obj.name}`;
        div.onclick = () => {
          selectedLevel = levelKey;
          selectedSymptom = symKey;
          el("search").value = "";
          renderAll();
        };
        box.appendChild(div);
      }
    });
  });
}

function renderAll(){
  ensureSelectionAvailable();
  renderLevel1();
  renderSymptoms();
  renderMain();
}

document.addEventListener("DOMContentLoaded", () => {
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
  el("topClearBtn").addEventListener("click", clearAll);
  el("generateBtn").addEventListener("click", generateNote);
  el("emailThBtn").addEventListener("click", sendEmailTH);
  el("emailEnBtn").addEventListener("click", sendEmailEN);
  el("clearBtn").addEventListener("click", clearAll);
  el("modalCloseBtn").addEventListener("click", closeGuideModal);
  renderAll();
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

function customerStepTH(label){
  label = _cleanLabel(label);
  const mapped = getChecklistMappingText(label, "th");
  if(mapped) return mapped;
  const map = {
    // Symptom / information
    "Can Access Windows": "ตรวจสอบว่าสามารถเข้า Windows ได้หรือไม่",
    "Can access Windows": "ตรวจสอบว่าสามารถเข้า Windows ได้หรือไม่",
    "Power LED": "ตรวจสอบว่าไฟ Power LED ติดหรือไม่",
    "Charge LED": "ตรวจสอบว่าไฟ Charge LED ติดหรือไม่",
    "LED on power button": "ตรวจสอบว่าไฟที่ปุ่ม Power ติดหรือไม่",
    "LED beside Type-C port": "ตรวจสอบว่าไฟข้างพอร์ต Type-C ติดหรือไม่",
    "LED beside charging port": "ตรวจสอบว่าไฟข้างช่องชาร์จติดหรือไม่",
    "Fan spinning": "ตรวจสอบว่าพัดลมหมุนหรือไม่",
    "Fan Check": "ตรวจสอบว่าพัดลมทำงานหรือไม่",
    "Caps Lock Toggle": "ตรวจสอบว่าไฟ Caps Lock เปิด/ปิดได้หรือไม่",
    "Caps Lock LED works": "ตรวจสอบว่าไฟ Caps Lock ตอบสนองหรือไม่",
    "Display Backlight": "ตรวจสอบว่าหน้าจอมีแสงหรือภาพจาง ๆ หรือไม่",
    "Beep sound / pattern": "ตรวจสอบรูปแบบเสียง Beep Sound ที่เกิดขึ้น",
    "Can Access BIOS": "ตรวจสอบว่าสามารถเข้า BIOS ได้หรือไม่",
    "Can Access Safe Mode": "เข้า Safe Mode แล้วทดสอบอาการอีกครั้ง",
    "Boot order checked": "ตรวจสอบ Boot Order ใน BIOS",
    "Network boot disabled": "ปิด Network Boot แล้วทดสอบอีกครั้ง",
    "Disable UEFI IPv4 / IPv6": "ปิด UEFI IPv4 / IPv6 แล้วทดสอบอีกครั้ง",
    "Set date and time in BIOS": "ตั้งค่าวันและเวลาใน BIOS ให้ถูกต้อง",
    "CMOS battery / RTC check": "ตรวจสอบ CMOS Battery / RTC",
    "RTC battery / CMOS check": "ตรวจสอบ RTC Battery / CMOS",
    "Stop code / Error code collected": "เก็บภาพ Stop Code หรือ Error Code ที่พบ",
    "Error photo provided": "แนบรูป Error ที่พบเพิ่มเติม",
    "Auto reboot occurs": "ตรวจสอบว่าเครื่องมีอาการ Restart เองหรือไม่",
    "BSOD occurs": "ตรวจสอบว่าเครื่องมีอาการจอฟ้า BSOD หรือไม่",
    "Freeze occurs": "ตรวจสอบว่าเครื่องมีอาการค้างหรือไม่",
    "Specific keys listed": "ระบุปุ่มที่มีปัญหาให้ครบถ้วน",
    "Specific hotkey listed": "ระบุปุ่ม Hotkey ที่มีปัญหาให้ครบถ้วน",
    "Key stuck / sunk": "ตรวจสอบว่ามีปุ่มค้างหรือปุ่มยุบหรือไม่",
    "Pixel location confirmed": "ระบุตำแหน่ง Pixel ที่พบปัญหา",
    "Issue happens on all apps": "ตรวจสอบว่าอาการเกิดกับทุกโปรแกรมหรือไม่",
    "Issue occurs all apps": "ตรวจสอบว่าอาการเกิดกับทุกโปรแกรมหรือไม่",
    "Noise occurs all apps": "ตรวจสอบว่าเสียงผิดปกติเกิดกับทุกโปรแกรมหรือไม่",
    "Photo / Video provided": "แนบรูปหรือวิดีโอขณะเกิดอาการ",

    // Settings / software
    "Windows Camera Privacy Setting": "ตรวจสอบสิทธิ์การใช้งาน Camera ใน Windows Privacy Settings",
    "Camera Shutter": "ตรวจสอบว่า Camera Shutter เปิดอยู่หรือไม่",
    "Windows Hello Face setup": "ตั้งค่า Windows Hello Face ใหม่แล้วทดสอบอีกครั้ง",
    "Fingerprint setup in Windows Hello": "ตั้งค่า Fingerprint ใน Windows Hello ใหม่แล้วทดสอบอีกครั้ง",
    "Password / PIN reset": "Reset Password หรือ PIN แล้วทดสอบอีกครั้ง",
    "Can login with another account": "ทดสอบ Login ด้วยบัญชีผู้ใช้อื่น",
    "Airplane Mode": "ตรวจสอบว่าไม่ได้เปิด Airplane Mode",
    "Bluetooth toggle available": "ตรวจสอบว่ามีปุ่มเปิด/ปิด Bluetooth ใน Windows หรือไม่",
    "Battery Conservation Mode": "ตรวจสอบ Battery Conservation Mode ใน Lenovo Vantage",
    "Battery Health in Lenovo Vantage": "รบกวนส่ง Battery Health โดยเปิด Lenovo Vantage -> Device -> Power -> ตรวจสอบหัวข้อ Battery Health",
    "Battery charge level checked": "ตรวจสอบระดับแบตเตอรี่ปัจจุบัน",
    "Battery percentage": "ตรวจสอบเปอร์เซ็นต์แบตเตอรี่ปัจจุบัน",
    "Battery swollen confirmed": "ตรวจสอบว่าแบตเตอรี่บวมหรือไม่",
    "Check Power Mode": "ตรวจสอบ Power Mode และทดลองปรับเป็น Balanced",
    "Check Task Manager Usage": "ตรวจสอบการใช้งาน CPU / RAM / Disk / GPU ใน Task Manager",
    "Check Temperature": "ตรวจสอบว่าเครื่องร้อนผิดปกติหรือไม่",
    "Check temperature / Overheat": "ตรวจสอบว่าเครื่องมีอาการร้อนผิดปกติหรือไม่",
    "Check for Dust and Foreign Objects": "ตรวจสอบฝุ่นหรือสิ่งแปลกปลอมบริเวณช่องระบายอากาศ",
    "Mute checked": "ตรวจสอบว่าไม่ได้ปิดเสียง Mute",
    "Volume level checked": "ตรวจสอบระดับเสียงของเครื่อง",
    "Input volume level checked": "ตรวจสอบระดับเสียงของ Microphone",
    "Volume Mixer checked": "ตรวจสอบ Volume Mixer ใน Windows",
    "Output device selected correctly": "ตรวจสอบว่าเลือก Output Device ถูกต้อง",
    "Input device selected correctly": "ตรวจสอบว่าเลือก Input Device ถูกต้อง",
    "Microphone enhancement disabled": "ปิด Microphone Enhancement แล้วทดสอบอีกครั้ง",
    "Touchpad enabled in Settings": "ตรวจสอบว่า Touchpad เปิดใช้งานใน Settings",
    "ClickPad enabled": "ตรวจสอบว่า ClickPad เปิดใช้งานอยู่",
    "Disable Touchpad test": "ปิด Touchpad แล้วทดสอบอาการอีกครั้ง",
    "TrackPoint enabled in BIOS": "ตรวจสอบว่า TrackPoint เปิดใช้งานใน BIOS",
    "BIOS Camera enabled": "ตรวจสอบว่า Camera เปิดใช้งานใน BIOS",
    "BIOS Fingerprint enabled": "ตรวจสอบว่า Fingerprint เปิดใช้งานใน BIOS",
    "BIOS Touchpad enabled": "ตรวจสอบว่า Touchpad เปิดใช้งานใน BIOS",
    "BIOS Hotkey mode": "ตรวจสอบการตั้งค่า Hotkey Mode ใน BIOS",
    "BIOS Keyboard Backlight setting": "ตรวจสอบการตั้งค่า Keyboard Backlight ใน BIOS",
    "Enable LAN in BIOS": "ตรวจสอบว่า LAN เปิดใช้งานใน BIOS",
    "BIOS default loaded": "Load BIOS Default แล้วทดสอบอีกครั้ง",
    "Load BIOS Default": "Load BIOS Default แล้วทดสอบอีกครั้ง",
    "Load BIOS default": "Load BIOS Default แล้วทดสอบอีกครั้ง",
    "Secure Boot disabled": "ปิด Secure Boot แล้วทดสอบอีกครั้ง",
    "Intel RST / Storage Driver loaded": "โหลด Intel RST / Storage Driver แล้วทดสอบอีกครั้ง",
    "Re-install Windows USB recreated": "สร้าง USB สำหรับติดตั้ง Windows ใหม่แล้วทดสอบอีกครั้ง",
    "Proof of ownership checked": "เตรียมหลักฐานความเป็นเจ้าของเครื่อง",
    "Customer knows password": "ยืนยันว่าทราบรหัสผ่านของเครื่อง",
    "WLAN / WWAN card changed before issue": "ตรวจสอบว่ามีการเปลี่ยนการ์ด WLAN / WWAN ก่อนเกิดอาการหรือไม่",
    "Lock on leave setting enabled": "ตรวจสอบการตั้งค่า Lock on Leave",
    "Lenovo Vantage setting": "ตรวจสอบการตั้งค่าที่เกี่ยวข้องใน Lenovo Vantage",
    "FN Lock checked": "ตรวจสอบสถานะ FN Lock",
    "FN & Ctrl Swap": "ตรวจสอบการตั้งค่า Fn และ Ctrl Key Swap",

    // Device Manager
    "Check Camera in Device Manager": "ตรวจสอบว่า Device Manager พบอุปกรณ์ Camera หรือไม่\nโดยเปิด Device Manager > Cameras",
    "Check Fingerprint Device in Device Manager": "ตรวจสอบว่า Device Manager พบอุปกรณ์ Fingerprint หรือไม่\nโดยเปิด Device Manager > Biometric Devices",
    "Check HID-compliant touch screen Driver in Device Manager": "ตรวจสอบว่า Device Manager พบ HID-compliant touch screen หรือไม่\nโดยเปิด Device Manager > Human Interface Devices",
    "Check Smart Card Reader in Device Manager": "ตรวจสอบว่า Device Manager พบอุปกรณ์ Smart Card Reader หรือไม่\nโดยเปิด Device Manager > Smart card readers",
    "Check Card Reader in Device Manager": "ตรวจสอบว่า Device Manager พบอุปกรณ์ Card Reader หรือไม่\nโดยเปิด Device Manager > Memory technology devices",
    "Check Wireless Driver in Device Manager": "ตรวจสอบว่า Device Manager พบอุปกรณ์ Wireless หรือไม่\nโดยเปิด Device Manager > Network adapters",
    "Check Bluetooth Device in Device Manager": "ตรวจสอบว่า Device Manager พบอุปกรณ์ Bluetooth หรือไม่\nโดยเปิด Device Manager > Bluetooth",
    "Check WWAN Device in Device Manager": "ตรวจสอบว่า Device Manager พบอุปกรณ์ WWAN หรือไม่\nโดยเปิด Device Manager > Network adapters",
    "Check Audio Device in Device Manager": "ตรวจสอบว่า Device Manager พบอุปกรณ์ Audio หรือไม่\nโดยเปิด Device Manager > Sound, video and game controllers",
    "Check USB Error in Device Manager": "ตรวจสอบว่า Device Manager มี Error ของ USB หรือไม่\nโดยเปิด Device Manager > Universal Serial Bus controllers",

    // Driver uninstall
    "Uninstall Camera Driver and Restart": "ถอนการติดตั้ง Driver ของ Camera แล้ว Restart เครื่อง",
    "Uninstall Fingerprint Driver and Restart": "ถอนการติดตั้ง Driver ของ Fingerprint แล้ว Restart เครื่อง",
    "Uninstall HID-compliant touch screen Driver and Restart": "ถอนการติดตั้ง HID-compliant touch screen แล้ว Restart เครื่อง",
    "Uninstall Audio Driver and Restart": "ถอนการติดตั้ง Driver ของ Audio แล้ว Restart เครื่อง",
    "Uninstall Bluetooth Driver and Restart": "ถอนการติดตั้ง Driver ของ Bluetooth แล้ว Restart เครื่อง",
    "Uninstall Wireless Driver and Restart": "ถอนการติดตั้ง Driver ของ Wireless แล้ว Restart เครื่อง",

    // Updates
    "Windows Update": "อัปเดต Windows ให้เป็นเวอร์ชันล่าสุด",
    "Lenovo Vantage Update": "อัปเดต Driver และ BIOS ผ่าน Lenovo Vantage ให้เป็นเวอร์ชันล่าสุด",
    "BIOS Update": "อัปเดต BIOS ให้เป็นเวอร์ชันล่าสุด",
    "Driver Update": "อัปเดต Driver ให้เป็นเวอร์ชันล่าสุด",
    "Driver / Windows Update": "อัปเดต Driver และ Windows ให้เป็นเวอร์ชันล่าสุด",
    "Driver Update / Lenovo Vantage": "อัปเดต Driver ผ่าน Lenovo Vantage",
    "Camera Driver Update": "อัปเดต Driver ของ Camera ให้เป็นเวอร์ชันล่าสุด",
    "Camera Driver Update / Lenovo Vantage": "อัปเดต Driver ของ Camera ผ่าน Lenovo Vantage",
    "Fingerprint Driver Update / Lenovo Vantage": "อัปเดต Driver ของ Fingerprint ผ่าน Lenovo Vantage",
    "WLAN Driver Update": "อัปเดต Driver ของ WLAN ให้เป็นเวอร์ชันล่าสุด",
    "WWAN Driver Update": "อัปเดต Driver ของ WWAN ให้เป็นเวอร์ชันล่าสุด",
    "LAN Driver Update": "อัปเดต Driver ของ LAN ให้เป็นเวอร์ชันล่าสุด",
    "Bluetooth Driver Update": "อัปเดต Driver ของ Bluetooth ให้เป็นเวอร์ชันล่าสุด",
    "Audio Driver Update": "อัปเดต Driver ของ Audio ให้เป็นเวอร์ชันล่าสุด",
    "Graphics Driver Update": "อัปเดต Graphics Driver ให้เป็นเวอร์ชันล่าสุด",
    "Thunderbolt Driver Update": "อัปเดต Thunderbolt Driver ให้เป็นเวอร์ชันล่าสุด",
    "USB Driver Update / Lenovo Vantage": "อัปเดต USB Driver ผ่าน Lenovo Vantage",
    "SD Card Reader Driver Update": "อัปเดต Driver ของ SD Card Reader ให้เป็นเวอร์ชันล่าสุด",
    "Smart Card Driver Update": "อัปเดต Driver ของ Smart Card ให้เป็นเวอร์ชันล่าสุด",
    "Touchpad Driver Update": "อัปเดต Driver ของ Touchpad ให้เป็นเวอร์ชันล่าสุด",
    "TrackPoint Driver Update": "อัปเดต Driver ของ TrackPoint ให้เป็นเวอร์ชันล่าสุด",
    "Hotkey Driver Update": "อัปเดต Hotkey Driver ให้เป็นเวอร์ชันล่าสุด",
    "Lenovo Hotkey Features update": "อัปเดต Lenovo Hotkey Features ให้เป็นเวอร์ชันล่าสุด",
    "Dock Firmware Update": "อัปเดต Dock Firmware ให้เป็นเวอร์ชันล่าสุด",
    "Storage Firmware Update": "อัปเดต Firmware ของ Storage ให้เป็นเวอร์ชันล่าสุด",
    "Driver / Firmware Update": "อัปเดต Driver หรือ Firmware ที่เกี่ยวข้องให้เป็นเวอร์ชันล่าสุด",

    // Reset / diagnostics / OS
    "Power Reset": "ทำ Power Reset แล้วทดสอบอาการอีกครั้ง",
    "Emergency Reset": "ทดสอบ Emergency Reset โดยกดรูใต้เครื่องค้างไว้ 5–10 วินาที จากนั้นทดลองเปิดเครื่องอีกครั้ง",
    "Emergency Reset Hole": "กดปุ่ม Emergency Reset แล้วทดลองเปิดเครื่องอีกครั้ง",
    "Power Reset / Emergency Reset": "ทดสอบ Power Reset โดยกดปุ่มเปิด/ปิดเครื่องค้างไว้ 10–15 วินาที จากนั้นทดสอบ Emergency Reset โดยกดรูใต้เครื่องค้างไว้ 5–10 วินาที แล้วทดลองเปิดเครื่องอีกครั้ง",
    "Novo Button": "กดปุ่ม Novo Button แล้วตรวจสอบว่าเครื่องตอบสนองหรือไม่",
    "Lenovo Diagnostics": "ทดสอบ Run Diagnostics\nสำหรับ ThinkPad, ThinkCentre Desktop, ThinkCentre Tiny และ AIO: กด F10 รัว ๆ ขณะเปิดเครื่อง → เลือก Run All → Quick → Quick Unattended จากนั้นตรวจสอบว่า Pass หรือ Failed\nสำหรับ IdeaPad: กด Novo Button → เลือก UEFI Diagnostics → Run All → Quick จากนั้นตรวจสอบว่า Pass หรือ Failed",
    "Run Lenovo Diagnostics": "ทดสอบ Run Diagnostics\nสำหรับ ThinkPad, ThinkCentre Desktop, ThinkCentre Tiny และ AIO: กด F10 รัว ๆ ขณะเปิดเครื่อง → เลือก Run All → Quick → Quick Unattended จากนั้นตรวจสอบว่า Pass หรือ Failed\nสำหรับ IdeaPad: กด Novo Button → เลือก UEFI Diagnostics → Run All → Quick จากนั้นตรวจสอบว่า Pass หรือ Failed",
    "Lenovo Diagnostics Storage": "ทดสอบ Run Lenovo Diagnostics เพื่อตรวจสอบ Storage โดยใช้ขั้นตอนตามรุ่นเครื่อง จากนั้นแจ้งผลว่า Pass หรือ Failed",
    "Lenovo Diagnostics Battery": "ทดสอบ Run Lenovo Diagnostics เพื่อตรวจสอบ Battery โดยใช้ขั้นตอนตามรุ่นเครื่อง จากนั้นแจ้งผลว่า Pass หรือ Failed",
    "Re-install Windows": "ติดตั้ง Windows ใหม่แล้วทดสอบอาการอีกครั้ง",
    "Re-install Windows": "ติดตั้ง Windows ใหม่แล้วทดสอบอาการอีกครั้ง",
    "Re-install Windows": "ติดตั้ง Windows ใหม่แล้วทดสอบอาการอีกครั้ง",
    "Windows Startup Repair": "ทำ Windows Startup Repair แล้วทดสอบอาการอีกครั้ง",
    "Windows Recovery": "ทำ Windows Recovery แล้วทดสอบอาการอีกครั้ง",
    "System Restore": "ทำ Windows Recovery แล้วทดสอบอาการอีกครั้ง",

    // Swap / isolation
    "Swap Adapter": "ทดสอบสลับด้วย Adapter อื่น",
    "Swap AC Adapter": "ทดสอบสลับด้วย AC Adapter อื่น",
    "Swap Power Cord": "ทดสอบสลับด้วยสาย AC Power Cord อื่น",
    "Swap Adapter / Power Cable": "ทดสอบสลับด้วย Adapter หรือสาย Power Cable อื่น",
    "Swap Power Cable": "ทดสอบสลับด้วยสาย Power Cable อื่น",
    "Swap Power Cord": "ทดสอบสลับด้วยสาย Power Cord อื่น",
    "Swap Power Outlet": "ทดสอบกับปลั๊กไฟช่องอื่น",
    "Swap PSU": "ทดสอบสลับด้วย PSU อื่น",
    "Original Adapter used": "ตรวจสอบว่าใช้งานด้วย Adapter ของเครื่อง",
    "Adapter test": "ทดสอบ Adapter แล้วแจ้งผล",
    "Adapter test on other machine": "ทดสอบ Adapter กับเครื่องอื่น",
    "Adapter works with another cord": "ทดสอบ Adapter กับสายไฟเส้นอื่น",
    "Swap other Type-C port": "ทดสอบพอร์ต Type-C ช่องอื่น",
    "Swap Type-C port charge": "ทดสอบชาร์จผ่านพอร์ต Type-C ช่องอื่น",
    "Swap USB-C Cable": "ทดสอบสลับด้วยสาย USB-C อื่น",
    "Swap USB-C cable": "ทดสอบสลับด้วยสาย USB-C อื่น",
    "Swap HDMI Cable": "ทดสอบสลับด้วยสาย HDMI อื่น",
    "Swap HDMI cable": "ทดสอบสลับด้วยสาย HDMI อื่น",
    "Swap DisplayPort Cable": "ทดสอบสลับด้วยสาย DisplayPort อื่น",
    "Swap DisplayPort cable": "ทดสอบสลับด้วยสาย DisplayPort อื่น",
    "Swap VGA Cable": "ทดสอบสลับด้วยสาย VGA อื่น",
    "Swap LAN Cable": "ทดสอบสลับด้วยสาย LAN อื่น",
    "Swap LAN cable": "ทดสอบสลับด้วยสาย LAN อื่น",
    "Swap HDMI / DisplayPort cable": "ทดสอบสลับด้วยสาย HDMI หรือ DisplayPort อื่น",
    "Swap Monitor": "ทดสอบสลับกับจอภาพอื่น",
    "External Monitor test": "ทดสอบต่อจอนอกและตรวจสอบว่าพบปัญหาเดียวกันหรือไม่",
    "Monitor test on other machine": "ทดสอบจอภาพกับเครื่องอื่น",
    "HDMI Port on notebook test": "ทดสอบพอร์ต HDMI บนเครื่องโดยตรง",
    "Test HDMI Port on Notebook": "ทดสอบพอร์ต HDMI บนเครื่องโดยตรง",
    "LAN Port on notebook test": "ทดสอบสาย LAN กับพอร์ต LAN ของเครื่องโดยตรง",
    "USB to LAN Adapter test": "ทดสอบด้วย USB to LAN Adapter",
    "Wi-Fi test": "ทดสอบเชื่อมต่อ Wi-Fi",
    "Another Router test": "ทดสอบเชื่อมต่อกับ Router อื่น",
    "Swap Wi-Fi / Hotspot": "ทดสอบสลับไปใช้ Wi-Fi หรือ Hotspot อื่น",
    "Swap USB Device": "ทดสอบสลับด้วยอุปกรณ์ USB อื่น",
    "Swap USB Port": "ทดสอบพอร์ต USB ช่องอื่น",
    "Swap USB-A Port": "ทดสอบพอร์ต USB-A ช่องอื่น",
    "Swap USB-C Port": "ทดสอบพอร์ต USB-C ช่องอื่น",
    "Swap Dock": "ทดสอบสลับด้วย Dock อื่น",
    "Swap SD Card": "ทดสอบสลับด้วย SD Card อื่น",
    "Swap Smart Card": "ทดสอบสลับด้วย Smart Card อื่น",
    "Swap SIM": "ทดสอบสลับด้วย SIM อื่น",
    "Swap Bluetooth Device": "ทดสอบสลับด้วยอุปกรณ์ Bluetooth อื่น",
    "Swap Mouse": "ทดสอบสลับด้วย Mouse อื่น",
    "Swap Keyboard": "ทดสอบสลับด้วย Keyboard อื่น",
    "Swap Headphone": "ทดสอบสลับด้วยหูฟังอื่น",
    "Headphone Test": "ทดสอบใช้งานร่วมกับหูฟัง",
    "External Mic Test": "ทดสอบใช้งานร่วมกับไมโครโฟนภายนอก",
    "Built-in Speaker test": "ทดสอบลำโพงภายในเครื่อง",
    "Audio Jack on notebook test": "ทดสอบช่อง Audio Jack บนเครื่องโดยตรง",
    "Swap RAM": "ทดสอบสลับด้วย RAM อื่น",
    "Clean / Reseat RAM": "ถอดทำความสะอาดและใส่ RAM ใหม่",
    "Swap SSD": "ทดสอบสลับด้วย SSD อื่น",
    "Swap HDD": "ทดสอบสลับด้วย HDD อื่น",
    "Swap SSD / HDD": "ทดสอบสลับด้วย SSD หรือ HDD อื่น",
    "Swap Battery": "ทดสอบสลับด้วย Battery อื่น",
    "SD Card test on other machine": "ทดสอบ SD Card กับเครื่องอื่น",
    "Mouse test": "ทดสอบการใช้งาน Mouse",
    "Mouse works": "ตรวจสอบว่า Mouse ใช้งานได้หรือไม่",
    "Mouse test on other machine": "ทดสอบ Mouse กับเครื่องอื่น",
    "Keyboard test on other machine": "ทดสอบ Keyboard กับเครื่องอื่น",
    "Keyboard Online Test": "ทดสอบ Keyboard ผ่าน Online Keyboard Test",
    "On-Screen Keyboard test": "ทดสอบผ่าน On-Screen Keyboard",
    "USB Keyboard test": "ทดสอบด้วย USB Keyboard",
    "USB Mouse / Keyboard test": "ทดสอบด้วย USB Mouse หรือ USB Keyboard",
    "Voice Recorder Test": "ทดสอบบันทึกเสียงผ่าน Voice Recorder",
    "Clean scroll wheel": "ทำความสะอาด Scroll Wheel แล้วทดสอบอีกครั้ง",
    "Clean touchpad surface": "ทำความสะอาดพื้นผิว Touchpad แล้วทดสอบอีกครั้ง",
    "Clean camera lens": "ทำความสะอาดเลนส์กล้องแล้วทดสอบอีกครั้ง",
    "Clean Cooling System": "ทำความสะอาดระบบระบายความร้อนแล้วทดสอบอีกครั้ง",
    "Check LAN pin / damage": "ตรวจสอบขา LAN และร่องรอยความเสียหาย",
    "SIM detected": "ตรวจสอบว่าเครื่องตรวจพบ SIM หรือไม่",
    "SIM card detected": "ตรวจสอบว่าเครื่องตรวจพบ SIM หรือไม่",
    "SIM tray damage": "ตรวจสอบว่า SIM Tray เสียหายหรือไม่",
    "BIOS detects storage": "ตรวจสอบว่า BIOS พบ Storage หรือไม่",
    "BIOS detects HDD": "ตรวจสอบว่า BIOS พบ HDD หรือไม่",

    // Logs / evidence / final checks
    "Battery Report collected": "สร้าง Battery Report และแนบไฟล์ผลลัพธ์",
    "Dump File collected": "เก็บไฟล์ Dump จากโฟลเดอร์ C:\\Windows\\Minidump",
    "Dump file collected": "เก็บไฟล์ Dump จากโฟลเดอร์ C:\\Windows\\Minidump",
    "Minidump collected": "เก็บไฟล์ Minidump จากโฟลเดอร์ C:\\Windows\\Minidump",
    "Event Viewer / Dump file collected": "เก็บข้อมูล Event Viewer หรือ Dump File เพิ่มเติม",
    "Physical damage / Liquid spilled": "ตรวจสอบว่ามีความเสียหายหรือของเหลวหกใส่หรือไม่",
    "Keyboard / Touchpad affected by swollen battery": "ตรวจสอบว่า Keyboard หรือ Touchpad ได้รับผลจากแบตเตอรี่บวมหรือไม่",
    "Other issue": "ตัวเครื่องมีอาการผิดปกติอื่น ๆ เพิ่มเติมหรือไม่",
    "FRU P/N": "ส่งภาพถ่ายอุปกรณ์ที่มีปัญหา ให้เห็น FRU P/N หรือ Barcode"
  };
  if(map[label]) return map[label];

  let m;
  if((m = label.match(/^Check (.+?) in Device Manager$/i))){
    return `ตรวจสอบว่า Device Manager พบอุปกรณ์ ${_stripKnownSuffix(m[1])} หรือไม่`;
  }
  if((m = label.match(/^Uninstall (.+?) Driver and Restart$/i))){
    return `ถอนการติดตั้ง Driver ของ ${_stripKnownSuffix(m[1])} แล้ว Restart เครื่อง`;
  }
  if((m = label.match(/^(.+?) Driver Update(?: \/ Lenovo Vantage)?$/i))){
    return `อัปเดต Driver ของ ${_stripKnownSuffix(m[1])} ให้เป็นเวอร์ชันล่าสุด`;
  }
  if((m = label.match(/^Swap (.+)$/i))){
    return `ทดสอบสลับด้วย ${m[1]} อื่น`;
  }
  if((m = label.match(/^(.+?) test on other machine$/i))){
    return `ทดสอบ ${m[1]} กับเครื่องอื่น`;
  }
  if((m = label.match(/^(.+?) occurs$/i))){
    return `ตรวจสอบว่าเกิดอาการ ${m[1]} หรือไม่`;
  }
  if((m = label.match(/^(.+?) enabled in BIOS$/i))){
    return `ตรวจสอบว่า ${m[1]} เปิดใช้งานใน BIOS หรือไม่`;
  }
  if((m = label.match(/^(.+?) checked$/i))){
    return `ตรวจสอบ ${m[1]}`;
  }
  return `ตรวจสอบหัวข้อ ${label}`;
}

function customerStepEN(label){
  label = _cleanLabel(label);
  const mapped = getChecklistMappingText(label, "en");
  if(mapped) return mapped;
  const map = {
    "Can Access Windows": "Check whether Windows can be accessed.",
    "Can access Windows": "Check whether Windows can be accessed.",
    "Power LED": "Check whether the Power LED turns on.",
    "Charge LED": "Check whether the Charge LED turns on.",
    "LED on power button": "Check whether the Power button LED turns on.",
    "LED beside Type-C port": "Check whether the LED beside the Type-C port turns on.",
    "LED beside charging port": "Check whether the LED beside the charging port turns on.",
    "Fan spinning": "Check whether the fan spins.",
    "Fan Check": "Check whether the fan works.",
    "Caps Lock Toggle": "Check whether the Caps Lock LED toggles.",
    "Display Backlight": "Check whether the display has backlight or a faint image.",
    "Beep sound / pattern": "Check the beep sound pattern.",
    "Can Access BIOS": "Check whether the machine can enter BIOS.",
    "Can Access Safe Mode": "Enter Safe Mode and test the issue again.",
    "Boot order checked": "Check the Boot Order in BIOS.",
    "Network boot disabled": "Disable Network Boot and test again.",
    "Set date and time in BIOS": "Set the correct date and time in BIOS.",
    "Stop code / Error code collected": "Capture the Stop Code or Error Code.",
    "Auto reboot occurs": "Check whether the machine reboots automatically.",
    "BSOD occurs": "Check whether BSOD occurs.",
    "Freeze occurs": "Check whether the machine freezes.",
    "Specific keys listed": "List all affected keys.",
    "Specific hotkey listed": "List all affected hotkeys.",
    "Key stuck / sunk": "Check whether any key is stuck or sunk.",
    "Pixel location confirmed": "Confirm the affected pixel location.",
    "Issue happens on all apps": "Check whether the issue occurs in all applications.",
    "Issue occurs all apps": "Check whether the issue occurs in all applications.",
    "Noise occurs all apps": "Check whether the noise occurs in all applications.",
    "Photo / Video provided": "Attach a photo or video of the issue.",
    "Airplane Mode": "Check that Airplane Mode is turned off.",
    "Windows Update": "Update Windows to the latest version.",
    "Lenovo Vantage Update": "Update drivers and BIOS through Lenovo Vantage to the latest version.",
    "BIOS Update": "Update BIOS to the latest version.",
    "Power Reset": "Test Power Reset by holding the power button for 10–15 seconds, then check the issue again.",
    "Emergency Reset": "Test Emergency Reset by pressing the reset hole on the bottom cover for 5–10 seconds, then power on the machine again.",
    "Emergency Reset Hole": "Test Emergency Reset by pressing the reset hole on the bottom cover for 5–10 seconds, then power on the machine again.",
    "Power Reset / Emergency Reset": "Perform Power Reset and Emergency Reset, then power on the machine again.",
    "Lenovo Diagnostics": "Run Lenovo Diagnostics.\nFor ThinkPad, ThinkCentre Desktop, ThinkCentre Tiny, and AIO: press F10 repeatedly while turning on the machine → select Run All → Quick → Quick Unattended, then check whether the result is Pass or Failed.\nFor IdeaPad: press the Novo Button → select UEFI Diagnostics → Run All → Quick, then check whether the result is Pass or Failed.",
    "Run Lenovo Diagnostics": "Run Lenovo Diagnostics.\nFor ThinkPad, ThinkCentre Desktop, ThinkCentre Tiny, and AIO: press F10 repeatedly while turning on the machine → select Run All → Quick → Quick Unattended, then check whether the result is Pass or Failed.\nFor IdeaPad: press the Novo Button → select UEFI Diagnostics → Run All → Quick, then check whether the result is Pass or Failed.",
    "Lenovo Diagnostics Storage": "Run Lenovo Diagnostics to check storage by following the steps for the machine model, then report whether the result is Pass or Failed.",
    "Lenovo Diagnostics Battery": "Run Lenovo Diagnostics to check the battery by following the steps for the machine model, then report whether the result is Pass or Failed.",
    "Windows Recovery": "Perform Windows Recovery using the most appropriate recovery option for the issue, such as Reset This PC, Startup Repair, System Restore, or Uninstall Updates.",
    "System Restore": "Perform Windows Recovery using the most appropriate recovery option for the issue, such as Reset This PC, Startup Repair, System Restore, or Uninstall Updates.",
    "Re-install Windows": "Re-install Windows and test the issue again.",
    "Re-install Windows": "Re-install Windows and test the issue again.",
    "Re-install Windows": "Re-install Windows and test the issue again.",
    "Swap Adapter": "Try another Adapter.",
    "Swap AC Adapter": "Try another AC Adapter.",
    "Swap Power Cord": "Try another AC Power Cord.",
    "Swap USB-C Cable": "Try another USB-C cable.",
    "Swap USB-C cable": "Try another USB-C cable.",
    "Swap HDMI Cable": "Try another HDMI cable.",
    "Swap HDMI cable": "Try another HDMI cable.",
    "Swap DisplayPort Cable": "Try another DisplayPort cable.",
    "Swap DisplayPort cable": "Try another DisplayPort cable.",
    "Swap VGA Cable": "Try another VGA cable.",
    "Swap LAN Cable": "Try another LAN cable.",
    "Swap LAN cable": "Try another LAN cable.",
    "Swap Monitor": "Try another monitor.",
    "External Monitor test": "Connect an external monitor and check the display result.",
    "HDMI Port on notebook test": "Test the HDMI port on the machine directly.",
    "Test HDMI Port on Notebook": "Test the HDMI port on the machine directly.",
    "Swap RAM": "Try another RAM.",
    "Swap SSD": "Try another SSD.",
    "Swap HDD": "Try another HDD.",
    "Swap SSD / HDD": "Try another SSD or HDD.",
    "Swap USB Device": "Try another USB device.",
    "Swap USB Port": "Try another USB port.",
    "Swap Dock": "Try another Dock.",
    "Swap Mouse": "Try another Mouse.",
    "Swap Keyboard": "Try another Keyboard.",
    "Swap Headphone": "Try another headphone.",
    "Headphone Test": "Test with a headphone.",
    "Voice Recorder Test": "Test recording with Voice Recorder.",
    "Adapter test on other machine": "Test the Adapter with another machine.",
    "Swap other Type-C port": "Test another Type-C port.",
    "Physical damage / Liquid spilled": "Please send a clear photo of any physical damage or liquid contact area, if present.",
    "Other issue": "Check whether there are any additional issues.",
    "FRU P/N": "Please send a photo of the affected accessory showing the FRU P/N or barcode.",
    "Event Viewer / Dump file collected": "Collect Event Viewer information or Dump files.",
    "Dump File collected": "Collect Dump files from C:\\Windows\\Minidump.",
    "Dump file collected": "Collect Dump files from C:\\Windows\\Minidump.",
    "Minidump collected": "Collect Minidump files from C:\\Windows\\Minidump.",
    "Battery Report collected": "Generate and attach the Battery Report.",
    "Check Camera in Device Manager": "Check whether Device Manager detects the Camera device.",
    "Check Fingerprint Device in Device Manager": "Check whether Device Manager detects the Fingerprint device.",
    "Check HID-compliant touch screen Driver in Device Manager": "Check whether Device Manager detects HID-compliant touch screen.",
    "Check Smart Card Reader in Device Manager": "Check whether Device Manager detects the Smart Card Reader.",
    "Check Card Reader in Device Manager": "Check whether Device Manager detects the Card Reader.",
    "Check Wireless Driver in Device Manager": "Check whether Device Manager detects the Wireless device.",
    "Check Bluetooth Device in Device Manager": "Check whether Device Manager detects the Bluetooth device.",
    "Check WWAN Device in Device Manager": "Check whether Device Manager detects the WWAN device.",
    "Check Audio Device in Device Manager": "Check whether Device Manager detects the Audio device.",
    "Uninstall Camera Driver and Restart": "Uninstall the Camera driver and restart the machine.",
    "Uninstall Fingerprint Driver and Restart": "Uninstall the Fingerprint driver and restart the machine.",
    "Uninstall HID-compliant touch screen Driver and Restart": "Uninstall HID-compliant touch screen and restart the machine.",
    "Uninstall Audio Driver and Restart": "Uninstall the Audio driver and restart the machine.",
    "Uninstall Bluetooth Driver and Restart": "Uninstall the Bluetooth driver and restart the machine.",
    "Uninstall Wireless Driver and Restart": "Uninstall the Wireless driver and restart the machine."
  };
  if(map[label]) return map[label];
  const globalEN = getChecklistMappingText(label, "en");
  if(globalEN) return globalEN;
  let m;
  if((m = label.match(/^Check (.+?) in Device Manager$/i))){
    return `Check whether Device Manager detects ${_stripKnownSuffix(m[1])}.`;
  }
  if((m = label.match(/^Uninstall (.+?) Driver and Restart$/i))){
    return `Uninstall the ${_stripKnownSuffix(m[1])} driver and restart the machine.`;
  }
  if((m = label.match(/^(.+?) Driver Update(?: \/ Lenovo Vantage)?$/i))){
    return `Update the ${_stripKnownSuffix(m[1])} driver to the latest version.`;
  }
  if((m = label.match(/^Swap (.+)$/i))){
    return `Try another ${m[1]}.`;
  }
  if((m = label.match(/^(.+?) test on other machine$/i))){
    return `Test ${m[1]} with another machine.`;
  }
  if((m = label.match(/^(.+?) occurs$/i))){
    return `Check whether ${m[1]} occurs.`;
  }
  if((m = label.match(/^(.+?) enabled in BIOS$/i))){
    return `Check whether ${m[1]} is enabled in BIOS.`;
  }
  if((m = label.match(/^(.+?) checked$/i))){
    return `Check ${m[1]}.`;
  }
  return `Check ${label}.`;
}

function _emailVisibleLabels(){
  const internalOnly = new Set([
    "Event Viewer / Dump file collected",
    "Dump File collected",
    "Dump file collected",
    "Minidump collected"
  ]);
  const labels = getQuestions().map(x => x.label).filter(label => !internalOnly.has(label));
  // FRU P/N is not shown as an internal FRU request; it is converted into a customer-friendly photo request.
  return labels;
}

function _formatStepText(text, index){
  const parts = String(text || "").split("\n");
  const first = `${index}. ${parts.shift()}`;
  return [first].concat(parts.map(p => `   ${p}`)).join("\n");
}

function emailFromChecklist(lang){
  if(isManual()) return lang === "EN" ? current().emailEN : current().emailTH;
  const q = _emailVisibleLabels();
  if(lang === "EN"){
    let lines = ["Dear Customer,", "", "Please follow the steps below.", ""];
    q.forEach((item, i) => lines.push(_formatStepText(customerStepEN(item), i+1), ""));
    lines.push("Once completed, please send us the result and attach any photo or test result if available, so we can proceed with the next step.");
    return lines.join("\n");
  }
  let lines = ["เรียน คุณลูกค้า", "", "รบกวนดำเนินการตามขั้นตอนด้านล่างนี้", ""];
  q.forEach((item, i) => lines.push(_formatStepText(customerStepTH(item), i+1), ""));
  lines.push("หากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับ พร้อมแนบรูปหรือผลการทดสอบ (ถ้ามี) เพื่อให้ทางเราดำเนินการในขั้นตอนถัดไปครับ");
  return lines.join("\n");
}
