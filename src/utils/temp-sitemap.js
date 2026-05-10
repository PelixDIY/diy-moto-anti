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

async function generate() {
  try {
    const response = await fetch('https://europe-west1-diy-moto-app.cloudfunctions.net/api/inventory/online');
    const products = await response.json();
    
    products.forEach(p => {
      console.log(`  <url>`);
      console.log(`    <loc>https://diymotogarage.com/shop/${slugify(p.name)}</loc>`);
      console.log(`    <changefreq>daily</changefreq>`);
      console.log(`    <priority>0.7</priority>`);
      console.log(`  </url>`);
    });
  } catch (e) {
    console.error(e);
  }
}

generate();
