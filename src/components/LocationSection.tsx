import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Check, Send } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const cafeName = import.meta.env.VITE_CAFE_NAME || 'Linden & Hearth Roasters';
  const cafeAddress = import.meta.env.VITE_CAFE_ADDRESS || '412 Elmwood Avenue, Portland, OR 97201';
  const cafePhone = import.meta.env.VITE_CAFE_PHONE || '+1 (503) 555-0192';
  const cafeEmail = import.meta.env.VITE_CAFE_EMAIL || 'hello@lindenhearth.com';

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  const schedule = [
    { days: 'Monday – Friday', hours: '7:00 AM – 6:00 PM', note: 'Kitchen until 3:00 PM' },
    { days: 'Saturday', hours: '7:30 AM – 6:00 PM', note: 'Weekend bake & brunch menu' },
    { days: 'Sunday', hours: '8:00 AM – 5:00 PM', note: 'Cupping flights at 10 AM & 1 PM' },
  ];

  return (
    <section id="location" className="py-16 sm:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left info column */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="text-xs uppercase font-medium tracking-widest text-stone-500">
                Neighborhood Flagship
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 mt-1">
                Visit Linden & Hearth
              </h2>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                Located on the corner of Elmwood & 4th. Plenty of natural light, dog-friendly outdoor bench seating, and bike racks right outside our doors.
              </p>
            </div>

            {/* Hours card */}
            <div className="bg-white p-6 rounded-xl border border-stone-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-stone-700" />
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-900">
                    Service Hours
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Open Now</span>
                </div>
              </div>

              <div className="space-y-3">
                {schedule.map((item) => (
                  <div key={item.days} className="flex justify-between items-start text-xs">
                    <div>
                      <span className="font-semibold text-stone-900 block">{item.days}</span>
                      <span className="text-[11px] text-stone-500">{item.note}</span>
                    </div>
                    <span className="font-medium text-stone-700 tabular-nums">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact details */}
            <div className="space-y-3 text-xs text-stone-700">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-stone-500 shrink-0" />
                <span>{cafeAddress}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-stone-500 shrink-0" />
                <span>{cafePhone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-stone-500 shrink-0" />
                <span>{cafeEmail}</span>
              </div>
            </div>
          </div>

          {/* Right card: Map & Newsletter */}
          <div className="lg:col-span-6 space-y-6">
            {/* Architectural map styling card */}
            <div className="bg-stone-900 text-white rounded-2xl p-7 space-y-6 relative overflow-hidden">
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-amber-300 font-semibold">
                  Transit & Parking
                </span>
                <h3 className="font-display text-2xl font-bold">
                  Getting Here
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Street parking available along Elmwood Ave (free before 9 AM and after 5 PM). We are two blocks from the MAX Light Rail Central stop and directly on the Elmwood Protected Bike Greenway.
                </p>
              </div>

              <div className="p-4 bg-stone-800/80 rounded-xl border border-stone-700 space-y-2 text-xs">
                <div className="font-semibold text-stone-200">Amenities & Policies:</div>
                <div className="text-stone-300 space-y-1 text-[11px]">
                  <div>✓ Free High-Speed WiFi on Weekdays (No laptops at main counter on weekends)</div>
                  <div>✓ Plant-based milk options (Oat, House Almond) always stocked</div>
                  <div>✓ Bring your own clean travel mug for $0.50 off any beverage</div>
                  <div>✓ Wheelchair accessible street-level entrance & gender-neutral restrooms</div>
                </div>
              </div>
            </div>

            {/* Newsletter Dispatch */}
            <div className="bg-white p-6 rounded-xl border border-stone-200 space-y-3">
              <h4 className="font-display text-lg font-bold text-stone-900">
                Join the Coffee & Hearth Dispatch
              </h4>
              <p className="text-xs text-stone-600">
                Receive our monthly roast release notes, home brew recipes, and seasonal pastry announcements. No spam, ever.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 p-3 bg-stone-100 rounded-lg text-xs text-stone-800 font-medium">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Thank you for subscribing! Welcome to the neighborhood circle.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
