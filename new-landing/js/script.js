// EV2.SU - Modern VPN Landing Page Script

document.addEventListener('DOMContentLoaded', function() {
  
  // ===================================
  // PRELOADER
  // ===================================
  const preloader = document.getElementById('preloader');
  const progressFill = document.getElementById('progressFill');
  
  if (preloader && progressFill) {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          preloader.classList.add('hidden');
        }, 500);
      }
      progressFill.style.width = progress + '%';
    }, 200);
  }
  
  // ===================================
  // LOCATIONS DATA
  // ===================================
  const locations = [
    { name: 'Германия', flag: '🇩🇪', status: 'online' },
    { name: 'Нидерланды', flag: '🇳🇱', status: 'online' },
    { name: 'Франция', flag: '🇫🇷', status: 'online' },
    { name: 'Великобритания', flag: '🇬🇧', status: 'online' },
    { name: 'США', flag: '🇺🇸', status: 'online' },
    { name: 'Канада', flag: '🇨🇦', status: 'online' },
    { name: 'Польша', flag: '🇵🇱', status: 'online' },
    { name: 'Латвия', flag: '🇱🇻', status: 'online' },
    { name: 'Финляндия', flag: '🇫🇮', status: 'online' },
    { name: 'Швеция', flag: '🇸🇪', status: 'online' },
    { name: 'Норвегия', flag: '🇳🇴', status: 'online' },
    { name: 'Испания', flag: '🇪🇸', status: 'online' },
    { name: 'Италия', flag: '🇮🇹', status: 'online' },
    { name: 'Чехия', flag: '🇨🇿', status: 'online' },
    { name: 'Австрия', flag: '🇦🇹', status: 'online' },
    { name: 'Швейцария', flag: '🇨🇭', status: 'online' },
    { name: 'Япония', flag: '🇯🇵', status: 'online' },
    { name: 'Сингапур', flag: '🇸🇬', status: 'online' },
    { name: 'Австралия', flag: '🇦🇺', status: 'online' },
    { name: 'Бразилия', flag: '🇧🇷', status: 'online' }
  ];
  
  // ===================================
  // RENDER LOCATIONS
  // ===================================
  const locationsGrid = document.getElementById('locationsGrid');
  
  if (locationsGrid) {
    locations.forEach(location => {
      const card = document.createElement('div');
      card.className = 'location-card';
      card.innerHTML = `
        <div class="location-flag">${location.flag}</div>
        <div class="location-info">
          <div class="location-name">${location.name}</div>
          <div class="location-status ${location.status}">
            <span class="status-indicator"></span>
            ${location.status === 'online' ? 'Онлайн' : 'Офлайн'}
          </div>
        </div>
      `;
      locationsGrid.appendChild(card);
    });
  }
  
  // ===================================
  // FAQ ACCORDION
  // ===================================
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
  });
  
  // ===================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ===================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // ===================================
  // HEADER SCROLL EFFECT
  // ===================================
  const header = document.querySelector('.header');
  
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 10, 15, 0.95)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
      } else {
        header.style.background = 'rgba(10, 10, 15, 0.8)';
        header.style.boxShadow = 'none';
      }
    });
  }
  
  // ===================================
  // MOBILE MENU TOGGLE
  // ===================================
  const mobileToggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav');
  
  if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', () => {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      
      if (nav.style.display === 'flex') {
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.width = '100%';
        nav.style.flexDirection = 'column';
        nav.style.background = 'rgba(10, 10, 15, 0.98)';
        nav.style.padding = '20px';
        nav.style.borderBottom = '1px solid var(--color-border)';
        nav.style.gap = '16px';
      }
    });
  }
  
  // ===================================
  // ANIMATION ON SCROLL
  // ===================================
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
  
  // Observe feature cards
  document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });
  
  // Observe pricing cards
  document.querySelectorAll('.pricing-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });
  
  // Observe location cards
  document.querySelectorAll('.location-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s`;
    observer.observe(card);
  });
  
  // ===================================
  // MODAL FUNCTIONALITY
  // ===================================
  const modalOverlay = document.getElementById('trialModal');
  const modalClose = modalOverlay ? modalOverlay.querySelector('.modal-close') : null;
  
  if (modalOverlay && modalClose) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
    
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }
  
  // Open modal on button click (if needed)
  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modalOverlay) {
        modalOverlay.classList.add('active');
      }
    });
  });
  
  // ===================================
  // PRICING CARD HIGHLIGHT EFFECT
  // ===================================
  document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
  
  console.log('EV2.SU Landing Page loaded successfully! 🚀');
});
