import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#141416] border-2 border-[#D7E2EA] rounded-[32px] p-6 sm:p-10 text-white shadow-2xl my-8 max-h-[90vh] overflow-y-auto">
        {/* Top actions */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono uppercase text-[#D7E2EA] font-semibold tracking-wider">
              Official Profile &bull; Pratik Koli
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-[#D7E2EA] transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer size={14} /> Print
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#D7E2EA] transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Resume Header */}
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-1">
            PRATIK KOLI
          </h1>
          <p className="text-sm sm:text-base font-semibold text-[#BBCCD7] uppercase tracking-wider mb-4">
            SALES EXECUTIVE &bull; INSIDE SALES &bull; BUSINESS DEVELOPMENT
          </p>

          <div className="flex flex-wrap gap-4 text-xs font-mono text-[#D7E2EA]/80 pt-2 border-t border-white/5">
            <div className="flex items-center gap-1.5">
              <Phone size={13} className="text-[#B600A8]" />
              <a href="tel:7304810459" className="hover:underline">7304810459</a>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail size={13} className="text-[#B600A8]" />
              <a href="mailto:kolipratik679@gmail.com" className="hover:underline">kolipratik679@gmail.com</a>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={13} className="text-[#B600A8]" />
              <span>Ulwe, Navi Mumbai, Maharashtra</span>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-6 bg-[#0C0C0C] p-4 rounded-2xl border border-white/10">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#B600A8] font-bold mb-2">
            Professional Summary
          </h2>
          <p className="text-xs sm:text-sm text-[#D7E2EA]/90 leading-relaxed">
            Sales professional with 3 months of hands-on experience in customer communication, lead generation, follow-up and CRM-based sales activities. Experienced in using calls, WhatsApp, email and Salesmax CRM to manage prospects and support the sales process. Also use AI tools such as ChatGPT for research, lead generation support, outreach preparation and repetitive sales tasks.
          </p>
        </div>

        {/* Experience */}
        <div className="mb-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#BBCCD7] font-bold mb-3 flex items-center gap-2">
            <Briefcase size={14} className="text-[#B600A8]" /> Work Experience
          </h2>
          <div className="bg-[#0C0C0C] p-5 rounded-2xl border border-white/10">
            <div className="flex flex-wrap justify-between items-start mb-2">
              <div>
                <h3 className="text-base font-bold text-white uppercase">
                  SALES EXECUTIVE
                </h3>
                <p className="text-xs font-semibold text-[#BBCCD7] uppercase">
                  ANVAY MARITIME INSTITUTE
                </p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                3 MONTHS EXPERIENCE
              </span>
            </div>

            <h4 className="text-[11px] font-mono text-white/50 uppercase mb-2">Key Responsibilities:</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#D7E2EA]/85">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 size={13} className="text-[#B600A8] shrink-0 mt-0.5" />
                Customer calling and sales enquiries
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 size={13} className="text-[#B600A8] shrink-0 mt-0.5" />
                Lead generation and follow-up
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 size={13} className="text-[#B600A8] shrink-0 mt-0.5" />
                WhatsApp and email communication
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 size={13} className="text-[#B600A8] shrink-0 mt-0.5" />
                Salesmax CRM handling
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 size={13} className="text-[#B600A8] shrink-0 mt-0.5" />
                Understanding customer requirements
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 size={13} className="text-[#B600A8] shrink-0 mt-0.5" />
                Negotiation and sales closing support
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 size={13} className="text-[#B600A8] shrink-0 mt-0.5" />
                Client interaction
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 size={13} className="text-[#B600A8] shrink-0 mt-0.5" />
                Weekly sales tasks and targets
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 size={13} className="text-[#B600A8] shrink-0 mt-0.5" />
                Excel reporting
              </li>
            </ul>
          </div>
        </div>

        {/* Skills & Tools */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#0C0C0C] p-4 rounded-2xl border border-white/10">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#BBCCD7] font-bold mb-2">
              Sales Skills
            </h3>
            <p className="text-xs text-[#D7E2EA] leading-relaxed">
              Lead Generation, Calling, Client Communication, Follow-up, CRM, Negotiation, Sales Closing, Client Meetings, Excel Reporting, Email Communication, WhatsApp Communication, Target & Task Management, AI-Assisted Sales.
            </p>
          </div>

          <div className="bg-[#0C0C0C] p-4 rounded-2xl border border-white/10">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#BBCCD7] font-bold mb-2">
              Tools Stack
            </h3>
            <p className="text-xs text-[#D7E2EA] leading-relaxed">
              SALESmax CRM, ChatGPT, Microsoft Excel, Microsoft Word, Microsoft PowerPoint, Google Sheets / Workspace, WhatsApp Business, Email, Internet Research.
            </p>
          </div>
        </div>

        {/* Education, Certification, Languages */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-xs">
          <div className="bg-[#0C0C0C] p-4 rounded-2xl border border-white/10">
            <span className="font-mono uppercase text-[#B600A8] block font-bold mb-1">
              Education
            </span>
            <p className="font-bold text-white">HSC — ARTS (2021 | 60%)</p>
            <p className="text-white/60 text-[11px]">Vidya Prasarak High School, CBD Belapur</p>
            <p className="font-bold text-white mt-2">SSC (2019 | 62%)</p>
            <p className="text-white/60 text-[11px]">New English School, Ulwe</p>
          </div>

          <div className="bg-[#0C0C0C] p-4 rounded-2xl border border-white/10">
            <span className="font-mono uppercase text-[#B600A8] block font-bold mb-1">
              Certification
            </span>
            <p className="font-bold text-white">MS OFFICE COMPLETE</p>
            <p className="text-white/60 text-[11px]">S.K.D COMPUTER EDUCATION</p>
            <p className="text-emerald-400 text-[10px] mt-2 font-mono">Excel &bull; Word &bull; PowerPoint</p>
          </div>

          <div className="bg-[#0C0C0C] p-4 rounded-2xl border border-white/10">
            <span className="font-mono uppercase text-[#B600A8] block font-bold mb-1">
              Languages & Availability
            </span>
            <p className="text-white">Hindi — <span className="text-emerald-400">Fluent</span></p>
            <p className="text-white">Marathi — <span className="text-emerald-400">Fluent</span></p>
            <p className="text-white">English — <span className="text-white/70">Basic Working</span></p>
            <p className="text-[#BBCCD7] text-[11px] font-mono mt-2 font-semibold">Immediate Joiner &bull; WFO</p>
          </div>
        </div>

        <div className="text-center pt-2">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#D7E2EA] transition-colors cursor-pointer"
          >
            Close View
          </button>
        </div>
      </div>
    </div>
  );
};
