import React from 'react';
import { CSSTransition } from 'react-transition-group';

interface KeepScrollingProps {
  isVisible: boolean;
}

const KeepScrolling: React.FC<KeepScrollingProps> = ({ isVisible }) => {
  const footerRef = React.useRef<HTMLDivElement>(null);

  return (
    <CSSTransition
      in={isVisible}
      timeout={500}
      classNames="fade"
      unmountOnExit
      nodeRef={footerRef}
    >
      <div
        ref={footerRef}
        className="fixed-bottom d-flex justify-content-center align-items-center"
      >
        <div className="d-flex flex-column justify-content-center align-items-center bounce">
          <h4 className="neon purple">Keep Scrolling</h4>
          <svg
            className="neon-chevron"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter
                id="neon-glow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="3"
                  result="blur1"
                />
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="5"
                  result="blur2"
                />
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur3"
                />
                <feColorMatrix
                  in="blur1"
                  type="matrix"
                  values="0 0 0 0 0.58 0 0 0 0 0.0 0 0 0 0 0.83 0 0 0 1 0"
                  result="purpleBlur1"
                />
                <feColorMatrix
                  in="blur2"
                  type="matrix"
                  values="0 0 0 0 0.58 0 0 0 0 0.0 0 0 0 0 0.83 0 0 0 1 0"
                  result="purpleBlur2"
                />
                <feColorMatrix
                  in="blur3"
                  type="matrix"
                  values="0 0 0 0 0.58 0 0 0 0 0.0 0 0 0 0 0.83 0 0 0 1 0"
                  result="purpleBlur3"
                />
                <feMerge>
                  <feMergeNode in="purpleBlur1" />
                  <feMergeNode in="purpleBlur2" />
                  <feMergeNode in="purpleBlur3" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <polygon
              points="50,70 20,40 30,30 50,50 70,30 80,40"
              fill="white"
              stroke="#9400d3"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>
    </CSSTransition>
  );
};

export default KeepScrolling;
