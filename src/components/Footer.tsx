import { Phone, Mail, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { BRAND_CONTACT } from '../types';

interface FooterProps {
  onSelectService: (serviceName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const servicesList = [
    'Luxury Car Rental',
    'Train Ticket Booking',
    'Bus Ticket Booking',
    'KSRTC Bus Booking',
    'Flight Ticket Booking',
    'Holiday & Package Tours',
    'Arupadaiveedu Murugan Temple Special Tour',
    'Tirupati Srivani VIP Break Darshan Tickets',
    'Passport Assistance (New & Renewal)'
  ];

  return (
    <footer className="site-footer">
      {/* Decorative Gold Border Line */}
      <div className="footer-top-accent"></div>

      <div className="container footer-container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand Info & Positioning */}
          <div className="footer-brand-col">
            <div className="footer-brand-logo">
              <div className="footer-logo-badge">SSAP</div>
              <div className="footer-logo-text">
                <div className="brand-name-line">
                  <span className="brand-primary">SSAP</span>
                  <span className="brand-secondary">TRAVELS</span>
                </div>
                <span className="brand-city-tag">BANGALORE</span>
              </div>
            </div>

            <div className="footer-positioning">
              <p className="footer-tagline-main">YOUR COMPLETE TRAVEL PARTNER</p>
              <p className="footer-statement">
                Travel with Comfort, Travel with Confidence, Travel with SSAP Travels.
              </p>
              <p className="footer-sub-tagline">
                Book Anywhere... Travel Everywhere...
              </p>
            </div>

            <div className="footer-promises-pills">
              <span className="footer-pill">SAFE</span>
              <span className="footer-pill">RELIABLE</span>
              <span className="footer-pill">AFFORDABLE</span>
              <span className="footer-pill">TRUSTED</span>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Our Travel Services</h4>
            <ul className="footer-links-list">
              {servicesList.map((svc, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onSelectService(svc)}
                    className="footer-service-btn"
                  >
                    <ArrowRight size={13} className="text-gold" />
                    <span>{svc}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Location */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Bangalore Travel Desk</h4>
            <div className="footer-contact-list">
              {/* Primary Phone */}
              <div className="footer-contact-item">
                <div className="contact-icon-box">
                  <Phone size={15} />
                </div>
                <div>
                  <div className="contact-label">Primary Number</div>
                  <a href={`tel:${BRAND_CONTACT.primaryPhoneRaw}`} className="contact-link">
                    {BRAND_CONTACT.primaryPhone}
                  </a>
                </div>
              </div>

              {/* Secondary Phone */}
              <div className="footer-contact-item">
                <div className="contact-icon-box">
                  <Phone size={15} />
                </div>
                <div>
                  <div className="contact-label">Secondary Number</div>
                  <a href={`tel:${BRAND_CONTACT.secondaryPhoneRaw}`} className="contact-link">
                    {BRAND_CONTACT.secondaryPhone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="footer-contact-item">
                <div className="contact-icon-box">
                  <Mail size={15} />
                </div>
                <div>
                  <div className="contact-label">Email Address</div>
                  <a href={`mailto:${BRAND_CONTACT.email}`} className="contact-link">
                    {BRAND_CONTACT.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="footer-contact-item">
                <div className="contact-icon-box">
                  <MapPin size={15} />
                </div>
                <div>
                  <div className="contact-label">Location</div>
                  <span className="contact-plain-text">{BRAND_CONTACT.location}</span>
                </div>
              </div>
            </div>

            <div className="footer-support-hours">
              <Sparkles size={14} className="text-gold" />
              <span>24/7 Booking & Travel Assistance</span>
            </div>
          </div>
        </div>

        {/* Factual Disclaimer Banner */}
        <div className="footer-disclaimer-strip">
          <p>
            <strong>Note on Special Services:</strong> SSAP Travels provides travel coordination and booking assistance. Ticket allocations for train, flight, KSRTC bus, and pilgrimage darshans remain subject to respective governing authorities and official operational guidelines.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} <strong>SSAP TRAVELS BANGALORE</strong>. All rights reserved.
          </p>
          <div className="footer-bottom-badges">
            <span>EASY BOOKING</span>
            <span>•</span>
            <span>100% SECURE</span>
            <span>•</span>
            <span>24/7 SERVICE</span>
            <span>•</span>
            <span>CUSTOMER SUPPORT</span>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: linear-gradient(180deg, #022016 0%, #01140e 100%);
          color: var(--ivory-50);
          position: relative;
          padding-top: 4.5rem;
          padding-bottom: 2.5rem;
          border-top: 1px solid rgba(212, 175, 55, 0.35);
        }

        .footer-top-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--grad-gold);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr 1fr;
          gap: 3.5rem;
          margin-bottom: 3rem;
        }

        /* Brand Column */
        .footer-brand-logo {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 1.5rem;
        }

        .footer-logo-badge {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #054532 0%, #03271c 100%);
          border: 1.5px solid var(--gold-500);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 900;
          color: var(--gold-300);
          box-shadow: 0 0 10px rgba(212, 175, 55, 0.25);
        }

        .brand-name-line {
          display: flex;
          align-items: baseline;
          gap: 0.35rem;
        }

        .brand-primary {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 900;
          letter-spacing: 1px;
          color: #ffffff;
        }

        .brand-secondary {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--gold-400);
        }

        .brand-city-tag {
          font-size: 0.65rem;
          letter-spacing: 2.5px;
          font-weight: 700;
          color: rgba(250, 248, 242, 0.7);
          display: block;
        }

        .footer-positioning {
          margin-bottom: 1.5rem;
        }

        .footer-tagline-main {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--gold-300);
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }

        .footer-statement {
          font-size: 0.9rem;
          color: rgba(250, 248, 242, 0.88);
          line-height: 1.55;
          margin-bottom: 0.5rem;
        }

        .footer-sub-tagline {
          font-size: 0.85rem;
          font-style: italic;
          color: var(--gold-400);
        }

        .footer-promises-pills {
          display: flex;
          gap: 0.45rem;
          flex-wrap: wrap;
        }

        .footer-pill {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 1px;
          color: #04261b;
          background: var(--gold-400);
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-full);
        }

        /* Links Column */
        .footer-col-title {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          color: #ffffff;
          margin-bottom: 1.25rem;
          position: relative;
          padding-bottom: 0.6rem;
        }

        .footer-col-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 32px;
          height: 2px;
          background: var(--gold-400);
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .footer-service-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(250, 248, 242, 0.8);
          font-size: 0.86rem;
          text-align: left;
          padding: 0.2rem 0;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .footer-service-btn:hover {
          color: var(--gold-300);
          transform: translateX(4px);
        }

        /* Contact Column */
        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .contact-icon-box {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(212, 175, 55, 0.12);
          border: 1px solid rgba(212, 175, 55, 0.35);
          color: var(--gold-300);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-label {
          font-size: 0.7rem;
          color: rgba(250, 248, 242, 0.6);
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .contact-link {
          font-size: 0.92rem;
          font-weight: 700;
          color: #ffffff;
          transition: color 0.2s ease;
        }

        .contact-link:hover {
          color: var(--gold-400);
        }

        .contact-plain-text {
          font-size: 0.92rem;
          font-weight: 600;
          color: rgba(250, 248, 242, 0.9);
        }

        .footer-support-hours {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--gold-300);
          background: rgba(4, 56, 40, 0.6);
          border: 1px solid rgba(212, 175, 55, 0.25);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
        }

        /* Disclaimer Strip */
        .footer-disclaimer-strip {
          background: rgba(4, 56, 40, 0.4);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: var(--radius-md);
          padding: 1rem 1.25rem;
          margin-bottom: 2rem;
        }

        .footer-disclaimer-strip p {
          font-size: 0.76rem;
          color: rgba(250, 248, 242, 0.75);
          line-height: 1.5;
        }

        .footer-disclaimer-strip strong {
          color: var(--gold-300);
        }

        /* Bottom Bar */
        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.75rem;
          border-top: 1px solid rgba(212, 175, 55, 0.18);
          font-size: 0.78rem;
          color: rgba(250, 248, 242, 0.65);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-bottom-badges {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gold-400);
          font-weight: 700;
          font-size: 0.72rem;
          letter-spacing: 0.8px;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 640px) {
          .footer-bottom-bar {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};
