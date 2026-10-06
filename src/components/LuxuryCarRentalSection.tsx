import { useState } from 'react';
import { 
  Users, Briefcase, CheckCircle2, Shield, Sparkles, 
  ArrowRight, Phone, Wind, ChevronRight 
} from 'lucide-react';
import { vehicles } from '../data/vehicles';
import type { Vehicle } from '../data/vehicles';
import { BRAND_CONTACT } from '../types';

interface LuxuryCarRentalSectionProps {
  onEnquireCar: (vehicleName?: string) => void;
}

export const LuxuryCarRentalSection: React.FC<LuxuryCarRentalSectionProps> = ({ onEnquireCar }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeVehicle, setActiveVehicle] = useState<Vehicle>(vehicles[0]);

  const categories = ['All', 'Luxury MPV', 'Executive Sedan', 'Luxury Van', 'Group Travel'];

  const filteredVehicles = selectedCategory === 'All'
    ? vehicles
    : vehicles.filter(v => v.category === selectedCategory);

  return (
    <section id="luxury-car-rental" className="car-rental-section section-spacing">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Sparkles size={14} className="text-gold" />
            <span>EXECUTIVE FLEET SERVICES</span>
          </div>

          <h2 className="section-title">LUXURY CAR RENTAL IN BANGALORE</h2>
          
          <div className="ornament-divider">
            <div className="ornament-line"></div>
            <div className="ornament-diamond"></div>
            <div className="ornament-line"></div>
          </div>

          <p className="section-desc">
            Travel comfortably around Bangalore and for your travel requirements with premium vehicle options.
          </p>
        </div>

        {/* Spotlight Showcase Banner */}
        <div className="car-spotlight-card emerald-banner">
          <div className="spotlight-grid">
            <div className="spotlight-content">
              <div className="spotlight-tag">
                <Sparkles size={14} />
                <span>SIGNATURE VEHICLE SPOTLIGHT</span>
              </div>

              <h3 className="spotlight-title">{activeVehicle ? activeVehicle.name : 'Toyota Innova Crysta'}</h3>
              
              <p className="spotlight-desc">
                {activeVehicle 
                  ? activeVehicle.description 
                  : 'The benchmark of road travel comfort in Bangalore. Spacious, reliable, and impeccably maintained with courteous uniformed chauffeurs.'}
              </p>

              {/* Specs Pills */}
              <div className="spotlight-specs-row">
                <div className="spec-pill">
                  <Users size={16} className="text-gold" />
                  <span>{activeVehicle ? activeVehicle.seating : '6+1 / 7+1 Seater'}</span>
                </div>
                <div className="spec-pill">
                  <Briefcase size={16} className="text-gold" />
                  <span>{activeVehicle ? activeVehicle.luggage : '4 Large Bags'}</span>
                </div>
                <div className="spec-pill">
                  <Wind size={16} className="text-gold" />
                  <span>Dual AC Comfort</span>
                </div>
              </div>

              {/* Feature Highlights */}
              <div className="spotlight-features-list">
                {(activeVehicle ? activeVehicle.features : [
                  'Plush Captain Seats',
                  'Dual Climate AC',
                  'Superior Highway Comfort',
                  'Spacious Legroom'
                ]).map((feat, idx) => (
                  <div key={idx} className="spotlight-feat-item">
                    <CheckCircle2 size={16} className="text-gold" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="spotlight-cta-row">
                <button
                  onClick={() => onEnquireCar(activeVehicle ? activeVehicle.name : 'Toyota Innova Crysta')}
                  className="btn-gold"
                  id="spotlight-car-cta"
                >
                  <span>Enquire for Car Rental</span>
                  <ArrowRight size={17} />
                </button>

                <a
                  href={`tel:${BRAND_CONTACT.primaryPhoneRaw}`}
                  className="spotlight-call-btn"
                  title="Direct Car Booking Helpline"
                >
                  <Phone size={16} className="text-gold" />
                  <span>{BRAND_CONTACT.primaryPhone}</span>
                </a>
              </div>
            </div>

            <div className="spotlight-visual">
              <div className="spotlight-image-frame">
                <img
                  src={activeVehicle ? activeVehicle.image : '/images/innova-crysta.jpg'}
                  alt={activeVehicle ? activeVehicle.name : 'Toyota Innova Crysta Luxury Travel'}
                  className="spotlight-image"
                />
                <div className="spotlight-image-glow"></div>
              </div>
              <div className="spotlight-caption">
                <Shield size={14} className="text-gold" />
                <span>Sanitized & Chauffeur Driven • Bangalore City & Outstation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fleet Category Filter Bar */}
        <div className="fleet-filter-bar">
          <div className="fleet-filter-label">Explore Our Flexible Fleet Options:</div>
          <div className="fleet-category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`fleet-tab ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Fleet Cards Grid */}
        <div className="fleet-grid">
          {filteredVehicles.map((car) => (
            <div
              key={car.id}
              className={`fleet-card luxury-card ${activeVehicle?.id === car.id ? 'is-active-card' : ''}`}
              onClick={() => setActiveVehicle(car)}
            >
              <div className="fleet-card-media">
                <img src={car.image} alt={car.name} className="fleet-img" loading="lazy" />
                {car.badge && <span className="fleet-badge">{car.badge}</span>}
                <span className="fleet-category-badge">{car.category}</span>
              </div>

              <div className="fleet-card-body">
                <div className="fleet-card-header">
                  <h4 className="fleet-card-title">{car.name}</h4>
                </div>

                <div className="fleet-specs-strip">
                  <div className="fleet-spec-item">
                    <Users size={14} />
                    <span>{car.seating}</span>
                  </div>
                  <div className="fleet-spec-item">
                    <Briefcase size={14} />
                    <span>{car.luggage}</span>
                  </div>
                </div>

                <p className="fleet-card-desc">{car.description}</p>

                <div className="fleet-features-preview">
                  {car.features.slice(0, 3).map((f, i) => (
                    <span key={i} className="fleet-mini-tag">
                      <CheckCircle2 size={12} className="text-gold" />
                      {f}
                    </span>
                  ))}
                </div>

                <div className="fleet-card-footer">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onEnquireCar(car.name);
                    }}
                    className="btn-gold fleet-enquire-btn"
                  >
                    <span>Enquire for Car Rental</span>
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bangalore Travel Use Cases Bar */}
        <div className="use-cases-box">
          <div className="use-case-item">
            <div className="use-case-number">01</div>
            <div>
              <div className="use-case-title">Kempegowda Airport Transfers</div>
              <div className="use-case-desc">Punctual pickup & drop services from Bangalore Airport (BLR).</div>
            </div>
          </div>
          <div className="use-case-item">
            <div className="use-case-number">02</div>
            <div>
              <div className="use-case-title">City Executive Travel</div>
              <div className="use-case-desc">Hourly and day packages for business meetings across Bangalore.</div>
            </div>
          </div>
          <div className="use-case-item">
            <div className="use-case-number">03</div>
            <div>
              <div className="use-case-title">Outstation & Temple Yatras</div>
              <div className="use-case-desc">Smooth highway travel to Tirupati, Mysore, Coorg, and beyond.</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .car-rental-section {
          background-color: var(--ivory-200);
          position: relative;
        }

        /* Spotlight Banner */
        .car-spotlight-card {
          margin-bottom: 3.5rem;
          padding: 2.75rem 2.5rem;
        }

        .spotlight-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .spotlight-content {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .spotlight-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: var(--gold-300);
          background: rgba(212, 175, 55, 0.15);
          padding: 0.35rem 0.9rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(212, 175, 55, 0.3);
          width: fit-content;
        }

        .spotlight-title {
          font-size: 2.4rem;
          color: #ffffff;
          line-height: 1.2;
        }

        .spotlight-desc {
          font-size: 1.05rem;
          color: rgba(250, 248, 242, 0.9);
          line-height: 1.6;
        }

        .spotlight-specs-row {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex-wrap: wrap;
        }

        .spec-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(4, 56, 40, 0.85);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: var(--radius-md);
          padding: 0.45rem 0.85rem;
          font-size: 0.84rem;
          font-weight: 700;
          color: #ffffff;
        }

        .spotlight-features-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.65rem;
        }

        .spotlight-feat-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          color: rgba(250, 248, 242, 0.95);
        }

        .spotlight-cta-row {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-top: 0.5rem;
          flex-wrap: wrap;
        }

        .spotlight-call-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gold-300);
          font-weight: 700;
          font-size: 0.92rem;
          padding: 0.8rem 1.2rem;
          border-radius: var(--radius-md);
          border: 1px solid rgba(212, 175, 55, 0.35);
          background: rgba(212, 175, 55, 0.08);
          transition: all 0.2s ease;
        }

        .spotlight-call-btn:hover {
          background: rgba(212, 175, 55, 0.2);
          border-color: var(--gold-400);
          color: #ffffff;
        }

        .spotlight-visual {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.85rem;
        }

        .spotlight-image-frame {
          position: relative;
          width: 100%;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1.5px solid rgba(212, 175, 55, 0.4);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
          aspect-ratio: 16 / 10;
        }

        .spotlight-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .spotlight-image-frame:hover .spotlight-image {
          transform: scale(1.04);
        }

        .spotlight-image-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 40%, rgba(2, 32, 22, 0.5) 100%);
          pointer-events: none;
        }

        .spotlight-caption {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
          color: var(--gold-300);
          font-weight: 600;
        }

        /* Filter Tabs */
        .fleet-filter-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        }

        .fleet-filter-label {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--emerald-950);
          letter-spacing: 0.3px;
        }

        .fleet-category-tabs {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .fleet-tab {
          padding: 0.45rem 1rem;
          font-size: 0.84rem;
          font-weight: 700;
          border-radius: var(--radius-md);
          background: #ffffff;
          color: var(--emerald-900);
          border: 1px solid rgba(212, 175, 55, 0.25);
          transition: all 0.2s ease;
        }

        .fleet-tab:hover {
          border-color: var(--gold-500);
          background: var(--gold-50);
        }

        .fleet-tab.active {
          background: var(--emerald-900);
          color: var(--gold-300);
          border-color: var(--gold-400);
        }

        /* Fleet Grid */
        .fleet-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
          margin-bottom: 3.5rem;
        }

        .fleet-card {
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }

        .fleet-card.is-active-card {
          border-color: var(--gold-500);
          box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.4), var(--shadow-md);
        }

        .fleet-card-media {
          position: relative;
          height: 190px;
          border-top-left-radius: var(--radius-lg);
          border-top-right-radius: var(--radius-lg);
          overflow: hidden;
        }

        .fleet-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .fleet-card:hover .fleet-img {
          transform: scale(1.05);
        }

        .fleet-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.5px;
          color: #04261b;
          background: var(--grad-gold);
          border-radius: var(--radius-full);
          padding: 0.2rem 0.65rem;
          box-shadow: 0 2px 6px rgba(0,0,0,0.25);
        }

        .fleet-category-badge {
          position: absolute;
          bottom: 10px;
          right: 10px;
          font-size: 0.7rem;
          font-weight: 700;
          color: #ffffff;
          background: rgba(4, 56, 40, 0.85);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(212, 175, 55, 0.4);
          border-radius: var(--radius-full);
          padding: 0.2rem 0.6rem;
        }

        .fleet-card-body {
          padding: 1.35rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .fleet-card-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-dark);
          margin-bottom: 0.4rem;
        }

        .fleet-specs-strip {
          display: flex;
          gap: 1rem;
          margin-bottom: 0.75rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(6, 78, 59, 0.08);
        }

        .fleet-spec-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--emerald-850);
        }

        .fleet-card-desc {
          font-size: 0.84rem;
          color: var(--text-muted);
          line-height: 1.45;
          margin-bottom: 1rem;
          flex-grow: 1;
        }

        .fleet-features-preview {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.25rem;
        }

        .fleet-mini-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.72rem;
          font-weight: 600;
          background: var(--ivory-200);
          color: var(--emerald-900);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          border: 1px solid rgba(212, 175, 55, 0.2);
        }

        .fleet-card-footer {
          margin-top: auto;
        }

        .fleet-enquire-btn {
          width: 100%;
          padding: 0.65rem 1rem;
          font-size: 0.86rem;
        }

        /* Use Cases Box */
        .use-cases-box {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          background: #ffffff;
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: var(--radius-lg);
          padding: 1.5rem 2rem;
          box-shadow: var(--shadow-sm);
        }

        .use-case-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .use-case-number {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 900;
          color: var(--gold-600);
          line-height: 1;
        }

        .use-case-title {
          font-size: 0.92rem;
          font-weight: 800;
          color: var(--emerald-950);
          margin-bottom: 0.2rem;
        }

        .use-case-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        @media (max-width: 1024px) {
          .spotlight-grid {
            grid-template-columns: 1fr;
          }
          .fleet-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .use-cases-box {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        @media (max-width: 640px) {
          .car-spotlight-card {
            padding: 1.5rem 1.25rem;
          }
          .spotlight-title {
            font-size: 1.8rem;
          }
          .fleet-grid {
            grid-template-columns: 1fr;
          }
          .spotlight-features-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
