import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, Star, ShieldCheck, Sparkles } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  const googleMapsUrl =
    'https://www.google.com/maps/place/Roadstar%E2%80%99s+Garage/@25.3544559,83.0113916,17z/data=!4m6!3m5!1s0x398e2ff189e879c1:0x84dc4f29b4a3c33d!8m2!3d25.3544559!4d83.0113916!16s%2Fg%2F11pyzdp0s_';

  return (
    <section id="home" className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 md:pt-44 md:pb-32 overflow-hidden bg-black border-b border-white/[0.06]">
      {/* Ambient warm amber lighting mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[250px] sm:h-[350px] bg-amber-500/[0.03] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Minimal Typography & Editorial Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Stamp / Section Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-amber-400/[0.08] border border-amber-400/25 backdrop-blur-md mb-5 sm:mb-8 w-fit"
            >
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
              <span className="text-[10px] sm:text-[11px] font-mono font-medium uppercase tracking-widest text-amber-300">
                PREMIUM VEHICLE CARE & DETAILING
              </span>
            </motion.div>

            {/* Dominant Headline */}
            <div className="mb-4 sm:mb-6">
              <h1 className="text-2xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white font-heading leading-[1.12] sm:leading-[1.05]">
                BUILT FOR THE ROAD.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 block mt-0.5 sm:mt-1">
                  PERFECTED IN THE BAY.
                </span>
              </h1>
            </div>

            {/* Factual Subtitle */}
            <p className="text-xs sm:text-base lg:text-lg text-neutral-400 max-w-xl font-normal leading-relaxed mb-6 sm:mb-10">
              Professional car washing, high-precision foam treatments, interior sanitization, and 9H ceramic coating in Varanasi. Built on genuine craftsmanship, paint-safe formulations, and attention to every millimeter.
            </p>

            {/* Action Bar */}
            <div className="flex flex-row items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="btn-luxury-primary flex-1 sm:flex-initial px-4 py-3 sm:px-8 sm:py-4 text-xs font-bold flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer shadow-lg shadow-amber-500/10"
              >
                <span>BOOK BAY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-glass flex-1 sm:flex-initial px-4 py-3 sm:px-7 sm:py-4 text-xs font-mono flex items-center justify-center gap-1.5 sm:gap-2.5"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>DIRECTIONS</span>
              </motion.a>
            </div>

            {/* Structured Proof Meta Glass Container */}
            <div className="pt-5 sm:pt-8 border-t border-white/[0.08] grid grid-cols-2 gap-2.5 sm:gap-4">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-neutral-900/60 border border-white/[0.08] backdrop-blur-md flex items-center gap-2.5 sm:gap-3.5">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-heading font-bold text-sm sm:text-base text-white">4.9 / 5.0</span>
                    <span className="text-[9px] sm:text-[10px] font-mono px-1 sm:px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-400 font-semibold hidden xs:inline">173+</span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-neutral-400 block mt-0.5">
                    Verified Google Rating
                  </span>
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-neutral-900/60 border border-white/[0.08] backdrop-blur-md flex items-center gap-2.5 sm:gap-3.5">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-neutral-800/90 border border-white/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-white block">
                    Certified Bay
                  </span>
                  <span className="text-[10px] sm:text-xs text-neutral-400 block mt-0.5 truncate">
                    Konia, Varanasi
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Architectural Photography Frame with Glass Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl p-3 bg-gradient-to-b from-white/10 via-white/[0.02] to-transparent border border-white/10 shadow-2xl backdrop-blur-xl group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-black">
                <img
                  src="/roadstars-hero-car.jpg"
                  alt="Fine automotive finish inside Roadstar's Garage wash bay Varanasi"
                  className="w-full h-full object-cover object-bottom transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />

                {/* Subtle dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                {/* Technical Glass Overlay Tag */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-black/80 border border-white/10 backdrop-blur-xl flex items-center justify-between font-mono text-xs">
                  <div className="flex flex-col">
                    <span className="text-white font-medium">TATA SAFARI // FULL FINISH</span>
                    <span className="text-[10px] text-neutral-400">CERAMIC HYDROPHOBIC COAT</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-300 font-bold text-[11px]">
                    BAY 01
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


