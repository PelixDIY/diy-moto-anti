import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const SeoPlaceholder = ({ pageKey, title }) => {
  return (
    <div className="seo-placeholder-page" style={{ paddingTop: '100px', minHeight: '80vh' }}>
      {/* We can reuse the default 'services' SEO or dynamically create one later */}
      <SEO pageKey="services" />
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{title}</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', marginBottom: '3rem' }}>
          We provide professional {title.toLowerCase()} right here in Bali.
          Detailed information is currently being updated.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/booking?type=service" className="btn btn-primary">Book Service Now</Link>
            <a href="https://wa.me/6287700077111" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ backgroundColor: '#25D366', color: '#fff', border: 'none' }}>WhatsApp Us</a>
        </div>
      </div>
    </div>
  );
};

export default SeoPlaceholder;
