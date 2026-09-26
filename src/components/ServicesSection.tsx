import React from 'react';
import { FadeIn } from './FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    name: 'LEAD GENERATION',
    description:
      'Finding and developing potential prospects through structured research, outreach and follow-up.',
  },
  {
    number: '02',
    name: 'CLIENT COMMUNICATION',
    description:
      'Handling customer conversations through calls, WhatsApp and email while understanding requirements clearly.',
  },
  {
    number: '03',
    name: 'FOLLOW-UP & CRM',
    description:
      'Managing prospect information, follow-ups and sales activities using Salesmax CRM.',
  },
  {
    number: '04',
    name: 'NEGOTIATION & CLOSING',
    description:
      'Understanding objections, discussing requirements and supporting the sales closing process.',
  },
  {
    number: '05',
    name: 'BUSINESS DEVELOPMENT',
    description:
      'Supporting prospecting, outreach and relationship-building activities to create new business opportunities.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-10 select-none"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* 5 Service Items */}
        <div className="flex flex-col">
          {SERVICES.map((item, index) => (
            <FadeIn key={item.number} delay={index * 0.1} y={30}>
              <div
                className={`flex flex-col sm:flex-row sm:items-center justify-between py-8 sm:py-10 md:py-12 gap-4 sm:gap-8 md:gap-14 border-b border-[#0C0C0C]/15 ${
                  index === 0 ? 'border-t border-[#0C0C0C]/15' : ''
                }`}
              >
                {/* Left: Big Number */}
                <div
                  className="font-black text-[#0C0C0C] leading-none shrink-0 tracking-tight"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {item.number}
                </div>

                {/* Right: Title & Description */}
                <div className="flex flex-col flex-grow justify-center">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide mb-2 sm:mb-3"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
