import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import FeatureSection from './components/FeatureSection';
import WhyRoadstar from './components/WhyRoadstar';
import CustomerReviews from './components/CustomerReviews';
import SocialSection from './components/SocialSection';
import AboutSection from './components/AboutSection';
import LocationSection from './components/LocationSection';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import PreviousWorksPage from './components/Gallery';
import NotFoundPage from './components/NotFoundPage';
import Breadcrumbs from './components/Breadcrumbs';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  
  // Clean URL slug router state initialized from window pathname
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window === 'undefined') return '/';
    const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
    return path;
  });

  // Handle URL change & dynamic SEO metadata
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
      setCurrentPath(path);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Synchronize document title, meta description, and canonical tags per page
  useEffect(() => {
    let title = "Roadstar's Garage | Best Car Detailing Studio & Car Wash in Varanasi";
    let description = "Roadstar's Garage is the top-rated car detailing studio and car wash in Varanasi (Ganpathi Nagar, Konia). Specializing in 9H ceramic coating, paint protection, deep snow foam wash, interior vacuuming, sanitization, and superbike detailing.";
    let canonical = `https://roadstarsgarage.in${currentPath === '/' ? '' : currentPath}`;

    switch (currentPath) {
      case '/services':
        title = "Vehicle Detailing Services & Price Packages | Roadstar's Garage Varanasi";
        description = "Explore our specialized vehicle care treatments: 9H ceramic coatings, high-pressure snow foam wash, interior extraction sanitization, and underbody chassis protection in Varanasi.";
        break;
      case '/gallery':
      case '/projects':
        title = "Project Archive & Vehicle Finishing Gallery | Roadstar's Garage Varanasi";
        description = "Browse completed automotive detailing projects at Roadstar's Garage in Varanasi. High-gloss 9H ceramic coatings, foam washes, superbike detailing, and showroom deliveries.";
        break;
      case '/about':
        title = "About Studio Ethos & Facility Specs | Roadstar's Garage Varanasi";
        description = "Learn about Roadstar's Garage in Ganpathi Nagar, Konia, Varanasi. Paint-safe chemistry, calibrated pressure bays, certified technicians, and genuine vehicle care craftsmanship.";
        break;
      case '/contact':
        title = "Workshop Location & Studio Coordinates | Roadstar's Garage Varanasi";
        description = "Visit Roadstar's Garage in Ganpathi Nagar, Konia, Varanasi (Plus Code: 9236+QH). Map directions, workshop arrival guide, and direct booking helpline.";
        break;
      default:
        if (currentPath !== '/') {
          title = "404 - Bay Not Found | Roadstar's Garage Varanasi";
          description = "The requested vehicle bay or page does not exist. Return to Roadstar's Garage studio floor.";
        }
        break;
    }

    // Update Head Elements
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    const metaOgTitle = document.querySelector('meta[property="og:title"]');
    if (metaOgTitle) metaOgTitle.setAttribute('content', title);

    const metaOgDesc = document.querySelector('meta[property="og:description"]');
    if (metaOgDesc) metaOgDesc.setAttribute('content', description);

    const metaOgUrl = document.querySelector('meta[property="og:url"]');
    if (metaOgUrl) metaOgUrl.setAttribute('content', canonical);

    const metaTwTitle = document.querySelector('meta[name="twitter:title"]');
    if (metaTwTitle) metaTwTitle.setAttribute('content', title);

    const metaTwDesc = document.querySelector('meta[name="twitter:description"]');
    if (metaTwDesc) metaTwDesc.setAttribute('content', description);

    const linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) linkCanonical.setAttribute('href', canonical);
  }, [currentPath]);

  const handleNavigate = (path) => {
    const normalized = path.toLowerCase().replace(/\/$/, '') || '/';
    if (normalized !== currentPath) {
      window.history.pushState({}, '', normalized);
      setCurrentPath(normalized);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService('');
  };

  // Render Page Content
  const renderContent = () => {
    // 1. Gallery / Project Archive Page
    if (currentPath === '/gallery' || currentPath === '/projects') {
      return (
        <PreviousWorksPage
          onBackToHome={() => handleNavigate('/')}
          onOpenBooking={() => handleOpenBooking()}
        />
      );
    }

    // 2. Dedicated Services Page (Unique H1 & Breadcrumbs)
    if (currentPath === '/services') {
      return (
        <div className="pt-24 sm:pt-28 pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-4">
            <Breadcrumbs items={[{ label: 'Detailing Services' }]} onNavigate={handleNavigate} />
          </div>
          <Services onSelectService={(serviceName) => handleOpenBooking(serviceName)} asH1={true} />
          <WhyRoadstar />
          <ContactCTA onOpenBooking={() => handleOpenBooking()} />
        </div>
      );
    }

    // 3. Dedicated About Studio Page (Unique H1 & Breadcrumbs)
    if (currentPath === '/about') {
      return (
        <div className="pt-24 sm:pt-28 pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-4">
            <Breadcrumbs items={[{ label: 'Studio Ethos & Standards' }]} onNavigate={handleNavigate} />
          </div>
          <AboutSection onOpenBooking={() => handleOpenBooking()} asH1={true} />
          <FeatureSection onOpenBooking={() => handleOpenBooking()} />
          <ContactCTA onOpenBooking={() => handleOpenBooking()} />
        </div>
      );
    }

    // 4. Dedicated Location & Coordinates Page (Unique H1 & Breadcrumbs)
    if (currentPath === '/contact') {
      return (
        <div className="pt-24 sm:pt-28 pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-4">
            <Breadcrumbs items={[{ label: 'Workshop Location & Access' }]} onNavigate={handleNavigate} />
          </div>
          <LocationSection asH1={true} />
          <ContactCTA onOpenBooking={() => handleOpenBooking()} />
        </div>
      );
    }

    // 5. Main Home Studio Page (Single H1 inside Hero.jsx)
    if (currentPath === '/') {
      return (
        <>
          {/* 1. Hero Section (Contains Primary H1) */}
          <Hero onOpenBooking={() => handleOpenBooking()} />

          {/* 2. Trust Ledger Strip */}
          <TrustStrip />

          {/* 3. Services Specification Table */}
          <Services onSelectService={(serviceName) => handleOpenBooking(serviceName)} />

          {/* 4. Brand Ethos & Standards */}
          <FeatureSection onOpenBooking={() => handleOpenBooking()} />

          {/* 5. Core Pillars */}
          <WhyRoadstar />

          {/* 6. Verified Customer Feedback Marquee */}
          <CustomerReviews />

          {/* 7. Digital Ecosystem & 10% Off Incentive */}
          <SocialSection />

          {/* 8. Studio Profile & Spec */}
          <AboutSection onOpenBooking={() => handleOpenBooking()} />

          {/* 9. Location Coordinates */}
          <LocationSection />

          {/* 10. Final Closing CTA */}
          <ContactCTA onOpenBooking={() => handleOpenBooking()} />
        </>
      );
    }

    // 6. Custom 404 Page (Single H1) for any unrecognized route
    return (
      <NotFoundPage
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />
    );
  };

  return (
    <div className="bg-black text-neutral-100 min-h-screen font-sans selection:bg-amber-400/20 selection:text-amber-300 relative overflow-x-hidden">
      {/* Ambient background subtle lighting */}
      <div className="fixed inset-0 bg-ambient-glow pointer-events-none z-0"></div>

      {/* Global Header Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Page Routing Container */}
      <main className="relative z-10">
        {renderContent()}
      </main>

      {/* Global Footer */}
      <Footer
        currentPath={currentPath}
        onNavigate={handleNavigate}
      />

      {/* Booking Scheduling Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        selectedService={selectedService}
      />
    </div>
  );
}
