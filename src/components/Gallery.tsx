import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    caption: 'Safe & Secure Transport'
  },
  {
    url: 'https://images.unsplash.com/photo-1588607144962-79010077873a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    caption: 'Professional Handling'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    caption: 'Residential & Commercial'
  },
  {
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    caption: 'Punctual & Reliable'
  }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  };

  return (
    <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 flex flex-col h-full overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900">Recent Projects</h3>
        <div className="flex gap-2">
          <button 
            onClick={handlePrev}
            className="p-2 rounded-full border border-zinc-200 text-zinc-600 hover:border-amber-500 hover:text-amber-500 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={handleNext}
            className="p-2 rounded-full border border-zinc-200 text-zinc-600 hover:border-amber-500 hover:text-amber-500 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="relative flex-1 rounded-2xl overflow-hidden bg-zinc-100 min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <img 
              src={IMAGES[currentIndex].url} 
              alt={IMAGES[currentIndex].caption} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <span className="text-white font-bold text-lg">{IMAGES[currentIndex].caption}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex gap-2 justify-center mt-6">
        {IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-6 bg-amber-500' : 'w-2 bg-zinc-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
