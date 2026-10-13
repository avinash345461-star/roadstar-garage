import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowUpRight, MessageSquare, Navigation, Calendar } from 'lucide-react';

export default function Navbar({ onOpenBooking, currentPath = '/', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const googleMapsUrl =
    'https://www.google.com/maps/place/Roadstar%E2%80%99s+Garage/@25.3544559,83.0113916,17z/data=!4m6!3m5!1s0x398e2ff189e879c1:0x84dc4f29b4a3c33d!8m2!3d25.3544559!4d83.0113916!16s%2Fg%2F11pyzdp0s_';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/', hash: '#home' },
    { name: 'Services', href: '/services', hash: '#services' },
    { name: 'Gallery', href: '/gallery', hash: '' },
    { name: 'Studio', href: '/about', hash: '#about' },
    { name: 'Location', href: '/contact', hash: '#contact' },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (link.href === '/gallery') {
      if (onNavigate) {
        onNavigate('/gallery');
      }
      return;
    }

    if (currentPath === '/') {
      if (link.hash) {
        const target = document.querySelector(link.hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (onNavigate) {
        onNavigate(link.href);
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-2.5 sm:py-3 bg-black/75 backdrop-blur-3xl saturate-180 border-b border-white/[0.12] shadow-[0_10px_35px_rgba(0,0,0,0.85)]'
          : 'py-3.5 sm:py-5 bg-black/40 backdrop-blur-2xl saturate-150 border-b border-white/[0.06]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
        {/* Brand Wordmark & Official RG Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (currentPath === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              if (onNavigate) onNavigate('/');
              else window.location.href = '/';
            }
          }}
          className="flex items-center gap-2.5 sm:gap-3.5 group cursor-pointer focus:outline-none shrink-0"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-neutral-900/80 border border-white/15 p-1 shrink-0 overflow-hidden flex items-center justify-center shadow-inner group-hover:border-amber-400/50 backdrop-blur-md transition-all duration-300">
            <img
              src="/roadstars-logo.png"
              alt="Roadstar's Garage Detailing Studio Logo"
              className="w-full h-full object-contain rounded-md sm:rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-bold tracking-tight text-sm sm:text-lg text-white font-heading leading-tight group-hover:text-amber-300 transition-colors">
              ROADSTAR'S GARAGE
            </span>
            <span className="text-[9px] sm:text-[11px] tracking-widest text-neutral-400 font-mono mt-0.5 uppercase flex items-center gap-1 sm:gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              VARANASI // STUDIO BAY
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links - Apple Style Frosted Floating Capsule */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3.5 py-1.5 rounded-full apple-glass-pill" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = currentPath === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-xs font-medium tracking-wide rounded-full px-4 py-1.5 transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-amber-300 bg-amber-400/10 font-bold border border-amber-400/20'
                    : 'text-neutral-300 hover:text-white hover:bg-white/[0.1]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Action Controls */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="tel:08115463232"
            className="flex items-center gap-2 text-xs font-medium text-neutral-200 hover:text-white transition-colors px-4 py-2.5 rounded-full apple-glass-pill hover:border-white/30"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono">081154 63232</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="btn-luxury-primary px-5 py-2.5 text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-lg shadow-amber-500/10 rounded-full"
          >
            <span>BOOK BAY</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-300 hover:text-white rounded-xl border border-white/15 bg-neutral-900/60 backdrop-blur-xl focus:outline-none cursor-pointer transition-colors active:scale-95 shadow-lg"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu - Apple Frosted Liquid Glass */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-x-0 top-[100%] max-h-[calc(100dvh-4rem)] overflow-y-auto bg-neutral-950/80 backdrop-blur-3xl saturate-200 border-b border-white/15 px-4 py-5 shadow-[0_25px_50px_rgba(0,0,0,0.9)]"
          >
            {/* Quick Actions Grid: Call, WhatsApp, Map, Book */}
            <div className="mb-4">
              <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-2 px-1">
                // QUICK ACTIONS
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:08115463232"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-neutral-900/90 border border-white/10 text-neutral-200 hover:text-white hover:border-amber-400/40 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-semibold">Call Bay</span>
                    <span className="text-[10px] font-mono text-neutral-400">081154 63232</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/918115463232?text=Hello%20Roadstar%27s%20Garage!%20I%20want%20to%20inquire%20about%20vehicle%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-neutral-900/90 border border-white/10 text-neutral-200 hover:text-white hover:border-emerald-400/40 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-semibold">WhatsApp</span>
                    <span className="text-[10px] font-mono text-neutral-400">Instant Chat</span>
                  </div>
                </a>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-neutral-900/90 border border-white/10 text-neutral-200 hover:text-white hover:border-amber-400/40 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center shrink-0">
                    <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-semibold">Studio Map</span>
                    <span className="text-[10px] font-mono text-neutral-400">Konia, Varanasi</span>
                  </div>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold active:scale-95 transition-all shadow-md shadow-amber-500/20 cursor-pointer text-left"
                >
                  <div className="w-7 h-7 rounded-lg bg-black/20 flex items-center justify-center shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-black" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-extrabold leading-tight">Book Bay</span>
                    <span className="text-[10px] font-mono text-neutral-900 leading-tight">Reserve Slot</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="border-t border-white/[0.08] pt-3">
              <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5 px-1">
                // NAVIGATION
              </div>
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/[0.04] transition-all py-2.5 px-3 rounded-lg flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-[10px] text-neutral-500 font-mono">→</span>
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}


