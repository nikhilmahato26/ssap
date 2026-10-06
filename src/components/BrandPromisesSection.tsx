import { ShieldCheck, Clock, Tag, Zap, Smile, Award, CheckCircle, Headphones, Lock, CalendarCheck, Sparkles } from 'lucide-react';
import { brandPromises } from '../data/services';

export const BrandPromisesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck size={28} />;
      case 'Clock':
        return <Clock size={28} />;
      case 'Tag':
        return <Tag size={28} />;
      case 'Zap':
        return <Zap size={28} />;
      case 'Smile':
        return <Smile size={28} />;
      case 'Award':
        return <Award size={28} />;
      default:
        return <CheckCircle size={28} />;
    }
  };

  return (
    <section id="why-us" className="promises-section section-spacing">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Sparkles size={14} className="text-gold" />
            <span>OUR CORE PROMISES</span>
          </div>

          <h2 className="section-title">WHY TRAVEL WITH SSAP TRAVELS</h2>

          <div className="ornament-divider">
            <div className="ornament-line"></div>
            <div className="ornament-diamond"></div>
            <div className="ornament-line"></div>
          </div>

          <p className="section-desc">
            Built on trust, reliability, and convenience. Clear values guiding every ticket booked and every journey driven.
          </p>
        </div>

        {/* 6 Visual Service Values Grid */}
        <div className="promises-grid">
          {brandPromises.map((promise, idx) => (
            <div key={idx} className="promise-card luxury-card">
              <div className="promise-icon-wrap">
                {getIcon(promise.icon)}
              </div>
              <h3 className="promise-label">{promise.label}</h3>
              <p className="promise-desc">{promise.desc}</p>
            </div>
          ))}
        </div>

        {/* Operational Highlights Banner */}
        <div className="operational-banner">
          <div className="op-banner-grid">
            <div className="op-item">
              <div className="op-icon-box">
                <CalendarCheck size={24} className="text-gold" />
              </div>
              <div>
                <div className="op-title">EASY BOOKING</div>
                <div className="op-desc">Swift, hassle-free booking through phone, WhatsApp or email.</div>
              </div>
            </div>

            <div className="op-item">
              <div className="op-icon-box">
                <Lock size={24} className="text-gold" />
              </div>
              <div>
                <div className="op-title">100% SECURE</div>
                <div className="op-desc">Verified travel coordination and dependable operations.</div>
              </div>
            </div>

            <div className="op-item">
              <div className="op-icon-box">
                <Clock size={24} className="text-gold" />
              </div>
              <div>
                <div className="op-title">24/7 SERVICE</div>
                <div className="op-desc">Round-the-clock booking assistance for urgent travel.</div>
              </div>
            </div>

            <div className="op-item">
              <div className="op-icon-box">
                <Headphones size={24} className="text-gold" />
              </div>
              <div>
                <div className="op-title">CUSTOMER SUPPORT</div>
                <div className="op-desc">Personalized care for individual and family travellers.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .promises-section {
          background: linear-gradient(180deg, var(--ivory-200) 0%, var(--ivory-100) 100%);
          position: relative;
        }

        .promises-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 3.5rem;
        }

        .promise-card {
          padding: 2rem 1.75rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #ffffff;
          border: 1px solid rgba(212, 175, 55, 0.25);
          border-radius: var(--radius-lg);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .promise-card:hover {
          transform: translateY(-5px);
          border-color: var(--gold-500);
          box-shadow: 0 14px 35px rgba(4, 56, 40, 0.1);
        }

        .promise-icon-wrap {
          width: 58px;
          height: 58px;
          border-radius: 14px;
          background: rgba(6, 78, 59, 0.08);
          border: 1.5px solid rgba(212, 175, 55, 0.35);
          color: var(--emerald-850);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          transition: all 0.25s ease;
        }

        .promise-card:hover .promise-icon-wrap {
          background: var(--grad-emerald);
          color: var(--gold-300);
          border-color: var(--gold-400);
        }

        .promise-label {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: var(--text-dark);
          margin-bottom: 0.5rem;
        }

        .promise-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.55;
        }

        /* Operational Banner */
        .operational-banner {
          background: var(--grad-emerald);
          border: 1.5px solid rgba(212, 175, 55, 0.35);
          border-radius: var(--radius-xl);
          padding: 2.25rem 2rem;
          box-shadow: var(--shadow-emerald);
          color: #ffffff;
        }

        .op-banner-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem;
        }

        .op-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .op-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(212, 175, 55, 0.15);
          border: 1px solid var(--gold-400);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .op-title {
          font-size: 0.88rem;
          font-weight: 800;
          letter-spacing: 1px;
          color: var(--gold-300);
          margin-bottom: 0.25rem;
        }

        .op-desc {
          font-size: 0.78rem;
          color: rgba(250, 248, 242, 0.85);
          line-height: 1.4;
        }

        @media (max-width: 1024px) {
          .promises-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .op-banner-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .promises-grid {
            grid-template-columns: 1fr;
          }
          .op-banner-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
