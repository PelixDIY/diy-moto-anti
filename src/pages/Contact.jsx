import React from 'react';
import SEO from '../components/SEO';

const Contact = () => {
    return (
        <div className="page-container container section">
            <SEO
                title="Contact Us"
                description="Get in touch with DIY MotoGarage Bali. Find our location, opening hours, and contact details."
            />
            <div className="section-header">
                <h1>Contact Us</h1>
                <p>Get in touch or drop by the garage.</p>
            </div>

            <div className="contact-grid">
                <div className="contact-info">
                    <div className="info-item">
                        <h3>Address</h3>
                        <p>Jalan Raya Kesambi No. 43<br />Kerobokan, Bali 80361</p>
                    </div>
                    <div className="info-item">
                        <h3>Phone / WhatsApp</h3>
                        <p>+62 877 000 77 111</p>
                    </div>
                    <div className="info-item">
                        <h3>Email</h3>
                        <p>info@diymotogarage.com</p>
                    </div>
                    <div className="info-item">
                        <h3>Opening Hours</h3>
                        <p>Monday - Sunday: 10:00 AM - 10:00 PM</p>
                    </div>
                </div>

                <div className="contact-form-container">
                    <h3>Send us a message</h3>
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="How can we help?"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>

            <div className="map-section">
                {/* Placeholder for Google Maps Embed */}
                <div className="map-placeholder">
                    <p>Google Maps Location</p>
                </div>
            </div>

            <style>{`
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .section-header h1 {
          margin-bottom: 0.5rem;
        }
        .section-header p {
          color: var(--color-text-secondary);
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }
        .info-item {
          margin-bottom: 2rem;
        }
        .info-item h3 {
          color: var(--color-accent-orange);
          margin-bottom: 0.5rem;
        }
        .info-item p {
          color: var(--color-text-primary);
        }
        .contact-form-container {
          background-color: var(--color-bg-card);
          padding: 2rem;
          border-radius: 8px;
          border: 1px solid var(--color-border);
        }
        .contact-form-container h3 {
          margin-bottom: 1.5rem;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--color-text-secondary);
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          background-color: var(--color-bg-dark);
          border: 1px solid var(--color-border);
          border-radius: 4px;
          color: #fff;
          font-family: inherit;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-accent-orange);
        }
        .map-section {
          height: 400px;
          background-color: var(--color-bg-card);
          border-radius: 8px;
          overflow: hidden;
        }
        .map-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #333;
          color: #aaa;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    );
};

export default Contact;
