import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { bikeCategories, bikesData } from '../data/bikes';

const BikesList = () => {
  const { t } = useTranslation();

  return (
    <div className="bikes-list-page">
      <SEO pageKey="bikes-list" />
      
      <header className="page-header section container">
        <h1>{t('bikes.list.title')}</h1>
        <p className="lead">{t('bikes.list.subtitle')}</p>
      </header>

      {bikeCategories.map((category) => (
        <section key={category.id} className="section container">
          <h2 className="category-title">{t(`bikes.list.categories.${category.id}`)}</h2>
          <div className="bikes-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginTop: '1.5rem'
          }}>
            {category.models.map((modelId, index) => {
              const bike = bikesData[modelId];
              if (!bike) return null;
              
              return (
                <Link 
                  to={`/bikes/${bike.id}`} 
                  key={bike.id} 
                  className="bike-card" 
                  style={{
                    background: 'var(--card-bg)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    border: '1px solid rgba(255,255,255,0.05)',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="bike-image-container" style={{ 
                    width: '100%',
                    overflow: 'hidden',
                    borderRadius: '12px 12px 0 0',
                    backgroundColor: 'rgba(255,255,255,0.02)'
                  }}>
                    <img 
                      src={bike.image} 
                      alt={bike.name} 
                      style={{ 
                        width: '100%', 
                        height: 'auto',
                        display: 'block'
                      }} 
                    />
                  </div>
                  <div className="bike-info" style={{ padding: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{bike.name}</h3>
                      <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>{bike.engine_cc}cc</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.5rem' }}>
                      {t(`bikes.models.${bike.id}.description`)}
                    </p>
                    <span className="text-primary" style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>
                      {t('bikes.list.viewDetails')} →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      ))}

      <style dangerouslySetInnerHTML={{ __html: `
        .bike-card {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .bike-card:hover {
          transform: translateY(-8px) scale(1.02) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          border-color: var(--primary-color);
        }
        .category-title {
          margin-bottom: 2rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid var(--primary-color);
          display: inline-block;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
      `}} />
    </div>
  );
};

export default BikesList;
