import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const MotorcycleRepair = () => {
  return (
    <div className="seo-page">
      <SEO pageKey="motorcycle-repair" />

      {/* BLOCK 1 & 2 — HERO & INTRO TEXT */}
      <section className="seo-hero">
        <div className="container">
          <h1 className="seo-h1">Motorcycle Repair & Mechanic Service in Bali</h1>
          <div className="seo-intro">
            <p>
              Looking for reliable <strong>motorcycle repair in Bali</strong>? At DIY Moto Garage, we provide professional mechanic services for all types of bikes, from popular scooters like the <strong>Honda PCX</strong>, <strong>Yamaha NMAX</strong>, and <strong>Honda ADV</strong>, all the way up to custom sport bikes and cruisers. Whether you need a quick oil change, complex engine rebuilding, or brake diagnostics, our experienced English-speaking staff is here to get you back on the road safely and quickly.
            </p>
            <p>
              We understand that the Bali environment places heavy stress on motorcycles. Stop by our Kerobokan workshop for fast, transparent service while you wait. 
            </p>
            <p className="highlight-box">
              <strong>Prefer to work on your bike yourself?</strong> You can also rent our fully-equipped DIY garage space with professional hydraulic lifts and specialized tools! We give you the choice: let our mechanics fix it, or do it yourself.
            </p>
            <div className="cta-group" style={{ marginTop: '2rem' }}>
              <Link to="/booking?type=service" className="btn btn-primary">Book Repair Service</Link>
              <a href="https://wa.me/6287700077111" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ marginLeft: '1rem', backgroundColor: '#25D366', color: '#fff', border: 'none' }}>WhatsApp Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 3 — SERVICES BREAKDOWN */}
      <section className="section bg-card">
        <div className="container">
          <h2>Our Core Repair Services</h2>
          <div className="seo-grid">
            <div className="seo-card">
              <h3>🔧 Engine Repair</h3>
              <p>Complete engine diagnostics, CVT service for scooters, valve adjustments, and major rebuilds using genuine parts.</p>
            </div>
            <div className="seo-card">
              <h3>🛑 Brake Service</h3>
              <p>Brake pad replacement, fluid bleeding, and caliper servicing for maximum stopping power on Bali's heavy traffic roads.</p>
            </div>
            <div className="seo-card">
              <h3>🛢️ Oil & Filters</h3>
              <p>Premium Motul oil change packages specifically designed to protect your engine in tropical heat conditions.</p>
            </div>
            <div className="seo-card">
              <h3>🛠️ Suspension Service</h3>
              <p>Fork seal replacement and shock tuning to handle Bali's uneven roads and potholes safely.</p>
            </div>
            <div className="seo-card">
              <h3>⚡ Electrical Diagnostics</h3>
              <p>Battery replacement, wiring repair, and advanced scanner diagnostics for modern fuel-injected bikes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 4 — COMMON PROBLEMS IN BALI */}
      <section className="section container">
        <h2>Common Motorcycle Problems in Bali</h2>
        <div className="problems-list">
          <div className="problem-item">
            <h4>Overheating Engines</h4>
            <p>Stop-and-go traffic under the tropical sun can cause major overheating. We provide comprehensive radiator flushes, coolant replacement, and water pump repairs.</p>
          </div>
          <div className="problem-item">
            <h4>Brake Wear</h4>
            <p>Navigating the steep hills of Uluwatu or Ubud requires perfect brakes. We inspect your rotors, fluid lines, and pads to ensure high performance.</p>
          </div>
          <div className="problem-item">
            <h4>Chain & Rust Issues</h4>
            <p>High humidity and salty sea air destroy chains rapidly. Drop in for a quick chain lubrication, adjustment, or full sprocket replacement.</p>
          </div>
        </div>
      </section>

      {/* BLOCK 5 — WHY CHOOSE US */}
      <section className="section bg-card">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Why Choose DIY Moto Garage?</h2>
          <ul className="features-list">
            <li>✔️ Dedicated Professional Mechanics</li>
            <li>✔️ Transparent, Upfront Pricing</li>
            <li>✔️ Fast Service For Tourists</li>
            <li>✔️ Modern Scanner Diagnostics</li>
            <li>✔️ Unique DIY Garage Option</li>
          </ul>
        </div>
      </section>

      {/* BLOCK 6 — FAQ */}
      <section className="section container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-seo">
          <div className="faq-seo-item">
            <strong>Do you repair motorcycles in Bali?</strong>
            <p>Yes! We are a full-service repair shop operating in Kerobokan. Our professional mechanics handle everything from basic maintenance to complex engine repairs.</p>
          </div>
          <div className="faq-seo-item">
            <strong>Can you service Honda PCX or Yamaha NMAX?</strong>
            <p>Absolutely. We specialize in maxi-scooters like the Honda PCX, ADV, and Yamaha NMAX. We stock standard belts, rollers, and filters for fast turnarounds.</p>
          </div>
          <div className="faq-seo-item">
            <strong>Can tourists use your garage?</strong>
            <p>Yes, we offer fast, reliable motorcycle repair for tourists in Bali. No appointment is strictly needed for quick fixes, and our staff speaks English.</p>
          </div>
          <div className="faq-seo-item">
            <strong>Can I repair my bike myself?</strong>
            <p>Yes! Alongside our mechanic service, we optionally rent out our workspace by the hour, complete with professional lifts and tools. It's the only true DIY garage in Bali.</p>
          </div>
        </div>
      </section>

      {/* BLOCK 7 — CTA */}
      <section className="section cta-banner">
        <div className="container">
          <h2>Ready to Fix Your Ride?</h2>
          <p>Don't let a broken bike ruin your Bali trip.</p>
          <div className="cta-actions" style={{ justifyContent: 'center' }}>
            <Link to="/booking?type=service" className="btn btn-primary" style={{ backgroundColor: '#000', color: 'var(--color-accent-orange)' }}>Book Service Now</Link>
          </div>
        </div>
      </section>

      <style>{`
        .seo-page {
          color: var(--color-text-primary);
        }
        .seo-hero {
          padding: 6rem 2rem 4rem;
          background: linear-gradient(to bottom, rgba(18,18,18,1) 0%, rgba(30,30,30,1) 100%);
          border-bottom: 2px solid var(--color-accent-orange);
        }
        .seo-h1 {
          font-size: 3rem;
          margin-bottom: 2rem;
          color: #fff;
        }
        .seo-intro p {
          font-size: 1.2rem;
          line-height: 1.8;
          color: var(--color-text-secondary);
          margin-bottom: 1.5rem;
          max-width: 800px;
        }
        .highlight-box {
          background: rgba(255,165,0,0.1);
          border-left: 4px solid var(--color-accent-orange);
          padding: 1.5rem;
          border-radius: 4px;
          color: #fff !important;
        }
        .seo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .seo-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 2rem;
          border-radius: 8px;
        }
        .seo-card h3 {
          font-size: 1.4rem;
          margin-bottom: 1rem;
          color: #fff;
        }
        .seo-card p {
          color: var(--color-text-secondary);
          line-height: 1.6;
        }
        .problems-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }
        .problem-item h4 {
          font-size: 1.3rem;
          color: var(--color-accent-orange);
          margin-bottom: 0.5rem;
        }
        .problem-item p {
          font-size: 1.1rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }
        .features-list {
          list-style: none;
          padding: 0;
          font-size: 1.2rem;
          line-height: 2;
          color: var(--color-text-secondary);
          display: inline-block;
          text-align: left;
        }
        .faq-seo {
          max-width: 800px;
          margin: 0 auto;
        }
        .faq-seo-item {
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .faq-seo-item strong {
          display: block;
          font-size: 1.3rem;
          color: #fff;
          margin-bottom: 0.8rem;
        }
        .faq-seo-item p {
          font-size: 1.1rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default MotorcycleRepair;
