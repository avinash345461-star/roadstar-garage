import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowUpRight, Sparkles } from 'lucide-react';

export default function CustomerReviews() {
  const reviews = [
    {
      quote: 'Nice quality of work at a great price, friendly and polite behaviour of staff.',
      author: 'Google Verified Reviewer',
      location: 'Varanasi',
      tag: 'Quality & Staff',
    },
    {
      quote: 'The behavior of all the employees working at your place is very good.',
      author: 'Google Verified Reviewer',
      location: 'Varanasi',
      tag: 'Hospitality',
    },
    {
      quote: 'Excellent service, would definitely recommend to family and friends.',
      author: 'Google Verified Reviewer',
      location: 'Varanasi',
      tag: 'Recommendation',
    },
    {
      quote: 'Service is top notch. Professional, friendly and quick.',
      author: 'Google Verified Reviewer',
      location: 'Varanasi',
      tag: 'Speed & Service',
    },
    {
      quote: 'Pressure wash + soap wash + interior dry clean. Made my vehicle look spanking new.',
      author: 'Google Verified Reviewer',
      location: 'Varanasi',
      tag: 'Full Detailing',
    },
  ];

  const googleMapsUrl =
    'https://www.google.com/maps/place/Roadstar%E2%80%99s+Garage/@25.3544559,83.0113916,17z/data=!4m6!3m5!1s0x398e2ff189e879c1:0x84dc4f29b4a3c33d!8m2!3d25.3544559!4d83.0113916!16s%2Fg%2F11pyzdp0s_';

  return (
    <section id="reviews" className="relative py-14 sm:py-24 md:py-36 bg-black border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header with High-Contrast Rating Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-20 gap-4 sm:gap-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/[0.08] border border-amber-400/20 mb-3 sm:mb-4">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-amber-300 font-medium">
                AUTHENTIC GOOGLE REVIEWS // 4.9 RATING
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white font-heading">
              WHAT VEHICLE OWNERS SAY.
            </h2>
          </div>

          <div className="glass-panel rounded-2xl sm:rounded-3xl px-5 sm:px-8 py-4 sm:py-5 flex items-center gap-3.5 sm:gap-6 w-full sm:w-auto justify-start">
            <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 font-heading shrink-0">
              4.9
            </div>
            <div className="border-l border-white/10 pl-3.5 sm:pl-6">
              <div className="flex text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-[11px] sm:text-xs font-mono text-neutral-300 sm:text-neutral-400 uppercase block font-medium">
                173+ Verified Client Ratings
              </span>
            </div>
          </div>
        </motion.div>

        {/* Always Horizontally Moving Customer Reviews - Single Horizontal Layer */}
        <div className="relative overflow-hidden py-2 -mx-4 sm:-mx-8 px-4 sm:px-8">
          {/* Subtle edge fade gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          {/* Single horizontal flex row with continuous smooth marquee */}
          <div className="animate-marquee-continuous flex flex-nowrap gap-4 sm:gap-6 py-2">
            {[...reviews, ...reviews].map((rev, idx) => (
              <div
                key={idx}
                className="shrink-0 w-[270px] sm:w-[340px] md:w-[380px] glass-panel-hover rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-white/[0.06]">
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded-lg border border-amber-400/20">
                      {rev.tag}
                    </span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-xs sm:text-sm font-medium text-neutral-100 sm:text-neutral-200 leading-relaxed mb-4 line-clamp-3">
                    "{rev.quote}"
                  </blockquote>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span className="text-white uppercase font-semibold text-[11px] sm:text-xs">{rev.author}</span>
                  <span className="text-[11px] sm:text-xs text-amber-400/80">{rev.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Review Prompt Glass Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-16 glass-panel rounded-2xl sm:rounded-3xl p-5 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6"
        >
          <div>
            <div className="text-base sm:text-lg font-bold font-heading text-white mb-1">
              HAVE YOU VISITED ROADSTAR'S GARAGE?
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl font-normal leading-relaxed">
              Help other car and bike owners in Varanasi find quality vehicle care. Post your feedback on Google Maps.
            </p>
          </div>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury-primary w-full sm:w-auto py-3 sm:py-3.5 px-6 sm:px-7 text-xs font-bold shrink-0 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/10 text-center"
          >
            <span>RATE US ON GOOGLE MAPS</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

