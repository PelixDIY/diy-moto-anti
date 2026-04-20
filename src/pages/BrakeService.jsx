import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const BrakeService = () => {
  return (
    <div className="seo-page">
      <Helmet>
        <title>Motorcycle Brake Service Bali | Fast & Reliable Pad Replacement</title>
        <meta name="description" content="Professional motorcycle brake service in Bali. Brake pad replacement, fluid bleeding, and caliper repair for scooters and big bikes. Or rent our garage and do it yourself." />
      </Helmet>

      <section className="seo-hero">
        <div className="container">
          <h1 className="seo-h1">Motorcycle Brake Service & Repair in Bali</h1>
          <div className="seo-intro">
            <p>
              Don't compromise on safety! At DIY Moto Garage, we provide expert <strong>motorcycle brake service in Bali</strong>. The steep hills of Uluwatu and the stop-and-go traffic of Canggu put enormous strain on your braking system. Our professional mechanics stock high-quality brake pads and premium DOT 4/DOT 5.1 fluids for all popular scooters (like the <strong>Yamaha NMAX</strong> and <strong>Honda PCX</strong>) as well as heavy sport bikes and cruisers.
            </p>
            <p className="highlight-box">
              <strong>Prefer to work on your bike yourself?</strong> Brake jobs are a great entry into motorcycle maintenance. You can rent our DIY garage workspace, purchase new pads from our counter, and use our specialized brake bleeding tools to do the job right.
            </p>
            <div className="cta-group" style={{ marginTop: '2rem' }}>
              <Link to="/booking?type=service" className="btn btn-primary">Book Brake Service</Link>
              <a href="https://wa.me/6287700077111" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ marginLeft: '1rem', backgroundColor: '#25D366', color: '#fff', border: 'none' }}>WhatsApp Now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container">
          <h2>Our Brake Services</h2>
          <div className="seo-grid">
            <div className="seo-card">
              <h3>Brake Pad Replacement</h3>
              <p>Quick and affordable replacement of front and rear brake pads using OEM or high-performance aftermarket options.</p>
            </div>
            <div className="seo-card">
              <h3>Brake Fluid Bleeding</h3>
              <p>Old, boiled fluid feels "spongy." We flush your old brake fluid and replace it with fresh, high-boiling-point fluid for immediate stopping power.</p>
            </div>
            <div className="seo-card">
              <h3>Caliper Servicing</h3>
              <p>We disassemble, clean, and rebuild sticking brake calipers that are causing drag or uneven pad wear.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2>Signs You Need Brake Service in Bali</h2>
        <div className="problems-list">
          <div className="problem-item">
            <h4>Squealing or Grinding Noises</h4>
            <p>If you hear a high-pitched squeal or metal-on-metal grinding when you brake, your pads are likely completely worn out and damaging your brake rotor.</p>
          </div>
          <div className="problem-item">
            <h4>Spongy Brake Lever</h4>
            <p>If the lever touches the handlebar before the bike stops, you either have air in the lines or your fluid has absorbed too much Bali humidity. You need an immediate fluid flush.</p>
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

export default BrakeService;
