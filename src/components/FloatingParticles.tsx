import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const FloatingParticles: React.FC = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const particles = Array.from({ length: 45 }); // More lush cherry blossom petals

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (windowSize.width === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((_, i) => {
        const initX = Math.random() * windowSize.width;
        // Start above the screen
        const initY = Math.random() * windowSize.height - windowSize.height;
        const duration = Math.random() * 25 + 15; 
        const delay = Math.random() * -50;
        const size = Math.random() * 12 + 6; 
        
        return (
          <motion.div
            key={i}
            className="petal"
            style={{
              width: size,
              height: size,
              x: initX,
              y: initY,
            }}
            animate={{
              y: windowSize.height + 150,
              x: [initX, initX + Math.random() * 200 - 100, initX + Math.random() * 200 - 100],
              rotate: [0, 180, 540]
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
              delay: delay,
            }}
          />
        );
      })}
    </div>
  );
};
