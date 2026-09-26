import React, { useEffect, useRef, useState } from 'react';
import { salesImages } from '../assets/salesImages';

interface MarqueeTile {
  src: string;
  category: string;
  title: string;
}

const ROW_1_TILES: MarqueeTile[] = [
  {
    src: salesImages.crmSalesPipeline,
    category: 'CRM & PIPELINE',
    title: 'Salesmax Stage Discipline',
  },
  {
    src: salesImages.leadResearchDb,
    category: 'LEAD GENERATION',
    title: 'Verified Prospect Discovery',
  },
  {
    src: salesImages.aiSalesProductivity,
    category: 'AI-ASSISTED SALES',
    title: 'Smart Research Automation',
  },
  {
    src: salesImages.salesOutreachHub,
    category: 'OUTREACH WORKFLOW',
    title: 'Omnichannel Calls & WhatsApp',
  },
  {
    src: salesImages.businessGrowthChart,
    category: 'BUSINESS DEVELOPMENT',
    title: 'Target & Task Performance',
  },
  {
    src: salesImages.salesClosingDeal,
    category: 'SALES CLOSING',
    title: 'Negotiation & Objection Handling',
  },
  {
    src: salesImages.leadAnalyticsScore,
    category: 'LEAD QUALIFICATION',
    title: 'Filtering & Data Accuracy',
  },
  {
    src: salesImages.outreachMessageFlow,
    category: 'OUTREACH SEQUENCING',
    title: 'Multi-Touch Follow-Up System',
  },
  {
    src: salesImages.salesCallMeeting,
    category: 'CLIENT COMMUNICATION',
    title: 'Consultative Customer Calls',
  },
  {
    src: salesImages.crmFunnelWorkflow,
    category: 'PIPELINE FUNNEL',
    title: 'Systematic Qualification Stages',
  },
  {
    src: salesImages.prospectFunnelNetwork,
    category: 'LEAD NETWORK',
    title: 'Business Opportunity Pipeline',
  },
];

const ROW_2_TILES: MarqueeTile[] = [
  {
    src: salesImages.aiSalesProductivity,
    category: 'AI PRODUCTIVITY',
    title: 'ChatGPT Sales Preparation',
  },
  {
    src: salesImages.prospectFunnelNetwork,
    category: 'BUSINESS DEVELOPMENT',
    title: 'Relationship & Lead Building',
  },
  {
    src: salesImages.crmFunnelWorkflow,
    category: 'CRM STAGES',
    title: 'Salesmax Activity Logging',
  },
  {
    src: salesImages.leadResearchDb,
    category: 'PROSPECT RESEARCH',
    title: 'Zero-Duplicate Directory Lists',
  },
  {
    src: salesImages.salesCallMeeting,
    category: 'CALLING RIGOR',
    title: 'Detailed Notes & Pain Discovery',
  },
  {
    src: salesImages.salesClosingDeal,
    category: 'DEAL CLOSING',
    title: 'Supporting Decision Makers',
  },
  {
    src: salesImages.businessGrowthChart,
    category: 'EXCEL REPORTING',
    title: 'Weekly Leadership Metrics',
  },
  {
    src: salesImages.salesOutreachHub,
    category: 'OUTREACH TIMING',
    title: 'WhatsApp & Email Touchpoints',
  },
  {
    src: salesImages.leadAnalyticsScore,
    category: 'LEAD SCORING',
    title: 'Target Fit & Readiness',
  },
  {
    src: salesImages.outreachMessageFlow,
    category: 'RAPID FOLLOW-UP',
    title: 'Timely Customer Communication',
  },
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = window.scrollY + rect.top;
            const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
            setScrollOffset(offset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tripled for seamless infinite scrolling
  const row1Items = [...ROW_1_TILES, ...ROW_1_TILES, ...ROW_1_TILES];
  const row2Items = [...ROW_2_TILES, ...ROW_2_TILES, ...ROW_2_TILES];

  const row1Transform = `translateX(${scrollOffset - 200}px)`;
  const row2Transform = `translateX(${-(scrollOffset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      {/* Decorative gradient masks at edges */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none" />

      {/* Row 1: moves RIGHT on scroll */}
      <div className="flex gap-3 mb-3 w-max" style={{ transform: row1Transform, willChange: 'transform' }}>
        {row1Items.map((item, i) => (
          <div
            key={`r1-${i}`}
            className="relative flex-shrink-0 w-[300px] h-[190px] sm:w-[380px] sm:h-[240px] md:w-[420px] md:h-[270px] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-lg group select-none"
          >
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Sales Badge & Context Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between pointer-events-none">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#D7E2EA] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B600A8] animate-pulse" />
                  {item.category}
                </span>
                <p className="text-xs sm:text-sm font-medium text-white tracking-wide mt-1.5 drop-shadow">
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2: moves LEFT on scroll */}
      <div className="flex gap-3 w-max" style={{ transform: row2Transform, willChange: 'transform' }}>
        {row2Items.map((item, i) => (
          <div
            key={`r2-${i}`}
            className="relative flex-shrink-0 w-[300px] h-[190px] sm:w-[380px] sm:h-[240px] md:w-[420px] md:h-[270px] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-lg group select-none"
          >
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Sales Badge & Context Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between pointer-events-none">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#BBCCD7] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  {item.category}
                </span>
                <p className="text-xs sm:text-sm font-medium text-white tracking-wide mt-1.5 drop-shadow">
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
