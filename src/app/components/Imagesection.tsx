import { Play, Pause, Volume2, VolumeX, Loader2 } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null); // Explicitly type the ref

  useEffect(() => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.play() : videoRef.current.pause();
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-4xl relative rounded-xl overflow-hidden">
        {/* Video Container */}
        <div className="relative aspect-video bg-gray-900">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
              <Loader2 className="w-8 h-8 text-white animate-spin" />
            </div>
          )}

          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
              <p className="text-white text-lg">Error loading video</p>
            </div>
          )}

          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            onLoadedData={handleLoadedData}
            onError={handleError}
            playsInline
            aria-label="Mountain landscape video"
            poster="https://images.unsplash.com/photo-1682685796014-2f342188a635"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-mountain-landscape-2408-large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

          {/* Controls Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handlePlayPause}
              className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 text-white" />
              ) : (
                <Play className="w-8 h-8 text-white ml-1" />
              )}
            </button>
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center justify-between">
              <button
                onClick={handlePlayPause}
                className="text-white hover:text-gray-200 focus:outline-none"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6" />
                )}
              </button>

              <button
                onClick={handleMute}
                className="text-white hover:text-gray-200 focus:outline-none"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6" />
                ) : (
                  <Volume2 className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
