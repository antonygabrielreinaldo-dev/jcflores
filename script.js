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
[103,'Pelúcia pequena','Complementos',35,0,'#E48AB0','#FFE8F2',9,'Pelúcia macia para acompanhar o presente.']
];

var AD=[101,102,103];

var OCS=[
['Aniversário','Aniversário'],
['Romântico','Romântico / Pedido'],
['Maternidade','Maternidade / Boas-vindas'],
['Condolências','Condolências / Pêsames']
];

var OC={
1:['Romântico','Aniversário'],
2:['Romântico','Aniversário','Maternidade'],
3:['Aniversário','Maternidade','Condolências'],
4:['Aniversário','Maternidade'],
5:['Aniversário','Maternidade'],
6:['Aniversário'],
7:['Romântico','Aniversário'],
8:['Aniversário','Maternidade'],
9:['Aniversário'],
10:['Aniversário'],
11:['Aniversário','Romântico'],
12:['Romântico'],
13:['Condolências'],
14:['Maternidade']
};

var FG=100,TYPEIMG={},SVC={};

var SVCS=[
['eventos','Buquês de Casamento'],
['assinatura','Assinatura Floral'],
['cestas','Cestas Exclusivas'],
['homenagens','Homenagens & Coroas']
];

var BAIRROS={
'Adrianópolis':12,
'Centro':12,
'Nossa Sra. das Graças':12,
'Cachoeirinha':12,
'Chapada':14,
'Flores':14,
'Dom Pedro':15,
'Aleixo':15,
'Parque 10':15,
'Cidade Nova':18,
'Ponta Negra':20,
'Tarumã':25
};

function normP(){
  P.forEach(function(p){
    if(p[9]===undefined)p[9]='';
    if(!p[10])p[10]=p[2]==='Complementos'?1:3;
  });
}
normP();

var cat='Todas',qs='',occ='',fav={},cart={};

try{
  cart=JSON.parse(localStorage.getItem('jc-cart')||'{}');
  fav=JSON.parse(localStorage.getItem('jc-fav')||'{}');
}catch(e){}

var $=function(i){
  return document.getElementById(i);
};

var R=function(v){
  return v.toLocaleString('pt-BR',{
    style:'currency',
    currency:'BRL'
  });
};

var N=function(s){
  return s.normalize('NFD')
    .replace(/[\u0300-\u036f]/g,'')
    .toLowerCase();
};

function bloom(c,n,leaf){
  var s='<svg viewBox="0 0 200 200">';

  if(leaf){
    s+='<ellipse cx="38" cy="150" rx="12" ry="34" fill="#4f9a5b" transform="rotate(-40 38 150)"/>';
    s+='<ellipse cx="162" cy="150" rx="12" ry="34" fill="#3f8a4f" transform="rotate(40 162 150)"/>';
  }

  [[1,.38,92],[.82,.55,76],[.62,.75,58],[.42,.95,40]].forEach(function(r,i){
    for(var k=0;k<n;k++){
      s+='<ellipse cx="100" cy="'+(100-r[2]/1.7)+
      '" rx="'+(r[2]/2.6)+
      '" ry="'+(r[2]/1.5)+
      '" fill="'+c+
      '" opacity="'+r[1]+
      '" transform="rotate('+(k*360/n+i*(180/n))+
      ' 100 100)"/>';
    }
  });

  return s+'<circle cx="100" cy="100" r="9" fill="#f5b60a"/></svg>';
}

function initSVG(){
  document.querySelectorAll('.b:empty').forEach(function(e){
    var st=getComputedStyle(e);
    e.innerHTML=bloom(
      st.getPropertyValue('--c').trim()||'#EE4C9A',
      +st.getPropertyValue('--n')||9
    );
  });
}

function toast(t){
  var e=$('ts');
  e.textContent=t;
  e.classList.add('on');
  clearTimeout(toast.t);
  toast.t=setTimeout(function(){
    e.classList.remove('on');
  },2200);
}

function save(){
  try{
    localStorage.setItem('jc-cart',JSON.stringify(cart));
    localStorage.setItem('jc-fav',JSON.stringify(fav));
  }catch(e){}
}

/* FOTO DO PRODUTO PARA O WHATSAPP */

function fotoPedidoWhatsApp(p){
  var caminho=p[9];

  if(!caminho||typeof caminho!=='string'){
    return '';
  }

  try{
    var endereco=new URL(caminho,window.location.href);

    if(
      endereco.protocol!=='https:' &&
      endereco.protocol!=='http:'
    ){
      return '';
    }

    if(
      ['localhost','127.0.0.1','[::1]']
        .includes(endereco.hostname)
    ){
      return '';
    }

    return endereco.href;

  }catch(erro){
    return '';
  }
}

function art(p){
  return p[9]
    ?'<img class="ph" src="'+p[9]+'" alt="'+p[1]+'" loading="lazy">'
    :'<i class="b" style="--c:'+p[5]+'">'+bloom(p[5],p[7],1)+'</i>';
}

function inst(p){
  var n=p[10]||1;
  return '<small>'+
    (n>1?'ou '+n+'x de '+R(p[3]/n)+' sem juros':'à vista')+
    '</small>';
}

function off(p){
  return p[4]?Math.round((1-p[3]/p[4])*100):0;
}

function list(){
  var l=P.filter(function(p){
    return p[2]!=='Complementos'
      &&(!occ||(OC[p[0]]||[]).indexOf(occ)>-1)
      &&(cat==='Todas'||(cat==='Promoções'?p[4]:p[2]===cat))
      &&(!qs||N(p[1]+' '+p[2]+' '+p[8]).indexOf(qs)>-1);
  });

  var s=$('so').value;

  if(s==='a')l.sort(function(a,b){return a[3]-b[3]});
  if(s==='d')l.sort(function(a,b){return b[3]-a[3]});
  if(s==='o')l.sort(function(a,b){return off(b)-off(a)});

  $('g').innerHTML=l.length
    ?l.map(function(p,i){
      return '<article class="p rv" style="--i:'+(i%5)+'">'+
      '<button class="im" style="--tone:'+p[6]+'" data-o="'+p[0]+'" aria-label="Ver '+p[1]+'">'+
      art(p)+
      (p[4]?'<span class="off">-'+off(p)+'%</span>':'')+
      '</button>'+
      '<button class="fv'+(fav[p[0]]?' on':'')+'" data-f="'+p[0]+'" aria-label="Favoritar">'+
      '<svg class="ic"><use href="#i-heart"/></svg></button>'+
      '<div class="pi"><small>'+p[2]+'</small>'+
      '<h3>'+p[1]+'</h3>'+
      '<div class="pr">'+
      (p[4]?'<s>'+R(p[4])+'</s>':'')+
      '<b>'+R(p[3])+'</b>'+inst(p)+
      '</div>'+
      '<button class="add" data-a="'+p[0]+'">Adicionar ao carrinho</button>'+
      '</div></article>';
    }).join('')
    :'<div class="empty">Nenhuma flor encontrada. Tente outra busca.</div>';

  reveal();

  $('cnt').textContent=l.length+' produto'+(l.length===1?'':'s');

  $('ttl').textContent=qs
    ?'Resultados para “'+$('q').value+'”'
    :(cat==='Todas'?(occ?occ:'Todos os produtos'):cat+(occ?' · '+occ:''));

  $('clr').hidden=cat==='Todas'&&!qs&&!occ;

  document.querySelectorAll('#cats button').forEach(function(b){
    b.classList.toggle('on',b.dataset.c===cat);
  });

  document.querySelectorAll('#occ button').forEach(function(b){
    b.classList.toggle('on',b.dataset.oc===occ);
  });
}

/* INICIALIZAÇÃO DO SITE */

document.addEventListener('DOMContentLoaded',function(){

  renderStatic();
  buildExtras();
  tick();
  setInterval(tick,1000);
  list();
  draw();

  $('clr').onclick=function(e){
    e.preventDefault();
    cat='Todas';
    qs='';
    occ='';
    $('q').value='';
    list();
  };

  $('sf').onsubmit=function(e){
    e.preventDefault();
    qs=N($('q').value.trim());
    list();
    document.getElementById('loja').scrollIntoView();
  };

  $('q').oninput=function(){
    qs=N(this.value.trim());
    list();
  };

  $('so').onchange=list;

  if($('oc')){
    $('oc').onclick=function(){
      drawer(true);
    };
  }

  if($('xc')){
    $('xc').onclick=$('ov').onclick=function(){
      drawer(false);
    };
  }

  if($('dl'))$('dl').onchange=draw;
  if($('bn'))$('bn').onchange=draw;
  if($('dd'))$('dd').onchange=dchk;
  if($('lf'))$('lf').onsubmit=lembrete;

  /* FINALIZAÇÃO DO PEDIDO PELO WHATSAPP */

  $('wa').onclick=function(){

    var del=$('dl').value==='e';

    var v=function(i){
      return $(i).value.trim();
    };

    var need=[
      ['cNome','Informe seu nome'],
      ['cTel','Informe seu contato'],
      ['pgto','Escolha a forma de pagamento'],
      ['dd','Escolha a data'],
      ['tn','Escolha a rota de entrega']
    ];

    if(del){
      need=need.concat([
        ['rNome','Informe o destinatário(a)'],
        ['rTel','Informe o contato do destinatário'],
        ['rEnd','Informe o endereço'],
        ['bn','Escolha o bairro de entrega'],
        ['rSet','Informe o local/setor']
      ]);
    }

    for(var i=0;i<need.length;i++){
      if(!v(need[i][0])){
        toast(need[i][1]);
        $(need[i][0]).focus();
        return;
      }
    }

    var s=sub();
    var f=fee(s);
    var pf=$('pgto').value==='c'?10:0;

    var pgt={
      c:'Crédito online (link de pagamento com acréscimo de R$ 10,00)',
      p:'PIX',
      d:'Dinheiro'
    }[$('pgto').value];

    var rotas=[
      'Manhã 9h até 13h',
      'Tarde 14h até 18h',
      'Noite 17h até 21h'
    ];

    var l=[
      '🌹 *PEDIDO - JC FLORES*',
      '',
      '👤 *INFORMAÇÕES DO CLIENTE*',
      'Nome: '+v('cNome'),
      'Contato: '+v('cTel'),
      'Forma de pagamento: '+pgt,
      '',
      (del?'Data de entrega: ':'Data de retirada: ')+dbr($('dd').value),
      '',
      '⏰ *HORÁRIO / ROTA*'
    ];

    rotas.forEach(function(r){
      l.push(
        (v('tn')===r?'✅ ':'⬜ ')+r
      );
    });

    if(del){
      l.push(
        '',
        '📍 *INFORMAÇÕES DE QUEM RECEBERÁ*',
        'Destinatário(a): '+v('rNome'),
        'Contato: '+v('rTel'),
        'Endereço: '+v('rEnd'),
        'Bairro: '+$('bn').value,
        'Local/setor: '+v('rSet'),
        'Ponto de referência: '+(v('rRef')||'—'),
        'Localização: '+(v('rLoc')||'Enviarei depois')
      );
    }else{
      l.push(
        '',
        '🏬 *MODO: RETIRAR NA LOJA*'
      );
    }

    /* PRODUTOS E FOTOS */

    l.push(
      '',
      '💐 *PRODUTOS DO PEDIDO*',
      '━━━━━━━━━━━━━━'
    );

    Object.keys(cart).forEach(function(k){

      var p=byId(+k);
      if(!p)return;

      var quantidade=cart[k];
      var foto=fotoPedidoWhatsApp(p);

      l.push(
        '',
        '🌷 *'+p[1]+'*',
        'Quantidade: '+quantidade,
        'Valor unitário: '+R(p[3]),
        'Subtotal do produto: '+R(p[3]*quantidade)
      );

      if(foto){
        l.push(
          '📸 *FOTO DO PRODUTO:*',
          foto
        );
      }

      l.push('━━━━━━━━━━━━━━');
    });

    /* VALORES DO PEDIDO */

    l.push(
      '',
      '💰 *RESUMO DA COMPRA*',
      'Subtotal: '+R(s),
      'Frete: '+(f?R(f):'Grátis')
    );

    if(pf){
      l.push(
        'Taxa do link de pagamento: '+R(pf)
      );
    }

    l.push(
      '*TOTAL: '+R(s+f+pf)+'*',
      '',
      '📝 *OBSERVAÇÕES*',
      v('ob')||'Nenhuma observação'
    );

    if(v('msg')){
      l.push(
        '',
        '💌 *MENSAGEM DO CARTÃO*',
        v('msg')
      );
    }

    if(del){
      l.push(
        '',
        '⚠️ *INFORMAÇÕES IMPORTANTES*',
        'Dados de entrega corretos evitam transtornos.',
        'Alterar o endereço com o pedido já em rota gera nova taxa de R$ 20,00 (ou retirada na loja).',
        'Haverá alguém no local para receber dentro da rota escolhida.'
      );
    }

    /* ABRIR WHATSAPP */

    var mensagem=encodeURIComponent(l.join('\n'));

    window.open(
      'https://wa.me/'+WHATS+'?text='+mensagem,
      '_blank'
    );

  };

  $('wz').href='https://wa.me/'+WHATS;

  document.querySelectorAll('.tilt').forEach(function(e){

    e.addEventListener('pointermove',function(v){
      var r=e.getBoundingClientRect();
      var x=(v.clientX-r.left)/r.width;
      var y=(v.clientY-r.top)/r.height;

      e.style.setProperty('--ty',(x-.5)*12+'deg');
      e.style.setProperty('--tx',(.5-y)*10+'deg');
      e.style.setProperty('--mx',x*100+'%');
      e.style.setProperty('--my',y*100+'%');
    });

    e.addEventListener('pointerleave',function(){
      e.style.setProperty('--tx','0deg');
      e.style.setProperty('--ty','0deg');
    });

  });

  addEventListener('scroll',function(){
    var h=document.documentElement;
    $('pg').style.transform='scaleX('+
      h.scrollTop/Math.max(1,h.scrollHeight-h.clientHeight)+')';
  },{passive:true});

  var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;

  if(!rm){
    for(var k=0,nP=innerWidth<700?5:14;k<nP;k++){
      var s=document.createElement('i');

      s.style.cssText=
        'left:'+Math.random()*100+'%;'+
        '--dx:'+(Math.random()*160-80)+'px;'+
        'animation-duration:'+(9+Math.random()*9)+'s;'+
        'animation-delay:-'+Math.random()*12+'s;'+
        'opacity:'+(.25+Math.random()*.35)+';'+
        'scale:'+(.6+Math.random()*.9);

      $('pt').appendChild(s);
    }
  }

  reveal();

});

/* NAVEGAÇÃO */

function go(c){
  if(c==='Serviços'){
    document.getElementById('outros-servicos')
      .scrollIntoView({behavior:'smooth'});
    return;
  }

  cat=c;
  list();

  document.getElementById('loja')
    .scrollIntoView({behavior:'smooth'});
}

document.addEventListener('click',function(e){

  var t=e.target.closest(
    '[data-c],[data-cat],[data-o],[data-a],[data-f],[data-m],[data-d],[data-oc],[data-sv]'
  );

  if(!t)return;

  var d=t.dataset;

  if(d.c){
    go(d.c);
  }else if(d.cat){
    e.preventDefault();
    go(d.cat);
  }else if(d.a){
    add(+d.a,1);
    toast('Adicionado ao carrinho');
  }else if(d.f){
    fav[d.f]=!fav[d.f];
    save();
    list();
  }else if(d.o){
    openP(+d.o);
  }else if('oc' in d){
    occ=d.oc;
    list();
  }else if(d.sv){
    openSvc(d.sv);
  }else if(d.m){
    add(+d.m,+d.d);
  }

});

/* DETALHES DO PRODUTO */

function openP(id){
  var p=byId(id);
  var m=$('md');

  m.innerHTML=
    '<div class="dg">'+
    '<div class="im" style="--tone:'+p[6]+'">'+
    art(p)+
    (p[4]?'<span class="off">-'+off(p)+'%</span>':'')+
    '</div>'+
    '<div class="info">'+
    '<button class="x" onclick="md.close()" aria-label="Fechar">×</button>'+
    '<small style="color:var(--mute)">'+p[2]+'</small>'+
    '<h2>'+p[1]+'</h2>'+
    '<p style="margin:0;color:var(--mute)">'+p[8]+'</p>'+
    '<div class="pr">'+
    (p[4]?'<s>'+R(p[4])+'</s>':'')+
    '<b>'+R(p[3])+'</b>'+
    inst(p)+
    '</div>'+
    adHTML()+
    '<div class="q">'+
    '<button onclick="qq(-1)" aria-label="Menos">−</button>'+
    '<span id="mq">1</span>'+
    '<button onclick="qq(1)" aria-label="Mais">+</button>'+
    '</div>'+
    '<button class="btn" style="background:var(--pk2);color:#fff" id="mb">Adicionar ao carrinho</button>'+
    '<small style="color:var(--mute)">Entrega no mesmo dia · Frescor garantido</small>'+
    '</div></div>';

  $('mb').onclick=function(){
    add(id,+$('mq').textContent);

    m.querySelectorAll('input[data-ad]:checked').forEach(function(c){
      add(+c.value,1);
    });

    m.close();
    toast('Adicionado ao carrinho');
  };

  m.showModal();
}

function qq(d){
  var e=$('mq');
  e.textContent=Math.max(1,+e.textContent+d);
}

function add(id,n){
  bump();
  cart[id]=Math.max(0,(cart[id]||0)+n);

  if(!cart[id])delete cart[id];

  save();
  draw();
}

function sub(){
  return Object.keys(cart).reduce(function(s,k){
    var p=byId(+k);
    return s+(p?p[3]*cart[k]:0);
  },0);
}

function fee(s){
  if(!s||$('dl').value==='r'||s>=FG)return 0;

  var b=BAIRROS[$('bn').value];
  return b==null?0:b;
}

/* CARRINHO */

function draw(){
  var ks=Object.keys(cart);
  var s=sub();
  var f=fee(s);

  $('cn').textContent=ks.reduce(function(a,k){
    return a+cart[k];
  },0);

  $('its').innerHTML=ks.length
    ?ks.map(function(k){
      var p=byId(+k);
      if(!p)return '';

      return '<div class="it">'+
      '<div class="th" style="--tone:'+p[6]+'">'+
      (p[9]
        ?'<img class="ph" src="'+p[9]+'" alt="">'
        :'<i class="b" style="--c:'+p[5]+'">'+bloom(p[5],7)+'</i>')+
      '</div>'+
      '<div><h4>'+p[1]+'</h4>'+
      '<small>'+R(p[3])+'</small>'+
      '<div class="q">'+
      '<button data-m="'+k+'" data-d="-1" aria-label="Menos">−</button>'+
      '<span>'+cart[k]+'</span>'+
      '<button data-m="'+k+'" data-d="1" aria-label="Mais">+</button>'+
      '</div></div>'+
      '<div><b>'+R(p[3]*cart[k])+'</b>'+
      '<button class="rm" data-m="'+k+'" data-d="-99">remover</button>'+
      '</div></div>';
    }).join('')
    :'<div class="ep">Seu carrinho está vazio.<br>Escolha flores lindas para presentear!</div>';

  var del=$('dl').value==='e';
  var need=del&&s&&s<FG&&!$('bn').value;

  $('rcv').style.display=del?'':'none';
  $('rtl').textContent=del?'Rota de entrega':'Horário de retirada';

  var pf=$('pgto').value==='c'?10:0;

  $('pfr').hidden=!pf;
  $('dtl').textContent=del?'Data da entrega':'Data da retirada';

  $('sb').textContent=R(s);

  $('fr').textContent=need
    ?'Selecione o bairro'
    :f?R(f):'Grátis';

  $('tt').textContent=R(s+f+pf)+(need?' + frete':'');

  $('up').innerHTML=
    '<h5>Adicione um complemento</h5>'+
    '<div class="up-l">'+
    AD.map(function(i){
      var p=byId(i);

      return '<button class="up-b'+(cart[i]?' on':'')+
        '" data-a="'+i+'">'+
        (cart[i]?'✓ ':'+ ')+
        p[1]+' · '+R(p[3])+
        (cart[i]?' ('+cart[i]+')':'')+
        '</button>';
    }).join('')+
    '</div>';

  $('wa').disabled=!ks.length;
  $('ft').style.display=ks.length?'':'none';
}

function drawer(o){
  $('dr').classList.toggle('on',o);
  $('ov').classList.toggle('on',o);
  $('dr').setAttribute('aria-hidden',!o);
}

document.addEventListener('keydown',function(e){
  if(e.key==='Escape')drawer(false);
});

/* CONTAGEM REGRESSIVA */

function tick(){
  var n=new Date();
  var e=new Date(n);

  e.setDate(n.getDate()+((7-n.getDay())%7));
  e.setHours(23,59,59,0);

  var d=Math.max(0,e-n);

  var v=[
    [Math.floor(d/864e5),'dias'],
    [Math.floor(d/36e5)%24,'horas'],
    [Math.floor(d/6e4)%60,'min'],
    [Math.floor(d/1e3)%60,'seg']
  ];

  $('cd').innerHTML=v.map(function(x){
    return '<span>'+
      String(x[0]).padStart(2,'0')+
      '<small>'+x[1]+'</small></span>';
  }).join('');
}

/* ANIMAÇÕES */

var io=new IntersectionObserver(function(es){
  es.forEach(function(x){
    if(x.isIntersecting){
      x.target.classList.add('in');
      io.unobserve(x.target);
    }
  });
},{threshold:.12});

function reveal(){
  document.querySelectorAll('.rv:not(.in)').forEach(function(e){
    io.observe(e);
  });
}

function bump(){
  var c=$('oc');
  c.classList.remove('bump');
  void c.offsetWidth;
  c.classList.add('bump');
}

/* FUNÇÕES AUXILIARES */

function byId(i){
  return P.filter(function(x){
    return x[0]===i;
  })[0];
}

function pad(n){
  return String(n).padStart(2,'0');
}

function iso(d){
  return d.getFullYear()+'-'+
    pad(d.getMonth()+1)+'-'+
    pad(d.getDate());
}

function dbr(v){
  var p=v.split('-');
  return p[2]+'/'+p[1]+'/'+p[0];
}

function adHTML(){
  return '<div class="ad">'+
    '<small style="color:var(--mute)">Adicionar complemento (opcional)</small>'+
    AD.map(function(i){
      var p=byId(i);
      return '<label>'+
        '<input type="checkbox" data-ad value="'+i+'">'+
        p[1]+
        '<span>+ '+R(p[3])+'</span>'+
        '</label>';
    }).join('')+
    '</div>';
}

/* OCASIÕES E BAIRROS */

function buildExtras(){
  $('occ').innerHTML=[
    ['','Todas as ocasiões']
  ].concat(OCS).map(function(o){
    return '<button data-oc="'+o[0]+'">'+o[1]+'</button>';
  }).join('');

  buildBairros();

  var n=new Date();
  var m=new Date(n);

  if(n.getHours()>=19){
    m.setDate(m.getDate()+1);
  }

  $('dd').min=iso(m);
}

function dchk(){
  var v=$('dd').value;
  var n=new Date();
  var h=n.getHours();
  var t=v&&v===iso(n);
  var lim=[11,16,19];

  for(var i=1;i<=3;i++){
    $('tn').options[i].disabled=!!t&&h>=lim[i-1];
  }

  if($('tn').options[$('tn').selectedIndex].disabled){
    $('tn').selectedIndex=0;
  }
}

/* LEMBRETES */

function lembrete(e){
  e.preventDefault();

  var a=$('ln').value.trim();
  var b=$('lp').value.trim();
  var d=$('ld').value;

  if(!a||!b||!d)return;

  var t='*Lembrete de data especial – JC Flores*\n'+
    'Meu nome: '+a+'\n'+
    'Aniversariante: '+b+'\n'+
    'Data: '+dbr(d)+'\n'+
    'Quero receber o cupom de 10% OFF no mês da data!';

  window.open(
    'https://wa.me/'+WHATS+'?text='+encodeURIComponent(t),
    '_blank'
  );

  toast('Quase lá! Envie a mensagem no WhatsApp');
  $('lf').reset();
}

/* PRODUTOS E CATEGORIAS */

function renderStatic(){

  $('cats').innerHTML=CATS.map(function(c){
    return '<button data-c="'+c+'"'+
      (c==='Promoções'?' class="pr"':'')+
      '>'+c+'</button>';
  }).join('');

  $('types').innerHTML=CATS.slice(3).map(function(c,i){
    var p=P.filter(function(x){
      return x[2]===c;
    })[0];

    var im=TYPEIMG[c];

    return '<button class="ty rv" style="--i:'+i+'" data-c="'+c+'">'+
      '<div class="c">'+
      (im
        ?'<img class="ph" src="'+im+'" alt="">'
        :'<i class="b" style="--c:'+(p?p[5]:'#B31E56')+'">'+
          bloom(p?p[5]:'#B31E56',7)+'</i>')+
      '</div>'+c+'</button>';
  }).join('');

  initSVG();
  renderServices();
  reveal();
}

function buildBairros(){
  var v=$('bn').value;

  $('bn').innerHTML=
    '<option value="">Selecione o bairro…</option>'+
    Object.keys(BAIRROS).map(function(b){
      return '<option value="'+b+'">'+
        b+' · '+R(BAIRROS[b])+
        '</option>';
    }).join('');

  $('bn').value=v;
}

/* SERVIÇOS */

function svcMin(a){
  var m=0;

  a.forEach(function(i){
    if(i.p>0&&(!m||i.p<m)){
      m=i.p;
    }
  });

  return m;
}

function renderServices(){
  SVCS.forEach(function(s){

    var k=s[0];
    var a=SVC[k]||[];
    var e=$('sv-'+k);

    if(!e)return;

    var m=svcMin(a);

    e.innerHTML=a.length
      ?'<button class="sg-th" data-sv="'+k+'" aria-label="Ver trabalhos realizados">'+
        a.slice(0,3).map(function(it){
          return '<img src="'+it.img+'" alt="'+it.t+'" loading="lazy">';
        }).join('')+
        '</button>'+
        (m?'<div class="os-from">A partir de <b>'+R(m)+'</b></div>':'')+
        '<button class="os-more" data-sv="'+k+'">Ver '+
        a.length+' trabalho'+(a.length>1?'s realizados':' realizado')+
        '</button>'
      :'<div class="os-empty">Fotos e valores em breve · peça seu orçamento</div>';
  });
}

function openSvc(k){
  var a=SVC[k]||[];

  var nm=SVCS.filter(function(s){
    return s[0]===k;
  })[0][1];

  var m=$('md');

  m.innerHTML=
    '<div class="sv-d">'+
    '<div class="sv-h">'+
    '<h2>'+nm+'</h2>'+
    '<button class="x" onclick="md.close()" aria-label="Fechar">×</button>'+
    '</div>'+
    '<div class="sv-g">'+
    a.map(function(it){

      var t='Olá! Vi o trabalho "'+it.t+
        '" ('+nm+') no site e gostaria de um orçamento.';

      return '<figure>'+
        '<img src="'+it.img+'" alt="'+it.t+'" loading="lazy">'+
        '<figcaption>'+
        '<b>'+it.t+'</b>'+
        '<span>'+(it.p>0?'a partir de '+R(it.p):'Valor sob consulta')+'</span>'+
        '<a class="os-btn sm" target="_blank" rel="noopener" href="https://wa.me/'+WHATS+'?text='+encodeURIComponent(t)+'">Quero algo assim</a>'+
        '</figcaption></figure>';
    }).join('')+
    '</div></div>';

  m.showModal();
}

function refreshAll(){
  renderStatic();
  buildBairros();
  list();
  draw();
}

/* AVALIAÇÕES DO GOOGLE
   Lista de avaliações exibidas na faixa animada.
   Enquanto vazia, a seção fica escondida.
*/

/* Avaliações de exemplo (criadas para a vitrine).
   Troque por avaliações reais de clientes antes de divulgar o site. */
var REVIEWS=[
  {n:"Mariana S.",s:5,t:"Pedi um buquê de rosas vermelhas para o aniversário da minha mãe e chegou lindo, fresquinho e antes do horário combinado. Ela se emocionou muito!",d:"há 3 dias"},
  {n:"Carlos E.",s:5,t:"Atendimento 24 horas de verdade. Precisei de uma coroa de flores de madrugada e fui atendido com muito respeito e rapidez. Fica o meu agradecimento.",d:"há 1 semana"},
  {n:"Juliana P.",s:5,t:"O buquê de girassóis é uma alegria só! Veio bem embalado, com cartão e tudo certinho. Quem recebeu amou.",d:"há 1 semana"},
  {n:"Rafael M.",s:5,t:"A cesta de café da manhã com flores surpreendeu minha esposa. Tudo muito bem montado e entregue na hora marcada.",d:"há 2 semanas"},
  {n:"Aline C.",s:5,t:"Encomendei meu buquê de noiva com a JC Flores e ficou exatamente como eu sonhava. Delicado, perfumado e durou o dia inteiro.",d:"há 2 semanas"},
  {n:"Patrícia L.",s:4,t:"Orquídea linda e muito bem embalada. A entrega atrasou alguns minutos por causa da chuva, mas avisaram tudo pelo WhatsApp.",d:"há 3 semanas"},
  {n:"Thiago B.",s:5,t:"Atendimento rápido pelo WhatsApp e o cartão com mensagem grátis foi um toque especial. Já é minha floricultura de confiança.",d:"há 1 mês"},
  {n:"Fernanda R.",s:5,t:"As rosas cor-de-rosa são lindas, de haste longa e muito frescas. Preço justo pela qualidade. Recomendo!",d:"há 1 mês"},
  {n:"Marcos A.",s:5,t:"Comprei o kit rosa com chocolate para surpreender minha namorada. Chegou perfeito e ela adorou o capricho.",d:"há 2 meses"},
  {n:"Luciana D.",s:5,t:"Já é a terceira vez que compro e sempre sou muito bem atendida. Flores sempre frescas e entrega pontual em Manaus.",d:"há 2 meses"}
];

function esc(s){
  return String(s).replace(/[&<>"]/g,function(c){
    return {
      '&':'&amp;',
      '<':'&lt;',
      '>':'&gt;',
      '"':'&quot;'
    }[c];
  });
}

function renderReviews(){
  var l=REVIEWS.slice();

  if(!l.length&&/[?&]demo\b/.test(location.search)){
    l=[1,2,3,4,5].map(function(i){
      return {
        n:'Cliente '+i,
        s:5,
        t:'[EXEMPLO – só para testar a animação] Aqui aparecerá a avaliação real do cliente.',
        d:'exemplo'
      };
    });
  }

  var sec=$('avaliacoes');

  if(!sec||!l.length)return;

  var card=function(r,dup){
    var st=Math.max(1,Math.min(5,r.s||5));

    return '<figure class="rc"'+
      (dup?' aria-hidden="true"':'')+
      '><div class="rh">'+
      '<span class="av">'+
      esc((r.n||'?').trim().charAt(0).toUpperCase())+
      '</span>'+
      '<div><b>'+esc(r.n)+'</b>'+
      (r.d?'<small>'+esc(r.d)+'</small>':'')+
      '</div><span class="rg">❀</span></div>'+
      '<div class="st">'+
      '★'.repeat(st)+
      '<span style="opacity:.25">'+
      '★'.repeat(5-st)+
      '</span></div>'+
      '<blockquote>'+esc(r.t)+'</blockquote>'+
      '</figure>';
  };

  var one=l.map(function(r){
    return card(r,false);
  }).join('');

  var t=$('rt');

  t.innerHTML=one+l.map(function(r){
    return card(r,true);
  }).join('');

  t.style.setProperty('--dur',Math.max(25,l.length*9)+'s');

  var avg=l.reduce(function(a,r){
    return a+(r.s||5);
  },0)/l.length;

  $('gs').textContent=
    '★★★★★ · '+
    avg.toFixed(1).replace('.',',')+
    ' ('+l.length+')';

  sec.hidden=false;
  reveal();
}

document.addEventListener('DOMContentLoaded',renderReviews);

document.addEventListener('DOMContentLoaded',function(){
  $('pgto').addEventListener('change',draw);
});