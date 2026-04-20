import React, { useState } from 'react';

const images = [
  '/interior-1.jpg',
  '/interior-2.jpg',
  '/interior-3.jpg',
  '/interior-4.jpg'
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const nextSlide = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  return (
    <>
      <div className="carousel-container">
        <button className="carousel-btn prev-btn" onClick={prevSlide}>&#10094;</button>
        
        <div className="carousel-image-wrapper" onClick={openLightbox}>
          <img 
            src={images[currentIndex]} 
            alt={`DIY MotoGarage Interior ${currentIndex + 1}`} 
            className="carousel-main-img" 
          />
          <div className="carousel-hint">🔍 Click to expand</div>
        </div>

        <button className="carousel-btn next-btn" onClick={nextSlide}>&#10095;</button>

        <div className="carousel-dots">
          {images.map((_, idx) => (
            <span 
              key={idx} 
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>

      {isLightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
          
          <button className="carousel-btn lightbox-btn prev-btn" onClick={prevSlide}>&#10094;</button>
          <img 
            src={images[currentIndex]} 
            alt={`Fullscreen Interior ${currentIndex + 1}`} 
            className="lightbox-img" 
            onClick={(e) => e.stopPropagation()}
          />
          <button className="carousel-btn lightbox-btn next-btn" onClick={nextSlide}>&#10095;</button>
        </div>
      )}

      <style>{`
        .carousel-container {
          position: relative;
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          background: var(--color-bg-card);
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--color-border);
        }

        .carousel-image-wrapper {
          position: relative;
          cursor: pointer;
          height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .carousel-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .carousel-image-wrapper:hover .carousel-main-img {
          transform: scale(1.02);
        }

        .carousel-hint {
          position: absolute;
          bottom: 10px;
          right: 10px;
          background: rgba(0, 0, 0, 0.6);
          color: #fff;
          padding: 5px 10px;
          border-radius: 4px;
          font-size: 0.85rem;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .carousel-image-wrapper:hover .carousel-hint {
          opacity: 1;
        }

        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,0.5);
          color: white;
          border: none;
          padding: 1rem 0.8rem;
          cursor: pointer;
          font-size: 1.5rem;
          z-index: 2;
          transition: background 0.3s ease, color 0.3s ease;
        }

        .carousel-btn:hover {
          background: var(--color-accent-orange);
          color: #000;
        }

        .prev-btn { left: 0; border-radius: 0 4px 4px 0; }
        .next-btn { right: 0; border-radius: 4px 0 0 4px; }

        .carousel-dots {
          text-align: center;
          padding: 10px 0;
          background: rgba(0,0,0,0.3);
          position: absolute;
          bottom: 0;
          width: 100%;
        }

        .dot {
          cursor: pointer;
          height: 10px;
          width: 10px;
          margin: 0 5px;
          background-color: #717171;
          border-radius: 50%;
          display: inline-block;
          transition: background-color 0.3s ease;
        }

        .dot.active, .dot:hover {
          background-color: var(--color-accent-orange);
        }

        /* Lightbox */
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.9);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-img {
          max-width: 90%;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 4px;
          box-shadow: 0 5px 25px rgba(0,0,0,0.5);
        }

        .lightbox-close {
          position: absolute;
          top: 20px;
          right: 30px;
          color: #fff;
          font-size: 3rem;
          font-weight: bold;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          line-height: 1;
          transition: color 0.2s ease;
          z-index: 10000;
        }

        .lightbox-close:hover {
          color: var(--color-accent-orange);
        }

        .lightbox-btn {
          padding: 2rem 1.5rem;
          font-size: 2rem;
          background: rgba(0,0,0,0.3);
        }
        
        .lightbox-btn:hover {
          background: rgba(0,0,0,0.8);
          color: var(--color-accent-orange);
        }

        @media (max-width: 768px) {
          .carousel-image-wrapper {
            height: 250px;
          }
          .carousel-btn {
            padding: 0.8rem 0.5rem;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
};

export default ImageCarousel;
