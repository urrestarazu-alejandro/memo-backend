/**
 * Tailwind Site JavaScript
 * Industrial Dark Mode Theme Custom Interactions
 */

(function() {
  'use strict';

  // ============================================
  // NAVBAR SCROLL BEHAVIOR
  // ============================================

  let lastScrollTop = 0;
  const navbar = document.querySelector('nav');
  const scrollThreshold = 100;

  if (navbar && navbar.classList.contains('sticky')) {
    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Only apply hide/show behavior after scrolling past threshold
      if (scrollTop > scrollThreshold) {
        if (scrollTop > lastScrollTop) {
          // Scrolling down - hide navbar
          navbar.style.transform = 'translateY(-100%)';
        } else {
          // Scrolling up - show navbar
          navbar.style.transform = 'translateY(0)';
        }
      } else {
        // Always show navbar at top
        navbar.style.transform = 'translateY(0)';
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, { passive: true });
  }

  // ============================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Skip if href is just "#"
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ============================================
  // TABLE OF CONTENTS SIDEBAR (if exists)
  // ============================================

  const sidebarLinks = document.querySelectorAll('aside nav a, aside nav li');
  const headings = document.querySelectorAll('article h2, article h3');

  if (sidebarLinks.length > 0 && headings.length > 0) {
    // Build heading to link mapping
    const headingMap = new Map();
    headings.forEach((heading, index) => {
      if (sidebarLinks[index]) {
        headingMap.set(heading, sidebarLinks[index]);
      }
    });

    // Update active state on scroll
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const link = headingMap.get(entry.target);
        if (link) {
          if (entry.isIntersecting) {
            // Remove active class from all links
            sidebarLinks.forEach(l => l.classList.remove('sidebar-link-active', 'border-primary', 'text-primary'));
            sidebarLinks.forEach(l => l.classList.add('border-transparent', 'text-industrial-secondary'));

            // Add active class to current link
            link.classList.remove('border-transparent', 'text-industrial-secondary');
            link.classList.add('sidebar-link-active', 'border-primary', 'text-primary');
          }
        }
      });
    }, observerOptions);

    headings.forEach(heading => observer.observe(heading));
  }

  // ============================================
  // READING PROGRESS BAR (for blog posts)
  // ============================================

  const progressBar = document.querySelector('.progress-bar');
  const article = document.querySelector('article');

  if (progressBar && article) {
    window.addEventListener('scroll', function() {
      const articleRect = article.getBoundingClientRect();
      const articleTop = articleRect.top + window.pageYOffset;
      const articleHeight = articleRect.height;
      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset;

      // Calculate progress
      const progress = Math.min(
        Math.max(
          ((scrollTop - articleTop + windowHeight) / (articleHeight + windowHeight)) * 100,
          0
        ),
        100
      );

      progressBar.style.width = progress + '%';
    }, { passive: true });
  }

  // ============================================
  // IMAGE LAZY LOADING FALLBACK
  // ============================================

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // ============================================
  // CODE BLOCK COPY BUTTON
  // ============================================

  document.querySelectorAll('pre code').forEach((codeBlock) => {
    const pre = codeBlock.parentElement;
    if (!pre.querySelector('.copy-button')) {
      const copyButton = document.createElement('button');
      copyButton.className = 'copy-button absolute top-2 right-2 bg-industrial-frame hover:bg-primary text-white hover:text-black px-3 py-1 text-xs font-bold uppercase tracking-wider transition-colors rounded flex items-center gap-1';
      copyButton.innerHTML = '<span class="material-symbols-outlined text-sm">content_copy</span> Copy';
      copyButton.setAttribute('aria-label', 'Copy code to clipboard');

      pre.style.position = 'relative';
      pre.appendChild(copyButton);

      copyButton.addEventListener('click', async () => {
        const code = codeBlock.textContent;

        try {
          await navigator.clipboard.writeText(code);
          copyButton.innerHTML = '<span class="material-symbols-outlined text-sm">check</span> Copied!';
          copyButton.classList.add('bg-primary', 'text-black');

          setTimeout(() => {
            copyButton.innerHTML = '<span class="material-symbols-outlined text-sm">content_copy</span> Copy';
            copyButton.classList.remove('bg-primary', 'text-black');
          }, 2000);
        } catch (err) {
          console.error('Failed to copy code:', err);
          copyButton.textContent = 'Failed';
          setTimeout(() => {
            copyButton.innerHTML = '<span class="material-symbols-outlined text-sm">content_copy</span> Copy';
          }, 2000);
        }
      });
    }
  });

  // ============================================
  // EXTERNAL LINKS - OPEN IN NEW TAB
  // ============================================

  document.querySelectorAll('article a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href.startsWith('http://') || href.startsWith('https://')) && !href.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');

      // Add external link icon if not already present
      if (!link.querySelector('.external-icon')) {
        const icon = document.createElement('span');
        icon.className = 'external-icon material-symbols-outlined text-xs ml-1 inline-block';
        icon.textContent = 'open_in_new';
        icon.style.verticalAlign = 'super';
        link.appendChild(icon);
      }
    }
  });

  // ============================================
  // KEYBOARD SHORTCUTS
  // ============================================

  document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to open search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      const searchLink = document.getElementById('nav-search-link');
      if (searchLink) {
        searchLink.click();
      }
    }

    // Escape to close modals
    if (e.key === 'Escape') {
      const searchOverlay = document.getElementById('beautifuljekyll-search-overlay');
      if (searchOverlay && !searchOverlay.classList.contains('hidden')) {
        document.getElementById('nav-search-exit')?.click();
      }
    }
  });

  // ============================================
  // CONSOLE MESSAGE
  // ============================================

  console.log(
    '%c🚀 Memorias de un Backend ',
    'background: #ff9800; color: #000; font-size: 16px; font-weight: bold; padding: 10px 20px; border-radius: 4px;'
  );
  console.log(
    '%cPowered by Tailwind CSS + Jekyll',
    'color: #ffc340; font-size: 12px; font-weight: normal;'
  );

})();
