document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('mainNav');

  if (navToggle && nav) {
    if (window.bootstrap && typeof bootstrap.Collapse === 'function') {
      const navCollapse = new bootstrap.Collapse(nav, { toggle: false });

      navToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isShown = nav.classList.contains('show');
        if (isShown) navCollapse.hide(); else navCollapse.show();
        navToggle.setAttribute('aria-expanded', (!isShown).toString());
      });

      nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          if (nav.classList.contains('show')) {
            navCollapse.hide();
            navToggle.setAttribute('aria-expanded', 'false');
          }
        });
      });
    }
  }

  // Highlight current page in sidebar
  const page = document.body.dataset.page || '';
  document.querySelectorAll('[data-chapter-link]').forEach(link => {
    if (link.dataset.chapterLink === page) link.classList.add('current');
  });

  // Highlight active nav
  const navTarget = document.body.dataset.nav || '';
  document.querySelectorAll('[data-nav-target]').forEach(link => {
    if (link.dataset.navTarget === navTarget) link.classList.add('active');
  });

  // Scroll progress bar
  const progressFill = document.querySelector('.progress-meter-fill');
  if (progressFill) {
    const updateMeter = () => {
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const ratio = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
      progressFill.style.width = `${ratio * 100}%`;
    };
    updateMeter();
    window.addEventListener('scroll', updateMeter, { passive: true });
  }

  // On this page sidebar
  const progressLinks = Array.from(document.querySelectorAll('.progress-link'));
  const sections = progressLinks
    .map(link => {
      const targetId = link.dataset.target;
      if (!targetId) return null;
      const targetEl = document.getElementById(targetId);
      return targetEl ? { link, target: targetEl } : null;
    })
    .filter(Boolean);

  if (sections.length) {
    const headerOffset = 140;
    const setActiveLink = (activeTarget) => {
      sections.forEach(({ link, target }) => {
        link.classList.toggle('is-active', target === activeTarget);
      });
    };
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + headerOffset;
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (scrolledToBottom) { setActiveLink(sections[sections.length - 1].target); return; }
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].target.offsetTop) { setActiveLink(sections[i].target); return; }
      }
      setActiveLink(sections[0].target);
    };
    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
  }
});
