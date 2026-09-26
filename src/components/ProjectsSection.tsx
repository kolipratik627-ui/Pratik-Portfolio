import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './Buttons';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { salesImages } from '../assets/salesImages';

interface ProjectData {
  number: string;
  name: string;
  category: string;
  description: string;
  detailFlow: string[];
  sampleOutcome: string;
  col1_img1: string;
  col1_img2: string;
  col2_img: string;
}

const PROJECTS: ProjectData[] = [
  {
    number: '01',
    name: 'Lead Research',
    category: 'SALES DEMONSTRATION',
    description: 'Sample prospect research and lead-identification workflow.',
    detailFlow: [
      '1. Target Industry & Persona Criteria definition',
      '2. Web and directory-based prospect discovery',
      '3. Information extraction: Contact details, phone, decision makers',
      '4. Excel data cleaning, duplicate verification & scoring',
      '5. Preparation for outreach batches & CRM import',
    ],
    sampleOutcome: 'Demonstrates systematic lead filtering, zero duplicates, and verified prospect lists.',
    col1_img1: salesImages.leadResearchDb,
    col1_img2: salesImages.leadAnalyticsScore,
    col2_img: salesImages.crmSalesPipeline,
  },
  {
    number: '02',
    name: 'Outreach Workflow',
    category: 'SALES DEMONSTRATION',
    description: 'Sample personalized email and WhatsApp outreach process.',
    detailFlow: [
      '1. Personalized value-proposition framing using ChatGPT assistance',
      '2. WhatsApp Business introductory greeting tailored to prospect interest',
      '3. Timed multi-touch sequence (Day 1 call, Day 2 WhatsApp, Day 4 email recap)',
      '4. Objection handling: budget, timeline, authority alignment',
      '5. Securing confirmation for demo or detailed consultation call',
    ],
    sampleOutcome: 'Demonstrates conversational pacing, polite persistence, and rapid response turnaround.',
    col1_img1: salesImages.salesOutreachHub,
    col1_img2: salesImages.outreachMessageFlow,
    col2_img: salesImages.salesCallMeeting,
  },
  {
    number: '03',
    name: 'CRM Sales Flow',
    category: 'SALES DEMONSTRATION',
    description: 'Sample lead → follow-up → qualification → closing workflow.',
    detailFlow: [
      '1. Lead intake and stage logging in Salesmax CRM',
      '2. Detailed call notes, customer pain points & budget documentation',
      '3. Task scheduling for strict next-day and 3-day follow-up triggers',
      '4. Moving verified leads to "Negotiation" and "Closing Support" stages',
      '5. Weekly Excel summary generation for sales leadership visibility',
    ],
    sampleOutcome: 'Demonstrates airtight pipeline discipline, zero dropped leads, and systematic CRM rigor.',
    col1_img1: salesImages.crmFunnelWorkflow,
    col1_img2: salesImages.salesClosingDeal,
    col2_img: salesImages.businessGrowthChart,
  },
];

interface CardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  onOpenModal: (p: ProjectData) => void;
}

const Card: React.FC<CardProps> = ({ project, index, totalCards, onOpenModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky top-20 sm:top-24 md:top-32 h-[82vh] sm:h-[85vh] min-h-[540px] sm:min-h-[620px] flex items-center justify-center w-full"
      style={{
        top: `calc(${76 + index * 24}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full h-full max-w-6xl mx-auto rounded-[32px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
      >
        {/* Top Row */}
        <div className="flex items-center justify-between gap-3 pb-3 sm:pb-6 border-b border-white/10">
          <div className="flex items-center gap-3 sm:gap-6 min-w-0">
            <span
              className="font-black text-[#D7E2EA] leading-none shrink-0"
              style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] sm:text-xs tracking-widest font-mono uppercase text-[#B600A8] font-bold truncate">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase text-white tracking-wide truncate"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.8rem)' }}
              >
                {project.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#D7E2EA]/70 max-w-md hidden md:block">
                {project.description}
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <LiveProjectButton
              label="VIEW DEMO"
              onClick={() => onOpenModal(project)}
            />
          </div>
        </div>

        {/* Bottom Row: Two-Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 flex-grow pt-3 sm:pt-6 overflow-hidden min-h-0">
          {/* Left Column (40% width): 2 stacked images on md+, 1 on mobile */}
          <div className="md:col-span-5 flex flex-col gap-2.5 sm:gap-4 h-full justify-between min-h-0">
            <div
              className="w-full rounded-[24px] sm:rounded-[36px] md:rounded-[46px] overflow-hidden bg-neutral-900 border border-white/10 relative group"
              style={{ height: 'clamp(95px, 13vw, 210px)' }}
            >
              <img
                src={project.col1_img1}
                alt={`${project.name} step preview`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>

            <div
              className="w-full rounded-[24px] sm:rounded-[36px] md:rounded-[46px] overflow-hidden bg-neutral-900 border border-white/10 relative group hidden sm:block flex-grow"
              style={{ minHeight: 'clamp(120px, 18vw, 260px)' }}
            >
              <img
                src={project.col1_img2}
                alt={`${project.name} metrics preview`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column (60% width): 1 tall image */}
          <div className="md:col-span-7 h-full min-h-[160px] sm:min-h-[220px]">
            <div className="w-full h-full rounded-[24px] sm:rounded-[36px] md:rounded-[52px] overflow-hidden bg-neutral-900 border border-white/10 relative group">
              <img
                src={project.col2_img}
                alt={`${project.name} 3D workflow render`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 flex items-center justify-between text-[11px] sm:text-xs text-white/70">
                <span className="font-mono uppercase tracking-wider">
                  SAMPLE DEMONSTRATION &bull; WORKFLOW SPEC
                </span>
                <span className="text-white/40 hidden sm:inline">3D SALES RENDER</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectData | null>(null);

  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-16 sm:pt-20 md:pt-28 pb-32 z-10 px-4 sm:px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading: "Project" */}
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight select-none"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              Project
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-[#BBCCD7] uppercase">
                SALES DEMONSTRATIONS &bull; WORKFLOW BLUEPRINTS
              </span>
            </div>
          </div>
        </FadeIn>

        {/* 3 Sticky Stacking Cards */}
        <div className="relative flex flex-col gap-12 sm:gap-16">
          {PROJECTS.map((project, index) => (
            <Card
              key={project.number}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
              onOpenModal={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Live Project Demonstration Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#141416] border-2 border-[#D7E2EA] rounded-[32px] p-6 sm:p-8 text-white shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#D7E2EA] cursor-pointer transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#B600A8] font-bold uppercase mb-2">
              <span>{activeModalProject.category}</span>
              <span>&bull;</span>
              <span>DEMO {activeModalProject.number}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black uppercase mb-3">
              {activeModalProject.name}
            </h3>

            <p className="text-sm text-[#D7E2EA]/80 mb-6 leading-relaxed">
              {activeModalProject.description}
            </p>

            <div className="bg-[#0C0C0C] border border-white/10 rounded-2xl p-5 mb-6">
              <h4 className="text-xs uppercase font-mono tracking-widest text-[#BBCCD7] mb-3 font-semibold">
                Demonstrated Workflow Execution Steps:
              </h4>
              <ul className="space-y-2.5">
                {activeModalProject.detailFlow.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#D7E2EA]">
                    <CheckCircle2 size={16} className="text-[#B600A8] shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0C0C0C] border border-white/10 rounded-2xl p-4 mb-6">
              <span className="text-[11px] font-mono uppercase text-emerald-400 font-bold block mb-1">
                Verified Outcome
              </span>
              <p className="text-xs text-[#D7E2EA]/90">{activeModalProject.sampleOutcome}</p>
            </div>

            <div className="flex items-center justify-between gap-4 pt-2">
              <span className="text-xs text-white/50 italic">
                * Sample workflow representation.
              </span>
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#D7E2EA] transition-colors cursor-pointer flex items-center gap-2"
              >
                Close Demo <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
