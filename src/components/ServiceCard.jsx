import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, price, description, features, icon }) => {
  const { t } = useTranslation();

  return (
    <div className="service-card">
      <h4 className="card-title">
        {icon && <span className="icon">{icon}</span>} {title}
      </h4>
      <div className="card-price">{price}</div>
      <div className="card-body">
        <p className="card-description">{description}</p>
        <ul className="card-features">
          {features.map((feature, index) => (
            <li key={index}>✔ {feature}</li>
          ))}
        </ul>
      </div>
      <div className="card-footer">
        <Link to="/booking" className="btn btn-primary full-width">{t('navbar.bookNow')}</Link>
      </div>

      <style>{`
        .service-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .card-title {
          margin-top: 0;
          margin-bottom: 0.5rem;
          color: var(--color-text-primary, #fff);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.1rem;
        }
        .icon {
          display: inline-flex;
        }
        .card-price {
          color: var(--color-accent-orange);
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        .card-body {
          flex: 1;
          margin-bottom: 1.5rem;
        }
        .card-description {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        .card-features {
          list-style: none;
          padding: 0;
          margin: 0;
          color: var(--color-text-secondary);
          font-size: 0.9rem;
        }
        .card-features li {
          margin-bottom: 0.5rem;
        }
        .full-width {
          width: 100%;
          display: block;
          text-align: center;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;
