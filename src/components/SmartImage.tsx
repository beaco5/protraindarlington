import { useState } from 'react';
import { ImageIcon } from 'lucide-react';

type SmartImageProps = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
};

export default function SmartImage({ src, alt, label, className = '' }: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-oxblood-light/90 text-cream/70 ${className}`}
        role="img"
        aria-label={alt}
      >
        <ImageIcon size={32} className="text-gold/70" />
        <span className="px-3 text-center font-heading text-xs uppercase tracking-wide">
          {label ?? alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
