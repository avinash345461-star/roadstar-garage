import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, PhoneCall } from 'lucide-react';

export default function Services({ onSelectService }) {
  const services = [
    {
      id: 'car-wash',
      number: '01',
      title: 'PRECISION EXTERIOR CAR WASH',
      category: 'EXTERIOR CARE',
      description: 'Comprehensive high-pressure multi-stage wash covering body contours, wheel arches, glass, and sill lines with microfiber dry finish.',
      image: '/roadstars-google-review-wash.jpg',
      specs: ['Two-bucket wash system', 'Tire shine & wheel degreasing', 'Streak-free glass wipe'],
    },
    {
      id: 'foam-wash',
      number: '02',
      title: 'HIGH-DENSITY SNOW FOAM WASH',
      category: 'DEEP CLEAN',
      description: 'Thick pH-neutral active foam blanket that emulsifies and lifts stubborn traffic film and grit without abrasive micro-marring.',
      image: '/roadstars-foam-wash.jpg',
      specs: ['Safe on clear coats & PPF', 'Crevice agitation with soft brush', 'De-ionized water rinse'],
    },
    {
      id: 'pressure-wash',
      number: '03',
      title: 'HIGH-PRESSURE DEBRIS BLAST',
      category: 'HEAVY DUTY',
      description: 'High-bar calibrated water jetting designed to remove deep road tar, caked mud, and grit from wheels, grilles, and arches.',
      image: '/roadstars-pressure-wash-action.jpg',
      specs: ['Targeted nozzle pressure', 'Fender liner flush', 'Suspension & hub de-dusting'],
    },
    {
      id: 'interior-cleaning',
      number: '04',
      title: 'CABIN DEEP VACUUM & SANITIZATION',
      category: 'CABIN DETAIL',
      description: 'Industrial high-suction vacuum extraction, seat fabric/leather treatment, mat dry cleaning, and dashboard UV satin finish.',
      image: '/roadstars-vacuum-cleaning.jpg',
      specs: ['Industrial extraction', 'AC vent crevice brushing', 'Odor neutralizer treatment'],
    },
    {
      id: 'bike-wash',
      number: '05',
      title: 'SUPERBIKE & MOTORCYCLE DETAILING',
      category: 'TWO-WHEELER',
      description: 'Specialized wash station tailored for superbikes and commuters. Swingarm cleaning, chain degrease, engine fin detailing, and alloy polish.',
      image: '/roadstars-bike-wash.jpg',
      specs: ['Paddock stand mounting', 'Chain degrease & lube safe', 'Silencer & rim shine'],
    },
    {
      id: 'ceramic-coating',
      number: '06',
      title: '9H NANO-CERAMIC COATING & PPF',
      category: 'SURFACE PROTECTION',
      description: 'Ultra-hard 9H silicon dioxide nano-shield hand applied for deep mirror gloss, extreme hydrophobicity, UV resistance, and scratch barrier.',
      image: '/roadstars-ceramic-coating.png',
      specs: ['Multi-layer 9H formulation', 'Extreme water beading', 'Long-lasting paint gloss'],
    },
    {
      id: 'car-polish',
      number: '07',
      title: 'STAGE 1/2 PAINT CORRECTION & POLISH',
      category: 'PAINT RESTORATION',
      description: 'Dual-action machine compounding to eliminate swirl marks, light oxidation, and water etching to restore flawless reflective depth.',
      image: '/roadstars-car-polish.jpg',
      specs: ['Swirl mark elimination', 'Carnauba / sealant lock', 'High optical clarity'],
    },
    {
      id: 'underbody-wash',
      number: '08',
      title: 'HYDRAULIC UNDERBODY WASH & COAT',
      category: 'CHASSIS CARE',
      description: 'Vehicle elevation on hydraulic ramps with heavy-duty multi-angle pressure jets to remove salt, rust promoters, and road sludge.',
      image: '/roadstars-underbody-wash.jpg',
      specs: ['Ramp lift clearance', 'Exhaust & axle jet wash', 'Anti-corrosion rinse'],
    },
    {
      id: 'robotic-car-wash',
      number: '09',
      title: 'TOUCHLESS ROBOTIC HIGH-SPEED WASH',
      category: 'AUTOMATION',
      description: 'Automated touchless contour scanning system for high-velocity rinse and rapid exterior conditioning.',
      image: '/roadstars-robotic-car-wash.jpg',
      specs: ['Rapid 15-minute cycle', 'Zero brush contact', 'Even chemical dispersion'],
    },
  ];

  return (
    <section id="services" className="relative py-14 sm:py-24 md:py-36 bg-black border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
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
                CATALOG // VEHICLE CARE & DETAILING
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white font-heading">
              SERVICES & SPECIFICATIONS.
            </h2>
          </div>
          <p className="text-xs sm:text-base text-neutral-400 max-w-lg font-normal leading-relaxed">
            Every service at Roadstar's Garage is carried out using dedicated automotive formulations and trained technicians. Select a package to schedule in our Varanasi bays.
          </p>
        </motion.div>

        {/* Technical Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="glass-panel-hover rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between group"
            >
              {/* Image Container with Luxury Frost Badge */}
              <div className="relative aspect-[16/9] sm:aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Category Badge */}
                <div className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg bg-black/80 border border-white/10 backdrop-blur-md text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-neutral-300">
                  {srv.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-base sm:text-xl font-bold font-heading tracking-tight text-white mb-2 sm:mb-3 group-hover:text-amber-300 transition-colors leading-snug">
                    {srv.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4 sm:mb-6 font-normal">
                    {srv.description}
                  </p>

                  {/* Specification list */}
                  <div className="space-y-1.5 sm:space-y-2.5 mb-4 sm:mb-7 border-t border-white/[0.06] pt-3.5 sm:pt-5">
                    {srv.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-3.5 sm:pt-5 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-mono text-neutral-500 uppercase">
                    VARANASI BAY
                  </span>
                  <button
                    onClick={() => onSelectService(srv.title)}
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-200 group-hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    <span>SCHEDULE THIS</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Custom Requirement Inquiry Box */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 bg-gradient-to-br from-amber-500/[0.08] via-neutral-900/80 to-neutral-900/60 border border-amber-400/30 backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-[10px] sm:text-xs font-mono uppercase tracking-wider mb-4 sm:mb-6">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>CUSTOM SPECIFICATION</span>
              </div>
              
              <h3 className="text-lg sm:text-3xl font-extrabold font-heading tracking-tight text-white mb-2 sm:mb-3">
                LOOKING FOR CUSTOM COMBINATION CARE?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6 sm:mb-8 font-normal">
                Need engine bay degreasing, AC ozone sanitization, or fleet washing? Call our garage desk directly for instant queue assessment and custom package pricing.
              </p>
            </div>

            <div className="space-y-3 pt-4 sm:pt-6 border-t border-white/[0.08]">
              <a
                href="tel:08115463232"
                className="w-full btn-luxury-primary py-3 sm:py-4 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/10"
              >
                <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>CALL 081154 63232</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


