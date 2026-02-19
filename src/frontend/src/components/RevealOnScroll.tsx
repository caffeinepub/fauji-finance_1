import { ReactNode } from 'react';
import useInViewOnce from '../hooks/useInViewOnce';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function RevealOnScroll({ children, delay = 0, className = '' }: RevealOnScrollProps) {
  const { ref, isInView } = useInViewOnce();
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isInView || prefersReducedMotion
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{
        transitionDelay: prefersReducedMotion ? '0ms' : `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
