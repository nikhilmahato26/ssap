import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import { BRAND_CONTACT } from '../types';

interface NavbarProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Luxury Cars', href: '#luxury-car-rental' },
    { label: 'Pilgrimage Tours', href: '#pilgrimage-tours' },
    { label: 'Holiday Tours', href: '#holiday-packages' },
    { label: 'Why SSAP', href: '#why-us' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header className="navbar-wrapper">
      {/* Top Utility Contact Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <span className="top-bar-location">
              <MapPin size={13} className="text-gold" />
              <span>{BRAND_CONTACT.location}</span>
            </span>
            <span className="top-bar-sep">|</span>
            <span className="top-bar-tagline">
              <Sparkles size={13} className="text-gold" />
              <span>{BRAND_CONTACT.tagline}</span>
            </span>
          </div>

          <div className="top-bar-right">
            <a href={`tel:${BRAND_CONTACT.primaryPhoneRaw}`} className="top-bar-link" title="Call Primary Number">
              <Phone size={13} className="text-gold" />
              <span>{BRAND_CONTACT.primaryPhone}</span>
            </a>
            <span className="top-bar-sep">|</span>
            <a href={`tel:${BRAND_CONTACT.secondaryPhoneRaw}`} className="top-bar-link" title="Call Secondary Number">
              <Phone size={13} className="text-gold" />
              <span>{BRAND_CONTACT.secondaryPhone}</span>
            </a>
            <span className="top-bar-sep">|</span>
            <a href={`mailto:${BRAND_CONTACT.email}`} className="top-bar-link" title="Send Email">
              <Mail size={13} className="text-gold" />
              <span>{BRAND_CONTACT.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`main-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container main-navbar-container">
          {/* Brand Logo Treatment */}
          <a href="#" className="brand-logo" aria-label="SSAP Travels Home">
            <div className="logo-emblem">
              <span className="logo-initials">SSAP</span>
              <div className="logo-glow"></div>
            </div>
            <div className="logo-text-block">
              <div className="logo-brand-row">
                <span className="logo-main-name">SSAP</span>
                <span className="logo-sub-name">TRAVELS</span>
              </div>
              <span className="logo-city-tag">BANGALORE</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Action Buttons */}
          <div className="nav-actions">
            <a 
              href={`tel:${BRAND_CONTACT.primaryPhoneRaw}`} 
              className="nav-phone-btn"
              title="Call SSAP Travels"
            >
              <Phone size={16} />
              <span>{BRAND_CONTACT.primaryPhone}</span>
            </a>

            <button
              onClick={() => onOpenEnquiry()}
              className="btn-gold nav-cta-btn"
            >
              <span>Plan Your Journey</span>
              <ChevronRight size={16} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="logo-text-block">
                <div className="logo-brand-row">
                  <span className="logo-main-name">SSAP</span>
                  <span className="logo-sub-name">TRAVELS</span>
                </div>
                <span className="logo-city-tag">BANGALORE</span>
              </div>
              <button 
                className="mobile-close-btn" 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <div className="mobile-drawer-body">
              <ul className="mobile-nav-list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href} 
                      className="mobile-nav-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{link.label}</span>
                      <ChevronRight size={18} className="text-gold" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mobile-contact-card">
                <div className="mobile-contact-heading">Direct Assistance</div>
                <a href={`tel:${BRAND_CONTACT.primaryPhoneRaw}`} className="mobile-contact-item">
                  <div className="mobile-icon-circle"><Phone size={16} /></div>
                  <div>
                    <div className="mobile-contact-label">Primary Number</div>
                    <div className="mobile-contact-val">{BRAND_CONTACT.primaryPhone}</div>
                  </div>
                </a>
                <a href={`tel:${BRAND_CONTACT.secondaryPhoneRaw}`} className="mobile-contact-item">
                  <div className="mobile-icon-circle"><Phone size={16} /></div>
                  <div>
                    <div className="mobile-contact-label">Secondary Number</div>
                    <div className="mobile-contact-val">{BRAND_CONTACT.secondaryPhone}</div>
                  </div>
                </a>
                <a href={`mailto:${BRAND_CONTACT.email}`} className="mobile-contact-item">
                  <div className="mobile-icon-circle"><Mail size={16} /></div>
                  <div>
                    <div className="mobile-contact-label">Email Address</div>
                    <div className="mobile-contact-val">{BRAND_CONTACT.email}</div>
                  </div>
                </a>
                <div className="mobile-location-item">
                  <MapPin size={16} className="text-gold" />
                  <span>{BRAND_CONTACT.location}</span>
                </div>
              </div>

              <button
                className="btn-gold mobile-drawer-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
              >
                Plan Your Journey
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .navbar-wrapper {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
        }

        .top-bar {
          background-color: var(--emerald-950);
          color: rgba(250, 248, 242, 0.85);
          font-size: 0.8rem;
          padding: 0.45rem 0;
          border-bottom: 1px solid rgba(212, 175, 55, 0.25);
        }

        .top-bar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        .top-bar-left, .top-bar-right {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .top-bar-location, .top-bar-tagline {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }

        .top-bar-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: rgba(250, 248, 242, 0.9);
          transition: color 0.2s ease;
        }

        .top-bar-link:hover {
          color: var(--gold-400);
        }

        .top-bar-sep {
          color: rgba(212, 175, 55, 0.4);
        }

        .text-gold {
          color: var(--gold-400);
        }

        .main-navbar {
          background: rgba(4, 56, 40, 0.96);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(212, 175, 55, 0.3);
          transition: all 0.3s ease;
        }

        .main-navbar.scrolled {
          background: rgba(2, 32, 22, 0.98);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .main-navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
        }

        /* Brand Logo */
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          text-decoration: none;
        }

        .logo-emblem {
          width: 46px;
          height: 46px;
          background: linear-gradient(135deg, #054532 0%, #03271c 100%);
          border: 1.5px solid var(--gold-500);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow: 0 0 12px rgba(212, 175, 55, 0.25);
        }

        .logo-initials {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 900;
          letter-spacing: 0.5px;
          background: var(--grad-gold);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .logo-text-block {
          display: flex;
          flex-direction: column;
        }

        .logo-brand-row {
          display: flex;
          align-items: baseline;
          gap: 0.35rem;
        }

        .logo-main-name {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 900;
          letter-spacing: 1.5px;
          color: #ffffff;
          line-height: 1;
        }

        .logo-sub-name {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: 3px;
          color: var(--gold-400);
          line-height: 1;
        }

        .logo-city-tag {
          font-size: 0.68rem;
          letter-spacing: 3px;
          font-weight: 700;
          color: rgba(250, 248, 242, 0.7);
          margin-top: 3px;
        }

        /* Nav Menu */
        .nav-menu {
          display: flex;
          align-items: center;
          list-style: none;
          gap: 1.8rem;
        }

        .nav-link {
          color: rgba(250, 248, 242, 0.88);
          font-size: 0.92rem;
          font-weight: 600;
          letter-spacing: 0.3px;
          position: relative;
          padding: 0.3rem 0;
          transition: color 0.2s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background: var(--gold-400);
          transition: width 0.25s ease;
        }

        .nav-link:hover {
          color: var(--gold-300);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nav-phone-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gold-300);
          font-weight: 700;
          font-size: 0.88rem;
          padding: 0.55rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid rgba(212, 175, 55, 0.35);
          background: rgba(212, 175, 55, 0.08);
          transition: all 0.2s ease;
        }

        .nav-phone-btn:hover {
          background: rgba(212, 175, 55, 0.2);
          color: #ffffff;
          border-color: var(--gold-400);
        }

        .nav-cta-btn {
          padding: 0.65rem 1.3rem;
          font-size: 0.88rem;
        }

        .mobile-toggle {
          display: none;
          color: var(--gold-400);
        }

        /* Mobile Drawer */
        .mobile-drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          z-index: 1050;
        }

        .mobile-drawer {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 85%;
          max-width: 360px;
          background: var(--emerald-950);
          border-left: 1px solid rgba(212, 175, 55, 0.4);
          display: flex;
          flex-direction: column;
          box-shadow: -10px 0 30px rgba(0,0,0,0.5);
          overflow-y: auto;
        }

        .mobile-drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        }

        .mobile-close-btn {
          color: var(--gold-400);
        }

        .mobile-drawer-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .mobile-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.8rem 0.5rem;
          color: var(--ivory-50);
          font-size: 1rem;
          font-weight: 600;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mobile-contact-card {
          background: rgba(6, 78, 59, 0.4);
          border: 1px solid rgba(212, 175, 55, 0.25);
          border-radius: var(--radius-md);
          padding: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .mobile-contact-heading {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--gold-400);
        }

        .mobile-contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .mobile-icon-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(212, 175, 55, 0.15);
          color: var(--gold-400);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .mobile-contact-label {
          font-size: 0.72rem;
          color: rgba(250, 248, 242, 0.6);
        }

        .mobile-contact-val {
          font-size: 0.88rem;
          font-weight: 700;
          color: #ffffff;
        }

        .mobile-location-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: rgba(250, 248, 242, 0.8);
          padding-top: 0.4rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .mobile-drawer-cta {
          width: 100%;
          padding: 0.85rem;
        }

        @media (max-width: 1024px) {
          .nav-menu {
            display: none;
          }
          .nav-phone-btn {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }

        @media (max-width: 768px) {
          .top-bar-left .top-bar-tagline {
            display: none;
          }
          .top-bar-right .top-bar-sep:last-of-type,
          .top-bar-right .top-bar-link:last-of-type {
            display: none;
          }
          .nav-cta-btn {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};
