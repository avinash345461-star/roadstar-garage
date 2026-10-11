import React from 'react';
import { motion } from 'framer-motion';
import { Star, Check, Sparkles, ArrowUpRight } from 'lucide-react';

export default function FeatureSection({ onOpenBooking }) {
  return (
    <section id="philosophy" className="relative py-28 md:py-36 bg-black border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Authentic Photography Glass Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="p-3.5 rounded-3xl bg-neutral-900/60 border border-white/10 backdrop-blur-2xl shadow-2xl relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-black relative">
                <img
                  src="/roadstars-hero-car.jpg"
                  alt="Precision automotive detailing at Roadstar's Garage"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Frosted Label */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-black/80 border border-white/10 backdrop-blur-xl flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-200 uppercase font-medium">
                    ROADSTAR'S GARAGE // FINISHED IN BAY
                  </span>
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-mono font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>4.9 ★ RATED</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Philosophy & Standards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/[0.08] border border-amber-400/20 mb-6 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300 font-medium">
                STANDARDS // THE ROADSTAR WAY
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading mb-6 leading-tight">
              METICULOUS DETAIL. <br />
              <span className="text-neutral-400">HONEST SERVICE.</span>
            </h2>

            <p className="text-base text-neutral-400 font-normal leading-relaxed mb-8">
              We started Roadstar's Garage with a simple standard: wash vehicles the right way, use safe chemicals, treat customers with respect, and deliver showroom results every single time.
            </p>

            {/* Factual Quote Glass Block */}
            <div className="glass-panel rounded-2xl p-6 mb-8 border-l-4 border-l-amber-400">
              <div className="flex items-center gap-1.5 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="text-xs font-mono font-bold text-white ml-2">4.9 / 5.0 GOOGLE RATING</span>
              </div>
              <blockquote className="text-base sm:text-lg font-medium text-neutral-200 italic leading-relaxed">
                "Nice quality of work at a great price, friendly and polite behaviour of staff."
              </blockquote>
              <span className="text-xs font-mono text-neutral-400 block mt-2">
                — Verified Varanasi Vehicle Owner Feedback
              </span>
            </div>

            {/* Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
              {[
                'Dedicated Car & Bike Bays',
                'Zero-Scratch Microfiber Methods',
                'Certified Paint Safe Chemistry',
                'Clear & Upfront Pricing',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs font-mono text-neutral-300">
                  <div className="w-5 h-5 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-amber-400" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="btn-luxury-primary w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10 text-center"
              >
                <span>SCHEDULE A SERVICE WITH US</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}


