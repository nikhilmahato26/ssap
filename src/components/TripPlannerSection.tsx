import { useState } from 'react';
import { 
  Send, Phone, MapPin, CheckCircle, 
  Sparkles, MessageSquare 
} from 'lucide-react';
import { BRAND_CONTACT } from '../types';
import type { BookingEnquiry } from '../types';

interface TripPlannerSectionProps {
  onSuccessNotice?: (message: string) => void;
}

export const TripPlannerSection: React.FC<TripPlannerSectionProps> = ({ onSuccessNotice }) => {
  const [formData, setFormData] = useState<BookingEnquiry>({
    name: '',
    phone: '',
    service: 'Luxury Car Rental in Bangalore',
    pickupLocation: 'Bangalore',
    destination: '',
    travelDate: '',
    passengers: '1-4',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState('');

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
      alert('Please enter your name and phone number.');
      return;
    }
    const ref = 'SSAP-' + Math.floor(100000 + Math.random() * 900000);
    setInquiryRef(ref);
    setSubmitted(true);
    if (onSuccessNotice) {
      onSuccessNotice(`Thank you! Your travel enquiry (${ref}) has been received.`);
    }
  };

  const handleWhatsAppSubmit = () => {
    if (!formData.name || !formData.phone) {
      alert('Please enter your name and phone number before sending to WhatsApp.');
      return;
    }
    const message = `*SSAP TRAVELS BANGALORE - Booking Enquiry*%0A%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Pickup:* ${formData.pickupLocation || 'Bangalore'}%0A` +
      `*Destination:* ${formData.destination || 'Not specified'}%0A` +
      `*Date:* ${formData.travelDate || 'Flexible'}%0A` +
      `*Travelers:* ${formData.passengers}%0A` +
      (formData.notes ? `*Notes:* ${formData.notes}%0A` : '') +
      `%0A_Sent via SSAP Travels Official Website_`;

    window.open(`https://wa.me/${BRAND_CONTACT.primaryPhoneRaw}?text=${message}`, '_blank');
  };

  return (
    <section id="plan-journey" className="planner-section section-spacing">
      <div className="container">
        <div className="planner-wrapper">
          <div className="planner-grid">
            {/* Left Info Column */}
            <div className="planner-info-col">
              <div className="section-eyebrow">
                <Sparkles size={14} className="text-gold" />
                <span>INSTANT TRAVEL ENQUIRY</span>
              </div>

              <h2 className="planner-title">
                PLAN YOUR JOURNEY WITH SSAP TRAVELS
              </h2>

              <p className="planner-intro">
                Tell us your travel details and our travel desk will promptly coordinate vehicle options, schedules, ticket availability, or pilgrimage itineraries.
              </p>

              {/* Direct Touchpoints */}
              <div className="touchpoints-card">
                <div className="touchpoint-row">
                  <div className="touchpoint-icon">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="touchpoint-label">Primary Hotline (24/7)</div>
                    <a href={`tel:${BRAND_CONTACT.primaryPhoneRaw}`} className="touchpoint-val">
                      {BRAND_CONTACT.primaryPhone}
                    </a>
                  </div>
                </div>

                <div className="touchpoint-row">
                  <div className="touchpoint-icon">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="touchpoint-label">Secondary Helpline</div>
                    <a href={`tel:${BRAND_CONTACT.secondaryPhoneRaw}`} className="touchpoint-val">
                      {BRAND_CONTACT.secondaryPhone}
                    </a>
                  </div>
                </div>

                <div className="touchpoint-row">
                  <div className="touchpoint-icon">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="touchpoint-label">Operational Base</div>
                    <div className="touchpoint-val-static">{BRAND_CONTACT.location}</div>
                  </div>
                </div>
              </div>

              <div className="planner-promises-note">
                <span className="promise-highlight">SAFE • RELIABLE • AFFORDABLE</span>
                <p>Prompt confirmation • Clear communication • No hidden charges</p>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="planner-form-col">
              {submitted ? (
                <div className="submission-success-card">
                  <div className="success-icon-wrap">
                    <CheckCircle size={46} className="text-gold" />
                  </div>
                  <h3 className="success-title">Enquiry Received Successfully!</h3>
                  <p className="success-desc">
                    Thank you, <strong>{formData.name}</strong>. Our SSAP Travels coordinator will review your request for <strong>{formData.service}</strong> and connect with you shortly.
                  </p>

                  <div className="reference-box">
                    <span className="ref-label">Enquiry Reference:</span>
                    <span className="ref-code">{inquiryRef}</span>
                  </div>

                  <div className="success-actions">
                    <button
                      onClick={handleWhatsAppSubmit}
                      className="btn-gold success-btn"
                    >
                      <MessageSquare size={16} />
                      <span>Chat on WhatsApp Now</span>
                    </button>

                    <a
                      href={`tel:${BRAND_CONTACT.primaryPhoneRaw}`}
                      className="btn-emerald success-btn"
                    >
                      <Phone size={16} />
                      <span>Call {BRAND_CONTACT.primaryPhone}</span>
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="reset-form-link"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="booking-form">
                  <div className="form-header">
                    <h3 className="form-title">Custom Booking & Enquiry Form</h3>
                    <p className="form-sub">Select your service and share your preferences</p>
                  </div>

                  {/* Service Selector */}
                  <div className="form-group">
                    <label className="form-label">Select Service *</label>
                    <select
                      className="form-control"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                    >
                      {servicesList.map((svc, i) => (
                        <option key={i} value={svc}>{svc}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-row-2">
                    {/* Full Name */}
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    {/* Pickup Location */}
                    <div className="form-group">
                      <label className="form-label">Pickup Location</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Bangalore Airport / City"
                        value={formData.pickupLocation}
                        onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                      />
                    </div>

                    {/* Destination */}
                    <div className="form-group">
                      <label className="form-label">Destination / Tour Route</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Tirupati / Coorg / Local"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    {/* Travel Date */}
                    <div className="form-group">
                      <label className="form-label">Travel Date</label>
                      <input
                        type="date"
                        className="form-control"
                        value={formData.travelDate}
                        onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      />
                    </div>

                    {/* Passenger Count */}
                    <div className="form-group">
                      <label className="form-label">Number of Passengers</label>
                      <select
                        className="form-control"
                        value={formData.passengers}
                        onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                      >
                        <option value="1-4">1 to 4 Persons (Sedan / MPV)</option>
                        <option value="5-7">5 to 7 Persons (Innova Crysta)</option>
                        <option value="8-12">8 to 12 Persons (Urbania / Tempo)</option>
                        <option value="13+">13+ Persons (Large Group)</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Requests */}
                  <div className="form-group">
                    <label className="form-label">Special Requirements / Notes</label>
                    <textarea
                      className="form-control form-textarea"
                      placeholder="e.g. Tirupati Srivani Darshan dates, flight timings, luggage requirements..."
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    ></textarea>
                  </div>

                  {/* Submission Action Group */}
                  <div className="form-actions-group">
                    <button type="submit" className="btn-gold form-submit-btn">
                      <span>Submit Online Enquiry</span>
                      <Send size={16} />
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="whatsapp-quick-btn"
                      title="Direct WhatsApp enquiry"
                    >
                      <MessageSquare size={16} />
                      <span>Send on WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .planner-section {
          background-color: var(--ivory-200);
          position: relative;
        }

        .planner-wrapper {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1.5px solid rgba(212, 175, 55, 0.35);
          box-shadow: 0 20px 50px rgba(4, 56, 40, 0.1);
          overflow: hidden;
        }

        .planner-grid {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
        }

        /* Left Info Column */
        .planner-info-col {
          background: var(--grad-emerald);
          color: #ffffff;
          padding: 3.5rem 3rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-right: 1px solid rgba(212, 175, 55, 0.3);
        }

        .planner-title {
          font-size: 2.2rem;
          color: #ffffff;
          margin-top: 0.5rem;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .planner-intro {
          font-size: 0.95rem;
          color: rgba(250, 248, 242, 0.9);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .touchpoints-card {
          background: rgba(2, 32, 22, 0.6);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          margin-bottom: 2rem;
        }

        .touchpoint-row {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .touchpoint-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(212, 175, 55, 0.15);
          border: 1px solid var(--gold-400);
          color: var(--gold-300);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .touchpoint-label {
          font-size: 0.72rem;
          color: rgba(250, 248, 242, 0.65);
          text-transform: uppercase;
          letter-spacing: 0.8px;
          font-weight: 700;
        }

        .touchpoint-val {
          font-size: 1rem;
          font-weight: 800;
          color: #ffffff;
          transition: color 0.2s ease;
        }

        .touchpoint-val:hover {
          color: var(--gold-300);
        }

        .touchpoint-val-static {
          font-size: 0.92rem;
          font-weight: 700;
          color: rgba(250, 248, 242, 0.95);
        }

        .planner-promises-note {
          padding-top: 1rem;
          border-top: 1px solid rgba(212, 175, 55, 0.2);
        }

        .promise-highlight {
          font-family: var(--font-heading);
          font-size: 0.88rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: var(--gold-300);
          display: block;
          margin-bottom: 0.25rem;
        }

        .planner-promises-note p {
          font-size: 0.78rem;
          color: rgba(250, 248, 242, 0.75);
        }

        /* Right Form Column */
        .planner-form-col {
          padding: 3.5rem 3rem;
          background: #ffffff;
        }

        .booking-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-header {
          margin-bottom: 0.5rem;
        }

        .form-title {
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--text-dark);
          margin-bottom: 0.25rem;
        }

        .form-sub {
          font-size: 0.86rem;
          color: var(--text-muted);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--emerald-950);
          letter-spacing: 0.3px;
        }

        .form-control {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1.5px solid rgba(6, 78, 59, 0.2);
          border-radius: var(--radius-md);
          font-size: 0.92rem;
          font-family: var(--font-sans);
          color: var(--text-dark);
          background: var(--ivory-50);
          transition: all 0.2s ease;
        }

        .form-control:focus {
          outline: none;
          border-color: var(--emerald-800);
          box-shadow: 0 0 0 3px rgba(6, 78, 59, 0.1);
          background: #ffffff;
        }

        .form-textarea {
          resize: vertical;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .form-actions-group {
          display: flex;
          gap: 1rem;
          margin-top: 0.75rem;
          flex-wrap: wrap;
        }

        .form-submit-btn {
          flex: 1.3;
          padding: 0.85rem 1.5rem;
        }

        .whatsapp-quick-btn {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: #128c7e;
          color: #ffffff;
          font-weight: 700;
          font-size: 0.9rem;
          padding: 0.85rem 1.2rem;
          border-radius: var(--radius-md);
          border: 1px solid #075e54;
          transition: all 0.2s ease;
        }

        .whatsapp-quick-btn:hover {
          background: #075e54;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(18, 140, 126, 0.3);
        }

        /* Success Card */
        .submission-success-card {
          text-align: center;
          padding: 3rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .success-icon-wrap {
          margin-bottom: 1.25rem;
        }

        .success-title {
          font-size: 1.8rem;
          color: var(--emerald-950);
          margin-bottom: 0.75rem;
        }

        .success-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 480px;
          margin-bottom: 1.5rem;
        }

        .reference-box {
          background: var(--ivory-200);
          border: 1px dashed var(--gold-500);
          padding: 0.75rem 1.75rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .ref-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 700;
        }

        .ref-code {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 900;
          color: var(--emerald-900);
          letter-spacing: 1.5px;
        }

        .success-actions {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          width: 100%;
          max-width: 380px;
        }

        .success-btn {
          width: 100%;
          padding: 0.85rem;
        }

        .reset-form-link {
          margin-top: 0.5rem;
          font-size: 0.82rem;
          color: var(--emerald-800);
          font-weight: 700;
          text-decoration: underline;
        }

        @media (max-width: 1024px) {
          .planner-grid {
            grid-template-columns: 1fr;
          }
          .planner-info-col {
            padding: 2.5rem 2rem;
          }
          .planner-form-col {
            padding: 2.5rem 2rem;
          }
        }

        @media (max-width: 640px) {
          .form-row-2 {
            grid-template-columns: 1fr;
          }
          .form-actions-group {
            flex-direction: column;
          }
          .planner-title {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};
