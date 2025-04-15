'use client';

import { useState, useEffect } from 'react';

const CursorLight = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none"
      style={{
        width: '300px',
        height: '300px',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
        borderRadius: '50%',
        opacity: 1,
        left: position.x,
        top: position.y
      }}
    />
  );
};

export default CursorLight;
