document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      
      // Animate menu toggle
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

  // Interactive TMDB Series & Movies Showcase Sliders
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
      card.addEventListener('click', () => selectCard(idx, false));
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', () => selectCard(activeIndex - 1, true));
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => selectCard(activeIndex + 1, true));
    }
  });
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
