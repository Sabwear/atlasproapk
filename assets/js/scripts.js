document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');

      const spans = menuToggle.querySelectorAll('span');
      if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }

  // Interactive TMDB Series & Movies Showcase Sliders (with auto-rotate)
  document.querySelectorAll('.tmdb-row-card').forEach((rowCard) => {
    const featured = rowCard.querySelector('.tmdb-featured');
    const titleEl = rowCard.querySelector('.tmdb-featured-title');
    const metaEl = rowCard.querySelector('.tmdb-featured-meta');
    const descEl = rowCard.querySelector('.tmdb-featured-desc');
    const countEl = rowCard.querySelector('.tmdb-featured-count');
    const track = rowCard.querySelector('.tmdb-track');
    const cards = Array.from(rowCard.querySelectorAll('.tmdb-poster-card'));
    const prevBtn = rowCard.querySelector('[data-tmdb-prev]');
    const nextBtn = rowCard.querySelector('[data-tmdb-next]');

    if (!featured || !track || cards.length === 0) return;

    let activeIndex = 0;
    let isPaused = false;

    const selectCard = (idx, scrollIntoView = false) => {
      activeIndex = (idx + cards.length) % cards.length;
      const card = cards[activeIndex];
      cards.forEach((c, i) => c.classList.toggle('active', i === activeIndex));

      const bg = card.getAttribute('data-backdrop');
      const title = card.getAttribute('data-title');
      const meta = card.getAttribute('data-meta');
      const desc = card.getAttribute('data-desc');
      const count = card.getAttribute('data-count');

      if (bg) featured.style.backgroundImage = `url('${bg}')`;
      if (title && titleEl) titleEl.textContent = title;
      if (meta && metaEl) metaEl.textContent = meta;
      if (desc && descEl) descEl.textContent = desc;
      if (count && countEl) countEl.textContent = count;

      if (scrollIntoView) {
        const cardLeft = card.offsetLeft - track.offsetLeft;
        track.scrollTo({
          left: Math.max(0, cardLeft - 14),
          behavior: 'smooth'
        });
      }
    };

    cards.forEach((card, idx) => {
      card.addEventListener('click', () => {
        isPaused = true;
        selectCard(idx, false);
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        isPaused = true;
        selectCard(activeIndex - 1, true);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        isPaused = true;
        selectCard(activeIndex + 1, true);
      });
    }

    rowCard.addEventListener('mouseenter', () => { isPaused = true; });
    rowCard.addEventListener('mouseleave', () => { isPaused = false; });

    setInterval(() => {
      if (!isPaused && document.visibilityState === 'visible') {
        selectCard(activeIndex + 1, true);
      }
    }, 5500);
  });

  // Scroll-triggered Reveal Animations
  const revealSelectors = [
    '.panel-stat-card',
    '.tmdb-row-card',
    '.feature-card',
    '.showcase-text',
    '.showcase-image-container',
    '.step-card',
    '.official-app-card',
    '.download-category',
    '.faq-item',
    '.cta-fullwidth .cta-card-wrapper',
    '.card--download'
  ];

  const revealTargets = document.querySelectorAll(revealSelectors.join(','));
  if (revealTargets.length > 0 && 'IntersectionObserver' in window) {
    revealTargets.forEach((el, idx) => {
      el.classList.add('reveal');
      el.style.setProperty('--reveal-delay', `${(idx % 4) * 70}ms`);
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

    revealTargets.forEach((el) => revealObserver.observe(el));
  }

  // Animated Number Count-up for Provider Panel Stats
  const statValues = document.querySelectorAll('.panel-stat-value');
  if (statValues.length > 0 && 'IntersectionObserver' in window) {
    const animateCount = (el) => {
      const raw = el.textContent.trim();
      const target = parseInt(raw.replace(/\s+/g, ''), 10);
      if (Number.isNaN(target)) return;

      const duration = 1100;
      const start = performance.now();
      const formatNum = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = formatNum(Math.round(target * eased));
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = formatNum(target);
        }
      };

      requestAnimationFrame(step);
    };

    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statValues.forEach((el) => statsObserver.observe(el));
  }
});

// Back to Top Progress Circle
document.addEventListener('DOMContentLoaded', function() {
  const progressPath = document.querySelector('.progress-wrap path');
  if (progressPath) {
    const pathLength = progressPath.getTotalLength();

    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

    const updateProgress = function() {
      const scroll = window.pageYOffset || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress);

    const progressWrap = document.querySelector('.progress-wrap');
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 50) {
        progressWrap.classList.add('active-progress');
      } else {
        progressWrap.classList.remove('active-progress');
      }
    });

    progressWrap.addEventListener('click', function(event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
