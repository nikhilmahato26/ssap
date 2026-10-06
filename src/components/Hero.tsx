import { Phone, ArrowRight, ShieldCheck, Clock, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND_CONTACT } from '../types';

interface HeroProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="hero-section">
      <div className="hero-background-effects">
        <div className="hero-glow-sunset"></div>
        <div className="hero-glow-gold"></div>
        <div className="hero-glow-orange"></div>
        <div className="hero-pattern-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Column: Brand Content & CTAs */}
          <div className="hero-content">
            {/* Eyebrow */}
            <div className="hero-eyebrow">
              <span className="eyebrow-dot"></span>
              <span className="eyebrow-text">SSAP TRAVELS BANGALORE</span>
              <span className="eyebrow-tag">ESTEEMED SERVICE</span>
            </div>

            {/* Main Heading */}
            <h1 className="hero-heading">
              YOUR COMPLETE <br />
              <span className="text-gold-gradient">TRAVEL PARTNER</span>
            </h1>

            {/* Supporting Brand Statements */}
            <p className="hero-statement">
              Travel with comfort, travel with confidence, <br className="hidden-mobile" />
              travel with SSAP Travels.
            </p>

            <div className="hero-tagline-badge">
              <Sparkles size={16} className="text-gold" />
              <span>Book Anywhere... Travel Everywhere...</span>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta-group">
              <button
                onClick={() => onOpenEnquiry()}
                className="btn-gold hero-primary-btn"
                id="hero-primary-cta"
              >
                <span>Plan Your Journey</span>
                <ArrowRight size={18} />
              </button>

              <a
                href={`tel:${BRAND_CONTACT.primaryPhoneRaw}`}
                className="btn-outline-gold hero-secondary-btn"
                id="hero-secondary-cta"
                title={`Call ${BRAND_CONTACT.primaryPhone}`}
              >
                <Phone size={18} className="text-gold" />
                <div className="cta-call-text">
                  <span className="cta-call-label">Call Now</span>
                  <span className="cta-call-number">{BRAND_CONTACT.primaryPhone}</span>
                </div>
              </a>
            </div>

            {/* Core Values Strip */}
            <div className="hero-values-strip">
              <div className="value-chip">
                <ShieldCheck size={14} className="text-gold" />
                <span>SAFE</span>
              </div>
              <span className="value-dot">•</span>
              <div className="value-chip">
                <Clock size={14} className="text-gold" />
                <span>RELIABLE</span>
              </div>
              <span className="value-dot">•</span>
              <div className="value-chip">
                <Award size={14} className="text-gold" />
                <span>AFFORDABLE</span>
              </div>
              <span className="value-dot">•</span>
              <div className="value-chip">
                <span>FAST</span>
              </div>
              <span className="value-dot">•</span>
              <div className="value-chip">
                <span>EASY</span>
              </div>
              <span className="value-dot">•</span>
              <div className="value-chip">
                <span>TRUSTED</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Composition */}
          <div className="hero-visual-wrapper">
            <div className="hero-frame-card">
              {/* Gold Ornamental Corner Accents */}
              <div className="corner-accent top-left"></div>
              <div className="corner-accent top-right"></div>
              <div className="corner-accent bottom-left"></div>
              <div className="corner-accent bottom-right"></div>

              <div className="hero-image-container">
                <img
                  src="/images/hero-banner.jpg"
                  alt="SSAP Travels Luxury Innova Crysta Travel Bangalore"
                  className="hero-main-img"
                  loading="eager"
                />
                <div className="hero-image-overlay"></div>
              </div>

              {/* Floating Highlight Card 1: Luxury Fleet */}
              <div className="floating-badge badge-fleet">
                <div className="badge-icon-box">
                  <Sparkles size={18} className="text-gold" />
                </div>
                <div>
                  <div className="badge-title">Luxury Car Rental</div>
                  <div className="badge-subtitle">Toyota Innova Crysta & Fleet</div>
                </div>
              </div>

              {/* Floating Highlight Card 2: 24/7 Service */}
              <div className="floating-badge badge-support">
                <div className="badge-icon-box">
                  <CheckCircle2 size={18} className="text-gold" />
                </div>
                <div>
                  <div className="badge-title">Bangalore HQ</div>
                  <div className="badge-subtitle">24/7 Booking Assistance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          background: linear-gradient(175deg, #2b0d05 0%, #431407 35%, #7c2d12 70%, #9a3412 100%);
          color: var(--ivory-50);
          padding-top: 4.5rem;
          padding-bottom: 5.5rem;
          overflow: hidden;
          border-bottom: 3.5px solid #ea580c;
        }

        .hero-background-effects {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .hero-glow-sunset {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(234, 88, 12, 0.35) 0%, transparent 70%);
          top: -150px;
          right: -100px;
          filter: blur(80px);
        }

        .hero-glow-gold {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(251, 146, 60, 0.25) 0%, transparent 70%);
          bottom: -100px;
          left: 10%;
          filter: blur(80px);
        }

        .hero-glow-orange {
          position: absolute;
          width: 550px;
          height: 550px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(234, 88, 12, 0.35) 0%, transparent 70%);
          bottom: -120px;
          right: 12%;
          filter: blur(80px);
        }

        .hero-pattern-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(251, 146, 60, 0.12) 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.6;
        }

        .hero-container {
          position: relative;
          z-index: 10;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        /* Hero Content */
        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          width: fit-content;
          background: rgba(43, 13, 5, 0.75);
          border: 1px solid rgba(251, 146, 60, 0.45);
          padding: 0.4rem 1rem;
          border-radius: var(--radius-full);
          backdrop-filter: blur(8px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--gold-400);
          box-shadow: 0 0 8px var(--gold-400);
        }

        .eyebrow-text {
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: var(--gold-300);
        }

        .eyebrow-tag {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 1px;
          background: rgba(212, 175, 55, 0.2);
          color: #ffffff;
          padding: 0.15rem 0.5rem;
          border-radius: var(--radius-full);
        }

        .hero-heading {
          font-size: 3.4rem;
          font-weight: 900;
          line-height: 1.12;
          letter-spacing: 0.5px;
          color: #ffffff;
          text-shadow: 0 2px 16px rgba(0, 0, 0, 0.4);
        }

        .text-gold-gradient {
          background: linear-gradient(135deg, #dfbc4b 0%, #fbf3cc 40%, #d4af37 70%, #b38612 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-statement {
          font-size: 1.25rem;
          font-weight: 500;
          line-height: 1.6;
          color: rgba(250, 248, 242, 0.95);
          border-left: 3px solid var(--gold-500);
          padding-left: 1rem;
        }

        .hero-tagline-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--gold-300);
          font-style: italic;
          letter-spacing: 0.5px;
        }

        /* Hero CTA Group */
        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-top: 0.5rem;
          flex-wrap: wrap;
        }

        .hero-primary-btn {
          padding: 1rem 2.2rem;
          font-size: 1.02rem;
        }

        .hero-secondary-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(43, 13, 5, 0.65);
          border: 1.5px solid #ea580c;
          color: #ffffff;
          padding: 0.75rem 1.6rem;
          border-radius: var(--radius-md);
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
        }

        .hero-secondary-btn:hover {
          background: rgba(234, 88, 12, 0.25);
          border-color: #f97316;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .cta-call-text {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .cta-call-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--gold-400);
          line-height: 1;
        }

        .cta-call-number {
          font-size: 0.95rem;
          font-weight: 800;
          letter-spacing: 0.5px;
          line-height: 1.3;
        }

        /* Values Strip */
        .hero-values-strip {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-top: 1rem;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(212, 175, 55, 0.2);
          flex-wrap: wrap;
        }

        .value-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 1px;
          color: rgba(250, 248, 242, 0.9);
        }

        .value-dot {
          color: var(--gold-500);
          font-size: 0.8rem;
          opacity: 0.7;
        }

        /* Hero Visual Frame */
        .hero-visual-wrapper {
          position: relative;
        }

        .hero-frame-card {
          position: relative;
          background: rgba(43, 13, 5, 0.85);
          border: 1.5px solid rgba(251, 146, 60, 0.45);
          border-radius: var(--radius-xl);
          padding: 0.85rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 25px rgba(234, 88, 12, 0.25);
          backdrop-filter: blur(8px);
        }

        .hero-image-container {
          position: relative;
          width: 100%;
          border-radius: var(--radius-lg);
          overflow: hidden;
          aspect-ratio: 16 / 10;
        }

        .hero-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .hero-frame-card:hover .hero-main-img {
          transform: scale(1.03);
        }

        .hero-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 65%, rgba(43, 13, 5, 0.85) 100%);
          pointer-events: none;
        }

        /* Ornamental Corner Accents */
        .corner-accent {
          position: absolute;
          width: 14px;
          height: 14px;
          border-color: var(--gold-400);
          pointer-events: none;
        }

        .corner-accent.top-left {
          top: -2px;
          left: -2px;
          border-top: 3px solid var(--gold-400);
          border-left: 3px solid var(--gold-400);
          border-top-left-radius: 6px;
        }

        .corner-accent.top-right {
          top: -2px;
          right: -2px;
          border-top: 3px solid var(--gold-400);
          border-right: 3px solid var(--gold-400);
          border-top-right-radius: 6px;
        }

        .corner-accent.bottom-left {
          bottom: -2px;
          left: -2px;
          border-bottom: 3px solid var(--gold-400);
          border-left: 3px solid var(--gold-400);
          border-bottom-left-radius: 6px;
        }

        .corner-accent.bottom-right {
          bottom: -2px;
          right: -2px;
          border-bottom: 3px solid var(--gold-400);
          border-right: 3px solid var(--gold-400);
          border-bottom-right-radius: 6px;
        }

        /* Floating Badges */
        .floating-badge {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(43, 13, 5, 0.94);
          border: 1px solid rgba(251, 146, 60, 0.45);
          border-radius: var(--radius-md);
          padding: 0.65rem 1rem;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(12px);
          animation: floatSlow 5s ease-in-out infinite;
        }

        .badge-fleet {
          bottom: 25px;
          left: -15px;
          animation-delay: 0s;
        }

        .badge-support {
          top: 25px;
          right: -15px;
          animation-delay: 2.5s;
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .badge-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(212, 175, 55, 0.15);
          border: 1px solid rgba(212, 175, 55, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .badge-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: #ffffff;
        }

        .badge-subtitle {
          font-size: 0.72rem;
          color: var(--gold-300);
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .hero-heading {
            font-size: 2.8rem;
          }
          .badge-fleet {
            left: 10px;
          }
          .badge-support {
            right: 10px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 2.5rem;
            padding-bottom: 3.5rem;
          }
          .hero-heading {
            font-size: 2.15rem;
          }
          .hero-statement {
            font-size: 1.05rem;
          }
          .hidden-mobile {
            display: none;
          }
          .badge-fleet, .badge-support {
            position: static;
            margin-top: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};
