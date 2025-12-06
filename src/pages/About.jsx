import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container container section">
      <div className="about-content">
        <h1>{t('about.title')}</h1>

        <p className="lead">
          {t('about.lead')}
        </p>

        <div className="about-grid">
          <div className="about-text">
            <h2>{t('about.mission.title')}</h2>
            <p>
              {t('about.mission.p1')}
            </p>
            <p>
              {t('about.mission.p2')}
            </p>
          </div>

          <div className="about-image">
            <div className="image-placeholder">{t('about.imagePlaceholder')}</div>
          </div>
        </div>

        <div className="features-list">
          <div className="feature-item">
            <h3>{t('about.features.equipment.title')}</h3>
            <p>{t('about.features.equipment.description')}</p>
          </div>

          <div className="feature-item">
            <h3>{t('about.features.community.title')}</h3>
            <p>{t('about.features.community.description')}</p>
          </div>

          <div className="feature-item">
            <h3>{t('about.features.support.title')}</h3>
            <p>{t('about.features.support.description')}</p>
          </div>
        </div>
      </div>

      <style>{`
        .lead {
          font-size: 1.2rem;
          color: var(--color-text-secondary);
          max-width: 800px;
          margin-bottom: 3rem;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
          align-items: center;
        }

        .about-text h2 {
          margin-bottom: 1rem;
          color: var(--color-accent-orange);
        }

        .about-text p {
          margin-bottom: 1rem;
          color: var(--color-text-primary);
        }

        .image-placeholder {
          background-color: var(--color-bg-card);
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px dashed var(--color-border);
          color: var(--color-text-secondary);
        }

        .features-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .feature-item {
          background-color: var(--color-bg-card);
          padding: 2rem;
          border-radius: 8px;
          border-top: 3px solid var(--color-accent-orange);
        }

        .feature-item h3 {
          margin-bottom: 0.5rem;
        }

        .feature-item p {
          color: var(--color-text-secondary);
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
