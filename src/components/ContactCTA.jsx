import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowUpRight, Sparkles } from 'lucide-react';

export default function ContactCTA({ onOpenBooking }) {
  return (
    <section className="relative py-28 md:py-40 bg-black border-b border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/[0.06] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/[0.08] border border-amber-400/20 mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300 font-medium">
            INSTANT BOOKING & SCHEDULE
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase text-white font-heading mb-6 leading-tight"
        >
          READY FOR A <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
            SUPERIOR FINISH?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto font-normal leading-relaxed mb-12"
        >
          Bring your four-wheeler or motorcycle to Roadstar's Garage in Konia, Varanasi. Professional washing, paint correction, and interior care.
        </motion.p>

        {/* Action Button Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-10"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenBooking}
            className="btn-luxury-primary w-full sm:w-auto px-8 py-4 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-amber-500/10"
          >
            <span>SCHEDULE A SERVICE NOW</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="tel:08115463232"
            className="btn-luxury-glass w-full sm:w-auto px-8 py-4 text-xs font-mono flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>CALL 081154 63232</span>
          </motion.a>
        </motion.div>

        <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
          ROADSTAR'S GARAGE // GANPATHI NAGAR, KONIA, VARANASI
        </div>

      </div>
    </section>
  );
}

