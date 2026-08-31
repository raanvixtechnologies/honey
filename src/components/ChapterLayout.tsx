import React from "react";
import { motion } from "framer-motion";

interface ChapterLayoutProps {
  children: React.ReactNode;
  chapterNumber?: string;
  chapterTitle?: string;
  className?: string;
  id?: string;
}

export const ChapterLayout: React.FC<ChapterLayoutProps> = ({ 
  children, 
  className = "",
  id
}) => {
  return (
    <section 
      id={id}
      className={`min-h-screen w-full flex flex-col justify-center items-center px-6 md:px-12 py-24 relative z-10 bg-transparent ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full max-w-2xl flex flex-col items-center text-center space-y-12"
      >
        {children}
      </motion.div>
    </section>
  );
};
