/* Real content from treats.org.hk (fetched 2026-11). Loaded after the main script; overrides placeholder pages. */
(function(){
const U='https://treats.org.hk/wp-content/uploads/';
const FORM='https://docs.google.com/forms/d/e/1FAIpQLScrcIjN1xvqOmGoZxCnN6Ft3QzyNxeWzY8ck0rBS-TwWXPamQ/viewform';
const a=(t,u)=>`<a href="${u}" target="_blank" rel="noopener" style="color:var(--blue);font-weight:700;text-decoration:underline">${t}</a>`;
const fee='（由 2023 年 6 月 1 日起生效）';

/* ---------- extra block kinds ---------- */
KINDS.voices=b=>`<div class="grid g${b.cols||2}">${b.items.map(([q,w],i)=>`<div class="fcard rv" style="transition-delay:${i*60}ms"><p style="font-size:16px;color:var(--ink)">「${q}」</p><p style="margin-top:10px;color:var(--blue);font-weight:700">— ${w}</p></div>`).join('')}</div>`;
KINDS.ulist=b=>`<div class="list">${b.rows.map(r=>{const inner=`<span><b>${r[0]}</b>${r[1]?`<small>${r[1]}</small>`:''}</span><span class="ar">${r[2]?'↗':'→'}</span>`;return r[2]?`<a href="${r[2]}" target="_blank" rel="noopener">${inner}</a>`:`<div class="it">${inner}</div>`}).join('')}</div>`;
KINDS.partners=b=>`<div class="chips" style="justify-content:flex-start">${b.names.map(n=>`<span class="chip" style="cursor:default;font-weight:500">${n}</span>`).join('')}</div>`;
KINDS.btns=b=>`<div style="display:flex;gap:12px;flex-wrap:wrap">${b.links.map(l=>`<a class="btn small blue" href="${l[1]}" ${/^#/.test(l[1])?'':'target="_blank" rel="noopener"'}>${l[0]} ${/^#/.test(l[1])?'→':'↗'}</a>`).join('')}</div>`;
KINDS.tabsx=b=>`<div class="tabs">${b.tabs.map((x,i)=>`<button class="${i?'':'on'}" data-tab="${i}">${x[0]}</button>`).join('')}</div>${b.tabs.map((x,i)=>`<div class="tabpane ${i?'':'on'}" data-pane="${i}">${x[1]}</div>`).join('')}`;
KINDS.tiers=b=>`<div class="grid g3">${b.items.map(([amt,per,res],i)=>`<div class="fcard rv" style="text-align:center;transition-delay:${i*80}ms"><div style="font:700 42px/1.1 Fredoka;color:var(--red);position:relative;z-index:1">${amt}</div><p style="font-weight:700;color:var(--blue)">${per}</p><p style="margin-top:6px">${res}</p></div>`).join('')}</div>`;
KINDS.docs2=b=>b.groups.map((d,i)=>`<div class="acc ${i<2?'open':''} rv"><span class="tag id">${d[0]}</span><button>${d[1]}<i>+</i></button><div class="ab"><div class="list" style="box-shadow:none">${d[2].map(r=>{const inner=`<span><b>${r[0]}</b>${r[1]?`<small>${r[1]}</small>`:''}</span><span class="ar">${r[2]?'↓':'→'}</span>`;return r[2]?`<a href="${r[2]}" target="_blank" rel="noopener">${inner}</a>`:`<div class="it">${inner}</div>`}).join('')}</div></div></div>`).join('');
KINDS.donate2=b=>`<div class="donate" id="dn"><span class="tag id">/ p10-3</span><div class="seg"><button class="on" data-m="once">單次捐款</button><button data-m="month">月捐計劃（共融有您）</button></div>
 <div><b>選擇金額（港幣）</b><div class="amt" style="margin-top:10px">${[300,500,1200,2000].map((x,i)=>`<button class="${i==1?'on':''}" data-a="${x}">$${x}</button>`).join('')}<button data-a="0">自訂</button></div><input id="custom" type="number" min="1" placeholder="輸入金額" style="display:none;margin-top:12px;padding:12px 18px;border-radius:18px;border:3px solid #fff;width:200px;font:inherit"></div>
 <div class="meter"><i id="mt"></i></div><p id="dtxt" style="font-weight:700;color:var(--blue)"></p>
 <p style="font-size:14px;color:var(--grey)">網上捐款以 PayPal 完成，資料以加密方式傳送。需閱讀並同意捐款細則及個人資料收集聲明。收據及資訊會以電郵寄出。</p>
 <button class="btn" id="dgo" style="justify-self:start">♥ 前往捐款</button></div>`;

/* ---------- reviews: all article titles from the old site ---------- */
if(window.REVIEWS_RAW){
  const keys=['talk','kin','cheer','mid','team','sport','sail','comm','game','mkt'];
  const pick=(t,i)=>/帆船|小艇|航/.test(t)?(i%2?'sail':'team'):/龍舟/.test(t)?'sport':/健球/.test(t)?'kin':/中秋|市集|月餅/.test(t)?'mid':/欖球/.test(t)?'kin':keys[i%keys.length];
  Object.keys(REVIEWS).forEach(k=>delete REVIEWS[k]);
  window.REVIEWS_RAW.trim().split('\n').forEach((ln,i)=>{const [d,t]=ln.split('|');if(!t)return;const y=d.slice(0,4);(REVIEWS[y]=REVIEWS[y]||[]).push([d.slice(5),t,pick(t,i)]);});
}

/* ---------- pages ---------- */
const P={
'p2-1':{c:'red',t:['有關親切','About TREATS'],crumb:'有關我們',sub:'為每位兒童建立一個共融社會',img:'cheer',shape:'cloud',blocks:[
 {id:'p2-1-1',h:'機構簡介與親切標誌',k:'text',p:['親切（TREATS）成立於 1979 年，是香港註冊慈善團體，也是香港公益金及香港社會服務聯會會員。機構透過特別設計的共融活動，讓不同能力和背景的兒童、青少年及家庭互相學習、彼此欣賞。','親切平均每年約有 158,500 名兒童及青少年受惠。','2026 年親切迎來 45 周年，並推出新標誌。'],logo:true},
 {id:'p2-1-2',h:'我們的願景',k:'quote',p:'為每位兒童建立一個共融社會',by:'— 親切 TREATS 願景'},
 {id:'p2-1-3',h:'服務目標',k:'grid',cols:3,items:[['扭轉偏見和歧視','讓不同能力和背景的兒童透過教育、接觸和體驗，扭轉偏見和歧視。'],['提升社交技巧、自信心及社會參與','協助弱勢兒童發展，提升他們的社交技巧、自信心及社會參與。'],['認同多元、無歧視的社會','透過社區教育，提升大眾對多元、無歧視社會的認同。']]},
 {id:'p2-1-4',h:'服務對象',k:'grid',cols:3,items:[['有特殊需要的兒童','有智能、肢體、情緒或社交障礙的兒童'],['新來港人士及少數族裔','為少數族裔兒童及青年提供服務','p4-3'],['低收入或貧窮家庭','讓弱勢家庭的孩子同樣能參與共融活動']]},
 {id:'p2-1-4b',h:'主要服務',k:'btns',links:[['學校共融教育','#p4-1'],['戶外／社區共融體驗','#p4-2'],['創意無界限','#p4-2'],['運動零界限','#p4-2'],['青少年培育','#p4-3'],['少數族裔服務','#p4-3'],['桌上互動共融教育遊戲','#p4-1'],['親子共融教育','#p4-1'],['專業培訓','#p4-4']]},
 {id:'p2-1-5',h:'親切小故事',k:'cards',items:[{img:'talk',d:'獎學金得獎者',t:'關日星的故事',p:'日星熱愛咖啡拉花，雖有輕度智力障礙，仍堅持追求夢想，每週利用課餘時間到咖啡店練習。',go:'閱讀故事',to:'p6-1'},{img:'comm',d:'獎學金得獎者',t:'梁永恩的故事',p:'永恩患有自閉症及言語障礙，但在音樂中找到自信與表達方式，曾代表香港赴美國參加世界表演藝術錦標賽。',go:'閱讀故事',to:'p6-1'},{img:'cheer',d:'45 週年人物誌',t:'《親親。融融：45個親切故事》',p:'45 週年特刊，收錄 45 個親切故事。',go:'閱讀特刊',to:'p7'}]},
 {id:'p2-1-6',h:'親切里程碑',k:'timeline',items:[['1979','親切成立'],['1985','首次於越南難民營舉辦兒童同樂日'],['2006','進行全港首個共融研究「共融在香港」'],['2012','成立共融帆船隊'],['2019','成立共融龍舟隊'],['2020','舉辦首屆香港共融健球盃'],['2025','香港共融健球盃首次邀請台灣隊伍參與'],['2026','迎來 45 周年，推出新標誌及《親親。融融：45個親切故事》']]}]},
'p2-2':{c:'blue',t:['管治架構','Governance'],crumb:'有關我們',img:'team',shape:'squircle',blocks:[
 {id:'p2-2-0',h:'榮譽顧問',k:'facts',rows:[['榮譽顧問','歐家銘先生（法律）<br>曾皿堅先生<br>曹莉莉女士']]},
 {id:'p2-2-1',h:'執行委員會',k:'facts',rows:[['主席','丘璟珊女士'],['副主席','許娜娜博士<br>石鈞年先生<br>蘇秀冠教授'],['司庫','陳子良先生'],['委員','鍾紹玲女士<br>艾珍妮女士<br>Ms Christine Lee (Ms Tina Lee Jebely)'],['當然委員（秘書）','盧美寶女士']]}]},
'p2-3':{c:'green',t:['統計及財政概覽','Statistics & Finance'],crumb:'有關我們',img:'mkt',shape:'pebble',blocks:[
 {id:'p2-3-1',h:'統計及財政資料',k:'stats',items:[[158500,'名兒童及青少年','平均每年受惠'],[80,'名兒童','月捐 $200（約每日 $7）一年的服務成效'],[580,'名弱勢兒童','月捐 $500（約每日 $16）一年的社區探索活動']]},
 {id:'p2-3-1b',h:'善款運用',k:'facts',rows:[['經費來源','約兩成經費來自香港公益金及香港賽馬會慈善信託基金，其餘來自個人及企業捐款。'],['直接服務','每年超過八成善款用於直接服務。'],['核數','本會每年出版年報，財務報告由畢馬威會計師事務所審核。'],['收入與支出','原網站設有收入及支出圖表，詳見年報及審計財務報表。']]},
 {id:'p2-3-2',h:'核數師報告（按年度）',k:'ulist',rows:[['審計財務報表 2024/25','PDF',U+'2025/11/2024-2025-Auditor-Report_annual-report.pdf'],['審計財務報表 2023/24','PDF','https://treats.org.hk/en/wp-content/uploads/2024/11/Auditor-Report_2023-24.pdf'],['審計財務報表 2022/23','PDF',U+'2023/10/2022-2023-Annual-Audit-Report.pdf']]}]},
'p2-4':{c:'red',t:['什麼是共融？','What is Inclusion?'],crumb:'有關我們',sub:'一起玩、一起學，互相欣賞',img:'game',shape:'flower',blocks:[
 {id:'p2-4-1',h:'共融的定義與理念',k:'text',p:['親切相信，每位兒童不論能力和背景，都有權參與社會，並享受與人接觸的樂趣。','共融，是讓不同能力和背景的人聚在一起，認識彼此的共通與差異，打破社會定型觀念，互相接納、尊重，並共享權利與義務。弱勢社群和社會大眾都能從共融體驗中受益。','共融需要實踐，也需要每個人的參與和支持，才能建立更關愛的社會。']},
 {id:'p2-4-2',h:'共融在香港',k:'stats',nomore:1,items:[[107,'萬名兒童','香港約有 107 萬名 19 歲以下兒童'],[5,'萬名','約 5 萬名 15 歲以下為能力障礙兒童'],[5,'萬名','另約 5 萬名 15 歲以下為少數族裔兒童']]},
 {id:'p2-4-2b',h:'弱勢兒童的處境',k:'text',p:['香港於 1994 年成為聯合國《兒童權利公約》締約國，但並非每位兒童的成長與發展都獲得同等重視。','約四分之一兒童屬弱勢群組。在生存、醫療和教育方面，香港已有較高水平，但弱勢兒童免受歧視、社交發展、社會參與及康樂遊樂的權利，仍未受到足夠重視。','香港缺乏兒童社會共融及社會排斥的指標，也缺乏反映殘疾兒童現況的準確數據，使相關政策難以真正回應弱勢兒童的需要。'],go:['閱讀「共融在香港」研究報告','p6-3']}]},
'p4-1':{c:'green',t:['共融教育','Inclusive Education'],crumb:'我們的服務',sub:'「平等參與」、「開懷接納」和「學習欣賞」——所有收費自 2023 年 6 月 1 日起生效。網上報名表格適用於學校及團體，個別家長請致電 2889 1332。',img:'cheer',shape:'cloud',blocks:[
 {id:'p4-1-1',h:'學校共融教育',k:'tabsx',tabs:[
  ['幼稚園',`<div class="fcard"><h3>親親融融兒童故事坊</h3><p>以故事、互動遊戲和創意活動，讓幼童認識友愛、多樣化和獨特性等概念。</p></div><div class="facts" style="margin-top:14px"><div><b>時間</b><span>每節 60 分鐘</span></div><div><b>對象</b><span>低班至高班</span></div><div><b>收費</b><span>每節 $800</span></div><div><b>人數</b><span>每班最多 30 人</span></div><div><b>主題</b><span>共五個主題</span></div></div>`],
  ['小學（小一至小六）',`<div class="grid g3"><div class="fcard"><h3>共融教育講座</h3><p>全校禮堂講座\n每節 60 分鐘\n每節 $1,000\n參與人數 250–600 人</p></div><div class="fcard"><h3>共融體驗學習坊</h3><p>按年級設六個互動工作坊主題\n每節 60 分鐘（小四 75 分鐘）\n每節 $800\n每班 25–40 人</p></div><div class="fcard"><h3>共融體驗之旅</h3><p>全校參與的六個共融攤位遊戲\n收費 $2,200\n學校需自行安排家長義工或學生負責攤位</p></div></div>`],
  ['中學（中一至中六）',`<div class="grid g3"><div class="fcard"><h3>共融教育講座</h3><p>全校講座，以不同主題、個案和遊戲引導反思\n每節 60 分鐘\n每節 $1,000\n參與人數 250–600 人</p></div><div class="fcard"><h3>共融體驗學習坊</h3><p>以體驗活動、討論和小班互動為主：無歧視與偏見、平等參與、權利與我及技巧訓練等系列\n每節 $800\n部分單元需於禮堂或大型活動室進行</p></div><div class="fcard"><h3>共融體驗之旅</h3><p>與小學版本相似\n收費 $2,200</p></div></div>`]]},
 {id:'p4-1-1c',h:'報名',k:'btns',links:[['學校及團體網上報名',FORM]]},
 {id:'p4-1-2',h:'親子共融教育：「親親‧融融」家長坊',k:'text',p:['家長坊以共融教育為核心，相信家長是子女的第一位及最重要的老師。活動透過短講、角色扮演、討論和體驗遊戲，讓家長反思過往的育兒經驗，學習以身作則，培育善於溝通、勇於創新，並懂得接納、尊重及關愛他人的孩子。']},
 {id:'p4-1-2b',h:'主題系列',k:'grid',cols:3,items:[['品格培育系列','塑造關愛孩子、教出好情緒、向自我中心說再見'],['親子溝通系列','讚賞有法、怎麼聽，如何說？'],['親子遊戲系列','十個啟發創意的遊戲']]},
 {id:'p4-1-2c',h:'活動資料',k:'facts',rows:[['對象','幼稚園及小學家長'],['時間','1.5 小時'],['收費','每節 $1,200'+fee],['地點','學校、中心或網上形式'],['參與人數','30 人']]},
 {id:'p4-1-2d',h:'家長感想',k:'voices',cols:3,items:[['活動讓我們學懂處理孩子的情緒，幫助孩子表達感受。','筲箕灣崇真學校家長'],['學會運用日常生活中的工具設計遊戲，並讓孩子發揮創意。','幼聯主辦安泰幼兒學校家長'],['讚賞對孩子成長十分重要，能促進良好行為，並讓孩子學懂欣賞和尊重他人。','筲箕灣崇真學校家長']]},
 {id:'p4-1-3',h:'桌上互動共融教育遊戲：Z-Force: Genesis 始元篇',k:'text',p:['親切與專業遊戲設計公司合作，首次籌劃及推出此桌上遊戲。遊戲結合角色扮演、策略、冒險及解難元素，以互動和創意的方式，讓參加者體驗共融學習。','參加者創造自己的英雄角色，與隊友組成英雄團隊，一同展開冒險旅程，發揮合作與溝通能力，從多角度思考，合力化解危機。']},
 {id:'p4-1-3b',h:'學習目標與資料',k:'facts',rows:[['學習目標','1. 創意及解難能力　2. 團隊溝通和合作　3. 體驗多元價值'],['對象','高小學生（小學高年級）'],['每校人數','約 6–16 位；每組 6–8 位學生'],['收費','每組 $3,200（每組 6–8 位學生）']]},
 {id:'p4-1-3c',h:'學校及學生回饋',k:'voices',items:[['遊戲的設計及形式「非常創新」，參加者能從中學會與人溝通和合作。','官立嘉道理爵士小學老師'],['在遊戲中學會聆聽他人意見，團隊溝通十分重要。','獻主會溥仁小學同學']]}]},
'p4-2':{c:'blue',t:['共融體驗活動','Inclusion Experiences'],crumb:'我們的服務',sub:'親身接觸、愈早接觸和生活化的接觸，讓我們的下一代打破因彼此差異而造成的偏見。',img:'comm',shape:'flower',blocks:[
 {id:'p4-2-1',h:'戶外／社區共融體驗活動：「你我全接觸」體驗日營',k:'text',p:['以小組進行，讓參加者在平等平台上認識不同能力及背景的朋友，學習團隊合作、人際相處和溝通。營前，親切會到參與學校舉行準備活動，了解參加者情況以作配對和活動設計。']},
 {id:'p4-2-1a',h:'活動資料',k:'facts',rows:[['時間','10:00–16:00／9:30–13:00'],['地點','康樂營地或郊野公園'],['對象','兒童及青少年'],['收費','學生每位 $100（全日）；$50（半日）'+fee+'。特殊學校參加者豁免收費'],['參與人數','50 位一般能力參加者，25 位特殊需要參加者（包括不同能力障礙、特殊學習需要）及少數族裔（比例約 2：1）'],['主題','團隊合作系列、親歷自然系列、樂趣遊戲系列']]},
 {id:'p4-2-1v',h:'學校感想',k:'voices',items:[['為華語及非華語同學提供交流的契機，使之能互相認識，破冰交流。','聖公會李炳中學老師'],['活動設計配合不同學生的能力，亦具挑戰性，學生運用簡單物資便能享受玩耍的樂趣。','香港耀能協會羅怡基紀念學校老師']]},
 {id:'p4-2-1b',h:'「攜手結伴同樂日」社區探索活動',k:'text',p:['一般能力與特殊需要參加者組成「好拍檔」，透過生活化主題和團隊任務，結伴探索社區，增加社會大眾對能力障礙人士的認識，減少偏見和歧視。營前親切會舉行營前活動，並安排雙方學校或團體交流，為外出社區作準備。']},
 {id:'p4-2-1c',h:'活動資料與影片',k:'facts',rows:[['時間','10:00–16:00／9:30–13:00'],['地點','香港各區'],['對象','兒童及青少年'],['收費','學生每位 $100（全日）；$50（半日）；特殊學校參加者豁免收費'],['參與人數','30 位一般能力參加者，15 位特殊需要參加者及少數族裔（比例約 2：1）'],['主題','「活在香港」系列、「多元文化」系列、「社區無障礙」系列'],['影片',a('影片故事：大埔遊樂篇','https://www.youtube.com/watch?v=hxPE_725RZg')+'　'+a('影片故事：大埔餐廳篇','https://www.youtube.com/watch?v=iv1oye0kS_o')]]},
 {id:'p4-2-1d',h:'機構感想',k:'voices',items:[['活動提供機會讓學生接觸社區，提升社交技巧。','匡智張玉瓊晨輝學校社工']]},
 {id:'p4-2-2',h:'創意無界限',k:'text',p:['透過新穎有趣的創意及藝術形式，讓不同能力的參加者有自主空間發揮創意與個人潛能、擴闊視野。主流及特殊需要參加者可在平等互動的平台上，共同締造獨特、平等、難忘的共融體驗。']},
 {id:'p4-2-2a',h:'共融小廚師',k:'facts',rows:[['活動重點','核心不在於食物的價值，而在於參加者與新朋友合作製作不同食物，放下對不同能力及背景人士的固有看法，並共享成果。'],['時間','半日／全日'],['地點','學校／社區藝術及康樂設施'],['對象','8–18 歲兒童及青少年'],['收費','學生每位 $50'+fee+'；特殊學校參加者豁免收費'],['參與人數','12–15 位主流參加者、12–15 位特殊需要參加者及少數族裔、15 位商界義工']]},
 {id:'p4-2-2b',h:'共融藝術家',k:'facts',rows:[['活動重點','參加者在藝術創作過程中突破能力界限、打破隔膜，以獨一無二的方式表達自己。活動營造沒有對與錯的創意空間，讓參加者有平等自主的機會發掘創意潛能。'],['時間','半日／全日'],['地點','學校／社區藝術及康樂設施'],['對象','8–18 歲兒童及青少年'],['收費','學生每位 $50'+fee+'；特殊學校參加者豁免收費'],['參與人數','12–15 位主流參加者、12–15 位特殊需要參加者及少數族裔、15 位商界義工']]},
 {id:'p4-2-2v',h:'感想分享',k:'voices',items:[['學生透過活動與不同人士認識，不但提昇他們與外界人士交流互動的信心，亦有助增強社交技巧。','中華基督教會望覺堂啟愛學校老師'],['活動改變了我對有能力障礙學生的看法，他們投入完成活動並願意與其他人一起合作。','義工'],['學生能與不同能力的人相處，同時能擴展他們的經歷，理解每個人都有自己的特長，學會欣賞身邊不同人。','中華基督教會長洲堂錦江小學老師']]},
 {id:'p4-2-3',h:'運動零界限',k:'text',p:['運動是跨能力和文化的共通語言，參加者可在活動中互相合作、解決問題、突破自我，並與新朋友享受運動樂趣。四個項目的時間、地點、收費及參與人數安排相同。']},
 {id:'p4-2-3a',h:'運動零界限：共通資料',k:'facts',rows:[['時間','半日／全日體驗活動，或為期約兩個月、4–6 節的共融運動計劃'],['地點','學校或社區康樂及體育設施'],['學生收費','半日 $50；全日 $100；計劃 $100'+fee+'；特殊學校參加者豁免收費'],['參與人數','12–15 位主流參加者、12–15 位特殊需要參加者（包括能力障礙、特殊學習需要及少數族裔）、15 位商界義工']]},
 {id:'p4-2-3-1',h:'欖球全接觸計劃',k:'facts',rows:[['簡介','每年招募特殊學校學生及主流人士（包括商界義工或主流中、小學生）共 36 位參加者，一起接受 6 節團隊訓練，並以帶式欖球友誼賽作結。友誼賽當日，親切會邀請本地小型欖球隊與參加者切磋。'],['對象','8–18 歲兒童及青少年'],['影片',a('影片故事：共融欖球','https://www.youtube.com/watch?v=erB1nS1xsG8')]]},
 {id:'p4-2-3-2',h:'共融帆船隊',k:'facts',rows:[['簡介','共融帆船隊由不同能力的青少年及親切義工組成。隊員在大自然及具挑戰性的環境中訓練，並參加不同帆船賽事，強調與隊友緊密合作，有助提升自信、解難能力，以及社交和溝通技巧。'],['對象','12–18 歲兒童及青少年'],['隊員故事',a('阿儀：「帆船令我發現自己仲有好多可能性」','https://www.facebook.com/treatshk/photos/pb.100064627514877.-2207520000./5112883232079318/?type=3')+'<br>'+a('Isaac：《沉迷電話的小孩：帆船好玩過電話！》','https://www.facebook.com/treatshk/photos/pb.100064627514877.-2207520000./5275230305844609/?type=3')+'<br>'+a('Diva 及哲：「比賽造就 一對戰友」','https://www.facebook.com/treatshk/posts/pfbid036YXHBDwf96EKzbbsU4tXiiWKVFe1xGZuVXzsqB5KipFp2FA1mgnQNENGy7PWDpq9l')+'<br>'+a('影片故事：見證共同成長','https://www.facebook.com/treatshk/posts/pfbid02L1FNbZDmynuiV6QFqoN1SoKtqVMuPmAyu86fa7SqGHJe9hgSxkrnmopUM7ivb1rbl')]]},
 {id:'p4-2-3-3',h:'共融龍舟隊',k:'facts',rows:[['簡介','2019 年成立，招募主流義工及智力障礙青年為隊員。隊員經過密集訓練，建立默契與友誼，並參加西貢區龍舟競渡的「特能龍舟賽」組別，展現智力障礙青年的潛能。'],['對象','12–18 歲兒童及青少年'],['影片',a('影片故事：共融龍舟','https://www.youtube.com/watch?v=xibHb17xeTM')]]},
 {id:'p4-2-3-4',h:'香港共融健球盃',k:'facts',rows:[['簡介','健球是香港的新興運動，重視團隊合作，適合不同能力人士參與，有助加強社交技巧、自信心和團隊精神。親切邀請商界伙伴及特殊學校中學生組成共融健球隊伍，參加者由同一起點學習健球，在比賽中向公眾展現運動共融的價值。'],['對象','8–18 歲兒童及青少年'],['網頁',a('www.i-kinball.org','https://www.i-kinball.org')],['影片',a('影片故事：共融健球','https://www.youtube.com/watch?v=sIXdCusGnpY')]]},
 {id:'p4-2-3v',h:'運動零界限：感想',k:'voices',items:[['拍檔知道我受傷，他主動關心我，我十分感動。我們合作得很好，無分彼此，向著終點進發。','雞糊欖球會球員'],['除了打欖球外，我還會了解拍檔的日常生活，我知道拍檔住在哪裡了！','獅子會晨崗學校同學'],['我聽指令有進步，要聆聽拍檔的意見，我們一起合作才會成功。','特殊需要青年（帆船）'],['我和拍檔在其中一場比賽中獲得第一名，有很大的滿足感和成就感。共融、共同成長是一個獨特的體驗。','義工（帆船）'],['即使能力背景不同，但運動沒有界限，We are one and All!','義工（龍舟）'],['整體好好！計劃提升他們的能力、合作精神和自信，是我最希望見到的。','特殊需要青少年家長（龍舟）'],['我很享受和拍檔一起合作，感謝組員和我一起比賽。','香港耀能協會高福耀紀念學校同學'],['親切的健球活動能正面改變大家對不同能力背景人士的觀感，增加他們的參與機會，讓更多人認識共融。','羅兵咸永道會計師事務所義工']]},
 {id:'p4-2-register',h:'活動報名',k:'btns',links:[['學校及團體統一報名',FORM]]}]},
'p4-3':{c:'red',t:['青年發展','Youth Development'],crumb:'我們的服務',sub:'讓青少年認識共融及兒童權利，培育他們成為推動社會共融的新一代。',img:'talk',shape:'squircle',blocks:[
 {id:'p4-3-1-1',h:'青少年共融大使訓練計劃',k:'text',p:['本計劃由香港公益金資助。每年招募 120 位學生，來自 8 間主流及特殊學校，進行為期 9 個月的共融訓練。完成後，參加者會被委任為「親切共融大使」，在學校和社區推廣共融，與大眾分享共融體驗。']},
 {id:'p4-3-1-1a',h:'四個主題式互動訓練單元',k:'timeline',items:[['單元一','「共融、兒童權利你我有份」'],['單元二','「多元 360 無障礙溝通」'],['單元三','「共融新體驗」'],['單元四','「共融在社區」']]},
 {id:'p4-3-1-1b',h:'計劃目標',k:'grid',cols:3,items:[['互相認識、建立友誼','讓不同能力和背景的青少年互相認識、建立友誼，體驗平等與多元。'],['社交、溝通與領導','提升社交及溝通技巧，培養團隊合作和領導能力，促進個人成長。'],['成為共融大使','培育青少年成為共融大使，策劃大型社區活動，把共融訊息帶給市民。']]},
 {id:'p4-3-1-1c',h:'名額與費用',k:'facts',rows:[['對象','12–18 歲的青少年'],['名額及分組','共 120 位，分為 4 隊。每隊由 20 位主流中學參加者及 10 位特殊需要參加者（包括特殊學習需要學生或特殊學校學生）組成'],['費用','每位 $300，包括訓練營費、膳食、交通及活動費用'+fee+'。特殊學校參加者獲豁免收費'],['影片',a('少數族裔在社區','https://www.youtube.com/watch?v=XZnGRmfXxio')+'　'+a('視障人士在社區','https://www.youtube.com/watch?v=DeyQUoaX4cY')]],go:['報名',FORM]},
 {id:'p4-3-1-1v',h:'學生感想',k:'voices',items:[['每種兒童權利都很重要，不能缺少任何一種。','瑪嘉烈戴麟趾學校（香港紅十字會）學生'],['被忽略的感覺很可怕，所以作為共融大使，我們要消除社會上的歧視，讓所有人能夠平等地參與社會。','雅麗珊郡主學校（香港紅十字會）學生'],['學習手語十分有趣。作為共融大使，我們需要接觸不同人，因此有需要學習手語。','路德會救主學校學生'],['當遇到不公平的事時，我會尋找他人協助。','匡智張玉瓊晨輝學校學生']]},
 {id:'p4-3-1-2',h:'青少年職場共融體驗計劃',k:'text',p:['親切與不同企業伙伴合作，為智力障礙及自閉症人士提供訓練和工作體驗機會。企業會招募同事擔任導師，為學員提供指導和支援，同時增加企業接觸及認識不同背景與能力青少年的機會。']},
 {id:'p4-3-1-2a',h:'計劃目的與特色',k:'facts',rows:[['目的','增加能力障礙青少年進入職場的機會；扭轉職場中對特殊需要人士的成見，建立關愛共融的工作文化。'],['特色','1. 每位學員配對一位企業員工導師，促進彼此認識。<br>2. 按學員的特性和才能，提供合適的工作實習機會及崗位。<br>3. 提供專業及適切的工作指導，建立學員接觸社會的信心。'],['對象','就讀高中、年齡 16–20 歲的能力障礙學生。需對配對的工作有初步認識及興趣、有良好的學習及工作動機、具備獨立和自理能力、具備基本溝通及社交能力'],['影片',a('淼淼的故事','https://www.youtube.com/watch?v=RBEJpXqa6G8')+'　'+a('淦維的故事','https://www.youtube.com/watch?v=o5qy4IUjZpw')+'　'+a('鈺林的故事（上）','https://www.youtube.com/watch?v=6WjkID5rr70')+'　'+a('鈺林的故事（下）','https://www.youtube.com/watch?v=bpIOoCfac54')]],go:['報名',FORM]},
 {id:'p4-3-1-2v',h:'參加者感想',k:'voices',items:[['我很喜歡在咖啡店工作，我亦很高興能夠自力更生，貢獻社會。','匡智屯門晨崗學校參加者']]},
 {id:'p4-3-2',h:'少數族裔服務',k:'text',p:['親切為少數族裔青年提供團隊培訓、溝通工作坊、社區參與及工作實習機會，以提升他們的社交技巧和自信心，建立人際網絡，並爭取更好的教育、發展及平等參與社會的機會。同時，透過讓社區人士親身接觸，增進大眾對少數族裔的認識和接納。']},
 {id:'p4-3-2-1',h:'動起來！少數族裔青年運動導師培訓計劃',k:'text',p:['2021 年 1 月開展，與計劃伙伴及本地社企「體育係」合作，結合運動和遊戲的共融社區計劃。培訓少數族裔青年成為遊戲化導師，提升其溝通與社交技巧及自信心，並讓他們接觸主流人士、參與工作和社會，建立職場社交網絡。']},
 {id:'p4-3-2-1a',h:'五個階段',k:'timeline',items:[['1 專業訓練','學習遊戲化運動理論、帶領活動技巧及溝通技巧。'],['2 工作實習','參與遊戲化運動班實習並擔任助教，體驗真實工作並接觸主流人士。'],['3 進階訓練','參與進階技巧訓練，鞏固所學。'],['4 連結社區','在社區及主流學校策劃並帶領遊戲化運動嘉年華，將理論化為實踐。'],['5 總結及職業簡介會','嘉許參加者、分享計劃成果，並為香港運動總會與少數族裔青年提供交流平台。']]},
 {id:'p4-3-2-1b',h:'報名與故事',k:'btns',links:[['報名表格','https://forms.gle/xW8iBMjDo1oHJoFK8'],['Esha 的故事：讓每個人都閃耀','https://www.facebook.com/treatshk/posts/pfbid028rPwNgeTZwQDtYESt6ahEMuyNeXnTHxqu8TgUVwRvYwWH7XkELkswVkSY7BmTVe6l'],['Benson 的故事：貪玩的人 學為人之道','https://www.facebook.com/treatshk/posts/pfbid02WdX8tjuo6EmUcETSvU6nDJgs7KY5HtqXiFN9yNQQLcgQ8w7D4RiEAuhH7uxDgq8Sl']]},
 {id:'p4-3-2-2',h:'青少年職場共融體驗計劃（少數族裔）',k:'facts',rows:[['計劃內容','為參與企業和少數族裔青年配對，分別擔任導師及學員。參加者先接受一連串訓練工作坊，包括外展訓練，在大自然的挑戰中建立互助互信的精神；再將堅毅、面對逆境及解難的能力應用於工作體驗和生活中。'],['對象','於香港就讀中四或以上年級的少數族裔青年'],['內容','1. 學習數碼及社交媒體技巧　2. 真實工作體驗　3. 擴闊職場網絡　4. 由企業導師提供職場指導'],['查詢及報名','致電 2889 1332，或使用報名表格'],['故事',a('Shahab 的故事','https://www.facebook.com/treatshk/posts/pfbid026zc57R5oRgcJAexKPwe5TE7CgWfmSFYVzbPEcsmEtqrapBGd8mfAJu2Lwgr8srhLl')]],go:['報名',FORM]},
 {id:'p4-3-2v',h:'參加者及導師感想',k:'voices',items:[['現在有信心與來自不同文化背景的人合作；也更清楚知道自己的長處及需要改善的地方。','少數族裔職場計劃參加者'],['計劃讓我跳出舒適圈、找回真正的自己，並增強了與香港市民接觸交流的信心。','運動導師培訓計劃參加者'],['嘉年華提升了我對少數族裔青年的認識，他們主動、熱誠，講解遊戲清晰，遊戲也很好玩。','社區運動嘉年華參加者（公眾人士）'],['一個多樣化和共融的工作環境有助我們從多角度思考，產生更多具創意的想法。','羅兵咸永道會計師事務所導師']]}]},
'p4-4':{c:'green',t:['專業培訓','Professional Training'],crumb:'我們的服務',sub:'平等共融的社會有賴每個人的參與和改變。親切透過度身訂造的專業培訓，加強教育及專業人士對共融的認識。',img:'game',shape:'pebble',blocks:[
 {id:'p4-4-1',h:'機構／團體專業培訓',k:'text',p:['為教育工作者及社福同工度身訂造培訓，加深對共融工作的認識，為建立共融關愛文化打好基礎。另一目的是讓社區不同人士認識共融概念，學習相處技巧，並鼓勵更多人參與推廣共融。']},
 {id:'p4-4-1a',h:'培訓資料（機構／團體及學校人員適用）',k:'facts',rows:[['時間','每節 2 小時'],['對象','教師、社工、特殊教育需要統籌主任等人士'],['收費','每節 $2,500'+fee],['參與人數','20–30 人'],['主題','認識特殊需要、建立共融校園、共融活動設計及帶領、以 Zoom 平台互動遊歷社區；亦可按機構或團體需要特意剪裁培訓內容']],go:['報名',FORM]},
 {id:'p4-4-2',h:'學校及兒童服務工作者專業培訓',k:'text',p:['在現行融合教育政策下，教師需要按學生的特性和能力因材施教。培訓讓學校教師及社工認識不同特殊需要學生的特性，並透過體驗活動，理解學生面對的排斥及歧視，從而加強接納不同能力的學生，以正向能量推動共融校園文化。']},
 {id:'p4-4v',h:'學員感想',k:'voices',items:[['今日最大的學習是透過遊戲讓所有人平等參與及感到開心。','香港基督教青年會職員'],['我們不應輕易評價別人，應先作深入了解。','香港科技大學環球社會中心學生'],['我明白了很多為 SEN 小朋友舉辦活動要注意的事項，明白有什麼遊戲是可行或什麼是需要避免的。','香港浸會大學教育學系學生']]}]},
'p5-1':{c:'red',t:['商界伙伴','Business Partners'],crumb:'成為我們的伙伴',sub:'親切與商界建立企業社會責任（CSR）合作關係，目標是為香港每位兒童建立關愛及共融的社會。',img:'mkt',shape:'cloud',blocks:[
 {id:'p5-1-1',h:'企業成為伙伴的方式',k:'grid',cols:3,items:[['贊助共融活動','贊助共融體驗活動'],['直接捐款','支持共融服務持續舉辦','p10'],['物資捐贈','捐贈物資予親切'],['義工服務','員工義工參與共融活動'],['專業服務協助','以專業支援親切運作'],['為親切籌款','舉辦慈善活動籌募服務經費，或在場地設置捐款箱、捐贈物品']]},
 {id:'p5-1-2',h:'企業義工活動',k:'grid',cols:3,items:[['運動零界限','企業義工與有特殊需要的兒童及青少年組成拍檔，透過運動打破隔膜。','p4-2'],['創意無界限','參加者在平等互動的平台上發揮創意與潛能。','p4-2'],['「攜手結伴同樂日」社區探索活動','不同能力、背景及文化的參加者結伴走進社區，增進相互認識與接納。','p4-2']]},
 {id:'p5-1-3',h:'義工訓練',k:'text',p:['親切為商界伙伴提供義工訓練，協助他們了解不同能力及背景兒童的特點與需要，並學習如何與他們溝通及相處。']},
 {id:'p5-1-4',h:'企業社會責任合作伙伴',k:'partners',names:['友邦保險（國際）有限公司','天星銀行','阿里巴巴香港有限公司','支付寶香港','Asian Charity Services','aVstonish','安盛投資管理亞洲有限公司','Beauty Hope Industrial Limited','Bestseller United China Ltd','Beyond Coffee & Bar','Box of Hope','Chandler Macleod Group (HK) Limited','華懋集團','中信證券','城巴有限公司','Community of HK Aviation Professional','荷蘭駐香港總領事館','遊艇船主協會','Crystal Land Ltd','Daniel Ho Limited','歐華律師事務所','EBC 金融集團','愛立信有限公司','基滙資本 – 民坊','高盛（亞洲）有限責任公司','Great Entertainment Group','海濱事務委員會','白沙灣遊艇會','浩福有限公司','香港航空發動機維修服務有限公司','香港業餘龍舟總會','香港交易及結算所有限公司','香港科技探索有限公司','中國香港賽艇協會','Hong Kong, China Rowing Association','怡和餐飲集團','凱譽工作室有限公司','K11 Concepts Limited','金杜律師事務所','畢馬威會計師事務所','La Prairie Hong Kong Limited','志品集團','萬美集團','Mercedes-Benz Hong Kong Limited','Mordril Properties Limited','Mountain Coffee','三菱日聯銀行','黃廷方慈善基金','羅兵咸永道會計師事務所','St. James\'s Place Charitable Foundation','Super Impulse Limited','太古可口可樂香港','塔塔諮詢服務有限公司','天星小輪有限公司','香港兒童權利委員會','香港社會服務聯會','香港上海滙豐銀行有限公司','九龍巴士（一九三三）有限公司','Twinkle Dance Company','雅虎香港']},
 {id:'p5-1-4v',h:'義工感想',k:'voices',items:[['親切的健球活動能正面改變大家對不同能力背景人士的觀感，增加他們的參與機會，讓更多人認識共融。','羅兵咸永道會計師事務所'],['不論比賽結果如何，我們都很享受與拍檔（特殊需要青年）玩健球。因為我感覺到與隊友建立了真誠的默契。','金杜律師事務所'],['一個多樣化和共融的工作環境有助我們從多角度思考，產生更多具創意的想法。','羅兵咸永道會計師事務所']]},
 {id:'p5-1-5',h:'親切45週年紀念晚宴贊助人',k:'facts',rows:[['鑽石桌贊助','三位贊助商（名稱見原網站標誌）'],['鑽石贊助','Mrs Bertram Chan Man Mi']]},
 {id:'p5-1-6',h:'有興趣成為伙伴？',k:'text',p:['歡迎致電 2889 1332 或電郵 treats@treats.org.hk 查詢。'],go:['聯絡我們','p9']}]},
'p5-2':{c:'green',t:['親切義工','TREATS Volunteers'],crumb:'成為我們的伙伴',img:'comm',shape:'flower',blocks:[
 {id:'p5-2-1',h:'義工服務介紹',k:'text',p:['親切義工與機構一起陪伴小朋友成長，協助弱勢兒童發展潛能、建立自信，並加強與社會的連結。義工會參與不同形式、特別設計的共融服務活動。']},
 {id:'p5-2-2',h:'義工組別',k:'grid',cols:3,items:[['一般義工','親切義工分為三個組別'],['引領員','親切義工分為三個組別'],['組長','親切義工分為三個組別']]},
 {id:'p5-2-3',h:'義工簡介會、訓練及申請說明',k:'text',p:['機構定期舉辦義工簡介會及相關訓練。如有興趣成為親切義工，請填寫「親切義工簡介會及訓練申請表」，負責同事將會盡快與你聯絡。'],go:['聯絡我們','p9']}]},
'p6-1':{c:'blue',t:['親切共融潛能獎學金','Potential Scholarship'],crumb:'共融資源',img:'cheer',shape:'bean',blocks:[
 {id:'p6-1-1f',h:'',k:'figure',src:'img/sch-potential-2026.jpg',alt:'親切共融潛能獎學金計劃 2026'},
 {id:'p6-1-1',h:'親切共融潛能獎學金：計劃介紹',k:'text',p:['親切特別設立此計劃，旨在嘉許和支持本地有特殊教育需要及少數族裔的青少年發展潛能、一展所長。計劃透過提供更多資源和學習機會，讓得獎者發展多元範疇的潛能，從而提升平等參與，並推動大眾對共融社會的認同。']},
 {id:'p6-1-1a',h:'名額、金額與申請資格',k:'facts',rows:[['名額','每年最多 10 名，以申請年度計算'],['金額','每名得獎者可獲港幣 $10,000，可用於課程或訓練費用、與課程或訓練相關的物資，以及膳食和交通津貼'],['申請資格','1. 有特殊教育需要及／或屬少數族裔的青少年<br>2. 曾參與親切的活動，並展示積極的學習態度及相關潛能<br>3. 有興趣於運動、藝術與設計、資訊科技或其他課外活動的發展和學習'],['網上申請',a('scholarship.treats.org.hk','https://scholarship.treats.org.hk/')+'<br><img src="img/sch-qr.png" alt="網上申請 QR Code" style="width:130px;margin-top:8px;border-radius:12px;background:#fff">']]},
 {id:'p6-1-1g',h:'重要日期 2026',k:'dates',items:[['2月13日','截止報名',1],['2月下旬','初步評選，公佈入圍面試名單',2],['3月','獎學金面試日',3],['4月前','公佈獎學金結果',4],['6月','發放獎學金；獎學金頒獎禮',5]]},
 {id:'p6-1-1h',h:'申請流程',k:'steps',items:['報名','初步評選','面試','公佈獎學金結果','簽署獎學金同意書','獎學金發放']},
 {id:'p6-1-1b',h:'得獎者故事',k:'stories',items:[['關日星','img/sch-yatsing.jpg','日星熱愛咖啡拉花，雖有輕度智力障礙，仍堅持追求夢想。他由沖泡咖啡開始從零學起，即使打奶泡時因手震遇到困難，仍每週利用課餘時間到咖啡店練習。他希望日後能為客人調製香醇咖啡，傳遞溫暖與熱情。','https://www.facebook.com/photo?fbid=894172279413681&set=a.448355150662065'],['梁永恩','img/sch-wingyan.jpg','永恩剛從中學畢業，患有自閉症及言語障礙，但在音樂中找到自信與表達方式。他六歲開始學習鋼琴，曾代表香港赴美國參加世界表演藝術錦標賽，並創作歌曲《Omicron》。他多次到院舍為長者和殘障人士表演，希望透過音樂提高大眾對弱勢社群的關注。','https://www.facebook.com/photo/?fbid=900345798796329&set=a.448355150662065']]},
 {id:'p6-1-1c',h:'申請文件',k:'ulist',rows:[['申請指引','PDF',U+'2025/12/%E8%A6%AA%E5%88%87%E5%85%B1%E8%9E%8D%E6%BD%9B%E8%83%BD%E7%8D%8E%E5%AD%B8%E9%87%91%E8%A8%88%E5%8A%83%E7%94%B3%E8%AB%8B%E6%8C%87%E5%BC%95-1.pdf'],['申請表格','PDF',U+'2025/12/%E8%A6%AA%E5%88%87%E5%85%B1%E8%9E%8D%E6%BD%9B%E8%83%BD%E7%8D%8E%E5%AD%B8%E9%87%91%E8%A8%88%E5%8A%83%E7%94%B3%E8%AB%8B%E8%A1%A8%E6%A0%BC-1.pdf'],['計劃海報','PDF',U+'2025/12/Poster-2026.pdf'],['計劃單張','PDF',U+'2025/12/Leaflet-2026.pdf'],['常見問題 FAQ','PDF',U+'2025/12/%E5%B8%B8%E8%A6%8B%E5%95%8F%E9%A1%8C-FAQ-1.pdf'],['網上申請步驟','PDF',U+'2025/12/網上申請步驟.pdf']]},
 {id:'p6-1-1e',h:'2025 年得獎者合照',k:'figure',src:'img/sch-potential-2025.jpg',alt:'親切共融潛能獎學金計劃 2025 得獎者合照'},
 {id:'p6-1-1d',h:'歷屆得獎名單',k:'ulist',rows:[['2025','PDF',U+'2025/06/Scholarship-2025-得獎名單.pdf'],['2024','PDF',U+'2024/11/親切共融潛能獎學金計劃2024得獎名單-1.pdf'],['2023','PDF',U+'2023/06/親切共融潛能獎學金2023-得獎名單.pdf'],['2022','PDF',U+'2023/04/親切共融潛能獎學金2022-得獎名單.pdf'],['2021','PDF',U+'2023/04/親切共融潛能獎學金2021-得獎名單.pdf']]},
 {id:'p6-1-2f',h:'',k:'figure',src:'img/sch-leader-2026.png',alt:'親切共融領袖獎學金計劃 2026'},
 {id:'p6-1-2',h:'親切共融領袖獎學金計劃 2026',k:'facts',rows:[['計劃介紹','表揚及嘉許熱心服務和關心社會的特殊需要青少年。得主除獲得獎學金外，還可參與領袖訓練和工作體驗，提升領導和溝通技巧，建立職業發展能力，擴展社交網絡，並成為推動共融文化的未來領袖。'],['獎學金金額','港幣 $5,000'],['申請資格','1. 中一至中六，並具特殊教育需要的學生<br>2. 具熱心服務學校或社區的經驗<br>3. 具備熱誠，推動社會共融'],['贊助','本計劃由 Mordril Properties Limited 慷慨贊助及支持'],['申請文件','請於下載區查閱申請指引、申請表格、計劃海報、計劃單張及常見問題（FAQ）']],go:['前往下載區','p7']}]},
'p6-2':{c:'green',t:['Fun To Go! 共融遊樂 Guide','Fun To Go! Guide'],crumb:'共融資源',sub:'香港首個一站式共融遊樂資訊流動應用程式（2021 年 10 月推出）',img:'game',shape:'cloud',blocks:[
 {id:'p6-2-1',h:'應用程式介紹',k:'text',p:['用家只需數個按鍵，即可搜尋共融遊樂地點的設施、交通資訊及建議路線，方便傷健兒童及家庭規劃外出活動。'],},
 {id:'p6-2-x',h:'主要功能',k:'grid',cols:3,items:[['p6-2-2 無障礙共融遊樂資訊','選擇地區及遊樂點類型，搜尋戶外及室內的遊樂地點，並查閱設施及交通資訊。'],['p6-2-3 建議遊樂路線','路線分為動感型、知識型、郊外探索型及休閒型四類。'],['p6-2-4 共融指數評分','根據無障礙度、易達度及多元化度三大指標，為所有遊樂點及路線評分。'],['p6-2-5 Google 地圖連結','應用程式可直接連結 Google 地圖。'],['p6-2-6 最新共融活動資訊及報名','提供最新共融活動資訊，並可報名參加。','p3-1']]},
 {id:'p6-2-u',h:'使用方法',k:'timeline',items:[['1','從 Google Play 或 App Store 下載應用程式。'],['2','選擇地區及遊樂點類型進行搜尋。'],['3','查閱地點的設施、交通資訊及共融指數評分，或瀏覽建議路線。'],['4','按需要透過 Google 地圖規劃行程。']]},
 {id:'p6-2-d',h:'下載',k:'btns',links:[['Google Play','https://play.google.com/store/apps/details?id=com.treats.hiking&pli=1'],['App Store','https://apps.apple.com/hk/app/共融遊樂guide/id1576627640']]},
 {id:'p6-2-v',h:'用家回饋',k:'voices',items:[['應用程式讓我們可以事先了解無障礙設施及遊玩項目，有助我們更常前往郊外地點，而不只局限於商場。','肢體傷健兒童的家長'],['只需一個應用程式就能找到想去的地方。','主流兒童']]}]},
'p6-3':{c:'red',t:['「共融在香港」研究報告','Inclusion in Hong Kong'],crumb:'共融資源',img:'talk',shape:'squircle',blocks:[
 {id:'p6-3-1',h:'親切委託大學進行之研究報告',k:'ulist',rows:[['2023　《運動零界限》對社會共融的影響（香港浸會大學教育學系）','探討共融運動（健球、欖球、龍舟、帆船）如何在疫情期間及疫後協助能障青年減少隔膜、提升自信。',U+'2023/04/親切運動零界限共融運動對社會共融的影響及成效研究-TREATS-Sports-for-All-Report.pdf'],['2008　共融體驗活動對兒童及青少年的轉變及影響（香港浸會大學兒童發展研究中心）','本港首個此類研究：親身接觸、越早接觸、生活化的接觸，對建立共融社會及減少偏見和歧視最為有效。研究摘要（中文）',U+'2023/04/TREATS_ResearchAbstract_2008_chi.pdf'],['2006　「共融在香港」研究調查（香港浸會大學兒童發展研究中心）','全港首個「共融在香港」研究：市民渴望共融社會，並認為共融對兒童十分重要。（英文版）',U+'2023/04/Research-Report-on-Integration-in-HK_A-Descriptive-Study.pdf']]},
 {id:'p6-3-2',h:'親切發表之研究報告',k:'ulist',rows:[['2021　香港少數族裔職場現況研究','訪問 621 名華裔市民、138 名少數族裔人士；華人對少數族裔存有誤解和偏見，少數族裔在職場上受到不公平對待。',U+'2023/04/YD_2022_香港少數族裔職場現況研究.pdf'],['2021　香港智障人士參與社區體育運動研究','訪問 1,101 名市民、423 名智障人士家長；智障人士參與社區體育的選擇少，缺乏自主權。',U+'2023/04/YD_2021_香港智障人士參與社區體育運動研究.pdf'],['2019　香港人士對自閉症人士參與社區的基線調查','訪問 1,025 名市民、374 名自閉症人士家長；受訪者認同參與社區的重要性，但缺乏彼此接觸的機會。',U+'2023/04/YD_2019_香港人士對自閉症人士參與社區的基線調查.pdf'],['2018　商場無障礙環境調查：肢障及視障人士參與現況','實地考察全港 25 個商場；約七成商場的設計未達標。',U+'2023/04/YD_2018_商場無障礙環境調查-肢礙及視障人士參與現況.pdf'],['2017　智力障礙青少年參與休閒活動現況調查','問卷訪問超過 1,000 名市民；智障青少年飽受歧視和排斥，社交圈子狹窄。',U+'2023/04/YD_2017_智力障礙青少年參與休閒活動現況調查.pdf'],['2016　香港在職人士對智障人士工作的看法和態度基線調查','問卷訪問超過 840 名主流在職人士；普遍存在偏見，共融職場尚未實現。',U+'2023/04/YD_2016_香港在職人士對智障人士工作的看法和態度基線調查.pdf'],['2015　關注 SEN 學生校園共融和排斥現況','訪問 690 名中學生；約三成 SEN 學生表示曾在校受欺凌，約兩成表示若可選擇，寧願不上學。',U+'2023/04/YD_2015_關注SEN學生校園共融和排斥現況.pdf'],['2012　無障礙都市調查結果','考察 39 個食肆、購物及康樂地點；近六成市民認為社區無障礙設施不足。',U+'2023/04/YD_2012-「無障礙都市調查結果」發佈會.pdf']]}]},
'p6-4':{c:'blue',t:['居家親子創意遊樂點子','Play-at-home Ideas'],crumb:'共融資源',sub:'這系列影片旨在讓不同背景、不同能力的家庭在家中也能一起遊玩，內容包括個人運動挑戰和親子家居遊戲。',img:'kin',shape:'pebble',blocks:[
 {id:'p6-4-1',h:'遊戲化運動',k:'ulist',rows:[['p6-4-1-1 轉開個膊頭','YouTube 影片','https://www.youtube.com/watch?v=H0IzqKGO0H4&list=PL78JARKlvtf7KZbh5bzr6Oi_5GkTTBedc'],['p6-4-1-2 不能跌的鞋','YouTube 影片','https://www.youtube.com/watch?v=oMCJHm6D-cE&list=PL78JARKlvtf7KZbh5bzr6Oi_5GkTTBedc&index=3'],['「瓶」板支撐','YouTube 影片','https://www.youtube.com/watch?v=QsbFyFhEn5w&list=PL78JARKlvtf7KZbh5bzr6Oi_5GkTTBedc&index=6']]},
 {id:'p6-4-2',h:'創意無界限',k:'ulist',rows:[['p6-4-2-1 乒乓發射器','YouTube 影片','https://www.youtube.com/watch?v=Wm-DAZnowoM'],['p6-4-2-2 七彩拋圈圈','YouTube 影片','https://www.youtube.com/watch?v=zPss5zzvx4Q'],['p6-4-2-3 大笨象圈圈','YouTube 影片','https://www.youtube.com/watch?v=ifE30ZKIinE']]},
 {id:'p6-4-3',h:'更多影片',k:'btns',links:[['親切 YouTube 播放清單','https://www.youtube.com/@TreatsHK/playlists']]}]},
'p7':{c:'red',t:['文件與刊物','Documents & Publications'],crumb:'首頁',img:'mkt',shape:'cloud',blocks:[{id:'p7',h:'',k:'docs2',groups:[
 ['p7-1','年度報告與服務回顧',[['2024–2025 年度報告','年度報告',U+'2025/11/treats_AR_24-25_r6.pdf'],['2023–2024 年度報告','年度報告','https://treats.org.hk/en/wp-content/uploads/2024/11/treats_AR_23-24_r6.pdf'],['2022–2023 年度報告','年度報告',U+'2023/10/treats_AR_22-23_r3_AW.pdf'],['審計財務報表 2025','財務報告',U+'2025/11/2024-2025-Auditor-Report_annual-report.pdf'],['審計財務報表 2024','財務報告','https://treats.org.hk/en/wp-content/uploads/2024/11/Auditor-Report_2023-24.pdf'],['審計財務報表 2023','財務報告',U+'2023/10/2022-2023-Annual-Audit-Report.pdf'],['2024–2025 年度服務回顧','撮要版',U+'2026/03/Annual-review-2024-25.pdf'],['2023–2024 年度服務回顧','撮要版',U+'2025/04/TREATS-Annual-Services-Review-2324_-online-ver.pdf'],['2022–2023 年度服務回顧','撮要版',U+'2024/03/5778_leaflet_FINAL.pdf']]],
 ['p7-2','活動資料',[['親切共融活動介紹及報名表格 2026–2027','共融活動介紹',U+'2026/05/親切共融活動小冊子-2026-2027.pdf'],['青少年共融大使訓練計劃 2026–27 小冊子','單張連報名表格',U+'2026/07/「青少年共融大使訓練計劃2026-27」單張連報名表格_compressed.pdf'],['《Z-Force: Genesis 始元篇》桌上互動共融教育遊戲','小冊子',U+'2025/01/「Z-FORCE-GENESIS-始元篇」桌上互動共融教育遊戲.pdf'],['運動零界限','活動小冊子',U+'2023/05/Sport-For-all-leaflet-2020_v5.pdf']]],
 ['p7-3','常用表格（捐款表格）',[['親切 單次捐款表格（個人）','2025',U+'2025/11/2.-親切單次捐款表格-TREATS-One-Off-Donation-form_20251125.pdf'],['親切 單次捐款表格（公司／團體）','2021',U+'2021/02/親切共融有您-單次捐款表格-公司及團體.pdf'],['親切「共融有您」月捐計劃：每月捐款表格','2025',U+'2025/11/1.-親切共融有您月捐計劃-每月捐款表格-TREATS-Monthly-Donation-Campaign-Monthly-Donatio.pdf']]],
 ['p7-4','私隱與個人資料',[['個人資料使用守則','政策文件',U+'2020/04/Personal-Data-Privacy-Ordinance.pdf']]],
 ['p7-5','通訊與出版物',[['2026 年 7 月號：【親切共融潛能獎學金計劃 2026】讓每一份天賦綻放光芒','親切通訊','https://5c033.r.a.d.sendibm1.com/mk/mr/sh/1t6AVsd2XFnIGLpgARqzLRsiz1uqFH/L17wkWXabR0f'],['2026 年 6 月號：第一屆「親切共融領袖獎學金計劃」頒獎禮圓滿舉行','親切通訊','https://5c033.r.bh.d.sendibt3.com/mk/mr/sh/1t6AVsg9Ynm8rZ3PJGgVwtbuSixMrT/o6pWt75ScRSy'],['2026 年 5 月號：【親切共融帆船隊】24 小時慈善小艇賽圓滿結束','親切通訊','https://5c033.r.a.d.sendibm1.com/mk/mr/sh/1t6AVsd2XFnIGLpgARqzLRsiz1uqFH/bFohFuWgOMRC'],['由支持到同行：新一年・新挑戰 — 馬仔　親切義工','親切人物訪問','https://5c033.r.a.d.sendibm1.com/mk/mr/sh/1t6AVsd2XFnIGLo3ZIwzUdWlEvcoGh/rBQkCPB-BRrT'],['一枝枝子，連於大樹 — 關太　特殊學習需要學生家長','親切人物訪問','https://5c033.r.a.d.sendibm1.com/mk/mr/sh/1t6AVsd2XFnIGLo3ZIwzUdWlEvcoGh/Hb-loTDTvMVY'],['揮桿之間，走出自己的方向 — 黃駿業　親切共融潛能獎學金得獎者','親切人物訪問','https://5c033.r.a.d.sendibm1.com/mk/mr/sh/1t6AVsd2XFnIGLo3ZIwzUdWlEvcoGh/KUMzBc9Hzaqj'],['親親。融融：45 個親切故事','45 週年人物誌（網上翻閱）','https://online.fliphtml5.com/nqgtm/oyvj/'],['親親孩子説故事：讀出關鍵品格','出版書籍訂購表',U+'2020/04/親親孩子説故事-讀出關鍵品格.pdf']]]]}]},
'p8':{c:'green',t:['媒體報道','In the Media'],crumb:'首頁',img:'team',shape:'flower',blocks:[
 {id:'p8-1',h:'各項媒體報道文章及影音連結',k:'ulist',rows:[
 ['SCMP – Operation Santa Claus: Hong Kong children find joy and inclusion in mochi-making','2026.02.28','https://www.scmp.com/news/hong-kong/society/article/3344956/operation-santa-claus-hong-kong-children-find-joy-and-inclusion-mochi-making'],
 ['SCMP – Hong Kong students, bankers have a ball for charity with Operation Santa Claus','2026.01.02','https://www.scmp.com/news/hong-kong/society/article/3338327/hong-kong-students-bankers-have-ball-charity-operation-santa-claus'],
 ['Now TV – 杏林在線：帆船無障礙','2025.01.10','https://www.youtube.com/watch?v=r5Wc48RDw54&list=PLDQ1DoSV23dO_uuLyN6exbqJaogMIDadH'],
 ['RTHK – #Hashtag Hong Kong','2025.01.05','https://www.facebook.com/share/p/16nXaokBfm/'],
 ['香港01 – 專訪｜自閉症男生加入帆船隊後蛻變成引導者 大風大浪仍無所畏懼','2023.12.27','https://www.hk01.com/親子/968714'],
 ['香港01 – 專訪｜受校園霸凌被誣衊考試抄襲 SEN生感自卑 轉校後如獲新生','2023.10.18','https://www.hk01.com/親子/926627'],
 ['商業電台 – 同途有心人：童心同行','2023.04.02','https://www.facebook.com/treatshk/posts/pfbid0zVYkQreSxop71Bc8WqjPGvKgoaSWWeJHGaX71k6BjmEernjpuoofDkdkEsyGdP3Cl'],
 ['東網 – 新冠疫情下人際關係疏離　浸大研究證共融運動增自信','2023.03.18','https://hk.on.cc/hk/bkn/cnt/news/20230318/bkn-20230318154103802-0318_00822_001.html'],
 ['香港商報 – 浸大與親切合辦兒童共融創新會議','2021.12.05','http://www.hkcd.com/hkcdweb/content/2021/12/05/content_1309966.html'],
 ['運動筆記 – 【挑戰賽圓滿舉行】能力障礙青年與主流人士組隊乘風破浪 啟動共融潛能','2021.11.16','https://hk.running.biji.co/index.php?q=news&act=info&id=5110'],
 ['香港01 – 調查指本港存職場及社會歧視：「街上落貨畀人問候叫我返鄉下！」','2021.05.22','https://www.hk01.com/18區新聞/628377'],
 ['香港01 – 上堂學打乒乓波遭教練孤立　近半智障人士參與體育活動被排斥','2021.01.17','https://www.hk01.com/18區新聞/575621'],
 ['SCMP – Strangers in their own city: charity fights for Hong Kong\'s ethnic minority members through Operation Santa Claus funding','2020.11.25','https://www.scmp.com/news/hong-kong/society/article/3111139/strangers-their-own-city-charity-fights-hong-kongs-ethnic'],
 ['體路 – 能障青年與主流人士組隊揚帆出賽 啟動共融潛能','2020.11.17','https://www.sportsroad.hk/archives/316120'],
 ['親子王 – 破解偏見撃出友誼','2020.02.20','https://www.facebook.com/smartparentshk/videos/727065417698051/'],
 ['東網透視 – 自閉青年職場實習　學會沖咖啡與遊客溝通','2019.10.05','https://hk.on.cc/hk/bkn/cnt/news/20191005/bkn-20191005001402974-1005_00822_001.html']]}]},
'p10':{c:'red',t:['捐款支持','Donate'],crumb:'首頁',sub:'親切的共融服務每年惠及超過 158,500 名兒童及青少年。服務經費全數來自善心人士的捐款。',img:'cheer',shape:'flower',blocks:[
 {id:'p10-1',h:'捐款用途介紹',k:'text',p:['您的捐款協助兒童擺脫排斥，在關愛、共融的社會中成長。約兩成經費來自香港公益金及香港賽馬會慈善信託基金，其餘來自個人及企業捐款；每年超過八成善款用於直接服務。']},
 {id:'p10-2',h:'單次捐款／月捐',k:'donate2'},
 {id:'p10-3',h:'月捐計劃「共融有您」：每月金額與服務成效',k:'tiers',items:[['$200','每月（約每日 $7）','為 80 名兒童提供共融教育活動，減少偏見與歧視'],['$300','每月（約每日 $10）','為 160 名弱勢兒童提供戶外體驗活動'],['$500','每月（約每日 $16）','為 580 名弱勢兒童提供社區探索活動']]},
 {id:'p10-3b',h:'月捐查詢',k:'facts',rows:[['月捐專線','3427 2024'],['籌款許可','親切的街道籌款已獲社會福利署發出「公開籌款許可證」，市民可於政府網頁查詢籌款活動及財務資料。']]},
 {id:'p10-4',h:'其他捐款方式',k:'tabsx',tabs:[
  ['轉數快 FPS',`<div class="facts"><div><b>轉數快 ID</b><span style="font:700 26px Fredoka">106689029</span></div><div><b>收據</b><span>如需正式收據，請截圖成功轉帳頁面，並連同中英文姓名、聯絡電話及電郵地址電郵至本會。</span></div></div>`],
  ['PayMe',`<div class="facts"><div><b>方法</b><span>使用 PayMe 掃描原網站頁面上的 PayCode 即可捐款。</span></div><div><b>收據</b><span>如需收據，請在付款訊息欄輸入英文全名及電郵地址。</span></div></div>`],
  ['支付寶香港',`<div class="facts"><div><b>方法</b><span>掃描二維碼，進入親切的頁面，可選擇單次或每月捐款，並可在程序中選擇是否需要正式收據。</span></div></div>`],
  ['7-Eleven',`<div class="facts"><div><b>方法</b><span>憑慈善捐款條碼，到全港任何一間 7-Eleven 付款。</span></div><div><b>收據</b><span>請在店方發出的收據上寫明中英文姓名、聯絡電話及電郵或郵寄地址，然後電郵或郵寄給本會。</span></div></div>`],
  ['支票／直接存款',`<div class="facts"><div><b>支票</b><span>抬頭請寫「親切」，郵寄至本會。如需收據，請在支票背面寫上中英文姓名、聯絡電話及電郵或郵寄地址。</span></div><div><b>直接存款</b><span>香港上海滙豐銀行，戶口號碼 <b style="font-family:Fredoka">004-111-158382-001</b>。如需收據，請在存款收據正本寫上資料，電郵或郵寄給本會。</span></div><div><b>郵寄地址</b><span>TREATS – FREEPOST NO. 20 EDO（免貼郵票，只限本地信件）</span></div></div>`]]},
 {id:'p10-4b',h:'稅項扣減及收據',k:'facts',rows:[['稅務','親切是香港註冊慈善團體（《稅務條例》第 88 條，檔案編號 91/1637）。單次或累積捐款達港幣 $100 或以上，可憑正式收據申請稅項扣減。'],['年度收據','通常於每年四月底發出，涵蓋上一年四月至本年三月的全年捐款，以郵寄或電郵寄出。'],['收據抬頭','可選擇捐款者或付款者名稱。未註明時，將以付款者名義開立。家長代子女捐款，或以親友名義捐款作為禮物，均可在捐款表格中指定。']]},
 {id:'p10-5',h:'捐款常見問題',k:'faq',items:[['銀行會收取手續費嗎？','信用卡捐款時，銀行只向親切收取費用。銀行戶口自動轉賬捐款時，個別銀行可能在開戶、轉賬失敗時收費，請向所屬銀行查詢。此安排只適用於香港銀行戶口。'],['如何更改捐款者資料？','致電捐款熱線 (852) 3427 2024，或電郵本會。辦理需時約 10 個工作天。'],['捐款可以扣稅嗎？','可以。捐款港幣 $100 或以上，憑收據可扣減稅款。'],['年度收據何時發出？','每年四月底發出，涵蓋上一年四月至本年三月。'],['善款來源及財政狀況如何？','約兩成經費來自香港公益金及香港賽馬會慈善信託基金，其餘來自個人及企業捐款。每年超過八成善款用於直接服務。本會每年出版年報，財務報告由畢馬威會計師事務所審核。執行委員會監察工作與財務，成員來自學術、專業、商界等不同界別。'],['為何需要向公眾籌款？政府不應提供足夠資源嗎？','政府服務主要側重治療和補救，針對兒童共融及共融教育的慈善機構相對缺乏。親切不接受政府經常性資助，以便更快推動工作並提供更具彈性的服務。'],['捐款者有哪些權益？','瞭解服務宗旨、捐款用途及機構運用善款的能力；查閱年報；確保捐款用於指定用途；知悉執行委員會成員身分及職責；知悉籌款人員是義工、職員或受聘代理人；獲得適當鳴謝及收據，並可選擇不公開身分；個人資料受保密；查詢事宜可獲迅速、誠實的回覆。'],['如何更改捐款金額或暫停月捐？','致電捐款熱線 (852) 3427 2024，或電郵本會辦理。所有更改或暫停均會以書面或電郵確認，手續約需 10 個工作天。']]}]},
'p12-4':{c:'blue',t:['條款及細則','Terms & Conditions'],crumb:'首頁',img:'mkt',shape:'squircle',blocks:[
 {id:'p12-4-1',h:'資料準確性及責任',k:'text',p:['網站資料僅供一般參考之用。親切已盡力確保資料準確，但不作任何保證。對於錯誤、遺漏或失實陳述，以及因使用或誤用網站資料而引致的損失或損害，親切概不承擔任何責任。']},
 {id:'p12-4-2',h:'外部超連結',k:'text',p:['網站可能提供或協助提供通往外部網站的超連結，以方便查閱。提供連結並不代表親切認同或不認同外部網站的內容。對於因使用外部網站內容而引致的損失或損害，親切同樣不承擔責任。']},
 {id:'p12-4-3',h:'語言版本',k:'text',p:['條款及細則已譯為中文。如中英文版本有任何抵觸或不相符之處，以英文版本為準。']},
 {id:'p12-4-4',h:'接納條款及修訂',k:'text',p:['使用網站即表示用戶無條件接受上述免責條款，以及親切不時作出的修改或修訂。親切可在無須事先通知用戶的情況下修訂條款，建議用戶定期查閱該頁面。']}]},
'p12-5':{c:'green',t:['私隱條例','Privacy Policy'],crumb:'首頁',img:'talk',shape:'pebble',blocks:[
 {id:'p12-5-0',h:'私隱承諾',k:'text',p:['依據《個人資料（私隱）條例》，親切承諾保障網頁使用者的個人資料。除非獲得使用者同意，所收集的資料只用於慈善籌款及機構指定的活動，不會向外披露。']},
 {id:'p12-5-1',h:'私隱條款',k:'faq',items:[['基本條款','資料由瀏覽者自願提供，可能包括姓名、職銜、公司、地址、電話及電郵，只用於頁面所列的捐款及指定活動。機構不會出售、出租或轉交資料予其他機構。'],['資料收集及使用','伺服器會記錄瀏覽者的一般資料，例如網域名稱及瀏覽的頁面，這些資料只用於統計，如每日瀏覽人數及瀏覽器類別。'],['儲存及取用','個人資料存放於伺服器並限制存取，只有有合法職務需要的指定員工或代理人才可查閱。違反私隱規定者將受紀律或法律處分。'],['連接／更新條例','除法律、司法或政府調查所需外，機構不會向第三方透露個人資料。如需更正或更新資料，可電郵或寫信至機構辦公地址。'],['版權','網站內容，包括文字、圖像、照片及資料匯編，均受版權保護，親切為擁有人。未經事先書面授權，禁止複製、改編、派發、發布或向公眾提供。'],['刪除條例','網站本身沒有提供刪除個人資料的功能，但可以電郵或寫信要求從資料庫移除個人資料，機構會尊重有關要求。'],['線上登記','網上登記及捐款使用 PayPal 作為付款閘道，資料在互聯網上以加密方式傳送。'],['與其他網址的連結','網站可能連結至其他網站，機構會盡量選擇重視私隱的網站，但不對其內容或私隱做法負責。'],['取消郵遞','如不想再收到捐款通訊或服務推廣電郵，可電郵或寫信通知機構。']]}]}
};
KINDS.figure=b=>`<figure class="rv" style="margin:0"><img src="${b.src}" alt="${b.alt||''}" style="width:100%;border-radius:28px;box-shadow:var(--shadow)"></figure>`;
KINDS.stories=b=>`<div class="grid g2">${b.items.map(([n,img,tx,u],i)=>`<div class="card rv" style="transition-delay:${i*80}ms"><div class="im" style="aspect-ratio:4/3"><img src="${img}" alt="${n}"></div><div class="bd"><span class="dt">得獎者</span><h3>${n}</h3><p>${tx}</p><a class="more" href="${u}" target="_blank" rel="noopener">閱讀${n.slice(1)}的故事</a></div></div>`).join('')}</div>`;
(function(){const s=document.createElement('style');s.textContent=`.dates{display:grid;grid-template-columns:repeat(5,1fr);gap:0;background:linear-gradient(90deg,#0b2a55,var(--blue));border-radius:30px;padding:30px 12px 26px;color:#fff;position:relative;overflow:hidden}.dates .d{padding:0 14px;border-left:3px solid rgba(255,255,255,.45);min-height:180px;position:relative;display:flex;flex-direction:column;transition:.35s cubic-bezier(.3,1.5,.5,1)}.dates .d:hover{transform:translateY(-6px);border-color:#fff}.dates .d b{font-family:var(--disp);font-weight:400;font-size:22px;line-height:1.3;color:#ffd9df}.dates .d span{margin-top:auto;font-size:15px;line-height:1.6;padding-top:60px}.dates .d:nth-child(2) span{padding-top:100px}.dates .d:nth-child(3) span{padding-top:30px}.dates .d:nth-child(4) span{padding-top:130px}.dates .d:nth-child(5) span{padding-top:40px}.steps{display:flex;gap:0;flex-wrap:nowrap;margin-top:6px}.steps .st{flex:1;min-width:0;height:96px;display:flex;align-items:center;justify-content:center;text-align:center;padding:0 22px 0 30px;font-weight:700;font-size:15px;line-height:1.35;color:#fff;background:var(--blue);clip-path:polygon(0 0,86% 0,100% 50%,86% 100%,0 100%,14% 50%);margin-left:-26px;transition:.35s cubic-bezier(.3,1.5,.5,1);position:relative}.steps .st:first-child{margin-left:0;clip-path:polygon(0 0,86% 0,100% 50%,86% 100%,0 100%)}.steps .st:nth-child(2){background:#2d6ea6}.steps .st:nth-child(3){background:var(--blue)}.steps .st:nth-child(4){background:#2d6ea6}.steps .st:nth-child(5){background:var(--blue)}.steps .st:nth-child(6){background:var(--red)}.steps .st:hover{transform:translateY(-8px) scale(1.04);z-index:2;filter:brightness(1.12)}.steps .st i{position:absolute;left:36px;top:8px;font:700 12px Fredoka;opacity:.8;font-style:normal}(max-width:900px){.dates{grid-template-columns:1fr;gap:18px}.dates .d{min-height:0}.dates .d span{padding-top:10px!important;margin-top:6px}.steps{flex-direction:column}.steps .st{margin-left:0!important;margin-top:-10px;clip-path:none!important;border-radius:20px;height:64px}}`;document.head.appendChild(s)})();
KINDS.dates=b=>`<div class="dates">${b.items.map(([m,t],i)=>`<div class="d rv" style="transition-delay:${i*90}ms"><b>${m}</b><span>${t}</span></div>`).join('')}</div>`;
KINDS.steps=b=>`<div class="steps">${b.items.map((t,i)=>`<div class="st rv pop" style="transition-delay:${i*90}ms"><i>0${i+1}</i>${t}</div>`).join('')}</div>`;
/* faq kind: accordion */
KINDS.faq=b=>b.items.map(f=>`<div class="acc rv"><button>${f[0]}<i>+</i></button><div class="ab"><div>${f[1]}</div></div></div>`).join('');
Object.assign(PAGES,P);
})();
/* split the two scholarships into separate pages */
(function(){
  const a=PAGES['p6-1'];
  PAGES['p6-1b']={...a,c:'red',t:['親切共融領袖獎學金','Leader Scholarship'],img:'talk',shape:'squircle',blocks:a.blocks.filter(b=>/^p6-1-2/.test(b.id))};
  a.blocks=a.blocks.filter(b=>!/^p6-1-2/.test(b.id));
  a.subset=PAGES['p6-1b'].subset=['p6-1','p6-1b'];
})();
/* redesign: important dates + application steps */
(function(){const s=document.createElement('style');s.textContent=`
.dates{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;position:relative;padding:40px 0 0;background:none;border-radius:0;color:var(--ink);overflow:visible}
.dates::before{content:'';position:absolute;left:3%;right:3%;top:17px;height:6px;border-radius:6px;background:repeating-linear-gradient(90deg,var(--blue) 0 16px,transparent 16px 26px);opacity:.35}
.dates::after{content:'';position:absolute;left:3%;top:17px;height:6px;width:0;border-radius:6px;background:linear-gradient(90deg,var(--blue),var(--green),var(--red));animation:grow 2.2s .3s cubic-bezier(.2,.8,.2,1) forwards}
@keyframes grow{to{width:94%}}
.dates .d{--c:var(--blue);background:#fff;border:0;border-top:6px solid var(--c);border-radius:8px 8px 28px 28px;padding:22px 18px 22px;box-shadow:var(--shadow);position:relative;min-height:150px;display:block;transition:.4s cubic-bezier(.3,1.6,.5,1)}
.dates .d:nth-child(3){--c:var(--green)}.dates .d:nth-child(5){--c:var(--red)}.dates .d:nth-child(1){--c:var(--red)}
.dates .d::before{content:'';position:absolute;top:-42px;left:22px;width:24px;height:24px;border-radius:50%;background:var(--c);border:5px solid var(--paper);box-shadow:0 0 0 3px var(--c)}
.dates .d:nth-child(2)::before{border-radius:7px;transform:rotate(14deg)}.dates .d:nth-child(4)::before{border-radius:7px;transform:rotate(14deg)}
.dates .d:hover{transform:translateY(-10px) rotate(-1.2deg);border-left:0}
.dates .d b{display:block;font-family:var(--disp);font-weight:400;font-size:30px;line-height:1.2;color:var(--c);margin-bottom:8px}
.dates .d span{display:block;margin:0;padding:0!important;font-size:15px;line-height:1.7;color:var(--ink)}
.steps{filter:drop-shadow(0 10px 12px rgba(0,80,140,.22));margin-top:10px}
.steps .st{height:112px;font-size:16px;gap:8px;background:linear-gradient(135deg,#1a78b9,#00508C)!important;padding:0 26px 0 34px}
.steps .st:nth-child(4),.steps .st:nth-child(5){background:linear-gradient(135deg,#5cc04d,#3FA535)!important}
.steps .st:nth-child(6){background:linear-gradient(135deg,#ff4a68,#E4002B)!important}
.steps .st i{position:static;display:grid;place-items:center;flex:none;width:30px;height:30px;border-radius:50%;background:rgba(255,255,255,.28);font:700 14px Fredoka;opacity:1}
.steps .st:hover{transform:translateY(-10px) scale(1.05)}
@media(max-width:900px){.dates{grid-template-columns:1fr 1fr}.dates::before,.dates::after{display:none}.dates .d::before{display:none}.steps .st{height:68px}}
@media(max-width:560px){.dates{grid-template-columns:1fr}}`;document.head.appendChild(s)})();
/* compact, identical footer on every page */
(function(){const s=document.createElement('style');s.textContent=`
footer.foot{margin-top:20px;padding-bottom:12px}
footer .fw{height:28px;top:-27px}
.donbar{padding:10px 20px;font-size:16px;border-radius:26px;transform:translateY(22px);margin:0 clamp(20px,4vw,48px)}
.donbar .btn{padding:5px 14px;font-size:13px;box-shadow:inset 0 0 0 2px var(--blue)}
.fgrid{padding-top:40px!important;gap:20px;grid-template-columns:1.1fr 1fr .8fr}
footer h4{font-size:17px;margin-bottom:6px}
footer p{font-size:13px;line-height:1.7}
footer .member{padding:10px 14px;margin-bottom:8px;border-radius:18px}
footer .member h4{font-size:14px;margin-bottom:4px}
footer .member img{max-width:200px;margin-top:2px}
.social{gap:6px}.social a{padding:3px 10px;font-size:12px}
.legal{margin-top:12px;padding-top:8px;font-size:12px}
@media(max-width:900px){.fgrid{grid-template-columns:1fr}}`;document.head.appendChild(s)})();
/* Timeline dots stay centred; line aligns with the outer card edges. */
(function(){const s=document.createElement('style');s.textContent=`
.dates::before{left:0;right:0}
.dates::after{left:0;right:0;width:0;animation:grow2 2.2s .3s cubic-bezier(.2,.8,.2,1) forwards}
@keyframes grow2{to{width:100%}}
.dates .d::before{left:50%;margin-left:-12px}
.dates .d:nth-child(2)::before,.dates .d:nth-child(4)::before{transform:rotate(14deg)}`;document.head.appendChild(s)})();

/* Scholarships share one resource entry, with two detail pages. */
(function(){
PAGES['p6-sch']={c:'blue',t:['獎學金','Scholarships'],crumb:'共融資源',img:'cheer',shape:'bean',blocks:[{id:'scholarships',h:'獎學金分類',k:'cards',items:[
{img:'cheer',d:'獎學金',t:'親切共融潛能獎學金',p:'支持青少年發展潛能，一展所長。',go:'了解詳情',to:'p6-1'},
{img:'talk',d:'獎學金',t:'親切共融領袖獎學金',p:'嘉許熱心服務及關心社會的青少年，培育共融領袖。',go:'了解詳情',to:'p6-1b'}
]}]};
})();

/* Compact, readable application process. */
KINDS.steps=b=>`<div class="steps process-cards">${b.items.map((label,i)=>`<div class="st rv" style="transition-delay:${i*60}ms"><i>${String(i+1).padStart(2,'0')}</i><span>${label}</span></div>`).join('')}</div>`;
(function(){const style=document.createElement('style');style.textContent=`
.steps.process-cards{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:18px;margin-top:12px;filter:none;overflow:visible}
.steps.process-cards .st{--step-color:var(--blue);display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;gap:14px;min-width:0;height:auto;min-height:142px;margin:0!important;padding:20px 18px!important;clip-path:none!important;border:1px solid #dce5ea;border-top:3px solid var(--step-color);border-radius:16px;background:#fff!important;color:var(--ink);text-align:left;font-weight:500;font-size:20px;line-height:1.5;box-shadow:0 4px 12px rgba(0,80,140,.04);overflow:visible;transition:transform .2s,box-shadow .2s}
.steps.process-cards .st:nth-child(4),.steps.process-cards .st:nth-child(5){--step-color:var(--green)}
.steps.process-cards .st:last-child{--step-color:var(--red)}
.steps.process-cards .st i{position:static;display:grid;place-items:center;width:32px;height:32px;border-radius:50%;background:color-mix(in srgb,var(--step-color) 10%,white);color:var(--step-color);font:500 15px Fredoka,sans-serif;opacity:1}
.steps.process-cards .st span{display:block;overflow-wrap:anywhere}
.steps.process-cards .st:not(:last-child)::after{content:'→';position:absolute;right:-16px;top:25px;color:#8a9da9;font:18px sans-serif;z-index:2}
.steps.process-cards .st:hover{transform:translateY(-3px);filter:none;box-shadow:0 7px 18px rgba(0,80,140,.08)}
@media(max-width:1100px){.steps.process-cards{grid-template-columns:repeat(3,minmax(0,1fr))}.steps.process-cards .st:nth-child(3)::after{display:none}}
@media(max-width:600px){.steps.process-cards{grid-template-columns:1fr;gap:12px}.steps.process-cards .st{flex-direction:row;align-items:center;min-height:76px;padding:18px!important;gap:16px;font-size:20px}.steps.process-cards .st:not(:last-child)::after{display:none}.steps.process-cards .st i{flex-shrink:0}}
`;document.head.appendChild(style)})();

/* Full Chinese FAQ transcribed from the official Potential Scholarship PDF. */
(function(){
const groups=[{"title": "申請資格", "items": [["是否要曾經參與本機構活動的學生才可以申請 ? 曾經參與過親切舉行的共融活動的 時間是指多久？ 包括什麼活動項目？", "是。過去五年內曾經參與 親切舉行的任何共融活動的學生 (包括一次性的體驗活動 ) 便合符資格申請本計劃。"], ["為什麼申請人必須曾參加親切共融活動才合符申請資格？", "本機構旨在透過本計劃推廣大眾對共融社會的認同 ，宣揚共融訊息 。有見及此，本 計劃期望申請者透過曾經參與本機構的活動而對共融精神有基礎認識及 曾親身體驗 共融。"], ["如果過往是以個人名義參與 親切舉辦的共融活動申請人 ，是否合符資格參加本計劃 ？", "可以。 申請人可以邀請現時所就讀的學校老師或社工作為推薦人 ，並得到校長加簽。"], ["於主流學校就讀的有特殊教育需要及 / 或少數族裔的青年可否申請本計劃？", "可以。以上兩類學生不論就讀於主流或特殊學校也符合申請資格。"], ["如果申請表格上的監護人並非申請者的父母 ，是否仍然合資格申請？ (只限未滿 18 歲的申請人)", "可以。但申請者需要提供有效的證明文件 ，如監護權證明書 、監護協議、法庭命令、 學生手冊上的監護人簽署樣本等。"], ["如在申請表格上未能提供「家長/監護人」的電郵地址，是否仍然合資格申請？", "獎學金的確認通知和其他重要通訊皆以電郵發出 ，申請者的家長/監護人必須提供相 關電郵予秘書處以便處理有關申請。"]]}, {"title": "申請類別", "items": [["申請人曾經參與 親切舉辦的《運動零界限》計劃，當申請獎學金時，可否選擇其他 類 別 - 如藝術與設計？", "可以。申請人只需按照本人的潛能而 選擇合適的獎學金類別 ，評審委員會會參考 申 請人在過往參與親切活動中所展現的熱誠及學習態度作出評選。"]]}, {"title": "推薦", "items": [["評審委員會如何深入了解申請者的潛能？", "申請人的申請表陳述 、錄像片段（如有）、推薦人提名，加上校長加簽 ，已提供了 充足的資料作初步評審。 第一輪入圍申請者將進入第二輪親身會面環節，與評審見 面。"]]}, {"title": "面試", "items": [["面試內容會以什麼形式進行？", "面試將會以會面形式進行 。如因一切無法預見的情況發生 ，面試將會改為網上舉行 或延期，請留意電郵及本機構網站上公布的最新安排。"], ["擔心有特殊教育需要同學的能力難以應付面試情況 ，家長、老師或社工可否陪同申 請同學一同出席獎學金面試日？", "申請人應展現其對所選獎學金項目的興趣及熱誠 。申請人可放鬆心情 ，視面試為一 個與別人溝通的機會 。如有需要，每名申請人可與一位家長 、老師或社工陪同出席 獎學金面試。"], ["所有申請者都有面試機會嗎？", "親切獎學金秘書處會檢查申請人提交的資料是否齊全 ，完整申請將提交予評審委員 會進行初步評 選。然後秘書處會根據初步評估結果決定是否邀請申請 人參加面試， 部份申請人會被邀請進行面試。如申請人未能於 2026 年 3 月前收到面試邀請，則可 視為是次申請未能成功。"], ["面試將於何時舉行？", "面試日程每年或有所不同，一般會於 2-3 月進行，只有被挑選的申請人會獲邀參加。"], ["如我未能出席面試怎麼辦？", "一般而言，如獲邀參加面試卻不能出席的申請人必須給予合理的理由解釋 。否則， 我們將優先考慮其他參加面試的申請人。"]]}, {"title": "獎項", "items": [["獎學金將如何發放﹖", "得獎者將收到由秘書處發出的 「獎學金確認信 」及「獎學金同意書 」。得獎者需簽妥並 連同「獎學金補充表格 」一併交回。秘書處在收妥並核對所有文 件無誤的一個月內， 獎學金將直接存入認可的監護人戶口內 。而得獎者之監護人必須在收妥獎學金後儘 快以電郵向秘書處確認。"], ["獎學金的用途是否有限制？", "得獎者必須根據本獎學金同意書中列明的指定用途使用獎學金 ，並需要提供完成相 關潛能的課程/訓練；以及購買物資的正式收據 。否則，秘書處有權取消或要求得獎 人退還獎學金。"], ["得獎者獲獎後可否再次申請本計劃？", "每位得獎者最多可獲得本獎學金兩次。"], ["得獎者可否報讀不是由香港機構舉辦的課程？", "不可以。由於秘書處無法核實海外的機構 ，因此得獎者只能報讀香港機構提供的課 程。"], ["可以在海外購買裝備及器材嗎？", "需要提供有效和符合要求的正式收據 ，若非以港元結算 ，必須同時提供當日兌換率 的證明。"], ["獎學金可以申請延期嗎？", "一般情況下皆不會 獲得延期，只有特殊健康情況 、課程舉辦單位改期或未可預計的 因素才會得到酌情的延期處理 。獎學金得獎者必須向秘書處遞交 「延期申請通知書 」， 及相關證明文件進行審核 。由於批核需時 ，申請人應儘早提出申請 ，如遞交時間距 離獎學金完結日期太近 (3 個月內)，秘書處將保留不接受相關延期申請。"], ["如監護人情況未能符合資格代領獎學金 (適用於 18 歲下的得獎者)（例如為破產人士 或沒有香港本地銀行戶口等），該如何處理？", "如果監護人情況未能符合獎學金代領人身份 ，原監護人可以委託學校老師 /校長作為 代理人去處理相關獎學金和跟進事項 。原監護人需簽署相關的委託信及得到學校代 理人/校長簽署作實。"]]}];
const esc=value=>value.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
KINDS.scholarshipFaq=b=>`<div class="scholarship-faq"><p class="faq-intro">按一下問題即可查看答案，可同時展開多個問題。</p>${b.groups.map(g=>`<div class="faq-group"><h3>${esc(g.title)}</h3>${g.items.map(([q,a])=>`<details class="faq-item"><summary><span>${esc(q)}</span><i aria-hidden="true"></i></summary><div class="faq-answer"><p>${esc(a)}</p></div></details>`).join('')}</div>`).join('')}</div>`;
PAGES['p6-1'].blocks.push({id:'potential-scholarship-faq',h:'常見問題 FAQ',k:'scholarshipFaq',groups});
const style=document.createElement('style');style.textContent=`
.scholarship-faq{max-width:980px}.faq-intro{font-size:17px;line-height:1.7;color:var(--grey);margin:0 0 30px}
.faq-group{margin-bottom:32px}.faq-group h3{font-size:22px;color:var(--blue);margin:0 0 14px;font-weight:700}
.faq-item{background:#fff;border:1px solid #dce5ea;border-radius:16px;margin:0 0 12px;overflow:hidden}
.faq-item summary{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:21px 24px;cursor:pointer;list-style:none;font-size:19px;line-height:1.7;font-weight:700;color:var(--ink)}
.faq-item summary::-webkit-details-marker{display:none}.faq-item summary i{width:28px;height:28px;border-radius:50%;background:var(--blue-t);position:relative;flex-shrink:0}
.faq-item summary i::before,.faq-item summary i::after{content:'';position:absolute;background:var(--blue);left:8px;top:13px;width:12px;height:2px}.faq-item summary i::after{transform:rotate(90deg);transition:transform .2s}
.faq-item[open] summary i::after{transform:rotate(0)}.faq-item[open]{border-color:#9fbfd5}.faq-item[open] summary{color:var(--blue)}
.faq-item summary:focus-visible{outline:3px solid var(--blue);outline-offset:-4px;border-radius:14px}
.faq-answer{padding:0 24px 24px;font-size:18px;line-height:1.9;color:var(--grey)}.faq-answer p{margin:0;padding-top:17px;border-top:1px solid #edf0f2}
@media(max-width:600px){.faq-item summary{padding:18px;font-size:18px;gap:14px}.faq-answer{padding:0 18px 20px;font-size:17px}}
`;document.head.appendChild(style);
})();

/* Compact footer; donation callout follows contact and links. */
(function(){const style=document.createElement('style');style.textContent=`
footer.foot{margin-top:16px;padding:0 0 10px}
footer.foot .fw{height:18px;top:-17px}
footer.foot .fgrid{padding-top:20px!important;gap:22px;grid-template-columns:1.05fr 1.25fr .9fr;align-items:start}
footer.foot h4{font-size:16px;line-height:1.4;margin:0 0 5px}
footer.foot p{font-size:13px;line-height:1.6;margin:0}
footer.foot .member{padding:8px 12px;margin-bottom:7px;border-radius:12px}
footer.foot .member h4{font-size:13px;margin-bottom:3px}
footer.foot .member img{max-width:165px!important;margin-top:0!important;max-height:48px;object-fit:contain;object-position:left}
footer.foot .social{gap:5px;flex-wrap:wrap}footer.foot .social a{font-size:11px;padding:2px 8px}
footer.foot .donbar{transform:none;margin:16px 0 0;padding:10px 18px;border-radius:16px;gap:10px;font-size:17px;line-height:1.5}
footer.foot .donbar .btn{font-size:14px;padding:6px 15px;white-space:nowrap}
footer.foot .legal{margin-top:12px;padding-top:8px;font-size:11px;border-top-width:1px}
@media(max-width:900px){footer.foot .fgrid{grid-template-columns:1fr 1fr;gap:16px}footer.foot .fgrid>div:first-child{grid-column:1/-1}footer.foot .member{display:inline-block;margin-right:12px}footer.foot .donbar{font-size:16px}}
@media(max-width:560px){footer.foot .fgrid{grid-template-columns:1fr;gap:16px}footer.foot .donbar{padding:12px 14px}footer.foot .donbar span{font-size:15px}}
`;document.head.appendChild(style)})();

/* Brand-colour process cards with stronger connecting arrows. */
(function(){const style=document.createElement('style');style.textContent=`
.steps.process-cards .st{background:var(--step-color)!important;color:#fff;border:0;border-top:3px solid var(--step-color);box-shadow:0 4px 12px rgba(0,80,140,.1)}
.steps.process-cards .st i{background:rgba(255,255,255,.22);color:#fff}
.steps.process-cards .st:not(:last-child)::after{content:'';right:-16px;top:50%;transform:translateY(-50%);width:14px;height:10px;background:var(--step-color);clip-path:polygon(0 32%,58% 32%,58% 0,100% 50%,58% 100%,58% 68%,0 68%)}
`;document.head.appendChild(style)})();

(function(){
const p=PAGES['p6-1b'],base='https://www.treats.org.hk/wp-content/uploads/2025/10/';
const doc=name=>base+encodeURIComponent(name);
const old=p.blocks.find(b=>b.k==='facts');
p.blocks=[p.blocks[0],
{id:'leader-about',h:'計劃介紹',k:'text',p:[old.rows[0][1],'本計劃由 Mordril Properties Limited 慷慨贊助及支持。']},
{id:'leader-eligibility',h:'獎項與申請資格',k:'facts',rows:[
['獎學金及機會','每名得獎者可獲港幣 $5,000，並獲領袖培訓及工作體驗機會。'],
['服務對象','現正就讀中一至中六、具特殊教育需要、熱心服務學校或社區，並有志推動社會共融的學生。'],
['參與經驗','須於過去五年內參與親切舉辦的活動，並展現熱誠及正面的學習態度。'],
['學校推薦','須獲就讀學校老師或社工推薦及校長加簽；每所學校每年最多提名兩位學生。'],
['家長確認','所有申請表須由申請人的家長或合法監護人簽署確認。']]},
{id:'leader-dates',h:'重要日期｜2026 年度',k:'dates',items:[['2025年11月21日','截止報名'],['2025年12月','初步評選'],['2026年1月下旬','獎學金面試'],['2026年2月中旬','公佈結果'],['2026年3–6月','領袖培訓及工作體驗'],['2026年6月','獎學金頒獎禮']]},
{id:'leader-process',h:'申請流程',k:'steps',items:['填表及學校推薦','遞交申請','初步評選及面試','公佈結果','培訓及工作體驗','頒獎及發放獎學金']},
{id:'leader-apply',h:'申請辦法',k:'facts',rows:[['所需文件','填妥本頁下方的申請表格及推薦人提名表格，連同其他所需文件遞交。'],['郵寄申請','香港柴灣樂民道 3 號 F 座 19 樓 A 室。信封請註明：申請「親切共融領袖獎學金計劃」。'],['電郵申請','將已填妥的表格及所需文件掃描成 PDF，電郵至 <a href="mailto:scholarship@treats.org.hk">scholarship@treats.org.hk</a>。'],['截止日期','2025 年 11 月 21 日（星期五）；以郵戳或申請電郵收到日期為準。'],['申請須知','資料不全及逾期申請不予受理；申請表及文件概不退還。']]},
{id:'leader-training',h:'領袖培訓及工作體驗',k:'facts',rows:[['兩次領袖培訓','由親切安排，內容涵蓋領導技巧、溝通表達及共融理念。'],['五天工作體驗','於真實職場或親切活動中體驗工作；按得獎者背景、技能和時間配對合適崗位。'],['得獎者承諾','完成培訓及工作體驗，參與頒獎禮和相關推廣分享活動，並授權親切使用照片及影片作計劃推廣。'],['評選準則','個人特質、對他人及社區的關懷、持續參與社會服務，以及推動香港社會共融的承擔。']]},
{id:'leader-documents',h:'申請文件',k:'ulist',rows:[['申請指引','PDF',doc('親切共融領袖學金計劃申請指引.pdf')],['申請表格及推薦人提名表格','PDF',doc('親切共融領袖獎學金計劃申請表格.pdf')],['計劃海報','PDF',base+'Leader-Scholarship__Poster.pdf'],['計劃單張','PDF',base+'Leader-Scholarship_Leaflet.pdf'],['常見問題原文件','PDF',doc('常見問題-FAQ.pdf')]]},
{id:'leader-faq',h:'常見問題 FAQ',k:'scholarshipFaq',groups:[{"title": "申請資格", "items": [["是否要曾經參與本機構活動的學生才可以申請 ? 曾經參與過 親切舉行的共融活動的 時間是指多久？ 包括什麼活動項目？", "是。過去五年內曾經參與 親切舉行的任何共融活動的學生 (包括一次性的體驗活動 ) 便合符資格申請本計劃。"], ["為什麼申請人必須曾參加親切共融活動才合符申請資格？", "本機構旨在透過本計劃推廣大眾對共融社會的認同，宣揚共融訊息。有見及此，本計 劃期望申請者透過曾經參與本機構的活動， 親身體驗共融 ， 並對共融理念有基礎認識 。"], ["於主流學校就讀的有特殊教育需要及少數族裔青年可否申請本計劃？", "可以。凡具特殊教育需要的學生，不論其族裔背景（包括本地或少數族裔）及就讀學 校類型（主流或特殊學校） ，均符合申請資格。"], ["如在申請表格上未能提供「家長/監護人」的電郵地址，是否仍然合資格申請？", "獎學金的確認通知和其他重要通訊皆以電郵發出，申請者的家長 /監護人必須提供相 關電郵地址予秘書處以便處理有關申請。"], ["如我曾獲得「親切共融潛能獎學金計劃」或「親切共融新星」獎項，是否仍可申請本 計劃？", "「親切共融潛能獎學金計劃」及「親切共融領袖獎學金計劃」旨在支持及嘉許具不同 發展潛能的青少年。因此，即使曾獲 「親切共融潛能獎學金」 或 「親切共融新星」 ，只 要符合本計劃的申請資格，仍可提出申請。"]]}, {"title": "面試", "items": [["面試會以什麼形式進行？", "面試將會以會面形式進行。如因一切無法預見的情況發生，面試將會改為網上舉行或 延期，請留意電郵及本機構網站上公布的最新安排。"], ["擔心有特殊教育需要同學的能力難以應付面試情況，家長、老師或社工可否陪同申請 同學一同出席獎學金面試日？", "申請人應放鬆心情，視面試為一個與別人溝通的機會。如有需要，每名申請人可與一 位家長、老師或社工陪同出席獎學金面試。"], ["所有申請者都有面試機會嗎？", "親切獎學金秘書處會檢查申請人提交的資料是否齊全，完整申請將提交予評審委員會 進行初步評選。然後秘書處會根據初步評估結果決定是否邀請申請人參加面試，部份 申請人會被邀請進行面試。如申請人未能於 2026 年 1 月中旬前收到面試邀請，則可 視為是次申請未能成功。"], ["面試將於何時舉行？", "面試日程每年或有所不同，一般會於 1-3 月進行，只有被挑選的申請人會獲邀參加。"], ["如我未能出席面試怎麼辦？", "一般而言，如獲邀參加面試卻不能出席的申請人，必須給予合理的理由解釋。否則， 我們將優先考慮其他參加面試的申請人。"]]}, {"title": "培訓及工作體驗安排", "items": [["計劃所提供的兩次培訓內容為何？", "本計劃將安排兩次由親切主辦的培訓活動，旨在提升獎學金得主的領導能力及對共融 的認識。培訓內容涵蓋領導技巧、溝通表達及共融理念等。"], ["五日工作體驗的內容及形式是什麼？", "工作體驗為期五日，內容包括但不限於： • 於真實職場環境中參與及體驗工作； • 於親切舉辦之活動中擔任指定角色，如活動助理或場地協調員等。 主辦單位將根據獎學金得主的背景、技能及時間安排，配對合適的工作體驗崗位。"], ["是否必須參加培訓及工作體驗？如未能出席，將會如何處理？", "是的。培訓及工作體驗為本計劃的核心環節，旨在提升得獎者的領導及溝通技巧，建 立職業發展能力 ， 擴展社交網絡 ， 並促進其融入社會 ， 成為推動共融文化的未來領袖 。 若得獎者未能出席上述環節，親切將保留其得獎資格及發放獎學金之最終決定權。"]]}, {"title": "獎項", "items": [["獎學金將如何發放？", "獎學金將於得獎者完成兩次培訓及五天工作體驗，並出席頒獎典禮後，於 2026 年 6 月直接存入其認可監護人之銀行帳戶。監護人須於收妥獎學金後，儘快以電郵方式向 秘書處確認收款事宜。"], ["獎學金的用途是否設有任何限制？", "本獎學金旨在嘉許及鼓勵得獎者，其用途不設任何限制。"], ["如監護人情況未能符合資格代領獎學金（例如為破產人士或沒有香港本地銀行戶口 等） ，該如何處理？", "如果監護人情況未能符合獎學金代領人身份，原監護人可以委託學校老師 /校長作為 代理人去處理相關獎學金和跟進事項。原監護人需簽署相關的委託信及得到學校代理 人/校長簽署作實。"]]}]},
{id:'leader-enquiry',h:'獎學金查詢',k:'facts',rows:[['電話','<a href="tel:28891332">2889 1332</a>（辦公時間）'],['電郵','<a href="mailto:scholarship@treats.org.hk">scholarship@treats.org.hk</a>']]}
];
const style=document.createElement('style');style.textContent=`#leader-dates .dates{grid-template-columns:repeat(6,minmax(0,1fr))}#leader-dates .dates .d b{font-size:22px;overflow-wrap:anywhere}@media(max-width:1000px){#leader-dates .dates{grid-template-columns:repeat(3,minmax(0,1fr))}#leader-dates .dates::before,#leader-dates .dates::after,#leader-dates .dates .d::before{display:none}}@media(max-width:560px){#leader-dates .dates{grid-template-columns:1fr}}`;document.head.appendChild(style);
})();

(function(){
KINDS.venueMap=b=>realMap(b.address,b.h||b.address);
// Only definite venues receive map pins; unspecified service areas stay as text.
Object.values(PAGES).forEach(page=>{if(!page.blocks)return;
const additions=[];
page.blocks.forEach(block=>{if(block.k!=='facts')return;(block.rows||[]).forEach(([key,value])=>{
if(!/^(活動地點|地點|地址)$/.test(key)||/<|或|網上|各區|學校|中心|營地|設施/.test(value))return;
if(!/[道街路號館場園邨廈]/.test(value))return;
additions.push({id:block.id+'-venue-map',h:'活動地點及地圖',k:'venueMap',address:value});
});});page.blocks.push(...additions);
});
const style=document.createElement('style');style.textContent=`.real-map{width:100%;height:360px;overflow:hidden;border-radius:22px;border:1px solid #dce5ea;background:var(--blue-t);margin-top:20px}.real-map iframe{display:block;width:100%;height:100%;border:0}.map-route{display:inline-block;margin-top:14px;color:var(--blue);font-size:16px;font-weight:700;text-decoration:underline}@media(max-width:600px){.real-map{height:290px;border-radius:16px}}`;document.head.appendChild(style);
})();

/* Show inline FAQs before downloadable application documents. */
(function(){
['p6-1','p6-1b'].forEach(id=>{
const blocks=PAGES[id].blocks;
const faq=blocks.find(b=>b.k==='scholarshipFaq');
if(!faq)return;
blocks.splice(blocks.indexOf(faq),1);
const index=blocks.findIndex(b=>b.h==='申請文件');
blocks.splice(index<0?blocks.length:index,0,faq);
});
})();

(function(){const s=document.createElement('style');s.textContent=`
.brand-logo-row{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));align-items:center;gap:clamp(24px,6vw,90px);width:100%;margin:30px 0 12px;background:none;box-shadow:none;border:0}
.brand-logo-cell{display:flex;align-items:center;justify-content:center;min-width:0;height:clamp(100px,18vw,220px)}
.brand-logo-cell svg{display:block;width:85%;height:85%;overflow:hidden}
@media(max-width:600px){.brand-logo-row{gap:22px;margin-top:24px}.brand-logo-cell{height:100px}}
`;document.head.appendChild(s)})();

/* Illustrated winding history, sourced from TREATS official milestones. */
(function(){
const block=PAGES['p2-1'].blocks.find(b=>b.id==='p2-1-6');block.k='milestoneJourney';block.items=[{"year": "1979", "title": "親切成立", "description": "於國際兒童年成立，透過康樂活動讓基層兒童享受遊戲與交朋友的機會。", "image": "img/milestone-1979.png", "source": "https://treats.org.hk/treats/"}, {"year": "1985", "title": "走進越南難民營", "description": "首次在越南難民營舉辦兒童同樂日，讓被隔絕的孩子重新感受遊戲的快樂。", "image": "img/milestone-1985.png", "source": "https://treats.org.hk/treats/"}, {"year": "2006", "title": "共融在香港", "description": "委託香港浸會大學進行全港首個「共融在香港」研究，推動社會認識共融。", "image": "img/milestone-2006.png", "source": "https://treats.org.hk/treats/"}, {"year": "2012", "title": "共融帆船隊啟航", "description": "成立由能力障礙青年組成的共融帆船隊，透過訓練及海上實習挑戰自我。", "image": "img/milestone-2012.png", "source": "https://treats.org.hk/treats/"}, {"year": "2019", "title": "共融龍舟隊成立", "description": "讓智力障礙青年透過龍舟訓練建立默契與友誼，向社會展現潛能。", "image": "img/milestone-2019.jpg", "source": "https://treats.org.hk/treats/"}, {"year": "2020", "title": "首屆香港共融健球盃", "description": "以團隊、尊重及合作精神，讓商界義工與有能力障礙青年共同參賽。", "image": "img/milestone-2020.jpg", "source": "https://treats.org.hk/treats/"}, {"year": "2024", "title": "45 周年・同行共融", "description": "推出周年新標誌及《親親。融融：45 個親切故事》，記錄同行者的轉變與成長。", "image": "img/milestone-2024.png", "source": "https://treats.org.hk/treats/"}, {"year": "2025", "title": "共融運動跨越地域", "description": "香港共融健球盃首次邀請台灣隊伍，透過比賽及研討會交流共融運動經驗。", "image": "img/milestone-2025.jpg", "source": "https://treats.org.hk/treats/"}];
const intro=PAGES['p2-1'].blocks.find(b=>b.logo);intro.p=intro.p.map(x=>x.replace('2026 年親切迎來 45 周年','2024 年親切迎來 45 周年'));
KINDS.milestoneJourney=b=>{
const height=b.items.length*300;
let path='M 280 0 C 80 35 140 110 280 150';
b.items.slice(1).forEach((_,j)=>{const i=j+1,prev=i%2?280:720,next=i%2?720:280,y=150+(i-1)*300;path+=` C ${prev} ${y+170}, ${next} ${y+130}, ${next} ${y+300}`});
return `<div class="milestone-journey"><svg class="journey-line" viewBox="0 0 1000 ${height}" preserveAspectRatio="none" aria-hidden="true"><path d="${path}"/></svg><ol class="journey-list">${b.items.map((x,i)=>`<li class="journey-stop ${i%2?'reverse':''}" style="--accent:var(--${['blue','red','green'][i%3]})"><div class="journey-photo"><span class="journey-spark" aria-hidden="true"></span><img src="${x.image}" alt="${x.title}：親切官方里程碑圖片" loading="lazy"><span class="journey-dot" aria-hidden="true"></span></div><div class="journey-copy"><span class="journey-year">${x.year}</span><h3>${x.title}</h3><p>${x.description}</p><a href="${x.source}" target="_blank" rel="noopener">閱讀官方紀錄 ↗</a></div></li>`).join('')}</ol></div>`;
};
const style=document.createElement('style');style.textContent=`
.milestone-journey{position:relative;max-width:1100px;margin:15px auto 0;padding:0 0 18px}
.journey-line{position:absolute;inset:0;width:100%;height:calc(100% - 18px);pointer-events:none;overflow:visible}.journey-line path{fill:none;stroke:var(--blue);stroke-width:5;stroke-linecap:round;vector-effect:non-scaling-stroke}
.journey-list{list-style:none;margin:0;padding:0;position:relative}.journey-stop{height:300px;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:12%;padding:20px 7%;position:relative}
.journey-photo{position:relative;width:210px;height:210px;justify-self:center;isolation:isolate}
.journey-photo img{position:relative;width:100%;height:100%;object-fit:cover;border-radius:48% 52% 46% 54%;transform:rotate(-6deg);filter:grayscale(1);transition:filter .3s,transform .3s;border:6px solid var(--paper)}
.journey-stop:hover img{filter:grayscale(0);transform:rotate(0)}
.journey-spark{position:absolute;inset:-18px;background:var(--accent);clip-path:polygon(50% 0,60% 25%,82% 9%,80% 36%,100% 43%,78% 58%,95% 81%,68% 79%,60% 100%,44% 78%,18% 95%,23% 68%,0 57%,24% 43%,7% 18%,36% 24%);z-index:-1;transform:rotate(10deg)}
.journey-dot{position:absolute;width:28px;height:28px;border-radius:50%;background:var(--accent);right:-16px;bottom:24px;box-shadow:0 0 0 7px var(--paper)}
.journey-copy{position:relative;background:var(--paper);padding:12px 0;max-width:360px}.journey-year{font:500 clamp(40px,5vw,64px)/1 Fredoka,sans-serif;color:var(--accent);letter-spacing:-2px}.journey-copy h3{font-size:24px;line-height:1.4;color:var(--blue);margin:9px 0}.journey-copy p{font-size:17px;line-height:1.8;color:var(--grey);margin:0 0 10px}.journey-copy a{font-size:14px;color:var(--blue);text-decoration:underline;text-underline-offset:4px}
.journey-stop.reverse .journey-photo{grid-column:2;grid-row:1}.journey-stop.reverse .journey-copy{grid-column:1;grid-row:1;justify-self:end;text-align:right}.journey-stop.reverse img{transform:rotate(6deg)}
@media(max-width:700px){.journey-line{display:none}.journey-list{border-left:3px solid var(--blue);margin-left:8px}.journey-stop{height:auto;min-height:240px;grid-template-columns:110px 1fr;gap:22px;padding:24px 0 24px 20px}.journey-photo{width:105px;height:105px}.journey-spark{inset:-9px}.journey-photo img{border-width:3px}.journey-stop.reverse .journey-photo{grid-column:1}.journey-stop.reverse .journey-copy{grid-column:2;text-align:left;justify-self:start}.journey-year{font-size:40px}.journey-copy h3{font-size:20px}.journey-copy p{font-size:16px}.journey-dot{width:16px;height:16px;right:-5px;bottom:0;box-shadow:0 0 0 4px var(--paper)}}
`;document.head.appendChild(style);
})();

(function(){
const milestone=PAGES['p2-1'].blocks.find(b=>b.id==='p2-1-6').items.find(x=>x.year==='2024');milestone.image='img/milestone-2024-original.png';
const style=document.createElement('style');style.textContent=`
.journey-stop:nth-child(7) .journey-photo{width:100%;max-width:350px;height:210px;display:flex;align-items:center;justify-content:center}
.journey-stop:nth-child(7) .journey-photo img{object-fit:contain;filter:none;transform:none;border:0;border-radius:0;background:var(--paper);padding:14px 0;height:auto;max-height:100%}
.journey-stop:nth-child(7) .journey-spark{inset:5px 20%;opacity:.12;transform:rotate(12deg)}
@media(max-width:700px){.journey-stop:nth-child(7) .journey-photo{width:110px;height:110px}.journey-stop:nth-child(7) .journey-photo img{padding:8px 0}}
`;document.head.appendChild(style);
})();

/* Month-grouped review cards, adapted from the supplied Treat-change reference. */
const REVIEW_CARDS=[{"date": "2026-10-28", "title": "用心拉近距離 ｜ 溝通從來不止於說", "image": "img/reviews/2026-10-28-1.jpg", "excerpt": "10月中，親切同36位來自 One Beiersdorf - NIVEA, La Prairie, Chantecaille…"}, {"date": "2026-10-16", "title": "共融健球訓練 ｜ 以運動連繫大埔社區", "image": "img/reviews/2026-10-16-1.jpg", "excerpt": "10月初，我哋展開咗第一場大埔共融健球訓練，公開招募5位大埔區內居民，聯同大埔區匡智松嶺學校，5位中度智力障礙嘅同學仔，一齊…"}, {"date": "2026-10-06", "title": "感謝來臨 ｜ 讓不同的光，都有被看見的機會", "image": "img/reviews/2026-10-06-1.jpg", "excerpt": "中秋翌日，親切帶住一份特別嘅心意，參加咗「天星創業市集」"}, {"date": "2026-09-25", "title": "中秋市集 ｜ 把創意化成一份心意", "image": "img/reviews/2026-09-25-1.jpg", "excerpt": "中秋，係一家人相聚、朋友分享心意嘅日子。願大家喺團圓嘅時光裡，感受身邊人嘅關懷，亦將呢份溫暖分享畀更多人。"}, {"date": "2026-09-24", "title": "中秋月餅裝作 ｜ 每人都有自己發光的位置", "image": "img/reviews/2026-09-24-1.jpg", "excerpt": "上星期連續兩日，有商界義工分別同東華三院包玉星學校及匡智屯門晨輝學校，有輕度智障嘅同學一齊落手落腳製作迷你單黃蓮蓉月餅。"}, {"date": "2026-09-23", "title": "親切共融帆船隊2026 ｜ 乘風而行，並肩揚帆", "image": "img/reviews/2026-09-23-1.jpg", "excerpt": "三位來自匡智松嶺學校，具中度智力障礙嘅同學，聯同三位來自基督教香港信義會社會服務部太和青少年綜合服務中心，有自閉症嘅同學，與…"}, {"date": "2026-09-15", "title": "Sports For All ｜ 【共融龍舟】划出默契，也划出彼此支持", "image": "img/reviews/2026-06-25-1.jpg", "excerpt": "今年，親切聯同慈山寺佛法心靈輔導中心義工，以及大埔松嶺學校中度智障同學，組成「親切共融龍舟隊2026」，一同參與「大埔區龍舟…", "illustrative": true}, {"date": "2026-09-03", "title": "24小時慈善小艇賽 ｜ 感謝支持 繼續結伴同行", "image": "img/reviews/2026-09-03-1.jpg", "excerpt": "衷心感謝 Hebe Haven Yacht Club 白沙灣遊艇會 24小時慈善小艇賽 為親切籌得逾港幣6萬6千元善款，令我…"}, {"date": "2026-08-25", "title": "Sports For All ｜ 【共融手綿球】由陌生到隊友；從海綿球學懂彼此合作", "image": "img/reviews/2026-08-25-1.jpg", "excerpt": "親切首次舉辦「親切共融手綿球計劃」，邀請來自林村公立黃福鑾紀念學校及才俊學校的學生組成雙打隊伍，一同學習這項源自日本名古屋的…"}, {"date": "2026-08-18", "title": "Sport Play Out! 25–26 ｜ 30節訓練，見證青年成長為體育領袖", "image": "img/reviews/2026-08-18-1.jpg", "excerpt": "經過30節遊戲化運動及新興運動訓練，18位來自明愛胡振中中學的少數族裔青年，完成「動起來！EM Teen融樂運動培訓計劃20…"}, {"date": "2026-08-13", "title": "Z-Force: Genesis 始元篇 ｜ 讓遊戲成為共融學習的起點", "image": "img/reviews/2026-08-13-1.jpg", "excerpt": "一個桌遊，可以帶來幾多可能？親切推出嘅「Z-Force: Genesis 始元篇」桌上互動共融教育遊戲，同學不只係玩家，更會…"}, {"date": "2026-07-23", "title": "一句鼓勵，拉近彼此距離", "image": "img/reviews/2026-07-23-1.jpg", "excerpt": "早前，TCC Foundation 嘅義工同18位來自東華三院除展堂學校嘅輕至中度智力障礙同學，一齊玩咗半日健球。大家由零開…"}, {"date": "2026-07-16", "title": "親切共融健球體驗日 ｜ 打破對能力的想像", "image": "img/reviews/2026-07-16-1.jpg", "excerpt": "7月初，我哋聯同牽手同行協會嘅同學及其家庭，以及 Hong Kong Aero Engine Services Limite…"}, {"date": "2026-07-09", "title": "走進專業課堂 ｜ 向專業欖球教練偷師", "image": "img/reviews/2026-07-09-1.jpg", "excerpt": "經過20多節「動起來！EM Teen 融樂運動培訓計劃」運動領袖訓練後，同學們由運動參加者，逐步成長為運動領袖。今次，佢哋更…"}, {"date": "2026-06-25", "title": "親切共融龍舟賽2026圓滿舉行 ｜ 風雨無阻划出共融力量！", "image": "img/reviews/2026-06-25-1.jpg", "excerpt": "剛過去嘅端午節，「親切共融龍舟賽2026」喺大埔海濱公園圓滿舉行。七隊由能力障礙人士及主流義工組成嘅共融龍舟隊，喺300米短…"}, {"date": "2026-06-16", "title": "親切共融領袖獎學金計劃 ｜ 同學踏出舒適圈", "image": "img/reviews/2026-06-16-1.jpg", "excerpt": "上星期，我哋喺「親切共融領袖獎學金計劃」頒獎禮上見證咗一班得獎同學嘅努力同成長。 今個星期，同大家重溫 Danial 嘅實習…"}, {"date": "2026-06-12", "title": "親切共融龍舟賽2026 ｜ 首度走進大埔龍舟盛事！", "image": "img/reviews/2026-06-12-1.jpg", "excerpt": "下星期就係端午節喇！除咗食糉應節之外，不妨入場感受下龍舟競渡嘅熱血氣氛！今年親切有幸參與歷史悠久嘅「大埔區龍舟競賽暨嘉年華」…"}, {"date": "2026-05-28", "title": "親切共融帆船隊 ｜ 24小時慈善小艇賽圓滿結束", "image": "img/reviews/2026-05-28-1.jpg", "excerpt": "親切共融帆船隊喺剛過去嘅周六日，出戰由 Hebe Haven Yacht Club 白沙灣遊艇會 舉辦嘅24小時慈善小艇賽。…"}, {"date": "2026-05-08", "title": "親切共融領袖獎學金計劃 ｜ 工作體驗開始啦！", "image": "img/reviews/2026-05-08-1.jpg", "excerpt": "親切一直相信，每位同學都有自己閃亮嘅一面。只要有機會去嘗試、去體驗，就有機會發現屬於自己嘅可能性。"}, {"date": "2026-04-24", "title": "親切青少年共融大使訓練計劃 ｜ 從校內崗位到理解職場", "image": "img/reviews/2026-04-24-1.jpg", "excerpt": "上星期六，來自四間唔同特殊學校嘅共融大使終於聚首一堂，一齊參與「共融大使聚友營」。"}, {"date": "2026-04-16", "title": "少數族裔青年化身運動教練 ｜ 從教練身份找到融入社會的自信", "image": "img/reviews/2026-04-16-1.jpg", "excerpt": "話咁快，今屆「Sports Play Out」計劃已經過咗一半。今年我哋有 16 位少數族裔同學仔參加，星期二佢哋更憑住一番…"}, {"date": "2026-03-20", "title": "共融在石門 ｜ 社區嘉年華圓滿舉行", "image": "img/reviews/2025-05-07-1.jpg", "excerpt": "上星期六，由親切「青少年共融大使訓練計劃」主辦嘅「共融在石門」社區嘉年華已圓滿舉行！衷心感謝大家抽空參與，同我哋一齊透過親身…", "illustrative": true}, {"date": "2026-03-17", "title": "親親融融say 「Hello」 ｜ 走進社區認識少數族裔語言", "image": "img/reviews/2026-04-16-1.jpg", "excerpt": "喺三月頭，親切參加咗由荃灣葵青區婦女會舉辦嘅「三八婦女節—多元文化共融樂」嘉年華，喺如心園設置咗一個小攤位，透過遊戲同社區朋…", "illustrative": true}, {"date": "2026-03-04", "title": "用鏡頭打開對話 ｜ 因為接觸而了解", "image": "img/reviews/2026-03-04-1.jpg", "excerpt": "上星期六，我哋同匡智張玉瓊晨輝學校 12 位同學，以及博愛醫院歷屆總理聯誼會梁省德中學 15 位同學，一齊參與一個攝影體驗日…"}, {"date": "2026-03-02", "title": "今夜煙花燦爛 ｜ 讓節日不再有距離", "image": "img/reviews/2026-03-02-1.jpg", "excerpt": "「從來未試過同小朋友出外慶祝新年，原來可以咁開心。」"}, {"date": "2026-02-26", "title": "親切青少年共融大使計劃 ｜ 從餐桌禮儀中學懂尊重與自信", "image": "img/reviews/2026-02-26-1.jpg", "excerpt": "時間真係過得好快，一眨眼「親切青少年共融大使計劃 2025-26」已經過咗一半。"}, {"date": "2026-02-13", "title": "新春開心果糯米糍 ｜ 沒有角色之分，只有一起學習", "image": "img/reviews/2026-02-13-1.jpg", "excerpt": "上星期日，我哋聯同香港西區扶輪社匡智晨輝學校，15 位不同能力嘅同學，夥拍 15 位來自華懋集團 @chinachemgro…"}, {"date": "2025-12-24", "title": "花藝水晶球 ｜ 這個聖誕，一起跳出框框", "image": "img/reviews/2025-12-24-1.jpg", "excerpt": "今日，我哋同心光學校 10 位同學，聯同天星銀行嘅義工，一齊整咗聖誕花藝水晶球，用雙手、用創意迎接聖誕。"}, {"date": "2025-12-19", "title": "年尾回顧｜Sports For All ｜ 共融健球：一個球，連結社區與彼此", "image": "img/reviews/2026-10-16-1.jpg", "excerpt": "喺今個12月，親切會一連三個星期五推出年尾回顧影片，帶大家重溫今年「Sports For All」嘅共融旅程～", "illustrative": true}, {"date": "2025-12-12", "title": "年尾回顧｜Sports For All ｜ 共融龍舟；一起划出共融的默契", "image": "img/reviews/2026-06-25-1.jpg", "excerpt": "由今個星期開始，一連三個星期五都會有親切嘅年尾回顧影片，帶大家重溫今年「Sports For All」嘅共融旅程～", "illustrative": true}, {"date": "2025-07-12", "title": "親切共融健球嘉年華 ｜ 再次回歸 ！", "image": "img/milestone-2025.jpg", "excerpt": "香港共融健球盃雖然係上個星期完結，但相信大家對共融健球都仲意猶未盡，喺星期日我哋仲有一個共融健球嘉年華，畀睇完共融健球盃後，…", "illustrative": true}, {"date": "2025-07-11", "title": "攜手共進：「探討港台兩地共融運動的策略與實踐研討會」完滿結束", "image": "img/reviews/2025-07-11-1.jpg", "excerpt": "在上星期日，我們成功舉辦了「探討港台兩地共融運動的策略與實踐研討會」，此次研討會吸引了逾二十位參加者，大家聚集一堂，共同探討…"}, {"date": "2025-06-13", "title": "親切45週年紀念晚宴圓滿舉行 ｜ 《親親。融融》延續共融故事", "image": "img/milestone-2024-original.png", "excerpt": "親切45週年紀念晚宴昨晚圓滿舉行，好榮幸可以200位嘉賓，一同見證呢個充滿愛同感動嘅夜晚。45年嚟，全賴大家嘅支持同參與，親…", "illustrative": true}, {"date": "2025-06-10", "title": "親切共融潛能獎學金計劃2025 ｜ 發掘潛能 追光逐夢", "image": "img/reviews/2025-06-10-1.jpg", "excerpt": "剛過去嘅星期六「親切共融潛能獎學金計劃2025」頒獎禮圓滿舉行，100多位得獎同學、師長及親友聚首一堂，共同分享喜悅。我哋期…"}, {"date": "2025-05-31", "title": "親切首屆共融健球嘉年華 ｜ 為香港共融健球盃熱身！", "image": "img/reviews/2025-07-11-1.jpg", "excerpt": "一年一度香港共融健球盃喺七月強勢回歸喇！今年我哋同以往有啲唔同，首次喺賽事前舉辦共融健球嘉年華，等大家可以率先感受呢項新興運…", "illustrative": true}, {"date": "2025-05-09", "title": "Sports Play Out 2.0 ｜ 從學員到教練 締造跨文化體育夢", "image": "img/reviews/2026-04-16-1.jpg", "excerpt": "仲記得幾個月前嘅 Sports Fun Day 嗎？當日嘅手綿球（Taspony）環節，竟然帶來咗意想不到嘅發展！", "illustrative": true}, {"date": "2025-05-07", "title": "親切共融地圖2025 ｜ 多元體驗 同建共融路", "image": "img/reviews/2025-05-07-1.jpg", "excerpt": "由 親切舉辦嘅「親切共融地圖2025」將於2025年5月7日至15日一連九日走訪全港，以流動車同互動工作坊形式，為市民帶來有…"}, {"date": "2025-04-14", "title": "青少年共融大使訓練計劃2024-25：攜手創作，傳遞感恩！", "image": "img/reviews/2026-04-24-1.jpg", "excerpt": "24-25嘅青少年共融大使訓練計劃由去年9月開始，轉眼間已經7個月啦！早排所有共融大使又聚埋一齊，除咗照舊一齊玩遊戲，維持彼…", "illustrative": true}, {"date": "2025-03-20", "title": "餐廳接管挑戰 ｜ 打破隔閡 用心「聆聽」", "image": "img/reviews/2026-02-26-1.jpg", "excerpt": "轉瞬間，親切青少年共融大使訓練計劃已經去到中後期，同學仔之間已經建立深厚情誼。上星期六，啟聾學校同德愛中學嘅同學仔，喺啟聾學…", "illustrative": true}, {"date": "2025-01-22", "title": "賀年甜品 ｜ 共融廚房製作雪花酥", "image": "img/reviews/2026-02-13-1.jpg", "excerpt": "上星期，我哋邀請咗嚟自Mainetti嘅商界義工，同香港西區扶輪社匡智晨輝學校12位輕度到中度智力障礙嘅同學仔，一齊舉辦咗一…", "illustrative": true}, {"date": "2024-12-23", "title": "跳出框框 ｜ 共創獨一無二的聖誕樹", "image": "img/reviews/2025-12-24-1.jpg", "excerpt": "上星期二，9位嚟自K11 Concepts Limited同Luxba Group Limited嘅商界義工，同11位來自中…", "illustrative": true}, {"date": "2024-12-19", "title": "用創意織造共融 ｜ 環保時裝設計活動體驗無限可能", "image": "img/reviews/2026-03-04-1.jpg", "excerpt": "講起環保時裝設計，可能大家會覺得要好高深嘅技巧或者專業知識，但你有冇諗過，憑住簡單嘅創意，再加埋合作精神，就可以整出屬於自己…", "illustrative": true}, {"date": "2024-12-12", "title": "Sports Play Out 2.0 ｜ 少數族裔青年化身運動教練 主動打破界限創共融社區 Empowering Ethnic Minority Youth through Sports and Inclusion", "image": "img/reviews/2026-04-16-1.jpg", "excerpt": "運動，係一個跨越語言同文化界限嘅共通語言。透過運動，我哋可以連結唔同背景嘅人，建立友誼，締造共融。今年，我哋 #Sports…", "illustrative": true}, {"date": "2024-11-22", "title": "揚帆共融 ｜ 感謝HHYC多年同行", "image": "img/reviews/2026-05-28-1.jpg", "excerpt": "衷心感謝 Hebe Haven Yacht Club (HHYC Official) #24小時慈善小艇賽 為親切籌得逾港幣…", "illustrative": true}, {"date": "2024-11-19", "title": "親切共融帆船挑戰賽2024 ｜ 風浪中展現毅力", "image": "img/reviews/2023-08-15-1.jpg", "excerpt": "話咁快今年已經係第五屆親切共融帆船挑戰賽！", "illustrative": true}, {"date": "2024-11-14", "title": "週年大會暨義工嘉許禮2024", "image": "img/reviews/2024-11-14-1.jpg", "excerpt": "親切週年大會暨義工嘉許禮2024於星期二晚圓滿舉行，除了回顧2023/2024年度嘅服務外，亦嘉許一眾為親切勞心勞力嘅義工，…"}, {"date": "2023-09-29", "title": "HappinessIsSharing ｜ 月餅與燈籠", "image": "img/reviews/2023-09-26-1.jpg", "excerpt": "感謝 AXA Investment Managers支持我哋嘅月餅饋贈活動，令親切可以聯同安盛嘅企業義工，送月餅俾東華三院群…", "illustrative": true}, {"date": "2023-09-26", "title": "共融小廚師 ｜ 落手落腳整月餅", "image": "img/reviews/2023-09-26-1.jpg", "excerpt": "食咗咁多年月餅，不如落手落腳自己做？7位香港西區扶輪社匡智晨輝學校有輕中度智力障礙及（或）自閉症嘅能障同學，同12位中信里昂…"}, {"date": "2023-09-22", "title": "共融帆船 ｜ 比賽造就 一對戰友", "image": "img/reviews/2023-08-15-1.jpg", "excerpt": "秋風起，又係玩帆船嘅好時節。喺展望今年精彩嘅帆船比賽前，同大家回顧下去年親切共融帆船隊「最佳新晉拍擋獎」—主流義工Diva同…", "illustrative": true}, {"date": "2023-09-13", "title": "SEN STEM x 曲奇製作體驗", "image": "img/reviews/2023-09-26-1.jpg", "excerpt": "早兩個星期，我哋捉緊暑假嘅尾巴，同10位有自閉症或肢體障礙等嘅能障同學體驗STEM x 曲奇製作。佢哋要先親自組裝機械打蛋器…", "illustrative": true}, {"date": "2023-08-30", "title": "Faces of TREATS ｜ 工作嘅意義", "image": "img/reviews/2023-08-30-1.jpg", "excerpt": "好多時，我哋忙住返工放工，唔會去諗工作嘅意義。好多人，營營役役追求名利，唔會在乎個人嘅成長。好多人被工作壓垮，「鍾意返工」成…"}, {"date": "2023-08-15", "title": "共融帆船 ｜ 視力障礙同學帆船初體驗", "image": "img/reviews/2023-08-15-1.jpg", "excerpt": "夏天係個玩水嘅好季節。上個月，8位 #親切共融帆船隊 嘅義工隊員同8位來自心光學校、有視力障礙嘅同學去到西貢體驗帆船嘅樂趣，…"}, {"date": "2023-07-27", "title": "敢玩‧敢做 ｜ #動起來！融樂運動培訓計劃", "image": "img/reviews/2026-04-16-1.jpg", "excerpt": "喺基礎訓練中，學員們體驗到不一樣嘅運動，例如嘗試咗音樂版跆拳道，佢哋要感受住拍子嘅強弱，跟隨音樂以跳舞嘅方式做出跆拳道嘅動作…", "illustrative": true}, {"date": "2023-07-02", "title": "真．風雨同路 ｜ 親切共融龍舟賽2023圓滿舉行", "image": "img/reviews/2023-dragon-boat-official.jpg", "excerpt": "親切今日首度舉行共融主題龍舟賽事—親切共融龍舟賽2023！", "illustrative": false}, {"date": "2023-06-24", "title": "親切共融潛能獎學金2023 ｜ 18位青少年盼以自身經驗扭轉歧視 改寫生命", "image": "img/reviews/2025-06-10-1.jpg", "excerpt": "親切今日舉行咗「親切共融潛能獎學金計劃2023」頒獎禮，18位不同背景、不同能力嘅本地青少年獲獎學金以發展多元範疇嘅潛能。我…", "illustrative": true}, {"date": "2023-06-01", "title": "親切共融龍舟隊 ｜ 又到端午月", "image": "img/milestone-2019.jpg", "excerpt": "8位東華三院徐展堂學校有輕度智力障礙、自閉症嘅能障同學，同9位中信里昂證券嘅企業義工，喺上個月初組成新一個年度嘅親切共融龍舟…", "illustrative": true}, {"date": "2023-05-16", "title": "社區嘉年華 ｜ 未完㗎！仲有得玩！", "image": "img/reviews/2023-05-16-1.jpg", "excerpt": "過去呢個星期日，多謝近千人冒雨嚟到我哋喺觀塘海濱嘅 #親切共融地圖 2023 社區嘉年華！見到當日大家都袋走咗好多嘢，唔只有…"}, {"date": "2023-05-02", "title": "親切共融欖球計劃2023", "image": "img/reviews/2023-05-02-1.jpg", "excerpt": "14位來自展亮技能發展中心（薄扶林）、有輕度智力障礙、自閉症、肢體障礙、聽力障礙等嘅同學仔，與雞糊欖球會14位球員，一齊經歷…"}, {"date": "2023-03-18", "title": "研究證成效 ｜ 疫後活用共融運動 啟發能障青年潛能", "image": "img/reviews/2023-03-18-1.jpg", "excerpt": "疫情持續三年，我哋見到唔少能障青少年嘅身心發展都因而滯後。疫情之後，我哋可以點樣幫助佢哋追返呢900幾日嘅黃金發展期？"}];
KINDS.reviewCards=()=>{
const groups={};REVIEW_CARDS.forEach(x=>(groups[x.date.slice(0,7)]??=[]).push(x));
return `<p class="review-intro">從海上揚帆、龍舟競渡，到健球場上的歡呼和社區嘉年華的笑聲，這裡收藏了親切 2023 年至今的共融時刻。慢慢翻閱，重溫一起玩、一起學、彼此欣賞的故事。</p>${Object.entries(groups).map(([month,entries])=>`<section class="review-month"><h2>${month.slice(0,4)} 年 ${Number(month.slice(5))} 月</h2><div class="review-grid">${entries.map(x=>{const href='#a-'+x.date;return `<article class="review-tile"><a class="review-image" href="${href}" tabindex="-1" aria-hidden="true">${x.image?`<img src="${x.image}" alt="" loading="lazy">${x.illustrative?`<span class="review-photo-label">${t('相關活動配圖','Related programme photo')}</span>`:''}`:'<span class="review-noimage">親切 <small>TREATS</small></span>'}</a><div class="review-body"><h3><a href="${href}">${x.title}</a></h3><p class="review-date">${x.date.slice(0,4)}年${Number(x.date.slice(5,7))}月${Number(x.date.slice(8))}日</p><p class="review-excerpt">${x.excerpt}</p><a class="review-read" href="${href}">閱讀全文 →</a></div></article>`}).join('')}</div></section>`).join('')}`;
};
PAGES['p3-2'].blocks=[{id:'review-months',h:'',k:'reviewCards'}];
(function(){const style=document.createElement('style');style.textContent=`
.review-intro{max-width:940px;font-size:18px;line-height:1.9;color:var(--grey);margin:0 0 38px}
.review-month{margin-bottom:44px}.review-month>h2{font-family:var(--disp);font-size:28px!important;color:var(--blue);border-bottom:3px solid var(--red);padding-bottom:12px;margin:0 0 22px!important}.review-month>h2::before{display:none!important}
.review-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px;align-items:stretch}
.review-tile{display:flex;flex-direction:column;min-width:0;background:white;border:1px solid #dce5ea;border-radius:18px;overflow:hidden;transition:transform .2s,box-shadow .2s}.review-tile:hover{transform:translateY(-4px);box-shadow:0 9px 24px rgba(0,80,140,.09)}
.review-image{display:block;aspect-ratio:4/3;overflow:hidden;background:var(--blue-t)}.review-image img{display:block;width:100%;height:100%;object-fit:cover;filter:none!important;transition:transform .3s}.review-tile:hover img{transform:scale(1.035)}
.review-noimage{display:flex;align-items:center;justify-content:center;flex-direction:column;height:100%;color:var(--blue);font-size:38px;font-family:var(--disp);background:var(--blue-t)}.review-noimage small{font:500 15px Fredoka,sans-serif;letter-spacing:.2em;margin-top:8px}
.review-body{display:flex;flex-direction:column;flex:1;padding:22px}.review-body h3{font-size:21px;line-height:1.55;margin:0 0 10px;color:var(--blue)}.review-body h3 a:hover{text-decoration:underline}.review-date{font-size:14px!important;color:var(--red)!important;margin:0 0 12px!important}.review-excerpt{font-size:16px;line-height:1.8;color:var(--grey);margin:0 0 22px}.review-read{align-self:flex-start;margin-top:auto;border-radius:999px;background:var(--blue);color:white;padding:9px 18px;font-size:14px}
@media(max-width:980px){.review-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:620px){.review-grid{grid-template-columns:1fr}.review-body{padding:20px}.review-month>h2{font-size:25px!important}}
`;document.head.appendChild(style)})();

/* Consistent service registration: one shared section directly after activity facts. */
(function(){
['p4-1','p4-2','p4-3','p4-4'].forEach(id=>{
const page=PAGES[id];if(!page)return;
let registration=null,firstRegistrationFacts=null;
page.blocks.forEach(block=>{
if(block.k==='btns'&&/報名/.test(block.h||''))registration=registration||block;
if(block.go&&/報名/.test(block.go[0])){
firstRegistrationFacts=firstRegistrationFacts||block;
registration=registration||{id:id+'-register',k:'btns',links:[['學校及團體網上報名',block.go[1]]]};
delete block.go;
}
});
if(!registration)return;
page.blocks=page.blocks.filter(block=>!(block.k==='btns'&&/報名/.test(block.h||'')));
registration.h='報名';
registration.links=registration.links.slice(0,1).map(([,url])=>['學校及團體網上報名',url]);
let anchor=page.blocks.findIndex(block=>block.h==='活動資料');
if(anchor<0&&firstRegistrationFacts)anchor=page.blocks.indexOf(firstRegistrationFacts);
if(anchor<0)anchor=page.blocks.findIndex(block=>block.k==='tabs'||block.k==='facts');
page.blocks.splice(anchor<0?page.blocks.length:anchor+1,0,registration);
});
})();

/* Youth stories and four illustrated learning units. */
(function(){
const page=PAGES['p4-3'];
page.blocks=page.blocks.filter(b=>b.id!=='p4-3-2-1b');
page.blocks.push({id:'youth-personal-stories',h:'參加者故事',k:'youthStories',items:[
{name:'Esha',title:'讓每個人都閃耀',image:'img/story-esha.jpg',summary:'18 歲的巴基斯坦裔女生 Esha 透過少數族裔青年運動導師培訓計劃，探索自己的潛能，找到展現自己的舞台。',url:'https://www.facebook.com/treatshk/posts/pfbid028rPwNgeTZwQDtYESt6ahEMuyNeXnTHxqu8TgUVwRvYwWH7XkELkswVkSY7BmTVe6l'},
{name:'Benson',title:'貪玩的人・學為人之道',image:'img/story-benson.jpg',summary:'熱愛運動的中六學生 Benson 是學生會會長，也是校園中的活躍分子。他參加運動導師培訓計劃，學習的不只是帶領運動，更是如何與人相處。',url:'https://www.facebook.com/treatshk/posts/pfbid02WdX8tjuo6EmUcETSvU6nDJgs7KY5HtqXiFN9yNQQLcgQ8w7D4RiEAuhH7uxDgq8Sl'}]});
KINDS.youthStories=b=>`<div class="youth-story-grid">${b.items.map(x=>`<article class="youth-story"><a href="${x.url}" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true"><img src="${x.image}" alt="" loading="lazy"></a><div><span class="youth-story-name">${x.name} 的故事</span><h3>${x.title}</h3><p>${x.summary}</p><a class="youth-story-read" href="${x.url}" target="_blank" rel="noopener">閱讀故事 ↗</a></div></article>`).join('')}</div>`;
const unit=page.blocks.find(b=>b.id==='p4-3-1-1a');unit.k='youthUnits';
unit.photos=['img/reviews/2026-04-24-1.jpg','img/reviews/2026-02-26-1.jpg','img/reviews/2026-03-04-1.jpg','img/reviews/2025-05-07-1.jpg'];
unit.descriptions=['認識共融理念與兒童權利，學習尊重每一個人的參與。','認識不同能力與文化背景，探索多元的溝通方式。','透過互動與親身接觸，與不同能力的伙伴一起學習。','將共融帶入社區，與伙伴攜手分享及實踐所學。'];
KINDS.youthUnits=b=>`<div class="youth-units">${b.items.map(([label,title],i)=>`<article class="youth-unit" style="--unit-accent:var(--${['blue','green','red','blue'][i]})"><div class="youth-unit-photo"><img src="${b.photos[i]}" alt="共融計劃活動配圖" loading="lazy"><span>${label}</span></div><div class="youth-unit-copy"><h3>${title.replace(/[「」]/g,'')}</h3><p>${b.descriptions[i]}</p></div></article>`).join('')}</div><p class="unit-photo-note">圖片為共融計劃及社區活動配圖。</p>`;
const style=document.createElement('style');style.textContent=`
.youth-story-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:26px}.youth-story{overflow:hidden;background:#fff;border:1px solid #dce5ea;border-radius:22px;display:flex;flex-direction:column}.youth-story>a{display:block;background:var(--blue-t)}.youth-story img{display:block;width:100%;aspect-ratio:4/3;object-fit:contain}.youth-story>div{padding:24px;display:flex;flex-direction:column;align-items:flex-start;flex:1}.youth-story-name{font-size:14px;color:var(--red);margin-bottom:8px}.youth-story h3{font-size:25px;color:var(--blue);margin:0 0 12px}.youth-story p{font-size:17px;line-height:1.8;color:var(--grey);margin:0 0 20px}.youth-story-read{font-size:15px;color:var(--blue);margin-top:auto;text-decoration:underline;text-underline-offset:4px}
.youth-units{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px}.youth-unit{min-width:0;border-radius:18px;background:white;overflow:hidden;border:1px solid #dce5ea;border-bottom:4px solid var(--unit-accent)}.youth-unit-photo{position:relative;aspect-ratio:4/3;overflow:hidden}.youth-unit-photo img{display:block;width:100%;height:100%;object-fit:cover}.youth-unit-photo span{position:absolute;left:12px;bottom:12px;background:var(--unit-accent);color:#fff;padding:5px 12px;border-radius:999px;font-size:14px}.youth-unit-copy{padding:20px}.youth-unit h3{font-size:21px;line-height:1.5;color:var(--blue);margin:0 0 12px}.youth-unit p{font-size:16px;line-height:1.8;color:var(--grey);margin:0}.unit-photo-note{font-size:12px;color:var(--grey);margin-top:10px}
@media(max-width:1000px){.youth-units{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:600px){.youth-story-grid,.youth-units{grid-template-columns:1fr}.youth-story>div{padding:20px}}
`;document.head.appendChild(style);
})();

/* Alternating five-stage journey. */
(function(){
PAGES['p4-3'].blocks.find(b=>b.id==='p4-3-2-1a').k='fiveStageJourney';
const icons=[
'<path d="M9 18h6m-5 3h4M8 13a6 6 0 1 1 8 0c-1 1-1.5 2-1.5 3h-5c0-1-.5-2-1.5-3Z"/>',
'<rect x="3" y="7" width="18" height="14" rx="3"/><path d="M8 7V4h8v3M3 12h18m-11 0v3h4v-3"/>',
'<path d="m3 8 9-5 9 5-9 5-9-5Zm4 3v6c3 3 7 3 10 0v-6m4-3v8"/>',
'<circle cx="9" cy="7" r="3"/><circle cx="18" cy="9" r="2"/><path d="M3 21v-4a6 6 0 0 1 12 0v4m2-7a4 4 0 0 1 4 4v3"/>',
'<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/>'
];
KINDS.fiveStageJourney=b=>`<ol class="five-stage-journey">${b.items.map(([title,description],i)=>`<li class="stage-stop" style="--stage-color:var(--${['blue','green','red','blue','green'][i]})"><span class="stage-label">階段 ${String(i+1).padStart(2,'0')}</span><div class="stage-panel"><div class="stage-text"><h3>${title.replace(/^\d+\s*/,'')}</h3><p>${description}</p></div><span class="stage-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[i]}</svg></span></div>${i<4?`<svg class="stage-connector" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="${i%2?'M 76 0 V 20 Q 76 50 60 50 H 40 Q 24 50 24 80 V 100':'M 24 0 V 20 Q 24 50 40 50 H 60 Q 76 50 76 80 V 100'}"/></svg>`:''}</li>`).join('')}</ol>`;
const style=document.createElement('style');style.textContent=`
.five-stage-journey{list-style:none;padding:0;margin:28px auto 0;max-width:1000px}
.stage-stop{position:relative;padding-bottom:62px;isolation:isolate}.stage-stop:last-child{padding-bottom:0}
.stage-label{display:block;width:64%;text-align:center;color:var(--stage-color);font:500 20px Fredoka,sans-serif;margin-bottom:12px;letter-spacing:.04em}
.stage-panel{position:relative;display:flex;align-items:center;gap:24px;width:64%;min-height:150px;padding:24px 28px;border:2px solid var(--stage-color);border-radius:32px;background:#fff;box-shadow:0 4px 12px rgba(0,80,140,.035);z-index:1}
.stage-text{flex:1;min-width:0}.stage-text h3{font-size:23px;color:var(--blue);line-height:1.4;margin:0 0 9px}.stage-text p{font-size:17px;line-height:1.8;color:var(--grey);margin:0}
.stage-icon{display:grid;place-items:center;flex:none;width:68px;height:68px;border-radius:50%;background:color-mix(in srgb,var(--stage-color) 12%,white);color:var(--stage-color)}.stage-icon svg{width:34px;height:34px}
.stage-stop:nth-child(even) .stage-label,.stage-stop:nth-child(even) .stage-panel{margin-left:auto}.stage-stop:nth-child(even) .stage-panel{flex-direction:row-reverse}.stage-stop:nth-child(even) .stage-text{text-align:right}
.stage-connector{position:absolute;left:0;bottom:-80px;width:100%;height:142px;z-index:0;pointer-events:none;overflow:visible}.stage-connector path{fill:none;stroke:var(--blue);stroke-width:2;stroke-dasharray:5 6;stroke-linecap:round;vector-effect:non-scaling-stroke;opacity:.5}
@media(max-width:700px){.stage-panel{width:90%;padding:20px;gap:16px;min-height:155px;border-radius:25px}.stage-label{width:90%}.stage-text h3{font-size:21px}.stage-text p{font-size:16px}.stage-icon{width:52px;height:52px}.stage-icon svg{width:28px;height:28px}.stage-stop{padding-bottom:42px}.stage-connector{height:122px}.stage-stop:nth-child(even) .stage-text{text-align:left}}
@media(max-width:420px){.stage-panel,.stage-label{width:100%}.stage-panel{gap:12px;padding:18px}.stage-icon{width:44px;height:44px}.stage-stop:nth-child(even) .stage-panel{flex-direction:row}.stage-connector{display:none}}
`;document.head.appendChild(style);
})();

(function(){const style=document.createElement('style');style.textContent=`
@media(min-width:1100px){.five-stage-journey{max-width:1200px}.stage-panel,.stage-label{width:88%}.stage-panel{gap:18px;padding:24px}.stage-icon{width:56px;height:56px}.stage-text p{white-space:nowrap;font-size:16px}}
`;document.head.appendChild(style)})();

(function(){const style=document.createElement('style');style.textContent=`
#p4-4-2>p.t{background:#fff;border:2px solid var(--blue-t);border-radius:24px;padding:26px 30px;margin:16px 0 0;line-height:1.9;box-shadow:0 4px 14px rgba(0,80,140,.035)}
@media(max-width:600px){#p4-4-2>p.t{padding:20px;border-radius:18px}}
`;document.head.appendChild(style)})();

(function(){const style=document.createElement('style');style.textContent='#p4-4-1a .facts{background:#fff}';document.head.appendChild(style)})();

/* Clickable media coverage cards. */
(function(){
const items=[{"title": "SCMP – Operation Santa Claus: Hong Kong children find joy and inclusion in mochi-making", "date": "2026.02.28", "url": "https://www.scmp.com/news/hong-kong/society/article/3344956/operation-santa-claus-hong-kong-children-find-joy-and-inclusion-mochi-making", "image": "img/media/scmp-mochi.webp", "summary": ""}, {"title": "SCMP – Hong Kong students, bankers have a ball for charity with Operation Santa Claus", "date": "2026.01.02", "url": "https://www.scmp.com/news/hong-kong/society/article/3338327/hong-kong-students-bankers-have-ball-charity-operation-santa-claus", "image": "img/media/scmp-basketball.webp", "summary": ""}, {"title": "Now TV – 杏林在線：帆船無障礙", "date": "2025.01.10", "url": "https://www.youtube.com/watch?v=r5Wc48RDw54&list=PLDQ1DoSV23dO_uuLyN6exbqJaogMIDadH", "image": "img/media/media-2.jpg", "summary": ""}, {"title": "RTHK – #Hashtag Hong Kong", "date": "2025.01.05", "url": "https://www.facebook.com/share/p/16nXaokBfm/", "image": "img/media/media-3.jpg", "summary": "✨【電台節目#HashtagHK】探討香港殘疾兒童的社區參與✨  \n✨[Radio Program #HashtagHK] Exploring Community Engagement for Children with Disabilities in Hong Kong ✨  "}, {"title": "香港01 – 專訪｜自閉症男生加入帆船隊後蛻變成引導者 大風大浪仍無所畏懼", "date": "2023.12.27", "url": "https://www.hk01.com/親子/968714", "image": "img/media/media-4.jpg", "summary": "現時中四的文匡在幼稚園時確診自閉症（ASD）和專注力失調及過度活躍症（ADHD）。不擅長運動的他機緣巧合下於2年前開始參加由慈善團體舉辦的「親切"}, {"title": "香港01 – 專訪｜受校園霸凌被誣衊考試抄襲 SEN生感自卑 轉校後如獲新生", "date": "2023.10.18", "url": "https://www.hk01.com/親子/926627", "image": "img/media/media-5.jpg", "summary": "目前就讀香港西區扶輪社匡智晨輝學校中五級的紫恩患有輕度智力障礙，她於初小時就讀主流學校，因其障礙不被同學理解，不斷遭受欺凌，也曾抱有自殘的"}, {"title": "商業電台 – 同途有心人：童心同行", "date": "2023.04.02", "url": "https://www.facebook.com/treatshk/posts/pfbid0zVYkQreSxop71Bc8WqjPGvKgoaSWWeJHGaX71k6BjmEernjpuoofDkdkEsyGdP3Cl", "image": "img/media/media-6.jpg", "summary": "【📻電台節目重溫】社區探索活動設計竅妙\n\n我哋嘅服務主管李嘉萱早前聯同參與過親切大澳社區探索活動嘅能障同學、特殊學校嘅老師及義工，參與商業電台881「同途有心人」節目。社區元素對能障兒童嚟講點解咁重要？親切如何運用社區探索活動，回應到能障學童嘅成長需要？活動嘅設計上，我哋如何因應"}, {"title": "東網 – 新冠疫情下人際關係疏離　浸大研究證共融運動增自信", "date": "2023.03.18", "url": "https://hk.on.cc/hk/bkn/cnt/news/20230318/bkn-20230318154103802-0318_00822_001.html", "image": "img/media/media-7.jpg", "summary": "在超過3年的新冠疫情下，社交距離措施影響人與人的交流。香港浸會大學教育學系團隊今日(18日)公布研究，結果發現有特殊需要"}, {"title": "香港商報 – 浸大與親切合辦兒童共融創新會議", "date": "2021.12.05", "url": "http://www.hkcd.com/hkcdweb/content/2021/12/05/content_1309966.html", "image": "img/media/hkcd-inclusion-conference.png", "summary": ""}, {"title": "運動筆記 – 【挑戰賽圓滿舉行】能力障礙青年與主流人士組隊乘風破浪 啟動共融潛能", "date": "2021.11.16", "url": "https://hk.running.biji.co/index.php?q=news&act=info&id=5110", "image": "img/media/running-biji-sailing-2021.png", "summary": ""}, {"title": "香港01 – 調查指本港存職場及社會歧視：「街上落貨畀人問候叫我返鄉下！」", "date": "2021.05.22", "url": "https://www.hk01.com/18區新聞/628377", "image": "img/media/media-10.jpg", "summary": "本港號稱是多元社會，但對少數族裔的歧視仍未消減。有調查訪問港人及南亞人士，發現超過4成少數族裔人士曾在工作及社區遭敵意態度對待，亦有三成半"}, {"title": "香港01 – 上堂學打乒乓波遭教練孤立　近半智障人士參與體育活動被排斥", "date": "2021.01.17", "url": "https://www.hk01.com/18區新聞/575621", "image": "img/media/media-11.jpg", "summary": "智障人士要運動原來不易，有智障人士的母親表示，曾為兒子報名參加康文署的乒乓班，但因教練不懂得與智障人士相處，安排其子「企埋一邊拍下個波就算"}, {"title": "SCMP – Strangers in their own city: charity fights for Hong Kong's ethnic minority members through Operation Santa Claus funding", "date": "2020.11.25", "url": "https://www.scmp.com/news/hong-kong/society/article/3111139/strangers-their-own-city-charity-fights-hong-kongs-ethnic", "image": "img/media/scmp-ethnic-minorities.webp", "summary": ""}, {"title": "體路 – 能障青年與主流人士組隊揚帆出賽 啟動共融潛能", "date": "2020.11.17", "url": "https://www.sportsroad.hk/archives/316120", "image": "img/media/sportsroad-sailing.png", "summary": ""}, {"title": "親子王 – 破解偏見撃出友誼", "date": "2020.02.20", "url": "https://www.facebook.com/smartparentshk/videos/727065417698051/", "image": "img/media/media-14.jpg", "summary": "世上有項唯一可以讓三隊同時作賽的球類運動，名為「健球」。最近有機構在港引入這新興運動，還加入共融元素，讓有特殊需要學生跟商界義工一齊合作。\n\n想了解更多健球的共融理念，可參閱今日出版的《親子王》。\n\n——————\n更多精彩內容即去《親子王》\n揭頁版網頁：bit.ly/1rnzTU"}, {"title": "東網透視 – 自閉青年職場實習　學會沖咖啡與遊客溝通", "date": "2019.10.05", "url": "https://hk.on.cc/hk/bkn/cnt/news/20191005/bkn-20191005001402974-1005_00822_001.html", "image": "img/media/media-15.jpg", "summary": "踏入尖沙咀一間咖啡店，咖啡香味撲鼻而來，患有輕度智障及自閉症的青年彭鈺林小心翼翼將熱水倒進杯內，為客人沖調飲品。約半年前，他經社工介紹參與非政府機構「親切」的青少年職場共融體驗計劃，在店內實習及兼職，性格由沉默寡言變得主動。彭媽媽是首名顧客，她回想喝兒子首杯沖泡的咖啡，每一口都甜"}];
const escape=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
KINDS.mediaCards=()=>`<div class="media-grid">${items.map((x,i)=>{const parts=x.title.split(' – '),outlet=parts.length>1?parts.shift():'媒體報道',title=parts.join(' – ')||x.title;return `<a class="media-card" href="${escape(x.url)}" target="_blank" rel="noopener"><div class="media-cover">${x.image?`<img src="${x.image}" alt="${escape(title)}" loading="lazy">`:`<div class="media-brand-cover" style="--media-color:var(--${['blue','green','red'][i%3]})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h5v5H7zM15 8h3m-3 4h3M7 16h11"/></svg><span>${escape(outlet)}</span></div>`}<span class="media-outlet">${escape(outlet)}</span></div><div class="media-copy"><time>${x.date}</time><h3>${escape(title)}</h3>${x.summary?`<p>${escape(x.summary)}</p>`:''}<span class="media-read">${/youtube|videos/.test(x.url)?'觀看報道':'閱讀報道'} <span aria-hidden="true">↗</span></span></div></a>`}).join('')}</div>`;
PAGES['p8'].blocks=[{id:'media-coverage-cards',h:'媒體報道及影音',k:'mediaCards'}];
const style=document.createElement('style');style.textContent=`
#media-coverage-cards{opacity:1;transform:none}.media-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}.media-card{display:flex;flex-direction:column;min-width:0;background:#fff;border:1px solid #dce5ea;border-radius:20px;overflow:hidden;transition:transform .2s,box-shadow .2s}.media-card:hover{transform:translateY(-4px);box-shadow:0 10px 28px rgba(0,80,140,.1)}.media-card:focus-visible{outline:3px solid var(--blue);outline-offset:4px}.media-cover{position:relative;aspect-ratio:16/10;background:var(--blue-t);overflow:hidden}.media-cover>img{display:block;width:100%;height:100%;object-fit:cover}.media-outlet{position:absolute;left:16px;bottom:14px;padding:5px 12px;border-radius:99px;background:#fff;color:var(--blue);font-size:13px;font-weight:700}.media-brand-cover{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:color-mix(in srgb,var(--media-color) 10%,white);color:var(--media-color);font-size:24px;font-weight:700}.media-brand-cover svg{width:52px;height:52px}.media-copy{padding:22px;display:flex;flex-direction:column;align-items:flex-start;flex:1}.media-copy time{font-size:14px;color:var(--red);margin-bottom:10px}.media-copy h3{font-size:21px;line-height:1.55;color:var(--blue);margin:0 0 14px}.media-copy p{font-size:16px;line-height:1.8;color:var(--grey);margin:0 0 18px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.media-read{margin-top:auto;padding-top:12px;font-size:15px;color:var(--green);display:flex;gap:8px}.media-card:hover h3{text-decoration:underline;text-underline-offset:4px}@media(max-width:1000px){.media-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:620px){.media-grid{grid-template-columns:1fr}.media-copy{padding:20px}}
`;document.head.appendChild(style);
})();

/* Inline playback for both play-at-home video collections. */
(function(){
PAGES['p6-4'].blocks.forEach(b=>{if(b.k==='ulist'&&b.rows.every(r=>r[2].includes('youtube.com/watch')))b.k='inlineVideos';});
KINDS.inlineVideos=b=>`<div class="inline-video-grid">${b.rows.map(([raw,,url])=>{const title=raw.replace(/^p\d+(?:-\d+)+\s*/,''),id=new URL(url).searchParams.get('v');return `<article class="inline-video-card"><div class="inline-video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${id}?rel=0" title="${title}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="inline-video-caption"><h3>${title}</h3><a href="${url}" target="_blank" rel="noopener">在 YouTube 觀看 ↗</a></div></article>`}).join('')}</div>`;
const style=document.createElement('style');style.textContent=`
.inline-video-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}.inline-video-card{min-width:0;background:#fff;border:1px solid #dce5ea;border-radius:18px;overflow:hidden}.inline-video-frame{aspect-ratio:16/9;background:#101820}.inline-video-frame iframe{display:block;width:100%;height:100%;border:0}.inline-video-caption{padding:20px}.inline-video-caption h3{font-size:22px;line-height:1.5;color:var(--blue);margin:0 0 10px}.inline-video-caption a{font-size:14px;color:var(--green);text-decoration:underline;text-underline-offset:4px}@media(max-width:1000px){.inline-video-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:620px){.inline-video-grid{grid-template-columns:1fr}}
`;document.head.appendChild(style);
})();

/* Explicit white backgrounds for homepage and governance panels. */
(function(){const style=document.createElement('style');style.textContent=`
#app .hero,#app .hero>.wrap{background-color:#fff!important}
#p2-2-0 .facts,#p2-2-1 .facts{background:#fff!important}
`;document.head.appendChild(style)})();

/* Activity sibling navigation belongs below the hero description. */
PAGES['p3-1'].subset=['p3-1','p3-2'];
PAGES['p3-2'].subset=['p3-1','p3-2'];

(function(){const style=document.createElement('style');style.textContent='.review-image{position:relative}.review-photo-label{position:absolute;bottom:10px;left:10px;background:rgba(255,255,255,.94);padding:3px 9px;border-radius:99px;color:var(--blue);font-size:11px;line-height:1.5}';document.head.appendChild(style)})();
