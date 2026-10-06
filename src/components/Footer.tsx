import React from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#FAF8F5] border-t border-stone-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-stone-900 text-stone-100 flex items-center justify-center text-xs font-bold">
              LH
            </div>
            <span className="font-display text-lg font-bold text-stone-900">
              Linden & Hearth Roasters
            </span>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-stone-600 font-medium">
            <button onClick={() => onNavigate('menu')} className="hover:text-stone-950 transition-colors">
              Menu
            </button>
            <button onClick={() => onNavigate('roastery')} className="hover:text-stone-950 transition-colors">
              Our Roastery
            </button>
            <button onClick={() => onNavigate('journal')} className="hover:text-stone-950 transition-colors">
              The Journal (12 Articles)
            </button>
            <button onClick={() => onNavigate('reservations')} className="hover:text-stone-950 transition-colors">
              Tasting Flights
            </button>
            <button onClick={() => onNavigate('location')} className="hover:text-stone-950 transition-colors">
              Hours & Location
            </button>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-stone-400">
            © {new Date().getFullYear()} Linden & Hearth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
