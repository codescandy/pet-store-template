'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Slide {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface HeroSliderProps {
  slides: Slide[];
  autoPlayInterval?: number;
}

export default function HeroSlider({ slides, autoPlayInterval = 5000 }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean[]>(slides.map(() => true));

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlayInterval) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [slides.length, autoPlayInterval]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleImageLoad = (index: number) => {
    setIsLoading((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };

  return (
    <div className="relative h-[650px] overflow-hidden">
      {slides.map((slide, index) => (
        <div key={index} className={cn('absolute inset-0 transition-opacity duration-1000', index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0')}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
          {isLoading[index] && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse z-0 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <Image
            src={slide.image || '/placeholder.svg'}
            alt={slide.title}
            fill
            className={cn('object-cover transition-opacity duration-500', isLoading[index] ? 'opacity-0' : 'opacity-100')}
            priority={index === 0}
            onLoad={() => handleImageLoad(index)}
            sizes="100vw"
          />
          <div className="container relative z-20 flex flex-col items-start justify-center h-full px-4">
            <div className="max-w-xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">{slide.title}</h1>
              <p className="text-xl text-white/90">{slide.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 z-20 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full" aria-label="Previous slide">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 z-20 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full" aria-label="Next slide">
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn('w-3 h-3 rounded-full transition-all', index === currentSlide ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/80')}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
