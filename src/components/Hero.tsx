import React from 'react';
import { ArrowRight, Clock, MapPin, Sparkles } from 'lucide-react';
import heroImg from '../assets/images/cafe_hero_interior_1791314897902.jpg';

interface HeroProps {
  onExploreMenu: () => void;
  onOrderPickup: () => void;
  onViewJournal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreMenu,
  onOrderPickup,
  onViewJournal,
}) => {
  const cafeName = import.meta.env.VITE_CAFE_NAME || 'Linden & Hearth Roasters';
  const announcement = import.meta.env.VITE_ANNOUNCEMENT || 'Seasonal Single-Origin Harvest from Huila on bar · Fresh hearth bakes at 7 AM';

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-stone-200">
      {/* Slim notice ticker */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between text-xs text-stone-600 bg-stone-100/90 border border-stone-200/90 rounded-lg px-4 py-2">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="font-semibold text-stone-900 shrink-0">Today's Batch:</span>
            <span className="truncate">{announcement}</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 shrink-0 text-stone-500">
            <span>Doors: 7:00 AM – 6:00 PM</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-700 font-medium">Barista Bar Open</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 space-y-6">
            {/* Unboxed clean metadata kicker */}
            <div className="flex items-center gap-2 text-xs font-medium text-stone-500 uppercase tracking-widest">
              <span>Specialty Coffee Roastery</span>
              <span aria-hidden="true">·</span>
              <span>Scratch Bakery</span>
              <span aria-hidden="true">·</span>
              <span>Portland, OR</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-950 leading-[1.08] text-balance">
              Slow-crafted coffee & hearth bakes for the neighborhood.
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
              We source direct-trade single-origins from generational family farms, roast on a restored vintage cast-iron drum, and ferment heritage sourdough loaves before sunrise.
            </p>

            {/* Unboxed proof markers */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-stone-600">
              <span className="font-medium text-stone-900">Direct Trade Certified</span>
              <span aria-hidden="true">·</span>
              <span>100% Organic Flours</span>
              <span aria-hidden="true">·</span>
              <span>Weekly Micro-Roasts</span>
              <span aria-hidden="true">·</span>
              <span>14-ft Communal Table</span>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOrderPickup}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900"
              >
                <span>Order for Pickup</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreMenu}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900"
              >
                <span>Explore Full Menu</span>
              </button>

              <button
                onClick={onViewJournal}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors"
              >
                <span>Read The Journal (12 Articles)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Anchor */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200/90 bg-stone-100 shadow-md aspect-[16/11]">
              <img
                src={heroImg}
                alt="Sunlit interior of Linden & Hearth Roasters showing natural oak tables, plants, and espresso counter"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle bottom gradient scrim for legible trust caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent p-5 text-white flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-300 font-medium">Daily Counter Service</p>
                  <p className="font-display text-lg font-semibold">412 Elmwood Avenue, Portland</p>
                </div>
                <div className="text-right text-xs text-stone-300">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-1.5"></span>
                  Baking Fresh Today
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
