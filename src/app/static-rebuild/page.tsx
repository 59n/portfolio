'use client';

import { useEffect, useState, useRef } from 'react';
import { FaPlay, FaPause, FaXTwitter, FaGithub, FaSteam, FaDiscord } from 'react-icons/fa6';
import { SiOsu, SiWhatsapp, SiTelegram } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

// Profile Header Component
const ProfileHeader = () => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="mb-4 rounded-full overflow-hidden w-24 h-24 border border-white/20">
        <img
          src="/images/avatar.jpg"
          alt="jack avatar"
          width={96}
          height={96}
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-white text-2xl font-bold mb-2">
        <div
          className="relative inline-block"
          style={{
            backgroundImage: "url('/images/bg-gradient.gif')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height: "2.25rem"
          }}
        >
          <h1 className="text-2xl font-bold mb-2" style={{ color: 'white', backgroundClip: 'text', WebkitTextFillColor: 'currentcolor' }}>
            Jack
          </h1>
        </div>
      </h1>
      <div className="flex space-x-4 flex-wrap justify-center">
        <Link href="https://x.com/bonelet/" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
          <FaXTwitter size={24} />
        </Link>
        <Link href="https://github.com/59n" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </Link>
        <Link href="https://t.me/classifies_123" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
          <SiTelegram size={24} />
        </Link>
      </div>
      <div className="mt-8 text-center">
        <p className="text-white/70 italic mb-4">"Simplicity is the ultimate sophistication." - Leonardo da Vinci</p>
        <Link 
          href="https://indexswapy.netlify.app" 
          className="inline-block px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-200 border border-white/10 hover:border-white/50"
          target="_blank"
          rel="noopener noreferrer"
        >
          IndexSwapy
        </Link>
      </div>
    </div>
  );
};

// Content Box Component
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

      <div className="content-box bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/10 hover:border-white/50 transition-all duration-300 relative z-[1]">
        {currentSlide === 0 && (
          <>
            <div className="mb-8">
              <ProfileHeader />
            </div>
          </>
        )}
        {currentSlide === 1 && (
          <div className="min-h-[380px] flex flex-col items-center justify-center">
            <h2 className="text-white text-xl font-bold mb-6">GitHub Projects</h2>
            <div className="space-y-4 w-full">
              <Link 
                href="https://github.com/59n/indexswapy" 
                className="group block p-4 bg-white/5 rounded-lg transition-transform duration-200 border border-white/10 hover:border-white/50 hover:translate-y-[-2px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-white font-semibold">IndexSwapy</h3>
                <p className="text-white/70 text-sm">A powerful financial instrument converter for NDX, QQQ, NQ, SPY, and ES values with real-time ratios and multiple input formats.</p>
              </Link>
              <Link 
                href="https://github.com/59n/indexswapy-backend" 
                className="group block p-4 bg-white/5 rounded-lg transition-transform duration-200 border border-white/10 hover:border-white/50 hover:translate-y-[-2px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-white font-semibold">IndexSwapy Backend</h3>
                <p className="text-white/70 text-sm">Serverless API for IndexSwapy using Netlify Functions, handling real-time financial instrument conversions.</p>
              </Link>
              <Link 
                href="https://github.com/59n/portfolio" 
                className="group block p-4 bg-white/5 rounded-lg transition-transform duration-200 border border-white/10 hover:border-white/50 hover:translate-y-[-2px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-white font-semibold">Portfolio</h3>
                <p className="text-white/70 text-sm">My personal portfolio website showcasing my projects and skills.</p>
              </Link>
            </div>
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

// Cursor Light Component
const CursorLight = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

// Background Pattern Component
const BackgroundPattern = () => {
  const characters = "死ぬのがいい";
  const [pattern, setPattern] = useState<string[]>([]);

  useEffect(() => {
    const generatePattern = () => {
      return Array.from({ length: 200 }, () => 
        characters[Math.floor(Math.random() * characters.length)]
      );
    };
    setPattern(generatePattern());

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 200);
      setPattern(prev => {
        const newPattern = [...prev];
        newPattern[randomIndex] = characters[Math.floor(Math.random() * characters.length)];
        return newPattern;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 text-white/5 text-sm overflow-hidden pointer-events-none z-0 select-none">
      <div className="grid grid-cols-10 sm:grid-cols-15 md:grid-cols-20 gap-4">
        {pattern.map((char, index) => (
          <span key={index} className="opacity-30">
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

// Add this style block at the top of your file, after the imports
const styles = `
  body {
    cursor: none;
  }

  a, button {
    cursor: pointer;
  }

  .cursor {
    width: 60px;
    height: 60px;
    border: 2px solid rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 999;
    transition: all 0.2s ease;
    transition-property: width, height, border, transform, background;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(1px);
    mix-blend-mode: difference;
  }

  a:hover ~ .cursor,
  button:hover ~ .cursor {
    width: 70px;
    height: 70px;
    border-width: 3px;
    background: rgba(255, 255, 255, 0.1);
  }

  .content-box {
    z-index: 1;
  }
`;

// Main App Component
export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Add styles to document
    const styleElement = document.createElement('style');
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4 relative">
        <div className="w-full max-w-lg h-[500px]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative">
      <BackgroundPattern />
      <CursorLight />
      <ContentBox />
    </div>
  );
}
