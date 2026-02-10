import { useState, useEffect } from 'react';
import { ImageOff } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackClassName = '',
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  // Reset error state when src changes
  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-fauji-light border-2 border-fauji-green/20 ${fallbackClassName || className}`}
      >
        <div className="text-center p-4">
          <ImageOff className="h-12 w-12 text-fauji-green/40 mx-auto mb-2" />
          <p className="text-sm text-fauji-dark/60 font-medium">Image unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      loading="lazy"
    />
  );
}
