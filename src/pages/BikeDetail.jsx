import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { bikesData } from '../data/bikes';
import BookingForm from '../components/BookingForm';

const BikeDetail = () => {
  const { modelId } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showBooking, setShowBooking] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState('');

  const bike = bikesData[modelId];

  if (!bike) {
    return (
      <div className="container section text-center">
        <h1>404 - Model Not Found</h1>
        <Link to="/bikes" className="btn btn-primary">Back to Knowledge Base</Link>
      </div>
    );
  }

  const handleBookWithIssue = (issueTitle) => {
    setSelectedIssue(issueTitle);
    setShowBooking(true);
  };

  return (
    <div className="bike-detail-page" style={{ background: '#121212', color: 'white' }}>
      <SEO 
        pageKey={`bike-${modelId}`} 
        titleOverride={`${bike.name} | Repair & Service Bali — DIY Moto Garage`}
        descriptionOverride={t(`bikes.models.${bike.id}.description`)}
      />

      {/* BREADCRUMBS */}
      <nav className="container" style={{ padding: '2rem 1rem 0', fontSize: '0.9rem', opacity: 0.6 }}>
        <Link to="/bikes" style={{ color: 'inherit', textDecoration: 'none' }}>{t('bikes.list.title')}</Link> / 
        <span style={{ margin: '0 0.5rem' }}>{t(`bikes.list.categories.${bike.category}`)}</span> / 
        <span style={{ margin: '0 0.5rem', color: 'var(--primary-color)' }}>{bike.name}</span>
      </nav>

      {/* HERO SECTION */}
      <section className="bike-hero container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'center',
        padding: '2rem 1rem 4rem'
      }}>
        <div className="bike-hero-text">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: '800', display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
            {bike.name}
            <span style={{ fontSize: '1.2rem', fontWeight: '400', opacity: 0.5 }}>{bike.engine_cc}cc</span>
          </h1>
          <p className="lead" style={{ fontSize: '1.2rem', marginBottom: '2.5rem', lineHeight: '1.6', opacity: 0.9, maxWidth: '600px' }}>
            {t(`bikes.models.${bike.id}.description`)}
          </p>
          
          <div className="hero-ctas" style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
            <button onClick={() => { setSelectedIssue(''); setShowBooking(true); }} className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', borderRadius: '50px' }}>
              {t('bikes.detail.bookService')}
            </button>
            <a href="https://wa.me/6287700077111" className="btn btn-outline" target="_blank" rel="noopener noreferrer" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', borderColor: 'rgba(255,255,255,0.2)', borderRadius: '50px' }}>
              {t('bikes.detail.whatsappConsult')} <span style={{ marginLeft: '0.5rem' }}>💬</span>
            </a>
          </div>

          <div className="hero-features" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '1.5rem',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '2rem'
          }}>
            {bike.features?.map(featureKey => (
              <div key={featureKey} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.95rem', opacity: 0.8 }}>
                <span style={{ color: 'var(--primary-color)', fontSize: '1.2rem' }}>⭐</span>
                {t(`bikes.models.${bike.id}.features.${featureKey}`)}
              </div>
            )) || (
              <div style={{ opacity: 0.5, fontSize: '0.9rem' }}>{t('bikes.features_coming_soon', 'Feature list coming soon...')}</div>
            )}
          </div>
        </div>

        <div className="bike-hero-image-container" style={{
          position: 'relative',
          borderRadius: '40px',
          overflow: 'hidden',
          boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
          background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(0,0,0,0.2))'
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
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '40%',
            background: 'linear-gradient(to top, #121212, transparent)'
          }}></div>
        </div>
      </section>

      {/* Diagnostics Section */}
      {bike.diagnostics && bike.diagnostics.length > 0 ? (
        <section className="diagnostics-section" style={{ padding: '6rem 5%', background: 'rgba(255,255,255,0.02)' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
              {t('bikes.diagnostics_title', 'What to do right now?')}
            </h2>
            <p style={{ opacity: 0.6 }}>{t('bikes.diagnostics_subtitle', 'Quick troubleshooting steps for common issues')}</p>
          </div>
          <div className="diagnostics-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2rem',
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            {bike.diagnostics.map((diagId, idx) => {
              const diag = t(`bikes.models.${bike.id}.diagnostics.${diagId}`, { returnObjects: true });
              if (!diag || typeof diag === 'string') return null;
              return (
                <div key={idx} className="diag-card" style={{
                  background: 'rgba(255,255,255,0.03)',
                  padding: '2.5rem',
                  borderRadius: '25px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s ease'
                }}>
                  <h3 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.4rem' }}>{diag.title}</h3>
                  <ol style={{ paddingLeft: '1.2rem', marginBottom: '2rem', color: '#aaa', lineHeight: '1.6' }}>
                    {diag.steps?.map((step, sIdx) => (
                      <li key={sIdx} style={{ marginBottom: '0.8rem' }}>{step}</li>
                    ))}
                  </ol>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--primary-color)', opacity: 0.8 }}>{diag.info}</span>
                    <button 
                      onClick={() => handleBookWithIssue(diag.title)}
                      style={{ background: 'none', border: 'none', color: 'var(--primary-color)', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                      {t('bikes.fix_it_btn', 'Fix it →')}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ) : (
        <section style={{ padding: '4rem 5%', textAlign: 'center', opacity: 0.3 }}>
          <p>{t('bikes.data_updating', 'Technical diagnostics for this model are being updated...')}</p>
        </section>
      )}

      {/* Common Problems Section */}
      {bike.detailed_issues && bike.detailed_issues.length > 0 && (
        <section className="issues-section" style={{ padding: '6rem 5%' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>
            {t('bikes.common_problems_title', 'Typical Technical Issues')}
          </h2>
          <div className="issues-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
            gap: '2.5rem',
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            {bike.detailed_issues.map((issue, idx) => {
              const issueData = t(`bikes.models.${bike.id}.detailed_issues.${issue.id}`, { returnObjects: true });
              if (!issueData || typeof issueData === 'string') return null;
              return (
                <div key={idx} className="issue-card" style={{
                  background: 'rgba(255,255,255,0.02)',
                  padding: '2.5rem',
                  borderRadius: '30px',
                  border: `1px solid ${issue.isWeakSpot ? 'rgba(255,102,0,0.2)' : 'rgba(255,255,255,0.05)'}`,
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {issue.isWeakSpot && (
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      right: '0',
                      background: 'var(--primary-color)',
                      color: 'white',
                      fontSize: '0.7rem',
                      padding: '5px 15px',
                      borderBottomLeftRadius: '15px',
                      fontWeight: '800'
                    }}>WEAK SPOT</div>
                  )}
                  <h3 style={{ color: 'white', marginBottom: '2rem', fontSize: '1.3rem' }}>{issueData.title}</h3>
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <div>
                      <label style={{ color: 'var(--primary-color)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.5rem' }}>
                        {t('bikes.symptoms', 'Symptoms')}
                      </label>
                      <p style={{ color: '#aaa', margin: 0 }}>{issueData.symptoms}</p>
                    </div>
                    <div>
                      <label style={{ color: 'var(--primary-color)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.5rem' }}>
                        {t('bikes.reason', 'Root Cause')}
                      </label>
                      <p style={{ color: '#aaa', margin: 0 }}>{issueData.reason}</p>
                    </div>
                    <div style={{ background: 'rgba(255,102,0,0.05)', padding: '1.5rem', borderRadius: '15px', border: '1px solid rgba(255,102,0,0.1)' }}>
                      <label style={{ color: 'var(--primary-color)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.5rem' }}>
                        {t('bikes.action', 'Recommendation')}
                      </label>
                      <p style={{ color: 'white', margin: 0, fontWeight: '500' }}>{issueData.action}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Maintenance Grid */}
      {bike.service_schedule && (
        <section className="tech-grid-section" style={{ padding: '6rem 5%', background: 'rgba(0,0,0,0.2)' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '4rem',
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            {/* Schedule */}
            <div className="tech-block">
              <h2 style={{ color: 'var(--primary-color)', marginBottom: '3rem' }}>{t('bikes.maintenance_schedule', 'Service Schedule')}</h2>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {Object.entries(bike.service_schedule).map(([key, value]) => (
                  <div key={key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
                    <span style={{ color: '#aaa' }}>{t(`bikes.detail.intervals.${key}`)}</span>
                    <span style={{ color: 'white', fontWeight: 'bold' }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="tech-block">
              <h2 style={{ color: 'var(--primary-color)', marginBottom: '3rem' }}>{t('bikes.pricing_title', 'Service & Parts')}</h2>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {bike.detailed_pricing?.map((price, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
                    <span style={{ color: '#aaa' }}>{t(`bikes.models.${bike.id}.pricing.${price.item}`)}</span>
                    <span style={{ color: 'white', fontWeight: 'bold' }}>{price.price}</span>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#555' }}>
                * {t('bikes.pricing_note', 'Approximate prices at DIY MotoGarage')}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Fit & Mistakes Section */}
      {(bike.owner_mistakes || bike.target_fit) && (
        <section className="fit-section" style={{ padding: '8rem 5%' }}>
          <div className="fit-section-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6rem', alignItems: 'center', maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ borderRadius: '40px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.4)' }}>
              <img src={bike.image_fit || bike.image} alt="Fitting" style={{ width: '100%', display: 'block' }} />
            </div>
            
            <div style={{ display: 'grid', gap: '4rem' }}>
              {bike.owner_mistakes && (
                <div>
                  <h3 style={{ color: '#ff4444', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.6rem' }}>
                    ⚠️ {t('bikes.owner_mistakes_title', 'Common Mistakes by Owners')}
                  </h3>
                  <div style={{ display: 'grid', gap: '1.2rem' }}>
                    {bike.owner_mistakes.map((mistake, idx) => (
                      <div key={idx} style={{ 
                        padding: '1.5rem', 
                        background: 'rgba(255,68,68,0.03)', 
                        borderRadius: '20px', 
                        border: '1px solid rgba(255,68,68,0.1)',
                        color: '#ccc',
                        lineHeight: '1.6'
                      }}>
                        {t(`bikes.models.${bike.id}.owner_mistakes.${mistake}`)}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Fit Guide */}
              {bike.target_fit && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                  <div>
                    <h4 style={{ color: '#44ff44', marginBottom: '1.5rem', fontSize: '1.2rem' }}>✅ {t('bikes.suitable_for', 'Perfect for')}</h4>
                    <ul style={{ listStyle: 'none', padding: 0, color: '#aaa', fontSize: '1rem', display: 'grid', gap: '1rem' }}>
                      {bike.target_fit.suitable.map(key => (
                        <li key={key} style={{ display: 'flex', gap: '10px' }}>
                          <span style={{ color: '#44ff44' }}>•</span>
                          {t(`bikes.models.${bike.id}.target_fit.suitable.${key}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 style={{ color: '#ffbb33', marginBottom: '1.5rem', fontSize: '1.2rem' }}>❌ {t('bikes.not_suitable_for', 'Not ideal for')}</h4>
                    <ul style={{ listStyle: 'none', padding: 0, color: '#aaa', fontSize: '1rem', display: 'grid', gap: '1rem' }}>
                      {bike.target_fit.not_suitable.map(key => (
                        <li key={key} style={{ display: 'flex', gap: '10px' }}>
                          <span style={{ color: '#ffbb33' }}>•</span>
                          {t(`bikes.models.${bike.id}.target_fit.not_suitable.${key}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {bike.faq && bike.faq.length > 0 && (
        <section className="faq-section" style={{ padding: '6rem 5%', background: 'rgba(0,0,0,0.3)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '3rem', textAlign: 'center' }}>
              {t('bikes.faq_title', 'Frequently Asked Questions')}
            </h2>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {bike.faq.map((faqId, idx) => {
                const item = t(`bikes.models.${bike.id}.faq.${faqId}`, { returnObjects: true });
                if (!item || typeof item === 'string') return null;
                return (
                  <details key={idx} style={{ 
                    background: 'rgba(255,255,255,0.03)', 
                    padding: '1.5rem', 
                    borderRadius: '15px', 
                    border: '1px solid rgba(255,255,255,0.05)',
                    cursor: 'pointer'
                  }}>
                    <summary style={{ fontWeight: 'bold', color: 'white', outline: 'none' }}>{item.q}</summary>
                    <div style={{ marginTop: '1rem', color: '#aaa', lineHeight: '1.6' }}>{item.a}</div>
                  </details>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Booking CTA */}
      <section className="booking-cta" style={{ padding: '8rem 5%', textAlign: 'center' }}>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          background: 'linear-gradient(rgba(255,102,0,0.1), transparent)',
          padding: '4rem 2rem',
          borderRadius: '40px',
          border: '1px solid rgba(255,102,0,0.2)'
        }}>
          <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '1.5rem' }}>
            {t('bikes.ready_to_book', 'Ready to give your bike the best care?')}
          </h2>
          <p style={{ color: '#aaa', fontSize: '1.2rem', marginBottom: '2.5rem' }}>
            {t('bikes.cta_text', 'Join hundreds of happy riders on Bali. Book your professional maintenance or repair today.')}
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => { setSelectedIssue(''); setShowBooking(true); }}
              className="btn btn-primary"
              style={{
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: 'bold'
              }}
            >
              {t('bikes.detail.bookService')}
            </button>
            <a 
              href="https://wa.me/6287700077111" 
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                textDecoration: 'none'
              }}
            >
              {t('bikes.detail.whatsappConsult')}
            </a>
          </div>
        </div>
      </section>

      {/* BOOKING MODAL */}
      {showBooking && (
        <div className="modal-overlay" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.85)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1rem'
        }} onClick={() => setShowBooking(false)}>
          <div className="modal-content" style={{
            width: '100%',
            maxWidth: '500px',
            position: 'relative'
          }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowBooking(false)} style={{
              position: 'absolute',
              top: '-40px',
              right: '0',
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '2rem',
              cursor: 'pointer'
            }}>&times;</button>
            <BookingForm 
              initialBikeModel={bike.name} 
              initialType="service" 
              source="knowledge_base_detail"
              initialProblem={selectedIssue}
            />
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .diag-card:hover, .issue-card:hover {
          background: rgba(255,255,255,0.05) !important;
          border-color: rgba(255,102,0,0.3) !important;
          transform: translateY(-5px);
        }
        .diag-card ol li::marker {
          color: var(--primary-color);
          font-weight: bold;
        }
        @media (max-width: 992px) {
          .bike-hero {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .bike-hero-text h1 {
            justify-content: center;
          }
          .hero-ctas {
            justify-content: center;
          }
          .hero-features {
            max-width: 500px;
            margin: 0 auto;
          }
          .tech-block {
            padding: 2rem !important;
          }
        }
        @media (max-width: 768px) {
          .bike-hero-text h1 {
            font-size: 2.5rem !important;
          }
          .fit-section-content {
            grid-template-columns: 1fr !important;
          }
          .fit-block {
            grid-column: span 2;
          }
        }
      `}} />
    </div>
  );
};

export default BikeDetail;
