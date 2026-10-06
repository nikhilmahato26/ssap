import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BRAND_CONTACT } from '../types';

interface MobileStickyBarProps {
  onOpenEnquiry: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenEnquiry }) => {
  const handleWhatsApp = () => {
    const text = `Hello SSAP Travels Bangalore, I would like to enquire about your travel services.`;
    window.open(`https://wa.me/${BRAND_CONTACT.primaryPhoneRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="mobile-bottom-bar">
      {/* Primary Call */}
      <a 
        href={`tel:${BRAND_CONTACT.primaryPhoneRaw}`} 
        className="mobile-bar-btn call-primary"
        title="Call Primary Number"
      >
        <Phone size={18} />
        <span>Call</span>
      </a>

      {/* WhatsApp */}
      <button 
        onClick={handleWhatsApp} 
        className="mobile-bar-btn btn-whatsapp"
        title="Chat on WhatsApp"
      >
        <MessageSquare size={18} />
        <span>WhatsApp</span>
      </button>

      {/* Plan Journey */}
      <button 
        onClick={onOpenEnquiry} 
        className="mobile-bar-btn btn-enquire"
        title="Plan Journey"
      >
        <Calendar size={18} />
        <span>Enquire</span>
      </button>

      <style>{`
        .mobile-bottom-bar {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(2, 32, 22, 0.98);
          backdrop-filter: blur(12px);
          border-top: 1.5px solid var(--gold-500);
          z-index: 1500;
          padding: 0.55rem 0.85rem;
          gap: 0.5rem;
          box-shadow: 0 -8px 25px rgba(0, 0, 0, 0.35);
        }

        .mobile-bar-btn {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          padding: 0.5rem 0.25rem;
          border-radius: var(--radius-md);
          font-size: 0.72rem;
          font-weight: 700;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .call-primary {
          background: rgba(212, 175, 55, 0.15);
          color: var(--gold-300);
          border: 1px solid rgba(212, 175, 55, 0.35);
        }

        .btn-whatsapp {
          background: #128c7e;
          color: #ffffff;
          border: 1px solid #075e54;
        }

        .btn-enquire {
          background: var(--grad-gold);
          color: #04261b;
          font-weight: 800;
        }

        @media (max-width: 768px) {
          .mobile-bottom-bar {
            display: flex;
          }
        }
      `}</style>
    </div>
  );
};
