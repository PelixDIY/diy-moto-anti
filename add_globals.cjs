const fs = require('fs');

const enPath = './src/locales/en/translation.json';
const ruPath = './src/locales/ru/translation.json';

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const ru = JSON.parse(fs.readFileSync(ruPath, 'utf8'));

const enPatch = {
  features_coming_soon: "Feature list coming soon...",
  diagnostics_title: "What to do right now?",
  diagnostics_subtitle: "Quick troubleshooting steps for common issues",
  fix_it_btn: "Fix it →",
  data_updating: "Technical diagnostics for this model are being updated...",
  common_problems_title: "Typical Technical Issues",
  symptoms: "Symptoms",
  reason: "Root Cause",
  action: "Recommendation",
  maintenance_schedule: "Service Schedule",
  pricing_title: "Service & Parts",
  pricing_note: "Approximate prices at DIY MotoGarage",
  owner_mistakes_title: "Common Mistakes by Owners",
  suitable_for: "Perfect for",
  not_suitable_for: "Not ideal for",
  faq_title: "Frequently Asked Questions",
  ready_to_book: "Ready to give your bike the best care?",
  cta_text: "Join hundreds of happy riders on Bali. Book your professional maintenance or repair today."
};

const ruPatch = {
  features_coming_soon: "Список характеристик скоро появится...",
  diagnostics_title: "Что делать прямо сейчас?",
  diagnostics_subtitle: "Быстрые шаги по устранению частых проблем",
  fix_it_btn: "Починить →",
  data_updating: "Технические данные для этой модели обновляются...",
  common_problems_title: "Типичные технические проблемы",
  symptoms: "Симптомы",
  reason: "Причина",
  action: "Рекомендация",
  maintenance_schedule: "Регламент ТО",
  pricing_title: "Обслуживание и запчасти",
  pricing_note: "Ориентировочные цены в DIY MotoGarage",
  owner_mistakes_title: "Частые ошибки владельцев",
  suitable_for: "Идеально подходит для",
  not_suitable_for: "Не лучший выбор для",
  faq_title: "Часто задаваемые вопросы",
  ready_to_book: "Готовы доверить свой байк профессионалам?",
  cta_text: "Присоединяйтесь к сотням довольных райдеров на Бали. Запишитесь на обслуживание прямо сейчас."
};

Object.assign(en.bikes, enPatch);
Object.assign(ru.bikes, ruPatch);

fs.writeFileSync(enPath, JSON.stringify(en, null, 2), 'utf8');
fs.writeFileSync(ruPath, JSON.stringify(ru, null, 2), 'utf8');

console.log('Global translation keys added successfully.');
