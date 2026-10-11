import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ArrowUpRight, Phone, ShieldCheck } from 'lucide-react';

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

      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-14 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/[0.08] border border-amber-400/20 mb-3 sm:mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-amber-300 font-medium">
                SERVICES WE PROVIDE // BAY SPECIFICATIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading">
              SERVICES & SPECIFICATIONS.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-sm font-normal leading-relaxed">
            Professional automotive care carried out in dedicated bays in Varanasi.
          </p>
        </motion.div>

        {/* Always Horizontal Moving Services Marquee */}
        <div className="mb-8 sm:mb-12 relative overflow-hidden -mx-4 sm:-mx-8 px-4 sm:px-8 py-2">
          {/* Edge fade gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="flex gap-3 sm:gap-5 w-max"
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
                onClick={() => onSelectService(srv.name)}
                className="flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-neutral-900/90 border border-amber-400/30 backdrop-blur-xl shadow-md shrink-0 cursor-pointer group hover:border-amber-400 transition-colors"
              >
                <span className="text-amber-400 text-sm font-bold">🔹</span>
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

        {/* Vertical Stacked List of Services */}
        <div className="flex flex-col space-y-3 sm:space-y-4 mb-10">
          {serviceList.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 6, borderColor: 'rgba(245, 196, 0, 0.5)' }}
              onClick={() => onSelectService(service.name)}
              className="glass-panel-hover rounded-xl sm:rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 group cursor-pointer border border-white/[0.08] transition-all"
            >
              {/* Left Column: Arrow + Title + Description */}
              <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1">
                {/* Arrow Icon replacing emoji */}
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0 text-amber-400 group-hover:bg-amber-400 group-hover:text-black group-hover:translate-x-1 transition-all mt-0.5 sm:mt-0">
                  <ArrowRight className="w-4 h-4" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 flex-1">
                  <h3 className="text-base sm:text-lg font-bold font-heading text-white group-hover:text-amber-300 transition-colors uppercase tracking-tight whitespace-nowrap">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Right Column: Tag & Book Action */}
              <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/[0.06]">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-amber-300/90 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                  {service.tag}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectService(service.name);
                  }}
                  className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-neutral-300 group-hover:text-amber-400 transition-colors cursor-pointer"
                >
                  <span className="hidden xs:inline">BOOK BAY</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Custom Combination Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-5 sm:p-7 bg-gradient-to-r from-amber-500/[0.12] via-neutral-900/80 to-neutral-900/60 border border-amber-400/30 backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-[10px] font-mono uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3 h-3" />
              <span>CUSTOM SERVICE PACKAGE</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold font-heading uppercase text-white mb-1">
              NEED COMBINED WASH & COMPLETE DETAILING?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 font-normal">
              Direct desk assistance for exterior wash, underbody chassis blast & cabin vacuum packages.
            </p>
          </div>

          <a
            href="tel:08115463232"
            className="btn-luxury-primary py-3 px-5 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/10 shrink-0 text-center"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>CALL 081154 63232</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
