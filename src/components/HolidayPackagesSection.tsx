import { Compass, MapPin, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface HolidayPackagesSectionProps {
  onSelectPackage: (packageName: string) => void;
}

export const HolidayPackagesSection: React.FC<HolidayPackagesSectionProps> = ({ onSelectPackage }) => {
  const holidayCircuits = [
    {
      title: 'Misty Hills & Nature Retreats',
      destinations: 'Coorg • Ooty • Wayanad • Chikmagalur',
      desc: 'Rejuvenating hill escapes from Bangalore featuring lush tea plantations, scenic waterfalls, cool climate, and comfortable chauffeur-driven travel.',
      tag: 'Nature & Hills',
      image: '/images/holiday-tours.jpg'
    },
    {
      title: 'Karnataka Heritage & Royal Palaces',
      destinations: 'Mysore • Hampi • Belur • Halebidu',
      desc: 'Immerse yourself in grand Dravidian architecture, royal palaces, UNESCO World Heritage monuments, and historical South Indian craftsmanship.',
      tag: 'Heritage Circuit',
      image: '/images/temple-pilgrimage.jpg'
    },
    {
      title: 'South India Coastal & Temple Trail',
      destinations: 'Gokarna • Murudeshwar • Udupi • Mangalore',
      desc: 'Breathtaking coastal highways, serene beaches, coastal delicacies, and ancient temple darshans seamlessly woven into a relaxed family vacation.',
      tag: 'Coastal & Temples',
      image: '/images/hero-banner.jpg'
    }
  ];

  return (
    <section id="holiday-packages" className="holiday-section section-spacing">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Compass size={14} className="text-gold" />
            <span>HOLIDAY & PACKAGE TOURS</span>
          </div>

          <h2 className="section-title">HOLIDAY & PACKAGE TOUR BOOKING</h2>

          <div className="ornament-divider">
            <div className="ornament-line"></div>
            <div className="ornament-diamond"></div>
            <div className="ornament-line"></div>
          </div>

          <p className="section-desc">
            Complete holiday and package tour booking assistance originating from Bangalore. Personalized itineraries crafted for family vacations, corporate retreats, and group travels.
          </p>
        </div>

        {/* Holiday Cards Grid */}
        <div className="holiday-grid">
          {holidayCircuits.map((item, idx) => (
            <div key={idx} className="holiday-card luxury-card">
              <div className="holiday-media">
                <img src={item.image} alt={item.title} className="holiday-img" loading="lazy" />
                <div className="holiday-overlay"></div>
                <span className="holiday-tag-chip">{item.tag}</span>
              </div>

              <div className="holiday-body">
                <div className="destinations-pill">
                  <MapPin size={13} className="text-gold" />
                  <span>{item.destinations}</span>
                </div>

                <h3 className="holiday-title">{item.title}</h3>
                <p className="holiday-desc">{item.desc}</p>

                <div className="holiday-features-list">
                  <div className="holiday-feat">
                    <CheckCircle2 size={14} className="text-gold" />
                    <span>Dedicated AC Vehicle & Chauffeur</span>
                  </div>
                  <div className="holiday-feat">
                    <CheckCircle2 size={14} className="text-gold" />
                    <span>Flexible Bangalore Departure Dates</span>
                  </div>
                </div>

                <div className="holiday-footer">
                  <button
                    onClick={() => onSelectPackage(item.title)}
                    className="holiday-btn"
                  >
                    <span>Enquire for Package Tour</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Tour Inquiry Box */}
        <div className="custom-tour-banner emerald-banner">
          <div className="custom-tour-flex">
            <div>
              <div className="custom-banner-eyebrow">
                <Sparkles size={14} />
                <span>NEED A CUSTOM ITINERARY?</span>
              </div>
              <h3 className="custom-banner-title">Design Your Family or Corporate Tour</h3>
              <p className="custom-banner-desc">
                Have specific destinations, dates, or group size in mind? Speak directly with SSAP Travels for tailored transportation and package tour assistance.
              </p>
            </div>

            <button
              onClick={() => onSelectPackage('Custom Holiday Package')}
              className="btn-gold custom-tour-btn"
            >
              <span>Enquire for Custom Package</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .holiday-section {
          background-color: var(--ivory-100);
          position: relative;
        }

        .holiday-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
          margin-bottom: 3.5rem;
        }

        .holiday-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .holiday-media {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .holiday-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .holiday-card:hover .holiday-img {
          transform: scale(1.05);
        }

        .holiday-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(2, 32, 22, 0.75) 100%);
        }

        .holiday-tag-chip {
          position: absolute;
          top: 12px;
          left: 12px;
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          background: rgba(4, 56, 40, 0.85);
          color: var(--gold-300);
          border: 1px solid rgba(212, 175, 55, 0.4);
          border-radius: var(--radius-full);
          padding: 0.25rem 0.65rem;
          backdrop-filter: blur(4px);
        }

        .holiday-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .destinations-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.76rem;
          font-weight: 700;
          color: var(--gold-700);
          background: rgba(212, 175, 55, 0.12);
          border: 1px solid rgba(212, 175, 55, 0.25);
          padding: 0.3rem 0.65rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.85rem;
          width: fit-content;
        }

        .holiday-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-dark);
          margin-bottom: 0.5rem;
        }

        .holiday-desc {
          font-size: 0.86rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .holiday-features-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-bottom: 1.25rem;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(6, 78, 59, 0.08);
        }

        .holiday-feat {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.8rem;
          color: var(--emerald-900);
          font-weight: 600;
        }

        .holiday-footer {
          margin-top: auto;
        }

        .holiday-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: var(--ivory-200);
          border: 1px solid rgba(212, 175, 55, 0.35);
          color: var(--emerald-900);
          font-weight: 700;
          font-size: 0.86rem;
          padding: 0.7rem 1rem;
          border-radius: var(--radius-md);
          transition: all 0.2s ease;
        }

        .holiday-card:hover .holiday-btn {
          background: var(--grad-emerald);
          color: var(--gold-300);
          border-color: var(--gold-400);
        }

        /* Custom Tour Banner */
        .custom-tour-banner {
          padding: 2.25rem 2.5rem;
        }

        .custom-tour-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .custom-banner-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: var(--gold-300);
          margin-bottom: 0.5rem;
        }

        .custom-banner-title {
          font-size: 1.8rem;
          color: #ffffff;
          margin-bottom: 0.4rem;
        }

        .custom-banner-desc {
          font-size: 0.95rem;
          color: rgba(250, 248, 242, 0.88);
          max-width: 620px;
        }

        .custom-tour-btn {
          padding: 0.9rem 1.8rem;
          white-space: nowrap;
        }

        @media (max-width: 1024px) {
          .holiday-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .holiday-grid {
            grid-template-columns: 1fr;
          }
          .custom-tour-banner {
            padding: 1.5rem;
          }
          .custom-banner-title {
            font-size: 1.4rem;
          }
          .custom-tour-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
