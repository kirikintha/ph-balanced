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
      'いらっしゃいませ！',
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

          const keyframes = Array.from({ length: 10 }, (_, i) => ({
            opacity: Math.random(),
            offset: i / 9,
          }));

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
    <h1 ref={messageRef} className="playwrite-fr-moderne-300 neon hero">
      {currentMessage}
    </h1>
  );
};

export default NeonSign;
