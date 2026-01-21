import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const { t } = useTranslation();

  const featuredServices = [
    {
      title: t('servicesPage.paddockBay.title'),
      price: t('servicesPage.paddockBay.price'),
      description: t('servicesPage.paddockBay.description'),
      features: [
        t('servicesPage.paddockBay.features.bay'),
        t('servicesPage.paddockBay.features.stand'),
        t('servicesPage.paddockBay.features.disposal'),
        t('servicesPage.paddockBay.features.towels')
      ],
    },
    {
      title: t('servicesPage.liftBay.title'),
      price: t('servicesPage.liftBay.price'),
      description: t('servicesPage.liftBay.description'),
      features: [
        t('servicesPage.liftBay.features.lift'),
        t('servicesPage.liftBay.features.tools'),
        t('servicesPage.liftBay.features.compressor'),
        t('servicesPage.liftBay.features.bench')
      ],
    },
    {
      title: t('servicesPage.proBay.title'),
      price: t('servicesPage.proBay.price'),
      description: t('servicesPage.proBay.description'),
      features: [
        t('servicesPage.proBay.features.lift'),
        t('servicesPage.proBay.features.masterTools'),
        t('servicesPage.proBay.features.specialtyTools'),
        t('servicesPage.proBay.features.scanner'),
        t('servicesPage.proBay.features.electricTools')
      ],
    },
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
        <div className="container cta-section">
          <h2>{t('home.cta.title')}</h2>
          <p>{t('home.cta.subtitle')}</p>
          <a href="/booking" className="btn btn-primary">{t('home.cta.button')}</a>
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
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .bg-card {
          background-color: var(--color-bg-card);
          margin-top: 2rem;
        }
        .cta-section {
          text-align: center;
          padding: 4rem 0;
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
