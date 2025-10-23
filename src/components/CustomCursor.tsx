import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.tagName === 'A' || target.tagName === 'BUTTON' || 
                          target.onclick !== null || target.classList.contains('cursor-pointer');
      setIsPointer(isClickable);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', updateCursorType);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', updateCursorType);
    };
  }, []);

  return (
    <>
      {/* macOS-style cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{
          width: '20px',
          height: '20px',
        }}
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
          scale: isPointer ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 500,
          mass: 0.2,
        }}
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 20 20" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))',
          }}
        >
          {/* White border/outline */}
          <path
            d="M3 3 L3 14 L7 10 L10 16 L12 15 L9 9 L14 9 Z"
            fill="white"
            stroke="white"
            strokeWidth="0.5"
          />
          {/* Black cursor */}
          <path
            d="M4 4 L4 12.5 L6.8 9.7 L9.3 14.8 L10.7 14.2 L8.2 9.1 L12.5 9.1 Z"
            fill="black"
          />
        </svg>
      </motion.div>
    </>
  );
};
