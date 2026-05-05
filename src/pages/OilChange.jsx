import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const OilChange = () => {
  return (
    <div className="seo-page">
      <SEO pageKey="oil-change" />

      <section className="seo-hero">
        <div className="container">
          <h1 className="seo-h1">Motorcycle Oil Change Service in Bali</h1>
          <div className="seo-intro">
            <p>
              Looking for a fast, reliable <strong>motorcycle oil change in Bali</strong>? Our professional mechanics at DIY Moto Garage specialize in fluid servicing for scooters (like Yamaha NMAX and Honda PCX), sport bikes, and cruisers. We proudly use premium <strong>Motul</strong> lubricants to protect your engine against extreme heat and heavy traffic conditions common in Bali.
            </p>
            <p className="highlight-box">
              <strong>Want to do it yourself?</strong> No problem! You can rent our DIY garage space, buy the oil directly from our shop, and use our tools and disposal pans to change your own oil.
            </p>
            <div className="cta-group" style={{ marginTop: '2rem' }}>
              <Link to="/booking?type=service" className="btn btn-primary">Book Oil Change</Link>
              <a href="https://wa.me/6287700077111" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ marginLeft: '1rem', backgroundColor: '#25D366', color: '#fff', border: 'none' }}>WhatsApp Now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container">
          <h2>Our Oil Change Packages</h2>
          <div className="seo-grid">
            <div className="seo-card">
              <h3>Scooter Basic (NMAX/PCX)</h3>
              <p>Standard oil replacement using high-quality manufacturer-approved oil (Yamalube/AHM) to keep your daily ride smooth. From 50K IDR.</p>
            </div>
            <div className="seo-card">
              <h3>Scooter Premium (Motul)</h3>
              <p>Upgrade to Motul Scooter LE or Expert for superior heat resistance and longevity. Includes gear oil check.</p>
            </div>
            <div className="seo-card">
              <h3>Big Bike Full Synthetic</h3>
              <p>Top-tier fully synthetic Motul 7100 or 300V for high-performance engines, including a fresh oil filter replacement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2>Why Frequent Oil Changes Matter in Bali</h2>
        <div className="problems-list">
          <div className="problem-item">
            <h4>Heat & Traffic</h4>
            <p>The constant stop-and-go traffic under the burning Bali sun breaks down engine oil much faster than in cooler climates. We recommend changing scooter oil every 1,500 - 2,000 km.</p>
          </div>
          <div className="problem-item">
            <h4>Dust & Debris</h4>
            <p>Bali dust can contaminate your engine over time. Changing the oil filter alongside your oil is critical for sport bikes and big scooters.</p>
          </div>
        </div>
      </section>

      <style>{`
        /* Reusing common SEO styles from MotorcycleRepair */
        .seo-page { color: var(--color-text-primary); }
        .seo-hero { padding: 6rem 2rem 4rem; background: linear-gradient(to bottom, rgba(18,18,18,1) 0%, rgba(30,30,30,1) 100%); border-bottom: 2px solid var(--color-accent-orange); }
        .seo-h1 { font-size: 3rem; margin-bottom: 2rem; color: #fff; }
        .seo-intro p { font-size: 1.2rem; line-height: 1.8; color: var(--color-text-secondary); margin-bottom: 1.5rem; max-width: 800px; }
        .highlight-box { background: rgba(255,165,0,0.1); border-left: 4px solid var(--color-accent-orange); padding: 1.5rem; border-radius: 4px; color: #fff !important; }
        .seo-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 3rem; }
        .seo-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 2rem; border-radius: 8px; }
        .seo-card h3 { font-size: 1.4rem; margin-bottom: 1rem; color: #fff; }
        .seo-card p { color: var(--color-text-secondary); line-height: 1.6; }
        .problems-list { display: flex; flex-direction: column; gap: 2rem; max-width: 800px; margin: 0 auto; }
        .problem-item h4 { font-size: 1.3rem; color: var(--color-accent-orange); margin-bottom: 0.5rem; }
        .problem-item p { font-size: 1.1rem; color: var(--color-text-secondary); line-height: 1.6; }
      `}</style>
    </div>
  );
};

export default OilChange;
