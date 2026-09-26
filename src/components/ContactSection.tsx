import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton, LiveProjectButton } from './Buttons';
import { Phone, Mail, MapPin, Globe, Check, Copy, ExternalLink, X, FileText, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  onOpenResume?: () => void;
  onOpenContactModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenResume,
  onOpenContactModal,
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#0C0C0C] py-24 sm:py-32 px-5 sm:px-8 md:px-10 z-10 border-t border-white/10 select-none"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Top Tagline */}
        <FadeIn delay={0} y={30}>
          <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-[#BBCCD7] uppercase mb-6 inline-block">
            DIRECT OUTREACH &bull; IMMEDIATE JOINER
          </span>
        </FadeIn>

        {/* Final Statement */}
        <FadeIn delay={0.1} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight select-none mb-6 max-w-4xl"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 95px)' }}
          >
            READY FOR THE NEXT SALES OPPORTUNITY.
          </h2>
        </FadeIn>

        {/* Supporting Line */}
        <FadeIn delay={0.2} y={30}>
          <p className="text-base sm:text-xl text-[#D7E2EA] font-light max-w-2xl leading-relaxed mb-12 sm:mb-16">
            Focused on lead generation, client communication, CRM and AI-assisted sales productivity.
          </p>
        </FadeIn>

        {/* Action Buttons */}
        <FadeIn delay={0.3} y={20}>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-16 sm:mb-20">
            <ContactButton
              label="CONTACT ME"
              onClick={onOpenContactModal}
            />
            <LiveProjectButton
              label="VIEW RESUME"
              onClick={onOpenResume}
            />
          </div>
        </FadeIn>

        {/* Contact Info Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {/* Phone */}
          <FadeIn delay={0.35} y={20}>
            <div className="p-5 rounded-2xl bg-[#121214] border border-white/10 flex flex-col justify-between group hover:border-[#D7E2EA]/30 transition-all h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-white/5 text-[#BBCCD7] group-hover:text-white group-hover:bg-[#B600A8]/20 transition-colors">
                  <Phone size={20} />
                </div>
                <button
                  onClick={() => copyToClipboard('7304810459', 'phone')}
                  className="text-white/40 hover:text-white transition-colors cursor-pointer p-1"
                  title="Copy Phone"
                >
                  {copiedField === 'phone' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-white/50 block">Phone / WhatsApp</span>
                <a
                  href="tel:7304810459"
                  className="text-base font-bold text-white tracking-wide hover:underline inline-block mt-0.5"
                >
                  +91 7304810459
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Email */}
          <FadeIn delay={0.4} y={20}>
            <div className="p-5 rounded-2xl bg-[#121214] border border-white/10 flex flex-col justify-between group hover:border-[#D7E2EA]/30 transition-all h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-white/5 text-[#BBCCD7] group-hover:text-white group-hover:bg-[#B600A8]/20 transition-colors">
                  <Mail size={20} />
                </div>
                <button
                  onClick={() => copyToClipboard('kolipratik679@gmail.com', 'email')}
                  className="text-white/40 hover:text-white transition-colors cursor-pointer p-1"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] font-mono uppercase text-white/50 block">Email Address</span>
                <a
                  href="mailto:kolipratik679@gmail.com"
                  className="text-sm font-bold text-white tracking-wide hover:underline truncate block mt-0.5"
                >
                  kolipratik679@gmail.com
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Location */}
          <FadeIn delay={0.45} y={20}>
            <div className="p-5 rounded-2xl bg-[#121214] border border-white/10 flex flex-col justify-between group hover:border-[#D7E2EA]/30 transition-all h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-white/5 text-[#BBCCD7] group-hover:text-white group-hover:bg-[#B600A8]/20 transition-colors">
                  <MapPin size={20} />
                </div>
                <span className="text-[10px] font-mono uppercase text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10">
                  Navi Mumbai
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-white/50 block">Location</span>
                <span className="text-sm font-bold text-white tracking-wide block mt-0.5">
                  Ulwe, Navi Mumbai
                </span>
                <span className="text-xs text-[#D7E2EA]/60">Maharashtra</span>
              </div>
            </div>
          </FadeIn>

          {/* Portfolio */}
          <FadeIn delay={0.5} y={20}>
            <div className="p-5 rounded-2xl bg-[#121214] border border-white/10 flex flex-col justify-between group hover:border-[#D7E2EA]/30 transition-all h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-white/5 text-[#BBCCD7] group-hover:text-white group-hover:bg-[#B600A8]/20 transition-colors">
                  <Globe size={20} />
                </div>
                <a
                  href="https://pratikportfolio-silk.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors p-1"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] font-mono uppercase text-white/50 block">Live Portfolio</span>
                <a
                  href="https://pratikportfolio-silk.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-white tracking-wide hover:underline truncate block mt-0.5"
                >
                  pratikportfolio-silk.vercel.app
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Footer info line */}
        <div className="mt-20 pt-8 border-t border-white/5 w-full flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 font-mono gap-4">
          <span>&copy; {new Date().getFullYear()} PRATIK KOLI &bull; SALES PROFESSIONAL</span>
          <span>IMMEDIATE JOINER &bull; WORK FROM OFFICE</span>
        </div>
      </div>
    </section>
  );
};
