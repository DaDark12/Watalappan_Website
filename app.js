/* assets/js/app.js
   Interactivity:
    - theme toggle (persist)
    - smooth nav scroll
    - header blur on scroll
    - lightbox for gallery images
*/

(() => {
  // small helpers
  const $ = sel => document.querySelector(sel);
  const $$ = sel => Array.from(document.querySelectorAll(sel));

  // THEME TOGGLE (persist)
  const body = document.body;
  const saved = localStorage.getItem('watal-theme');
  if (saved === 'dark') body.classList.add('dark-mode');

  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      localStorage.setItem('watal-theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
  }

  // NAV BLUR ON SCROLL
  const navWrap = document.querySelector('.nav-wrap');
  window.addEventListener('scroll', () => {
    if (!navWrap) return;
    const y = window.scrollY;
    navWrap.style.backdropFilter = y > 40 ? 'blur(16px) saturate(120%)' : 'blur(10px) saturate(110%)';
    navWrap.style.transform = y > 40 ? 'translateY(-3px)' : 'translateY(0)';
  });

  // SMOOTH SCROLL for internal links
  $$('.site-nav a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const href = a.getAttribute('href');
      if (!href || !href.startsWith('#')) {
        // allow external links
        window.location.href = href;
        return;
      }
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
      }
    });
  });

  // SIMPLE LIGHTBOX for gallery (works with images in .gallery-grid)
  const galleryImages = $$('.gallery-grid img');
  if (galleryImages.length) {
    // create overlay
    const overlay = document.createElement('div');
    overlay.id = 'watal-lightbox';
    overlay.style.cssText = 'position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(8,8,10,0.75);z-index:1200;';
    const img = document.createElement('img');
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    img.style.borderRadius = '12px';
    overlay.appendChild(img);
    document.body.appendChild(overlay);

    galleryImages.forEach(el => {
      el.style.cursor = 'zoom-in';
      el.addEventListener('click', () => {
        img.src = el.src;
        overlay.style.display = 'flex';
      });
    });
    overlay.addEventListener('click', () => overlay.style.display = 'none');
  }

  // small accessibility: keyboard close lightbox
  document.addEventListener('keyup', e => {
    if (e.key === 'Escape') {
      const ov = document.getElementById('watal-lightbox');
      if (ov) ov.style.display = 'none';
    }
  });

  // prefetch / lazy fallback: if assets/images missing, fallback to remote free images
  const localImages = $$('.gallery-grid img, .hero-img');
  localImages.forEach(imgEl => {
    imgEl.addEventListener('error', () => {
      // fallback remote sources (safe freebies)
      const fallbackMap = {
        'watalappan-hero-1200.jpg': 'https://upload.wikimedia.org/wikipedia/commons/8/81/Watalappan-Sri_Lanka.jpg',
        'watalappan-slice-1200.jpg': 'https://cdn.pixabay.com/photo/2017/02/27/14/58/watalappan-2107578_1280.jpg'
      };
      const src = imgEl.getAttribute('src');
      // try to detect filename and pick fallback
      for (const k of Object.keys(fallbackMap)) {
        if (src && src.includes(k)) {
          imgEl.src = fallbackMap[k];
          break;
        }
      }
    });
  });
})();
