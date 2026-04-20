import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MotorcycleService = () => {
  return (
    <div className="seo-page">
      <Helmet>
        <title>Motorcycle Service Bali | Full Maintenance Packages</title>
        <meta name="description" content="Complete motorcycle and scooter service in Bali. Scheduled maintenance, fluid flushes, filters, and safety checks to keep your bike running perfectly." />
      </Helmet>

      <section className="seo-hero">
        <div className="container">
          <h1 className="seo-h1">Full Motorcycle Service & Maintenance in Bali</h1>
          <div className="seo-intro">
            <p>
              Preventative maintenance is the key to a long-lasting engine. At DIY Moto Garage, our mechanics provide scheduled <strong>motorcycle service in Bali</strong> for all brands. Whether it's the 10,000km checkup for your Yamaha NMAX, or a pre-tour safety inspection for your adventure bike, we run through a comprehensive checklist covering fluids, filters, bearings, and electrics to ensure ultimate reliability.
            </p>
            <p className="highlight-box">
              <strong>Prefer to work on your bike yourself?</strong> You can definitely do your own 10k service here! Rent our DIY garage to access torque wrenches, paddock stands, and our mechanic's advice. We have everything you need to service your own bike like a pro.
            </p>
            <div className="cta-group" style={{ marginTop: '2rem' }}>
              <Link to="/booking?type=service" className="btn btn-primary">Book Full Service</Link>
              <a href="https://wa.me/6287700077111" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ marginLeft: '1rem', backgroundColor: '#25D366', color: '#fff', border: 'none' }}>WhatsApp Now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container">
          <h2>What's Included in a Full Service?</h2>
          <div className="seo-grid">
            <div className="seo-card">
              <h3>Fluids & Filters</h3>
              <p>We completely drain and replace engine oil, gear oil, and brake fluid. We also inspect and replace dirty air filters and oil filters.</p>
            </div>
            <div className="seo-card">
              <h3>Drivetrain Check</h3>
              <p>For scooters, we blow out the CVT dust and check belt wear. For chain-driven bikes, we clean, lubricate, and adjust the chain tension to spec.</p>
            </div>
            <div className="seo-card">
              <h3>Safety & Bearings</h3>
              <p>We check tire pressure and tread wear, steering stem bearings, wheel bearings, and brake pad life to ensure you are safe riding through Bali.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2>Why Regular Service is Essential</h2>
        <div className="problems-list">
          <div className="problem-item">
            <h4>Prolong Engine Life</h4>
            <p>Skipping services allows microscopic metal shavings and dust to destroy your cylinder walls. A cheap service now saves a lot of money on an engine rebuild later.</p>
          </div>
          <div className="problem-item">
            <h4>Safety First</h4>
            <p>A loose steering bearing or a dangerously worn brake pad can cause severe accidents in unpredictable Bali traffic. Safety inspections keep you out of the hospital.</p>
          </div>
        </div>
      </section>

      <style>{`
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

export default MotorcycleService;
