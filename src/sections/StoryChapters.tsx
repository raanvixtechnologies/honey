import React from 'react';
import { motion } from 'framer-motion';
import { ChapterLayout } from '../components/ChapterLayout';

const RevealText: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0.2, className = "" }) => (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 1.2, delay }}
    className={`text-base sm:text-lg md:text-xl font-light text-cream/90 leading-relaxed ${className}`}
  >
    {children}
  </motion.p>
);

const HighlightText: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0.4 }) => (
  <motion.h3
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.5, delay }}
    className="text-xl sm:text-2xl md:text-4xl font-serif text-pastel-pink my-6 sm:my-8 max-w-xl text-center leading-snug px-4"
  >
    {children}
  </motion.h3>
);

export const ChapterOne = () => (
  <ChapterLayout>
    <RevealText delay={0.2}>Do you remember the first time I saw you?</RevealText>
    <br/>
    <RevealText delay={0.8}>It was during the Science Expo at the beginning of our B.Tech.</RevealText>
    <br/>
    <RevealText delay={1.4}>That’s when it all started for me…</RevealText>
  </ChapterLayout>
);

export const ChapterTwo = () => (
  <ChapterLayout>
    <RevealText delay={0.2}>Do you remember how I used to leave my class and come to your class just to spend some time there? 😅</RevealText>
    <br/>
    <RevealText delay={1.0}>I would come to your class just for you...</RevealText>
    <br/>
    <RevealText delay={1.8}>but you would always act like,</RevealText>
    <HighlightText delay={2.5}>“Senior... Junior...”</HighlightText>
    <RevealText delay={3.0}>and make such a big deal out of it. 😑😂</RevealText>
  </ChapterLayout>
);

export const ChapterThree = () => (
  <ChapterLayout>
    <RevealText delay={0.2}>So many times, I thought I should tell you that I love you.</RevealText>
    <br/>
    <RevealText delay={1.0}>But then I would stop myself, thinking,</RevealText>
    <HighlightText delay={2.0}>What if this completely backfires</HighlightText>
    <RevealText delay={2.8}>Even now, I’m extremely nervous.</RevealText>
    <br/>
    <RevealText delay={3.5}>I’ve wanted to tell you this for the past four years, but every time I got scared and backed out. 🥲</RevealText>
  </ChapterLayout>
);

export const ChapterFour = () => (
  <ChapterLayout>
    <RevealText delay={0.2}>And there was another little fear in my mind too.</RevealText>
    <RevealText delay={1.0}>I kept wondering...</RevealText>
    <HighlightText delay={2.0}>What if she has an issue with religious differences even in this generation..</HighlightText>
    <RevealText delay={3.0}>I never wanted to have even the slightest negative thought about you in my mind,</RevealText>
    <RevealText delay={4.0}>so I kept stopping myself from saying anything.</RevealText>
  </ChapterLayout>
);

export const ChapterFive = () => (
  <ChapterLayout>
    <RevealText delay={0.2}>You might be wondering why I’m telling you all this after so many years.</RevealText>
    <RevealText delay={1.0}>Honestly, one reason is…</RevealText>
    <HighlightText delay={2.0}>you’re not in our college anymore, and Narsi Reddy isn’t around to do anything now. 😂😅</HighlightText>
    <RevealText delay={3.0}>I used to come to your class just because I wanted to spend time with you,</RevealText>
    <RevealText delay={3.8}>but you would always start that whole senior-junior thing again😑😂</RevealText>
  </ChapterLayout>
);

export const ChapterSix = () => (
  <ChapterLayout>
    <RevealText delay={0.2}>I already know you might say no when I tell you this.</RevealText>
    <br/>
    <RevealText delay={1.0}>But if I don’t tell you...</RevealText>
    <HighlightText delay={2.0}>I’ll always feel like I wasted all these years.</HighlightText>
    <RevealText delay={3.0}>That’s why I’m finally saying it.</RevealText>
  </ChapterLayout>
);

export const ChapterSeven = () => (
  <ChapterLayout>
    <RevealText delay={0.2}>I truly believe that a love that grows naturally from the heart</RevealText>
    <RevealText delay={1.2}>is much more beautiful and meaningful than a love that is created only after marriage ❤️</RevealText>
    <br/>
    <motion.p
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 2.5 }}
      className="text-lg sm:text-xl md:text-2xl font-handwriting text-pastel-pink mt-4 px-4"
    >
      anduke honey ane donkey ni love chesa
    </motion.p>
  </ChapterLayout>
);

export const TheDream = () => (
  <ChapterLayout>
    <RevealText delay={0.2}>Whenever I see you,</RevealText>
    <RevealText delay={1.0}>I somehow imagine this little picture in my head—</RevealText>
    <br/>
    <RevealText delay={2.0}>both of us watching a late-night movie on one sofa,</RevealText>
    <RevealText delay={2.8}>eating some good food that I prepared,</RevealText>
    <br/>
    <RevealText delay={3.5} className="font-serif italic text-pastel-pink text-lg sm:text-xl md:text-3xl mt-4">
      and just peacefully spending time together. ❤️
    </RevealText>
  </ChapterLayout>
);
