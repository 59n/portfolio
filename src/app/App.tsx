'use client';

import ContentBox from '@/components/ContentBox';
import CursorLight from '@/components/CursorLight';
import BackgroundPattern from '@/components/BackgroundPattern';
import { useEffect, useState } from 'react';

export default function App() {
  // Use a state to prevent hydration issues
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with the same structure to prevent layout shifts
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
