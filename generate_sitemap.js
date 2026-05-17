import fs from 'fs';
import path from 'path';

async function generateSitemap() {
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  const baseUrl = 'https://diymotogarage.com';
  const today = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/services', priority: '0.8', changefreq: 'monthly' },
    { url: '/motorcycle-repair-bali', priority: '0.8', changefreq: 'monthly' },
    { url: '/motorcycle-service-bali', priority: '0.8', changefreq: 'monthly' },
    { url: '/oil-change-bali', priority: '0.8', changefreq: 'monthly' },
    { url: '/brake-service-bali', priority: '0.8', changefreq: 'monthly' },
    { url: '/engine-repair-bali', priority: '0.8', changefreq: 'monthly' },
    { url: '/about', priority: '0.7', changefreq: 'monthly' },
    { url: '/contact', priority: '0.6', changefreq: 'monthly' },
    { url: '/booking', priority: '0.5', changefreq: 'weekly' },
    { url: '/shop', priority: '0.9', changefreq: 'daily' },
  ];

  // 1. Get Bikes
  const bikesContent = fs.readFileSync(path.join(process.cwd(), 'src', 'data', 'bikes.js'), 'utf8');
  const bikeIds = [];
  const regex = /export const bikesData = \{([\s\S]*)\};/m;
  const match = bikesContent.match(regex);
  if (match) {
    const dataStr = match[1];
    const keyRegex = /^\s*'([^']+)'\s*:\s*\{/gm;
    let m;
    while ((m = keyRegex.exec(dataStr)) !== null) {
      bikeIds.push(m[1]);
    }
  } else {
    console.error("Could not parse bikes.js");
  }

  // 2. Get Shop Items
  let shopItems = [];
  try {
    const res = await fetch('https://europe-west1-diy-moto-app.cloudfunctions.net/api/inventory/online');
    if (res.ok) {
      const data = await res.json();
      shopItems = data;
    }
  } catch (err) {
    console.error("Failed to fetch shop inventory", err);
  }

  const slugify = (text) => {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           
      .replace(/[^\w\-]+/g, '')       
      .replace(/\-\-+/g, '-')         
      .replace(/^-+/, '')             
      .replace(/-+$/, '');            
  };

  // Generate XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Static
  staticPages.forEach(p => {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}${p.url}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${p.changefreq}</changefreq>\n`;
    xml += `    <priority>${p.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  // Bikes
  bikeIds.forEach(id => {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}/bikes/${id}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += `  </url>\n`;
  });

  // Shop
  shopItems.forEach(item => {
    const slug = slugify(item.name);
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}/shop/${slug}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;

  fs.writeFileSync(sitemapPath, xml);
  console.log(`Sitemap generated successfully at ${sitemapPath} with ${staticPages.length + bikeIds.length + shopItems.length} entries.`);
}

generateSitemap().catch(console.error);
