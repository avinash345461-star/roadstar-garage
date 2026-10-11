import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AboutSection({ onOpenBooking }) {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-black border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/[0.08] border border-amber-400/20 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300 font-medium">
                STUDIO ETHOS // ROADSTAR'S GARAGE
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading mb-6 leading-tight">
              COMMITTED TO EXCELLENCE. <br />
              <span className="text-neutral-400">ROOTED IN VARANASI.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed mb-8">
              <p>
                Roadstar's Garage operates in Ganpathi Nagar, Konia, Varanasi with a dedicated setup for automotive washing, deep foam cleaning, machine paint correction, and interior restoration.
              </p>
              <p>
                Every car and motorcycle is treated with patient attention, ensuring water pressure, soap concentrations, and drying mitts never damage sensitive clear coats or interior materials.
              </p>
            </div>

            {/* Factual Specification Glass Ledger */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/[0.08] mb-10">
              <div className="p-6 rounded-2xl bg-neutral-900/60 border border-white/[0.06] backdrop-blur-md">
                <span className="text-xs font-mono text-amber-400 block mb-1">
                  LOCATION
                </span>
                <span className="text-sm font-bold text-white uppercase font-heading">
                  Ganpathi Nagar, Konia, Varanasi
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-900/60 border border-white/[0.06] backdrop-blur-md">
                <span className="text-xs font-mono text-amber-400 block mb-1">
                  FACILITY SPEC
                </span>
                <span className="text-sm font-bold text-white uppercase font-heading">
                  Multi-Bay Pressure & Foam Stations
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="btn-luxury-primary px-8 py-4 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-amber-500/10 text-center"
              >
                <span>BOOK APPOINTMENT</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:08115463232"
                className="btn-luxury-glass px-7 py-4 text-xs font-mono flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>DIRECT LINE: 081154 63232</span>
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
            <div className="glass-panel rounded-3xl p-8 sm:p-10 relative">
              <div className="mb-6 pb-6 border-b border-white/[0.08]">
                <span className="text-2xl sm:text-3xl font-extrabold uppercase font-heading text-white block">
                  ROADSTAR'S GARAGE
                </span>
                <span className="text-xs font-mono text-neutral-400 mt-1 block">
                  रोडस्टार्स गेराज // EST. VARANASI
                </span>
              </div>

              <div className="space-y-4 text-xs font-mono text-neutral-300 py-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <span>Four-wheeler high-clearance pressure washing bays.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <span>Paddock stand motorcycle detailing and chain maintenance.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <span>Located directly behind Mangal Murti Hero Agency, Konia.</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
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

