import React from 'react';
import { ShoppingBag, Sparkles } from 'lucide-react';
import { COFFEE_ORIGINS } from '../data/coffeeOrigins';
import { MenuItem } from '../types';

interface CraftSectionProps {
  onAddBeansToCart: (item: MenuItem) => void;
}

export const CraftSection: React.FC<CraftSectionProps> = ({ onAddBeansToCart }) => {
  return (
    <section id="roastery" className="py-16 sm:py-24 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase font-medium tracking-widest text-stone-500">
            Micro-Roasting & Single Origins
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 mt-1">
            Ethical Direct Trade, Roasted Weekly
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed mt-3">
            We purchase green coffee directly from smallholder cooperatives and single-estate farmers at transparent prices well above fair-trade minimums. Every roast is developed on our restored 15kg cast-iron drum roaster.
          </p>
        </div>

        {/* Origins Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COFFEE_ORIGINS.map((coffee) => (
            <div
              key={coffee.id}
              className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-52 w-full overflow-hidden bg-stone-200 relative">
                  <img
                    src={coffee.image}
                    alt={`Bags of ${coffee.name}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded">
                    {coffee.origin} · {coffee.elevation}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
                      {coffee.region}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-stone-950 mt-0.5">
                      {coffee.name}
                    </h3>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {coffee.description}
                  </p>

                  {/* Clean unboxed specifications */}
                  <div className="pt-2 border-t border-stone-100 space-y-1.5 text-xs text-stone-600">
                    <div className="flex justify-between">
                      <span className="text-stone-400">Producer:</span>
                      <span className="font-medium text-stone-800">{coffee.producer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Process:</span>
                      <span className="font-medium text-stone-800">{coffee.process}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Varietal:</span>
                      <span className="font-medium text-stone-800">{coffee.varietal}</span>
                    </div>
                  </div>

                  {/* Tasting notes */}
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-100 text-xs">
                    <span className="text-[11px] font-semibold text-stone-500 block mb-1">
                      Cup Notes:
                    </span>
                    <div className="flex flex-wrap gap-1.5 font-medium text-stone-900">
                      {coffee.tastingNotes.map((note, idx) => (
                        <span key={note}>
                          {note}
                          {idx < coffee.tastingNotes.length - 1 && <span className="text-stone-300 ml-1.5">·</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Purchase Card Footer */}
              <div className="p-6 pt-0 border-t border-stone-100 mt-4 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-stone-500">{coffee.bagWeight}</div>
                  <div className="text-lg font-bold text-stone-950 tabular-nums">
                    ${coffee.price.toFixed(2)}
                  </div>
                </div>
                <button
                  onClick={() => {
                    const menuItem: MenuItem = {
                      id: coffee.id,
                      name: `${coffee.name} (${coffee.bagWeight})`,
                      category: 'filter',
                      categoryLabel: 'Whole Bean Coffee',
                      price: coffee.price,
                      description: `Freshly roasted 300g whole bean coffee from ${coffee.producer}, ${coffee.origin}.`,
                      tastingNotes: coffee.tastingNotes,
                    };
                    onAddBeansToCart(menuItem);
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Order Beans</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
