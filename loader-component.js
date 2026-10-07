/**
 * Madhav Solar Energy — Site Loader Controller
 * File: loader-component.js
 */

(function () {
  function initMadhavLoader(options = {}) {
    const duration = options.duration || 1600; // ms
    const exitStyle = options.exitStyle || 'fade'; // 'fade' or 'curtain'
    
    const loader = document.getElementById('madhav-site-loader');
    if (!loader) return;

    const progressBar = loader.querySelector('.progress-bar');
    const percentEl = loader.querySelector('.percent-number');
    const statusMsg = loader.querySelector('#loaderStatusMsg');

    const statusSteps = [
      { at: 25, text: 'Analyzing Solar Load' },
      { at: 60, text: 'Configuring Inverter Grid' },
      { at: 90, text: 'Connecting DISCOM Net-Meter' },
      { at: 100, text: 'System Operational' }
    ];

    const startTime = performance.now();

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const percent = Math.round(eased * 100);

      if (progressBar) progressBar.style.width = percent + '%';
      if (percentEl) percentEl.innerText = percent + '%';

      if (statusMsg) {
        for (let i = statusSteps.length - 1; i >= 0; i--) {
          if (percent >= statusSteps[i].at) {
            statusMsg.innerText = statusSteps[i].text;
            break;
          }
        }
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setTimeout(() => {
          if (exitStyle === 'curtain') {
            loader.classList.add('curtain-up');
          } else {
            loader.classList.add('fade-out');
          }
        }, 200);
      }
    }

    requestAnimationFrame(step);
  }

  // Auto initialize when window finishes loading
  if (document.readyState === 'complete') {
    initMadhavLoader();
  } else {
    window.addEventListener('load', () => initMadhavLoader());
  }

  // Export to window for manual triggering
  window.initMadhavLoader = initMadhavLoader;
})();
