import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { MenuItem, CartItem } from '../types';

interface ItemCustomizeModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (cartItem: CartItem) => void;
}

export const ItemCustomizeModal: React.FC<ItemCustomizeModalProps> = ({
  item,
  onClose,
  onAddToCart,
}) => {
  if (!item) return null;

  const [selectedMilk, setSelectedMilk] = useState<string>(
    item.options?.milk ? item.options.milk[0] : ''
  );
  const [selectedTemperature, setSelectedTemperature] = useState<string>(
    item.options?.temperature ? item.options.temperature[0] : ''
  );
  const [selectedSweetness, setSelectedSweetness] = useState<string>(
    item.options?.sweetness ? item.options.sweetness[0] : ''
  );
  const [hasExtraShot, setHasExtraShot] = useState<boolean>(false);
  const [specialInstructions, setSpecialInstructions] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  // Calculate customized price
  let itemPrice = item.price;
  if (selectedMilk.includes('+0.75')) itemPrice += 0.75;
  if (selectedSweetness.includes('+0.50')) itemPrice += 0.50;
  if (hasExtraShot) itemPrice += 1.25;

  const handleConfirm = () => {
    const cartItem: CartItem = {
      cartId: `${item.id}-${Date.now()}`,
      item,
      quantity,
      selectedMilk: selectedMilk || undefined,
      selectedTemperature: selectedTemperature || undefined,
      selectedSweetness: selectedSweetness || undefined,
      hasExtraShot: hasExtraShot || undefined,
      specialInstructions: specialInstructions.trim() || undefined,
      itemTotal: itemPrice * quantity,
    };
    onAddToCart(cartItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-[#FAF8F5] rounded-2xl shadow-xl border border-stone-200 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-stone-200 flex items-start justify-between">
          <div>
            <span className="text-xs uppercase font-medium text-stone-500 tracking-wider">
              {item.categoryLabel}
            </span>
            <h2 className="font-display text-2xl font-bold text-stone-900 mt-0.5">
              {item.name}
            </h2>
            <p className="text-sm text-stone-600 mt-1">{item.description}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Options */}
        <div className="p-6 space-y-5 max-h-[60vh] overflow-y-auto">
          {/* Milk Options */}
          {item.options?.milk && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                Choice of Milk
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.options.milk.map((milk) => (
                  <button
                    key={milk}
                    type="button"
                    onClick={() => setSelectedMilk(milk)}
                    className={`flex items-center justify-between p-3 rounded-lg border text-sm transition-all ${
                      selectedMilk === milk
                        ? 'border-stone-900 bg-stone-900 text-white font-medium'
                        : 'border-stone-200 bg-white text-stone-700 hover:border-stone-400'
                    }`}
                  >
                    <span>{milk}</span>
                    {selectedMilk === milk && <Check className="w-4 h-4 ml-1" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Temperature */}
          {item.options?.temperature && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                Temperature & Style
              </label>
              <div className="flex flex-wrap gap-2">
                {item.options.temperature.map((temp) => (
                  <button
                    key={temp}
                    type="button"
                    onClick={() => setSelectedTemperature(temp)}
                    className={`px-3.5 py-2 rounded-lg border text-sm transition-all ${
                      selectedTemperature === temp
                        ? 'border-stone-900 bg-stone-900 text-white font-medium'
                        : 'border-stone-200 bg-white text-stone-700 hover:border-stone-400'
                    }`}
                  >
                    {temp}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sweetness */}
          {item.options?.sweetness && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                Sweetness Level
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {item.options.sweetness.map((sweet) => (
                  <button
                    key={sweet}
                    type="button"
                    onClick={() => setSelectedSweetness(sweet)}
                    className={`p-2.5 rounded-lg border text-xs text-center transition-all ${
                      selectedSweetness === sweet
                        ? 'border-stone-900 bg-stone-900 text-white font-medium'
                        : 'border-stone-200 bg-white text-stone-700 hover:border-stone-400'
                    }`}
                  >
                    {sweet}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Extra Shot */}
          {item.options?.extraShot && (
            <div className="pt-2">
              <label className="flex items-center justify-between p-3 border border-stone-200 bg-white rounded-lg cursor-pointer hover:border-stone-300">
                <span className="text-sm font-medium text-stone-800">
                  Add Extra Double Ristretto Shot (+ $1.25)
                </span>
                <input
                  type="checkbox"
                  checked={hasExtraShot}
                  onChange={(e) => setHasExtraShot(e.target.checked)}
                  className="w-4 h-4 text-stone-900 rounded accent-stone-900"
                />
              </label>
            </div>
          )}

          {/* Special notes */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
              Barista Instructions (Optional)
            </label>
            <input
              type="text"
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="e.g. Extra hot, cup half full, etc."
              maxLength={100}
              className="w-full px-3.5 py-2 text-sm bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
            />
          </div>

          {/* Quantity stepper */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-700">Quantity</span>
            <div className="flex items-center border border-stone-300 rounded-lg bg-white overflow-hidden">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 text-stone-600 hover:bg-stone-100 text-base"
              >
                -
              </button>
              <span className="px-4 py-1 text-sm font-semibold text-stone-900 tabular-nums">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 text-stone-600 hover:bg-stone-100 text-base"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-4 sm:p-6 bg-stone-100 border-t border-stone-200 flex items-center justify-between">
          <div>
            <p className="text-xs text-stone-500">Total Price</p>
            <p className="text-xl font-bold text-stone-950 tabular-nums">
              ${(itemPrice * quantity).toFixed(2)}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-medium text-stone-600 hover:text-stone-900"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="px-6 py-2.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors shadow-xs"
            >
              Add to Order Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
