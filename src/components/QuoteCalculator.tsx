import { useState, useEffect } from 'react';

export default function QuoteCalculator() {
  const [service, setService] = useState('furniture');
  const [distance, setDistance] = useState('');
  const [size, setSize] = useState('small');
  const [helpers, setHelpers] = useState(2);
  const [quote, setQuote] = useState<number>(2450);

  useEffect(() => {
    window.dispatchEvent(new Event('start-loading'));
    
    const timeout = setTimeout(() => {
      // Base prices
      const bases: Record<string, number> = {
        furniture: 1500,
        appliance: 1200,
        cleanout: 3000
      };

      // Size multipliers
      const sizes: Record<string, number> = {
        small: 1,
        large: 2.5
      };

      const total = (bases[service] * sizes[size]) + (helpers * 300);
      setQuote(Math.round(total));
      window.dispatchEvent(new Event('stop-loading'));
    }, 600);

    return () => clearTimeout(timeout);
  }, [service, size, helpers]);

  const handleBookNow = (e: React.FormEvent) => {
    e.preventDefault();
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="quote" className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm h-full">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <span className="w-6 h-6 bg-amber-100 text-amber-600 rounded flex items-center justify-center text-xs italic">Q</span>
        Instant Quote
      </h3>
      
      <form onSubmit={handleBookNow} className="space-y-4">
        <div>
          <label className="text-[10px] uppercase font-bold text-zinc-400 block mb-1">
            Service Type
          </label>
          <select 
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-shadow text-zinc-900"
          >
            <option value="furniture">Furniture Moving</option>
            <option value="appliance">Appliance Disposal</option>
            <option value="cleanout">Residential Cleanout</option>
          </select>
        </div>

        <div>
          <label className="text-[10px] uppercase font-bold text-zinc-400 block mb-1">
            Pickup District
          </label>
          <input 
            type="text"
            placeholder="e.g. Makati, BGC"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-shadow text-zinc-900"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-[10px] uppercase font-bold text-zinc-400 block mb-1">
              Load Size
            </label>
            <select 
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-shadow text-zinc-900"
            >
              <option value="small">Small (L300)</option>
              <option value="large">Large (6-Wheeler)</option>
            </select>
          </div>
          <div>
            <label className="text-[10px] uppercase font-bold text-zinc-400 block mb-1">
              Helpers Needed
            </label>
            <input 
              type="number"
              min="0"
              max="5"
              value={helpers}
              onChange={(e) => setHelpers(parseInt(e.target.value) || 0)}
              className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-shadow text-zinc-900"
            />
          </div>
        </div>

        <div className="bg-zinc-50 p-4 rounded-2xl mt-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-zinc-500">Estimated Total</span>
            <span className="text-2xl font-bold">₱{quote.toLocaleString()}</span>
          </div>
        </div>

        <button 
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-zinc-900 font-bold py-4 rounded-xl transition-colors"
        >
          Book This Now
        </button>
      </form>
    </div>
  );
}
