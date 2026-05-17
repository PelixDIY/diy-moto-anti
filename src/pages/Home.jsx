import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SEO from '../components/SEO';

const Home = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState(null);
  const [previewProducts, setPreviewProducts] = useState([]);
  const [loadingShop, setLoadingShop] = useState(true);

  React.useEffect(() => {
    const fetchShopPreview = async () => {
      try {
        const res = await fetch('https://europe-west1-diy-moto-app.cloudfunctions.net/api/inventory/online');
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        const available = data.filter(p => p.stockQuantity > 0 && p.imageUrl);
        const shuffled = available.sort(() => 0.5 - Math.random());
        setPreviewProducts(shuffled.slice(0, 2));
      } catch (err) {
        console.error("Failed to load shop preview", err);
      } finally {
        setLoadingShop(false);
      }
    };
    fetchShopPreview();
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    { key: 'oil', icon: '🛢️', link: '/oil-change-bali' },
    { key: 'brakes', icon: '🛑', link: '/brake-service-bali' },
    { key: 'engine', icon: '🔧', link: '/engine-repair-bali' },
    { key: 'suspension', icon: '🛠️', link: '/motorcycle-repair-bali' },
    { key: 'electrical', icon: '⚡', link: '/motorcycle-repair-bali' },
    { key: 'maintenance', icon: '🏍️', link: '/motorcycle-service-bali' },
  ];

  return (
    <div className="home-page">
      <SEO pageKey="home" />
      <Hero />

      {/* BLOCK 2 — TRUST BAR */}
      <section className="section bg-card" style={{ padding: '2rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container trust-bar">
          <div className="trust-item"><span>👨‍🔧</span> {t('home.trustBar.mechanics')}</div>
          <div className="trust-item"><span>⏱️</span> {t('home.trustBar.fast')}</div>
          <div className="trust-item"><span>💰</span> {t('home.trustBar.pricing')}</div>
          <div className="trust-item"><span>🧰</span> {t('home.trustBar.tools')}</div>
          <div className="trust-item"><span>📍</span> {t('home.trustBar.location')}</div>
        </div>
      </section>

      {/* BLOCK 3 — SERVICES (PRIMARY FOCUS) */}
      <section className="section container" aria-labelledby="services-title">
        <div className="section-header">
          <h2 id="services-title">{t('home.services.title')}</h2>
          <p>{t('home.services.description')}</p>
        </div>
        <div className="services-grid">
          {services.map((svc, idx) => (
            <Link to={svc.link} key={idx} className="service-card-new">
              <div className="service-icon">{svc.icon}</div>
              <h3>{t(`home.services.items.${svc.key}.title`)}</h3>
              <p>{t(`home.services.items.${svc.key}.desc`)}</p>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/services" className="btn btn-outline">{t('home.services.cta')}</Link>
        </div>
      </section>

      {/* BLOCK 4 — SHOP PREVIEW (NEW) */}
      <section className="section bg-card shop-preview-section">
        <div className="container shop-preview-content">
          <div className="shop-preview-text">
            <h2>{t('home.shopPreview.title')}</h2>
            <p className="lead">{t('home.shopPreview.subtitle')}</p>
            <ul className="shop-features">
              {t('home.shopPreview.features', { returnObjects: true }).map((feat, i) => (
                <li key={i}>🔧 {feat}</li>
              ))}
            </ul>
            <Link to="/shop" className="btn btn-primary" style={{ marginTop: '2rem' }}>
              {t('home.shopPreview.cta')}
            </Link>
          </div>
          <div className="shop-preview-visual">
            <div className="shop-preview-grid">
              {loadingShop ? (
                <div style={{ color: '#fff', opacity: 0.5 }}>Loading shop items...</div>
              ) : previewProducts.length > 0 ? (
                previewProducts.map(p => (
                  <Link to={`/shop/${p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} key={p.id} className="preview-product-card">
                    <div className="preview-product-img">
                      <img src={p.imageUrl} alt={p.name} />
                    </div>
                    <div className="preview-product-info">
                      <h4>{p.name}</h4>
                      <p className="price">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(p.price)}</p>
                    </div>
                  </Link>
                ))
              ) : (
                <div style={{ color: '#fff', opacity: 0.5 }}>Visit our shop to see parts!</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 5 — TOURISTS */}
      <section className="section container">
        <div className="tourists-split">
          <div className="tourists-text">
            <h2>{t('home.tourists.title')}</h2>
            <ul className="tourist-features">
              {t('home.tourists.features', { returnObjects: true }).map((feat, i) => (
                <li key={i}>✔️ {feat}</li>
              ))}
            </ul>
            <a href="https://wa.me/6287700077111" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>{t('home.tourists.cta')}</a>
          </div>
          <div className="tourists-image"></div>
        </div>
      </section>

      {/* BLOCK 6 — HOW IT WORKS */}
      <section className="section bg-card">
        <div className="container">
          <div className="section-header">
            <h2>{t('home.howItWorks.title')}</h2>
          </div>
          <div className="steps-row">
            {[0,1,2,3,4].map(num => (
              <div key={num} className="step-item">
                <div className="step-number">{num + 1}</div>
                <p>{t(`home.howItWorks.steps.${num}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 7 — FAQ */}
      <section className="section container">
        <div className="section-header">
          <h2>{t('home.faq.title')}</h2>
        </div>
        <div className="faq-container">
          {[0,1,2,3,4,5].map(idx => (
            <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`} onClick={() => toggleFaq(idx)}>
              <div className="faq-question">
                {t(`home.faq.questions.${idx}.q`)}
                <span className="faq-icon">{openFaq === idx ? '−' : '+'}</span>
              </div>
              {openFaq === idx && (
                <div className="faq-answer">
                  {t(`home.faq.questions.${idx}.a`)}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* BLOCK 8 — DIY GARAGE (SECONDARY) */}
      <section className="section bg-card">
        <div className="container">
           <div className="diy-highlight">
            <div className="diy-content">
              <h2>{t('home.diyGarage.title')}</h2>
              <p style={{ whiteSpace: 'pre-line' }}>{t('home.diyGarage.text')}</p>
              <Link to="/booking?type=diy" className="btn btn-outline" style={{ marginTop: '1.5rem', display: 'inline-block' }}>{t('home.diyGarage.cta')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 9 — FINAL CTA */}
      <section className="section cta-banner container">
        <div className="container">
          <h2>{t('home.finalCta.title')}</h2>
          <div className="cta-actions">
            <Link to="/booking?type=service" className="btn btn-primary">{t('home.finalCta.buttons.primary')}</Link>
            <a href="https://wa.me/6287700077111" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">{t('home.finalCta.buttons.secondary')}</a>
          </div>
        </div>
      </section>

      <style>{`
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: #fff;
        }
        .section-header p {
          color: var(--color-text-secondary);
          font-size: 1.1rem;
        }
        .bg-card {
          background-color: var(--color-bg-card);
          padding-top: 4rem;
          padding-bottom: 4rem;
        }

        /* Trust Bar */
        .trust-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
        }
        .trust-item {
          display: flex;
          align-items: center;
          font-size: 1.1rem;
          color: var(--color-text-secondary);
        }
        .trust-item span {
          margin-right: 0.5rem;
          font-size: 1.2rem;
        }

        /* Shop Preview */
        .shop-preview-content {
          display: flex;
          align-items: center;
          gap: 4rem;
        }
        .shop-preview-text {
          flex: 1;
        }
        .shop-preview-text h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #fff;
        }
        .shop-preview-text .lead {
          font-size: 1.2rem;
          color: var(--color-text-secondary);
          margin-bottom: 2rem;
        }
        .shop-features {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .shop-features li {
          color: var(--color-text-primary);
          font-weight: 500;
        }
        .shop-preview-visual {
          flex: 1;
        }
        .shop-preview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .preview-product-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          overflow: hidden;
          text-decoration: none;
          color: white;
          transition: transform 0.3s ease, border-color 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .preview-product-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-accent-orange);
        }
        .preview-product-img {
          height: 180px;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 1rem;
        }
        .preview-product-img img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        .preview-product-card:hover .preview-product-img img {
          transform: scale(1.05);
        }
        .preview-product-info {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex-grow: 1;
        }
        .preview-product-info h4 {
          font-size: 1.1rem;
          margin: 0;
          font-weight: 600;
          line-height: 1.3;
        }
        .preview-product-info .price {
          font-size: 1.2rem;
          color: var(--color-accent-orange);
          font-weight: 700;
          margin: auto 0 0;
        }

        /* Tourists */
        .tourists-split {
          display: flex;
          align-items: center;
          gap: 3rem;
        }
        .tourists-text {
          flex: 1;
        }
        .tourists-text h2 {
          font-size: 2.2rem;
          margin-bottom: 1.5rem;
          color: #fff;
        }
        .tourist-features {
          list-style: none;
          padding: 0;
          color: var(--color-text-secondary);
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }
        .tourist-features li {
          margin-bottom: 0.5rem;
        }
        .tourists-image {
          flex: 1;
          height: 350px;
          background: url('https://images.unsplash.com/photo-1541893892544-7756f3453303?auto=format&fit=crop&q=80') center/cover;
          border-radius: 8px;
        }

        /* Steps */
        .steps-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 1rem;
          text-align: center;
        }
        .step-item {
          flex: 1;
          min-width: 150px;
        }
        .step-number {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--color-accent-orange);
          color: #000;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }
        .step-item p {
          color: var(--color-text-secondary);
          font-size: 1.1rem;
        }

        /* Pricing Preview */
        .pricing-preview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }
        .price-card-sm {
          background: rgba(255,255,255,0.05);
          padding: 1.5rem;
          border-radius: 8px;
          text-align: center;
          font-size: 1.1rem;
          color: #fff;
          font-weight: 500;
          border: 1px solid rgba(255,255,255,0.05);
        }

        /* DIY Highlight */
        .diy-highlight {
          background: url('https://images.unsplash.com/photo-1616421275384-a4871cf679b2?auto=format&fit=crop&q=80') center/cover;
          border-radius: 8px;
          padding: 5rem 2rem;
          position: relative;
        }
        .diy-highlight::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.7);
          border-radius: 8px;
        }
        .diy-content {
          position: relative;
          z-index: 1;
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }
        .diy-content h2 {
          font-size: 2.2rem;
          margin-bottom: 1.5rem;
          color: #fff;
        }
        .diy-content p {
          font-size: 1.1rem;
          color: #ccc;
          line-height: 1.6;
        }

        /* Tools Grid */
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          height: 300px;
        }
        .tool-img {
          background-size: cover;
          background-position: center;
          border-radius: 8px;
        }
        .t1 { background-image: url('https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80'); }
        .t2 { background-image: url('https://images.unsplash.com/photo-1590212351717-3bf1cff8e100?auto=format&fit=crop&q=80'); }
        .t3 { background-image: url('https://images.unsplash.com/photo-1504148455328-c376906d081c?auto=format&fit=crop&q=80'); }

        /* FAQ */
        .faq-container {
          max-width: 800px;
          margin: 0 auto;
        }
        .faq-item {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 8px;
          margin-bottom: 1rem;
          overflow: hidden;
          cursor: pointer;
        }
        .faq-question {
          padding: 1.5rem;
          font-size: 1.1rem;
          font-weight: 500;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #fff;
        }
        .faq-icon {
          font-size: 1.5rem;
          color: var(--color-accent-orange);
        }
        .faq-answer {
          padding: 0 1.5rem 1.5rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        /* Final CTA */
        .cta-banner {
          background: var(--color-accent-orange);
          color: #000;
          text-align: center;
          padding: 5rem 2rem;
          border-radius: 8px;
          margin-bottom: 4rem;
        }
        .cta-banner h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #000;
        }
        .cta-actions {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }
        .cta-actions .btn-primary {
          background-color: #000;
          color: var(--color-accent-orange);
        }
        .cta-actions .btn-secondary {
          background-color: transparent;
          color: #000;
          border: 2px solid #000;
        }

        @media (max-width: 768px) {
          .shop-preview-content {
            flex-direction: column;
            gap: 2rem;
          }
          .shop-img-grid {
            height: 250px;
          }
          .tourists-split {
            flex-direction: column;
          }
          .tools-grid {
            grid-template-columns: 1fr;
            height: auto;
          }
          .tool-img {
            height: 200px;
          }
          .cta-actions {
            flex-direction: column;
          }
          .steps-row {
            flex-direction: column;
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
