import { useEffect, useMemo, useRef, useState } from 'react';

const NeonSign = () => {
  const welcomes = useMemo(
    () => [
      'Welcome!',
      '¡Bienvenido!',
      '¡Bienvenida!',
      'Bienvenue!',
      'Willkommen!',
      'Benvenuto!',
      'Benvenuta!',
      'Välkommen!',
      'Hoş geldin!',
      'Witaj!',
      'Selamat datang!',
      'Добро пожаловать!',
      'Bem-vindo!',
      'Bem-vindoa!',
      'እንኳን ደህና መጣህ!',
      'いらっしゃいませ!',
      '환영!',
      'καλως ΗΡΘΑΤΕ!',
      'வரவேற்பு!',
      'स्वागत!',
      'خوش آمدی!',
      'ברוך הבא!',
      'Velkommen!',
      'Welina!',
      'тавтай морил!',
    ],
    []
  );
  const [currentMessage, setCurrentMessage] = useState(welcomes[0]);
  const [lastIndex, setLastIndex] = useState(0);
  const messageRef = useRef<HTMLHeadingElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startAnimation = () => {
      intervalRef.current = setInterval(() => {
        if (messageRef.current) {
          let randomIndex;
          do {
            randomIndex = Math.floor(Math.random() * welcomes.length);
          } while (randomIndex === lastIndex);

          const keyframesSet = [
            {
              textShadow:
                '0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000',
              color: '#fff6a9',
              opacity: Math.random(),
            },
            {
              textShadow:
                '0 0 2px rgba(74, 74, 74, 0.5), 0 0 5px rgba(74, 74, 74, 0.3)',
              color: 'rgba(74, 74, 74, 0.7)',
              opacity: 1,
            },
          ];

          const keyframes = Array.from({ length: 10 }, (_, i) => {
            const randomKeyframe =
              keyframesSet[Math.floor(Math.random() * keyframesSet.length)];
            return {
              ...randomKeyframe,
              offset: i / 9,
            };
          });

          keyframes.push({
            opacity: 0,
            offset: 1,
            textShadow: '',
            color: '',
          });

          const animation = messageRef.current.animate(keyframes, {
            duration: 1000,
            iterations: 1,
            easing: 'ease-in-out',
          });

          animation.onfinish = () => {
            setCurrentMessage(() => {
              return welcomes[randomIndex];
            });
            setLastIndex(randomIndex);
            if (messageRef.current) {
              messageRef.current.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 200,
                iterations: 1,
                easing: 'ease-in-out',
              });
            }
          };
        }
      }, 8000); // Change message every 8 seconds
    };

    const stopAnimation = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation();
      } else {
        startAnimation();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    startAnimation(); // Start the animation initially

    return () => {
      stopAnimation(); // Cleanup interval on component unmount
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [welcomes, lastIndex]);
  return (
    <h1 ref={messageRef} className="neon hero">
      {currentMessage}
    </h1>
  );
};

export default NeonSign;
