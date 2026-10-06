import React, { useState } from 'react';
import { MenuItem, CartItem, Article, OrderDetails } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { ItemCustomizeModal } from './components/ItemCustomizeModal';
import { CartDrawer } from './components/CartDrawer';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { CraftSection } from './components/CraftSection';
import { BlogSection } from './components/BlogSection';
import { ArticleModal } from './components/ArticleModal';
import { ReservationSection } from './components/ReservationSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [confirmedOrder, setConfirmedOrder] = useState<OrderDetails | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Navigation scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add customized item to cart
  const handleAddToCart = (item: CartItem) => {
    setCartItems((prev) => [...prev, item]);
    setIsCartOpen(true);
  };

  // Quick add for simple items
  const handleQuickAdd = (menuItem: MenuItem) => {
    const newCartItem: CartItem = {
      cartId: `${menuItem.id}-${Date.now()}`,
      item: menuItem,
      quantity: 1,
      itemTotal: menuItem.price,
    };
    setCartItems((prev) => [...prev, newCartItem]);
    setIsCartOpen(true);
  };

  // Update item quantity in cart
  const handleUpdateQuantity = (cartId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.cartId === cartId) {
            const newQty = item.quantity + delta;
            if (newQty <= 0) return null;
            const singleItemPrice = item.itemTotal / item.quantity;
            return {
              ...item,
              quantity: newQty,
              itemTotal: singleItemPrice * newQty,
            };
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  // Remove item from cart
  const handleRemoveItem = (cartId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  // Complete checkout
  const handleCheckout = (orderDetails: OrderDetails) => {
    setConfirmedOrder(orderDetails);
    setCartItems([]);
    setIsCartOpen(false);
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col font-sans">
      {/* Top Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero
          onExploreMenu={() => handleNavigate('menu')}
          onOrderPickup={() => {
            handleNavigate('menu');
            setIsCartOpen(true);
          }}
          onViewJournal={() => handleNavigate('journal')}
        />

        <MenuSection
          onSelectItem={(item) => setCustomizingItem(item)}
          onQuickAdd={handleQuickAdd}
        />

        <CraftSection
          onAddBeansToCart={handleQuickAdd}
        />

        {/* Blog section containing 12 authentic articles */}
        <BlogSection
          onSelectArticle={(article) => setActiveArticle(article)}
        />

        <ReservationSection />

        <LocationSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Item Customizer Modal */}
      {customizingItem && (
        <ItemCustomizeModal
          item={customizingItem}
          onClose={() => setCustomizingItem(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {/* Order Confirmation Modal with live status */}
      {confirmedOrder && (
        <OrderConfirmationModal
          order={confirmedOrder}
          onClose={() => setConfirmedOrder(null)}
        />
      )}

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <ArticleModal
          article={activeArticle}
          onClose={() => setActiveArticle(null)}
        />
      )}
    </div>
  );
}
