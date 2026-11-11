var WHATS='5592991204691';
var CATS=['Todas','Promoções','Serviços','Buquês','Rosas','Orquídeas','Girassóis','Plantas','Presentes'];
var P=[
[1,'Buquê 12 Rosas Vermelhas','Rosas',189,239,'#d6203f','#FFE1E6',13,'Doze rosas vermelhas selecionadas com folhagem e embalagem de presente.'],
[2,'Rosas Cor-de-Rosa Premium','Rosas',159,0,'#D9759F','#F9E3EC',11,'Rosas rosadas de haste longa, perfumadas e muito frescas.'],
[3,'Orquídea Phalaenopsis Branca','Orquídeas',210,260,'#ffffff','#F1E6F5',7,'Orquídea em vaso de cerâmica, elegante e de longa duração.'],
[4,'Orquídea Lilás Duplo Cacho','Orquídeas',245,0,'#b57edc','#F4E8FA',7,'Duas hastes floridas em vaso decorativo.'],
[5,'Buquê de Girassóis','Girassóis',129,159,'#f5b60a','#FFF3C9',13,'Seis girassóis radiantes com folhagem e fita.'],
[6,'Girassóis no Vaso de Vidro','Girassóis',99,0,'#f5a30a','#FFF0CF',9,'Arranjo alegre pronto para presentear.'],
[7,'Buquê Romântico Mix','Buquês',175,220,'#E48AB0','#FFE8F2',11,'Rosas, lisiantos e astromélias em tons de rosa.'],
[8,'Buquê Campestre','Buquês',139,0,'#ffa970','#FFEBDD',9,'Flores do campo em composição solta e delicada.'],
[9,'Suculenta Rosa de Pedra','Plantas',39,49,'#7fae7a','#E6F4E4',11,'Fácil de cuidar, ideal para mesa e escritório.'],
[10,'Violeta em Vaso','Plantas',45,0,'#8e5cc8','#EEE6F8',5,'Florada contínua, perfeita para ambientes claros.'],
[11,'Cesta Café da Manhã Floral','Presentes',289,349,'#D9759F','#F9E3EC',9,'Cesta com flores, frutas, bolo e chocolates.'],
[12,'Kit Rosa + Chocolate','Presentes',119,0,'#d6203f','#FFE1E6',7,'Uma rosa, caixa de bombons e cartão personalizado.'],
[13,'Coroa de Flores Brancas','Presentes',320,0,'#ffffff','#EAF1EA',13,'Coroa com rosas e lírios brancos para homenagem e despedida. Atendimento prioritário.'],
[14,'Arranjo Boas-vindas Bebê','Buquês',149,0,'#8ec5e8','#E6F2FA',11,'Arranjo delicado em tons suaves para receber o bebê e a mamãe.'],
[101,'Caixa de chocolates / trufas','Complementos',25,0,'#8b5a3c','#F3E6DC',7,'Caixa de trufas artesanais.'],
[102,'Balão metalizado Parabéns / Te Amo','Complementos',15,0,'#f5b60a','#FFF3C9',7,'Balão metalizado (informe a frase no cartão).'],
[103,'Pelúcia pequena','Complementos',35,0,'#E48AB0','#FFE8F2',9,'Pelúcia macia para acompanhar o presente.']];

/* ===== CONFIGURAÇÕES FÁCEIS DE EDITAR ===== */
var AD=[101,102,103]; /* ids dos complementos (upsell) */
var OCS=[['Aniversário','Aniversário'],['Romântico','Romântico / Pedido'],['Maternidade','Maternidade / Boas-vindas'],['Condolências','Condolências / Pêsames']];
var OC={1:['Romântico','Aniversário'],2:['Romântico','Aniversário','Maternidade'],3:['Aniversário','Maternidade','Condolências'],4:['Aniversário','Maternidade'],5:['Aniversário','Maternidade'],6:['Aniversário'],7:['Romântico','Aniversário'],8:['Aniversário','Maternidade'],9:['Aniversário'],10:['Aniversário'],11:['Aniversário','Romântico'],12:['Romântico'],13:['Condolências'],14:['Maternidade']};
/* Frete por bairro de Manaus (R$) – ajuste os valores reais da loja */
var FG=99,TYPEIMG={},SVC={};
var SVCS=[['eventos','Eventos & Casamentos'],['assinatura','Assinatura Floral'],['cestas','Cestas Exclusivas'],['homenagens','Homenagens & Coroas']];
var BAIRROS={'Adrianópolis':12,'Centro':12,'Nossa Sra. das Graças':12,'Cachoeirinha':12,'Chapada':14,'Flores':14,'Dom Pedro':15,'Aleixo':15,'Parque 10':15,'Cidade Nova':18,'Ponta Negra':20,'Tarumã':25};
function normP(){P.forEach(function(p){if(p[9]===undefined)p[9]='';if(!p[10])p[10]=p[2]==='Complementos'?1:3})}normP();
var cat='Todas',qs='',occ='',fav={},cart={};
try{cart=JSON.parse(localStorage.getItem('jc-cart')||'{}');fav=JSON.parse(localStorage.getItem('jc-fav')||'{}')}catch(e){}
var $=function(i){return document.getElementById(i)};
var R=function(v){return v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})};
var N=function(s){return s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase()};
function bloom(c,n,leaf){var s='<svg viewBox="0 0 200 200">';if(leaf)s+='<ellipse cx="38" cy="150" rx="12" ry="34" fill="#4f9a5b" transform="rotate(-40 38 150)"/><ellipse cx="162" cy="150" rx="12" ry="34" fill="#3f8a4f" transform="rotate(40 162 150)"/>';
[[1,.38,92],[.82,.55,76],[.62,.75,58],[.42,.95,40]].forEach(function(r,i){for(var k=0;k<n;k++){s+='<ellipse cx="100" cy="'+(100-r[2]/1.7)+'" rx="'+(r[2]/2.6)+'" ry="'+(r[2]/1.5)+'" fill="'+c+'" opacity="'+r[1]+'" transform="rotate('+(k*360/n+i*(180/n))+' 100 100)"/>'}});
return s+'<circle cx="100" cy="100" r="9" fill="#f5b60a"/></svg>'}
function initSVG(){document.querySelectorAll('.b:empty').forEach(function(e){var st=getComputedStyle(e);e.innerHTML=bloom(st.getPropertyValue('--c').trim()||'#EE4C9A',+st.getPropertyValue('--n')||9)});}
function toast(t){var e=$('ts');e.textContent=t;e.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(function(){e.classList.remove('on')},2200)}
function save(){try{localStorage.setItem('jc-cart',JSON.stringify(cart));localStorage.setItem('jc-fav',JSON.stringify(fav))}catch(e){}}
function art(p){return p[9]?'<img class="ph" src="'+p[9]+'" alt="'+p[1]+'" loading="lazy">':'<i class="b" style="--c:'+p[5]+'">'+bloom(p[5],p[7],1)+'</i>'}
function inst(p){var n=p[10]||1;return '<small>'+(n>1?'ou '+n+'x de '+R(p[3]/n)+' sem juros':'à vista')+'</small>'}
function off(p){return p[4]?Math.round((1-p[3]/p[4])*100):0}
function list(){var l=P.filter(function(p){return p[2]!=='Complementos'&&(!occ||(OC[p[0]]||[]).indexOf(occ)>-1)&&(cat==='Todas'||(cat==='Promoções'?p[4]:p[2]===cat))&&(!qs||N(p[1]+' '+p[2]+' '+p[8]).indexOf(qs)>-1)});var s=$('so').value;
if(s==='a')l.sort(function(a,b){return a[3]-b[3]});if(s==='d')l.sort(function(a,b){return b[3]-a[3]});if(s==='o')l.sort(function(a,b){return off(b)-off(a)});
$('g').innerHTML=l.length?l.map(function(p,i){return '<article class="p rv" style="--i:'+(i%5)+'"><button class="im" style="--tone:'+p[6]+'" data-o="'+p[0]+'" aria-label="Ver '+p[1]+'">'+art(p)+(p[4]?'<span class="off">-'+off(p)+'%</span>':'')+'</button><button class="fv'+(fav[p[0]]?' on':'')+'" data-f="'+p[0]+'" aria-label="Favoritar">'+'<svg class="ic"><use href="#i-heart"/></svg>'+'</button><div class="pi"><small>'+p[2]+'</small><h3>'+p[1]+'</h3><div class="pr">'+(p[4]?'<s>'+R(p[4])+'</s>':'')+'<b>'+R(p[3])+'</b>'+inst(p)+'</div><button class="add" data-a="'+p[0]+'">Adicionar ao carrinho</button></div></article>'}).join(''):'<div class="empty">Nenhuma flor encontrada. Tente outra busca.</div>';
reveal();$('cnt').textContent=l.length+' produto'+(l.length===1?'':'s');$('ttl').textContent=qs?'Resultados para “'+$('q').value+'”':(cat==='Todas'?(occ?occ:'Todos os produtos'):cat+(occ?' · '+occ:''));$('clr').hidden=cat==='Todas'&&!qs&&!occ;
document.querySelectorAll('#cats button').forEach(function(b){b.classList.toggle('on',b.dataset.c===cat)});document.querySelectorAll('#occ button').forEach(function(b){b.classList.toggle('on',b.dataset.oc===occ)})}

document.addEventListener("DOMContentLoaded", function() {
    renderStatic();
    buildExtras();
    tick();
    setInterval(tick,1000);
    list();
    draw();
    
    $('clr').onclick=function(e){e.preventDefault();cat='Todas';qs='';occ='';$('q').value='';list()};
    $('sf').onsubmit=function(e){e.preventDefault();qs=N($('q').value.trim());list();document.getElementById('loja').scrollIntoView()};
    $('q').oninput=function(){qs=N(this.value.trim());list()};$('so').onchange=list;
if($('oc')) $('oc').onclick=function(){drawer(true)};
if($('xc')) $('xc').onclick=$('ov').onclick=function(){drawer(false)};
if($('dl')) $('dl').onchange=draw;
if($('bn')) $('bn').onchange=draw;
if($('dd')) $('dd').onchange=dchk;
if($('lf')) $('lf').onsubmit=lembrete;    
    $('wa').onclick=function(){if($('dl').value==='e'&&!$('bn').value){toast('Escolha o bairro de entrega');$('bn').focus();return}var l=['*Pedido – JC Flores*',''];Object.keys(cart).forEach(function(k){var p=P.filter(function(x){return x[0]==k})[0];l.push(cart[k]+'x '+p[1]+' – '+R(p[3]*cart[k]))});var s=sub(),f=fee(s);
    l.push('','Subtotal: '+R(s),'Frete: '+(f?R(f):'Grátis'),'*Total: '+R(s+f)+'*','Modo: '+($('dl').value==='r'?'Retirar na loja':'Entrega em casa'));if($('dl').value==='e')l.push('Bairro: '+$('bn').value);if($('dd').value)l.push(($('dl').value==='r'?'Retirada: ':'Entrega: ')+dbr($('dd').value)+($('tn').value?' · '+$('tn').value:''));if($('msg').value.trim())l.push('Cartão: '+$('msg').value.trim());
    window.open('https://wa.me/'+WHATS+'?text='+encodeURIComponent(l.join('\n')),'_blank')};
    
    $('wz').href='https://wa.me/'+WHATS;
    document.querySelectorAll('.tilt').forEach(function(e){e.addEventListener('pointermove',function(v){var r=e.getBoundingClientRect(),x=(v.clientX-r.left)/r.width,y=(v.clientY-r.top)/r.height;e.style.setProperty('--ty',(x-.5)*12+'deg');e.style.setProperty('--tx',(.5-y)*10+'deg');e.style.setProperty('--mx',x*100+'%');e.style.setProperty('--my',y*100+'%')});e.addEventListener('pointerleave',function(){e.style.setProperty('--tx','0deg');e.style.setProperty('--ty','0deg')})});
    addEventListener('scroll',function(){var h=document.documentElement;$('pg').style.transform='scaleX('+h.scrollTop/Math.max(1,h.scrollHeight-h.clientHeight)+')'},{passive:true});
    
    var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(!rm){for(var k=0,nP=innerWidth<700?5:14;k<nP;k++){var s=document.createElement('i');s.style.cssText='left:'+Math.random()*100+'%;--dx:'+(Math.random()*160-80)+'px;animation-duration:'+(9+Math.random()*9)+'s;animation-delay:-'+Math.random()*12+'s;opacity:'+(.25+Math.random()*.35)+';scale:'+(.6+Math.random()*.9);$('pt').appendChild(s)}}
    
    reveal();
});

function go(c){
  if(c === 'Serviços') {
    document.getElementById('outros-servicos').scrollIntoView({ behavior: 'smooth' });
    return;
  }
  cat=c;
  list();
  document.getElementById('loja').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('click',function(e){var t=e.target.closest('[data-c],[data-cat],[data-o],[data-a],[data-f],[data-m],[data-d],[data-oc],[data-sv]');if(!t)return;var d=t.dataset;
if(d.c)go(d.c);else if(d.cat){e.preventDefault();go(d.cat)}
else if(d.a){add(+d.a,1);toast('Adicionado ao carrinho')}
else if(d.f){fav[d.f]=!fav[d.f];save();list()}
else if(d.o)openP(+d.o);else if('oc' in d){occ=d.oc;list()}else if(d.sv)openSvc(d.sv);
else if(d.m){add(+d.m,+d.d);}});

function openP(id){var p=P.filter(function(x){return x[0]===id})[0],m=$('md');
m.innerHTML='<div class="dg"><div class="im" style="--tone:'+p[6]+'">'+art(p)+(p[4]?'<span class="off">-'+off(p)+'%</span>':'')+'</div><div class="info"><button class="x" onclick="md.close()" aria-label="Fechar">×</button><small style="color:var(--mute)">'+p[2]+'</small><h2>'+p[1]+'</h2><p style="margin:0;color:var(--mute)">'+p[8]+'</p><div class="pr">'+(p[4]?'<s>'+R(p[4])+'</s>':'')+'<b>'+R(p[3])+'</b>'+inst(p)+'</div>'+adHTML()+'<div class="q"><button onclick="qq(-1)" aria-label="Menos">−</button><span id="mq">1</span><button onclick="qq(1)" aria-label="Mais">+</button></div><button class="btn" style="background:var(--pk2);color:#fff" id="mb">Adicionar ao carrinho</button><small style="color:var(--mute)">Entrega no mesmo dia · Frescor garantido</small></div></div>';
$('mb').onclick=function(){add(id,+$('mq').textContent);m.querySelectorAll('input[data-ad]:checked').forEach(function(c){add(+c.value,1)});m.close();toast('Adicionado ao carrinho')};m.showModal()}

function qq(d){var e=$('mq');e.textContent=Math.max(1,+e.textContent+d)}
function add(id,n){bump();cart[id]=Math.max(0,(cart[id]||0)+n);if(!cart[id])delete cart[id];save();draw()}
function sub(){return Object.keys(cart).reduce(function(s,k){return s+P.filter(function(x){return x[0]==k})[0][3]*cart[k]},0)}
function fee(s){if(!s||$('dl').value==='r'||s>=FG)return 0;var b=BAIRROS[$('bn').value];return b==null?0:b}
function draw(){var ks=Object.keys(cart),s=sub(),f=fee(s);$('cn').textContent=ks.reduce(function(a,k){return a+cart[k]},0);
$('its').innerHTML=ks.length?ks.map(function(k){var p=P.filter(function(x){return x[0]==k})[0];return '<div class="it"><div class="th" style="--tone:'+p[6]+'">'+(p[9]?'<img class="ph" src="'+p[9]+'" alt="">':'<i class="b" style="--c:'+p[5]+'">'+bloom(p[5],7)+'</i>')+'</div><div><h4>'+p[1]+'</h4><small>'+R(p[3])+'</small><div class="q"><button data-m="'+k+'" data-d="-1" aria-label="Menos">−</button><span>'+cart[k]+'</span><button data-m="'+k+'" data-d="1" aria-label="Mais">+</button></div></div><div><b>'+R(p[3]*cart[k])+'</b><button class="rm" data-m="'+k+'" data-d="-99">remover</button></div></div>'}).join(''):'<div class="ep">Seu carrinho está vazio.<br>Escolha flores lindas para presentear!</div>';
var del=$('dl').value==='e',need=del&&s&&s<FG&&!$('bn').value;
$('bn').style.display=del?'':'none';$('dtl').textContent=del?'Data da entrega':'Data da retirada';
$('sb').textContent=R(s);$('fr').textContent=need?'Selecione o bairro':f?R(f):'Grátis';$('tt').textContent=R(s+f)+(need?' + frete':'');
$('up').innerHTML='<h5>Adicione um complemento</h5><div class="up-l">'+AD.map(function(i){var p=byId(i);return '<button class="up-b'+(cart[i]?' on':'')+'" data-a="'+i+'">'+(cart[i]?'✓ ':'+ ')+p[1]+' · '+R(p[3])+(cart[i]?' ('+cart[i]+')':'')+'</button>'}).join('')+'</div>';$('wa').disabled=!ks.length;$('ft').style.display=ks.length?'':'none'}
function drawer(o){$('dr').classList.toggle('on',o);$('ov').classList.toggle('on',o);$('dr').setAttribute('aria-hidden',!o)}
document.addEventListener('keydown',function(e){if(e.key==='Escape')drawer(false)});

function tick(){var n=new Date(),e=new Date(n);e.setDate(n.getDate()+((7-n.getDay())%7));e.setHours(23,59,59,0);var d=Math.max(0,e-n),v=[[Math.floor(d/864e5),'dias'],[Math.floor(d/36e5)%24,'horas'],[Math.floor(d/6e4)%60,'min'],[Math.floor(d/1e3)%60,'seg']];
$('cd').innerHTML=v.map(function(x){return '<span>'+String(x[0]).padStart(2,'0')+'<small>'+x[1]+'</small></span>'}).join('')}

var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});
function reveal(){document.querySelectorAll('.rv:not(.in)').forEach(function(e){io.observe(e)})}
function bump(){var c=$('oc');c.classList.remove('bump');void c.offsetWidth;c.classList.add('bump')}

/* ===== Novas funções ===== */
function byId(i){return P.filter(function(x){return x[0]===i})[0]}
function pad(n){return String(n).padStart(2,'0')}
function iso(d){return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())}
function dbr(v){var p=v.split('-');return p[2]+'/'+p[1]+'/'+p[0]}
function adHTML(){return '<div class="ad"><small style="color:var(--mute)">Adicionar complemento (opcional)</small>'+AD.map(function(i){var p=byId(i);return '<label><input type="checkbox" data-ad value="'+i+'">'+p[1]+'<span>+ '+R(p[3])+'</span></label>'}).join('')+'</div>'}
function buildExtras(){
  $('occ').innerHTML=[['','Todas as ocasiões']].concat(OCS).map(function(o){return '<button data-oc="'+o[0]+'">'+o[1]+'</button>'}).join('');
  buildBairros();
  var n=new Date(),m=new Date(n);if(n.getHours()>=15)m.setDate(m.getDate()+1);$('dd').min=iso(m);
}
function dchk(){var v=$('dd').value,n=new Date();
  var o=$('tn').options[1];o.disabled=!!v&&v===iso(n)&&n.getHours()>=10;
  if(o.disabled&&$('tn').selectedIndex===1)$('tn').selectedIndex=0}
function lembrete(e){e.preventDefault();var a=$('ln').value.trim(),b=$('lp').value.trim(),d=$('ld').value;if(!a||!b||!d)return;
  var t='*Lembrete de data especial – JC Flores*\nMeu nome: '+a+'\nAniversariante: '+b+'\nData: '+dbr(d)+'\nQuero receber o cupom de 10% OFF no mês da data!';
  window.open('https://wa.me/'+WHATS+'?text='+encodeURIComponent(t),'_blank');toast('Quase lá! Envie a mensagem no WhatsApp');$('lf').reset()}


/* ===== Renderização dinâmica (loja editável) ===== */
function renderStatic(){
  $('cats').innerHTML=CATS.map(function(c){return '<button data-c="'+c+'"'+(c==='Promoções'?' class="pr"':'')+'>'+c+'</button>'}).join('');
  $('types').innerHTML=CATS.slice(3).map(function(c,i){var p=P.filter(function(x){return x[2]===c})[0],im=TYPEIMG[c];
    return '<button class="ty rv" style="--i:'+i+'" data-c="'+c+'"><div class="c">'+(im?'<img class="ph" src="'+im+'" alt="">':'<i class="b" style="--c:'+(p?p[5]:'#B31E56')+'">'+bloom(p?p[5]:'#B31E56',7)+'</i>')+'</div>'+c+'</button>'}).join('');
  initSVG();renderServices();reveal()}
function buildBairros(){var v=$('bn').value;$('bn').innerHTML='<option value="">Selecione o bairro…</option>'+Object.keys(BAIRROS).map(function(b){return '<option value="'+b+'">'+b+' · '+R(BAIRROS[b])+'</option>'}).join('');$('bn').value=v}
function svcMin(a){var m=0;a.forEach(function(i){if(i.p>0&&(!m||i.p<m))m=i.p});return m}
function renderServices(){SVCS.forEach(function(s){var k=s[0],a=SVC[k]||[],e=$('sv-'+k);if(!e)return;var m=svcMin(a);
  e.innerHTML=a.length?'<button class="sg-th" data-sv="'+k+'" aria-label="Ver trabalhos realizados">'+a.slice(0,3).map(function(it){return '<img src="'+it.img+'" alt="'+it.t+'" loading="lazy">'}).join('')+'</button>'+(m?'<div class="os-from">A partir de <b>'+R(m)+'</b></div>':'')+'<button class="os-more" data-sv="'+k+'">Ver '+a.length+' trabalho'+(a.length>1?'s realizados':' realizado')+'</button>':'<div class="os-empty">Fotos e valores em breve · peça seu orçamento</div>'})}
function openSvc(k){var a=SVC[k]||[],nm=SVCS.filter(function(s){return s[0]===k})[0][1],m=$('md');
  m.innerHTML='<div class="sv-d"><div class="sv-h"><h2>'+nm+'</h2><button class="x" onclick="md.close()" aria-label="Fechar">×</button></div><div class="sv-g">'+a.map(function(it){var t='Olá! Vi o trabalho "'+it.t+'" ('+nm+') no site e gostaria de um orçamento.';return '<figure><img src="'+it.img+'" alt="'+it.t+'" loading="lazy"><figcaption><b>'+it.t+'</b><span>'+(it.p>0?'a partir de '+R(it.p):'Valor sob consulta')+'</span><a class="os-btn sm" target="_blank" rel="noopener" href="https://wa.me/'+WHATS+'?text='+encodeURIComponent(t)+'">Quero algo assim</a></figcaption></figure>'}).join('')+'</div></div>';m.showModal()}
function refreshAll(){renderStatic();buildBairros();if($('tp'))$('tp').textContent='Frete grátis em compras acima de '+R(FG)+' · Entrega no mesmo dia para pedidos até 15h';list();draw()}

/* ===== Avaliações do Google (animadas) =====
   Cole aqui as avaliações REAIS copiadas do Google Maps da loja (JcFloresmanaus).
   Formato: {n:'Nome do cliente', s:5, t:'Texto da avaliação', d:'há 2 semanas'}
   Enquanto a lista estiver vazia, a seção fica escondida. Para pré-visualizar a animação,
   abra o site com ?demo no final do endereço (usa textos de exemplo, só para teste). */
/* ATENÇÃO: avaliações FICTÍCIAS, só para visualizar a animação. Troque pelas reais antes de publicar. */
var REVIEWS=[
{n:'Mariana Souza',s:5,t:'Entrega pontual e as rosas chegaram lindas. Minha mãe amou a surpresa!',d:'há 1 semana'},
{n:'Rafael Menezes',s:5,t:'Precisei de uma coroa de madrugada e fui atendido na hora. Atendimento muito respeitoso.',d:'há 2 semanas'},
{n:'Camila Ribeiro',s:5,t:'Buquê perfeito, flores fresquinhas e embalagem caprichada. Já virou minha floricultura de sempre.',d:'há 3 semanas'},
{n:'Josiane Lima',s:4,t:'Cesta de café da manhã linda e bem completa. Só demorou um pouquinho para chegar, mas valeu a pena.',d:'há 1 mês'},
{n:'Anderson Castro',s:5,t:'Atendimento rápido pelo WhatsApp e entrega grátis. Recomendo demais!',d:'há 1 mês'},
{n:'Patrícia Alves',s:5,t:'Fiz a decoração do aniversário da minha filha e ficou exatamente como eu sonhava.',d:'há 2 meses'},
{n:'Lucas Farias',s:5,t:'Girassóis lindos e muito bem embalados. A entrega chegou antes do horário combinado.',d:'há 2 meses'},
{n:'Fernanda Gomes',s:5,t:'Ótimo custo-benefício e atendimento 24 horas salvou meu aniversário de casamento.',d:'há 3 meses'}
];
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function renderReviews(){
  var l=REVIEWS.slice();
  if(!l.length&&/[?&]demo\b/.test(location.search))l=[1,2,3,4,5].map(function(i){return{n:'Cliente '+i,s:5,t:'[EXEMPLO – só para testar a animação] Aqui aparecerá a avaliação real do cliente.',d:'exemplo'}});
  var sec=$('avaliacoes');if(!sec||!l.length)return;
  var card=function(r,dup){var st=Math.max(1,Math.min(5,r.s||5));
    return '<figure class="rc"'+(dup?' aria-hidden="true"':'')+'><div class="rh"><span class="av">'+esc((r.n||'?').trim().charAt(0).toUpperCase())+'</span><div><b>'+esc(r.n)+'</b>'+(r.d?'<small>'+esc(r.d)+'</small>':'')+'</div><span class="rg">G</span></div><div class="st">'+'★'.repeat(st)+'<span style="opacity:.25">'+'★'.repeat(5-st)+'</span></div><blockquote>'+esc(r.t)+'</blockquote></figure>'};
  var one=l.map(function(r){return card(r,false)}).join('');
  var t=$('rt');t.innerHTML=one+l.map(function(r){return card(r,true)}).join('');
  t.style.setProperty('--dur',Math.max(25,l.length*9)+'s');
  var avg=l.reduce(function(a,r){return a+(r.s||5)},0)/l.length;
  $('gs').textContent='★★★★★ · '+avg.toFixed(1).replace('.',',')+' ('+l.length+')';
  sec.hidden=false;reveal();
}
document.addEventListener('DOMContentLoaded',renderReviews);