import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, ArrowUpRight, Sparkles, Navigation } from 'lucide-react';

export default function LocationSection() {
  const googleMapsUrl =
    'https://www.google.com/maps/place/Roadstar%E2%80%99s+Garage/@25.3544559,83.0113916,17z/data=!4m6!3m5!1s0x398e2ff189e879c1:0x84dc4f29b4a3c33d!8m2!3d25.3544559!4d83.0113916!16s%2Fg%2F11pyzdp0s_';

  return (
    <section id="contact" className="relative py-14 sm:py-24 md:py-36 bg-black border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/[0.08] border border-amber-400/20 mb-3 sm:mb-4">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-amber-300 font-medium">
              COORDINATES // ARRIVAL & ACCESS
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white font-heading">
            LOCATION & WORKSHOP ACCESS.
          </h2>
        </motion.div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8">
          
          {/* Detailed Address Glass Ledger */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 glass-panel rounded-2xl sm:rounded-3xl p-5 sm:p-12 flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/[0.08] pb-4 sm:pb-6 mb-5 sm:mb-8 gap-3 sm:gap-4">
                <div>
                  <h3 className="text-lg sm:text-2xl font-extrabold font-heading uppercase tracking-tight text-white">
                    ROADSTAR'S GARAGE
                  </h3>
                  <span className="text-[11px] sm:text-xs font-mono text-neutral-400 mt-0.5 sm:mt-1 block">
                    रोडस्टार्स गेराज // GANPATHI NAGAR, KONIA
                  </span>
                </div>
                <div className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl bg-neutral-900 border border-white/10 text-[11px] sm:text-xs font-mono text-amber-400 w-fit">
                  PLUS CODE: 9236+QH
                </div>
              </div>

              {/* Landmark Breakdown */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-neutral-900 border border-white/10 text-amber-400 shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-mono text-neutral-400 uppercase block mb-0.5 sm:mb-1">
                      WORKSHOP ADDRESS
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-neutral-200 leading-relaxed">
                      Behind Mangal Murti Hero Agency, <br />
                      Near Bharat Tent House, Ganpathi Nagar, Konia, <br />
                      Varanasi, Uttar Pradesh — 221007
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-neutral-900 border border-white/10 text-amber-400 shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-mono text-neutral-400 uppercase block mb-0.5 sm:mb-1">
                      DIRECT DESK PHONE
                    </span>
                    <a
                      href="tel:08115463232"
                      className="text-base sm:text-lg font-mono font-bold text-white hover:text-amber-300 transition-colors"
                    >
                      081154 63232
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-5 sm:pt-8 border-t border-white/[0.08] mt-6 sm:mt-10 flex flex-row gap-3 sm:gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-primary flex-1 py-3.5 sm:py-4 text-xs font-bold flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer shadow-lg shadow-amber-500/10 text-center"
              >
                <span>OPEN MAPS</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:08115463232"
                className="btn-luxury-glass flex-1 py-3.5 sm:py-4 text-xs font-mono flex items-center justify-center gap-1.5 sm:gap-2 text-center"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                <span>CALL DESK</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Map & Landmark Reference Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 glass-panel rounded-2xl sm:rounded-3xl p-5 sm:p-10 flex flex-col justify-between"
          >
            <div className="rounded-xl sm:rounded-2xl bg-neutral-900/60 border border-white/[0.06] p-5 sm:p-8 text-center flex flex-col items-center justify-center h-full">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-4 sm:mb-6 text-amber-400 shadow-inner">
                <Navigation className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>

              <h4 className="text-base sm:text-xl font-bold font-heading uppercase tracking-tight text-white mb-1.5 sm:mb-2">
                GANPATHI NAGAR, KONIA
              </h4>
              <p className="text-xs font-mono text-neutral-400 max-w-xs mb-5 sm:mb-8 leading-relaxed font-normal">
                Direct approach road located just behind Mangal Murti Hero Agency with wide vehicle turning clearance.
              </p>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-glass px-5 sm:px-7 py-3 sm:py-3.5 text-xs font-mono flex items-center gap-2"
              >
                <span>LAUNCH NAVIGATION</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

