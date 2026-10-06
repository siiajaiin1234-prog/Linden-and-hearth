import React, { useEffect, useState } from 'react';
import { CheckCircle2, Coffee, Clock, MapPin, Receipt, X } from 'lucide-react';
import { OrderDetails } from '../types';

interface OrderConfirmationModalProps {
  order: OrderDetails | null;
  onClose: () => void;
}

export const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  order,
  onClose,
}) => {
  if (!order) return null;

  const [simulatedStatus, setSimulatedStatus] = useState<'received' | 'brewing' | 'ready'>('received');

  // Simulate progress across stages
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setSimulatedStatus('brewing');
    }, 4000);

    const timer2 = setTimeout(() => {
      setSimulatedStatus('ready');
    }, 12000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-[#FAF8F5] rounded-2xl shadow-2xl border border-stone-200 overflow-hidden">
        {/* Top Status Header */}
        <div className="p-6 bg-stone-900 text-white flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>Order Confirmed & Sent to Bar</span>
            </div>
            <h2 className="font-display text-2xl font-bold mt-1">
              Order #{order.orderId}
            </h2>
            <p className="text-xs text-stone-300 mt-1">
              Thank you, {order.customerName}. Your ticket is queued at the espresso bar.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close confirmation"
            className="p-1 text-stone-400 hover:text-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Prep Status Tracker */}
        <div className="p-6 border-b border-stone-200 bg-white">
          <p className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-3">
            Real-Time Preparation Status
          </p>
          <div className="grid grid-cols-3 gap-2 text-center">
            {/* Step 1 */}
            <div
              className={`p-2.5 rounded-lg border text-xs transition-all ${
                simulatedStatus === 'received'
                  ? 'border-stone-900 bg-stone-900 text-white font-semibold'
                  : 'border-stone-200 bg-stone-50 text-stone-600'
              }`}
            >
              <div className="text-[10px] uppercase text-stone-400 mb-0.5">Step 1</div>
              <div>Ticket Received</div>
            </div>

            {/* Step 2 */}
            <div
              className={`p-2.5 rounded-lg border text-xs transition-all ${
                simulatedStatus === 'brewing'
                  ? 'border-amber-600 bg-amber-600 text-white font-semibold shadow-xs'
                  : simulatedStatus === 'ready'
                  ? 'border-stone-200 bg-stone-100 text-stone-700'
                  : 'border-stone-200 bg-stone-50 text-stone-400'
              }`}
            >
              <div className="text-[10px] uppercase text-amber-200 mb-0.5">Step 2</div>
              <div>Brewing & Plating</div>
            </div>

            {/* Step 3 */}
            <div
              className={`p-2.5 rounded-lg border text-xs transition-all ${
                simulatedStatus === 'ready'
                  ? 'border-emerald-700 bg-emerald-700 text-white font-semibold shadow-xs'
                  : 'border-stone-200 bg-stone-50 text-stone-400'
              }`}
            >
              <div className="text-[10px] uppercase text-emerald-200 mb-0.5">Step 3</div>
              <div>Ready at Counter</div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-stone-600 bg-stone-50 p-3 rounded-lg border border-stone-200">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-stone-700" />
              <span>Target: <strong className="text-stone-900">{order.pickupTime}</strong></span>
            </div>
            <div className="flex items-center gap-1.5 text-stone-500">
              <MapPin className="w-4 h-4 text-stone-600" />
              <span>Pick up at 412 Elmwood Ave</span>
            </div>
          </div>
        </div>

        {/* Itemized Receipt */}
        <div className="p-6 space-y-3 max-h-56 overflow-y-auto">
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-900 uppercase tracking-wider pb-1 border-b border-stone-200">
            <Receipt className="w-4 h-4 text-stone-600" />
            <span>Itemized Receipt Summary</span>
          </div>

          {order.items.map((item) => (
            <div key={item.cartId} className="flex justify-between text-xs text-stone-700 py-1">
              <div>
                <span className="font-semibold text-stone-900 mr-2">{item.quantity}x</span>
                <span>{item.item.name}</span>
                {item.selectedMilk && <span className="text-stone-500 text-[11px] block">· {item.selectedMilk}</span>}
              </div>
              <span className="font-semibold text-stone-900 tabular-nums">
                ${item.itemTotal.toFixed(2)}
              </span>
            </div>
          ))}

          <div className="pt-3 border-t border-stone-200 space-y-1 text-xs text-stone-600">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span className="tabular-nums">${order.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax:</span>
              <span className="tabular-nums">${order.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Barista Tip:</span>
              <span className="tabular-nums">${order.tip.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-stone-950 pt-1 border-t border-stone-200">
              <span>Total Paid:</span>
              <span className="tabular-nums">${order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-5 bg-stone-100 border-t border-stone-200 flex items-center justify-between">
          <span className="text-[11px] text-stone-500">
            SMS confirmation sent to {order.customerPhone}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors"
          >
            Done & Return to Cafe
          </button>
        </div>
      </div>
    </div>
  );
};
