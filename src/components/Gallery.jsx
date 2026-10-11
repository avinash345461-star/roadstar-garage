import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Maximize2, X, Filter, ArrowUpRight, Phone, Sparkles } from 'lucide-react';

export default function PreviousWorksPage({ onBackToHome, onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Lock scroll on iOS when lightbox modal is active
  useEffect(() => {
    if (activeLightboxImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeLightboxImage]);

  const categories = [
    { id: 'ALL', label: 'ALL PROJECTS' },
    { id: 'CERAMIC', label: '9H CERAMIC & PPF' },
    { id: 'PRESSURE_WASH', label: 'PRESSURE & FOAM' },
    { id: 'BIKE_WASH', label: 'SUPERBIKE DETAILING' },
    { id: 'UNDERBODY', label: 'UNDERBODY & CHASSIS' },
    { id: 'VACUUM', label: 'INTERIOR EXTRACTION' },
    { id: 'ROBOTIC', label: 'TOUCHLESS WASH' },
  ];

  const works = [
    {
      id: 1,
      title: '9H Nano-Ceramic Hydrophobic Coating Application',
      category: 'CERAMIC',
      categoryName: '9H Ceramic Coating',
      tag: 'GLOSS SHIELD',
      image: '/roadstars-ceramic-coating.png',
      description: 'Precision multi-layer 9H nano-coating hand application over gloss black finish for long-lasting hydrophobic protection, swirl defense, and mirror reflectivity.',
    },
    {
      id: 2,
      title: 'High-Pressure Water Jet Exterior Blast - Tata Nexon #DARK',
      category: 'PRESSURE_WASH',
      categoryName: 'Pressure Wash',
      tag: 'DEBRIS REMOVAL',
      image: '/roadstars-pressure-wash-action.jpg',
      description: 'High-pressure calibrated jet spray eliminating road grime, grille crevices, wheel arches, brake dust, and under-hood water channels.',
    },
    {
      id: 3,
      title: 'Sports Superbike Snow Foam Bath & Paddock Stand Detailing',
      category: 'BIKE_WASH',
      categoryName: 'Bike Wash',
      tag: 'TWO WHEELER',
      image: '/roadstars-bike-wash.jpg',
      description: 'pH-neutral snow foam bath, swingarm degreasing, alloy wheel rim detailing, and chain de-gunking on dedicated paddock stands.',
    },
    {
      id: 4,
      title: 'Hydraulic Ramp Underbody Chassis Wash - Mahindra Scorpio',
      category: 'UNDERBODY',
      categoryName: 'Underbody Wash',
      tag: 'CHASSIS PROTECTION',
      image: '/roadstars-underbody-wash.jpg',
      description: 'Elevated hydraulic ramp pressure jet wash cleaning heavy mud crust, axle grease, and salt from the vehicle undercarriage.',
    },
    {
      id: 5,
      title: 'Touchless High-Velocity Studio Finish - White Scorpio',
      category: 'ROBOTIC',
      categoryName: 'Robotic Wash',
      tag: 'TOUCHLESS GLOSS',
      image: '/roadstars-robotic-car-wash.jpg',
      description: 'Even touchless wash finish, full vehicle rinse, and tire glaze conditioning in the main studio washing bay.',
    },
    {
      id: 6,
      title: 'High-Power Commercial Cabin Vacuum & Dry Clean',
      category: 'VACUUM',
      categoryName: 'Interior Detail',
      tag: 'DEEP EXTRACTION',
      image: '/roadstars-vacuum-cleaning.jpg',
      description: 'Deep suction industrial vacuuming extracting dirt from floor mats, seat cushions, AC air ducts, and cabin boot.',
    },
    {
      id: 7,
      title: 'Active High-Density Snow Foam Pre-Soak',
      category: 'PRESSURE_WASH',
      categoryName: 'Foam Wash',
      tag: 'PRE-SOAK',
      image: '/roadstars-foam-wash.jpg',
      description: 'Pre-wash snow foam soak breaking down stubborn road grime without abrasive scratching on clear paint.',
    },
    {
      id: 8,
      title: 'Gloss Black Tata Safari Studio Bay Delivery',
      category: 'CERAMIC',
      categoryName: 'Full Detailing',
      tag: 'MIRROR FINISH',
      image: '/roadstars-hero-car.jpg',
      description: 'Complete multi-stage machine compounding, glaze enhancement, and high-shine studio delivery.',
    },
    {
      id: 9,
      title: 'Precision Exterior Wash & Multi-Point Detailing',
      category: 'PRESSURE_WASH',
      categoryName: 'Car Wash',
      tag: 'CLIENT DELIVERY',
      image: '/roadstars-google-review-wash.jpg',
      description: 'Full exterior foam wash, tire dressing, and glass wipe-down verified by 5-star Google review customer.',
    },
  ];

  const filteredWorks =
    activeCategory === 'ALL'
      ? works
      : works.filter((w) => w.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-neutral-100 pt-24 pb-24">
      
      {/* Top Breadcrumb & Return Bar */}
      <div className="border-b border-white/[0.08] bg-black/80 backdrop-blur-2xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase font-bold text-neutral-400 hover:text-white transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>BACK TO HOME DIRECTORY</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-amber-400 hidden sm:inline">
              ROADSTAR'S GARAGE ARCHIVE
            </span>
            <button
              onClick={() => onOpenBooking()}
              className="btn-luxury-primary px-4 py-2 text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-lg shadow-amber-500/10"
            >
              <span>SCHEDULE BAY</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-12">
        
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/[0.08] border border-amber-400/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300 font-medium">
                PROJECT ARCHIVE // VARANASI BAY
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading">
              PORTFOLIO & WORK ARCHIVE.
            </h1>
            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mt-3 font-normal leading-relaxed">
              Explore authentic projects completed at Roadstar's Garage in Varanasi. High-grade products, certified techniques, and precision vehicle care.
            </p>
          </div>
        </motion.div>

        {/* Filter Controls */}
        <div className="mb-12 pb-5 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 -mx-6 px-6 sm:mx-0 sm:px-0 sm:flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono font-medium uppercase tracking-wider whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-amber-400 text-black font-bold shadow-lg shadow-amber-500/20'
                    : 'bg-neutral-900/60 text-neutral-400 hover:text-white border border-white/[0.08] hover:border-white/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Work Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work, idx) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              onClick={() => setActiveLightboxImage(work)}
              className="group cursor-pointer glass-panel-hover rounded-3xl overflow-hidden flex flex-col justify-between"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/11] overflow-hidden bg-neutral-950">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />

                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-lg bg-black/80 border border-white/10 backdrop-blur-md text-[10px] font-mono font-bold text-amber-400">
                  {work.tag}
                </div>

                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-xl bg-black/80 border border-white/10 group-hover:border-amber-400/50 backdrop-blur-md flex items-center justify-center text-neutral-400 group-hover:text-amber-400 transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card Details */}
              <div className="p-7 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[11px] font-mono uppercase text-neutral-400 block mb-2 font-medium">
                    {work.categoryName}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-heading text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {work.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-2.5 line-clamp-2 leading-relaxed font-normal">
                    {work.description}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span>BAY SPEC</span>
                  <span className="text-xs font-bold text-neutral-200 group-hover:text-amber-400 flex items-center gap-1 transition-colors">
                    <span>INSPECT SPEC</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Booking Prompt Glass Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 glass-panel rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/[0.08] border border-amber-400/20 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300 font-medium">
                DISPATCH BAY
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
              BRING YOUR VEHICLE TO OUR BAY.
            </h3>
            <p className="text-sm text-neutral-400 max-w-xl mt-2 leading-relaxed font-normal">
              Visit Roadstar's Garage in Ganpathi Nagar, Konia, Varanasi or schedule your vehicle slot directly with our technicians.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full md:w-auto shrink-0">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenBooking()}
              className="btn-luxury-primary w-full sm:w-auto px-7 py-4 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/10"
            >
              <span>SCHEDULE A SERVICE</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="tel:08115463232"
              className="btn-luxury-glass w-full sm:w-auto px-7 py-4 text-xs font-mono flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>081154 63232</span>
            </motion.a>
          </div>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLightboxImage(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-4xl w-full bg-neutral-900/95 border border-white/10 rounded-3xl p-6 sm:p-8 max-h-[90dvh] overflow-y-auto my-auto backdrop-blur-2xl shadow-2xl z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-5 mb-5 border-b border-white/[0.08]">
                <div>
                  <div className="flex items-center gap-2 mb-1.5 text-xs font-mono text-amber-400">
                    <span>{activeLightboxImage.categoryName}</span>
                    <span>//</span>
                    <span className="text-neutral-400">{activeLightboxImage.tag}</span>
                  </div>
                  <h4 className="text-lg sm:text-2xl font-bold font-heading text-white">
                    {activeLightboxImage.title}
                  </h4>
                </div>

                <button
                  onClick={() => setActiveLightboxImage(null)}
                  className="p-2 rounded-xl bg-black/50 border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 transition-all shrink-0 ml-3 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image */}
              <div className="aspect-[16/10] bg-black rounded-2xl overflow-hidden relative border border-white/10 mb-5">
                <img
                  src={activeLightboxImage.image}
                  alt={activeLightboxImage.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Modal Action */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed font-normal">
                  {activeLightboxImage.description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const serviceTitle = activeLightboxImage.categoryName;
                    setActiveLightboxImage(null);
                    onOpenBooking(serviceTitle);
                  }}
                  className="btn-luxury-primary w-full sm:w-auto px-7 py-3.5 text-xs font-bold uppercase tracking-wider cursor-pointer text-center shadow-lg shadow-amber-500/10"
                >
                  BOOK THIS SERVICE
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

