const fs = require('fs');
const ru = JSON.parse(fs.readFileSync('./src/locales/ru/translation.json', 'utf8'));

const models = ['yamaha-mt-15', 'yamaha-r25', 'yamaha-mt-25', 'honda-cb150x', 'honda-cb150r', 'honda-cbr150r', 'honda-cbr250rr', 'honda-crf150l', 'honda-crf250l', 'kawasaki-ninja-250', 'kawasaki-zx-25rr', 'suzuki-v-strom-250'];

const checkKeys = ['features', 'diagnostics', 'detailed_issues', 'pricing', 'faq'];

models.forEach(m => {
  const modelData = ru.bikes.models[m];
  if (!modelData) { console.log('Missing model:', m); return; }
  
  checkKeys.forEach(k => {
    if (Array.isArray(modelData[k])) {
      console.log('ERROR: ' + m + '.' + k + ' is an array!');
    }
  });

  if (modelData.target_fit) {
    if (Array.isArray(modelData.target_fit.suitable)) console.log('ERROR: ' + m + '.target_fit.suitable is an array!');
    if (Array.isArray(modelData.target_fit.not_suitable)) console.log('ERROR: ' + m + '.target_fit.not_suitable is an array!');
  }
});
console.log('Check finished.');
