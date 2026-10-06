import { Sparkles, Crown, CheckCircle2, AlertCircle, Phone, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { pilgrimagesData } from '../data/pilgrimages';
import type { PilgrimageSpecial } from '../data/pilgrimages';
import { BRAND_CONTACT } from '../types';

interface PilgrimageSpecialSectionProps {
  onSelectPilgrimage: (title: string) => void;
}

export const PilgrimageSpecialSection: React.FC<PilgrimageSpecialSectionProps> = ({ onSelectPilgrimage }) => {
  return (
    <section id="pilgrimage-tours" className="pilgrimage-section section-spacing">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow spiritual-eyebrow">
            <Crown size={14} className="text-gold" />
            <span>SACRED PILGRIMAGE SERVICES</span>
          </div>

          <h2 className="section-title">
            SPIRITUAL JOURNEYS & VIP DARSHAN ASSISTANCE
          </h2>

          <div className="ornament-divider">
            <div className="ornament-line"></div>
            <div className="ornament-diamond"></div>
            <div className="ornament-line"></div>
          </div>

          <p className="section-desc">
            Reverent, comfortable pilgrimage journeys from Bangalore. Dedicated travel coordination, courteous chauffeurs, and customized family travel options.
          </p>
        </div>

        {/* Two Featured Pilgrimage Showcase Cards */}
        <div className="pilgrimage-grid">
          {pilgrimagesData.map((tour: PilgrimageSpecial) => (
            <div key={tour.id} className="pilgrimage-card">
              {/* Media Banner with Gold Arch Effect */}
              <div className="pilgrimage-media-box">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="pilgrimage-img"
                  loading="lazy"
                />
                <div className="pilgrimage-gradient"></div>
                <div className="pilgrimage-badge-tag">
                  <Sparkles size={13} className="text-gold" />
                  <span>{tour.badge}</span>
                </div>
              </div>

              {/* Pilgrimage Body */}
              <div className="pilgrimage-body">
                <div className="pilgrimage-header-group">
                  <span className="pilgrimage-subtitle">{tour.subtitle}</span>
                  <h3 className="pilgrimage-title">{tour.title}</h3>
                </div>

                <p className="pilgrimage-description">{tour.description}</p>

                {/* Key Points */}
                <div className="pilgrimage-points-box">
                  <div className="points-title">Journey Highlights & Assistance:</div>
                  <ul className="points-list">
                    {tour.keyPoints.map((point, idx) => (
                      <li key={idx} className="point-item">
                        <CheckCircle2 size={16} className="text-gold-solid point-icon" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Factual Disclaimer Notice */}
                <div className="pilgrimage-notice-box">
                  <AlertCircle size={15} className="notice-icon" />
                  <span className="notice-text">{tour.notice}</span>
                </div>

                {/* Card Action Area */}
                <div className="pilgrimage-card-footer">
                  <button
                    onClick={() => onSelectPilgrimage(tour.title)}
                    className="btn-gold pilgrimage-action-btn"
                    id={`pilgrimage-btn-${tour.id}`}
                  >
                    <span>{tour.ctaText}</span>
                    <ArrowRight size={16} />
                  </button>

                  <a
                    href={`tel:${BRAND_CONTACT.primaryPhoneRaw}`}
                    className="pilgrimage-call-btn"
                    title={`Call for ${tour.title}`}
                  >
                    <Phone size={15} />
                    <span>Call Helpline</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pilgrimage Trust Banner */}
        <div className="pilgrimage-trust-banner">
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon-wrap">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4 className="trust-title">Doorstep Bangalore Pickup</h4>
                <p className="trust-desc">Begin your sacred yatra with hassle-free home pickup anywhere in Bangalore.</p>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon-wrap">
                <Sparkles size={22} />
              </div>
              <div>
                <h4 className="trust-title">Senior-Friendly Comfort</h4>
                <p className="trust-desc">Spacious AC Innova Crysta & Tempo Travellers with gentle, patient chauffeurs.</p>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon-wrap">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="trust-title">Dedicated Coordination</h4>
                <p className="trust-desc">Personalized guidance to ensure a peaceful and spiritually uplifting experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .pilgrimage-section {
          background: linear-gradient(180deg, #faf7ee 0%, #f4ede0 50%, #faf7ee 100%);
          position: relative;
        }

        .spiritual-eyebrow {
          background: rgba(179, 134, 18, 0.12);
          border-color: rgba(179, 134, 18, 0.35);
          color: var(--gold-700);
        }

        .pilgrimage-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.25rem;
          margin-bottom: 3.5rem;
        }

        .pilgrimage-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1.5px solid rgba(212, 175, 55, 0.35);
          box-shadow: 0 16px 40px rgba(4, 56, 40, 0.08);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .pilgrimage-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 48px rgba(4, 56, 40, 0.14);
          border-color: var(--gold-500);
        }

        .pilgrimage-media-box {
          position: relative;
          height: 230px;
          overflow: hidden;
        }

        .pilgrimage-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .pilgrimage-card:hover .pilgrimage-img {
          transform: scale(1.05);
        }

        .pilgrimage-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(2, 32, 22, 0.8) 100%);
        }

        .pilgrimage-badge-tag {
          position: absolute;
          top: 14px;
          left: 14px;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(4, 56, 40, 0.9);
          border: 1px solid var(--gold-400);
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          padding: 0.3rem 0.8rem;
          border-radius: var(--radius-full);
          backdrop-filter: blur(6px);
        }

        .pilgrimage-body {
          padding: 1.85rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .pilgrimage-header-group {
          margin-bottom: 0.85rem;
        }

        .pilgrimage-subtitle {
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--gold-600);
          display: block;
          margin-bottom: 0.35rem;
        }

        .pilgrimage-title {
          font-size: 1.5rem;
          color: var(--text-dark);
          line-height: 1.25;
        }

        .pilgrimage-description {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .pilgrimage-points-box {
          background: var(--ivory-100);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: var(--radius-md);
          padding: 1.15rem;
          margin-bottom: 1.25rem;
        }

        .points-title {
          font-size: 0.82rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          color: var(--emerald-900);
          margin-bottom: 0.75rem;
        }

        .points-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .point-item {
          display: flex;
          align-items: flex-start;
          gap: 0.55rem;
          font-size: 0.86rem;
          color: var(--text-body);
          line-height: 1.45;
        }

        .text-gold-solid {
          color: var(--gold-600);
        }

        .point-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .pilgrimage-notice-box {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          background: rgba(212, 175, 55, 0.09);
          border: 1px dashed rgba(212, 175, 55, 0.4);
          border-radius: var(--radius-sm);
          padding: 0.75rem 0.9rem;
          margin-bottom: 1.5rem;
        }

        .notice-icon {
          color: var(--gold-600);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .notice-text {
          font-size: 0.76rem;
          color: var(--text-muted);
          line-height: 1.4;
          font-style: italic;
        }

        .pilgrimage-card-footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .pilgrimage-action-btn {
          flex: 1;
          padding: 0.75rem 1.25rem;
          font-size: 0.9rem;
        }

        .pilgrimage-call-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.75rem 1.15rem;
          border-radius: var(--radius-md);
          border: 1.5px solid var(--emerald-800);
          color: var(--emerald-800);
          font-weight: 700;
          font-size: 0.86rem;
          background: transparent;
          transition: all 0.2s ease;
        }

        .pilgrimage-call-btn:hover {
          background: var(--emerald-800);
          color: var(--gold-300);
        }

        /* Pilgrimage Trust Banner */
        .pilgrimage-trust-banner {
          background: var(--grad-emerald);
          border: 1.5px solid rgba(212, 175, 55, 0.4);
          border-radius: var(--radius-lg);
          padding: 2rem 2.5rem;
          box-shadow: var(--shadow-emerald);
          color: #ffffff;
        }

        .trust-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .trust-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .trust-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(212, 175, 55, 0.15);
          border: 1px solid var(--gold-400);
          color: var(--gold-300);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .trust-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 0.3rem;
        }

        .trust-desc {
          font-size: 0.84rem;
          color: rgba(250, 248, 242, 0.85);
          line-height: 1.45;
        }

        @media (max-width: 1024px) {
          .pilgrimage-grid {
            grid-template-columns: 1fr;
          }
          .trust-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        @media (max-width: 640px) {
          .pilgrimage-title {
            font-size: 1.3rem;
          }
          .pilgrimage-card-footer {
            flex-direction: column;
          }
          .pilgrimage-action-btn, .pilgrimage-call-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};
