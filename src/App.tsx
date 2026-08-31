import { motion, useScroll } from "framer-motion";
import { Hero } from "./sections/Hero";
import { FloatingParticles } from "./components/FloatingParticles";
import { MusicControl } from "./components/MusicControl";
import { 
  ChapterOne, ChapterTwo, ChapterThree, 
  ChapterFour, ChapterFive, ChapterSix, 
  ChapterSeven, TheDream 
} from "./sections/StoryChapters";
import { FinalProposal } from "./sections/FinalProposal";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen font-sans bg-transparent text-slate-100 overflow-hidden relative">
      <FloatingParticles />
      <MusicControl />

      {/* Scroll Progress Bar for mobile and desktop */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pastel-pink to-lavender origin-left z-50 rounded-r-full"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Main Story Container */}
      <main className="w-full h-full flex flex-col items-center">
        <Hero />
        
        {/* Background cinematic overlay continues */}
        <div className="w-full relative bg-transparent">
          <ChapterOne />
          <ChapterTwo />
          <ChapterThree />
          <ChapterFour />
          <ChapterFive />
          <ChapterSix />
          <ChapterSeven />
          <TheDream />
        </div>

        <FinalProposal />

      </main>
    </div>
  )
}

export default App;
