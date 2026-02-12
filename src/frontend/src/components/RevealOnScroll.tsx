import { ReactNode } from 'react';
import { useInViewOnce } from '@/hooks/useInViewOnce';

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Wrapper component that reveals its children with a fade-up animation
 * when they scroll into view. Respects prefers-reduced-motion.
 */
export default function RevealOnScroll({ 
  children, 
  className = '',
  delay = 0 
}: RevealOnScrollProps) {
  const { ref, isRevealed } = useInViewOnce({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isRevealed 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      } motion-reduce:opacity-100 motion-reduce:translate-y-0 ${className}`}
      style={{ transitionDelay: isRevealed ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}
