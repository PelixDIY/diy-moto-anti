import React from 'react';
import { useTranslation } from 'react-i18next';

const ServiceCard = ({ title, price, description, features, icon }) => {
  const { t } = useTranslation();

  return (
    <div className="service-card">
      <div className="card-header">
        {icon && <div className="card-icon">{icon}</div>}
        <h3 className="card-title">{title}</h3>
        <div className="card-price">{price}</div>
      </div>
      <div className="card-body">
        <p className="card-description">{description}</p>
        <ul className="card-features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="card-footer">
        <a href="/booking" className="btn btn-primary full-width">{t('navbar.bookNow')}</a>
      </div>

      <style>{`
        .service-card {
          background-color: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 8px;
          padding: 2rem;
          transition: transform var(--transition-fast), border-color var(--transition-fast);
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .service-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-accent-orange);
        }
        .card-header {
          text-align: center;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 1.5rem;
        }
        .card-title {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .card-price {
          font-size: 2rem;
          font-weight: 700;
          color: var(--color-accent-orange);
        }
        .card-body {
          flex: 1;
          margin-bottom: 2rem;
        }
        .card-description {
          color: var(--color-text-secondary);
          margin-bottom: 1.5rem;
          text-align: center;
        }
        .card-features {
          list-style: none;
          padding: 0;
        }
        .card-features li {
          margin-bottom: 0.5rem;
          padding-left: 1.5rem;
          position: relative;
          color: var(--color-text-primary);
        }
        .card-features li::before {
          content: '✓';
          color: var(--color-accent-orange);
          position: absolute;
          left: 0;
        }
        .full-width {
          width: 100%;
          display: block;
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;
