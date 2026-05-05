import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const EngineRepair = () => {
  return (
    <div className="seo-page">
      <SEO pageKey="engine-repair" />

      <section className="seo-hero">
        <div className="container">
          <h1 className="seo-h1">Motorcycle Engine Repair & Diagnostics in Bali</h1>
          <div className="seo-intro">
            <p>
              When your bike loses power, makes strange noises, or throws an engine light, you need serious expertise. At DIY Moto Garage, we offer complete <strong>motorcycle engine repair in Bali</strong>. Our mechanics use modern scanner diagnostic tools for fuel-injected bikes (like Yamaha NMAX, Honda PCX, and big sport bikes) to accurately identify electronic and mechanical failures.
            </p>
            <p className="highlight-box">
              <strong>Prefer to work on your bike yourself?</strong> Dropping an engine is tough without the right gear. Rent our DIY garage to get access to professional hydraulic lifts, engine hoists, specialized timing tools, and an air compressor. We provide the tools, you provide the labor.
            </p>
            <div className="cta-group" style={{ marginTop: '2rem' }}>
              <Link to="/booking?type=service" className="btn btn-primary">Book Engine Diagnostics</Link>
              <a href="https://wa.me/6287700077111" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ marginLeft: '1rem', backgroundColor: '#25D366', color: '#fff', border: 'none' }}>WhatsApp Now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container">
          <h2>Our Engine Repair Services</h2>
          <div className="seo-grid">
            <div className="seo-card">
              <h3>Computer Diagnostics</h3>
              <p>We connect your bike to our OBD scanners to clear error codes, reset service lights, and perfectly diagnose fuel injection (FI) issues.</p>
            </div>
            <div className="seo-card">
              <h3>CVT Service (Scooters)</h3>
              <p>Is your NMAX or PCX shuddering on takeoff? We disassemble the CVT, clean it, and install new rollers, sliders, and v-belts.</p>
            </div>
            <div className="seo-card">
              <h3>Valve Adjustments</h3>
              <p>Hard starting and a ticking top end mean your valves need clearance adjustments. We provide precision shim-under-bucket and screw-type valve jobs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2>Signs of Engine Trouble</h2>
        <div className="problems-list">
          <div className="problem-item">
            <h4>Check Engine Light</h4>
            <p>Don't ignore the orange light on your dashboard. Running an engine with a failing sensor can lead to a costly total rebuild.</p>
          </div>
          <div className="problem-item">
            <h4>Loss of Acceleration</h4>
            <p>If your scooter suddenly struggles to get up hills, it usually indicates badly worn CVT rollers or a slipping belt.</p>
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

export default EngineRepair;
