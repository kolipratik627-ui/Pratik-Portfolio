import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './Buttons';

interface AboutSectionProps {
  onContactClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const bioText =
    "Sales professional with 3 months of hands-on experience in customer communication, lead generation, follow-up and CRM-based sales activities. Experienced in using calls, WhatsApp, email and Salesmax CRM to manage prospects and support the sales process. Also use AI tools such as ChatGPT for research, lead generation support, outreach preparation and repetitive sales tasks.";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0C0C] flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Corner 1: Top-Left Moon Icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-10">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Moon Decorative"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] filter contrast-105"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Corner 2: Bottom-Left 3D Object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-10">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Shape Decorative"
            className="w-[100px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] filter contrast-105"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Corner 3: Top-Right Lego Icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-10">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego Decorative"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] filter contrast-105"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Corner 4: Bottom-Right 3D Group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-10">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Group Decorative"
            className="w-[130px] sm:w-[170px] md:w-[220px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] filter contrast-105"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Central Content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading & text: gap-10 sm:gap-14 md:gap-16 */}
        <div className="mt-10 sm:mt-14 md:mt-16 flex flex-col items-center">
          <AnimatedText
            text={bioText}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
          />
        </div>

        {/* Gap between text block and button: gap-16 sm:gap-20 md:gap-24 */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <FadeIn delay={0.2} y={20}>
            <ContactButton
              onClick={() => {
                if (onContactClick) onContactClick();
                else {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
