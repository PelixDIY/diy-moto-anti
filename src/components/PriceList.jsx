import React from 'react';
import { useTranslation } from 'react-i18next';

const PriceList = () => {
  const { t } = useTranslation();

  const priceList = t('priceList', { returnObjects: true }) || {};
  
  if (!priceList.categories) return null;

  return (
    <div className="price-list-section section">
      <div className="section-header">
        <h2>{priceList.title}</h2>
        <p>{priceList.subtitle}</p>
      </div>

      <div className="categories-container">
        {Object.entries(priceList.categories).map(([key, category]) => (
          <div key={key} className="price-category">
            <h3 className="category-title">
              <span className="icon">{category.icon}</span> {category.title}
            </h3>

            <div className="sections-grid">
              {category.sections.map((sec, i) => (
                <div key={i} className="price-section">
                  <h4><span className="icon">{sec.icon}</span> {sec.title}</h4>
                  <ul className="price-items">
                    {sec.items.map((item, j) => (
                      <li key={j}>
                        <span className="item-name">{item.name}</span>
                        <span className="dots"></span>
                        <span className="item-price">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="packages-section">
              <h4 className="packages-title">
                <span className="icon">{category.packagesTitleIcon}</span> {category.packagesTitle}
              </h4>
              <div className="packages-grid">
                {category.packages.map((pkg, i) => (
                  <div key={i} className="package-card">
                    <div className="pkg-header">
                      <span className="icon">{pkg.icon}</span>
                      <span className="pkg-title">{pkg.title}</span>
                    </div>
                    <div className="pkg-price">{pkg.price}</div>
                    {pkg.features && pkg.features.length > 0 && (
                      <ul className="pkg-features">
                        {pkg.features.map((feature, j) => (
                          <li key={j}>✔ {feature}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="price-footer">
        <p className="guarantee">📍 {priceList.footer.guarantee}</p>
        <div style={{ marginTop: '1.5rem' }}>
          <a
            href="https://api.whatsapp.com/send/?phone=6287700077111"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            📩 {priceList.footer.cta}
          </a>
        </div>
      </div>

      <style>{`
        .price-list-section {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 1px solid var(--color-border);
        }
        .price-list-section .section-header {
            margin-bottom: 4rem;
        }
        .categories-container {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }
        .category-title {
          color: var(--color-accent-orange);
          border-bottom: 2px solid var(--color-accent-orange);
          padding-bottom: 0.5rem;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;
        }
        .sections-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        .price-section {
            background: rgba(255, 255, 255, 0.02);
            padding: 1.5rem;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .price-section h4 {
          margin-bottom: 1rem;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.1rem;
        }
        .price-items {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .price-items li {
          display: flex;
          align-items: end;
          margin-bottom: 0.75rem;
          color: var(--color-text-secondary);
        }
        .dots {
          flex: 1;
          border-bottom: 1px dotted rgba(255,255,255,0.2);
          margin: 0 10px;
          position: relative;
          top: -5px;
        }
        .item-price {
          color: var(--color-text-primary);
          white-space: nowrap;
          font-weight: 500;
        }
        
        .packages-section {
          background-color: var(--color-bg-card);
          padding: 2rem;
          border-radius: 8px;
        }
        .packages-title {
          margin-bottom: 1.5rem;
          text-align: center;
          font-size: 1.25rem;
        }
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }
        .package-card {
          background-color: rgba(0, 0, 0, 0.2);
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid var(--color-border);
        }
        .pkg-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          font-weight: bold;
          font-size: 1.1rem;
        }
        .pkg-price {
          color: var(--color-accent-orange);
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }
        .pkg-features {
          list-style: none;
          padding: 0;
          margin: 0;
          color: var(--color-text-secondary);
          font-size: 0.9rem;
        }
        .pkg-features li {
          margin-bottom: 0.25rem;
        }
        
        .price-footer {
          margin-top: 3rem;
          text-align: center;
          background-color: var(--color-bg-card);
          padding: 2rem;
          border-radius: 8px;
        }
        .guarantee {
          font-weight: bold;
          color: var(--color-text-primary);
        }
      `}</style>
    </div>
  );
};

export default PriceList;
