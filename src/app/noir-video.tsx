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
        src={`/assets/${src}.mp4`}
        muted
        poster={`/assets/${src}.png`}
      ></video>
      <div className="corners-bottom" />
    </div>
  );
};

export default NoirVideo;
