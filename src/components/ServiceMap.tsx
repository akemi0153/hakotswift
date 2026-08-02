import { useState } from 'react';
import { Search, CheckCircle, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const COVERED_AREAS = [
  'manila', 'quezon city', 'qc', 'caloocan', 'las piñas', 'las pinas', 'makati', 
  'malabon', 'mandaluyong', 'marikina', 'muntinlupa', 'navotas', 'parañaque', 
  'paranaque', 'pasay', 'pasig', 'san juan', 'taguig', 'valenzuela', 'pateros',
  'bgc', 'ortigas', 'alabang', 'eastwood'
];

export default function ServiceMap() {
  const [searchQuery, setSearchQuery] = useState('');
  const [coverageStatus, setCoverageStatus] = useState<'idle' | 'covered' | 'not-covered'>('idle');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setCoverageStatus('idle');
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    const isCovered = COVERED_AREAS.some(area => query.includes(area));
    setCoverageStatus(isCovered ? 'covered' : 'not-covered');
  };

  return (
    <div className="bg-white rounded-3xl border border-zinc-200 p-4 overflow-hidden h-full min-h-[400px] flex flex-col relative">
       <div className="flex justify-between items-start mb-4 px-2">
         <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900">Service Area</h3>
         <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-full border border-amber-200 uppercase tracking-widest">Metro Manila</span>
       </div>
       
       <form onSubmit={handleSearch} className="mb-4 relative z-10 px-2">
         <div className="relative">
           <input
             type="text"
             value={searchQuery}
             onChange={(e) => {
               setSearchQuery(e.target.value);
               if (coverageStatus !== 'idle') setCoverageStatus('idle');
             }}
             placeholder="Check if your city is covered..."
             className="w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-10 pr-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-shadow"
           />
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
         </div>
         
         <AnimatePresence>
           {coverageStatus !== 'idle' && (
             <motion.div
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               className={`absolute w-full left-0 mt-2 p-3 rounded-xl border flex items-center gap-2 shadow-lg backdrop-blur-sm ${
                 coverageStatus === 'covered' 
                   ? 'bg-green-50/90 border-green-200 text-green-700' 
                   : 'bg-red-50/90 border-red-200 text-red-700'
               }`}
             >
               {coverageStatus === 'covered' ? (
                 <>
                   <CheckCircle className="w-5 h-5 shrink-0" />
                   <p className="text-sm font-medium">Great news! We serve your area.</p>
                 </>
               ) : (
                 <>
                   <XCircle className="w-5 h-5 shrink-0" />
                   <p className="text-sm font-medium">Sorry, we currently only serve Metro Manila.</p>
                 </>
               )}
             </motion.div>
           )}
         </AnimatePresence>
       </form>

       <div className="flex-1 rounded-2xl overflow-hidden min-h-[300px] relative bg-zinc-100 z-0">
         <iframe 
            src="https://maps.google.com/maps?q=Metro+Manila,+Philippines&t=&z=11&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Metro Manila Service Area"
            className="absolute inset-0 w-full h-full"
          ></iframe>
       </div>
    </div>
  );
}
