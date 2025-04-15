'use client';

const BackgroundPattern = () => {
  // Create an array of characters to repeat in the background
  const characters = '口'; // Using a similar character to what appeared in the background

  return (
    <div className="fixed inset-0 text-white/5 text-sm overflow-hidden pointer-events-none z-0 select-none">
      <div className="grid grid-cols-10 sm:grid-cols-15 md:grid-cols-20 gap-4">
        {Array.from({ length: 300 }).map((_, index) => (
          <span key={index} className="opacity-30">
            {characters}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BackgroundPattern;
