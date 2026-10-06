import { useState } from 'react';
import { 
  Car, Train, Bus, Navigation, Plane, Compass, Sparkles, Crown, 
  ArrowRight, FileCheck 
} from 'lucide-react';
import { servicesData } from '../data/services';
import type { ServiceItem } from '../data/services';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [filter, setFilter] = useState<'all' | 'rental' | 'ticketing' | 'passport' | 'pilgrimage' | 'holiday'>('all');

  const filteredServices = filter === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === filter);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Car':
        return <Car size={24} />;
      case 'Train':
        return <Train size={24} />;
      case 'Bus':
        return <Bus size={24} />;
      case 'Navigation':
        return <Navigation size={24} />;
      case 'Plane':
        return <Plane size={24} />;
      case 'Compass':
        return <Compass size={24} />;
      case 'Sparkles':
        return <Sparkles size={24} />;
      case 'Crown':
        return <Crown size={24} />;
      case 'FileCheck':
        return <FileCheck size={24} />;
      default:
        return <Sparkles size={24} />;
    }
  };

  return (
    <section id="services" className="services-section section-spacing">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Sparkles size={14} className="text-gold" />
            <span>PORTFOLIO OF SERVICES</span>
          </div>
          <h2 className="section-title">OUR TRAVEL SERVICES</h2>
          <div className="ornament-divider">
            <div className="ornament-line"></div>
            <div className="ornament-diamond"></div>
            <div className="ornament-line"></div>
          </div>
          <p className="section-desc">
            Complete, dependable travel solutions tailored to modern business travellers, families, spiritual pilgrims, and international travelers.
          </p>

          {/* Filter Pills */}
          <div className="filter-pill-container">
            <button 
              className={`filter-pill ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Services ({servicesData.length})
            </button>
            <button 
              className={`filter-pill ${filter === 'rental' ? 'active' : ''}`}
              onClick={() => setFilter('rental')}
            >
              Car Rental
            </button>
            <button 
              className={`filter-pill ${filter === 'ticketing' ? 'active' : ''}`}
              onClick={() => setFilter('ticketing')}
            >
              Ticket Booking
            </button>
            <button 
              className={`filter-pill ${filter === 'passport' ? 'active' : ''}`}
              onClick={() => setFilter('passport')}
            >
              Passport Assistance
            </button>
            <button 
              className={`filter-pill ${filter === 'pilgrimage' ? 'active' : ''}`}
              onClick={() => setFilter('pilgrimage')}
            >
              Spiritual Pilgrimages
            </button>
            <button 
              className={`filter-pill ${filter === 'holiday' ? 'active' : ''}`}
              onClick={() => setFilter('holiday')}
            >
              Holiday Tours
            </button>
          </div>
        </div>

        {/* Services Grid (8 Services) */}
        <div className="services-grid">
          {filteredServices.map((service: ServiceItem) => (
            <div key={service.id} className="service-card luxury-card">
              {/* Card Image Banner */}
              {service.image && (
                <div className="service-card-media">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="service-card-img" 
                    loading="lazy" 
                  />
                  <div className="media-overlay"></div>
                  <span className="service-number-badge">{service.number}</span>
                  {service.tag && <span className="service-tag-chip">{service.tag}</span>}
                </div>
              )}

              {/* Card Header & Content */}
              <div className="service-card-body">
                <div className="service-icon-row">
                  <div className="service-icon-box">
                    {getServiceIcon(service.iconName)}
                  </div>
                  {!service.image && (
                    <span className="service-number-text">{service.number}</span>
                  )}
                </div>

                <h3 className="service-card-title">{service.title}</h3>
                
                {/* Short description specifically as required */}
                <p className="service-short-desc">{service.shortDesc}</p>
                <p className="service-full-details">{service.details}</p>

                {/* Card Footer with CTA */}
                <div className="service-card-footer">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="service-enquire-btn"
                    id={`enquire-${service.id}`}
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-section {
          background: linear-gradient(180deg, var(--ivory-100) 0%, var(--ivory-200) 100%);
          position: relative;
        }

        .filter-pill-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          margin-top: 1.75rem;
          flex-wrap: wrap;
        }

        .filter-pill {
          padding: 0.45rem 1.15rem;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--orange-900);
          background: #ffffff;
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: var(--radius-full);
          transition: all 0.2s ease;
        }

        .filter-pill:hover {
          border-color: var(--gold-500);
          background: var(--gold-50);
        }

        .filter-pill.active {
          background: var(--orange-900);
          color: var(--gold-300);
          border-color: var(--gold-400);
          box-shadow: 0 4px 14px rgba(234, 88, 12, 0.25);
        }

        /* Services Grid */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem;
        }

        .service-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: #ffffff;
          border: 1.5px solid rgba(212, 175, 55, 0.25);
          border-radius: var(--radius-lg);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(124, 45, 18, 0.12);
          border-color: var(--gold-500);
        }

        .service-card-media {
          position: relative;
          height: 165px;
          overflow: hidden;
        }

        .service-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .service-card:hover .service-card-img {
          transform: scale(1.05);
        }

        .media-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(44, 14, 5, 0.15) 0%, rgba(44, 14, 5, 0.75) 100%);
        }

        .service-number-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          font-family: var(--font-heading);
          font-size: 0.82rem;
          font-weight: 800;
          color: var(--gold-300);
          background: rgba(44, 14, 5, 0.85);
          border: 1px solid rgba(212, 175, 55, 0.5);
          border-radius: 6px;
          padding: 0.2rem 0.55rem;
          backdrop-filter: blur(4px);
        }

        .service-tag-chip {
          position: absolute;
          top: 12px;
          right: 12px;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          background: rgba(212, 175, 55, 0.85);
          color: var(--text-dark);
          border-radius: var(--radius-full);
          padding: 0.2rem 0.65rem;
          font-weight: 800;
        }

        .service-card-body {
          padding: 1.4rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .service-icon-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.85rem;
        }

        .service-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(234, 88, 12, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--orange-700);
          transition: all 0.25s ease;
        }

        .service-card:hover .service-icon-box {
          background: var(--orange-800);
          color: var(--gold-300);
          border-color: var(--gold-400);
        }

        .service-number-text {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--gold-600);
        }

        .service-card-title {
          font-size: 1.22rem;
          font-weight: 800;
          color: var(--text-dark);
          margin-bottom: 0.5rem;
          line-height: 1.25;
        }

        .service-short-desc {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--orange-800);
          margin-bottom: 0.55rem;
          line-height: 1.35;
        }

        .service-full-details {
          font-size: 0.84rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .service-card-footer {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid rgba(194, 65, 12, 0.12);
        }

        .service-enquire-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: var(--ivory-200);
          border: 1px solid rgba(212, 175, 55, 0.35);
          color: var(--orange-900);
          font-weight: 700;
          font-size: 0.86rem;
          padding: 0.65rem 1rem;
          border-radius: var(--radius-md);
          transition: all 0.2s ease;
        }

        .service-card:hover .service-enquire-btn {
          background: var(--grad-orange-deep);
          color: var(--gold-300);
          border-color: var(--gold-400);
        }

        @media (max-width: 1200px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
