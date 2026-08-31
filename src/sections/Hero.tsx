import React from "react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 relative z-10 text-center overflow-hidden">
      {/* Soft overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/10 z-[-1]" />
      
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="text-4xl sm:text-5xl md:text-7xl font-serif text-pastel-pink shadow-sm"
      >
        Honey......
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2.5 }}
        className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl font-light text-cream max-w-[90%] sm:max-w-lg leading-relaxed shadow-sm font-serif italic"
      >
        "There’s something I’ve wanted to tell you for four years."
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 4 }}
        className="absolute bottom-8 sm:bottom-12 flex flex-col items-center opacity-80"
      >
        <span className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] mb-4 font-light text-lavender uppercase text-center w-full">
          Scroll slowly... ❤️
        </span>
        <div className="w-[1px] h-12 sm:h-16 bg-gradient-to-b from-lavender to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
};
