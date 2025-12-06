import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navLinks = [
    { name: t('navbar.home'), href: '/' },
    { name: t('navbar.about'), href: '/about' },
    { name: t('navbar.services'), href: '/services' },
    { name: t('navbar.contact'), href: '/contact' },
    { name: t('navbar.bookNow'), href: '/booking', isCta: true },
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="/" className="logo">
          DIY <span className="text-orange">MotoGarage</span>
        </a>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${link.isCta ? 'btn btn-primary' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="lang-switcher">
            <button
              className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
            <span className="lang-divider">|</span>
            <button
              className={`lang-btn ${i18n.language === 'ru' ? 'active' : ''}`}
              onClick={() => changeLanguage('ru')}
            >
              RU
            </button>
          </div>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <style>{`
        .navbar {
          background-color: var(--color-bg-card);
          border-bottom: 1px solid var(--color-border);
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-family: var(--font-family-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          text-decoration: none;
        }
        .text-orange {
          color: var(--color-accent-orange);
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav-link {
          color: var(--color-text-primary);
          font-weight: 500;
        }
        .nav-link:hover {
          color: var(--color-accent-orange);
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          flex-direction: column;
          gap: 5px;
        }
        .bar {
          width: 25px;
          height: 3px;
          background-color: #fff;
          transition: 0.3s;
        }

        .lang-switcher {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-left: 1rem;
        }
        .lang-btn {
          background: none;
          border: none;
          color: var(--color-text-secondary);
          cursor: pointer;
          font-weight: 500;
          padding: 0;
          font-size: 0.9rem;
        }
        .lang-btn:hover, .lang-btn.active {
          color: var(--color-accent-orange);
        }
        .lang-divider {
          color: var(--color-text-secondary);
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex;
          }
          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: var(--color-bg-card);
            flex-direction: column;
            padding: 2rem;
            border-bottom: 1px solid var(--color-border);
            transform: translateY(-150%);
            transition: transform 0.3s ease-in-out;
          }
          .nav-links.active {
            transform: translateY(0);
          }
          .lang-switcher {
            margin-left: 0;
            margin-top: 1rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
