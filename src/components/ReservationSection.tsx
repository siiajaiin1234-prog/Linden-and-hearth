import React, { useState } from 'react';
import { Calendar, Users, Coffee, CheckCircle2 } from 'lucide-react';

export const ReservationSection: React.FC = () => {
  const [experience, setExperience] = useState<'flight' | 'table'>('flight');
  const [date, setDate] = useState<string>('Tomorrow');
  const [time, setTime] = useState<string>('10:30 AM');
  const [guests, setGuests] = useState<number>(2);
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [isBooked, setIsBooked] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail) return;
    setIsBooked(true);
  };

  return (
    <section id="reservations" className="py-16 sm:py-24 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-5">
            <div className="text-xs uppercase font-medium tracking-widest text-stone-500">
              Community & Experiences
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-950">
              Guided Cupping Flights & Communal Seating
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Join our Head Roaster every Saturday and Sunday for a guided three-origin flight with palate-cleansing mineral waters and house brioche pairings. Or reserve space at our 14-foot white oak community table.
            </p>

            <div className="pt-2 space-y-3 text-xs text-stone-700">
              <div className="flex items-start gap-2.5">
                <Coffee className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                <span><strong>Origin Flight ($18/person):</strong> 3 curated pour-overs, origin tasting booklet, and baker's biscuit.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Users className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                <span><strong>Communal Table:</strong> Free to reserve for small book clubs, team catchups, or sketch sessions.</span>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
              {isBooked ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-stone-900">
                    Booking Confirmed!
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto">
                    We saved your spot for {guests} guests ({experience === 'flight' ? 'Guided Cupping Flight' : 'Community Table'}) on {date} at {time}. A calendar confirmation was sent to {guestEmail}.
                  </p>
                  <button
                    onClick={() => {
                      setIsBooked(false);
                      setGuestName('');
                      setGuestEmail('');
                    }}
                    className="px-5 py-2 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                  >
                    Book Another Session
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display text-xl font-bold text-stone-900">
                    Reserve an Experience
                  </h3>

                  {/* Experience Selector */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setExperience('flight')}
                      className={`p-3 rounded-lg border text-xs text-left transition-all ${
                        experience === 'flight'
                          ? 'border-stone-900 bg-stone-900 text-white font-medium'
                          : 'border-stone-200 bg-stone-50 text-stone-700 hover:border-stone-400'
                      }`}
                    >
                      <div className="font-semibold">Cupping Flight</div>
                      <div className="text-[11px] opacity-80 mt-0.5">3 single-origins with roaster</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setExperience('table')}
                      className={`p-3 rounded-lg border text-xs text-left transition-all ${
                        experience === 'table'
                          ? 'border-stone-900 bg-stone-900 text-white font-medium'
                          : 'border-stone-200 bg-stone-50 text-stone-700 hover:border-stone-400'
                      }`}
                    >
                      <div className="font-semibold">Communal Table</div>
                      <div className="text-[11px] opacity-80 mt-0.5">Casual gathering & meeting</div>
                    </button>
                  </div>

                  {/* Date, Time, Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 uppercase mb-1">
                        Select Day
                      </label>
                      <select
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full text-xs p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                      >
                        <option value="Today">Today</option>
                        <option value="Tomorrow">Tomorrow</option>
                        <option value="This Saturday (Weekend Cupping)">This Saturday</option>
                        <option value="This Sunday (Weekend Cupping)">This Sunday</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 uppercase mb-1">
                        Time Slot
                      </label>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full text-xs p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                      >
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:30 AM">10:30 AM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 uppercase mb-1">
                        Guests
                      </label>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        className="w-full text-xs p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                      >
                        <option value={1}>1 person</option>
                        <option value={2}>2 people</option>
                        <option value={4}>4 people</option>
                        <option value={6}>6 people</option>
                      </select>
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 uppercase mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        placeholder="e.g. Julian Thorne"
                        className="w-full text-xs p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={guestEmail}
                        onChange={(e) => setGuestEmail(e.target.value)}
                        placeholder="e.g. julian@example.com"
                        className="w-full text-xs p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors shadow-xs"
                  >
                    Confirm Tasting Reservation
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
