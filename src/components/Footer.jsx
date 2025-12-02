import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>DIY MotoGarage</h3>
                    <p>Your space to fix, build, and ride.</p>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Kerobokan, Bali</p>
                    <p>Email: info@diymotogarage.com</p>
                </div>
                <div className="footer-section">
                    <h4>Hours</h4>
                    <p>Mon - Sun: 8am - 8pm</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} DIY MotoGarage. All rights reserved.</p>
            </div>

            <style>{`
        .footer {
          background-color: var(--color-bg-card);
          border-top: 1px solid var(--color-border);
          padding: 3rem 0 1rem;
          margin-top: auto;
        }
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .footer-section h3, .footer-section h4 {
          color: #fff;
          margin-bottom: 1rem;
        }
        .footer-section p {
          color: var(--color-text-secondary);
          margin-bottom: 0.5rem;
        }
        .footer-bottom {
          text-align: center;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border);
          color: var(--color-text-secondary);
          font-size: 0.9rem;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
