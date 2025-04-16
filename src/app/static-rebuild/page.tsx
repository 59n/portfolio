'use client';

import { useEffect, useState, useRef } from 'react';
import { FaPlay, FaPause, FaXTwitter, FaGithub, FaSteam, FaDiscord } from 'react-icons/fa6';
import { SiOsu, SiWhatsapp, SiTelegram } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { ChevronLeft, ChevronRight, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Skill Bar Component
interface SkillBarProps {
  label: string;
  percentage: number;
}

const SkillBar = ({ label, percentage }: SkillBarProps) => {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-white/80 text-sm">{label}</span>
        <span className="text-white/60 text-sm">{percentage}%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2.5">
        <div
          className="bg-white/80 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

// Profile Header Component
const ProfileHeader = () => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Trader & Developer';
  const typingSpeed = 100; // milliseconds per character

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center mb-8">
      <div className="mb-4 rounded-full overflow-hidden w-24 h-24 border border-white/20 relative">
        <Image
          src="/images/avatar.jpg"
          alt="jack avatar"
          width={96}
          height={96}
          className="w-full h-full object-cover"
          priority
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
      <div className="h-6 mb-2 flex items-center justify-center">
        <span className="text-white/80 text-sm">
          {typedText}
          <span className={`ml-0.5 inline-block w-2 h-4 bg-white/80 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
        </span>
      </div>
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
  const totalSlides = 4;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Get form data for Netlify
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Submit the form data to Netlify
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    })
    .then(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset form status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    })
    .catch((error) => {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    });
  };

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
        {currentSlide === 2 && (
          <div className="min-h-[380px] flex flex-col items-center justify-center">
            <h2 className="text-white text-xl font-bold mb-6">Skills & Technologies</h2>
            <div className="space-y-4 w-full">
              <div className="space-y-3">
                <h3 className="text-white font-semibold text-center mb-2">Technical Skills</h3>
                <SkillBar label="HTML" percentage={92} />
                <SkillBar label="CSS" percentage={88} />
                <SkillBar label="JavaScript" percentage={90} />
                <SkillBar label="TypeScript" percentage={85} />
                <SkillBar label="Python" percentage={80} />
                <SkillBar label="SQL" percentage={75} />
              </div>
            </div>
          </div>
        )}
        {currentSlide === 3 && (
          <div className="min-h-[380px] flex flex-col items-center justify-center">
            <h2 className="text-white text-xl font-bold mb-6">Get In Touch</h2>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="w-full space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="hidden">
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </div>
              <div>
                <label htmlFor="name" className="block text-white/80 text-sm mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-white/30 focus:outline-none text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white/80 text-sm mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-white/30 focus:outline-none text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white/80 text-sm mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-white/30 focus:outline-none text-white resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-200 border border-white/10 hover:border-white/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? 'Sending...' : formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
              {formStatus === 'success' && (
                <p className="text-green-400 text-sm text-center animate-pulse">Thanks for your message! I'll get back to you soon.</p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-400 text-sm text-center">Something went wrong. Please try again later.</p>
              )}
            </form>
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
    /* Removed mix-blend-mode: difference; */
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

  /* Light Theme Styles */
  .light-theme {
    background-color: #f5f5f5;
    color: #333;
  }

  .light-theme .bg-black {
    background-color: #f5f5f5;
  }

  .light-theme .text-white {
    color: #333;
  }

  .light-theme .text-white\/70 {
    color: rgba(51, 51, 51, 0.7);
  }

  .light-theme .text-white\/80 {
    color: rgba(51, 51, 51, 0.8);
  }

  .light-theme .text-white\/60 {
    color: rgba(51, 51, 51, 0.6);
  }

  .light-theme .bg-white\/5 {
    background-color: rgba(51, 51, 51, 0.05);
  }

  .light-theme .bg-white\/10 {
    background-color: rgba(51, 51, 51, 0.1);
  }

  .light-theme .border-white\/10 {
    border-color: rgba(51, 51, 51, 0.1);
  }

  .light-theme .border-white\/20 {
    border-color: rgba(51, 51, 51, 0.2);
  }

  .light-theme .hover\:bg-white\/20:hover {
    background-color: rgba(51, 51, 51, 0.2);
  }

  .light-theme .hover\:border-white\/50:hover {
    border-color: rgba(51, 51, 51, 0.5);
  }

  .light-theme .bg-white\/80 {
    background-color: rgba(51, 51, 51, 0.8);
  }

  .light-theme .cursor {
    border: 2px solid rgba(51, 51, 51, 0.8);
    background: rgba(51, 51, 51, 0.15);
    /* No mix-blend-mode here either */
  }
`;

// Theme Toggle Component
const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('light-theme');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 z-50"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-white" />}
    </button>
  );
};

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
      <ThemeToggle />
      <ContentBox />
    </div>
  );
}
