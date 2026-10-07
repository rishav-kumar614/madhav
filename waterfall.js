(function(){
  const svg=document.getElementById('wfChart'),slider=document.getElementById('calcBillSlider');
  if(!svg||!slider)return;
  const tip=document.getElementById('wfTip'),$=id=>document.getElementById(id);
  const X0=90,X1=880,Y0=40,Y1=250,YEARS=[0,1,3,5,10,18,25];
  const fmt=v=>{const a=Math.abs(v),sg=v<0?'-':'+';return a>=1e7?sg+'₹'+(a/1e7).toFixed(1)+' Cr':sg+'₹'+Math.round(a/1e5)+'L'};
  const money=v=>v>=1e7?'₹'+(v/1e7).toFixed(1)+' Cr':'₹'+(v/1e5).toFixed(0)+' Lakh';

  function model(bill){
    const kwp=Math.round(bill/8.5/30/4.2),P=kwp>500?2.6:kwp<100?3.2:2.9;
    const S=bill*.62*12,gs=1.05*0.993;                       // yearly saving grows 5% tariff, -0.7% degradation
    const sav=k=>S*Math.pow(gs,k-1);                          // saving in year k (k>=1)
    const cumSav=t=>{let c=0,k=1;for(;k<=Math.floor(t);k++)c+=sav(k);return c+(t-Math.floor(t))*sav(k)};
    const capex=cumSav(P)/0.9, shield=capex*0.1;              // 40% depreciation x 25% tax = 10% of capex back in Yr1
    const cum=t=>t===0?-capex:-capex+(t>=1?shield:0)+cumSav(t);
    let pay=null;for(let t=0;t<=25;t+=.05)if(cum(t)>=0){pay=t;break}
    let grid=0;for(let k=1;k<=25;k++)grid+=bill*12*Math.pow(1.055,k-1);
    return{capex,shield,cum,pay:pay??P,free:cum(25),grid};
  }

  function render(bill,anim){
    const m=model(bill),vals=YEARS.map(m.cum);
    const max=Math.max(...vals,1)*1.1,min=Math.min(...vals)*1.25;
    const ys=v=>Y0+(Y1-Y0)*(max-v)/(max-min),y0=ys(0);
    const step=Math.pow(10,Math.floor(Math.log10(max/3)));let tick=step*Math.ceil(max/3/step);
    const slot=(X1-X0)/YEARS.length,bw=Math.min(54,slot*.55);
    let h=`<defs><linearGradient id="wfG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#259345"/><stop offset="1" stop-color="#142250"/></linearGradient>
      <linearGradient id="wfR" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F87171"/><stop offset="1" stop-color="#EF4444"/></linearGradient></defs>`;
    for(let v=tick;v<max;v+=tick){const y=ys(v);h+=`<line x1="${X0}" y1="${y}" x2="${X1}" y2="${y}" stroke="#E2E8F0" stroke-dasharray="4 4"/><text x="${X0-10}" y="${y+4}" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="11" fill="#94A3B8">${fmt(v).replace('+','+')}</text>`}
    h+=`<line x1="${X0}" y1="${y0}" x2="${X1}" y2="${y0}" stroke="#0F172A" stroke-width="2"/><text x="${X0-10}" y="${y0+4}" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="11" font-weight="700" fill="#64748B">₹0</text>`;
    // grid-cost dotted line
    const gx0=X0+slot*.5,gx1=X0+slot*(YEARS.length-.5);
    h+=`<line x1="${gx0}" y1="${y0}" x2="${gx1}" y2="${ys(Math.max(-m.grid,min))}" stroke="#EF4444" stroke-width="2.5" stroke-dasharray="4 5" opacity=".8"/>`;
    h+=`<text x="${gx1}" y="${Y1+4}" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="11" font-weight="700" fill="#EF4444">Grid cost ${fmt(-m.grid)}</text>`;
    YEARS.forEach((t,i)=>{
      const v=vals[i],cx=X0+slot*(i+.5),top=Math.min(ys(v),y0),hh=Math.abs(ys(v)-y0);
      const fill=v<0?'url(#wfR)':t===1?'#4ADE80':'url(#wfG)';
      h+=`<g class="wf-bar" data-i="${i}"><rect x="${cx-bw/2}" y="${v<0?y0:top}" width="${bw}" height="${hh}" rx="5" fill="${fill}" style="transform-origin:${cx}px ${y0}px;${anim?`animation:wfGrow .9s ${i*.12}s both cubic-bezier(.16,1,.3,1)`:''}"/>
        <text x="${cx}" y="${v<0?y0+hh+16:top-8}" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11.5" font-weight="700" fill="${v<0?'#EF4444':'#142250'}" style="${anim?`opacity:0;animation:dynFade .5s ${i*.12+.6}s forwards`:''}">${fmt(v)}</text></g>
        <text x="${cx}" y="${Y1+22}" text-anchor="middle" font-family="Albert Sans, Exo, sans-serif" font-size="12" font-weight="${t===3||t===25?700:500}" fill="${t===25?'#259345':'#64748B'}">Year ${t}</text>`;
    });
    // payback marker
    const pi=Math.min(Math.max(m.pay,0),25),pos=(()=>{let i=0;while(i<YEARS.length-1&&YEARS[i+1]<pi)i++;const f=(pi-YEARS[i])/(YEARS[i+1]-YEARS[i]);return X0+slot*(i+.5+f)})();
    h+=`<line x1="${pos}" y1="${Y0-10}" x2="${pos}" y2="${Y1}" stroke="#142250" stroke-dasharray="4 4"/><circle cx="${pos}" cy="${y0}" r="6" fill="#142250" stroke="#fff" stroke-width="2"/>
      <rect x="${pos-62}" y="${Y0-30}" width="124" height="26" rx="13" fill="#142250"/><text x="${pos}" y="${Y0-13}" text-anchor="middle" font-family="Albert Sans, Exo, sans-serif" font-size="11.5" font-weight="700" fill="#fff">⚡ ${m.pay.toFixed(1)}-yr payback</text>`;
    svg.innerHTML=h;svg._m={m,vals,slot};
    $('wfPay').textContent=m.pay.toFixed(1)+' Years';
    $('wfFree').textContent=fmt(m.free).replace(/^\+?/,'+');
    $('wfGrid').textContent=fmt(-m.grid);
    const n=$('wfBillNote');if(n)n.textContent='for a '+money(bill)+' / mo bill';
  }

  svg.addEventListener('mousemove',e=>{
    const bar=e.target.closest('.wf-bar');if(!bar){tip.style.opacity=0;return}
    const {m,vals}=svg._m,i=+bar.dataset.i,r=svg.getBoundingClientRect(),b=bar.querySelector('rect').getBoundingClientRect(),w=svg.parentElement.getBoundingClientRect();
    tip.style.left=(b.left+b.width/2-w.left)+'px';tip.style.top=(b.top-w.top-8)+'px';tip.style.transform='translate(-50%,-100%)';tip.style.opacity=1;
    tip.innerHTML=`Year ${YEARS[i]}<br>Net cash position <b>${fmt(vals[i])}</b>`;
  });
  svg.addEventListener('mouseleave',()=>tip.style.opacity=0);

  let t;slider.addEventListener('input',()=>{clearTimeout(t);t=setTimeout(()=>render(+slider.value,false),30)});
  render(+slider.value,false);svg.style.opacity=0;
  new IntersectionObserver((es,o)=>es.forEach(en=>{if(en.isIntersecting){svg.style.opacity=1;render(+slider.value,true);o.disconnect()}}),{threshold:.3}).observe(svg);
})();
