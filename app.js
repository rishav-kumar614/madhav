/**
 * MADHAV SOLAR ENERGY — B2B DECISION-MAKING FUNNEL INTERACTIVITY
 * File: app.js
 */

document.addEventListener('DOMContentLoaded', () => {
  initSiteLoader();
  initSolarCalculator();
  initSectorTabs();
  initCommitteeSwitcher();
  initFaqAccordion();
  initAssessmentModal();
  initLeadForm();
  initSLDVisualizer();
  initPipelineStages();
  initIntelHubTabs();
});

/* ==========================================================
   1. DRAFT 1 LOADER INITIALIZATION & POST-LOADER TIMELINE
   ========================================================== */
function initSiteLoader() {
  const loader = document.getElementById('madhav-site-loader');
  const bar = document.getElementById('loaderBar');
  const pct = document.getElementById('loaderPct');
  const status = document.getElementById('loaderStatus');

  if (!loader) {
    document.body.classList.add('loaded');
    initScrollAnimations();
    animateCounters();
    return;
  }

  const steps = [
    { at: 20, text: 'Scanning Solar Irradiance' },
    { at: 55, text: 'Configuring Inverter Grid' },
    { at: 85, text: 'Calibrating DISCOM Sync' },
    { at: 100, text: 'System Operational' }
  ];

  const duration = 1400; // 1.4s
  const start = performance.now();

  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 2.5);
    const percent = Math.round(eased * 100);

    if (bar) bar.style.width = percent + '%';
    if (pct) pct.innerText = percent + '%';

    if (status) {
      for (let i = steps.length - 1; i >= 0; i--) {
        if (percent >= steps[i].at) {
          status.innerText = steps[i].text;
          break;
        }
      }
    }

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      setTimeout(() => {
        loader.classList.add('fade-out');
        document.body.classList.add('loaded');
        
        // Trigger hero number animations & start observing scroll elements
        setTimeout(() => {
          animateCounters();
          initScrollAnimations();
        }, 150);
      }, 150);
    }
  }

  requestAnimationFrame(tick);
}

/* ==========================================================
   2. DYNAMIC NUMBER COUNTERS
   ========================================================== */
function animateCounters() {
  const counters = document.querySelectorAll('.dyn-counter');
  counters.forEach((el) => {
    const target = parseFloat(el.getAttribute('data-target'));
    const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    const duration = 1600;
    const startTime = performance.now();

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = (eased * target).toFixed(decimals);
      el.innerText = current;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.innerText = target.toFixed(decimals);
      }
    }

    requestAnimationFrame(step);
  });
}

/* ==========================================================
   3. TEXT & CARD SCROLL ANIMATIONS (INTERSECTION OBSERVER)
   ========================================================== */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}

/* ==========================================================
   3. INTERACTIVE SOLAR CALCULATOR (CFO FEASIBILITY ENGINE)
   ========================================================== */
function initSolarCalculator() {
  const slider = document.getElementById('calcBillSlider');
  const billDisplay = document.getElementById('calcBillDisplay');
  const sizeDisplay = document.getElementById('calcPlantSize');
  const annualSaveDisplay = document.getElementById('calcAnnualSavings');
  const paybackDisplay = document.getElementById('calcPayback');
  const lifetimeDisplay = document.getElementById('calcLifetimeSavings');

  if (!slider) return;

  function formatLakhs(amount) {
    if (amount >= 10000000) {
      return '₹' + (amount / 10000000).toFixed(2) + ' Cr';
    }
    return '₹' + (amount / 100000).toFixed(1) + ' Lakh';
  }

  function updateCalculations() {
    const monthlyBill = parseInt(slider.value, 10);
    if (billDisplay) billDisplay.innerText = formatLakhs(monthlyBill) + ' / mo';

    // Industrial Tariff assumptions (Average ₹8.50/unit)
    const monthlyUnits = monthlyBill / 8.5; 
    const dailyUnits = monthlyUnits / 30;
    
    // 1 kWp produces ~4.2 units per day in Gujarat sun
    const recommendedKWp = Math.round(dailyUnits / 4.2);
    
    // Average 55% to 70% bill displacement with solar
    const monthlySavings = monthlyBill * 0.62;
    const annualSavings = monthlySavings * 12;
    
    // 25-Year net savings (accounting for 0.7% annual degradation)
    const lifetimeSavings = annualSavings * 22.5;

    // Approximate Payback period in years
    let payback = 2.9;
    if (recommendedKWp > 500) payback = 2.6;
    else if (recommendedKWp < 100) payback = 3.2;

    if (sizeDisplay) {
      if (recommendedKWp >= 1000) {
        sizeDisplay.innerText = (recommendedKWp / 1000).toFixed(2) + ' MWp';
      } else {
        sizeDisplay.innerText = recommendedKWp + ' kWp';
      }
    }

    if (annualSaveDisplay) annualSaveDisplay.innerText = formatLakhs(annualSavings) + ' / yr';
    if (paybackDisplay) paybackDisplay.innerText = payback.toFixed(1) + ' Years';
    if (lifetimeDisplay) lifetimeDisplay.innerText = formatLakhs(lifetimeSavings);
  }

  slider.addEventListener('input', updateCalculations);
  updateCalculations();
}

/* ==========================================================
   4. INDUSTRY SECTOR TABS (SECTION 5)
   ========================================================== */
function initSectorTabs() {
  const tabs = document.querySelectorAll('.sector-tab-btn');
  const contents = document.querySelectorAll('.sector-content-card');

  if (!tabs.length || !contents.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');

      tabs.forEach((t) => t.classList.remove('active'));
      contents.forEach((c) => (c.style.display = 'none'));

      tab.classList.add('active');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.style.display = 'grid';
      }
    });
  });
}

/* ==========================================================
   5. BUYING-COMMITTEE TRUST SWITCHER (SECTION 13)
   ========================================================== */
function initCommitteeSwitcher() {
  const btns = document.querySelectorAll('.role-switch-btn');
  const roleDisplay = document.getElementById('committeeContent');

  if (!btns.length || !roleDisplay) return;

  const data = {
    ceo: {
      question: '“Will this improve our long-term competitiveness?”',
      answer: 'Power is an uncontrollable variable cost. By locking in a levelized cost of energy at ₹3.20 - ₹3.80/unit for 25 years, solar directly insulates your per-unit manufacturing margin from unpredictable state DISCOM tariff inflation.'
    },
    cfo: {
      question: '“Does the investment make commercial sense?”',
      answer: 'Industrial solar generates an internal rate of return (IRR) of 28% to 34% with a full capital payback period of 2.6 to 3.2 years. Combined with 40% Accelerated Depreciation in Year 1 under Section 32, the tax write-off alone protects immediate working capital.'
    },
    plant: {
      question: '“Can this be executed without compromising operations?”',
      answer: 'Our engineering protocols utilize non-penetrative standing seam clamps for PEB sheds and modular structural rigging. Installation is sequenced during planned maintenance windows, ensuring zero production downtime.'
    },
    procurement: {
      question: '“Can this partner deliver at the required quality and scale?”',
      answer: 'With 200+ MW delivered and 550+ industrial projects commissioned, Madhav Solar deploys Tier-1 TOPCon bifacial modules, European string inverters, and dedicated in-house liaison teams for GEDA and CEIG approvals.'
    },
    sustainability: {
      question: '“How does this support our decarbonisation goals?”',
      answer: 'Every 1 MWp of rooftop solar displaces approximately 1,300 metric tonnes of carbon emissions per year, directly fulfilling Scope-2 reduction targets and strengthening ESG audit reporting for multinational supply chains.'
    }
  };

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const role = btn.getAttribute('data-role');
      if (data[role]) {
        roleDisplay.innerHTML = `
          <div class="role-key-question">${data[role].question}</div>
          <div class="role-answer-box">${data[role].answer}</div>
        `;
      }
    });
  });
}

/* ==========================================================
   6. FAQ ACCORDION (SECTION 15)
   ========================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const btn = item.querySelector('.faq-question-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach((other) => other.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================
   7. FACTORY SOLAR ASSESSMENT MODAL CONTROLLER
   ========================================================== */
function initAssessmentModal() {
  const modal = document.getElementById('assessmentModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const backdrop = document.getElementById('modalBackdrop');
  const triggers = document.querySelectorAll('.cta-assessment-trigger');

  if (!modal) return;

  function openModal(e) {
    if (e) e.preventDefault();
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Highlight and focus the first input field
    const firstInput = modal.querySelector('input');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 250);
    }
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  triggers.forEach((btn) => {
    btn.addEventListener('click', openModal);
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  window.openAssessmentModal = openModal;
  window.closeAssessmentModal = closeModal;
}

/* ==========================================================
   8. LEAD QUALIFICATION FORM HANDLER
   ========================================================== */
function initLeadForm() {
  const form = document.getElementById('qualificationForm');
  const feedback = document.getElementById('formFeedback');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="name"]').value;
    const company = form.querySelector('[name="company"]').value;
    const email = form.querySelector('[name="email"]').value;
    const phone = form.querySelector('[name="phone"]').value;
    const bill = form.querySelector('[name="bill"]').value;

    if (!name || !phone || !email) {
      alert('Please provide your name, phone number, and business email.');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;
    submitBtn.innerText = 'Structuring Assessment...';
    submitBtn.disabled = true;

    // Simulate instant processing & validation
    setTimeout(() => {
      form.reset();
      submitBtn.innerText = originalText;
      submitBtn.disabled = false;

      if (feedback) {
        feedback.style.display = 'block';
        feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        alert('Thank you, ' + name + '. Your Solar Opportunity Assessment request for ' + company + ' has been received. Our senior engineering team will connect within 4 business hours.');
      }
    }, 1200);
  });
}

/* ==========================================================
   9. SINGLE LINE DIAGRAM (SLD) & POWER FLOW VISUALIZER
   ========================================================== */
function initSLDVisualizer() {
  const tabs = document.querySelectorAll('.sld-model-tab');
  const yieldEl = document.getElementById('sldMetricYield');
  const demandEl = document.getElementById('sldMetricDemand');
  const offsetEl = document.getElementById('sldMetricOffset');
  const tariffEl = document.getElementById('sldMetricTariff');
  const savingsEl = document.getElementById('sldMetricSavings');
  const badgeEl = document.getElementById('sldBadgeMode');
  const descEl = document.getElementById('sldDescText');

  if (!tabs.length) return;

  const modelData = {
    rooftop: {
      yield: '842.4 kW',
      demand: '960.0 kW',
      offset: '87.8%',
      tariff: '₹3.20 / kWh',
      savings: '₹4,820 / hr',
      badge: 'ARCHITECTURE MODE: ON-GRID ROOFTOP',
      desc: 'Direct captive displacement via LT panel busbar synchronization. Zero-export throttling prevents reverse surge while bi-directional metering records banking credits.'
    },
    ground: {
      yield: '3,450.0 kW',
      demand: '3,800.0 kW',
      offset: '90.8%',
      tariff: '₹2.95 / kWh',
      savings: '₹19,400 / hr',
      badge: 'ARCHITECTURE MODE: GROUND-MOUNT CAPTIVE',
      desc: 'Dedicated high-voltage substation (11kV/66kV). Multi-MW continuous generation engineered for energy-intensive industrial processing with maximum daytime offset.'
    },
    openaccess: {
      yield: '10,000.0 kW',
      demand: '12,500.0 kW',
      offset: '80.0%',
      tariff: '₹3.65 / kWh',
      savings: '₹54,000 / hr',
      badge: 'ARCHITECTURE MODE: OPEN ACCESS WHEELING',
      desc: 'Off-site multi-MW generation wheeled through state transmission utilities (STU/CTU). Multi-facility banking credits settled against monthly DISCOM billing.'
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const model = tab.getAttribute('data-model');
      const data = modelData[model];
      if (!data) return;

      if (yieldEl) yieldEl.innerText = data.yield;
      if (demandEl) demandEl.innerText = data.demand;
      if (offsetEl) offsetEl.innerText = data.offset;
      if (tariffEl) tariffEl.innerText = data.tariff;
      if (savingsEl) savingsEl.innerText = data.savings;
      if (badgeEl) badgeEl.innerText = data.badge;
      if (descEl) descEl.innerText = data.desc;
    });
  });

  // Live telemetry subtle fluctuation simulation
  setInterval(() => {
    const activeTab = document.querySelector('.sld-model-tab.active');
    if (!activeTab) return;
    const model = activeTab.getAttribute('data-model');
    if (model === 'rooftop' && yieldEl) {
      const baseYield = 840 + (Math.random() * 5);
      yieldEl.innerText = baseYield.toFixed(1) + ' kW';
    }
  }, 2800);
}

/* ==========================================================
   10. 6-STAGE TURNKEY PIPELINE DOSSIER INTERACTIVITY
   ========================================================== */
function initPipelineStages() {
  const pills = document.querySelectorAll('.pipeline-stage-pill');
  const tagEl = document.getElementById('dossierTag');
  const titleEl = document.getElementById('dossierTitle');
  const textEl = document.getElementById('dossierText');
  const kpiEl = document.getElementById('dossierKpi');

  if (!pills.length) return;

  const stageData = {
    '1': {
      tag: 'STAGE 01 // LOAD AUDIT',
      title: 'LiDAR Shadow Modeling & Load Profiling',
      text: 'Engineering audit of TOD bills, transformer headroom, and roof integrity.',
      kpi: 'Feasibility Dossier'
    },
    '2': {
      tag: 'STAGE 02 // STATUTORY NOC',
      title: 'GEDA Sanction & DISCOM Approvals',
      text: 'Statutory approvals from state nodal agency (GEDA), CEIG, and DISCOM grid feasibility.',
      kpi: '14–21 Days'
    },
    '3': {
      tag: 'STAGE 03 // DETAILED DESIGN',
      title: '3D CAD Design & Electrical SLD',
      text: 'PVSyst yield modeling, voltage-drop optimization (<1.5%), and 180 km/h wind engineering.',
      kpi: 'PVSyst & AutoCAD'
    },
    '4': {
      tag: 'STAGE 04 // CFO MODELING',
      title: 'CFO Economics & Tax Shield',
      text: 'CAPEX vs Zero-CAPEX PPA structuring and Section 32 40% accelerated depreciation modeling.',
      kpi: '40% Tax Shield'
    },
    '5': {
      tag: 'STAGE 05 // EPC COMMISSIONING',
      title: 'Tier-1 EPC & Grid Synchronization',
      text: 'Non-penetrative clamp assembly, TOPCon modules, and CEIG line clearance with zero plant downtime.',
      kpi: 'CEIG Sanctioned'
    },
    '6': {
      tag: 'STAGE 06 // ASSET MANAGEMENT',
      title: '24/7 IoT SCADA & Asset O&M',
      text: 'Continuous string telemetry, thermal drone checks, and guaranteed PR > 78% uptime.',
      kpi: '99.2% Uptime SLA'
    }
  };

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const stage = pill.getAttribute('data-stage');
      const data = stageData[stage];
      if (!data) return;

      if (tagEl) tagEl.innerText = data.tag;
      if (titleEl) titleEl.innerText = data.title;
      if (textEl) textEl.innerText = data.text;
      if (kpiEl) kpiEl.innerText = data.kpi;
    });
  });
}

/* ==========================================================
   11. UNIFIED INTELLIGENCE HUB TAB SWITCHER
   ========================================================== */
function initIntelHubTabs() {
  const tabs = document.querySelectorAll('.intel-hub-tab-btn');
  const panes = document.querySelectorAll('.intel-tab-pane');

  if (!tabs.length || !panes.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPaneId = tab.getAttribute('data-pane');
      const targetPane = document.getElementById(targetPaneId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });
}


