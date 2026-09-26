import React, { useState } from 'react';
import { X, Phone, Mail, MessageSquare, Copy, Check, ExternalLink } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  if (!isOpen) return null;

  const copy = (val: string, label: string) => {
    navigator.clipboard.writeText(val);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-[#141416] border-2 border-[#D7E2EA] rounded-[32px] p-6 sm:p-8 text-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#D7E2EA] transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="text-center mb-6">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#B600A8] font-bold block mb-1">
            DIRECT OUTREACH
          </span>
          <h3 className="text-2xl font-black uppercase tracking-tight text-white">
            Connect with Pratik
          </h3>
          <p className="text-xs text-[#D7E2EA]/70 mt-1">
            Immediate joiner available for Inside Sales, Field Sales & Business Development.
          </p>
        </div>

        <div className="space-y-3 mb-6">
          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/917304810459?text=Hi%20Pratik,%20we%20reviewed%20your%20sales%20portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all text-emerald-400 group"
          >
            <div className="flex items-center gap-3">
              <MessageSquare size={20} />
              <div className="flex flex-col text-left">
                <span className="text-xs font-mono uppercase font-bold text-emerald-300">WhatsApp Chat</span>
                <span className="text-xs text-white/80">+91 7304810459</span>
              </div>
            </div>
            <ExternalLink size={16} className="text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Direct Phone Call */}
          <a
            href="tel:7304810459"
            className="flex items-center justify-between p-4 rounded-2xl bg-[#0C0C0C] border border-white/10 hover:border-white/30 transition-all text-[#D7E2EA] group"
          >
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-[#BBCCD7]" />
              <div className="flex flex-col text-left">
                <span className="text-xs font-mono uppercase font-bold text-white">Phone Call</span>
                <span className="text-xs text-white/70">7304810459</span>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                copy('7304810459', 'phone');
              }}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
              title="Copy Phone"
            >
              {copiedText === 'phone' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            </button>
          </a>

          {/* Email */}
          <a
            href="mailto:kolipratik679@gmail.com"
            className="flex items-center justify-between p-4 rounded-2xl bg-[#0C0C0C] border border-white/10 hover:border-white/30 transition-all text-[#D7E2EA] group"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <Mail size={20} className="text-[#BBCCD7] shrink-0" />
              <div className="flex flex-col text-left truncate">
                <span className="text-xs font-mono uppercase font-bold text-white">Email</span>
                <span className="text-xs text-white/70 truncate">kolipratik679@gmail.com</span>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                copy('kolipratik679@gmail.com', 'email');
              }}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors shrink-0"
              title="Copy Email"
            >
              {copiedText === 'email' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            </button>
          </a>
        </div>

        <div className="text-center pt-2 border-t border-white/5">
          <p className="text-[11px] font-mono text-white/50">
            Location: Ulwe, Navi Mumbai &bull; Work From Office
          </p>
        </div>
      </div>
    </div>
  );
};
