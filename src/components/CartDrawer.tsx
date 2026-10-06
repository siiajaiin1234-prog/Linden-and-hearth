import React, { useState } from 'react';
import { X, Trash2, Clock, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem, OrderDetails } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartId: string, delta: number) => void;
  onRemoveItem: (cartId: string) => void;
  onCheckout: (orderDetails: OrderDetails) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  const [pickupTime, setPickupTime] = useState<string>('In 15 minutes (Ready at ~' + getEstimatedTime(15) + ')');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [orderNotes, setOrderNotes] = useState<string>('');
  const [tipPercent, setTipPercent] = useState<number>(15);
  const [validationError, setValidationError] = useState<string>('');

  if (!isOpen) return null;

  function getEstimatedTime(minutesToAdd: number) {
    const d = new Date(Date.now() + minutesToAdd * 60000);
    return d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  }

  const subtotal = items.reduce((acc, curr) => acc + curr.itemTotal, 0);
  const tax = subtotal * 0.0825; // standard local rate
  const tipAmount = (subtotal * tipPercent) / 100;
  const total = subtotal + tax + tipAmount;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim()) {
      setValidationError('Please enter your pickup name.');
      return;
    }
    if (!customerPhone.trim()) {
      setValidationError('Please provide a phone number for pickup text notifications.');
      return;
    }

    const orderDetails: OrderDetails = {
      orderId: `LH-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      pickupTime,
      notes: orderNotes.trim() || undefined,
      items,
      subtotal,
      tax,
      tip: tipAmount,
      total,
      createdAt: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
      status: 'received',
    };

    onCheckout(orderDetails);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/50 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl flex flex-col justify-between border-l border-stone-200">
        {/* Top Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-stone-900" />
            <h2 className="font-display text-xl font-bold text-stone-900">
              Pickup Order Bag
            </h2>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-stone-100 text-stone-700">
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close cart drawer"
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <p className="font-display text-lg font-semibold text-stone-800">Your bag is empty</p>
              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                Select from our fresh espresso, seasonal microlots, or morning hearth pastries to begin your pickup order.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-4 py-2 text-xs font-semibold text-stone-900 bg-stone-200 hover:bg-stone-300 rounded-lg"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div className="space-y-3">
                {items.map((cartItem) => (
                  <div
                    key={cartItem.cartId}
                    className="p-3.5 bg-white border border-stone-200 rounded-xl space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-sm font-semibold text-stone-900">
                          {cartItem.item.name}
                        </h4>
                        <div className="text-xs text-stone-500 space-y-0.5 mt-0.5">
                          {cartItem.selectedMilk && <div>Milk: {cartItem.selectedMilk}</div>}
                          {cartItem.selectedTemperature && <div>Style: {cartItem.selectedTemperature}</div>}
                          {cartItem.selectedSweetness && <div>Sweetness: {cartItem.selectedSweetness}</div>}
                          {cartItem.hasExtraShot && <div>+ Double Ristretto Shot</div>}
                          {cartItem.specialInstructions && (
                            <div className="italic text-stone-600">Note: {cartItem.specialInstructions}</div>
                          )}
                        </div>
                      </div>
                      <span className="text-sm font-bold text-stone-900 tabular-nums">
                        ${cartItem.itemTotal.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-stone-100 text-xs">
                      <div className="flex items-center border border-stone-200 rounded-md bg-stone-50">
                        <button
                          onClick={() => onUpdateQuantity(cartItem.cartId, -1)}
                          className="px-2.5 py-0.5 text-stone-600 hover:bg-stone-200"
                        >
                          -
                        </button>
                        <span className="px-2 font-semibold tabular-nums text-stone-800">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(cartItem.cartId, 1)}
                          className="px-2.5 py-0.5 text-stone-600 hover:bg-stone-200"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(cartItem.cartId)}
                        className="text-stone-400 hover:text-red-600 transition-colors flex items-center gap-1 text-[11px]"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pickup Time selection */}
              <div className="p-4 bg-white border border-stone-200 rounded-xl space-y-2">
                <label className="flex items-center gap-2 text-xs font-semibold text-stone-900 uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5 text-stone-600" />
                  Estimated Pickup Time
                </label>
                <select
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full text-xs bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-900"
                >
                  <option value={`In 15 minutes (Ready at ~${getEstimatedTime(15)})`}>
                    In 15 minutes (Ready at ~{getEstimatedTime(15)})
                  </option>
                  <option value={`In 30 minutes (Ready at ~${getEstimatedTime(30)})`}>
                    In 30 minutes (Ready at ~{getEstimatedTime(30)})
                  </option>
                  <option value={`In 45 minutes (Ready at ~${getEstimatedTime(45)})`}>
                    In 45 minutes (Ready at ~{getEstimatedTime(45)})
                  </option>
                  <option value="Later Today (Specific Note)">
                    Schedule for later today (Specify in note below)
                  </option>
                </select>
              </div>

              {/* Customer Contact */}
              <div className="p-4 bg-white border border-stone-200 rounded-xl space-y-3">
                <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider">
                  Pickup Details
                </h4>

                {validationError && (
                  <p className="text-xs text-rose-600 font-medium">{validationError}</p>
                )}

                <div>
                  <label className="block text-[11px] text-stone-600 font-medium mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => {
                      setCustomerName(e.target.value);
                      if (validationError) setValidationError('');
                    }}
                    placeholder="e.g. Maya Thorne"
                    className="w-full px-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-md text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-stone-600 font-medium mb-1">
                    Mobile Phone (for SMS Ready Alert) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => {
                      setCustomerPhone(e.target.value);
                      if (validationError) setValidationError('');
                    }}
                    placeholder="e.g. (503) 555-0144"
                    className="w-full px-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-md text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-stone-600 font-medium mb-1">
                    Special Pickup Note (Optional)
                  </label>
                  <input
                    type="text"
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    placeholder="e.g. Bring out to curb or extra napkins"
                    className="w-full px-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-md text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                  />
                </div>
              </div>

              {/* Tip Selection */}
              <div className="p-4 bg-white border border-stone-200 rounded-xl space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-stone-900 uppercase tracking-wider">
                  <span>Barista Tip</span>
                  <span className="tabular-nums font-bold text-stone-800">
                    ${tipAmount.toFixed(2)}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[10, 15, 18, 0].map((percent) => (
                    <button
                      key={percent}
                      type="button"
                      onClick={() => setTipPercent(percent)}
                      className={`py-1.5 text-xs rounded-md border font-medium transition-all ${
                        tipPercent === percent
                          ? 'border-stone-900 bg-stone-900 text-white'
                          : 'border-stone-200 bg-stone-50 text-stone-700 hover:border-stone-400'
                      }`}
                    >
                      {percent === 0 ? 'No Tip' : `${percent}%`}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Summary & Place Order */}
        {items.length > 0 && (
          <div className="p-5 bg-white border-t border-stone-200 space-y-3">
            <div className="space-y-1.5 text-xs text-stone-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="tabular-nums">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax (8.25%)</span>
                <span className="tabular-nums">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Barista Tip ({tipPercent}%)</span>
                <span className="tabular-nums">${tipAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-stone-200 text-sm font-bold text-stone-950">
                <span>Order Total</span>
                <span className="tabular-nums">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900"
            >
              <span>Place Pickup Order (${total.toFixed(2)})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-center text-stone-500">
              Pick up at the espresso counter · No prepayment fees
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
