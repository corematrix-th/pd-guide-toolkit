/* Evidence scoring for PD Guide Toolkit v5.4.0.
 * Scores are a documented heuristic for comparing checklist evidence, NOT
 * calibrated failure probabilities. Dispatch continues to require explicit
 * independent, model-specific evidence from PDDecisionEngine.
 */
(function(root){
  'use strict';
  const filled=v=>v!==undefined && v!==null && !['','-- Select --','Not Test'].includes(String(v).trim());
  const same=v=>v==='Same Issue';
  const works=v=>v==='Working'||v==='Work Fine';
  const percent=v=>Math.max(0,Math.min(95,Math.round(v)));
  function evaluate(ctx){
    const rows=ctx.answers||[];
    const a=new Map(rows.map(x=>[String(x.q||'').trim().toLowerCase(),String(x.a||'').trim()]));
    const get=(...names)=>{for(const n of names){if(a.has(n.toLowerCase()))return a.get(n.toLowerCase());}return '';};
    const evidence=rows.filter(x=>filled(x.a)&&!/^(any other issue|fru p\/n|specific keys listed)$/i.test(x.q||''));
    const base=(root.PDDecisionEngine && root.PDDecisionEngine.evaluate(ctx))||{result:'Pending',part:'-',evidenceReason:'Engine unavailable'};
    const candidates=new Map();
    const add=(part,points,why)=>{
      if(!part||part==='-'||/\s+\/\s+/.test(part) && part!=='Windows / Driver' && part!=='Network Controller / Mainboard')return;
      const item=candidates.get(part)||{part,score:0,reasons:[]};
      item.score+=points;
      if(why&&!item.reasons.includes(why))item.reasons.push(why);
      candidates.set(part,item);
    };
    const level=String(ctx.level||'').toLowerCase();
    const sym=String(ctx.symptom||'').toLowerCase();
    const model=String(ctx.model||'').toLowerCase();
    const missing=[];
    if(!evidence.length)return {result:'Pending',part:'-',score:null,candidates:[],nextActions:['บันทึกผลการทดสอบ Checklist หลักก่อน Generate Part'],reason:'ยังไม่มีผลทดสอบ'};
    if(base.result==='CID'||base.result==='Verify Checklist'||String(base.result).startsWith('Select '))return {result:base.result,part:'-',score:null,candidates:[],nextActions:[base.evidenceReason||'ตรวจสอบข้อมูลเพิ่มเติม'],reason:base.evidenceReason||''};
    if(base.result==='FOP')return {result:'FOP',part:'-',score:null,candidates:[],nextActions:['ยืนยันว่าอาการหายจริงก่อนปิดเคส'],reason:base.evidenceReason||'อาการได้รับการแก้ไขแล้ว'};
    if(level==='boot' && sym==='no_power'){
      if(get('Power LED')==='No'&&get('Charge LED')==='No')add('Mainboard',20,'Power LED และ Charge LED ไม่ติด');
      if(same(get('Emergency Reset','Power Reset','Power Reset / Emergency Reset')))add('Mainboard',15,'Emergency Reset แล้วยังมีอาการ');
      if(same(get('Swap Other Type-C Port')))add('Mainboard',15,'ทดสอบพอร์ต Type-C อีกช่องแล้วยังมีอาการ');
      if(same(get('Swap Adapter')))add('Mainboard',30,'ทดสอบ Adapter ทดแทนแล้วยังมีอาการ');
      if(works(get('Swap Adapter')))add('Adapter',85,'เปลี่ยน Adapter แล้วกลับมาทำงาน');
      if(!filled(get('Swap Adapter')))missing.push('ทดสอบ Adapter ทดแทน');
      if((model==='desktop'||model==='tiny'||model==='aio')&&works(get('Swap PSU')))add('PSU',85,'เปลี่ยน PSU แล้วเครื่องใช้งานได้');
    }
    if(level==='network'||/wifi|wi_fi|wlan/.test(sym)){
      if(get('WLAN Status Check')==='Off'||get('Airplane Mode Check')==='On')add('Windows / Driver',35,'ตรวจสอบ WLAN และ Airplane Mode ก่อน');
      if(same(get('Hotspot Test')))add('WLAN Card',15,'Wi-Fi ยังมีปัญหาบน Hotspot');
      if(get('Port LAN Test')==='Working')add('WLAN Card',20,'LAN ทำงานได้ แยกปัญหาเฉพาะ WLAN');
      if(same(get('Port LAN Test'))){add('Network Controller / Mainboard',25,'LAN และ WLAN มีอาการร่วมกัน');add('Windows / Driver',15,'อาจเกิดจาก Network Stack/Software ร่วมกัน');}
      if(same(get('WLAN Driver Update')))add('WLAN Card',15,'อัปเดต WLAN Driver แล้วยังมีปัญหา');
      if(get('Check BIOS Settings')==='Enabled')add('WLAN Card',10,'WLAN เปิดใช้งานใน BIOS');
      if(get('Check BIOS Settings')==='Disabled')add('Windows / Driver',25,'ต้องเปิด WLAN ใน BIOS แล้วทดสอบใหม่');
      if(works(get('Hotspot Test')))add('Router / Network Environment',60,'เชื่อมต่อ Hotspot ทำงานได้');
      if(works(get('WLAN Driver Update')))add('Windows / Driver',55,'อาการอาจหายหลัง WLAN Driver Update ต้องยืนยัน');
      if(!filled(get('Check BIOS Settings')))missing.push('ตรวจ WLAN Settings ใน BIOS');
      if(!filled(get('Hotspot Test')))missing.push('ทดสอบด้วย Hotspot อีกเครือข่าย');
      if(!filled(get('Port LAN Test')))missing.push('ทดสอบ Port LAN เพื่อแยกสาเหตุ');
      missing.push('ตรวจ Device Manager และ Lenovo Diagnostics ก่อน Dispatch WLAN Card');
    }
    if(level==='keyboard'||/key_?board|few_?key/.test(sym)){
      const ext=get('External Keyboard Test');
      if(works(ext))add('Keyboard',65,'Keyboard ภายนอกใช้งานปกติ แต่ Keyboard ภายในมีอาการ');
      if(same(ext)){add('Windows / Driver',35,'Keyboard ภายนอกยังเกิดอาการเดียวกัน');add('Mainboard / Controller',15,'อาจเกี่ยวข้องกับ Controller แต่ต้องแยก Software ก่อน');}
      if(!filled(ext))missing.push('ทดสอบ Keyboard ภายนอก');
      missing.push('ทดสอบปุ่มใน BIOS/Diagnostics หรือสภาพแวดล้อมนอก Windows');
    }
    if(level==='display'){
      if(works(get('External Monitor Test')))add('LCD Panel',40,'จอภายนอกใช้งานได้');
      if(works(get('External Monitor Test')))add('Display Cable',30,'ควรตรวจสายสัญญาณจอภายใน');
      if(!filled(get('External Monitor Test')))missing.push('ทดสอบจอภายนอก');
    }
    // Strong existing domain decision rules are authoritative for dispatch.
    if(base.result==='Dispatch'&&base.part&&base.part!=='-'){
      if(!candidates.has(base.part)) add(base.part,85,base.evidenceReason||'ผ่านกฎยืนยันการทดสอบของรุ่นและอาการ');
    } else if(base.result==='Suspect'&&base.part&&base.part!=='-'){
      if(!/\s+\/\s+/.test(base.part))add(base.part,25,base.evidenceReason||'กฎวินิจฉัยเดิมสนับสนุน');
      // Compound suspects are never translated into a single dispatch part.
    }
    // No evidence weights for an unfamiliar model/symptom is safer than an invented score.
    const ranked=[...candidates.values()].map(x=>({...x,score:percent(x.score)})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,3);
    if(base.result==='Dispatch'&&base.part&&base.part!=='-'){
      const selected=ranked.find(x=>x.part===base.part);
      return {result:'Dispatch',part:base.part,score:selected?selected.score:85,candidates:ranked,reason:base.evidenceReason||'',nextActions:['ตรวจสอบ Part/FRU ตามรุ่นและนโยบายรับประกันก่อนเบิก']};
    }
    if(!ranked.length){
      return {result:'Pending',part:'-',score:null,candidates:[],reason:base.evidenceReason||'ยังไม่มีหลักฐานที่แยก Part ได้',nextActions:[...new Set([...missing,'ตรวจผล Diagnostics และขั้นตอนจำเป็นของอาการนี้'])].slice(0,4)};
    }
    const top=ranked[0];
    const result=top.score>=25?'Suspect':'Pending';
    return {result,part:result==='Suspect'?top.part:'-',score:result==='Suspect'?top.score:null,candidates:ranked,reason:top.reasons.join('; '),nextActions:[...new Set(missing)].slice(0,4)};
  }
  root.PDPartScoring=Object.freeze({version:'5.4.0',evaluate});
})(typeof window!=='undefined'?window:globalThis);
