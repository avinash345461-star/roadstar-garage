import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Award, Users, DollarSign } from 'lucide-react';

export default function WhyRoadstar() {
  const pillars = [
    {
      number: '01',
      title: 'UNCOMPROMISING QUALITY',
      icon: Award,
      description:
        'Every vehicle undergoes dedicated multi-point inspection — from clean inner wheel barrels and fender liners to streak-free glass and deep door jambs.',
    },
    {
      number: '02',
      title: 'RESPECTFUL CREW',
      icon: Users,
      description:
        'Our trained staff is courteous, punctual, and attentive to specific customer requests, ensuring a transparent, hospitality-driven experience.',
    },
    {
      number: '03',
      title: 'PAINT-SAFE FORMULAS',
      icon: Shield,
      description:
        'We use dedicated automotive grade pH-neutral detergents, soft microfibers, and calibrated pressure levels that protect your clear coat and PPF.',
    },
    {
      number: '04',
      title: 'HONEST VALUE & PRICING',
      icon: DollarSign,
      description:
        'Fair, straightforward pricing with zero hidden surcharges for thorough exterior washes, ceramic coatings, and interior deep restoration.',
    },
  ];

  return (
    <section className="relative py-14 sm:py-24 md:py-36 bg-black border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Title */}
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
              CORE PILLARS // WHY ROADSTAR'S
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white font-heading">
            WHY CLIENTS TRUST OUR BAY.
          </h2>
        </motion.div>

        {/* Continuous Horizontal Moving Marquee for Pillars */}
        <div className="relative overflow-hidden -mx-4 sm:-mx-8 px-4 sm:px-8 py-2">
          {/* Subtle edge fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="flex gap-4 sm:gap-7 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 48,
              ease: 'linear',
            }}
            whileHover={{ animationPlayState: 'paused' }}
          >
            {/* Duplicated array for seamless continuous loop */}
            {[...pillars, ...pillars].map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={`${pillar.number}-${idx}`}
                  className="glass-panel-hover rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between group w-[280px] sm:w-[320px] shrink-0"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="text-2xl sm:text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                        {pillar.number}
                      </div>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-amber-400 group-hover:border-amber-400/40 group-hover:scale-110 transition-all">
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold font-heading tracking-tight text-white mb-2 sm:mb-3 group-hover:text-amber-300 transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-300 sm:text-neutral-400 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="w-6 sm:w-8 h-[2px] bg-white/10 group-hover:bg-amber-400 group-hover:w-12 sm:group-hover:w-16 transition-all duration-300 mt-5 sm:mt-6 rounded-full"></div>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}


