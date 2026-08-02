import { Clock } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-zinc-900 rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-white border border-zinc-800 relative overflow-hidden h-full min-h-[400px]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Hauling Truck" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-transparent"></div>
      </div>
      <div className="relative z-10">
        <span className="inline-block px-3 py-1 bg-amber-500 text-zinc-900 text-[10px] font-bold rounded-full mb-4 uppercase tracking-widest">
          Metromanila Exclusive
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4">
          Fast, Reliable Hauling <br className="hidden sm:block" />For Your Home & Office
        </h1>
        <p className="text-zinc-400 max-w-md text-sm sm:text-base">
          The fastest turnaround times in the metro. From appliance disposal to full residential cleanouts.
        </p>
      </div>
      <div className="relative z-10 flex gap-6 mt-8">
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-amber-500">60m</span>
          <span className="text-[10px] text-zinc-500 uppercase font-semibold">Avg Response</span>
        </div>
        <div className="w-px bg-zinc-800 h-10 my-auto"></div>
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-amber-500">100%</span>
          <span className="text-[10px] text-zinc-500 uppercase font-semibold">Insured Local Shipments</span>
        </div>
      </div>
      {/* Decorative Truck Silhouette Background */}
      <div className="absolute -right-10 -bottom-10 sm:-right-20 sm:-bottom-10 opacity-10 pointer-events-none">
        <svg width="300" height="225" className="sm:w-[400px] sm:h-[300px]" fill="white" viewBox="0 0 24 24"><path d="M13 16.5V7h-1.17l-3 3H7.5V7H6v3.5H4V7H2.5v9.5H4V13h2v3.5h1.5v-3h1.33l3 3H13zM1 18h22v2H1v-2zM21 16.5H15v-6h3l3 3v3z"/></svg>
      </div>
    </div>
  );
}
