import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const { t } = useTranslation();

  const featuredServices = [
    {
      title: t('home.services.fullService.title'),
      description: t('home.services.fullService.description'),
      features: [
        t('home.services.fullService.features.f1'),
        t('home.services.fullService.features.f2'),
        t('home.services.fullService.features.f3'),
        t('home.services.fullService.features.f4')
      ],
      bgImage: '/full_service_repair.png',
      linkUrl: '/booking?type=service'
    },
    {
      title: t('home.services.diyWorkspace.title'),
      description: t('home.services.diyWorkspace.description'),
      features: [
        t('home.services.diyWorkspace.features.f1'),
        t('home.services.diyWorkspace.features.f2'),
        t('home.services.diyWorkspace.features.f3'),
        t('home.services.diyWorkspace.features.f4')
      ],
      bgImage: '/diy_garage_workspace.png',
      linkUrl: '/booking?type=diy'
    }
  ];

  const whyChooseUsFeatures = [
    t('home.whyChooseUs.items.community'),
    t('home.whyChooseUs.items.pricing'),
    t('home.whyChooseUs.items.tools'),
    t('home.whyChooseUs.items.expert'),
    t('home.whyChooseUs.items.lounge'),
    t('home.whyChooseUs.items.fast'),
  ];

  return (
    <div className="home-page">
      <Hero />

      <section className="section container">
        <div className="section-header">
          <h2>{t('home.services.title')}</h2>
          <p>{t('home.services.subtitle')}</p>
        </div>
        <div className="services-grid">
          {featuredServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      <section className="section bg-card">
        <div className="container">
          <div className="section-header">
            <h2>{t('home.whyChooseUs.title')}</h2>
          </div>
          <div className="features-grid">
            {whyChooseUsFeatures.map((feature, idx) => (
              <div key={idx} className="feature-item">
                <span style={{color: 'var(--color-accent-orange)', marginRight: '10px'}}>✔</span>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-section bg-card" style={{ padding: '4rem 2rem', borderRadius: '8px' }}>
          <h2>{t('home.cta.title')}</h2>
          <p>{t('home.cta.subtitle')}</p>
          <Link to="/booking" className="btn btn-primary">{t('home.cta.button')}</Link>
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
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        .feature-item {
          display: flex;
          align-items: center;
          font-size: 1.1rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 1rem 1.5rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .bg-card {
          background-color: var(--color-bg-card);
          padding-top: 4rem;
          padding-bottom: 4rem;
        }
        .cta-section {
          text-align: center;
        }
        .cta-section h2 {
          margin-bottom: 1rem;
        }
        .cta-section p {
          margin-bottom: 2rem;
          color: var(--color-text-secondary);
        }
      `}</style>
    </div>
  );
};

export default Home;
