/* PD Guide Toolkit 5.4.0 — evidence-led diagnostic engine.
 * Scope: model > symptom > checklist. No percentage/probability claims.
 * The legacy rules remain in app.js for side-by-side audit, but are not used
 * to determine the visible Conclusion.
 */
(function(root){
  "use strict";
  const TAIL = /^(any cid|any other issue|other issue|fru p\/n|physical damage|liquid spilled)$/i;
  const DONE = v => v !== undefined && v !== null && v !== "" && v !== "-- Select --" && v !== "Not Test";
  const partName = p => String(p||"").trim();
  const response = (result,part="-",why="",extra={}) => Object.assign({result,part,evidenceReason:why},extra);
  const pending = (why,part="-") => response("Pending","-",why,part!=="-"?{suspectedPart:part}:{});
  const suspect = (part,why) => response("Suspect",part,why);
  const dispatch = (part,why,key) => response("Dispatch",part,why,key?{evidenceKey:key}:{});
  const fixed = (why) => response("FOP","-",why);
  const verify = (why) => response("Verify Checklist","-",why);
  const isSame = v => v === "Same Issue";
  const isWorking = v => v === "Working" || v === "Work Fine";
  const yes = v => v === "Yes" || String(v||"").startsWith("Yes :");
  function evaluate(ctx){
    const model = String(ctx.model||"").toLowerCase();
    const level = String(ctx.level||"").toLowerCase();
    const symptom = String(ctx.symptom||"").toLowerCase();
    const questions = ctx.answers||[];
    const data = new Map(questions.map(r=>[String(r.q||"").trim().toLowerCase(),String(r.a||"")]));
    const get = (...names) => {for(const n of names){const value=data.get(n.toLowerCase()); if(value!==undefined)return value;} return undefined;};
    const has = names => names.some(n=>DONE(get(n)));
    const required = questions.filter(r=>!TAIL.test(String(r.q||"").trim()));
    const filled = required.filter(r=>DONE(r.a));
    const defaultPart = partName(ctx.defaultPart);
    const defaultSingle = defaultPart && defaultPart!=="-" && !/\s+\/\s+/.test(defaultPart) && !/software|troubleshooting/i.test(defaultPart);
    if(yes(get("Any CID","Physical Damage / Liquid Spilled","Physical Damage","Liquid Spilled")))
      return response("CID","-","พบการรายงาน CID/Physical Damage/Liquid Spilled ต้องตรวจสอบความเสียหายก่อนการเบิกอะไหล่");
    if(!filled.length) return pending("ยังไม่มีคำตอบจากขั้นตอนตรวจสอบหลัก");
    if(get("Power LED")==="No" && get("Caps Lock Toggle")==="Yes") return verify("Power LED = No แต่ Caps Lock Toggle = Yes กรุณายืนยันการทดสอบ");
    if(level==="boot" && symptom==="no_power" && get("Power LED")==="Yes")
      return response('Select "Boot → Power On No Display"',"-","Power LED ติด จึงควรตรวจในหัวข้อ Power On No Display");
    if(level==="boot" && symptom==="pond"){
      if(get("Power LED")==="No") return response('Select "Boot → No Power"',"-","Power LED ไม่ติด ควรตรวจในหัวข้อ No Power");
      if(isWorking(get("External Monitor Test","Swap Monitor"))) return response('Select "Display → Black Screen"',"-","จอภายนอกทำงานได้ ควรตรวจแยกจอภายใน");
      if(get("Caps Lock Toggle")==="Yes" && isSame(get("External Monitor Test","Swap Monitor"))) return verify("Caps Lock ตอบสนองแต่จอภายนอกไม่แสดงภาพ ต้องตรวจข้อมูลเพิ่มเติม");
      if(get("Power LED")==="Yes" && get("Caps Lock Toggle")==="No" && isSame(get("External Monitor Test","Swap Monitor")))
        return dispatch("Mainboard","Power LED ติด แต่ Caps Lock ไม่ตอบสนองและจอภายนอกยังไม่แสดงภาพ; ตรวจ BitLocker Recovery Key ก่อนเปลี่ยน","POND_ELIMINATION");
    }
    if(level==="display" && isSame(get("External Monitor Test"))) return response('Select "Boot → Power On No Display"',"-","จอภายนอกยังมีอาการเดียวกัน ต้องแยกสาเหตุระบบภาพก่อน");
    // A corrective action that clearly fixed the originally reported issue.
    const recover = /^(power reset|power reset \/ emergency reset|emergency reset|emergency reset hole|bios update|load bios default|windows update|driver update|driver \/ windows update|lenovo vantage update|dock firmware update|clean cooling system|windows startup repair|re-install windows|safe mode test)$/i;
    for(const r of filled) if(recover.test(r.q) && isWorking(r.a)) return fixed(`${r.q} = Working อาการแก้ไขแล้ว`);
    // Early model-specific No Power elimination. Optional tail items are never prerequisites.
    if(level==="boot" && symptom==="no_power"){
      const power=get("Power LED"), charge=get("Charge LED");
      const reset=get("Emergency Reset","Power Reset","Power Reset / Emergency Reset");
      const swap=get("Swap Adapter");
      const port=get("Swap Other Type-C Port");
      if(isWorking(swap)) return dispatch("Adapter","เปลี่ยน Adapter แล้วทำงานได้ ยืนยันรุ่นและกำลังไฟก่อนเบิก","ADAPTER_SWAP");
      if(model==="thinkpad" || model==="ideapad"){
        if(power==="No" && charge==="No" && isSame(reset) && isSame(port) && isSame(swap))
          return dispatch("Mainboard","Power LED/Charge LED ไม่ติด หลัง Reset, ลองพอร์ต Type-C อื่น และเปลี่ยน Adapter ยังพบปัญหาเดิม; ตรวจ BitLocker Recovery Key ก่อนเปลี่ยน","NO_POWER_ELIMINATION");
        if(isSame(swap) && (power==="No" || charge==="No")) return suspect("Mainboard","เปลี่ยน Adapter แล้วยังมีอาการ แต่การแยกสาเหตุ Power/Port/Reset ยังไม่ครบ");
      }
      if(model==="desktop" || model==="aio" || model==="tiny"){
        if(isWorking(get("Swap Power Cable","Swap Power Cord"))) return dispatch("Power Cord","เปลี่ยนสายไฟแล้วกลับมาทำงานได้","POWER_CORD_SWAP");
        if(isWorking(get("Swap PSU"))) return dispatch("PSU","เปลี่ยน PSU แล้วกลับมาทำงานได้","PSU_SWAP");
        if(isSame(get("Swap Power Cable")) && isSame(get("Swap Power Outlet"))) return suspect("Mainboard","ตัดปัญหาสายไฟและเต้ารับแล้ว แต่ยังควรตรวจ PSU ก่อนยืนยัน Mainboard");
      }
    }
    // Network diagnostics: overlapping WLAN + LAN symptoms must NOT imply WLAN-only hardware.
    if(level==="network" || /wi[ -]?fi|wlan|bluetooth|ethernet|\blan\b/.test(symptom)){
      const hotspot=get("Hotspot Test"); const lan=get("Port LAN Test");
      const bios=get("Check BIOS Settings");
      if(isSame(hotspot) && isSame(lan))
        return bios==="Not Test" || !DONE(bios)
          ? suspect("Network Controller / Mainboard","ทั้ง WLAN/Hotspot และ LAN ยังมีปัญหา แต่ BIOS ยังไม่ได้ตรวจ: ต้องตรวจ BIOS, Device Manager, Diagnostics และแยกสภาพแวดล้อมเครือข่ายก่อน")
          : suspect("Network Controller / Mainboard","LAN และ WLAN ต่างมีปัญหา แม้ตรวจ BIOS แล้ว ต้องยืนยัน Diagnostics และ Network Environment ก่อน Dispatch");
      if(isSame(hotspot) && isSame(get("WLAN Driver Update")) && !DONE(bios))
        return suspect("WLAN Card","ยังมีปัญหาหลัง WLAN Driver Update และ Hotspot Test; ต้องตรวจ BIOS/WLAN Enabled, Device Manager และ Diagnostics ก่อนระบุ FRU");
    }
    // Dispositive direct swap evidence; restricted to parts directly tested, not inferred FRUs.
    const swapParts = [
      [/^swap adapter$/i,"Adapter"], [/^swap psu$/i,"PSU"],
      [/^swap (power cord|power cable)$/i,"Power Cord"],
      [/^swap hdmi cable$/i,"HDMI Cable"], [/^swap displayport cable$/i,"DisplayPort Cable"],
      [/^swap hdmi \/ displayport cable$/i,"HDMI / DP Cable"],
      [/^swap usb-c cable$/i,"USB-C Cable"], [/^swap lan cable$/i,"LAN Cable"],
      [/^swap hdd$/i,"HDD"], [/^swap dock$/i,"Docking"], [/^swap monitor$/i,"Monitor"],
      [/^swap keyboard$/i,"Keyboard"], [/^swap mouse$/i,"Mouse"], [/^swap power cord$/i,"Power Cord"]
    ];
    for(const r of filled) for(const [pattern,part] of swapParts){
      if(pattern.test(r.q) && isWorking(r.a)) return dispatch(part,`${r.q} = Working หลังเปลี่ยนชิ้นทดสอบที่ทราบว่าดี; ยืนยันความเข้ากันได้กับ Model ก่อน Dispatch`,"CONFIRMED_SWAP");
    }
    const crossParts = [[/^adapter test on other machine$/i,"Adapter"],[/^monitor test on other machine$/i,"Monitor"],[/^keyboard test on other machine$/i,"Keyboard"],[/^mouse test on other machine$/i,"Mouse"]];
    for(const r of filled) for(const [pattern,part] of crossParts){
      if(pattern.test(r.q) && isSame(r.a) && !(part==="Adapter" && isSame(get("Swap Adapter"))))
        return suspect(part,`${r.q} = Same Issue อุปกรณ์อาจมีปัญหา แต่ควรยืนยันการทดสอบไขว้ก่อน Dispatch`);
    }
    // Explicit model/symptom-based evidence rules (conservative without diagnostics).
    if(level==="fan"){
      if(String(get("Lenovo Diagnostics")||"").startsWith("Failed") && /fan/i.test(symptom)) return dispatch("Fan","Lenovo Diagnostics รายงาน Failed ในอาการ Fan; ตรวจ FRU และ Model ก่อนเปลี่ยน","FAN_DIAGNOSTIC");
      if(isSame(get("BIOS Update")) && isSame(get("Load BIOS Default")) && /fan_error/.test(symptom)) return suspect("Fan","การ Reset/Update BIOS ยังไม่แก้ Fan Error ควรยืนยัน Fan Diagnostics");
    }
    if(level==="storage"){
      if(isSame(get("Swap HDD"))) return suspect("Mainboard / Storage Connector","หลังเปลี่ยน HDD ยังพบอาการ จึงยังต้องแยก Controller/Connector ก่อนเบิก");
      if(get("BIOS detects storage")==="No") return suspect(defaultSingle?defaultPart:"Storage Device / Controller","BIOS ไม่พบ Storage ยังต้องยืนยันด้วย Known-good Storage และ Connector");
    }
    if(level==="display" && isWorking(get("External Monitor Test"))) return suspect("LCD Panel / Display Cable","จอภายนอกทำงานได้ แต่ยังต้องแยก LCD Panel และสายสัญญาณก่อน Dispatch");
    // A diagnostic failure must identify its failing part, not guess from defaultPart.
    const failures=filled.filter(r=>/^Failed(?:\b|\s*:)/i.test(r.a));
    if(failures.length) return suspect(defaultSingle?defaultPart:"Hardware / Controller",`พบผล Failed (${failures.map(r=>r.q).join(", ")}) ต้องยืนยันรายละเอียดรหัส Diagnostic/FRU ก่อน Dispatch`);
    // Software + unresolved checks never trigger a spare part solely due to count of answers.
    if(defaultSingle && filled.length>=2 && filled.some(r=>isSame(r.a)))
      return suspect(defaultPart,`Model ${ctx.model} / ${ctx.level} / ${ctx.symptom}: มีผลทดสอบไม่หาย แต่ยังขาดหลักฐานยืนยัน FRU; ตรวจตาม Checklist สำคัญและยืนยัน Part ก่อน Dispatch`);
    return pending(`ยังไม่เพียงพอที่จะสรุปอะไหล่สำหรับ ${ctx.model} → ${ctx.level} → ${ctx.symptom}; ตรวจเพิ่มตามขั้นตอนหลัก`);
  }
  root.PDDecisionEngine = Object.freeze({version:"5.4.0",evaluate});
})(typeof window!=="undefined"?window:globalThis);
