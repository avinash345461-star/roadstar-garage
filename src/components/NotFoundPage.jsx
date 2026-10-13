import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Compass, Phone, Sparkles, ShieldAlert, Calendar } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';

export default function NotFoundPage({ onNavigate, onOpenBooking }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "404 - Bay Not Found | Roadstar's Garage Varanasi";
  }, []);

  return (
    <section className="relative min-h-[85vh] pt-28 pb-20 flex items-center justify-center bg-black overflow-hidden">
      {/* Ambient warm amber lighting mesh */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[250px] sm:h-[350px] bg-amber-500/[0.04] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={[{ label: '404 Error' }]} onNavigate={onNavigate} />

        {/* Technical Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/[0.08] border border-amber-400/25 backdrop-blur-md mb-6"
        >
          <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-[11px] font-mono font-medium uppercase tracking-widest text-amber-300">
            SYSTEM TELEMETRY // HTTP 404
          </span>
        </motion.div>

        {/* Large 404 Graphic Number */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-7xl sm:text-9xl font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-300 to-neutral-700 leading-none mb-3 select-none drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]"
        >
          404
        </motion.div>

        {/* Single H1 For The Page */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase text-white font-heading leading-tight mb-4"
        >
          REQUESTED BAY NOT FOUND.
        </motion.h1>

        {/* Factual Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs sm:text-base text-neutral-400 max-w-lg mx-auto font-normal leading-relaxed mb-8 sm:mb-10"
        >
          The URL slug or workshop coordinates you requested do not exist or have been re-indexed. Return to the main studio floor or inspect our detailing packages.
        </motion.p>

        {/* Quick Action Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="btn-luxury-primary w-full sm:w-auto min-h-[44px] px-6 py-3.5 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/10 text-center"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO STUDIO HOME</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/services')}
            className="btn-luxury-glass w-full sm:w-auto min-h-[44px] px-6 py-3.5 text-xs sm:text-sm font-mono flex items-center justify-center gap-2 cursor-pointer text-center"
          >
            <Compass className="w-4 h-4 text-amber-400" />
            <span>BROWSE SERVICES</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/gallery')}
            className="btn-luxury-glass w-full sm:w-auto min-h-[44px] px-6 py-3.5 text-xs sm:text-sm font-mono flex items-center justify-center gap-2 cursor-pointer text-center"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>WORK ARCHIVE</span>
          </button>

          {onOpenBooking && (
            <button
              type="button"
              onClick={onOpenBooking}
              className="btn-luxury-glass w-full sm:w-auto min-h-[44px] px-6 py-3.5 text-xs sm:text-sm font-mono flex items-center justify-center gap-2 cursor-pointer text-center text-amber-300"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>BOOK BAY</span>
            </button>
          )}
        </motion.div>

        {/* Direct Helpline Glass Ledger */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/[0.08] flex items-center justify-center gap-2 text-xs font-mono text-neutral-500"
        >
          <span>NEED ASSISTANCE?</span>
          <a
            href="tel:08115463232"
            className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 transition-colors"
          >
            <Phone className="w-3 h-3" />
            <span>081154 63232</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
