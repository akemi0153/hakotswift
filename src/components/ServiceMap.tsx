export default function ServiceMap() {
  return (
    <div className="bg-white rounded-3xl border border-zinc-200 p-4 overflow-hidden h-full min-h-[400px] flex flex-col relative">
       <div className="flex justify-between items-start mb-4 px-2">
         <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900">Service Area</h3>
         <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-full border border-amber-200 uppercase tracking-widest">Metro Manila</span>
       </div>
       <div className="flex-1 rounded-2xl overflow-hidden min-h-[300px] relative bg-zinc-100">
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
