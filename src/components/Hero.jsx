import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">
          DIY <span className="text-orange">MotoGarage</span>
        </h1>
        <p className="hero-subtitle">
          {t('home.hero.title')}
        </p>
        <p className="hero-description">
          {t('home.hero.subtitle')}
        </p>
        <div className="hero-actions">
          <a href="/booking" className="btn btn-primary">{t('home.hero.cta')}</a>
          <a href="/services" className="btn btn-outline">{t('navbar.services')}</a>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          height: 80vh;
          min-height: 500px;
          display: flex;
          align-items: center;
          background-image: url('https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'); /* Placeholder motorcycle garage image */
          background-size: cover;
          background-position: center;
          color: #fff;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, rgba(18, 18, 18, 0.9), rgba(18, 18, 18, 0.7));
        }
        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
        }
        .hero-title {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .hero-subtitle {
          font-size: 1.5rem;
          font-weight: 300;
          color: var(--color-text-primary);
          margin-bottom: 1.5rem;
        }
        .hero-description {
          font-size: 1.1rem;
          color: var(--color-text-secondary);
          margin-bottom: 2.5rem;
          max-width: 600px;
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
        }
        .text-orange {
          color: var(--color-accent-orange);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-subtitle {
            font-size: 1.2rem;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
