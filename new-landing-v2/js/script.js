// ========================================
// EV2.SU - Основной скрипт
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  const data = EV2Data.loadData();
  
  // PRELOADER
  const preloader = document.getElementById('preloader');
  const progressBar = document.getElementById('progressBar');
  
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
          document.body.classList.remove('loading');
        }, 500);
      }, 300);
    }
    progressBar.style.width = progress + '%';
  }, 200);
  
  // RENDER LOCATIONS
  const locationsContainer = document.getElementById('serversContainer');
  if (locationsContainer) {
    locationsContainer.innerHTML = data.locations.map(loc => `
      <div class="location-card">
        <div class="location-flag">${loc.flag}</div>
        <div class="location-name">${loc.name}</div>
        <div class="location-status ${loc.status}">
          <span class="status-indicator-dot"></span>
          ${loc.status === 'online' ? 'Онлайн' : 'Офлайн'}
        </div>
        <div class="location-ping">${loc.ping} мс</div>
      </div>
    `).join('');
  }
  
  // RENDER ADVANTAGES
  const advantagesContainer = document.getElementById('advantagesContainer');
  if (advantagesContainer) {
    advantagesContainer.innerHTML = data.advantages.map(adv => `
      <article class="promo-tile ${adv.color}">
        <div class="promo-row">
          <div class="promo-title">${adv.title}</div>
          <span class="promo-pill">${adv.pill}</span>
        </div>
        <div class="promo-sep"></div>
        <p class="promo-text">${adv.text}</p>
      </article>
    `).join('');
  }
  
  // RENDER PRICING
  const pricingContainer = document.getElementById('pricingContainer');
  if (pricingContainer) {
    pricingContainer.innerHTML = data.pricing.map(price => `
      <article class="pricing-card ${price.featured ? 'pricing-card--featured' : ''}">
        <header class="pricing-card__head">
          <div class="pricing-card__title">
            <h3>${price.name}</h3>
            <div class="pricing-card__price">${price.amount} <span>${price.period}</span></div>
          </div>
          <span class="pricing-card__badge ${price.featured ? 'pricing-card__badge--green' : ''}">${price.badge}</span>
        </header>
        <ul class="pricing-list">
          ${price.features.map(f => `
            <li>
              <span class="label">${f.label}</span>
              <span class="value">${f.value}</span>
            </li>
          `).join('')}
        </ul>
        <div class="pricing-locations">
          ${price.locations.map(loc => `
            <div class="flag-chip">${loc}</div>
          `).join('')}
        </div>
        <a href="https://cabinet.ev2.su/" class="pricing-btn" target="_blank">Подключить</a>
      </article>
    `).join('');
  }
  
  // RENDER FAQ
  const faqContainer = document.getElementById('faqContainer');
  if (faqContainer) {
    faqContainer.innerHTML = data.faq.map(faq => `
      <div class="faq-item">
        <div class="faq-q">${faq.question}</div>
        <div class="faq-a">
          <p>${faq.answer}</p>
        </div>
      </div>
    `).join('');
    
    // FAQ Accordion
    document.querySelectorAll('.faq-q').forEach(q => {
      q.addEventListener('click', () => {
        const item = q.parentElement;
        item.classList.toggle('active');
      });
    });
  }
  
  // RENDER TICKERS
  const renderTicker = (containerId, cloneId) => {
    const container = document.getElementById(containerId);
    const clone = document.getElementById(cloneId);
    
    if (container && clone) {
      const html = data.ticker.map(item => `
        <span class="ticker-item ${item.type}">${item.text}</span>
      `).join('');
      
      container.innerHTML = html;
      clone.innerHTML = html;
    }
  };
  
  renderTicker('ticker1Content', 'ticker1Clone');
  renderTicker('ticker2Content', 'ticker2Clone');
  
  // MOBILE NAV
  const navToggle = document.querySelector('.nav-toggle');
  const mobileNav = document.getElementById('mobileNav');
  const navBackdrop = document.querySelector('[data-nav-backdrop]');
  const mobileClose = document.querySelector('.mobile-nav__close');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  
  function openMobileNav() {
    mobileNav.classList.add('active');
    mobileNav.hidden = false;
    navBackdrop.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  
  function closeMobileNav() {
    mobileNav.classList.remove('active');
    navBackdrop.hidden = true;
    document.body.style.overflow = '';
    setTimeout(() => {
      mobileNav.hidden = true;
    }, 300);
  }
  
  navToggle?.addEventListener('click', openMobileNav);
  navBackdrop?.addEventListener('click', closeMobileNav);
  mobileClose?.addEventListener('click', closeMobileNav);
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });
  
  // SMOOTH SCROLL
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
  
  // HEADER SCROLL EFFECT
  const header = document.querySelector('.site-header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.style.background = 'rgba(15, 23, 42, 0.98)';
      header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
    } else {
      header.style.background = 'rgba(15, 23, 42, 0.95)';
      header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
  });
  
  // ANIMATION ON SCROLL
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.location-card, .promo-tile, .pricing-card, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
  
});
