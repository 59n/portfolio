'use client';

import { useState } from 'react';
import ProfileHeader from './ProfileHeader';
import MusicPlayer from './MusicPlayer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ContentBox = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between -mx-16 pointer-events-none z-10">
        <button
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 text-white backdrop-blur-sm border border-white/10 hover:border-white/50 pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous slide"
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          <ChevronLeft />
        </button>
        <button
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 text-white backdrop-blur-sm border border-white/10 hover:border-white/50 pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next slide"
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
        >
          <ChevronRight />
        </button>
      </div>

      <div className="content-box bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/10 hover:border-white/50 transition-all duration-300">
        {currentSlide === 0 && (
          <>
            <div className="mb-8">
              <ProfileHeader />
            </div>
            <div className="pt-4 border-t border-white/10">
              <MusicPlayer />
            </div>
          </>
        )}
        {currentSlide === 1 && (
          <div className="min-h-[380px] flex items-center justify-center">
            <p className="text-white text-opacity-80">Coming soon...</p>
          </div>
        )}
      </div>

      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              currentSlide === i ? 'bg-white' : 'bg-white/30'
            } disabled:cursor-not-allowed`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrentSlide(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentBox;
