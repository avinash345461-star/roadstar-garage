import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageSquare, Check, Sparkles } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, selectedService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicleType: 'Car',
    service: 'Car Wash',
    preferredDate: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [prevService, setPrevService] = useState(selectedService);

  // Synchronize service selection without triggering cascading render warnings
  if (selectedService !== prevService) {
    setPrevService(selectedService);
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello Roadstar's Garage! I would like to book a service:\n- Name: ${formData.name || 'Customer'}\n- Phone: ${formData.phone || 'N/A'}\n- Vehicle: ${formData.vehicleType}\n- Service: ${formData.service || selectedService || 'Car Wash'}\n- Preferred Date: ${formData.preferredDate || 'Earliest Available'}`
    );
    window.open(`https://wa.me/918115463232?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-lg w-full bg-neutral-900/95 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 max-h-[90dvh] overflow-y-auto shadow-2xl my-auto backdrop-blur-2xl z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 sm:pb-5 mb-5 sm:mb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono uppercase text-amber-400 font-medium mb-1">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>ROADSTAR'S GARAGE // APPOINTMENT</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-extrabold font-heading tracking-tight text-white">
                  SCHEDULE VEHICLE BAY
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-black/50 border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-8 text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center mx-auto text-amber-400 shadow-lg">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold font-heading text-white">
                  REQUEST LOGGED IN SYSTEM
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-sm mx-auto font-normal">
                  Thank you <span className="text-white font-semibold">{formData.name || 'valued customer'}</span>. Our workshop supervisor will review your <span className="text-amber-300">{formData.service}</span> request and confirm slot timing via <span className="text-white font-semibold">{formData.phone || 'phone'}</span>.
                </p>
                <div className="pt-6 flex flex-col gap-3">
                  <a
                    href="tel:08115463232"
                    className="btn-luxury-primary py-4 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/10"
                  >
                    <Phone className="w-4 h-4" />
                    <span>DIRECT PHONE // 081154 63232</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="btn-luxury-glass py-3.5 text-xs font-mono cursor-pointer"
                  >
                    CLOSE WINDOW
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-300 mb-2 font-medium">
                    OWNER / DRIVER NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl bg-black/70 border border-white/10 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400/50 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-300 mb-2 font-medium">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 081154 63232"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl bg-black/70 border border-white/10 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-300 mb-2 font-medium">
                      VEHICLE CATEGORY
                    </label>
                    <select
                      value={formData.vehicleType}
                      onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                      className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400/50 transition-colors"
                    >
                      <option value="Car" className="bg-neutral-900 text-white">Car (Hatchback / Sedan / SUV)</option>
                      <option value="Bike" className="bg-neutral-900 text-white">Motorcycle / Superbike</option>
                      <option value="Other" className="bg-neutral-900 text-white">Commercial / Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-300 mb-2 font-medium">
                      SELECTED SERVICE
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400/50 transition-colors"
                    >
                      <option value="Car Wash" className="bg-neutral-900 text-white">Car Wash</option>
                      <option value="Foam Wash" className="bg-neutral-900 text-white">Foam Wash</option>
                      <option value="Pressure Wash" className="bg-neutral-900 text-white">Pressure Wash</option>
                      <option value="Interior Vacuum & Deep Clean" className="bg-neutral-900 text-white">Interior Vacuum & Deep Clean</option>
                      <option value="Bike Wash" className="bg-neutral-900 text-white">Bike Wash</option>
                      <option value="Robotic Car Wash" className="bg-neutral-900 text-white">Robotic Car Wash</option>
                      <option value="9H Ceramic Coating & PPF" className="bg-neutral-900 text-white">9H Ceramic Coating & PPF</option>
                      <option value="Rubbing & Polishing" className="bg-neutral-900 text-white">Rubbing & Polishing</option>
                      <option value="Underbody Wash & Anti-Rust" className="bg-neutral-900 text-white">Underbody Wash & Anti-Rust</option>
                      <option value="General Inspection" className="bg-neutral-900 text-white">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-300 mb-2 font-medium">
                      PREFERRED DATE
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full rounded-xl bg-black/70 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="pt-5 space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="btn-luxury-primary w-full py-4 text-xs font-bold cursor-pointer shadow-lg shadow-amber-500/10"
                  >
                    SUBMIT RESERVATION REQUEST
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="btn-luxury-glass w-full py-3.5 text-xs font-mono flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-amber-400" />
                    <span>BOOK DIRECTLY VIA WHATSAPP</span>
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

