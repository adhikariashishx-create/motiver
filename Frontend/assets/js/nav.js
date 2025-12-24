

window.setNavActive = function() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const navWrapper = document.querySelector('.nav-wrapper');
  const overlay = document.querySelector('.nav-overlay');

  function closeMenu() {
    nav.classList.remove('open');
    navWrapper.classList.remove('menu-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    if (overlay) overlay.setAttribute('aria-hidden', 'true');
  }

  if (toggle && nav && navWrapper) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      navWrapper.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      if (overlay) overlay.setAttribute('aria-hidden', String(!open));
    });
  }
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
    // Also close on Escape key
    document.addEventListener('keydown', function(e) {
      if (navWrapper.classList.contains('menu-open') && (e.key === 'Escape' || e.key === 'Esc')) {
        closeMenu();
      }
    });
  }

  // Active link based on filename
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if ((path === '' && href === 'index.html') || href === path) {
      a.classList.add('active');
    }
  });

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var yearSpan = document.getElementById('footer-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
};
// Run immediately if nav is already present
if (document.querySelector('.site-nav')) window.setNavActive();