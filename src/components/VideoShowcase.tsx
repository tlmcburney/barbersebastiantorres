import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { getPublicVideoUrl } from '../lib/supabase';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  onFullscreen: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, title, onFullscreen }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const bounds = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - bounds.left;
      const percentage = clickX / bounds.width;
      videoRef.current.currentTime = percentage * videoRef.current.duration;
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isPlaying) {
            video.play().then(() => {
              setIsPlaying(true);
            }).catch(() => {
              // Auto-play was prevented, user needs to click play
            });
          } else if (!entry.isIntersecting && isPlaying) {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border-2 border-gold/20 group"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={videoUrl}
        loop
        muted={isMuted}
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onClick={togglePlay}
      />

      {/* Play/Pause Overlay - Shows when paused or on hover */}
      <div
        className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 cursor-pointer ${
          isPlaying && !showControls ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={togglePlay}
      >
        {!isPlaying && (
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/90 border-4 border-white hover:bg-gold hover:scale-110 transition-all duration-300">
            <Play className="w-8 h-8 text-black ml-1" />
          </div>
        )}
      </div>

      {/* Custom Controls */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 transition-opacity duration-300 ${
          showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Progress Bar */}
        <div
          className="w-full h-1 bg-white/30 rounded-full mb-3 cursor-pointer hover:h-1.5 transition-all"
          onClick={handleProgressClick}
        >
          <div
            className="h-full bg-gold rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="text-white hover:text-gold transition-colors"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6" />
              )}
            </button>

            <button
              onClick={toggleMute}
              className="text-white hover:text-gold transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <VolumeX className="w-6 h-6" />
              ) : (
                <Volume2 className="w-6 h-6" />
              )}
            </button>

            <span className="text-white text-sm font-medium">{title}</span>
          </div>

          <button
            onClick={onFullscreen}
            className="text-white hover:text-gold transition-colors"
            aria-label="Fullscreen"
          >
            <Maximize2 className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

interface FullscreenModalProps {
  videoUrl: string;
  title: string;
  onClose: () => void;
}

const FullscreenModal: React.FC<FullscreenModalProps> = ({ videoUrl, title, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    if (videoRef.current) {
      videoRef.current.play();
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gold text-4xl font-light z-10 w-12 h-12 flex items-center justify-center"
        aria-label="Close fullscreen"
      >
        ×
      </button>

      <div className="relative w-full max-w-7xl" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-white text-2xl font-semibold mb-4 text-center">{title}</h3>
        <video
          ref={videoRef}
          className="w-full rounded-lg"
          src={videoUrl}
          controls
          autoPlay
          loop
        />
      </div>
    </div>
  );
};

const VideoShowcase: React.FC = () => {
  const [fullscreenVideo, setFullscreenVideo] = useState<{ url: string; title: string } | null>(null);

  const video1Url = '/videos/@barbersebastiantorres-#4.mp4';
  const video2Url = '/videos/ARREGLOS.mp4';

  return (
    <>
      <section className="py-24 px-4 bg-black fade-on-scroll opacity-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title mb-12 text-gold">The Craft In Action</h2>

          <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            Watch Sebastian transform clients with precision cuts, expert fades, and meticulous attention to detail.
            This is mastery in motion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <VideoPlayer
              videoUrl={video1Url}
              title="Precision Fade"
              onFullscreen={() => setFullscreenVideo({ url: video1Url, title: 'Precision Fade' })}
            />
            <VideoPlayer
              videoUrl={video2Url}
              title="Classic Cut"
              onFullscreen={() => setFullscreenVideo({ url: video2Url, title: 'Classic Cut' })}
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Note: Videos are placeholder files (20 bytes each). Please upload actual video files through the Admin Dashboard to enable video playback. The issue is that the current video files are too small to be valid video files.
            </p>
          </div>
        </div>
      </section>

      {fullscreenVideo && (
        <FullscreenModal
          videoUrl={fullscreenVideo.url}
          title={fullscreenVideo.title}
          onClose={() => setFullscreenVideo(null)}
        />
      )}
    </>
  );
};

export default VideoShowcase;
