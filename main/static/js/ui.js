// Contact form handler (frontend only, accessible)
document.addEventListener('DOMContentLoaded', function () {
  var contact = document.getElementById('contactForm');
  if (contact) {
    contact.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = contact.name.value.trim();
      var email = contact.email.value.trim();
      var message = contact.message.value.trim();
      if (!name || !email || !message) {
        toast('Please fill all required fields.');
        return;
      }
      toast('Message queued. Backend integration coming soon.');
      contact.reset();
    });
  }
});
// IntersectionObserver for [data-animate] elements
document.addEventListener('DOMContentLoaded', function () {
  const animatedEls = document.querySelectorAll('[data-animate]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    animatedEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all
    animatedEls.forEach(el => el.classList.add('reveal'));
  }
});
// Fade-in/slide-up on scroll for .fadein-up elements
(function () {
  function revealOnScroll() {
    const elements = document.querySelectorAll('.fadein-up');
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 60) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('resize', revealOnScroll);
  document.addEventListener('DOMContentLoaded', revealOnScroll);
})();

// Smooth scroll for same-page anchors
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

// Simple toast
function toast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'card';
    t.style.position = 'fixed';
    t.style.bottom = '20px';
    t.style.right = '20px';
    t.style.padding = '12px 16px';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  setTimeout(() => t.style.opacity = '0', 2500);
}

// Contact form handler (frontend only)
document.addEventListener('DOMContentLoaded', function () {
  const contact = document.getElementById('contactForm');
  if (contact) {
    contact.addEventListener('submit', e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(contact));
      if (!data.name || !data.email || !data.message) {
        toast('Please fill all fields.');
        return;
      }
      toast('Message queued. Backend integration coming soon.');
      contact.reset();
    });
  }
});

// Tabs logic for services.html
document.addEventListener('DOMContentLoaded', function () {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  if (tabBtns.length && tabPanels.length) {
    tabBtns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        tabPanels.forEach((panel, j) => {
          if (i === j) {
            panel.classList.add('active');
            panel.removeAttribute('hidden');
          } else {
            panel.classList.remove('active');
            panel.setAttribute('hidden', '');
          }
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
      });
    });
  }
  // Staggered animation for service cards
  const cards = document.querySelectorAll('.service-card');
  cards.forEach((card, i) => {
    card.style.animationDelay = (i * 100) + 'ms';
  });
});

