import React from 'react';
import { ShoppingBag, Coffee, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { id: 'menu', label: 'Menu' },
    { id: 'roastery', label: 'Our Roastery' },
    { id: 'journal', label: 'The Journal' },
    { id: 'reservations', label: 'Tasting Flights' },
    { id: 'location', label: 'Visit Us' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Brand title wordmark */}
        <button
          onClick={() => handleNavClick('hero')}
          className="text-left group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 rounded"
        >
          <div className="w-8 h-8 rounded-full bg-stone-900 text-stone-100 flex items-center justify-center text-xs font-semibold">
            LH
          </div>
          <span className="font-display text-2xl font-bold tracking-tight text-stone-900 group-hover:text-stone-700 transition-colors">
            Linden & Hearth
          </span>
        </button>

        {/* Zone 2: Navigation Links (single-line, clean typography) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`transition-colors hover:text-stone-900 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-900 rounded px-1 py-0.5 ${
                activeSection === link.id
                  ? 'text-stone-950 font-semibold border-b-2 border-stone-900 pb-0.5'
                  : ''
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCart}
            aria-label={`Shopping bag with ${cartCount} items`}
            className="relative flex items-center gap-2.5 px-4 py-2 text-xs font-semibold tracking-wide text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900"
          >
            <ShoppingBag className="w-4 h-4 text-stone-700" />
            <span className="hidden sm:inline">Order Bag</span>
            {cartCount > 0 && (
              <span className="flex items-center justify-center min-w-[20px] h-5 px-1 text-[11px] font-bold text-white bg-stone-900 rounded-full tabular-nums">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-700 hover:text-stone-900 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#FAF8F5] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="block w-full text-left py-2 text-base font-medium text-stone-800 hover:text-stone-950"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
