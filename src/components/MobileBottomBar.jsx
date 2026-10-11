import React from 'react';
import { Phone, Calendar, MessageSquare, Navigation } from 'lucide-react';

export default function MobileBottomBar({ onOpenBooking }) {
  const googleMapsUrl =
    'https://www.google.com/maps/place/Roadstar%E2%80%99s+Garage/@25.3544559,83.0113916,17z/data=!4m6!3m5!1s0x398e2ff189e879c1:0x84dc4f29b4a3c33d!8m2!3d25.3544559!4d83.0113916!16s%2Fg%2F11pyzdp0s_';

  return (
    <aside
      aria-label="Mobile Actions Dock"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-2xl border-t border-white/10 px-3 pt-2.5 pb-[max(0.6rem,env(safe-area-inset-bottom))] shadow-[0_-10px_30px_rgba(0,0,0,0.9)]"
    >
      <div className="grid grid-cols-4 gap-2">
        {/* Call Now */}
        <a
          href="tel:08115463232"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-neutral-900/80 border border-white/[0.08] active:border-amber-400 text-neutral-300 active:text-white"
        >
          <Phone className="w-4 h-4 text-amber-400 mb-1" />
          <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/918115463232?text=Hello%20Roadstar%27s%20Garage!%20I%20want%20to%20inquire%20about%20vehicle%20service."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-neutral-900/80 border border-white/[0.08] active:border-amber-400 text-neutral-300 active:text-white"
        >
          <MessageSquare className="w-4 h-4 text-amber-400 mb-1" />
          <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">WhatsApp</span>
        </a>

        {/* Directions */}
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-neutral-900/80 border border-white/[0.08] active:border-amber-400 text-neutral-300 active:text-white"
        >
          <Navigation className="w-4 h-4 text-amber-400 mb-1" />
          <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">Map</span>
        </a>

        {/* Book Service */}
        <button
          onClick={() => onOpenBooking()}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold active:scale-95 transition-transform shadow-lg shadow-amber-500/20 cursor-pointer"
        >
          <Calendar className="w-4 h-4 mb-1 text-black" />
          <span className="text-[10px] font-mono uppercase tracking-wider font-extrabold">Book</span>
        </button>
      </div>
    </aside>
  );
}

