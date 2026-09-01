import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import bgMusic from '../assets/bg-music.mp3';

export const MusicControl: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Hide tooltip automatically after 8 seconds if user doesn't dismiss
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const attemptPlay = async (): Promise<boolean> => {
    if (!audioRef.current) return false;
    try {
      await audioRef.current.play();
      setIsPlaying(true);
      setShowTooltip(false);
      return true;
    } catch (err) {
      console.warn("Autoplay/play attempt prevented or waiting for user gesture:", err);
      return false;
    }
  };

  useEffect(() => {
    const handleFirstInteraction = async () => {
      if (isPlaying) return;
      const success = await attemptPlay();
      if (success) {
        removeListeners();
      }
    };

    const removeListeners = () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('touchend', handleFirstInteraction);
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction, { passive: true });
    window.addEventListener('touchstart', handleFirstInteraction, { passive: true });
    window.addEventListener('touchend', handleFirstInteraction, { passive: true });
    window.addEventListener('pointerdown', handleFirstInteraction, { passive: true });
    window.addEventListener('keydown', handleFirstInteraction, { passive: true });
    window.addEventListener('scroll', handleFirstInteraction, { passive: true });

    return () => {
      removeListeners();
    };
  }, [isPlaying]);

  const togglePlay = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) e.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.load();
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setShowTooltip(false);
        })
        .catch((err) => {
          console.warn("Manual play error:", err);
        });
    }
  };

  // Base path for public static assets fallback
  const publicMusicPath = `${import.meta.env.BASE_URL || './'}bg-music.mp3`.replace(/\/+/g, '/');

  return (
    <>
      {/* Background audio element with multiple source fallbacks */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        playsInline
      >
        <source src={bgMusic} type="audio/mpeg" />
        <source src={publicMusicPath} type="audio/mpeg" />
        <source src="./bg-music.mp3" type="audio/mpeg" />
        <source src="/bg-music.mp3" type="audio/mpeg" />
      </audio>

      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <AnimatePresence>
          {!isPlaying && showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              onClick={togglePlay}
              className="cursor-pointer bg-deep-navy/90 backdrop-blur-md text-lavender text-xs px-3 py-1.5 rounded-full border border-lavender/30 shadow-lg flex items-center gap-1.5 animate-pulse hover:bg-lavender/20 transition-all select-none"
            >
              <span>🎵 Click anywhere or tap here to play music</span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          onClick={togglePlay}
          className={`p-3 rounded-full backdrop-blur-md border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pastel-pink shadow-lg ${
            isPlaying 
              ? "bg-deep-navy/70 border-lavender/40 text-lavender hover:bg-lavender/20" 
              : "bg-pastel-pink/20 border-pastel-pink/50 text-pastel-pink hover:bg-pastel-pink/30 animate-pulse"
          }`}
          aria-label={isPlaying ? "Mute background music" : "Play background music"}
          title={isPlaying ? "Mute music" : "Play music"}
        >
          {isPlaying ? (
            <Volume2 size={24} className="stroke-[1.5]" />
          ) : (
            <VolumeX size={24} className="stroke-[1.5]" />
          )}
        </motion.button>
      </div>
    </>
  );
};
