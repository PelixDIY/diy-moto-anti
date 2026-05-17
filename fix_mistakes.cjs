const fs = require('fs');
const { bikesData } = require('./src/data/bikes.js');

const locales = ['en', 'ru'];
const models = ['yamaha-mt-15', 'yamaha-r25', 'yamaha-mt-25', 'honda-cb150x', 'honda-cb150r', 'honda-cbr150r', 'honda-cbr250rr', 'honda-crf150l', 'honda-crf250l', 'kawasaki-ninja-250', 'kawasaki-zx-25rr', 'suzuki-v-strom-250'];

locales.forEach(loc => {
  const filePath = './src/locales/' + loc + '/translation.json';
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  models.forEach(m => {
    const keys = bikesData[m].owner_mistakes;
    const existing = data.bikes.models[m].owner_mistakes;
    
    // Check if it's an array and map to object using keys
    if (Array.isArray(existing) && keys) {
      const newMistakes = {};
      existing.forEach((val, i) => {
        if(keys[i]) newMistakes[keys[i]] = val;
      });
      data.bikes.models[m].owner_mistakes = newMistakes;
      console.log('Updated ' + loc + ' for ' + m);
    }
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
});
console.log('Successfully updated translation files.');
