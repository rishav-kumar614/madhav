/**
 * Client-side i18n Localization Engine
 * Supports: English (en), Hindi (hi), Gujarati (gu)
 */
(function() {
  const DEFAULT_LANG = 'en';
  const STORAGE_KEY = 'madhav_selected_lang';

  // Get current language from localStorage or default
  function getCurrentLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && TRANSLATIONS[saved]) {
      return saved;
    }
    return DEFAULT_LANG;
  }

  // Set and apply language
  function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = DEFAULT_LANG;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.setAttribute('lang', lang);
    applyTranslations(lang);
    updateSwitcherUI(lang);

    // Dispatch event in case dynamic components (like calculator or charts) want to re-render
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  // Apply translations to all DOM elements with data-i18n
  function applyTranslations(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];

    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // HTML content (for elements containing <strong>, <br>, etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });
  }

  // Update switcher buttons / dropdown UI
  function updateSwitcherUI(lang) {
    const labels = {
      en: 'English',
      hi: 'हिन्दी',
      gu: 'ગુજરાતી'
    };
    const codes = {
      en: 'EN',
      hi: 'HI',
      gu: 'GU'
    };

    // Update active dropdown label if exists
    document.querySelectorAll('.lang-current-label').forEach(el => {
      el.textContent = codes[lang] || 'EN';
    });

    // Update active class on options
    document.querySelectorAll('.lang-opt-btn').forEach(btn => {
      const optLang = btn.getAttribute('data-lang');
      if (optLang === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    const initialLang = getCurrentLang();
    setLanguage(initialLang);

    // Event listeners for language switcher dropdown toggle
    document.addEventListener('click', (e) => {
      const toggle = e.target.closest('.lang-switcher-toggle');
      const dropdown = document.querySelector('.lang-switcher-dropdown');
      
      if (toggle) {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle('is-open');
      } else if (!e.target.closest('.lang-switcher-menu')) {
        if (dropdown) dropdown.classList.remove('is-open');
      }
    });

    // Event listeners for language option buttons
    document.addEventListener('click', (e) => {
      const opt = e.target.closest('.lang-opt-btn');
      if (opt) {
        e.preventDefault();
        const selectedLang = opt.getAttribute('data-lang');
        setLanguage(selectedLang);
        const dropdown = document.querySelector('.lang-switcher-dropdown');
        if (dropdown) dropdown.classList.remove('is-open');
      }
    });
  });

  // Expose globally
  window.MadhavI18n = {
    setLanguage,
    getCurrentLang,
    t: (key) => {
      const l = getCurrentLang();
      return (TRANSLATIONS[l] && TRANSLATIONS[l][key]) || (TRANSLATIONS.en && TRANSLATIONS.en[key]) || key;
    }
  };
})();
