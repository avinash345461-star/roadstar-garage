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
    <section className="relative py-28 md:py-36 bg-black border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/[0.08] border border-amber-400/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300 font-medium">
              CORE PILLARS // WHY ROADSTAR'S
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading">
            WHY CLIENTS TRUST OUR BAY.
          </h2>
        </motion.div>

        {/* 4 Pillars Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="glass-panel-hover rounded-3xl p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                      {pillar.number}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-amber-400 group-hover:border-amber-400/40 group-hover:scale-110 transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-heading tracking-tight text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="w-8 h-[2px] bg-white/10 group-hover:bg-amber-400 group-hover:w-16 transition-all duration-300 mt-8 rounded-full"></div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


