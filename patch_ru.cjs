const fs = require('fs');
const filePath = './src/locales/ru/translation.json';
const ru = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const patch = {
  "kawasaki-ninja-250": {
    detailed_issues: {
      brake_discs: {
        title: "Износ тормозных дисков",
        symptoms: "вибрация при торможении",
        reason: "агрессивная езда",
        action: "замена дисков и колодок"
      }
    },
    faq: {
      riding_position: {
        q: "Посадка спортивная?",
        a: "Посадка умеренно спортивная, подходит для города."
      }
    }
  },
  "kawasaki-zx-25rr": {
    features: {
      screamer: "Звук настоящего спортбайка",
      premium_suspension: "Премиальная подвеска"
    },
    diagnostics: {
      check_engine: {
        title: "Горит Check Engine?",
        steps: ["Проверьте код ошибки сканером", "Качество бензина"],
        info: "Чувствителен к плохому топливу."
      },
      tire_wear: {
        title: "Быстрый износ шин?",
        steps: ["Проверьте давление", "Стиль вождения"],
        info: "Заводские шины мягкие."
      },
      high_fuel_consumption: {
        title: "Высокий расход?",
        steps: ["Воздушный фильтр", "Свечи зажигания"],
        info: "4 цилиндра требуют много топлива."
      }
    },
    detailed_issues: {
      electronics_glitch: {
        title: "Сбои в электронике",
        symptoms: "ошибки на панели",
        reason: "слабый аккумулятор",
        action: "зарядить или заменить АКБ"
      },
      tire_wear: {
        title: "Износ резины",
        symptoms: "лысая резина",
        reason: "агрессивная езда",
        action: "замена шин"
      },
      chain_stretch: {
        title: "Растяжение цепи",
        symptoms: "провисание и шум",
        reason: "мощный двигатель",
        action: "регулировка или замена"
      }
    },
    pricing: {
      oil_synthetic_premium: "Премиум синтетическое масло",
      tire_replacement: "Замена комплекта шин"
    },
    faq: {
      fuel_consumption: {
        q: "Какой расход топлива?",
        a: "Обычно 6-8 литров на 100 км."
      }
    }
  },
  "suzuki-v-strom-250": {
    features: {
      all_rounder: "Универсальный турэндуро",
      comfortable: "Комфортный",
      practical: "Практичный",
      oil_cooled: "Масляное охлаждение"
    },
    diagnostics: {
      hard_start: {
        title: "Тяжело заводится?",
        steps: ["Напряжение АКБ", "Проверка свечей"],
        info: "Простой и надежный мотор."
      },
      chain_noise: {
        title: "Шум цепи?",
        steps: ["Проверка натяжения", "Смазка"],
        info: "Требует ухода после оффроуда."
      },
      weak_headlight: {
        title: "Слабый свет фары?",
        steps: ["Проверка лампы", "Контакты"],
        info: "Возможно потребуется LED лампа."
      }
    },
    detailed_issues: {
      top_heavy: {
        title: "Тяжелый центр тяжести",
        symptoms: "падение на малых скоростях",
        reason: "вес мотоцикла",
        action: "установка дуг безопасности"
      },
      headlight_brightness: {
        title: "Слабый свет",
        symptoms: "плохая видимость ночью",
        reason: "слабая лампа накаливания",
        action: "установка LED"
      }
    },
    pricing: {
      chain_kit: "Комплект звезд и цепи"
    },
    faq: {
      seat_height: {
        q: "Высокое ли сиденье?",
        a: "Сиденье довольно доступное, 800 мм."
      },
      offroad_capability: {
        q: "Подходит для бездорожья?",
        a: "Для легкого бездорожья и гравия - отлично."
      }
    }
  }
};

Object.keys(patch).forEach(model => {
  if (!ru.bikes.models[model]) {
    ru.bikes.models[model] = {};
  }
  Object.keys(patch[model]).forEach(section => {
    if (!ru.bikes.models[model][section]) {
      ru.bikes.models[model][section] = {};
    }
    Object.assign(ru.bikes.models[model][section], patch[model][section]);
  });
});

fs.writeFileSync(filePath, JSON.stringify(ru, null, 2), 'utf8');
console.log('RU Translation patched successfully.');
