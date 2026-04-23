// ========================================
// EV2.SU - Данные для лендинга
// ========================================

const defaultData = {
  locations: [
    { id: 1, name: 'Германия', flag: '🇩🇪', ping: 45, status: 'online' },
    { id: 2, name: 'Нидерланды', flag: '🇳🇱', ping: 52, status: 'online' },
    { id: 3, name: 'Москва', flag: '🇷🇺', ping: 12, status: 'online' },
    { id: 4, name: 'Латвия', flag: '🇱🇻', ping: 38, status: 'online' },
    { id: 5, name: 'Польша', flag: '🇵🇱', ping: 48, status: 'online' },
    { id: 6, name: 'Финляндия', flag: '🇫🇮', ping: 42, status: 'online' },
    { id: 7, name: 'Швеция', flag: '🇸🇪', ping: 55, status: 'online' },
    { id: 8, name: 'Великобритания', flag: '🇬🇧', ping: 78, status: 'online' },
    { id: 9, name: 'Франция', flag: '🇫🇷', ping: 65, status: 'online' },
    { id: 10, name: 'США', flag: '🇺🇸', ping: 120, status: 'online' },
    { id: 11, name: 'Канада', flag: '🇨🇦', ping: 135, status: 'online' },
    { id: 12, name: 'Япония', flag: '🇯🇵', ping: 95, status: 'online' },
    { id: 13, name: 'Сингапур', flag: '🇸🇬', ping: 88, status: 'online' },
    { id: 14, name: 'Австралия', flag: '🇦🇺', ping: 180, status: 'online' },
    { id: 15, name: 'Италия', flag: '🇮🇹', ping: 72, status: 'online' },
    { id: 16, name: 'Испания', flag: '🇪🇸', ping: 68, status: 'online' },
    { id: 17, name: 'Португалия', flag: '🇵🇹', ping: 75, status: 'online' },
    { id: 18, name: 'Чехия', flag: '🇨🇿', ping: 50, status: 'online' },
    { id: 19, name: 'Австрия', flag: '🇦🇹', ping: 53, status: 'online' },
    { id: 20, name: 'Швейцария', flag: '🇨🇭', ping: 58, status: 'online' }
  ],

  advantages: [
    { id: 1, title: 'Мультиподписка', pill: 'Android • iOS • TV • Windows', text: 'Один ключ — подключайте нужные устройства в пару кликов.', color: 'is-green' },
    { id: 2, title: 'Конфиденциальность', pill: 'Без логов', text: 'Не собираем логи активности и не храним историю посещений.', color: 'is-blue' },
    { id: 3, title: 'Оптимизация доступа', pill: 'Маршрутизация + DNS', text: 'Меньше обрывов и "просадок", стабильнее открываются сайты.', color: 'is-purple' },
    { id: 4, title: 'Доступ к сайтам', pill: 'LTE • Wi‑Fi', text: 'Удобно в публичных сетях и при нестабильной сети провайдера.', color: 'is-amber' },
    { id: 5, title: 'Реферальная программа', pill: 'Заработок', text: 'Приглашайте друзей и получайте вознаграждение за подключения.', color: 'is-pink' },
    { id: 6, title: 'Поддержка 24/7', pill: 'Всегда на связи', text: 'Помогаем с подключением, оплатой и вопросами через кабинет.', color: 'is-cyan' }
  ],

  pricing: [
    { 
      id: 1, 
      name: 'Пробный период', 
      amount: '0₽', 
      period: '/ 3 дня', 
      badge: 'Free', 
      featured: false,
      features: [
        { label: 'Поддержка', value: '24/7' },
        { label: 'Анонимность', value: 'Да' },
        { label: 'Скорость', value: 'Высокая' }
      ],
      locations: ['🇩🇪 Германия', '🇳🇱 Нидерланды']
    },
    { 
      id: 2, 
      name: 'Лучший выбор', 
      amount: 'от 99₽', 
      period: '/ 1 месяц', 
      badge: 'Top', 
      featured: true,
      features: [
        { label: 'Устройств', value: 'до 2' },
        { label: 'Серверы', value: 'EU + RU' },
        { label: 'Трафик', value: 'от 100 ГБ' },
        { label: 'Опции', value: 'Лимиты/устройства' }
      ],
      locations: ['🇩🇪 Германия', '🇳🇱 Нидерланды', '🇷🇺 Москва']
    },
    { 
      id: 3, 
      name: 'Premium тариф', 
      amount: 'от 240₽', 
      period: '/ 1 месяц', 
      badge: 'Pro', 
      featured: false,
      features: [
        { label: 'Устройств', value: 'до 5' },
        { label: 'Трафик', value: 'Безлимит ∞' },
        { label: 'Локации', value: 'Все' },
        { label: 'Режим', value: 'Личное' }
      ],
      locations: ['🇩🇪 Германия', '🇳🇱 Нидерланды', '🇷🇺 Москва', '🇱🇻 Латвия']
    },
    { 
      id: 4, 
      name: 'Squad тариф', 
      amount: 'от 599₽', 
      period: '/ 1 месяц', 
      badge: 'Team', 
      featured: false,
      features: [
        { label: 'Устройств', value: '10+' },
        { label: 'Трафик', value: 'от 1 000 ГБ' },
        { label: 'Режим', value: 'Совместное' },
        { label: 'Скорость', value: 'Высокая' }
      ],
      locations: ['🇩🇪 Германия', '🇳🇱 Нидерланды', '🇷🇺 Москва']
    }
  ],

  faq: [
    { id: 1, question: 'Какие клиенты поддерживаются?', answer: 'Xray, V2ray, Nekobox, Clash с поддержкой Vless. Подробнее на странице подписки' },
    { id: 2, question: 'На каких устройствах работает?', answer: 'Windows, macOS, Android, iOS, Linux' },
    { id: 3, question: 'Есть бесплатный тест?', answer: '3 дня без карты и ограничений.' },
    { id: 4, question: 'Закончился трафик?', answer: 'Вы можете докупить дополнительный трафик в личном кабинете.' },
    { id: 5, question: 'Как связаться с поддержкой?', answer: '<a href="https://cabinet.ev2.su/support" target="_blank" class="btn-primary">Написать в поддержку</a>' },
    { id: 6, question: 'Реферальная программа?', answer: '40% от платежей друга + 50₽ обоим при регистрации по вашей ссылке.' }
  ],

  ticker: [
    { text: 'Безопасное подключение', type: 'filled' },
    { text: 'AES‑256', type: 'outlined' },
    { text: 'Без логов', type: 'filled' },
    { text: 'High Speed', type: 'outlined' },
    { text: 'Secure', type: 'filled' },
    { text: 'Anonymous', type: 'outlined' },
    { text: 'Fast DNS', type: 'filled' },
    { text: 'No Limits', type: 'outlined' }
  ]
};

// Загрузка данных из localStorage или использование default
function loadData() {
  const stored = localStorage.getItem('ev2Data');
  if (stored) {
    return JSON.parse(stored);
  }
  return defaultData;
}

// Сохранение данных в localStorage
function saveData(data) {
  localStorage.setItem('ev2Data', JSON.stringify(data));
}

// Сброс данных к default
function resetData() {
  localStorage.removeItem('ev2Data');
  return defaultData;
}

// Экспорт для использования в других скриптах
window.EV2Data = { loadData, saveData, resetData, defaultData };
