import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Gift, Star, Sparkles, MapPin } from 'lucide-react';

export default function SocialSection() {
  const googleMapsUrl =
    'https://www.google.com/maps/place/Roadstar%E2%80%99s+Garage/@25.3544559,83.0113916,17z/data=!4m6!3m5!1s0x398e2ff189e879c1:0x84dc4f29b4a3c33d!8m2!3d25.3544559!4d83.0113916!16s%2Fg%2F11pyzdp0s_';

  const channels = [
    {
      name: 'INSTAGRAM',
      handle: '@roadstar__garage',
      desc: 'Before & after detailing transformations, ceramic hydrophobic demos, and daily bay stories.',
      url: 'https://www.instagram.com/roadstar__garage/',
      tag: 'TRANSFORMATIONS',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      ),
    },
    {
      name: 'GOOGLE MAPS',
      handle: '4.9 ★ (173+ REVIEWS)',
      desc: 'Read authentic customer experiences or leave your review to support our local Varanasi garage.',
      url: googleMapsUrl,
      tag: 'RATINGS & DIRECTIONS',
      icon: <MapPin className="w-5 h-5" />,
    },
    {
      name: 'YOUTUBE',
      handle: '@roadstarsgarage7971',
      desc: 'In-depth automotive wash guides, superbike detailing breakdowns, and coating walkthroughs.',
      url: 'https://www.youtube.com/@roadstarsgarage7971',
      tag: 'VIDEO SHOWCASE',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
          <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
        </svg>
      ),
    },
    {
      name: 'FACEBOOK',
      handle: "Roadstar's Garage",
      desc: 'Community posts, garage updates, service announcements, and customer interaction.',
      url: 'https://www.facebook.com/profile.php?id=100077320563385',
      tag: 'COMMUNITY',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="socials" className="relative py-28 md:py-36 bg-black border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* 10% OFF INCENTIVE GLASS BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-amber-500/[0.12] via-neutral-900/80 to-neutral-900/40 border border-amber-400/30 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
        >
          {/* Subtle gold glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 flex flex-col sm:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-amber-400/10 border border-amber-400/25 flex items-center justify-center shrink-0 text-amber-400 shadow-lg">
                <Gift className="w-8 h-8" />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>COMMUNITY BENEFIT // 10% DISCOUNT</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold font-heading tracking-tight text-white leading-tight mb-3">
                  FOLLOW OUR PLATFORMS & POST A REVIEW FOR 10% DISCOUNT
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl font-normal">
                  Follow Roadstar's Garage on Instagram and share your honest feedback on Google Maps. Show your review at the desk to receive an instant <strong className="text-amber-300 font-semibold">10% discount</strong> on your car or bike wash.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3.5">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-primary py-4 px-6 text-xs font-bold flex items-center justify-center gap-2 text-center shadow-lg shadow-amber-500/10 cursor-pointer"
              >
                <Star className="w-4 h-4 fill-black text-black" />
                <span>WRITE GOOGLE REVIEW</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.instagram.com/roadstar__garage/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-glass py-3.5 px-6 text-xs font-mono flex items-center justify-center gap-2 text-center"
              >
                <span>OPEN INSTAGRAM</span>
                <ArrowUpRight className="w-4 h-4 text-amber-400" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/[0.08] border border-amber-400/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300 font-medium">
                NETWORK // DIGITAL CHANNELS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading">
              OFFICIAL PLATFORMS.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md font-normal leading-relaxed">
            Follow our transformations, watch high-definition video walkthroughs, or connect with our team online.
          </p>
        </motion.div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {channels.map((chan, idx) => (
            <motion.a
              key={chan.name}
              href={chan.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="glass-panel-hover rounded-3xl p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-300 group-hover:text-amber-400 group-hover:border-amber-400/30 transition-colors">
                    {chan.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 bg-neutral-900 px-2.5 py-1 rounded-lg border border-white/[0.06]">
                    {chan.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading tracking-tight text-white mb-1 group-hover:text-amber-300 transition-colors flex items-center justify-between">
                  <span>{chan.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>

                <span className="text-xs font-mono text-amber-400 block mb-3 font-semibold">
                  {chan.handle}
                </span>

                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  {chan.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.06] mt-6 text-xs font-mono text-neutral-400 group-hover:text-neutral-200 flex items-center justify-between">
                <span>CONNECT</span>
                <span>→</span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
