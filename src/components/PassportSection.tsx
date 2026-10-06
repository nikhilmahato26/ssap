import { FileCheck, RefreshCw, Clock, Phone, MessageSquare, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { BRAND_CONTACT } from '../types';

interface PassportSectionProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export const PassportSection: React.FC<PassportSectionProps> = ({ onOpenEnquiry }) => {
  const handleWhatsApp = () => {
    const text = `Hello SSAP Travels Bangalore, I need assistance with Passport application / renewal. Please share the details.`;
    window.open(`https://wa.me/${BRAND_CONTACT.primaryPhoneRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const passportFeatures = [
    {
      icon: <FileCheck size={24} className="text-orange" />,
      title: 'New Passport Application',
      desc: 'Complete guidance for fresh adult and minor passport applications, online form submission, and documentation checklist.'
    },
    {
      icon: <RefreshCw size={24} className="text-orange" />,
      title: 'Passport Renewal & Reissue',
      desc: 'Swift renewal assistance for expired passports, exhaustion of pages, validity extensions, and address/name corrections.'
    },
    {
      icon: <Clock size={24} className="text-orange" />,
      title: 'Tatkal & Urgent Appointments',
      desc: 'Priority appointment scheduling assistance for urgent international travel plans and emergency departures.'
    },
    {
      icon: <ShieldCheck size={24} className="text-orange" />,
      title: 'Document Pre-Verification',
      desc: 'Pre-checking identity proofs, birth certificates, and annexures to prevent delays or rejection at the Seva Kendra.'
    }
  ];

  return (
    <section id="passport-services" className="passport-section section-spacing">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow passport-eyebrow">
            <Sparkles size={14} className="text-orange" />
            <span>DOCUMENTATION & SEVA ASSISTANCE</span>
          </div>

          <h2 className="section-title">
            WE HELP APPLYING NEW PASSPORT & RENEWAL
          </h2>

          <div className="ornament-divider">
            <div className="ornament-line"></div>
            <div className="ornament-diamond"></div>
            <div className="ornament-line"></div>
          </div>

          <p className="section-desc">
            Navigating passport formalities is smooth and stress-free with SSAP Travels Bangalore. From fresh passport submissions to fast renewals, we guide you at every step.
          </p>
        </div>

        {/* Master Showcase Box */}
        <div className="passport-banner">
          <div className="passport-banner-grid">
            {/* Visual Media Column */}
            <div className="passport-media-column">
              <div className="passport-image-card">
                <img
                  src="/images/passport-service.jpg"
                  alt="Indian Passport Application and Renewal Assistance Bangalore"
                  className="passport-hero-img"
                  loading="lazy"
                />
                <div className="passport-media-overlay"></div>
                <div className="passport-seal-badge">
                  <span className="seal-tag">BANGALORE DESK</span>
                  <span className="seal-bold">NEW & RENEWAL</span>
                </div>
              </div>

              <div className="passport-steps-strip">
                <div className="step-pill">
                  <span className="step-num">1</span>
                  <span>Share Details</span>
                </div>
                <span className="step-arrow">→</span>
                <div className="step-pill">
                  <span className="step-num">2</span>
                  <span>Doc Review</span>
                </div>
                <span className="step-arrow">→</span>
                <div className="step-pill">
                  <span className="step-num">3</span>
                  <span>Slot Booking</span>
                </div>
              </div>
            </div>

            {/* Feature Content Column */}
            <div className="passport-content-column">
              <div className="passport-badge-sub">
                <FileCheck size={16} />
                <span>End-to-End Passport Facilitation</span>
              </div>

              <h3 className="passport-subheading">
                Hassle-Free Documentation & Appointment Booking
              </h3>

              <p className="passport-paragraph">
                Whether applying for your family’s first passport, updating child passports, or renewing your travel document before an upcoming flight or holiday, our experienced travel executives ensure error-free online submissions and timely appointment slots across Bangalore Passport Seva Kendras (PSK / POPSK).
              </p>

              {/* 4 Feature Items */}
              <div className="passport-features-grid">
                {passportFeatures.map((item, idx) => (
                  <div key={idx} className="passport-feat-card">
                    <div className="feat-icon-box">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="feat-title">{item.title}</h4>
                      <p className="feat-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="passport-cta-row">
                <button
                  onClick={() => onOpenEnquiry('Passport Assistance (New & Renewal)')}
                  className="btn-orange passport-primary-btn"
                >
                  <span>Apply for Passport Assistance</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="btn-whatsapp-custom"
                  title="WhatsApp Passport Enquiry"
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp Enquiry</span>
                </button>

                <a
                  href={`tel:${BRAND_CONTACT.primaryPhoneRaw}`}
                  className="passport-call-link"
                >
                  <Phone size={15} />
                  <span>{BRAND_CONTACT.primaryPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .passport-section {
          background: linear-gradient(180deg, var(--ivory-200) 0%, var(--ivory-100) 100%);
          position: relative;
        }

        .passport-eyebrow {
          background: rgba(234, 88, 12, 0.12);
          border-color: rgba(234, 88, 12, 0.35);
          color: var(--orange-700);
        }

        .text-orange {
          color: var(--orange-600);
        }

        .passport-banner {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1.5px solid rgba(234, 88, 12, 0.3);
          box-shadow: 0 16px 45px rgba(234, 88, 12, 0.1);
          padding: 2.75rem 2.5rem;
          overflow: hidden;
        }

        .passport-banner-grid {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 3.5rem;
          align-items: center;
        }

        /* Media Column */
        .passport-media-column {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .passport-image-card {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          aspect-ratio: 4 / 3;
          border: 1.5px solid rgba(234, 88, 12, 0.25);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
        }

        .passport-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .passport-image-card:hover .passport-hero-img {
          transform: scale(1.04);
        }

        .passport-media-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 60%, rgba(194, 65, 12, 0.6) 100%);
        }

        .passport-seal-badge {
          position: absolute;
          bottom: 14px;
          left: 14px;
          background: rgba(4, 56, 40, 0.92);
          border: 1.5px solid var(--gold-400);
          border-radius: var(--radius-md);
          padding: 0.5rem 0.85rem;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .seal-tag {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 1.2px;
          color: var(--gold-300);
        }

        .seal-bold {
          font-family: var(--font-heading);
          font-size: 0.88rem;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: 0.5px;
        }

        .passport-steps-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--ivory-200);
          border: 1px solid rgba(234, 88, 12, 0.2);
          border-radius: var(--radius-md);
          padding: 0.65rem 0.9rem;
        }

        .step-pill {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--emerald-950);
        }

        .step-num {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--orange-600);
          color: #ffffff;
          font-size: 0.7rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-arrow {
          color: var(--orange-500);
          font-weight: 800;
        }

        /* Content Column */
        .passport-content-column {
          display: flex;
          flex-direction: column;
        }

        .passport-badge-sub {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--orange-700);
          background: rgba(234, 88, 12, 0.12);
          border: 1px solid rgba(234, 88, 12, 0.3);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          width: fit-content;
          margin-bottom: 0.85rem;
        }

        .passport-subheading {
          font-size: 1.85rem;
          color: var(--text-dark);
          line-height: 1.25;
          margin-bottom: 0.75rem;
        }

        .passport-paragraph {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .passport-features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .passport-feat-card {
          display: flex;
          gap: 0.85rem;
          background: var(--ivory-100);
          border: 1px solid rgba(234, 88, 12, 0.18);
          border-radius: var(--radius-md);
          padding: 1rem;
        }

        .feat-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(234, 88, 12, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .feat-title {
          font-size: 0.92rem;
          font-weight: 800;
          color: var(--emerald-950);
          margin-bottom: 0.25rem;
        }

        .feat-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.45;
        }

        /* CTA Row */
        .passport-cta-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-orange {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #ea580c 0%, #f97316 45%, #d97706 100%);
          color: #ffffff;
          font-weight: 800;
          font-size: 0.92rem;
          padding: 0.85rem 1.6rem;
          border-radius: var(--radius-md);
          box-shadow: 0 4px 18px rgba(234, 88, 12, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.35);
          transition: all 0.2s ease;
        }

        .btn-orange:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(234, 88, 12, 0.45);
          color: #ffffff;
        }

        .btn-whatsapp-custom {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #128c7e;
          color: #ffffff;
          font-weight: 700;
          font-size: 0.9rem;
          padding: 0.85rem 1.4rem;
          border-radius: var(--radius-md);
          border: 1px solid #075e54;
          transition: all 0.2s ease;
        }

        .btn-whatsapp-custom:hover {
          background: #075e54;
          transform: translateY(-2px);
        }

        .passport-call-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.88rem;
          font-weight: 800;
          color: var(--emerald-900);
          padding: 0.8rem 1rem;
          border: 1.5px solid var(--emerald-800);
          border-radius: var(--radius-md);
        }

        .passport-call-link:hover {
          background: var(--emerald-800);
          color: #ffffff;
        }

        @media (max-width: 1024px) {
          .passport-banner-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .passport-banner {
            padding: 1.75rem;
          }
        }

        @media (max-width: 640px) {
          .passport-features-grid {
            grid-template-columns: 1fr;
          }
          .passport-cta-row {
            flex-direction: column;
            width: 100%;
          }
          .passport-primary-btn, .btn-whatsapp-custom, .passport-call-link {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};
