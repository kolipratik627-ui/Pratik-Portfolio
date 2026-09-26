import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AiAndToolsSection } from './components/AiAndToolsSection';
import { ExperienceAndCredentialsSection } from './components/ExperienceAndCredentialsSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] selection:bg-[#B600A8] selection:text-white"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. HERO SECTION */}
      <HeroSection onContactClick={() => setIsContactOpen(true)} />

      {/* 2. MARQUEE SECTION */}
      <MarqueeSection />

      {/* 3. ABOUT SECTION */}
      <AboutSection onContactClick={() => setIsContactOpen(true)} />

      {/* 4. SERVICES SECTION */}
      <ServicesSection />

      {/* 5. PROJECTS SECTION */}
      <ProjectsSection />

      {/* 6. AI + SALES & TOOLS SECTION */}
      <AiAndToolsSection />

      {/* 7. EXPERIENCE, CREDENTIALS & SKILLS */}
      <ExperienceAndCredentialsSection />

      {/* 8. CONTACT & CLOSING SECTION */}
      <ContactSection
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContactModal={() => setIsContactOpen(true)}
      />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
