import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>DIY MotoGarage</h3>
          <p>{t('footer.tagline')}</p>
        </div>
        <div className="footer-section">
          <h4>{t('footer.contact')}</h4>
          <p>Kerobokan, Bali</p>
          <p>Email: hello@diymotogarage.com</p>
        </div>
        <div className="footer-section">
          <h4>{t('footer.hours')}</h4>
          <p>{t('footer.hoursValue')}</p>
        </div>
        <div className="footer-section">
          <h4>Socials</h4>
          <p>
            <a href="https://www.instagram.com/diymotogarage/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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
              Instagram
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
      </div>

      <style>{`
        .footer {
          background-color: var(--color-bg-card);
          border-top: 1px solid var(--color-border);
          padding: 3rem 0 1rem;
          margin-top: auto;
        }
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .footer-section h3, .footer-section h4 {
          color: #fff;
          margin-bottom: 1rem;
        }
        .footer-section p {
          color: var(--color-text-secondary);
          margin-bottom: 0.5rem;
        }
        .footer-bottom {
          text-align: center;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border);
          color: var(--color-text-secondary);
          font-size: 0.9rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
