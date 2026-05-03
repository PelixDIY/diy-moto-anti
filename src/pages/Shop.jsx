import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Shop = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'fluid', 'part', 'accessory'];

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, searchQuery, activeCategory]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://europe-west1-diy-moto-app.cloudfunctions.net/api/inventory/online');
      if (!response.ok) throw new Error('Failed to fetch data');
      
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      console.error('Integration error:', err);
      setError(t('shop.error'));
      setLoading(false);
    }
  };

  const filterProducts = () => {
    let filtered = [...products];

    const allowedCategories = ['fluid', 'part', 'accessory'];
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    } else {
      filtered = filtered.filter(p => allowedCategories.includes(p.category));
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) || 
        (p.sku && p.sku.toLowerCase().includes(query))
      );
    }

    setFilteredProducts(filtered);
  };

  const handleBuyOnWhatsApp = (product) => {
    const phoneNumber = '6287700077111';
    const message = `Hello! I'm interested in: ${product.name} (SKU: ${product.sku || 'N/A'}). Is it available?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const getStockStatus = (quantity) => {
    if (quantity <= 0) return { label: t('shop.stock.outOfStock'), color: '#ff4d4d', class: 'out' };
    if (quantity <= 3) return { label: t('shop.stock.lowStock', { count: quantity }), color: '#ffa500', class: 'low' };
    return { label: t('shop.stock.inStock'), color: '#4caf50', class: 'in' };
  };

  return (
    <div className="shop-page">
      <SEO pageKey="shop" />
      
      <section className="shop-hero">
        <div className="container">
          <h1>{t('shop.title')}</h1>
          <p>{t('shop.subtitle')}</p>
        </div>
      </section>

      <section className="shop-controls section">
        <div className="container">
          <div className="controls-wrapper">
            <div className="search-bar">
              <span className="search-icon">🔍</span>
              <input 
                type="text" 
                placeholder={t('shop.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="category-filters">
              {categories.map(cat => (
                <button 
                  key={cat}
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat === 'all' ? t('shop.allCategories') : t(`shop.categories.${cat}`)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="product-catalog section">
        <div className="container">
          {loading ? (
            <div className="loading-state">
              <div className="loader"></div>
              <p>{t('shop.loading')}</p>
            </div>
          ) : error ? (
            <div className="error-state">
              <p>{error}</p>
              <button onClick={fetchProducts} className="btn btn-outline">{t('shop.retry')}</button>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="empty-state">
              <p>{t('shop.noProducts')}</p>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map(product => {
                const stock = getStockStatus(product.stockQuantity);
                return (
                  <div key={product.id} className="product-card">
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <div className="product-meta">
                        {product.sku && <span className="sku">{t('shop.sku')}: {product.sku}</span>}
                        <span className={`stock-status ${stock.class}`}>{stock.label}</span>
                      </div>
                      <div className="product-footer">
                        <div className="price">
                          {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(product.price)}
                        </div>
                        <button 
                          className="btn btn-primary buy-btn"
                          onClick={() => handleBuyOnWhatsApp(product)}
                          disabled={product.stockQuantity <= 0}
                        >
                          {t('shop.buyOnWhatsApp')}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <style>{`
        .shop-page {
          min-height: 80vh;
        }
        .shop-hero {
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80') center/cover;
          padding: 6rem 0;
          text-align: center;
          border-bottom: 2px solid var(--color-accent-orange);
        }
        .shop-hero h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }
        .shop-hero p {
          font-size: 1.2rem;
          color: var(--color-text-secondary);
          max-width: 700px;
          margin: 0 auto;
        }

        .controls-wrapper {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .search-bar {
          position: relative;
          max-width: 500px;
          width: 100%;
          margin: 0 auto;
        }
        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-text-secondary);
        }
        .search-bar input {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 8px;
          color: #fff;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.3s ease;
        }
        .search-bar input:focus {
          border-color: var(--color-accent-orange);
        }

        .category-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.8rem;
        }
        .filter-btn {
          padding: 0.6rem 1.2rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--color-border);
          border-radius: 20px;
          color: var(--color-text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          font-weight: 500;
        }
        .filter-btn:hover {
          background: rgba(255,255,255,0.1);
          color: #fff;
        }
        .filter-btn.active {
          background: var(--color-accent-orange);
          color: #000;
          border-color: var(--color-accent-orange);
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }

        .product-card {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .product-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-accent-orange);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }


        .product-info {
          padding: 1.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .product-info h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: #fff;
          line-height: 1.4;
          min-height: 3.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .product-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          font-size: 0.85rem;
        }
        .sku {
          color: var(--color-text-secondary);
        }
        .stock-status {
          font-weight: 600;
        }
        .stock-status.in { color: #4caf50; }
        .stock-status.low { color: #ffa500; }
        .stock-status.out { color: #ff4d4d; }

        .product-footer {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .price {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-accent-orange);
        }
        .buy-btn {
          width: 100%;
          font-size: 0.9rem;
          padding: 0.8rem;
        }
        .buy-btn:disabled {
          background: #333;
          color: #777;
          cursor: not-allowed;
          transform: none;
        }

        .loading-state, .error-state, .empty-state {
          text-align: center;
          padding: 4rem 0;
          color: var(--color-text-secondary);
        }

        .loader {
          width: 48px;
          height: 48px;
          border: 5px solid rgba(255, 107, 0, 0.1);
          border-bottom-color: var(--color-accent-orange);
          border-radius: 50%;
          display: inline-block;
          box-sizing: border-box;
          animation: rotation 1s linear infinite;
          margin-bottom: 1rem;
        }

        @keyframes rotation {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .shop-hero h1 { font-size: 2.5rem; }
          .products-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default Shop;
