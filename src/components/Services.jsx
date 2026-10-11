import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Phone, ShieldCheck } from 'lucide-react';

export default function Services({ onSelectService }) {
  const serviceList = [
    { name: 'Bike Wash', tag: 'TWO-WHEELER', desc: 'Paddock stand mounting, chain degreasing, safe pressure wash & blower dry.' },
    { name: 'Car Wash', tag: 'FOUR-WHEELER', desc: 'Precision multi-stage exterior body wash, arches cleaning & streak-free dry.' },
    { name: 'Foam Wash', tag: 'HIGH-DENSITY', desc: 'Thick pH-neutral snow foam bath lifting grime without micro-marring paint.' },
    { name: 'Under Body Wash', tag: 'CHASSIS CARE', desc: 'High-pressure undercarriage jetting removing road salt, caked mud & tar.' },
    { name: 'Interior Clean', tag: 'CABIN DETAIL', desc: 'Deep upholstery extraction, dashboard UV satin polish & stain treatment.' },
    { name: 'Vaccume', tag: 'DEEP SUCTION', desc: 'High-power industrial vacuuming for carpets, boot space, seats & crevices.' },
    { name: 'Robotics Wash', tag: 'PRECISION AUTO', desc: 'Automated calibrated touchless contour wash for flawless showroom finish.' },
  ];

  return (
    <section id="services" className="relative py-16 sm:py-24 md:py-36 bg-black border-b border-white/[0.06] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/[0.04] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/[0.08] border border-amber-400/20 mb-3 sm:mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-amber-300 font-medium">
                SERVICES WE PROVIDE // BAY SPECIFICATIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white font-heading">
              SERVICES & SPECIFICATIONS.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-300 max-w-lg font-normal leading-relaxed">
            Every wash and detail package is performed using dedicated formulations, calibrated water pressures, and trained hands in our Varanasi bays.
          </p>
        </motion.div>

        {/* Floating Marquee Animation Strip for Services */}
        <div className="mb-10 sm:mb-14 relative overflow-hidden -mx-4 sm:-mx-8 px-4 sm:px-8 py-3">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="flex gap-4 sm:gap-6 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            }}
          >
            {[...serviceList, ...serviceList].map((srv, idx) => (
              <div
                key={`marquee-${srv.name}-${idx}`}
                className="flex items-center gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-neutral-900/90 border border-amber-400/30 backdrop-blur-xl shadow-lg shrink-0 group hover:border-amber-400 transition-colors"
              >
                <span className="text-amber-400 text-sm sm:text-base font-bold">🔹</span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider font-heading text-white group-hover:text-amber-300 transition-colors whitespace-nowrap">
                  {srv.name}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-amber-400/80 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                  {srv.tag}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bullet Points Grid of Services Provided */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {serviceList.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, borderColor: 'rgba(245, 196, 0, 0.4)' }}
              className="glass-panel-hover rounded-2xl p-5 sm:p-6 flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-amber-400 text-base sm:text-lg">🔹</span>
                    <h3 className="text-base sm:text-xl font-bold font-heading text-white group-hover:text-amber-300 transition-colors uppercase tracking-tight">
                      {service.name}
                    </h3>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded-md border border-white/[0.08]">
                    {service.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal mb-5 pl-7">
                  {service.desc}
                </p>
              </div>

              <div className="pt-3.5 border-t border-white/[0.06] flex items-center justify-between pl-7">
                <span className="text-[10px] sm:text-[11px] font-mono text-neutral-500 uppercase">
                  ROADSTAR'S VARANASI BAY
                </span>
                <button
                  onClick={() => onSelectService(service.name)}
                  className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-300 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  <span>BOOK BAY</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}

          {/* Quick Custom Package Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-500/[0.12] via-neutral-900/80 to-neutral-900/60 border border-amber-400/30 backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-[10px] sm:text-xs font-mono uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ALL-IN-ONE CARE</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-heading uppercase text-white mb-2">
                CUSTOM COMBO SERVICE
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal mb-4">
                Combine exterior robotics wash, underbody chassis blast & deep vacuuming in a single bay visit.
              </p>
            </div>

            <div className="pt-3.5 border-t border-white/[0.08]">
              <a
                href="tel:08115463232"
                className="w-full btn-luxury-primary py-3 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/10"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>CALL 081154 63232</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
