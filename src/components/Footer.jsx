import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Platforms', href: '#socials' },
    { name: 'About', href: '#about' },
    { name: 'Location', href: '#contact' },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    const target = document.querySelector(link.href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const googleMapsUrl =
    'https://www.google.com/maps/place/Roadstar%E2%80%99s+Garage/@25.3544559,83.0113916,17z/data=!4m6!3m5!1s0x398e2ff189e879c1:0x84dc4f29b4a3c33d!8m2!3d25.3544559!4d83.0113916!16s%2Fg%2F11pyzdp0s_';

  return (
    <footer className="bg-black border-t border-white/[0.08] pt-20 pb-14">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/[0.08]">
          
          {/* Brand Identity & Physical Studio Data */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-11 h-11 rounded-xl bg-neutral-900 border border-white/10 p-1 shrink-0 overflow-hidden flex items-center justify-center shadow-inner">
                <img
                  src="/roadstars-logo.png"
                  alt="Roadstar's Garage Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight uppercase font-heading text-white">
                  ROADSTAR'S GARAGE
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  रोडस्टार्स गेराज // VARANASI STUDIO
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-md mb-8 leading-relaxed font-normal">
              Professional Vehicle Care, Foam Washing, 9H Ceramic Coatings & Deep Cabin Detailing in Varanasi, Uttar Pradesh.
            </p>

            {/* Direct Contacts Glass Strip */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <a
                href="tel:08115463232"
                className="px-4 py-2.5 rounded-xl bg-neutral-900/60 border border-white/10 hover:border-amber-400/40 text-neutral-300 hover:text-white flex items-center gap-2 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>081154 63232</span>
              </a>

              <a
                href="https://www.instagram.com/roadstar__garage/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-neutral-900/60 border border-white/10 hover:border-amber-400/40 text-neutral-300 hover:text-white transition-all"
              >
                INSTAGRAM
              </a>

              <a
                href="https://www.youtube.com/@roadstarsgarage7971"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-neutral-900/60 border border-white/10 hover:border-amber-400/40 text-neutral-300 hover:text-white transition-all"
              >
                YOUTUBE
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-neutral-900/60 border border-white/10 hover:border-amber-400/40 text-neutral-300 hover:text-white transition-all"
              >
                GOOGLE MAPS
              </a>
            </div>
          </div>

          {/* Quick Directory */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-5 font-semibold">
              // DIRECTORY
            </span>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Workshop Address */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-5 font-semibold">
              // WORKSHOP
            </span>
            <p className="text-xs font-mono text-neutral-400 leading-relaxed mb-4">
              Behind Mangal Murti Hero Agency, <br />
              Near Bharat Tent House, <br />
              Ganpathi Nagar, Konia, <br />
              Varanasi, UP 221007
            </p>
            <span className="text-xs font-mono text-neutral-300 block">
              Plus Code: 9236+QH Varanasi
            </span>
          </div>

        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p>© 2026 ROADSTAR'S GARAGE. ALL RIGHTS RESERVED.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors group cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-400 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}

