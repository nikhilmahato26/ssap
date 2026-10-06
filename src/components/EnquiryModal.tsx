import { useState, useEffect } from 'react';
import { X, Send, Phone, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';
import { BRAND_CONTACT } from '../types';
import type { BookingEnquiry } from '../types';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, defaultService }) => {
  const [formData, setFormData] = useState<BookingEnquiry>({
    name: '',
    phone: '',
    service: defaultService || 'Luxury Car Rental in Bangalore',
    pickupLocation: 'Bangalore',
    destination: '',
    travelDate: '',
    passengers: '1-4',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState('');

  useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({ ...prev, service: defaultService }));
    }
    setSubmitted(false);
  }, [defaultService, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const servicesList = [
    'Luxury Car Rental in Bangalore',
    'Train Ticket Booking',
    'Bus Ticket Booking',
    'KSRTC Bus Booking Assistance',
    'Flight Ticket Booking',
    'Holiday & Package Tour Booking',
    'Arupadaiveedu Murugan Temple Special Tour',
    'Tirupati Srivani VIP Break Darshan Tickets'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    const ref = 'SSAP-' + Math.floor(100000 + Math.random() * 900000);
    setInquiryRef(ref);
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    if (!formData.name || !formData.phone) {
      alert('Please enter your name and phone number first.');
      return;
    }
    const text = `*SSAP TRAVELS BANGALORE - Booking Enquiry*%0A%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Pickup:* ${formData.pickupLocation}%0A` +
      (formData.destination ? `*Destination:* ${formData.destination}%0A` : '') +
      (formData.travelDate ? `*Travel Date:* ${formData.travelDate}%0A` : '') +
      `*Pass:* ${formData.passengers}%0A` +
      (formData.notes ? `*Notes:* ${formData.notes}%0A` : '') +
      `%0A_Sent via ssaptravels website_`;

    window.open(`https://wa.me/${BRAND_CONTACT.primaryPhoneRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-brand">
            <span className="modal-eyebrow">
              <Sparkles size={13} className="text-gold" />
              SSAP TRAVELS BANGALORE
            </span>
            <h3 className="modal-title">Enquire or Book Service</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">
            <X size={22} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {submitted ? (
            <div className="modal-success-view">
              <div className="success-icon-wrap">
                <CheckCircle size={44} className="text-gold" />
              </div>
              <h4>Enquiry Submitted Successfully!</h4>
              <p>
                Thank you, <strong>{formData.name}</strong>. Our team has received your enquiry for <strong>{formData.service}</strong>.
              </p>

              <div className="modal-ref-pill">
                <span>Reference ID:</span>
                <strong>{inquiryRef}</strong>
              </div>

              <div className="modal-quick-connect">
                <p className="connect-intro">Need faster assistance? Connect directly:</p>
                <div className="connect-btn-row">
                  <button onClick={handleWhatsApp} className="btn-gold connect-btn">
                    <MessageSquare size={16} />
                    <span>WhatsApp</span>
                  </button>
                  <a href={`tel:${BRAND_CONTACT.primaryPhoneRaw}`} className="btn-emerald connect-btn">
                    <Phone size={16} />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              <button onClick={onClose} className="btn-outline-gold modal-done-btn">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="modal-form-group">
                <label className="modal-label">Service Required</label>
                <select
                  className="modal-select"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  required
                >
                  {servicesList.map((s, idx) => (
                    <option key={idx} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="modal-row-2">
                <div className="modal-form-group">
                  <label className="modal-label">Full Name *</label>
                  <input
                    type="text"
                    className="modal-input"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="modal-form-group">
                  <label className="modal-label">Phone Number *</label>
                  <input
                    type="tel"
                    className="modal-input"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="modal-row-2">
                <div className="modal-form-group">
                  <label className="modal-label">Travel Date</label>
                  <input
                    type="date"
                    className="modal-input"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                  />
                </div>

                <div className="modal-form-group">
                  <label className="modal-label">Passengers</label>
                  <select
                    className="modal-select"
                    value={formData.passengers}
                    onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                  >
                    <option value="1-4">1-4 Persons (Sedan/MPV)</option>
                    <option value="5-7">5-7 Persons (Innova Crysta)</option>
                    <option value="8-12">8-12 Persons (Urbania/Tempo)</option>
                    <option value="13+">13+ Persons (Large Group)</option>
                  </select>
                </div>
              </div>

              <div className="modal-form-group">
                <label className="modal-label">Pickup & Destination Details</label>
                <input
                  type="text"
                  className="modal-input"
                  placeholder="e.g. Bangalore to Tirupati / Bangalore Airport / Local"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                />
              </div>

              <div className="modal-form-group">
                <label className="modal-label">Specific Request or Notes</label>
                <textarea
                  className="modal-textarea"
                  placeholder="Mention vehicle choice, darshan requirements, flight/train details..."
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                ></textarea>
              </div>

              <div className="modal-submit-row">
                <button type="submit" className="btn-gold modal-submit-btn">
                  <Send size={16} />
                  <span>Submit Online</span>
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="modal-whatsapp-btn"
                  title="Send via WhatsApp"
                >
                  <MessageSquare size={16} />
                  <span>Send via WhatsApp</span>
                </button>
              </div>

              <div className="modal-footer-helplines">
                <span>Or call directly:</span>
                <a href={`tel:${BRAND_CONTACT.primaryPhoneRaw}`} className="helpline-link">
                  {BRAND_CONTACT.primaryPhone}
                </a>
                <span>•</span>
                <a href={`tel:${BRAND_CONTACT.secondaryPhoneRaw}`} className="helpline-link">
                  {BRAND_CONTACT.secondaryPhone}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(2, 32, 22, 0.75);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1.5px solid rgba(212, 175, 55, 0.45);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
          width: 100%;
          max-width: 540px;
          overflow: hidden;
          animation: slideUp 0.25s ease;
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .modal-header {
          background: var(--grad-emerald);
          color: #ffffff;
          padding: 1.25rem 1.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(212, 175, 55, 0.3);
        }

        .modal-brand {
          display: flex;
          flex-direction: column;
        }

        .modal-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: var(--gold-300);
        }

        .modal-title {
          font-size: 1.35rem;
          color: #ffffff;
          margin-top: 0.15rem;
        }

        .modal-close-btn {
          color: var(--gold-300);
          padding: 0.25rem;
          border-radius: 6px;
        }

        .modal-close-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
        }

        .modal-body {
          padding: 1.75rem;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .modal-row-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .modal-form-group {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .modal-label {
          font-size: 0.76rem;
          font-weight: 700;
          color: var(--emerald-950);
          letter-spacing: 0.3px;
        }

        .modal-input, .modal-select, .modal-textarea {
          width: 100%;
          padding: 0.65rem 0.85rem;
          border: 1.5px solid rgba(6, 78, 59, 0.2);
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          font-family: var(--font-sans);
          color: var(--text-dark);
          background: var(--ivory-50);
        }

        .modal-input:focus, .modal-select:focus, .modal-textarea:focus {
          outline: none;
          border-color: var(--emerald-800);
          box-shadow: 0 0 0 3px rgba(6, 78, 59, 0.1);
          background: #ffffff;
        }

        .modal-textarea {
          resize: vertical;
        }

        .modal-submit-row {
          display: flex;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        .modal-submit-btn {
          flex: 1.2;
          padding: 0.75rem 1rem;
          font-size: 0.88rem;
        }

        .modal-whatsapp-btn {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          background: #128c7e;
          color: #ffffff;
          font-weight: 700;
          font-size: 0.84rem;
          padding: 0.75rem 0.85rem;
          border-radius: var(--radius-md);
          border: 1px solid #075e54;
          transition: all 0.2s ease;
        }

        .modal-whatsapp-btn:hover {
          background: #075e54;
        }

        .modal-footer-helplines {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          color: var(--text-muted);
          padding-top: 0.75rem;
          border-top: 1px solid rgba(6, 78, 59, 0.08);
          flex-wrap: wrap;
        }

        .helpline-link {
          font-weight: 700;
          color: var(--emerald-900);
        }

        .helpline-link:hover {
          color: var(--gold-600);
        }

        /* Success View */
        .modal-success-view {
          text-align: center;
          padding: 1rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .modal-success-view h4 {
          font-size: 1.45rem;
          color: var(--emerald-950);
          margin-bottom: 0.5rem;
        }

        .modal-success-view p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 1.25rem;
        }

        .modal-ref-pill {
          background: var(--ivory-200);
          border: 1px dashed var(--gold-500);
          border-radius: var(--radius-full);
          padding: 0.4rem 1.25rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          margin-bottom: 1.5rem;
        }

        .modal-quick-connect {
          width: 100%;
          margin-bottom: 1.5rem;
        }

        .connect-intro {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--emerald-900);
          margin-bottom: 0.65rem;
        }

        .connect-btn-row {
          display: flex;
          gap: 0.75rem;
        }

        .connect-btn {
          flex: 1;
          padding: 0.7rem;
          font-size: 0.86rem;
        }

        .modal-done-btn {
          width: 100%;
          padding: 0.65rem;
        }

        @media (max-width: 600px) {
          .modal-row-2 {
            grid-template-columns: 1fr;
          }
          .modal-submit-row {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};
