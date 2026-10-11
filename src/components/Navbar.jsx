import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Network', href: '#socials' },
    { name: 'Studio', href: '#about' },
    { name: 'Location', href: '#contact' },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const target = document.querySelector(link.href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-black/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.9)]'
          : 'py-5 bg-black/60 backdrop-blur-md border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-6">
        {/* Brand Wordmark & Official RG Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3.5 group cursor-pointer focus:outline-none shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/10 p-1 shrink-0 overflow-hidden flex items-center justify-center shadow-inner group-hover:border-amber-400/50 transition-all duration-300">
            <img
              src="/roadstars-logo.png"
              alt="Roadstar's Garage Detailing Studio Logo"
              className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-bold tracking-tight text-base sm:text-lg text-white font-heading leading-tight group-hover:text-amber-300 transition-colors">
              ROADSTAR'S GARAGE
            </span>
            <span className="text-[11px] tracking-widest text-neutral-400 font-mono mt-0.5 uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              VARANASI // STUDIO BAY
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-neutral-900/60 border border-white/[0.06] backdrop-blur-md shadow-inner" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className="text-xs font-medium tracking-wide text-neutral-400 hover:text-white hover:bg-white/[0.06] rounded-full px-4 py-1.5 transition-all duration-200 whitespace-nowrap cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="tel:08115463232"
            className="flex items-center gap-2 text-xs font-medium text-neutral-300 hover:text-white transition-colors px-4 py-2.5 rounded-xl bg-neutral-900/60 border border-white/[0.08] hover:border-white/20 backdrop-blur-md"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono">081154 63232</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="btn-luxury-primary px-5 py-2.5 text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-lg shadow-amber-500/10"
          >
            <span>BOOK BAY</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 text-neutral-300 hover:text-white rounded-xl border border-white/10 bg-neutral-900/80 backdrop-blur-md focus:outline-none cursor-pointer transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-x-0 top-[100%] max-h-[calc(100dvh-5rem)] overflow-y-auto bg-black/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 shadow-2xl"
          >
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/[0.04] transition-all py-3 px-4 rounded-xl border border-transparent hover:border-white/[0.06] flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-neutral-500">→</span>
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="tel:08115463232"
                  className="w-full flex items-center justify-center gap-2 text-sm font-medium text-neutral-200 py-3 rounded-xl border border-white/10 bg-neutral-900/70 hover:bg-neutral-900 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span className="font-mono">Call 081154 63232</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full btn-luxury-primary py-3.5 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>SCHEDULE VEHICLE BAY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}


