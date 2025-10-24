import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { X } from "lucide-react";

interface NotificationProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

export function Notification({ message, onClose, duration = 10000 }: NotificationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        className="fixed top-36 right-6 bg-primary/90 text-white px-6 py-4 rounded-lg shadow-lg z-50 flex items-center gap-4 text-base"
      >
        <span>{message}</span>
        <button 
          onClick={onClose}
          className="text-white/80 hover:text-white transition-colors p-1 -mr-2"
          aria-label="Close notification"
        >
          <X className="h-5 w-5" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
