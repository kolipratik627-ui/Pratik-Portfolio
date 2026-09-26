import React from 'react';
import { FadeIn } from './FadeIn';
import { Briefcase, GraduationCap, Award, Globe2, Clock, MapPin, Building2, CheckCircle2 } from 'lucide-react';

const SKILLS = [
  'Lead Generation',
  'Calling',
  'Client Communication',
  'Follow-up',
  'Customer Relationship Management',
  'Negotiation',
  'Sales Closing',
  'Client Meetings',
  'Excel Reporting',
  'Email Communication',
  'WhatsApp Communication',
  'Target & Task Management',
  'AI-Assisted Sales',
];

const RESPONSIBILITIES = [
  'Customer calling and sales enquiries',
  'Lead generation and follow-up',
  'WhatsApp and email communication',
  'Salesmax CRM handling',
  'Understanding customer requirements',
  'Negotiation and sales closing support',
  'Client interaction',
  'Weekly sales tasks and targets',
  'Excel reporting',
];

export const ExperienceAndCredentialsSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#0C0C0C] py-20 sm:py-28 px-5 sm:px-8 md:px-10 z-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* 1. Experience & Skills Block */}
        <div>
          <FadeIn delay={0} y={35}>
            <div className="text-center mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B600A8] font-bold block mb-2">
                CAREER BACKGROUND
              </span>
              <h2
                className="hero-heading font-black uppercase leading-none tracking-tight select-none"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
              >
                Experience
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Experience Card (7 cols) */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.1} y={30}>
                <div className="rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA]/40 bg-[#121214] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-white/10">
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#B600A8] font-bold mb-1">
                        <Briefcase size={14} /> 3 MONTHS EXPERIENCE
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                        SALES EXECUTIVE
                      </h3>
                      <p className="text-base sm:text-lg font-medium text-[#BBCCD7] uppercase">
                        ANVAY MARITIME INSTITUTE
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase">
                      Hands-on Sales
                    </span>
                  </div>

                  <h4 className="text-xs font-mono uppercase tracking-widest text-white/50 mb-4 font-semibold">
                    Core Key Responsibilities:
                  </h4>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {RESPONSIBILITIES.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D7E2EA]">
                        <CheckCircle2 size={16} className="text-[#B600A8] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>

            {/* Core Skills Matrix (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <FadeIn delay={0.2} y={30}>
                <div className="rounded-[32px] sm:rounded-[40px] border border-white/10 bg-[#121214] p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-wide mb-2">
                    Core Sales Competencies
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-white/50 mb-6">
                    Practical execution skills
                  </p>

                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {SKILLS.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-[#D7E2EA] hover:border-[#B600A8]/60 hover:bg-[#B600A8]/10 transition-all select-none"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Work Preferences Box */}
              <FadeIn delay={0.3} y={30}>
                <div className="mt-6 rounded-[28px] bg-gradient-to-br from-[#18011F]/80 to-[#121214] border border-[#B600A8]/30 p-6">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#BBCCD7] font-bold mb-4">
                    Employment Availability
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="flex items-center gap-2 text-white">
                      <Clock size={16} className="text-[#B600A8]" />
                      <span className="font-semibold uppercase">Immediate Joiner</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <MapPin size={16} className="text-[#B600A8]" />
                      <span className="font-semibold uppercase">Navi Mumbai</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <Building2 size={16} className="text-[#B600A8]" />
                      <span className="font-semibold uppercase">Work From Office</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <Briefcase size={16} className="text-[#B600A8]" />
                      <span className="font-semibold uppercase">Inside / Field / BD</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* 2. Education, Certification & Languages Block */}
        <div>
          <FadeIn delay={0} y={35}>
            <div className="text-center mb-14">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B600A8] font-bold block mb-2">
                CREDENTIALS
              </span>
              <h3 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
                Education & Languages
              </h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Education Card */}
            <FadeIn delay={0.1} y={30}>
              <div className="p-6 sm:p-8 rounded-[32px] bg-[#121214] border border-white/10 h-full flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-2xl bg-white/5 w-fit text-[#BBCCD7] mb-5">
                    <GraduationCap size={24} />
                  </div>
                  <h4 className="text-xl font-bold uppercase text-white mb-4">
                    Education
                  </h4>

                  <div className="space-y-4">
                    <div className="border-l-2 border-[#B600A8] pl-3">
                      <span className="text-xs font-mono text-[#BBCCD7] uppercase block">
                        2021 &bull; 60%
                      </span>
                      <h5 className="text-sm font-bold text-white uppercase">
                        HSC — ARTS
                      </h5>
                      <p className="text-xs text-[#D7E2EA]/70">
                        Vidya Prasarak High School, CBD Belapur
                      </p>
                      <span className="text-[11px] text-white/40">
                        Maharashtra State Board
                      </span>
                    </div>

                    <div className="border-l-2 border-white/20 pl-3">
                      <span className="text-xs font-mono text-[#BBCCD7] uppercase block">
                        2019 &bull; 62%
                      </span>
                      <h5 className="text-sm font-bold text-white uppercase">
                        SSC
                      </h5>
                      <p className="text-xs text-[#D7E2EA]/70">
                        New English School, Ulwe
                      </p>
                      <span className="text-[11px] text-white/40">
                        Maharashtra State Board
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Certification Card */}
            <FadeIn delay={0.2} y={30}>
              <div className="p-6 sm:p-8 rounded-[32px] bg-[#121214] border border-white/10 h-full flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-2xl bg-white/5 w-fit text-[#BBCCD7] mb-5">
                    <Award size={24} />
                  </div>
                  <h4 className="text-xl font-bold uppercase text-white mb-4">
                    Certification
                  </h4>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-xs font-mono text-emerald-400 uppercase font-semibold block mb-1">
                      CERTIFIED COURSE
                    </span>
                    <h5 className="text-base font-bold text-white uppercase mb-1">
                      MS OFFICE COMPLETE
                    </h5>
                    <p className="text-xs text-[#D7E2EA]/80 font-medium">
                      S.K.D COMPUTER EDUCATION
                    </p>
                    <p className="text-[11px] text-white/50 mt-2">
                      Comprehensive training across Excel, Word, and PowerPoint for business reporting and office administration.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Languages & Preference Card */}
            <FadeIn delay={0.3} y={30}>
              <div className="p-6 sm:p-8 rounded-[32px] bg-[#121214] border border-white/10 h-full flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-2xl bg-white/5 w-fit text-[#BBCCD7] mb-5">
                    <Globe2 size={24} />
                  </div>
                  <h4 className="text-xl font-bold uppercase text-white mb-4">
                    Languages
                  </h4>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                      <span className="text-sm font-semibold text-white uppercase">Hindi</span>
                      <span className="text-xs font-mono text-emerald-400 font-medium uppercase">Fluent</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                      <span className="text-sm font-semibold text-white uppercase">Marathi</span>
                      <span className="text-xs font-mono text-emerald-400 font-medium uppercase">Fluent</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                      <span className="text-sm font-semibold text-white uppercase">English</span>
                      <span className="text-xs font-mono text-[#BBCCD7] font-medium uppercase">Basic Working</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 text-xs text-white/50 font-mono">
                  Location: Ulwe, Navi Mumbai, Maharashtra
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
