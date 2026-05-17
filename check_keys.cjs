const fs = require('fs');
const { bikesData } = require('./src/data/bikes.js');
const ru = JSON.parse(fs.readFileSync('./src/locales/ru/translation.json', 'utf8'));

const models = ['yamaha-mt-15', 'yamaha-r25', 'yamaha-mt-25', 'honda-cb150x', 'honda-cb150r', 'honda-cbr150r', 'honda-cbr250rr', 'honda-crf150l', 'honda-crf250l', 'kawasaki-ninja-250', 'kawasaki-zx-25rr', 'suzuki-v-strom-250'];

models.forEach(m => {
  const modelData = ru.bikes.models[m];
  const bData = bikesData[m];

  // features
  bData.features.forEach(f => {
    if (!modelData.features || !modelData.features[f]) console.log('Missing RU feature:', m, f);
  });
  
  // diagnostics
  bData.diagnostics.forEach(d => {
    if (!modelData.diagnostics || !modelData.diagnostics[d]) console.log('Missing RU diagnostics:', m, d);
  });

  // detailed_issues
  bData.detailed_issues.forEach(i => {
    if (!modelData.detailed_issues || !modelData.detailed_issues[i.id]) console.log('Missing RU detailed_issue:', m, i.id);
  });

  // pricing
  if (bData.detailed_pricing) {
    bData.detailed_pricing.forEach(p => {
      if (!modelData.pricing || !modelData.pricing[p.item]) console.log('Missing RU pricing:', m, p.item);
    });
  }

  // faq
  if (bData.faq) {
    bData.faq.forEach(f => {
      if (!modelData.faq || !modelData.faq[f]) console.log('Missing RU faq:', m, f);
    });
  }
});

console.log('Key validation finished.');
