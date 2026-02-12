import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import ImageWithFallback from './ImageWithFallback';
import { publicAssetUrl } from '@/utils/publicAssetUrl';

interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  autoAdvanceInterval?: number;
}

/**
 * Accessible hero carousel with manual controls (dots + prev/next buttons),
 * optional auto-advance that pauses on interaction, and keyboard support.
 * Respects prefers-reduced-motion by disabling auto-advance.
 */
export default function HeroCarousel({ 
  slides, 
  autoAdvanceInterval = 5000 
}: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsPaused(true);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsPaused(true);
  }, [slides.length]);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setIsPaused(true);
  }, [slides.length]);

  // Auto-advance logic (disabled if reduced motion or paused)
  useEffect(() => {
    if (prefersReducedMotion || isPaused || slides.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, autoAdvanceInterval);

    return () => clearInterval(interval);
  }, [prefersReducedMotion, isPaused, slides.length, autoAdvanceInterval]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext]);

  const currentSlideData = slides[currentSlide];

  return (
    <div 
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Hero carousel"
    >
      {/* Slides */}
      <div className="relative h-[550px] md:h-[650px] lg:h-[750px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            } motion-reduce:transition-none`}
            aria-hidden={index !== currentSlide}
          >
            <div className="relative h-full w-full">
              <ImageWithFallback
                src={publicAssetUrl(slide.image)}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Enhanced overlay gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-fauji-dark/80 via-fauji-dark/70 to-fauji-dark/90" />
            </div>
          </div>
        ))}

        {/* Content overlay - Improved positioning */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pt-8 pb-48 md:pb-56">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight animate-fade-down motion-reduce:animate-none"
                key={`title-${currentSlide}`}
              >
                {currentSlideData.title}
              </h1>
              <p 
                className="text-xl md:text-3xl text-fauji-cream mb-4 animate-fade-in motion-reduce:animate-none"
                key={`subtitle-${currentSlide}`}
                style={{ animationDelay: '150ms' }}
              >
                {currentSlideData.subtitle}
              </p>
              <p 
                className="text-lg md:text-xl mb-8 animate-fade-up motion-reduce:animate-none"
                key={`desc-${currentSlide}`}
                style={{ animationDelay: '300ms' }}
              >
                {currentSlideData.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      {slides.length > 1 && (
        <>
          {/* Previous/Next Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm h-14 w-14 rounded-full transition-all duration-300 hover:scale-110 motion-reduce:hover:scale-100"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm h-14 w-14 rounded-full transition-all duration-300 hover:scale-110 motion-reduce:hover:scale-100"
            onClick={goToNext}
            aria-label="Next slide"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          {/* Dot Indicators - Improved positioning */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white w-10 shadow-lg' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
