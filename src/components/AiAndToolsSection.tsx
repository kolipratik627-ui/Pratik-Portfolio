import React from 'react';
import { FadeIn } from './FadeIn';
import { Bot, Sparkles, CheckCircle2, Search, Mail, MessageSquare, Database, FileSpreadsheet, FileText, Presentation, Globe } from 'lucide-react';

const AI_CAPABILITIES = [
  'AI-assisted prospect research',
  'AI-assisted lead generation',
  'Personalized outreach drafting',
  'Follow-up message preparation',
  'Email drafting',
  'Sales research',
  'Faster repetitive sales tasks',
];

const SALES_TOOLS = [
  { name: 'SALESmax CRM', category: 'CRM & Pipeline', icon: Database, highlight: 'Primary CRM Used' },
  { name: 'ChatGPT', category: 'AI Productivity', icon: Bot, highlight: 'Research & Drafting' },
  { name: 'Microsoft Excel', category: 'Data & Reporting', icon: FileSpreadsheet, highlight: 'Lead Tracking & Reports' },
  { name: 'Microsoft Word', category: 'Documentation', icon: FileText, highlight: 'Notes & Briefs' },
  { name: 'Microsoft PowerPoint', category: 'Presentations', icon: Presentation, highlight: 'Sales Decks' },
  { name: 'Google Sheets / Workspace', category: 'Cloud Collaboration', icon: FileSpreadsheet, highlight: 'Live Tracking' },
  { name: 'WhatsApp Business', category: 'Client Communication', icon: MessageSquare, highlight: 'Direct Follow-ups' },
  { name: 'Email', category: 'Communication', icon: Mail, highlight: 'Formal Outreach' },
  { name: 'Internet Research', category: 'Prospect Intelligence', icon: Globe, highlight: 'Lead Discovery' },
];

export const AiAndToolsSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#0C0C0C] py-20 sm:py-28 px-5 sm:px-8 md:px-10 z-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* AI + Sales Header */}
        <FadeIn delay={0} y={40}>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-[#BBCCD7] uppercase mb-4">
              <Sparkles size={14} className="text-[#B600A8]" />
              PRACTICAL AI USAGE &bull; SALES FIRST + AI PRODUCTIVITY
            </div>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight select-none mb-4"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
            >
              AI + SALES
            </h2>
            <p className="text-lg sm:text-2xl font-light text-[#D7E2EA] tracking-wide uppercase">
              &ldquo;Using AI tools to make sales work faster.&rdquo;
            </p>
          </div>
        </FadeIn>

        {/* AI Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {AI_CAPABILITIES.map((capability, i) => (
            <FadeIn key={i} delay={0.05 * i} y={20}>
              <div className="flex items-center gap-3.5 p-4 sm:p-5 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-white/20 transition-all hover:bg-neutral-900">
                <div className="p-2 rounded-xl bg-[#B600A8]/20 text-[#B600A8] shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <span className="text-sm sm:text-base font-medium text-[#D7E2EA]">
                  {capability}
                </span>
              </div>
            </FadeIn>
          ))}
          {/* Summary badge in the empty grid slot */}
          <FadeIn delay={0.4} y={20}>
            <div className="flex items-center gap-3.5 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#18011F] to-[#7621B0]/30 border border-[#B600A8]/30">
              <Search size={20} className="text-[#BBCCD7]" />
              <div className="flex flex-col">
                <span className="text-xs font-mono uppercase text-white/60">Positioning</span>
                <span className="text-sm font-semibold text-white uppercase tracking-wider">
                  AI Tools for Sales Productivity
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Tools Section */}
        <FadeIn delay={0.1} y={30}>
          <div className="text-center mb-12">
            <h3
              className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight mb-3"
            >
              Sales & Productivity Tools
            </h3>
            <p className="text-xs sm:text-sm text-[#D7E2EA]/60 uppercase font-mono tracking-widest">
              Verified daily stack used for prospect research, communication & pipeline execution
            </p>
          </div>
        </FadeIn>

        {/* Tools Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          {SALES_TOOLS.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <FadeIn key={tool.name} delay={0.06 * idx} y={25}>
                <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#121214] border border-white/10 hover:border-[#D7E2EA]/40 transition-all group flex flex-col justify-between h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-white/5 text-[#BBCCD7] group-hover:text-white group-hover:bg-[#B600A8]/20 transition-colors">
                      <Icon size={24} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 px-2 py-0.5 rounded bg-white/5">
                      {tool.category}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white uppercase tracking-wide group-hover:text-[#BBCCD7] transition-colors mb-1">
                      {tool.name}
                    </h4>
                    <span className="text-xs text-[#D7E2EA]/60 font-light">
                      {tool.highlight}
                    </span>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
