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
    <section className="relative -mt-4 sm:-mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 backdrop-blur-2xl bg-neutral-900/80 border border-white/[0.08] shadow-2xl"
      >
        {/* Horizontal scroll container on mobile, fits seamlessly without breaking screen */}
        <div className="flex md:grid md:grid-cols-5 gap-3 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-1 -my-1">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="snap-start shrink-0 min-w-[135px] sm:min-w-0 flex-1 border-l border-amber-400/30 pl-3 sm:pl-4 flex flex-col justify-between"
            >
              {/* Yellow Figure Heading */}
              <div className="text-lg sm:text-2xl lg:text-3xl font-extrabold font-heading tracking-tight text-amber-400 mb-0.5">
                {item.figure}
              </div>

              <div>
                {/* Yellow Title Heading */}
                <div className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-amber-300/90 leading-tight">
                  {item.title}
                </div>

                {/* White Context */}
                <div className="text-[10px] sm:text-xs text-white/90 mt-0.5 sm:mt-1 font-medium leading-snug">
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


