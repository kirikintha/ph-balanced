import React, { useEffect, useRef } from 'react';

interface NoirVideoProps {
  src: string;
  className?: string;
  delay?: number;
}

const NoirVideo: React.FC<NoirVideoProps> = ({ src, className, delay = 0 }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const playVideo = () => {
        videoElement.play();
      };
      const timer = setTimeout(playVideo, delay); // 3 seconds delay
      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, [delay]);
  return (
    <div className={`noir-video ${className}`}>
      <div className="corners-top" />
      <video
        ref={videoRef}
        muted
        playsInline
        autoPlay
        poster={`/assets/${src}.jpg`}
        preload="metadata"
      >
        <source src={`/assets/${src}.mp4`} type="video/mp4" />
      </video>
      <div className="corners-bottom" />
    </div>
  );
};

export default NoirVideo;
