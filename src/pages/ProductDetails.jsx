import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://europe-west1-diy-moto-app.cloudfunctions.net/api/inventory/${id}`);
        if (!response.ok) throw new Error('Product not found');
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
    window.scrollTo(0, 0);
  }, [id]);

  const handleBuyOnWhatsApp = () => {
    const phoneNumber = '6287700077111';
    const message = `Hello! I'm interested in: ${product.name} (ID: ${product.id}). Is it available?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (loading) return (
    <div className="loading-container" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="loader"></div>
    </div>
  );

  if (error || !product) return (
    <div className="error-container" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
      <h2>{t('shop.productNotFound', 'Product Not Found')}</h2>
      <Link to="/shop" className="btn btn-primary">{t('shop.backToShop', 'Back to Shop')}</Link>
    </div>
  );

  const stockStatus = product.stockQuantity > 0 
    ? { label: t('shop.stock.inStock'), color: '#4caf50' }
    : { label: t('shop.stock.outOfStock'), color: '#ff4d4d' };

  const productSchema = product ? {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": [product.imageUrl],
    "description": product.fullDescription || product.name,
    "sku": product.sku || product.id,
    "brand": {
      "@type": "Brand",
      "name": "DIY MotoGarage"
    },
    "offers": {
      "@type": "Offer",
      "url": window.location.href,
      "priceCurrency": "IDR",
      "price": product.price,
      "itemCondition": "https://schema.org/NewCondition",
      "availability": product.stockQuantity > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
    }
  } : null;

  return (
    <div className="product-details-page">
      <SEO 
        pageKey="shop"
        titleOverride={`${product.name} | DIY MotoGarage Bali`}
        descriptionOverride={product.fullDescription || product.name}
        customSchema={productSchema}
      />
      
      <div className="container" style={{ padding: 'var(--spacing-lg) var(--spacing-md)' }}>
        {/* Breadcrumbs */}
        <nav className="breadcrumbs" style={{ marginBottom: 'var(--spacing-lg)', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
          <Link to="/">{t('nav.home')}</Link> / <Link to="/shop">{t('nav.shop')}</Link> / <span style={{ color: 'var(--color-accent-orange)' }}>{product.name}</span>
        </nav>

        <div className="product-main-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)', marginBottom: 'var(--spacing-xl)' }}>
          {/* Left: Image */}
          <div className="product-image-container" style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {product.imageUrl ? (
              <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div style={{ fontSize: '4rem', opacity: 0.2 }}>🏍️</div>
            )}
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.6)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', color: '#fff', backdropFilter: 'blur(4px)' }}>
              {product.category?.toUpperCase()}
            </div>
          </div>

          {/* Right: Info */}
          <div className="product-info-container">
            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{product.name}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-accent-orange)' }}>
                Rp {product.price?.toLocaleString()}
              </span>
              <span style={{ color: stockStatus.color, fontWeight: '600', fontSize: '0.9rem' }}>
                ● {stockStatus.label}
              </span>
            </div>

            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', fontSize: '1.1rem', whiteSpace: 'pre-line' }}>
              {product.fullDescription || product.name}
            </p>

            <button onClick={handleBuyOnWhatsApp} className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <span>💬</span> {t('shop.buyOnWhatsApp', 'Buy on WhatsApp')}
            </button>
            
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--color-text-secondary)', textAlign: 'center' }}>
              {t('shop.waNotice', 'Click to start chat with us in Bali')}
            </p>
          </div>
        </div>

        {/* Highlights Section */}
        {product.highlights && product.highlights.length > 0 && (
          <div className="product-highlights" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <h2 style={{ marginBottom: '1.5rem', borderLeft: '4px solid var(--color-accent-orange)', paddingLeft: '1rem' }}>
              {t('shop.keyFeatures', 'Key Features')}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              {product.highlights.map((h, i) => (
                <div key={i} style={{ background: 'var(--color-bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{h.icon || '✨'}</div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{h.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{h.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Specifications Section */}
        {product.specifications && product.specifications.length > 0 && (
          <div className="product-specifications">
            <h2 style={{ marginBottom: '1.5rem', borderLeft: '4px solid var(--color-accent-orange)', paddingLeft: '1rem' }}>
              {t('shop.specifications', 'Technical Specifications')}
            </h2>
            <div style={{ background: 'var(--color-bg-card)', borderRadius: '12px', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
              {product.specifications.map((s, i) => (
                <div key={i} style={{ display: 'flex', padding: '1rem 1.5rem', borderBottom: i === product.specifications.length - 1 ? 'none' : '1px solid var(--color-border)' }}>
                  <div style={{ width: '40px', fontSize: '1.2rem' }}>{s.icon || '📊'}</div>
                  <div style={{ flex: 1, fontWeight: '600', color: 'var(--color-text-secondary)' }}>{s.key}</div>
                  <div style={{ flex: 1, textAlign: 'right' }}>{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .product-details-page {
          padding-top: 80px; /* Offset for fixed navbar */
        }
        @media (max-width: 768px) {
          .product-main-grid {
            grid-template-columns: 1fr !important;
            gap: var(--spacing-lg) !important;
          }
          .product-info-container h1 {
            font-size: 1.8rem !important;
          }
        }
        .loader {
          border: 4px solid var(--color-bg-card);
          border-top: 4px solid var(--color-accent-orange);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
};

export default ProductDetails;
