const fs = require('fs');

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

const staticPages = [
  { url: '/', freq: 'weekly', priority: '1.0' },
  { url: '/services', freq: 'monthly', priority: '0.8' },
  { url: '/motorcycle-repair-bali', freq: 'monthly', priority: '0.8' },
  { url: '/motorcycle-service-bali', freq: 'monthly', priority: '0.8' },
  { url: '/oil-change-bali', freq: 'monthly', priority: '0.8' },
  { url: '/brake-service-bali', freq: 'monthly', priority: '0.8' },
  { url: '/engine-repair-bali', freq: 'monthly', priority: '0.8' },
  { url: '/about', freq: 'monthly', priority: '0.7' },
  { url: '/contact', freq: 'monthly', priority: '0.6' },
  { url: '/booking', freq: 'weekly', priority: '0.5' },
  { url: '/shop', freq: 'daily', priority: '0.9' }
];

async function generate() {
  try {
    console.log('Fetching products...');
    const response = await fetch('https://europe-west1-diy-moto-app.cloudfunctions.net/api/inventory/online');
    const products = await response.json();
    console.log(`Found ${products.length} products.`);

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    staticPages.forEach(p => {
      xml += `  <url>\n`;
      xml += `    <loc>https://diymotogarage.com${p.url}</loc>\n`;
      xml += `    <changefreq>${p.freq}</changefreq>\n`;
      xml += `    <priority>${p.priority}</priority>\n`;
      xml += `  </url>\n`;
    });

    products.forEach(p => {
      xml += `  <url>\n`;
      xml += `    <loc>https://diymotogarage.com/shop/${slugify(p.name)}</loc>\n`;
      xml += `    <changefreq>daily</changefreq>\n`;
      xml += `    <priority>0.7</priority>\n`;
      xml += `  </url>\n`;
    });

    xml += `</urlset>`;
    
    fs.writeFileSync('./public/sitemap.xml', xml);
    console.log('Sitemap updated successfully');
  } catch (e) {
    console.error('Error generating sitemap:', e);
  }
}

generate();
