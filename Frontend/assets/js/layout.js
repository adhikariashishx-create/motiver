// Dynamically loads nav.html and footer.html into the page
fetch('nav.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('site-nav').innerHTML = html;
    var s = document.createElement('script');
    s.src = 'assets/js/nav.js';
    s.onload = function() {
      // Ensure nav active effect runs after nav is loaded
      if (window.setNavActive) window.setNavActive();
    };
    document.body.appendChild(s);
  });
fetch('footer.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('site-footer').innerHTML = html;
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  });
