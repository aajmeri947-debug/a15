(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var W={12:['Lightweight','A shirt-weight wool for mild days, best worn as a layer rather than a coat.','50&deg;F and up','Autumn walks, layering','A T-shirt',.15],16:['Shirt jacket','The classic overshirt weight. Warm enough on its own in cool weather.','42&deg;F and up','Errands, campfires, cool evenings','A light shirt',.3],
20:['Mid-weight','A sturdy jacket weight that handles a chilly morning without a sweater.','35&deg;F and up','Yard work, commuting','A flannel shirt',.48],24:['Mackinaw weight','The traditional heavy cloth. Dense, wind-resistant and warm when damp.','25&deg;F and up','Hiking, chopping wood, winter outings','A sweater',.66],
26:['Heavy mackinaw','Thick, felted wool for real cold. Stiff at first, softening over years of wear.','18&deg;F and up','Cold-weather work and hunting season','A wool sweater',.8],30:['Expedition weight','About as heavy as wool cloth gets. Almost a blanket you can button.','10&deg;F and up','Ice fishing, long days in deep cold','A thick sweater and base layer',.94]};
var ws=[].slice.call(document.querySelectorAll('#wt-s button'));function wt(v){var w=W[v];ws.forEach(function(b){var on=+b.dataset.v===v;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);});$('wt-t').textContent=v+' oz — '+w[0];$('wt-d').textContent=w[1];$('wt-c').innerHTML=w[2];$('wt-a').textContent=w[3];$('wt-l').textContent=w[4];$('wt-f').style.height=(w[5]*100)+'%';$('wt-cl').style.height=(v*2.2)+'px';}
if(ws.length){ws.forEach(function(b){b.addEventListener('click',function(){wt(+b.dataset.v);});});wt(24);}
var pv=$('pl-v');if(pv){var A='#B22222',B='#1A1A1A';function hex(h,a){var n=parseInt(h.slice(1),16);return 'rgba('+(n>>16)+','+((n>>8)&255)+','+(n&255)+','+a+')';}
 var N={'#B22222':'red','#1A1A1A':'black','#2E4A2E':'forest','#1F3A5F':'navy','#C9A227':'mustard','#F3EAD8':'cream','#6B4A2E':'bark','#5A6B7A':'slate'};
 function pl(){var z=+$('pl-z').value,s=Math.round(z*40),o=$('pl-o').checked;$('pl-zv').textContent=z+' in';var g='linear-gradient(90deg,'+hex(B,.85)+' 50%,transparent 50%),linear-gradient('+hex(B,.85)+' 50%,transparent 50%)';
  if(o)g='linear-gradient(90deg,transparent 46%,rgba(201,162,39,.9) 46% 49%,transparent 49%),linear-gradient(transparent 46%,rgba(201,162,39,.9) 46% 49%,transparent 49%),'+g;pv.style.backgroundColor=A;pv.style.backgroundImage=g;pv.style.backgroundSize=s+'px '+s+'px';
  $('pl-n').textContent=(A===B?'Solid '+N[A]+' wool':(A==='#B22222'&&B==='#1A1A1A'?'Classic buffalo check':N[A].charAt(0).toUpperCase()+N[A].slice(1)+' and '+N[B]+' check'))+(o?' with overcheck':'');}
 function sw(id,cb){var bs=[].slice.call(document.querySelectorAll('#'+id+' button'));bs.forEach(function(b){b.setAttribute('aria-pressed',b.classList.contains('on'));b.addEventListener('click',function(){bs.forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});cb(b.dataset.c);pl();});});}
 sw('pl-a',function(c){A=c;});sw('pl-b',function(c){B=c;});$('pl-z').addEventListener('input',pl);$('pl-o').addEventListener('change',pl);pl();}
})();
