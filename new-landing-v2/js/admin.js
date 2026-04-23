// ========================================
// EV2.SU - Админ-панель
// ========================================

class AdminPanel {
  constructor() {
    this.isAuthenticated = false;
    this.data = EV2Data.loadData();
    this.init();
  }

  init() {
    // Кнопка открытия админки
    document.getElementById('adminBtn')?.addEventListener('click', () => this.openModal());
    document.getElementById('closeAdmin')?.addEventListener('click', () => this.closeModal());
    
    // Логин
    document.getElementById('loginBtn')?.addEventListener('click', () => this.login());
    
    // Табы
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => this.switchTab(e.target.dataset.tab));
    });
    
    // Добавление элементов
    document.getElementById('addLocation')?.addEventListener('click', () => this.addLocation());
    document.getElementById('addPricing')?.addEventListener('click', () => this.addPricing());
    document.getElementById('addFaq')?.addEventListener('click', () => this.addFaq());
    document.getElementById('addTicker')?.addEventListener('click', () => this.addTicker());
    
    // Сброс данных
    document.getElementById('resetData')?.addEventListener('click', () => this.resetAllData());
    
    // Enter для логина
    document.getElementById('adminPass')?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.login();
    });
  }

  openModal() {
    document.getElementById('adminModal').classList.remove('hidden');
  }

  closeModal() {
    document.getElementById('adminModal').classList.add('hidden');
  }

  login() {
    const user = document.getElementById('adminUser').value;
    const pass = document.getElementById('adminPass').value;
    
    if (user === 'admin' && pass === 'admin') {
      this.isAuthenticated = true;
      document.getElementById('adminLogin').classList.add('hidden');
      document.getElementById('adminDashboard').classList.remove('hidden');
      this.renderAdminLists();
    } else {
      alert('Неверный логин или пароль!');
    }
  }

  switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(`tab-${tabName}`).classList.add('active');
  }

  renderAdminLists() {
    this.renderLocationsList();
    this.renderPricingList();
    this.renderFaqList();
    this.renderTickerList();
  }

  // LOCATIONS
  renderLocationsList() {
    const container = document.getElementById('adminLocationsList');
    container.innerHTML = this.data.locations.map(loc => `
      <div class="admin-item">
        <span>${loc.flag} ${loc.name} - ${loc.ping}мс - ${loc.status}</span>
        <button onclick="admin.deleteLocation(${loc.id})">Удалить</button>
      </div>
    `).join('');
  }

  addLocation() {
    const name = document.getElementById('locName').value;
    const flag = document.getElementById('locFlag').value;
    const ping = parseInt(document.getElementById('locPing').value) || 50;
    const status = document.getElementById('locStatus').value;
    
    if (!name || !flag) {
      alert('Заполните название и флаг!');
      return;
    }
    
    const newLoc = {
      id: Date.now(),
      name,
      flag,
      ping,
      status
    };
    
    this.data.locations.push(newLoc);
    EV2Data.saveData(this.data);
    this.renderLocationsList();
    
    // Очистка полей
    document.getElementById('locName').value = '';
    document.getElementById('locFlag').value = '';
    document.getElementById('locPing').value = '';
    
    alert('Локация добавлена!');
  }

  deleteLocation(id) {
    if (confirm('Удалить эту локацию?')) {
      this.data.locations = this.data.locations.filter(l => l.id !== id);
      EV2Data.saveData(this.data);
      this.renderLocationsList();
    }
  }

  // PRICING
  renderPricingList() {
    const container = document.getElementById('adminPricingList');
    container.innerHTML = this.data.pricing.map(price => `
      <div class="admin-item">
        <span>${price.name} - ${price.amount}${price.period}</span>
        <button onclick="admin.deletePricing(${price.id})">Удалить</button>
      </div>
    `).join('');
  }

  addPricing() {
    const name = document.getElementById('priceName').value;
    const amount = document.getElementById('priceAmount').value;
    const period = document.getElementById('pricePeriod').value;
    const badge = document.getElementById('priceBadge').value;
    const featuresText = document.getElementById('priceFeatures').value;
    
    if (!name || !amount) {
      alert('Заполните название и цену!');
      return;
    }
    
    const features = featuresText.split('\n').filter(f => f.trim()).map(f => {
      const [label, value] = f.split(':');
      return { label: label?.trim() || 'Опция', value: value?.trim() || '-' };
    });
    
    const newPrice = {
      id: Date.now(),
      name,
      amount,
      period,
      badge,
      featured: false,
      features: features.length ? features : [{ label: 'Опция', value: '-' }],
      locations: ['🇩🇪 Германия']
    };
    
    this.data.pricing.push(newPrice);
    EV2Data.saveData(this.data);
    this.renderPricingList();
    
    // Очистка полей
    document.getElementById('priceName').value = '';
    document.getElementById('priceAmount').value = '';
    document.getElementById('pricePeriod').value = '';
    document.getElementById('priceBadge').value = '';
    document.getElementById('priceFeatures').value = '';
    
    alert('Тариф добавлен!');
  }

  deletePricing(id) {
    if (confirm('Удалить этот тариф?')) {
      this.data.pricing = this.data.pricing.filter(p => p.id !== id);
      EV2Data.saveData(this.data);
      this.renderPricingList();
    }
  }

  // FAQ
  renderFaqList() {
    const container = document.getElementById('adminFaqList');
    container.innerHTML = this.data.faq.map(faq => `
      <div class="admin-item">
        <span><strong>${faq.question}</strong></span>
        <button onclick="admin.deleteFaq(${faq.id})">Удалить</button>
      </div>
    `).join('');
  }

  addFaq() {
    const question = document.getElementById('faqQuestion').value;
    const answer = document.getElementById('faqAnswer').value;
    
    if (!question || !answer) {
      alert('Заполните вопрос и ответ!');
      return;
    }
    
    const newFaq = {
      id: Date.now(),
      question,
      answer
    };
    
    this.data.faq.push(newFaq);
    EV2Data.saveData(this.data);
    this.renderFaqList();
    
    // Очистка полей
    document.getElementById('faqQuestion').value = '';
    document.getElementById('faqAnswer').value = '';
    
    alert('Вопрос добавлен!');
  }

  deleteFaq(id) {
    if (confirm('Удалить этот вопрос?')) {
      this.data.faq = this.data.faq.filter(f => f.id !== id);
      EV2Data.saveData(this.data);
      this.renderFaqList();
    }
  }

  // TICKER
  renderTickerList() {
    const container = document.getElementById('adminTickerList');
    container.innerHTML = this.data.ticker.map((item, index) => `
      <div class="admin-item">
        <span>${item.text} (${item.type})</span>
        <button onclick="admin.deleteTicker(${index})">Удалить</button>
      </div>
    `).join('');
  }

  addTicker() {
    const text = document.getElementById('tickerItem').value;
    const type = document.getElementById('tickerType').value;
    
    if (!text) {
      alert('Заполните текст!');
      return;
    }
    
    this.data.ticker.push({ text, type });
    EV2Data.saveData(this.data);
    this.renderTickerList();
    
    // Очистка поля
    document.getElementById('tickerItem').value = '';
    
    alert('Элемент добавлен!');
  }

  deleteTicker(index) {
    if (confirm('Удалить этот элемент?')) {
      this.data.ticker.splice(index, 1);
      EV2Data.saveData(this.data);
      this.renderTickerList();
    }
  }

  // RESET ALL
  resetAllData() {
    if (confirm('Вы уверены? Все данные будут сброшены к исходным!')) {
      this.data = EV2Data.resetData();
      this.renderAdminLists();
      alert('Данные сброшены! Обновите страницу чтобы увидеть изменения.');
    }
  }
}

// Инициализация админки
const admin = new AdminPanel();
