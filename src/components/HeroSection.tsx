import React, { useState, useEffect } from 'react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './Buttons';
import { HeroCharacter } from './HeroCharacter';

interface HeroSectionProps {
  onContactClick?: () => void;
}

const TYPEWRITER_PHRASES = [
  'LEAD GENERATION',
  'CLIENT FOLLOW-UP',
  'CRM-BASED SALES',
  'AI-ASSISTED SALES',
  'BUSINESS DEVELOPMENT',
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(TYPEWRITER_PHRASES[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = TYPEWRITER_PHRASES[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < currentFullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        }, 85);
      } else {
        // Pause at full word
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      // While deleting: if it gets down to 1 character, smoothly swap to next phrase so it never appears visually empty
      if (displayedText.length > 1) {
        timeout = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        const nextIdx = (phraseIndex + 1) % TYPEWRITER_PHRASES.length;
        setPhraseIndex(nextIdx);
        setDisplayedText(TYPEWRITER_PHRASES[nextIdx].slice(0, 1));
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, phraseIndex]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[680px] w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* 1. Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-30">
        <nav className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <button
            onClick={() => scrollTo('about')}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('services')}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Contact
          </button>
        </nav>
      </FadeIn>

      {/* 2. Top-Center Sales Badge & Typewriter */}
      <div className="z-20 w-full flex flex-col items-center justify-center text-center px-4 mt-2 sm:mt-1">
        <FadeIn delay={0.1} y={15} className="flex flex-col items-center">
          <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs tracking-widest uppercase font-semibold text-[#D7E2EA]">
              SALES EXECUTIVE &bull; INSIDE SALES &bull; BUSINESS DEVELOPMENT
            </span>
          </div>

          <div className="h-6 sm:h-7 flex items-center justify-center">
            <span className="text-xs sm:text-sm md:text-base tracking-[0.2em] font-medium text-[#BBCCD7]">
              SPECIALIZING IN:{' '}
            </span>
            <span className="inline-flex items-center text-xs sm:text-sm md:text-base tracking-[0.2em] font-bold text-white ml-2 min-w-[190px] sm:min-w-[240px]">
              <span>{displayedText || TYPEWRITER_PHRASES[phraseIndex]}</span>
              <span className="inline-block w-0.5 h-4 ml-1 bg-[#B600A8] animate-pulse align-middle" />
            </span>
          </div>
        </FadeIn>
      </div>

      {/* 3. Hero Heading */}
      <div className="relative w-full overflow-hidden text-center z-10 -mt-2 sm:-mt-4 md:-mt-8">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5 select-none pointer-events-none">
            HI, I&apos;M PRATIK
          </h1>
        </FadeIn>
      </div>

      {/* 4. Hero Portrait with Magnet Mouse-Following Effect */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex items-end justify-center"
          >
            <HeroCharacter
              imageUrl="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Pratik Koli - 3D Sales Character"
              className="w-full"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* 5. Bottom Bar */}
      <div className="relative z-20 w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end">
        {/* Left copy */}
        <FadeIn delay={0.35} y={20}>
          <div className="flex flex-col">
            <span className="text-[10px] tracking-widest text-white/50 uppercase font-mono mb-1">
              TURNING CONVERSATIONS INTO OPPORTUNITIES
            </span>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
              style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
            >
              Sales professional focused on lead generation, client communication, follow-up, CRM and AI-assisted sales productivity.
            </p>
          </div>
        </FadeIn>

        {/* Right CTA */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton
            onClick={() => {
              if (onContactClick) onContactClick();
              else scrollTo('contact');
            }}
          />
        </FadeIn>
      </div>
    </section>
  );
};
