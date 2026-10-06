import { ShieldCheck, HeartHandshake, Clock, Phone, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import { BRAND_CONTACT } from '../types';
import { operationalBadges } from '../data/services';

interface AboutSectionProps {
  onOpenEnquiry: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="about" className="about-section section-spacing">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Visual Brand Card */}
          <div className="about-visual-column">
            <div className="about-card-frame">
              <div className="about-image-wrap">
                <img
                  src="/images/innova-crysta.jpg"
                  alt="SSAP Travels Premium Journey Experience"
                  className="about-image"
                  loading="lazy"
                />
                <div className="about-image-gradient"></div>
              </div>

              {/* Floating Quality Stamp */}
              <div className="about-quality-stamp">
                <div className="stamp-inner">
                  <Sparkles size={20} className="text-gold" />
                  <span className="stamp-title">BANGALORE</span>
                  <span className="stamp-sub">TRAVEL PARTNER</span>
                </div>
              </div>

              {/* Operational Badges Grid */}
              <div className="operational-badges-grid">
                {operationalBadges.map((badge, idx) => (
                  <div key={idx} className="op-badge-pill">
                    <CheckCircle size={15} className="text-gold" />
                    <div>
                      <div className="op-badge-title">{badge.title}</div>
                      <div className="op-badge-sub">{badge.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Factual Brand Story & Position */}
          <div className="about-text-column">
            <div className="section-eyebrow">
              <Sparkles size={14} className="text-gold" />
              <span>ABOUT SSAP TRAVELS</span>
            </div>

            <h2 className="about-heading">
              TRAVEL WITH COMFORT. <br />
              <span className="text-gold-accent">TRAVEL WITH CONFIDENCE.</span>
            </h2>

            <div className="ornament-divider-left">
              <div className="ornament-line-left"></div>
              <div className="ornament-diamond"></div>
            </div>

            <div className="about-body-text">
              <p className="lead-paragraph">
                <strong>SSAP Travels</strong> is a Bangalore-based travel service brand offering a range of travel solutions including luxury car rental, train and bus ticket booking, flight ticket booking, holiday and package tours, and selected pilgrimage travel services.
              </p>

              <p className="secondary-paragraph">
                From everyday travel arrangements to special spiritual journeys, SSAP Travels aims to make the travel planning process simple, comfortable and convenient.
              </p>
            </div>

            {/* Core Values Feature List */}
            <div className="about-pillars-grid">
              <div className="pillar-item">
                <div className="pillar-icon">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="pillar-title">Safe & Reliable</h4>
                  <p className="pillar-desc">Dependable arrangements for both city and long-distance journeys.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="pillar-title">Fast & Easy Booking</h4>
                  <p className="pillar-desc">Prompt responses across direct phone, WhatsApp, and email.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon">
                  <HeartHandshake size={20} />
                </div>
                <div>
                  <h4 className="pillar-title">Customer Support</h4>
                  <p className="pillar-desc">Dedicated assistance for individual travelers, families, and groups.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="pillar-title">Bangalore Rooted</h4>
                  <p className="pillar-desc">Serving travellers across Bangalore, Karnataka, and beyond.</p>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="about-action-row">
              <button onClick={onOpenEnquiry} className="btn-orange">
                Plan Your Journey
              </button>

              <a href={`tel:${BRAND_CONTACT.primaryPhoneRaw}`} className="about-call-link">
                <div className="about-call-circle">
                  <Phone size={16} />
                </div>
                <div>
                  <div className="about-call-sub">Have Questions? Call Us</div>
                  <div className="about-call-num">{BRAND_CONTACT.primaryPhone}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: linear-gradient(180deg, var(--ivory-200) 0%, var(--ivory-100) 100%);
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 4rem;
          align-items: center;
        }

        /* Left Column Frame */
        .about-visual-column {
          position: relative;
        }

        .about-card-frame {
          position: relative;
          background: #ffffff;
          border-radius: var(--radius-xl);
          padding: 1.25rem;
          border: 1.5px solid rgba(212, 175, 55, 0.35);
          box-shadow: 0 18px 45px rgba(67, 20, 7, 0.12);
        }

        .about-image-wrap {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          aspect-ratio: 4 / 3;
        }

        .about-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .about-image-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 70%, rgba(44, 14, 5, 0.65) 100%);
        }

        .about-quality-stamp {
          position: absolute;
          top: -15px;
          right: -15px;
          background: var(--grad-orange-deep);
          border: 2px solid var(--gold-400);
          border-radius: 50%;
          width: 110px;
          height: 110px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(234, 88, 12, 0.35);
        }

        .stamp-inner {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }

        .stamp-title {
          font-family: var(--font-heading);
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: var(--gold-300);
        }

        .stamp-sub {
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          color: #ffffff;
        }

        .operational-badges-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          margin-top: 1.25rem;
        }

        .op-badge-pill {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          background: var(--ivory-100);
          border: 1px solid rgba(212, 175, 55, 0.25);
          border-radius: var(--radius-md);
          padding: 0.6rem 0.75rem;
        }

        .op-badge-title {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--orange-900);
          letter-spacing: 0.5px;
        }

        .op-badge-sub {
          font-size: 0.68rem;
          color: var(--text-muted);
        }

        /* Right Column */
        .about-heading {
          font-size: 2.3rem;
          line-height: 1.25;
          margin-bottom: 0.5rem;
        }

        .text-gold-accent {
          color: var(--gold-600);
        }

        .ornament-divider-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .ornament-line-left {
          height: 1px;
          width: 50px;
          background: linear-gradient(90deg, var(--gold-500), transparent);
        }

        .about-body-text {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .lead-paragraph {
          font-size: 1.12rem;
          color: var(--orange-950);
          line-height: 1.7;
        }

        .secondary-paragraph {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.65;
        }

        .about-pillars-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin-bottom: 2.25rem;
        }

        .pillar-item {
          display: flex;
          gap: 0.85rem;
        }

        .pillar-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(234, 88, 12, 0.12);
          color: var(--orange-700);
          border: 1px solid rgba(234, 88, 12, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pillar-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 0.2rem;
        }

        .pillar-desc {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .about-action-row {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          flex-wrap: wrap;
        }

        .about-call-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }

        .about-call-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(212, 175, 55, 0.15);
          border: 1px solid var(--gold-400);
          color: var(--orange-800);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-call-sub {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .about-call-num {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--orange-950);
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .about-card-frame {
            max-width: 580px;
            margin: 0 auto;
          }
        }

        @media (max-width: 640px) {
          .about-heading {
            font-size: 1.8rem;
          }
          .about-pillars-grid {
            grid-template-columns: 1fr;
          }
          .operational-badges-grid {
            grid-template-columns: 1fr;
          }
          .about-quality-stamp {
            width: 90px;
            height: 90px;
            top: -10px;
            right: -10px;
          }
        }
      `}</style>
    </section>
  );
};
