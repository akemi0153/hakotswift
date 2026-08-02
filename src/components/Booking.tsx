import { useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Booking() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('start-loading'));
    
    setTimeout(() => {
      window.dispatchEvent(new Event('stop-loading'));
      setShowToast(true);
      
      // Reset form
      setDate('');
      setTime('');
      setName('');
      setAddress('');
      
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
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

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-50 bg-zinc-900 text-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4 min-w-[320px]"
          >
            <div className="bg-green-500/20 text-green-400 p-2 rounded-full shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sm">Booking Request Sent</h4>
              <p className="text-xs text-zinc-400">We'll contact you shortly to confirm.</p>
            </div>
            <button 
              type="button" 
              onClick={() => setShowToast(false)} 
              className="text-zinc-400 hover:text-white transition-colors shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
