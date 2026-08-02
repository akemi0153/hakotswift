import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X, Copy, Calendar, MapPin, Clock, User } from 'lucide-react';

interface BookingDetails {
  trackingId: string;
  date: string;
  time: string;
  name: string;
  address: string;
}

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  details: BookingDetails | null;
}

export default function SuccessModal({ isOpen, onClose, details }: SuccessModalProps) {
  const handleCopy = () => {
    if (details?.trackingId) {
      navigator.clipboard.writeText(details.trackingId);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && details && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col"
          >
            <div className="bg-amber-500 p-6 flex flex-col items-center justify-center relative">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-amber-900 hover:text-white transition-colors bg-amber-600/20 hover:bg-amber-600 p-1.5 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-amber-500" />
              </div>
              <h2 className="text-2xl font-extrabold text-zinc-900 mb-1">Booking Confirmed!</h2>
              <p className="text-zinc-900 font-medium opacity-90 text-sm">Your hauling service request has been received.</p>
            </div>

            <div className="p-6 sm:p-8 flex-1 overflow-y-auto">
              <div className="bg-zinc-50 rounded-2xl p-5 border border-zinc-200 mb-6 relative group">
                <p className="text-[10px] uppercase font-bold text-zinc-400 mb-1">Tracking ID</p>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-2xl font-black text-zinc-900 tracking-wider">{details.trackingId}</span>
                  <button 
                    onClick={handleCopy}
                    className="p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-200 rounded-lg transition-colors"
                    title="Copy Tracking ID"
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">Reservation Details</h3>
                
                <div className="flex items-start gap-3">
                  <div className="bg-zinc-100 p-2 rounded-lg text-zinc-500 shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-zinc-400">Name</p>
                    <p className="text-sm font-semibold text-zinc-900">{details.name}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-zinc-100 p-2 rounded-lg text-zinc-500 shrink-0">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-zinc-400">Date</p>
                      <p className="text-sm font-semibold text-zinc-900">{new Date(details.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-zinc-100 p-2 rounded-lg text-zinc-500 shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-zinc-400">Time Window</p>
                      <p className="text-sm font-semibold text-zinc-900 capitalize">{details.time}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-zinc-100 p-2 rounded-lg text-zinc-500 shrink-0 mt-1">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-zinc-400">Locations</p>
                    <p className="text-sm font-semibold text-zinc-900 leading-snug">{details.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button 
                onClick={onClose}
                className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-4 rounded-xl transition-colors"
              >
                Done
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
