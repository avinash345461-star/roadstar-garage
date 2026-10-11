import React from 'react';
import { motion } from 'framer-motion';

export default function TrustStrip() {
  const metrics = [
    {
      figure: '4.9 ★',
      title: 'GOOGLE RATING',
      desc: 'Top-rated in Varanasi',
      accent: true,
    },
    {
      figure: '173+',
      title: 'CLIENT REVIEWS',
      desc: 'Verified owner feedback',
      accent: true,
    },
    {
      figure: '100%',
      title: 'PAINT-SAFE FORMULAS',
      desc: 'pH-neutral shampoos & snow foams',
      accent: false,
    },
    {
      figure: '2-BAY',
      title: 'DEDICATED STATIONS',
      desc: 'Cars & superbike lines',
      accent: false,
    },
    {
      figure: '081154',
      title: 'DIRECT HELPLINE',
      desc: 'Instant booking dispatch',
      accent: false,
    },
  ];

  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-6 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel rounded-3xl p-6 sm:p-8 backdrop-blur-2xl bg-neutral-900/60 border border-white/[0.08]"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="border-l border-white/[0.08] pl-5 flex flex-col justify-between"
            >
              <div
                className={`text-2xl sm:text-3xl font-extrabold font-heading tracking-tight mb-1.5 ${
                  item.accent
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500'
                    : 'text-white'
                }`}
              >
                {item.figure}
              </div>
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-200">
                  {item.title}
                </div>
                <div className="text-xs text-neutral-400 mt-0.5 font-normal leading-relaxed">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


