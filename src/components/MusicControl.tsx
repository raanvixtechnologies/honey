import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export const MusicControl: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Logic to actually play/pause audio will be added later
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-deep-navy/50 backdrop-blur-md border border-lavender/30 text-lavender hover:bg-lavender/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pastel-pink"
      aria-label={isPlaying ? "Mute music" : "Play music"}
    >
      {isPlaying ? (
        <Volume2 size={24} className="stroke-[1.5]" />
      ) : (
        <VolumeX size={24} className="stroke-[1.5]" />
      )}
    </motion.button>
  );
};
