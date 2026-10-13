/* CONFIGURAÇÃO: coloque o número com DDI+DDD (só dígitos). Vazio = o WhatsApp deixa escolher o contato. */
const WA_NUMBER='5535997682017';
const $=s=>document.querySelector(s),RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('.wa').forEach(a=>a.href=`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(a.dataset.m)}`);
$('#yr').textContent=new Date().getFullYear();
gsap.registerPlugin(ScrollTrigger);
let lenis=null;
if(!RM&&window.Lenis){lenis=new Lenis({lerp:.1});lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(t=>lenis.raf(t*1000));gsap.ticker.lagSmoothing(0)}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(!el)return;e.preventDefault();lenis?lenis.scrollTo(el,{duration:1.4}):el.scrollIntoView({behavior:'smooth'})}));
addEventListener('scroll',()=>{const m=document.documentElement.scrollHeight-innerHeight;$('#bar').style.transform=`scaleX(${m>0?scrollY/m:0})`},{passive:true});

/* Serviços */
const SV=[['Sites e landing pages','Sites institucionais e páginas de venda feitos sob medida.','Sites institucionais, páginas de venda e de divulgação desenhados para a identidade do seu negócio, com animações pensadas para guiar o visitante até o contato.',['Design exclusivo, sem template pronto','Responsivo em celular, tablet e computador','Botões de WhatsApp e formulários integrados','Estrutura preparada para buscadores']],
['Sistemas web','Aplicações web personalizadas para a rotina da sua empresa.','Sistemas com login, painéis e regras de negócio construídos para o seu processo, em vez de adaptar a empresa a uma ferramenta genérica.',['Fluxos desenhados a partir da sua operação','Acesso por login com permissões','Integração com APIs e serviços externos','Base pronta para evoluir']],
['Agentes pessoais','Assistentes digitais que respondem, organizam e executam tarefas.','Agentes com inteligência artificial configurados para o seu contexto: atendem perguntas, organizam informações e executam tarefas repetitivas.',['Respostas alinhadas às regras do seu negócio','Conexão com as ferramentas que você já usa','Menos trabalho manual repetitivo','Ajustes contínuos conforme o uso real']],
['Automações','Processos conectados que rodam sozinhos.','Automação de rotinas como envio de mensagens, organização de dados e integração entre sistemas, para a equipe focar no que exige decisão humana.',['Rotinas executadas sem intervenção','Dados sincronizados entre sistemas','Menos erros por digitação e retrabalho','Cada etapa mapeada com clareza']],
['Gestão e estoque','Controle de produtos, entradas, saídas e cadastros.','Sistemas de gestão e controle de estoque com cadastro de produtos, movimentações e consultas rápidas, no formato que a sua operação precisa.',['Cadastro e consulta em um só lugar','Registro de entradas e saídas','Acesso pelo navegador em qualquer dispositivo','Telas ajustadas ao seu negócio']],
['Soluções personalizadas','Quando a necessidade não cabe em uma categoria.','Se o seu desafio não se encaixa nos serviços acima, a gente entende o problema e desenha a solução digital que faz sentido para ele.',['Conversa inicial para entender o cenário','Proposta clara antes de começar','Combinação livre de site, sistema e automação','Acompanhamento durante o desenvolvimento']]];
const sg=$('#sg'),sp=$('#sp');
function pick(i){[...sg.children].forEach((b,j)=>b.setAttribute('aria-selected',i===j));const s=SV[i];
sp.innerHTML=`<div><h3>${s[0]}</h3><p>${s[2]}</p><a class="btn p" target="_blank" rel="noopener" href="https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Olá, WSF Studio! Quero saber mais sobre: '+s[0]+'.')}">Pedir uma proposta</a></div><ul>${s[3].map(b=>`<li>${b}</li>`).join('')}</ul>`;
if(!RM)gsap.from(sp,{opacity:0,y:12,duration:.4})}
SV.forEach((s,i)=>{const b=document.createElement('button');b.className='cd';b.setAttribute('role','tab');b.innerHTML=`<i></i><strong>${s[0]}</strong><span>${s[1]}</span>`;b.onclick=()=>pick(i);
b.onpointermove=e=>{if(e.pointerType!=='mouse')return;const r=b.getBoundingClientRect();b.style.setProperty('--mx',(e.clientX-r.left)/r.width*100+'%');b.style.setProperty('--my',(e.clientY-r.top)/r.height*100+'%')};sg.append(b)});pick(0);

/* Projetos */
const PJ=[['Site para clínica','Site institucional','Conceito de site institucional para uma clínica fictícia, com apresentação, serviços e contato direto.',['Página única com apresentação, serviços e contato','Botão de WhatsApp para agendamento','Layout responsivo com foco em leitura rápida no celular'],'<div class="mk"><i style="width:40%"></i><b class="h"></b><div class="r"><i></i><i></i><i></i></div></div>'],
['Painel de estoque','Sistema web','Conceito de painel para controle de produtos, entradas e saídas, com dados de exemplo.',['Lista de produtos com busca e filtros','Registro de entradas e saídas','Telas para uso diário em computador e celular'],'<div class="mk d"><div style="flex:.25;flex-direction:column;align-items:stretch"><i></i><i></i><i></i></div><div><b style="height:40%"></b><b style="height:70%"></b><b style="height:55%"></b><b style="height:85%"></b></div></div>'],
['Assistente de atendimento','Agente pessoal','Conceito de assistente com IA para responder perguntas frequentes e organizar solicitações.',['Respostas baseadas nas regras do negócio','Encaminhamento para atendimento humano','Conexão com WhatsApp e outras ferramentas'],'<div class="mk a"><i></i><i></i><i style="width:38%"></i></div>']];
const pj=$('#pj'),md=$('#md');let lf=null;
PJ.forEach((p,i)=>{const a=document.createElement('article');a.className='pc';a.innerHTML=`<div class="pv">${p[4]}</div><div class="pb"><p class="tg">${p[1]}, demonstração</p><h3>${p[0]}</h3><p>${p[2]}</p><button class="btn gh">Ver detalhes</button></div>`;
a.querySelector('button').onclick=e=>{lf=e.currentTarget;$('#mt').textContent=p[0];$('#mp').textContent=p[2];$('#ml').innerHTML=p[3].map(x=>`<li>${x}</li>`).join('');md.dataset.o=true;lenis&&lenis.stop();$('#x').focus()};pj.append(a)});
const s=document.createElement('article');s.className='pc sl';s.innerHTML=`<h3>Seu projeto pode estar aqui</h3><p>Conte a sua necessidade e vamos desenhar a solução juntos.</p><a class="btn p wa" data-m="Olá, WSF Studio! Quero iniciar um projeto." target="_blank" rel="noopener">Iniciar um projeto</a>`;pj.append(s);
s.querySelector('a').href=`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Olá, WSF Studio! Quero iniciar um projeto.')}`;
const cl=()=>{md.dataset.o=false;lenis&&lenis.start();lf&&lf.focus()};$('#x').onclick=cl;md.onclick=e=>e.target===md&&cl();addEventListener('keydown',e=>e.key==='Escape'&&md.dataset.o==='true'&&cl());

/* Processo */
const PS=[['Diagnóstico e entendimento','Conversamos para entender a necessidade, o público e o que precisa funcionar.'],['Planejamento da solução','Definimos escopo, estrutura e prioridades em uma proposta clara.'],['Design e desenvolvimento','Desenhamos a interface e construímos o site ou sistema.'],['Testes e refinamento','Validamos o funcionamento em diferentes dispositivos e ajustamos os detalhes.'],['Entrega e suporte','Publicamos o projeto e acompanhamos os ajustes após a entrega.']];
PS.forEach((p,i)=>{const li=document.createElement('li');li.className='ps';li.innerHTML=`<em>${i+1}</em><div><h3>${p[0]}</h3><p>${p[1]}</p></div>`;$('#pl').append(li)});

/* Animações de scroll */
const st=$('#st');st.innerHTML=st.textContent.split(' ').map(w=>`<span>${w}</span> `).join('');
if(!RM){
 gsap.to('#st span',{opacity:1,stagger:.1,ease:'none',scrollTrigger:{trigger:st,start:'top 80%',end:'bottom 45%',scrub:true}});
 gsap.to('#lf',{scaleY:1,ease:'none',scrollTrigger:{trigger:'#pl',start:'top 70%',end:'bottom 60%',scrub:true}});
 gsap.utils.toArray('.ps div').forEach(el=>gsap.from(el,{opacity:0,x:24,duration:.7,scrollTrigger:{trigger:el,start:'top 80%',toggleActions:'play none none reverse'}}));
}

/* HERO 3D */
let P=RM?.3:0;
try{const t=document.createElement('canvas');webgl=!!(t.getContext('webgl2')||t.getContext('webgl'))}catch(e){}
if(!RM){
 ScrollTrigger.create({trigger:'#hero',start:'top top',end:'+=750%',pin:true,scrub:true,onUpdate:s=>{P=s.progress}});
 gsap.timeline({defaults:{ease:'none'},scrollTrigger:{trigger:'#hero',start:'top top',end:'+=750%',scrub:.5}}).to('#veil',{opacity:1,duration:.14},.78).to({},{duration:.001},1);
}else{$('#veil').style.display='none';$('#cue').style.display='none';$('#rail').style.display='none'}
(function(){
const cv=$('#gl'),x=cv.getContext('2d'),FR=window.FRAMES||[],N=FR.length,hero=$('#hero'),cue=$('#cue'),rail=$('#rail i');
if(!N){$('#fb').hidden=false;return}
const im=new Array(N);let dirty=1,rdy=RM;
setTimeout(()=>{rdy=true;dirty=1},900);
const ld=i=>{if(i>=N)return;const g=new Image();g.decoding='async';g.onload=()=>{im[i]=g;dirty=1;ld(i+4)};g.onerror=()=>ld(i+4);g.src=FR[i]};
for(let k=0;k<4;k++)ld(k);
const near=i=>{for(let k=i;k>=0;k--)if(im[k])return im[k];for(let k=i;k<N;k++)if(im[k])return im[k]};
const WG=[...document.querySelectorAll('.wg')].map(el=>({el,c:el.querySelector('.wc'),ln:el.querySelector('line'),d:el.querySelector('.wd'),a:JSON.parse(el.dataset.a||'null'),r:JSON.parse(el.dataset.r),k:el.dataset.k,on:false}));
let W=0,H=0,last=-1;const lr=(a,b,t)=>a+(b-a)*t,eo=t=>1-Math.pow(1-t,3),cp=(v,a,b)=>Math.max(a,Math.min(b,v));
function geo(g,fx){const sc=Math.max(W/g.naturalWidth,H/g.naturalHeight),dw=g.naturalWidth*sc,dh=g.naturalHeight*sc;return{dw,dh,dx:Math.min(0,Math.max(W-dw,W/2-fx*dw)),dy:(H-dh)/2}}
function fit(g,al,G){x.globalAlpha=al;x.drawImage(g,G.dx,G.dy,G.dw,G.dh)}
function upd(u,p,G,k){
 const vw=cv.clientWidth,vh=cv.clientHeight,dock=vw<720;hero.classList.toggle('dock',dock);
 cue.style.opacity=p<.03&&!RM?1:0;rail.style.transform=`scaleY(${Math.min(1,p)})`;
 WG.forEach((w,j)=>{const on=RM?j===0:rdy&&(w.k==='p'?p>=w.r[0]:u>=w.r[0]&&u<w.r[1]);if(on!==w.on){w.on=on;w.el.dataset.on=on}
  if(!on||dock||!w.a)return;
  const t=cp((u-w.r[0])/(w.r[1]-w.r[0]),0,1),ax=lr(w.a[0][0],w.a[1][0],t),ay=lr(w.a[0][1],w.a[1][1],t);
  const X=cp((G.dx+ax*G.dw)/k,28,vw-28),Y=cp((G.dy+ay*G.dh)/k,96,vh-80),cw=w.c.offsetWidth,ch=w.c.offsetHeight,left=X>vw*.55;
  const cx=cp(left?X-84-cw:X+84,16,vw-cw-16),cy=cp(Y-ch/2,76,vh-ch-24);
  w.c.style.left=cx+'px';w.c.style.top=cy+'px';w.d.style.transform=`translate(${X}px,${Y}px)`;
  const ex=left?cx+cw:cx,ey=cp(Y,cy+16,cy+ch-16);w.ln.setAttribute('x1',X);w.ln.setAttribute('y1',Y);w.ln.setAttribute('x2',ex);w.ln.setAttribute('y2',ey)})}
let vis=true,SP=P;const t0=performance.now();
new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(hero);
function loop(){requestAnimationFrame(loop);if(!vis)return;
 const d=Math.min(devicePixelRatio,1.5),w=Math.round(cv.clientWidth*d),h=Math.round(cv.clientHeight*d);
 if(w!==W||h!==H){W=w;H=h;cv.width=w;cv.height=h;dirty=1}
 SP=RM?P:lr(SP,P,.07);const t=(performance.now()-t0)/1000,u=Math.max(RM?0:eo(Math.min(t/3.4,1))*.22,Math.min(1,SP/.85)),f=u*(N-1);
 if(Math.abs(f-last)<.004&&!dirty)return;last=f;dirty=0;
 const i0=Math.floor(f),a=f-i0,g0=near(i0),g1=near(Math.min(N-1,i0+1));
 if(!g0)return;const G=geo(g0,.5);x.clearRect(0,0,W,H);fit(g0,1,G);if(g1&&g1!==g0&&a>.02)fit(g1,a,G);x.globalAlpha=1;upd(u,SP,G,d)}
loop();
})();
addEventListener('load',()=>ScrollTrigger.refresh());
