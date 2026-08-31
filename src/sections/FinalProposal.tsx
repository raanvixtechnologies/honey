import React from 'react';
import { motion } from 'framer-motion';

export const FinalProposal: React.FC = () => {
  return (
    <section id="proposal" className="min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 py-20 relative z-20 text-center bg-transparent overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="flex flex-col items-center w-full max-w-3xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl font-light text-cream/90"
        >
          Finally…
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 2.5 }}
          className="text-base sm:text-lg md:text-xl font-light text-cream/90 mt-4"
        >
          after four years of wanting to tell you,
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 4.5 }}
          className="text-base sm:text-lg md:text-xl font-light text-cream/90 mt-4 mb-20"
        >
          I actually said it today.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 7 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-pastel-pink shadow-sm mb-12 leading-tight px-4"
        >
          Honey… Will you be mine? ❤️
        </motion.h1>
      </motion.div>
    </section>
  );
};
