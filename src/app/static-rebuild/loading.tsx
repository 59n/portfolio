export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative">
      <div className="w-full max-w-lg mx-auto flex flex-col items-center justify-center">
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/10 flex items-center justify-center">
          <div className="text-white text-opacity-80">Loading Jack's page...</div>
        </div>
      </div>
    </div>
  );
}
