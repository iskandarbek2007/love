/* ====== НАСТРОЙКИ — меняй здесь ====== */
const HER = "любимая";           // как ты её называешь
const PLAYLIST = [               // src: путь к mp3/m4a в папке songs
  {title:"Случайности не случайны", artist:"Мот", src:"songs/01-mot-sluchajnosti.m4a"},
  {title:"Иначе всё это зря", artist:"Мари Краймбрери", src:"songs/02-marikraimbreri-inache.m4a"},
  {title:"Мне нравится", artist:"Егор Крид", src:"songs/03-egor-krid-mne-nravitsya.mp3"},
  {title:"По буквам", artist:"Мот", src:"songs/04-mot-po-bukvam.m4a"},
  {title:"Чувства", artist:"Иван Здонюк, TOVSTIK", src:"songs/05-zdonyuk-tovstik-chuvstva.m4a"},
  {title:"Вопреки", artist:"RYZE", src:"songs/06-ryze-vopreki.m4a"},
  {title:"Школа (Берёзка), Acoustic", artist:"Rauf & Faik", src:"songs/07-rauf-faik-shkola.m4a"},
  {title:"Ты так красива", artist:"Джарахов", src:"songs/08-dzharakhov-krasiva.m4a"},
  {title:"Te Amo", artist:"Ханна", src:"songs/09-hanna-te-amo.m4a"},
  {title:"Как в первый раз", artist:"Ханна, Artik", src:"songs/10-hanna-artik-kak-v-pervyj-raz.m4a"},
  {title:"Звёзды в лужах", artist:"30.02", src:"songs/11-30-02-zvezdy-v-luzhah.m4a"}
];
const PAGES = [
 {book:true},
 {cover:true,big:"4 ноября",sub:"день, с которого всё началось"},
 {t:"Обычный день",l:["Если бы кто-то утром сказал мне, что этот день изменит всё, я бы только улыбнулся и пошёл дальше.","Обычный ноябрьский день. Серое небо, мокрые листья под ногами, привычные дела и ни одного предчувствия.","Я пил свой кофе, смотрел в окно и не знал, что где-то совсем рядом уже начинается наша история."]},
 {t:"Всё было как всегда",l:["Утро началось так же, как сотни других: будильник, спешка, мысли о делах.","Но судьба любит прятать самые важные встречи в самых простых днях. Чтобы мы не успели испугаться и не успели подготовиться — просто встретили."]},
 {t:"И тут появилась ты",l:["Не было грома, не было музыки с небес. Просто ты — и вдруг мир стал на полтона теплее.","Я ещё не знал твоего смеха так, как знаю сейчас. Не знал, как ты задумчиво хмуришься и как светятся твои глаза, когда ты рада.","Но что-то внутри уже тихо сказало: «Запомни этот момент. Он особенный»."]},
 {t:"Что я запомнил",l:["✦ Первый взгляд, после которого я забыл, что хотел сказать.","✦ Твой голос — спокойный, тёплый, как плед в холодный вечер.","✦ Улыбку, которая появилась раньше слов.","✦ Ощущение, что время вдруг замедлилось, чтобы я успел всё заметить."]},
 {t:"Что я почувствовал",l:["Радость. Тихую, светлую, такую, когда не можешь перестать улыбаться без причины.","Я возвращался домой и ловил себя на том, что пересказываю в голове каждое слово. Каждую секунду.","Ночью я долго не мог уснуть — не от тревоги, а от счастья. Впервые за долгое время хотелось, чтобы наступило завтра."]},
 {t:"В тот вечер я понял",l:["Бывают люди, которые проходят мимо. Бывают те, кто остаётся ненадолго.","А бывают такие, после встречи с которыми хочется сказать самому себе: «Вот оно. Вот то самое».","Я ещё не произносил этого вслух. Но уже знал."]},
 {t:"Как я был рад",meter:true,l:["Если бы радость можно было измерить, шкала закончилась бы ещё до обеда.","Сто процентов — это про обычные дни. А 4 ноября было больше."]},
 {t:"Спасибо, "+HER,l:["Спасибо, что в тот день ты оказалась именно там, где я мог тебя найти.","Спасибо, что осталась. За каждое «привет», каждое «скучаю» и за то, что рядом с тобой я становлюсь лучше.","За твоё терпение, нежность и смех, от которого любой серый день становится солнечным."]},
 {t:"Обещание",l:["Каждый год, когда наступает 4 ноября, я буду вспоминать тот день и благодарить его.","Я обещаю беречь то, что у нас есть: наши разговоры, наши шутки, наши тихие вечера.","И писать новые главы, одну красивее другой."]},
 {fin:true,big:"♥",sub:"Это только первая глава. Остальные мы ещё напишем вместе."}
];

const STK=[[["✨",8,6,"tw"],["✨",86,10,"tw"],["🌹",48,90,"float"]],[["🕊️",80,8,"float"],["♥",10,86,"beat"]],[["☕",82,84,"steam"],["🍂",8,6,"sway"]],[["⏰",84,86,"sway"],["🍃",10,8,"sway"]],[["✨",86,8,"tw"],["💫",8,84,"spin"],["🌟",84,84,"tw"]],[["📷",84,86,"float"],["💭",10,8,"float"]],[["🦋",84,10,"flit"],["💗",10,86,"beat"]],[["🌙",84,8,"sway"],["⭐",10,86,"tw"]],[["🎈",86,84,"float"],["🎉",8,10,"beat"]],[["🌷",84,86,"sway"],["💌",10,8,"float"]],[["💍",84,86,"beat"],["🕯️",10,84,"tw"]],[["♥",20,20,"beat"],["♥",78,30,"beat"],["💞",48,82,"float"]]];
/* ====== КНИГА ====== */
const $=s=>document.querySelector(s);
const stage=$('#stage'),dots=$('#dots'),book=$('#book');
let idx=0;
PAGES.forEach((p,i)=>{
  const d=document.createElement('div');d.className='page';d.style.zIndex=PAGES.length-i;
  if(p.book){d.className+=' cv';d.innerHTML=`<div class="cvf"></div><p class="cvs line" style="--i:0">наша книга</p><div class="cvt">Новая глава<br>жизни</div><div class="cvh">♥</div><p class="cvs line" style="--i:3">глава первая · 4 ноября</p><p class="cvo line" style="--i:5">нажми, чтобы открыть ✦</p>`}else if(p.cover||p.fin){d.innerHTML=`<div class="big line" style="--i:0">${p.big}</div><p class="sub line" style="--i:1">${p.sub}</p>`}
  else{d.innerHTML=`<h2 class="line" style="--i:0">${p.t}</h2>`+(()=>{let c=0;return p.l.map(x=>`<p>${x.split(' ').map(w=>`<span class="w" style="--d:${(c++*.07+.9).toFixed(2)}s">${w}</span>`).join(' ')}</p>`).join('')})()+(p.meter?`<div class="meter line" style="--i:7"><i></i></div><p class="sub line" style="--i:9">больше, чем сто ♥</p>`:'')+`<div class="num">${i-1}</div>`}
  (STK[i]||[]).forEach(s=>{const e=document.createElement('span');e.className='st '+s[3];e.textContent=s[0];if(s[2]<50){e.style.top='12px';e.style.left=(16+38*(d._t=(d._t||0)+1)-38)+'px'}else{e.style.bottom='12px';e.style.right=(16+38*(d._b=(d._b||0)+1)-38)+'px'}e.onclick=ev=>{ev.stopPropagation();const r=e.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2,10,['♥','✨','💖'])};d.appendChild(e)});
  stage.appendChild(d);
  const dot=document.createElement('i');dots.appendChild(dot);
});
const pages=[...stage.children],dd=[...dots.children];
function go(n){
  idx=Math.max(0,Math.min(PAGES.length-1,n));
  pages.forEach((p,i)=>{p.classList.toggle('flipped',i<idx);p.classList.toggle('active',i===idx)});
  dd.forEach((d,i)=>d.classList.toggle('on',i===idx));scene();
  $('#prev').disabled=idx===0;$('#next').disabled=idx===PAGES.length-1;
}
let TT=[];
function burst(x,y,n,ch,R){for(let i=0;i<n;i++){const s=document.createElement('span');s.className='bp';s.textContent=ch[Math.floor(Math.random()*ch.length)];s.style.left=x+'px';s.style.top=y+'px';if(R)s.style.fontSize=(16+Math.random()*30)+'px';const a=Math.random()*6.28,d=40+Math.random()*(R||150);s.style.setProperty('--dx',Math.cos(a)*d+'px');s.style.setProperty('--dy',Math.sin(a)*d-40+'px');book.appendChild(s);setTimeout(()=>s.remove(),1400)}}
function flash(){const f=document.createElement('div');f.className='fl';book.appendChild(f);setTimeout(()=>f.remove(),900)}
let AC;function snd(kind){try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();if(AC.state==='suspended')AC.resume();const t=AC.currentTime;
 const nz=dur=>{const b=AC.createBuffer(1,AC.sampleRate*dur,AC.sampleRate),a=b.getChannelData(0);for(let i=0;i<a.length;i++)a[i]=(Math.random()*2-1)*Math.pow(1-i/a.length,2);const s=AC.createBufferSource();s.buffer=b;return s};
 const play=(s,type,fr,gain,at)=>{const f=AC.createBiquadFilter(),g=AC.createGain();f.type=type;f.frequency.value=fr;g.gain.value=gain;s.connect(f);f.connect(g);g.connect(AC.destination);s.start(t+(at||0))};
 if(kind==='crack'){for(let k=0;k<8;k++)play(nz(.08),'highpass',2500+Math.random()*3000,.5,k*.07+Math.random()*.03)}
 else{const o=AC.createOscillator(),g=AC.createGain();o.frequency.setValueAtTime(140,t);o.frequency.exponentialRampToValueAtTime(28,t+.9);g.gain.setValueAtTime(1,t);g.gain.exponentialRampToValueAtTime(.001,t+1.1);o.connect(g);g.connect(AC.destination);o.start(t);o.stop(t+1.2);play(nz(1.2),'lowpass',900,1.2);play(nz(.5),'highpass',3000,.5)}}catch(e){}}
function crack(x,y){snd('crack');const NS='http://www.w3.org/2000/svg',s=document.createElementNS(NS,'svg');s.setAttribute('class','crk');s.setAttribute('width',innerWidth);s.setAttribute('height',innerHeight);
 const add=(d,dl)=>{const p=document.createElementNS(NS,'path');p.setAttribute('d',d);p.setAttribute('pathLength','1');p.style.animationDelay=dl+'s';s.appendChild(p)};
 const R=Math.hypot(innerWidth,innerHeight);
 for(let k=0;k<18;k++){let a=k/18*6.283+Math.random()*.3,px=x,py=y,L=0,d='M'+x+' '+y;const mx=R*(.3+Math.random()*.4);while(L<mx){const st=30+Math.random()*60;a+=(Math.random()-.5)*.55;px+=Math.cos(a)*st;py+=Math.sin(a)*st;L+=st;d+='L'+px.toFixed(0)+' '+py.toFixed(0)}add(d,(k*.025).toFixed(2))}
 for(let r=1;r<=5;r++){let d='';for(let k=0;k<=12;k++){const a=k/12*6.283,rr=r*75+Math.random()*35;d+=(k?'L':'M')+(x+Math.cos(a)*rr).toFixed(0)+' '+(y+Math.sin(a)*rr).toFixed(0)}add(d,(.1+r*.07).toFixed(2))}
 book.appendChild(s)}
function boom(x,y){snd('boom');flash();const c=document.querySelector('.crk');if(c)c.remove();
 const pg=pages[idx];pg.classList.add('shk');setTimeout(()=>pg.classList.remove('shk'),800);
 const w=document.createElement('div');w.className='wave';w.style.left=x+'px';w.style.top=y+'px';book.appendChild(w);setTimeout(()=>w.remove(),1200);
 const t=document.createElement('div');t.className='bm';t.textContent='Бууум!';book.appendChild(t);setTimeout(()=>t.remove(),2200);
 burst(x,y,120,['♥','💖','✨','💗','🌸','💥'],460);
 for(let i=0;i<34;i++){const e=document.createElement('div'),sz=14+Math.random()*34,a=Math.random()*6.283,dd2=100+Math.random()*420;e.className='sh';e.style.cssText+=`left:${x}px;top:${y}px;width:${sz}px;height:${sz}px;--dx:${Math.cos(a)*dd2}px;--dy:${Math.sin(a)*dd2+160}px;--r:${(Math.random()-.5)*900}deg`;book.appendChild(e);setTimeout(()=>e.remove(),1800)}}
function clearFx(){document.querySelectorAll('.crk,.wave,.bm,.sh,.bp,.fl').forEach(e=>e.remove());pages.forEach(p=>p.classList.remove('shk'))}
function scene(){TT.forEach(clearTimeout);TT=[];clearFx();document.querySelectorAll('.meter').forEach(m=>m.classList.remove('charge','boom'));
 const p=PAGES[idx],pg=pages[idx];
 if(p.meter){const m=pg.querySelector('.meter');TT.push(setTimeout(()=>m.classList.add('charge'),7900));TT.push(setTimeout(()=>{const r=m.getBoundingClientRect();crack(r.left+r.width/2,r.top+r.height/2)},8700));TT.push(setTimeout(()=>{m.classList.add('boom');const r=m.getBoundingClientRect();boom(r.left+r.width/2,r.top+r.height/2)},9500))}
 if(p.fin)TT.push(setTimeout(()=>{for(let k=0;k<4;k++)setTimeout(()=>burst(innerWidth*(.2+Math.random()*.6),innerHeight*(.25+Math.random()*.3),26,['♥','✨','💖']),k*500)},1800))}
let hi;function heart(){const h=document.createElement('span');h.className='fh';h.textContent='♥';h.style.left=Math.random()*100+'%';h.style.fontSize=(12+Math.random()*18)+'px';book.appendChild(h);setTimeout(()=>h.remove(),7200)}
$('#open1').onclick=()=>{go(0);book.classList.add('open');clearInterval(hi);hi=setInterval(heart,650)};
$('#close').onclick=()=>{clearInterval(hi);book.classList.remove('open');pages.forEach(p=>p.classList.remove('active'))};
$('#next').onclick=()=>go(idx+1);$('#prev').onclick=()=>go(idx-1);
addEventListener('keydown',e=>{if(!book.classList.contains('open'))return;
  if(e.key==='ArrowRight')go(idx+1);if(e.key==='ArrowLeft')go(idx-1);if(e.key==='Escape')$('#close').click()});
let sx=null;
book.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});
book.addEventListener('touchend',e=>{if(sx===null)return;const dx=e.changedTouches[0].clientX-sx;
  if(Math.abs(dx)>50)go(idx+(dx<0?1:-1));sx=null},{passive:true});
stage.addEventListener('click',()=>go(idx+1));

/* ====== ЗАМОЧКИ ====== */
const hint=$('#hint');let ht;
document.querySelectorAll('.locked').forEach(c=>c.addEventListener('click',()=>{
  c.classList.remove('shake');void c.offsetWidth;c.classList.add('shake');
  hint.classList.add('on');clearTimeout(ht);ht=setTimeout(()=>hint.classList.remove('on'),2200)}));

/* ====== МУЗЫКА ====== */
const mu=$('#music'),list=$('#list'),au=new Audio();let cur=0,shuf=false;
au.volume=.8;
const fmt=s=>isFinite(s)?Math.floor(s/60)+':'+String(Math.floor(s%60)).padStart(2,'0'):'0:00';
const fill=(el,p)=>el.style.setProperty('--p',p+'%');
PLAYLIST.forEach((s,i)=>{const b=document.createElement('button');b.className='track';
  b.innerHTML=`<span class="n">${i+1}</span><span class="tt"><b>${s.title}</b><small>${s.artist}</small></span><span class="eq"><i></i><i></i><i></i></span>`;
  b.onclick=()=>load(i,true);list.appendChild(b)});
function ui(p){mu.classList.toggle('play',p);$('#pp').textContent=p?'❚❚':'▶'}
function load(i,go){
  cur=i;const s=PLAYLIST[i];
  $('#mt').textContent=s.title;$('#ma').textContent=s.artist;
  [...list.children].forEach((b,k)=>b.classList.toggle('on',k===i));
  $('#seek').value=0;fill($('#seek'),0);$('#tc').textContent='0:00';$('#td').textContent='0:00';
  if(s.src){$('#note').textContent='';au.src=s.src;if(go)au.play().catch(()=>{})}
  else{au.pause();au.removeAttribute('src');ui(false);$('#note').textContent='Добавь mp3 в PLAYLIST (поле src) в script.js — и песня заиграет.'}
}
function next(){let n=(cur+1)%PLAYLIST.length;
  if(shuf&&PLAYLIST.length>1){do{n=Math.floor(Math.random()*PLAYLIST.length)}while(n===cur)}
  load(n,true)}
function prev(){if(au.currentTime>3){au.currentTime=0}else load((cur-1+PLAYLIST.length)%PLAYLIST.length,true)}
au.onplay=()=>ui(true);au.onpause=()=>ui(false);
au.onloadedmetadata=()=>$('#td').textContent=fmt(au.duration);
au.ontimeupdate=()=>{const p=au.duration?au.currentTime/au.duration*100:0;$('#seek').value=p;fill($('#seek'),p);$('#tc').textContent=fmt(au.currentTime)};
au.onended=next;
au.onerror=()=>{if(au.getAttribute('src'))$('#note').textContent='Не нашёл файл '+PLAYLIST[cur].src+' — проверь путь и название.'};
$('#pp').onclick=()=>{if(!au.getAttribute('src')){$('#note').textContent='Добавь mp3 в PLAYLIST (поле src) в script.js — и песня заиграет.';return}au.paused?au.play():au.pause()};
$('#nx').onclick=next;$('#pv').onclick=prev;
$('#seek').oninput=e=>{if(au.duration)au.currentTime=e.target.value/100*au.duration;fill(e.target,e.target.value)};
$('#vol').oninput=e=>{au.volume=e.target.value;fill(e.target,e.target.value*100)};fill($('#vol'),80);
$('#shuf').onclick=e=>{shuf=!shuf;e.currentTarget.classList.toggle('on',shuf)};
$('#rep').onclick=e=>{au.loop=!au.loop;e.currentTarget.classList.toggle('on',au.loop)};
$('#disc').onclick=()=>mu.classList.toggle('show');
$('#mx').onclick=()=>mu.classList.remove('show');
load(0,false);

/* ====== ЛЕПЕСТКИ ====== */
const cv=$('#petals'),cx=cv.getContext('2d');let W,H;
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight}rs();addEventListener('resize',rs);
const S=Array.from({length:70},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.4+.3,p:Math.random()*6}));
const P=Array.from({length:26},()=>({x:Math.random()*W,y:Math.random()*H,r:4+Math.random()*7,v:.3+Math.random()*.7,s:Math.random()*6,a:.25+Math.random()*.4}));
(function f(){cx.clearRect(0,0,W,H);
  S.forEach(s=>{s.p+=.03;cx.globalAlpha=.25+.45*Math.abs(Math.sin(s.p));cx.fillStyle='#fff3d6';cx.beginPath();cx.arc(s.x,s.y,s.r,0,7);cx.fill()});
  P.forEach(p=>{p.y+=p.v;p.s+=.015;p.x+=Math.sin(p.s)*.6;if(p.y>H+10){p.y=-10;p.x=Math.random()*W}
    cx.save();cx.translate(p.x,p.y);cx.rotate(p.s);cx.globalAlpha=p.a;cx.fillStyle='#f3b6c4';
    cx.beginPath();cx.ellipse(0,0,p.r,p.r*.55,0,0,7);cx.fill();cx.restore()});
  requestAnimationFrame(f)})();
