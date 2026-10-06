import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickServiceBar } from './components/QuickServiceBar';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { LuxuryCarRentalSection } from './components/LuxuryCarRentalSection';
import { PilgrimageSpecialSection } from './components/PilgrimageSpecialSection';
import { HolidayPackagesSection } from './components/HolidayPackagesSection';
import { BrandPromisesSection } from './components/BrandPromisesSection';
import { TripPlannerSection } from './components/TripPlannerSection';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { MobileStickyBar } from './components/MobileStickyBar';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string>('Luxury Car Rental in Bangalore');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenEnquiry = (serviceName?: string) => {
    if (serviceName) {
      setModalService(serviceName);
    }
    setModalOpen(true);
  };

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  return (
    <div className="ssap-app">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="global-toast">
          <span>{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="toast-close">×</button>
        </div>
      )}

      {/* Main Navigation */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Hero Section */}
      <Hero onOpenEnquiry={handleOpenEnquiry} />

      {/* Quick Service Bar (Immediately below hero) */}
      <QuickServiceBar onSelectService={handleOpenEnquiry} />

      {/* About Section */}
      <AboutSection onOpenEnquiry={() => handleOpenEnquiry('General Travel Consultation')} />

      {/* Services Section (All 8 Services) */}
      <ServicesSection onSelectService={handleOpenEnquiry} />

      {/* Luxury Car Rental Section */}
      <LuxuryCarRentalSection onEnquireCar={(carName) => handleOpenEnquiry(carName ? `Car Rental: ${carName}` : 'Luxury Car Rental in Bangalore')} />

      {/* Pilgrimage Special Section (Tirupati Srivani & Murugan Tour) */}
      <PilgrimageSpecialSection onSelectPilgrimage={handleOpenEnquiry} />

      {/* Holiday & Package Tours Section */}
      <HolidayPackagesSection onSelectPackage={(pkg) => handleOpenEnquiry(`Holiday Tour: ${pkg}`)} />

      {/* Brand Promises & Operational Strengths */}
      <BrandPromisesSection />

      {/* Interactive Trip Planner & Enquiry */}
      <TripPlannerSection onSuccessNotice={handleShowToast} />

      {/* Footer */}
      <Footer onSelectService={handleOpenEnquiry} />

      {/* Booking & Enquiry Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={modalService}
      />

      {/* Mobile Bottom Sticky Bar */}
      <MobileStickyBar onOpenEnquiry={() => handleOpenEnquiry()} />

      <style>{`
        .ssap-app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: var(--ivory-200);
        }

        .global-toast {
          position: fixed;
          top: 85px;
          right: 25px;
          background: var(--emerald-900);
          color: #ffffff;
          border: 1px solid var(--gold-400);
          border-radius: var(--radius-md);
          padding: 0.9rem 1.4rem;
          font-size: 0.9rem;
          font-weight: 600;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          z-index: 3000;
          display: flex;
          align-items: center;
          gap: 1rem;
          animation: slideInRight 0.3s ease;
        }

        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .toast-close {
          color: var(--gold-400);
          font-size: 1.25rem;
          line-height: 1;
        }
      `}</style>
    </div>
  );
}

export default App;
