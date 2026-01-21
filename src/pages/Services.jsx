import React from 'react';
import { useTranslation } from 'react-i18next';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const { t } = useTranslation();

  const services = [
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
    <div className="page-container container section">
      <div className="section-header">
        <h1>{t('servicesPage.title')}</h1>
        <p>{t('servicesPage.subtitle')}</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <div className="additional-info section">
        <h2>{t('servicesPage.membership.title')}</h2>
        <p>{t('servicesPage.membership.description')}</p>
      </div>

      <style>{`
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .section-header h1 {
          margin-bottom: 0.5rem;
        }
        .section-header p {
          color: var(--color-text-secondary);
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .additional-info {
          text-align: center;
          margin-top: 2rem;
          padding: 3rem;
          background-color: var(--color-bg-card);
          border-radius: 8px;
        }
        .additional-info h2 {
          color: var(--color-accent-orange);
          margin-bottom: 1rem;
        }
        .additional-info p {
          color: var(--color-text-primary);
        }
      `}</style>
    </div>
  );
};

export default Services;
