import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export const MusicControl: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Play audio on first user interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        }).catch((err) => {
          console.warn("Autoplay was prevented:", err);
        });
      }
    };

    if (!hasInteracted) {
      window.addEventListener('click', handleFirstInteraction, { once: true });
      window.addEventListener('scroll', handleFirstInteraction, { once: true });
      window.addEventListener('touchstart', handleFirstInteraction, { once: true });
    }

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [hasInteracted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.warn);
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* Background audio element */}
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}bg-music.mp3`}
        loop
        preload="auto"
      />

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
    </>
  );
};
