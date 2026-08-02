import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 left-6 z-40 sm:bottom-10 sm:left-10"
        >
          <button
            onClick={scrollToTop}
            className="bg-zinc-900 text-white p-3 sm:p-4 rounded-full shadow-xl hover:bg-zinc-800 hover:-translate-y-1 transition-all focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
