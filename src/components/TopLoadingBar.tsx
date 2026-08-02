import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function TopLoadingBar() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const startLoading = () => {
      setIsVisible(true);
      setProgress(0);
      interval = setInterval(() => {
        setProgress(p => {
          if (p < 80) return p + 10;
          if (p < 95) return p + 1;
          return p;
        });
      }, 200);
    };

    const stopLoading = () => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => {
        setIsVisible(false);
      }, 400);
    };

    window.addEventListener('start-loading', startLoading);
    window.addEventListener('stop-loading', stopLoading);

    return () => {
      window.removeEventListener('start-loading', startLoading);
      window.removeEventListener('stop-loading', stopLoading);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 h-1 bg-amber-500 z-[100]"
          initial={{ width: "0%", opacity: 1 }}
          animate={{ width: `${progress}%`, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "linear", duration: 0.2 }}
        />
      )}
    </AnimatePresence>
  );
}
