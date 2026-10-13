import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AboutSection({ onOpenBooking, asH1 = false }) {
  const HeadingTag = asH1 ? 'h1' : 'h2';

  return (
    <section id="about" className="relative py-14 sm:py-24 md:py-36 bg-black border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/[0.08] border border-amber-400/20 mb-4 sm:mb-6">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-amber-300 font-medium">
                STUDIO ETHOS // ROADSTAR'S GARAGE
              </span>
            </div>

            <HeadingTag className="text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white font-heading mb-4 sm:mb-6 leading-tight">
              COMMITTED TO EXCELLENCE. <br />
              <span className="text-neutral-400">ROOTED IN VARANASI.</span>
            </HeadingTag>

            <div className="space-y-3 sm:space-y-4 text-xs sm:text-base text-neutral-400 font-normal leading-relaxed mb-6 sm:mb-8">
              <p>
                Roadstar's Garage operates in Ganpathi Nagar, Konia, Varanasi with a dedicated setup for automotive washing, deep foam cleaning, machine paint correction, and interior restoration.
              </p>
              <p>
                Every car and motorcycle is treated with patient attention, ensuring water pressure, soap concentrations, and drying mitts never damage sensitive clear coats or interior materials.
              </p>
            </div>

            {/* Factual Specification Glass Ledger */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-white/[0.08] mb-6 sm:mb-10">
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-neutral-900/60 border border-white/[0.06] backdrop-blur-md">
                <span className="text-[10px] sm:text-xs font-mono text-amber-400 block mb-0.5 sm:mb-1">
                  LOCATION
                </span>
                <span className="text-xs sm:text-sm font-bold text-white uppercase font-heading">
                  Ganpathi Nagar, Konia, Varanasi
                </span>
              </div>

              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-neutral-900/60 border border-white/[0.06] backdrop-blur-md">
                <span className="text-[10px] sm:text-xs font-mono text-amber-400 block mb-0.5 sm:mb-1">
                  FACILITY SPEC
                </span>
                <span className="text-xs sm:text-sm font-bold text-white uppercase font-heading">
                  Multi-Bay Pressure & Foam Stations
                </span>
              </div>
            </div>

            <div className="flex flex-row items-center gap-3 sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="btn-luxury-primary flex-1 sm:flex-initial px-5 sm:px-8 py-3.5 sm:py-4 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/10 text-center"
              >
                <span>BOOK BAY</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:08115463232"
                className="btn-luxury-glass flex-1 sm:flex-initial px-4 sm:px-7 py-3.5 sm:py-4 text-xs font-mono flex items-center justify-center gap-1.5 sm:gap-2 text-center"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>081154 63232</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Architectural Specification Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="glass-panel rounded-2xl sm:rounded-3xl p-5 sm:p-10 relative">
              <div className="mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-white/[0.08]">
                <span className="text-lg sm:text-3xl font-extrabold uppercase font-heading text-white block">
                  ROADSTAR'S GARAGE
                </span>
                <span className="text-[11px] sm:text-xs font-mono text-neutral-400 mt-0.5 sm:mt-1 block">
                  रोडस्टार्स गेराज // EST. VARANASI
                </span>
              </div>

              <div className="space-y-3 sm:space-y-4 text-xs font-mono text-neutral-300 py-1 sm:py-2">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <span>Four-wheeler high-clearance pressure washing bays.</span>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <span>Paddock stand motorcycle detailing and chain maintenance.</span>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <span>Located directly behind Mangal Murti Hero Agency, Konia.</span>
                </div>
              </div>

              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-white/[0.08] flex items-center justify-between text-[11px] sm:text-xs font-mono">
                <span className="text-neutral-400">VARANASI // UP 221007</span>
                <span className="text-amber-400 font-bold">4.9 ★ CERTIFIED</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

