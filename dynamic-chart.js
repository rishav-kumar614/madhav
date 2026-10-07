(function(){
  const svg=document.getElementById('dynChart');if(!svg)return;
  const tip=document.getElementById('dynTip'),$=id=>document.getElementById(id);
  const X0=70,X1=840,Y0=30,Y1=290,T0=4.55,N=25;
  const sG=$('dynG'),sL=$('dynL');
  const cum=(g,L,t)=>{let c=0;for(let y=0;y<t;y+=0.05)c+=(T0*Math.pow(1+g,y)-L)*0.05;return c};
  const K=cum(.055,3.2,2.8);
  const payback=(g,L)=>{for(let y=0;y<=25;y+=0.05)if(cum(g,L,y)>=K)return y;return null};
  let cur={g:.055,L:3.2},yr=N,raf,playRaf,shown={};
  const xs=t=>X0+(X1-X0)*t/N, f=n=>'₹'+n.toFixed(2);

  // animated number
  function countTo(id,val,dec){
    const el=$(id),from=shown[id]??0,t0=performance.now();shown[id]=val;
    (function s(n){const k=Math.min((n-t0)/700,1),e=1-Math.pow(1-k,3);el.textContent=(from+(val-from)*e).toFixed(dec);if(k<1)requestAnimationFrame(s)})(t0);
  }

  function render(g,L,anim){
    const gmax=T0*Math.pow(1+g,N),max=Math.max(8,Math.ceil(Math.max(gmax,L)/4)*4),ys=v=>Y1-(Y1-Y0)*v/max;
    const yl=ys(L);
    let h=`<defs>
      <linearGradient id="dShade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#259345" stop-opacity=".30"/><stop offset="1" stop-color="#259345" stop-opacity="0"/></linearGradient>
      <linearGradient id="dRed" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#FB923C"/><stop offset="1" stop-color="#F43F5E"/></linearGradient>
      <linearGradient id="dGrn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#4ADE80"/><stop offset="1" stop-color="#38BDF8"/></linearGradient>
      <filter id="dGlow" x="-20%" y="-40%" width="140%" height="180%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <clipPath id="dClip"><rect id="dClipR" x="${X0}" y="0" width="${anim?0:X1-X0+2}" height="340"/></clipPath></defs>`;
    for(let i=0;i<=4;i++){const v=max*i/4,y=ys(v);
      h+=`<line x1="${X0}" y1="${y}" x2="${X1}" y2="${y}" stroke="${i?"#E2E8F0":"#CBD5E1"}" ${i?'stroke-dasharray="3 6"':''}/><text x="${X0-12}" y="${y+4}" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="11" fill="#94A3B8">₹${v.toFixed(0)}</text>`;}
    [0,5,10,15,20,25].forEach(t=>h+=`<text x="${xs(t)}" y="316" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#64748B">Yr ${t}</text>`);
    let pts=[];for(let t=0;t<=N;t+=.25)pts.push(xs(t).toFixed(1)+' '+ys(T0*Math.pow(1+g,t)).toFixed(1));
    const line='M'+pts.join(' L');
    h+=`<g clip-path="url(#dClip)">
      <path d="${line} L${X1} ${yl} L${X0} ${yl} Z" fill="url(#dShade)"/>
      <path d="${line}" stroke="url(#dRed)" stroke-width="4" stroke-linecap="round" filter="url(#dGlow)"/>
      <line x1="${X0}" y1="${yl}" x2="${X1}" y2="${yl}" stroke="#259345" stroke-width="4" stroke-linecap="round"/>
      <line x1="${X0}" y1="${yl}" x2="${X1}" y2="${yl}" stroke="#fff" stroke-opacity=".9" stroke-width="1.5" class="dyn-flow"/>
    </g>`;
    // end labels + pulsing dots
    h+=`<g id="dEnds" opacity="${anim?0:1}">
      <circle cx="${X1}" cy="${ys(gmax)}" r="6" fill="#F43F5E" class="dyn-pulse"/><circle cx="${X1}" cy="${ys(gmax)}" r="6" fill="#F43F5E" stroke="#fff" stroke-width="2"/>
      <text x="${X1+14}" y="${ys(gmax)+4}" font-family="JetBrains Mono,monospace" font-size="12" font-weight="700" fill="#E11D48">${f(gmax)}</text>
      <circle cx="${X1}" cy="${yl}" r="6" fill="#259345" class="dyn-pulse"/><circle cx="${X1}" cy="${yl}" r="6" fill="#259345" stroke="#fff" stroke-width="2"/>
      <text x="${X1+14}" y="${yl+4}" font-family="JetBrains Mono,monospace" font-size="12" font-weight="700" fill="#259345">${f(L)}</text></g>`;
    // payback marker
    const pb=payback(g,L);
    if(pb!==null){const px=xs(pb);
      h+=`<g id="dPb" opacity="${anim?0:1}"><line x1="${px}" y1="${Y0}" x2="${px}" y2="${Y1}" stroke="#142250" stroke-opacity=".35" stroke-dasharray="4 5"/>
      <circle cx="${px}" cy="${yl}" r="7" fill="#fff" stroke="#142250" stroke-width="3"/>
      <rect x="${Math.min(Math.max(px-68,X0),X1-136)}" y="${Y0-6}" width="136" height="30" rx="15" fill="#142250" stroke="none"/>
      <text x="${Math.min(Math.max(px,X0+68),X1-68)}" y="${Y0+14}" text-anchor="middle" font-family="Albert Sans, Exo, sans-serif" font-size="12" font-weight="700" fill="#fff">⚡ ${pb.toFixed(1)}-yr payback</text></g>`;}
    h+=`<g id="dScrub"></g><rect id="dHit" x="${X0}" y="${Y0-10}" width="${X1-X0}" height="${Y1-Y0+20}" fill="transparent"/>`;
    svg.innerHTML=h;svg._m={g,L,ys,gmax};
    scrub(yr);
    if(anim){const r=$('dClipR'),t0=performance.now();
      (function s(n){const k=Math.min((n-t0)/1700,1),e=1-Math.pow(1-k,3);r.setAttribute('width',(X1-X0+2)*e);
        if(k<1)requestAnimationFrame(s);else{['dEnds','dPb'].forEach(i=>{const e=$(i);if(e){e.style.transition='opacity .6s';e.setAttribute('opacity',1)}})}})(t0);}
    countTo('dynPay',pb===null?25:pb,1);
    countTo('dynSave',cum(g,L,25),1);
    countTo('dynEnd',gmax,2);
    countTo('dynPct',Math.max(0,(1-L/gmax)*100),0);
    $('dynLegG').textContent=`Grid Tariff Inflation (${(g*100).toFixed(1)}% CAGR)`;
    $('dynLegL').textContent=`Madhav Solar Fixed LCOE (${f(L)})`;
  }

  // scrubber: gap bracket at a given year
  function scrub(t){
    const m=svg._m;if(!m)return;const gp=T0*Math.pow(1+m.g,t),x=xs(t),y1=m.ys(gp),y2=m.ys(m.L);
    $('dScrub').innerHTML=`<line x1="${x}" y1="${Y0}" x2="${x}" y2="${Y1}" stroke="#142250" stroke-opacity=".25" stroke-dasharray="3 4"/>
      <line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="#259345" stroke-width="3" stroke-linecap="round"/>
      <circle cx="${x}" cy="${y1}" r="6" fill="#F43F5E" stroke="#fff" stroke-width="2"/><circle cx="${x}" cy="${y2}" r="6" fill="#259345" stroke="#fff" stroke-width="2"/>`;
    const w=svg.getBoundingClientRect();
    tip.style.left=(x/960*w.width)+'px';tip.style.top=((y1+y2)/2/340*w.height)+'px';tip.style.transform=t>N/2?'translate(calc(-100% - 18px),-50%)':'translate(18px,-50%)';tip.style.opacity=1;
    tip.innerHTML=`Year ${Math.round(t)}<br>Grid <b style="color:#E11D48">${f(gp)}</b> · Solar <b>${f(m.L)}</b><br>You save <b>${f(gp-m.L)}</b>/unit`;
  }
  svg.addEventListener('mousemove',e=>{const r=svg.getBoundingClientRect(),vx=(e.clientX-r.left)/r.width*960;
    if(vx<X0||vx>X1)return;cancelAnimationFrame(playRaf);yr=Math.round((vx-X0)/(X1-X0)*N);scrub(yr)});

  // play timeline
  function play(){cancelAnimationFrame(playRaf);const t0=performance.now();
    (function s(n){const k=Math.min((n-t0)/3500,1);yr=N*(1-Math.pow(1-k,2));scrub(yr);if(k<1)playRaf=requestAnimationFrame(s);else yr=N})(t0);}
  $('dynPlay').onclick=()=>{render(cur.g,cur.L,true);setTimeout(play,300)};

  // sliders + presets with tween
  function setTarget(tg,tl){
    const s={...cur},t0=performance.now();cancelAnimationFrame(raf);
    $('dynG').value=tg*100;$('dynL').value=tl;$('dynGVal').textContent=(tg*100).toFixed(1)+'%';$('dynLVal').textContent=f(tl);
    (function st(n){const k=Math.min((n-t0)/450,1),e=1-Math.pow(1-k,3);cur={g:s.g+(tg-s.g)*e,L:s.L+(tl-s.L)*e};render(cur.g,cur.L,false);if(k<1)raf=requestAnimationFrame(st)})(t0);
  }
  const fromSliders=()=>{document.querySelectorAll('#dynPresets button').forEach(b=>b.classList.remove('on'));setTarget(sG.value/100,+sL.value)};
  sG.addEventListener('input',fromSliders);sL.addEventListener('input',fromSliders);
  document.querySelectorAll('#dynPresets button').forEach(b=>b.onclick=()=>{
    document.querySelectorAll('#dynPresets button').forEach(x=>x.classList.remove('on'));b.classList.add('on');
    setTarget(+b.dataset.g/100,+b.dataset.l);});

  render(cur.g,cur.L,false);svg.style.opacity=0;
  new IntersectionObserver((es,o)=>es.forEach(en=>{if(en.isIntersecting){svg.style.opacity=1;yr=0;render(cur.g,cur.L,true);setTimeout(play,500);o.disconnect()}}),{threshold:.35}).observe(svg);
})();
