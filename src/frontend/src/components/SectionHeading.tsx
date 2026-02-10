import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string | ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left',
        className
      )}
    >
      {subtitle && (
        <p className="text-sm font-semibold uppercase tracking-wider text-fauji-green mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fauji-dark mb-4">
        {title}
      </h2>
      {description && (
        <div className="text-lg text-gray-700 leading-relaxed">
          {description}
        </div>
      )}
    </div>
  );
}
