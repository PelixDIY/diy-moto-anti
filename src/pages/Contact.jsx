import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container container section">
      <SEO pageKey="contact" />
      <div className="section-header">
        <h1>{t('contact.title')}</h1>
        <p>{t('contact.subtitle')}</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="info-item">
            <h3>{t('contact.info.address.title')}</h3>
            <a href="https://www.google.com/maps/search/?api=1&query=DIY+MotoGarage+Bali" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span dangerouslySetInnerHTML={{ __html: t('contact.info.address.value') }}></span>
            </a>
          </div>
          <div className="info-item">
            <h3>{t('contact.info.phone.title')}</h3>
            <a href="https://wa.me/6287700077111" target="_blank" rel="noopener noreferrer" className="contact-link">
              {t('contact.info.phone.value')}
            </a>
          </div>
          <div className="info-item">
            <h3>{t('contact.info.email.title')}</h3>
            <a href="mailto:hello@diymotogarage.com" className="contact-link">
              {t('contact.info.email.value')}
            </a>
          </div>
          <div className="info-item">
            <h3>{t('contact.info.hours.title')}</h3>
            <p>{t('contact.info.hours.value')}</p>
          </div>
          <div className="info-item">
            <h3>Social Media</h3>
            <p>
              <a href="https://www.instagram.com/diymotogarage/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-orange)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433"/>
                    <stop offset="25%" stopColor="#e6683c"/>
                    <stop offset="50%" stopColor="#dc2743"/>
                    <stop offset="75%" stopColor="#cc2366"/>
                    <stop offset="100%" stopColor="#bc1888"/>
                  </linearGradient>
                </defs>
                <g fill="url(#instagram-gradient)">
                  <rect x="2" y="2" width="20" height="20" rx="6" ry="6"></rect>
                </g>
                <rect x="5" y="5" width="14" height="14" rx="4" ry="4" fill="none" stroke="#fff" strokeWidth="2"></rect>
                <circle cx="12" cy="12" r="3.5" fill="none" stroke="#fff" strokeWidth="2"></circle>
                <circle cx="16.5" cy="7.5" r="1.2" fill="#fff"></circle>
              </svg>
                @diymotogarage
              </a>
            </p>
          </div>
        </div>

        <div className="contact-form-container">
          <h3>{t('contact.form.title')}</h3>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">{t('contact.form.name')}</label>
              <input type="text" id="name" placeholder={t('contact.form.namePlaceholder')} />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('contact.form.email')}</label>
              <input type="email" id="email" placeholder={t('contact.form.emailPlaceholder')} />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('contact.form.message')}</label>
              <textarea id="message" rows="5" placeholder={t('contact.form.messagePlaceholder')}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">{t('contact.form.submit')}</button>
          </form>
        </div>
      </div>

      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6527.778605947963!2d115.1725651!3d-8.6533354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd247137df659a1%3A0xc570529f290be803!2sDIY%20MotoGarage!5e1!3m2!1sru!2sid!4v1764916018124!5m2!1sru!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="DIY Moto Garage Bali"
        />
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
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }
        .info-item {
          margin-bottom: 2rem;
        }
        .info-item h3 {
          color: var(--color-accent-orange);
          margin-bottom: 0.5rem;
        }
        .info-item p {
          color: var(--color-text-primary);
        }
        .contact-link {
          color: var(--color-text-primary);
          text-decoration: none;
          transition: color 0.2s ease;
          display: inline-block;
          line-height: 1.5;
        }
        .contact-link:hover {
          color: var(--color-accent-orange);
        }
        .contact-form-container {
          background-color: var(--color-bg-card);
          padding: 2rem;
          border-radius: 8px;
          border: 1px solid var(--color-border);
        }
        .contact-form-container h3 {
          margin-bottom: 1.5rem;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--color-text-secondary);
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          background-color: var(--color-bg-dark);
          border: 1px solid var(--color-border);
          border-radius: 4px;
          color: #fff;
          font-family: inherit;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-accent-orange);
        }
        .map-section {
          height: 400px;
          background-color: var(--color-bg-card);
          border-radius: 8px;
          overflow: hidden;
        }
        .map-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #333;
          color: #aaa;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
