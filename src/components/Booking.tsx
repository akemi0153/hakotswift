import { useState } from 'react';
import SuccessModal from './SuccessModal';

interface BookingDetails {
  trackingId: string;
  date: string;
  time: string;
  name: string;
  address: string;
}

export default function Booking() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('start-loading'));
    
    setTimeout(() => {
      window.dispatchEvent(new Event('stop-loading'));
      
      const newBookingDetails = {
        trackingId: 'HKT-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        date,
        time,
        name,
        address
      };
      
      setBookingDetails(newBookingDetails);
      setIsModalOpen(true);
      
      // Reset form
      setDate('');
      setTime('');
      setName('');
      setAddress('');
      
    }, 1500);
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div id="book" className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 flex flex-col justify-between h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500">Schedule a Slot</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] uppercase font-bold text-zinc-400 mb-1">
              Preferred Date
            </label>
            <input 
              type="date" 
              required
              min={minDate}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-shadow"
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase font-bold text-zinc-400 mb-1">
              Preferred Time
            </label>
            <select 
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-shadow"
            >
              <option value="" disabled>Select a time</option>
              <option value="morning">Morning (8AM - 12PM)</option>
              <option value="afternoon">Afternoon (1PM - 5PM)</option>
              <option value="evening">Evening (6PM - 9PM)</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <input 
            type="text" 
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-shadow"
          />
          <textarea 
            placeholder="Pickup & Drop-off Addresses (Metro Manila only)"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows={3}
            className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-shadow resize-none"
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-zinc-900 text-white font-bold py-4 rounded-xl hover:bg-zinc-800 transition-colors mt-2"
        >
          Confirm Booking Request
        </button>
      </form>

      <SuccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        details={bookingDetails} 
      />
    </div>
  );
}
