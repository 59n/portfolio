'use client';

import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import Image from 'next/image';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = Number(e.target.value);
    setCurrentTime(seekTime);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/5 mt-4">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 flex-shrink-0">
          <div className="rounded overflow-hidden w-full h-full bg-gray-800">
            <Image
              src="https://i.scdn.co/image/ab67616d00001e02e6f407c7f3a0ec98845e4431"
              alt="Juice WRLD album cover"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-white">juice wrld - rich off rap</p>
          <div className="flex items-center mt-2">
            <span className="text-gray-400 text-sm">{formatTime(currentTime)}</span>
            <div className="flex-1 mx-4 relative h-1 bg-gray-700 rounded cursor-pointer">
              <input
                type="range"
                min={0}
                max={duration || 100}
                value={currentTime}
                onChange={handleSeek}
                className="absolute inset-0 w-full h-full appearance-none bg-transparent z-10 opacity-0 cursor-pointer"
              />
              <div
                className="h-full bg-white rounded absolute top-0 left-0"
                style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
              />
            </div>
            <span className="text-gray-400 text-sm">{formatTime(duration)}</span>
          </div>
        </div>
        <button className="text-white hover:text-gray-300 flex-shrink-0" onClick={togglePlay}>
          {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
        </button>
      </div>
      <div className="flex items-center mt-4">
        <span className="text-gray-400 text-sm mr-2">Volume</span>
        <div className="flex-1 relative h-1 bg-gray-700 rounded cursor-pointer">
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolumeChange}
            className="absolute inset-0 w-full h-full appearance-none bg-transparent z-10 opacity-0 cursor-pointer"
          />
          <div
            className="h-full bg-white rounded absolute top-0 left-0"
            style={{ width: `${volume * 100}%` }}
          />
        </div>
      </div>
      <audio
        ref={audioRef}
        src="/audio/richoffrap.mp3"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default MusicPlayer;
