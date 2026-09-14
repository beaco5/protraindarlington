import { useState } from 'react';

type LogoProps = {
  className?: string;
  variant?: 'header' | 'footer';
};

export default function Logo({ className = '', variant = 'header' }: LogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className={`flex flex-col leading-none ${className}`}>
        <span className="font-display text-2xl tracking-wide text-white">PRO TRAIN</span>
        <span className="font-heading text-[0.6rem] uppercase tracking-[0.3em] text-gold">
          David Hodgson
        </span>
      </span>
    );
  }

  return (
    <img
      src="/images/Screenshot_2026-08-25_193156.png"
      alt="Pro Train Darlington"
      width={96}
      height={96}
      onError={() => setFailed(true)}
      className={variant === 'footer' ? `h-20 w-20 object-contain ${className}` : `h-16 w-16 object-contain ${className}`}
    />
  );
}
