import React, { useState } from 'react';
import { Plus, SlidersHorizontal, Sparkles } from 'lucide-react';
import { MenuItem, CartItem } from '../types';
import { MENU_ITEMS } from '../data/menu';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectItem,
  onQuickAdd,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'espresso', label: 'Espresso & Milk' },
    { id: 'filter', label: 'Filter & Single Origin' },
    { id: 'cold-drinks', label: 'Cold Drinks' },
    { id: 'bakery', label: 'Hearth Bakery' },
    { id: 'kitchen', label: 'All-Day Kitchen' },
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-16 sm:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs uppercase font-medium tracking-widest text-stone-500">
              Hand-Poured & Oven-Fresh
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 mt-1">
              Seasonal Cafe Menu
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md">
            Prepared to order using pasture-raised dairy, organic house oat milk, and grain stone-ground weekly in Oregon.
          </p>
        </div>

        {/* Category Filter Tabs (functional segmented buttons) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-stone-200">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:text-stone-950 hover:bg-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-stone-200/90 overflow-hidden shadow-xs hover:border-stone-400 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              {/* Optional image banner if available */}
              {item.image && (
                <div className="h-44 w-full overflow-hidden bg-stone-100 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded">
                    {item.categoryLabel}
                  </div>
                </div>
              )}

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-bold text-stone-950">
                      {item.name}
                    </h3>
                    <span className="text-base font-semibold text-stone-900 tabular-nums">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed mt-2">
                    {item.description}
                  </p>

                  {/* Clean unboxed tasting notes / dietary */}
                  {item.tastingNotes && (
                    <div className="mt-3 flex items-center gap-1.5 text-[11px] text-stone-500 font-medium">
                      <span className="text-stone-700">Notes:</span>
                      {item.tastingNotes.map((note, idx) => (
                        <React.Fragment key={note}>
                          <span>{note}</span>
                          {idx < item.tastingNotes!.length - 1 && (
                            <span aria-hidden="true" className="text-stone-300">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  )}

                  {item.dietary && (
                    <div className="mt-2 text-[11px] text-stone-500">
                      <span>{item.dietary.join(' · ')}</span>
                    </div>
                  )}
                </div>

                {/* Card Action */}
                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                  {item.customizable ? (
                    <button
                      onClick={() => onSelectItem(item)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-800 hover:text-stone-950 px-3 py-1.5 rounded-lg border border-stone-200 hover:border-stone-400 bg-stone-50 transition-colors"
                    >
                      <SlidersHorizontal className="w-3.5 h-3.5" />
                      <span>Customize</span>
                    </button>
                  ) : (
                    <span className="text-[11px] text-stone-400">Ready to serve</span>
                  )}

                  <button
                    onClick={() => {
                      if (item.customizable) {
                        onSelectItem(item);
                      } else {
                        onQuickAdd(item);
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 px-3.5 py-1.5 rounded-lg transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add to Bag</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
