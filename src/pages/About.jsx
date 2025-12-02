import React from 'react';
import SEO from '../components/SEO';

const About = () => {
    return (
        <div className="page-container container section">
            <SEO
                title="About Us"
                description="Learn about DIY MotoGarage Bali, our mission, and the community we're building for motorcycle enthusiasts."
            />
            <div className="about-content">
                <h1>About DIY MotoGarage</h1>
                <p className="lead">
                    Born from a passion for mechanics and the freedom of the ride, DIY MotoGarage is Bali's first community-focused self-service motorcycle workshop.
                </p>

                <div className="about-grid">
                    <div className="about-text">
                        <h2>Our Mission</h2>
                        <p>
                            We believe that every rider should have the opportunity to understand and maintain their machine.
                            Our mission is to provide a professional, safe, and equipped environment where you can learn, fix, and build.
                        </p>
                        <p>
                            Whether you're changing oil, swapping tires, or doing a full engine rebuild, we have the space and tools you need.
                        </p>
                    </div>
                    <div className="about-image">
                        {/* Placeholder for garage interior image */}
                        <div className="image-placeholder">Garage Interior</div>
                    </div>
                </div>

                <div className="features-list">
                    <div className="feature-item">
                        <h3>Professional Equipment</h3>
                        <p>Hydraulic lifts, air compressors, and high-quality hand tools.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Community</h3>
                        <p>Connect with other riders and share knowledge.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Support</h3>
                        <p>Expert advice available when you get stuck.</p>
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
