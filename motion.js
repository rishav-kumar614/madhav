/* MOTION LAYER */
(function(){
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

  // scroll progress
  const bar=document.createElement('div');bar.className='scroll-progress';document.body.appendChild(bar);

  // split headlines into words
  document.querySelectorAll('.hero-headline,.section-title,.merged-block-title-wrap h3,.offer-manifesto-card h2,#cfo h2').forEach(el=>{
    if(el.dataset.split)return;el.dataset.split='1';
    let i=0;
    const walk=n=>{
      [...n.childNodes].forEach(c=>{
        if(c.nodeType===3){
          const frag=document.createDocumentFragment();
          c.textContent.split(/(\s+)/).forEach(t=>{
            if(!t)return;
            if(/^\s+$/.test(t)){frag.appendChild(document.createTextNode(' '));return}
            const w=document.createElement('span');w.className='w';
            const in_=document.createElement('span');in_.textContent=t;in_.style.setProperty('--i',i++);
            w.appendChild(in_);frag.appendChild(w);
          });
          c.replaceWith(frag);
        }else if(c.nodeType===1&&c.tagName!=='BR')walk(c);
      });
    };
    walk(el);el.classList.add('split-words');
  });
  // reveal split text on scroll (hero is handled by body.loaded)
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.3});
  document.querySelectorAll('.split-words').forEach(el=>io.observe(el));

  // card tilt + spotlight
  const sel='.problem-card,.pillar-card,.arch-card,.proof-case-card,.cfo-q-card,.sector-content-card,.hardware-anatomy-card,.calculator-card,.qualification-form-card';
  document.querySelectorAll(sel).forEach(c=>{
    c.classList.add('fx-card');
    if(reduce)return;
    c.addEventListener('mousemove',e=>{
      const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
      c.style.setProperty('--mx',x*100+'%');c.style.setProperty('--my',y*100+'%');
      c.style.setProperty('--ry',((x-.5)*6)+'deg');c.style.setProperty('--rx',((.5-y)*6)+'deg');
    });
    c.addEventListener('mouseleave',()=>{c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg')});
  });

  // scroll: progress + hero parallax
  const grid=document.querySelector('.hero-bg-grid'),glow=document.querySelector('.hero-ambient-glow');
  let tick=false;
  addEventListener('scroll',()=>{
    if(tick)return;tick=true;
    requestAnimationFrame(()=>{
      const h=document.documentElement.scrollHeight-innerHeight;
      bar.style.transform='scaleX('+(h>0?scrollY/h:0)+')';
      if(!reduce&&scrollY<innerHeight*1.2){
        if(grid)grid.style.transform='translateY('+scrollY*.15+'px)';
        if(glow)glow.style.transform='translateY('+scrollY*.3+'px)';
      }
      tick=false;
    });
  },{passive:true});
})();
