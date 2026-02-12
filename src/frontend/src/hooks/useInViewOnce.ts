import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface UseInViewOnceOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Hook that detects when an element enters the viewport for the first time.
 * Returns a ref to attach to the element and a boolean indicating if it's been revealed.
 * Respects prefers-reduced-motion by immediately revealing elements.
 */
export function useInViewOnce(options: UseInViewOnceOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px' } = options;
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // If user prefers reduced motion, reveal immediately
    if (prefersReducedMotion) {
      setIsRevealed(true);
      return;
    }

    // SSR guard
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      setIsRevealed(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isRevealed) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, isRevealed, prefersReducedMotion]);

  return { ref, isRevealed };
}
