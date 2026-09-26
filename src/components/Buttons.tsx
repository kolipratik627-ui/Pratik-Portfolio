import React from 'react';

interface ContactButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  label = 'Contact Me',
  onClick,
  className = '',
  href,
}) => {
  const content = (
    <button
      onClick={onClick}
      className={`rounded-full uppercase font-medium tracking-widest text-white cursor-pointer select-none
        px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base
        contact-btn-glow ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      {label}
    </button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
};

interface LiveProjectButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  label = 'VIEW DEMO',
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest
        px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 active:scale-95
        transition-all duration-200 cursor-pointer ${className}`}
    >
      {label}
    </button>
  );
};
