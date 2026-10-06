import { Car, Train, Bus, Plane, ArrowRight } from 'lucide-react';
import { quickServiceBarItems } from '../data/services';

interface QuickServiceBarProps {
  onSelectService: (serviceName: string) => void;
}

export const QuickServiceBar: React.FC<QuickServiceBarProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Car':
        return <Car size={26} className="service-bar-icon" />;
      case 'Train':
        return <Train size={26} className="service-bar-icon" />;
      case 'Bus':
        return <Bus size={26} className="service-bar-icon" />;
      case 'Plane':
        return <Plane size={26} className="service-bar-icon" />;
      default:
        return <Car size={26} className="service-bar-icon" />;
    }
  };

  return (
    <section className="quick-service-bar-section">
      <div className="container">
        <div className="quick-bar-wrapper">
          <div className="quick-bar-grid">
            {quickServiceBarItems.map((item) => (
              <div
                key={item.id}
                className="quick-service-card"
                onClick={() => onSelectService(item.title)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onSelectService(item.title);
                  }
                }}
              >
                <div className="card-top-row">
                  <div className="icon-container">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="card-badge">{item.badge}</span>
                </div>

                <div className="card-body-text">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">{item.desc}</p>
                </div>

                <div className="card-footer-action">
                  <span className="action-text">Enquire Now</span>
                  <div className="action-arrow-circle">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .quick-service-bar-section {
          position: relative;
          margin-top: -38px;
          z-index: 25;
        }

        .quick-bar-wrapper {
          background: #ffffff;
          border-radius: var(--radius-xl);
          padding: 1.5rem;
          box-shadow: 0 16px 45px rgba(4, 56, 40, 0.14);
          border: 1.5px solid rgba(212, 175, 55, 0.35);
        }

        .quick-bar-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        .quick-service-card {
          background: var(--ivory-100);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: var(--radius-lg);
          padding: 1.35rem 1.15rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .quick-service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--grad-gold);
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .quick-service-card:hover {
          transform: translateY(-4px);
          background: #ffffff;
          border-color: var(--gold-500);
          box-shadow: 0 10px 25px rgba(4, 56, 40, 0.1);
        }

        .quick-service-card:hover::before {
          opacity: 1;
        }

        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .icon-container {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(6, 78, 59, 0.08);
          border: 1px solid rgba(6, 78, 59, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--emerald-800);
          transition: all 0.25s ease;
        }

        .quick-service-card:hover .icon-container {
          background: var(--emerald-800);
          color: var(--gold-300);
          border-color: var(--gold-500);
        }

        .card-badge {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: var(--gold-700);
          background: rgba(212, 175, 55, 0.14);
          padding: 0.25rem 0.55rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(212, 175, 55, 0.25);
        }

        .card-body-text {
          margin-bottom: 1.25rem;
        }

        .card-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-dark);
          margin-bottom: 0.35rem;
          line-height: 1.25;
        }

        .card-desc {
          font-size: 0.86rem;
          color: var(--text-muted);
          line-height: 1.45;
        }

        .card-footer-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(6, 78, 59, 0.08);
        }

        .action-text {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--emerald-800);
          letter-spacing: 0.3px;
          transition: color 0.2s ease;
        }

        .quick-service-card:hover .action-text {
          color: var(--gold-600);
        }

        .action-arrow-circle {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: rgba(6, 78, 59, 0.08);
          color: var(--emerald-800);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .quick-service-card:hover .action-arrow-circle {
          background: var(--gold-500);
          color: #04261b;
          transform: translateX(3px);
        }

        @media (max-width: 1024px) {
          .quick-bar-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .quick-service-bar-section {
            margin-top: 1rem;
          }
          .quick-bar-wrapper {
            padding: 1rem;
          }
          .quick-bar-grid {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
};
