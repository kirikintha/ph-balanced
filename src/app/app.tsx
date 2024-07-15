import { useEffect, useRef, useState } from 'react';
import styles from './app.module.scss';
import KeepScrolling from './keep-scrolling';
import NeonSign from './neon-sign';
import NoirVideo from './noir-video';
import Content from './content';

export function App() {
  const [isVisible, setIsVisible] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.target === navbarRef.current) {
          setIsVisible(entry.isIntersecting);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (navbarRef.current) {
      observer.observe(navbarRef.current);
    }

    return () => {
      if (navbarRef.current) {
        observer.unobserve(navbarRef.current);
      }
    };
  }, []);
  return (
    <>
      <nav ref={navbarRef} className="navbar text-bg-light">
        <div className="container-fluid text-center">
          <span className="navbar-brand mx-auto comfortaa-300">
            PH-Balanced Solutions
          </span>
        </div>
      </nav>
      <div className={`container-fluid ${styles.lightbox}`}>
        <div className="row">
          <section className="col-lg-6">
            <NeonSign />
            <NoirVideo className="los-angeles" src="Los-Angeles-Noir" />
          </section>
          <section className="col-lg-6">
            <div className="row">
              <section className="col-6">
                <NoirVideo className="jazz" src="Jazz-Noir" delay={1000} />
              </section>
              <section className="col-6">
                <NoirVideo
                  className="co-springs"
                  src="CoSprings-Noir"
                  delay={4000}
                />
              </section>
              <section className="col-6">
                <NoirVideo className="desert" src="Desert-Noir" delay={3000} />
              </section>
              <section className="col-6">
                <NoirVideo
                  className="savannah"
                  delay={2000}
                  src="Savannah-Noir"
                />
              </section>
            </div>
          </section>
        </div>
        <div className="row bg-dark bg-gradient text-white content">
          <div className="col p-3">
            <Content />
          </div>
        </div>
      </div>
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <div className="container">
          <p>
            ©{currentYear} PH-Balanced Solutions, Atlanta, Georgia USA. All
            rights reserved.
          </p>
          <p>
            <a
              href="tel:+14049542051"
              className="link-underline-light text-white"
            >
              +1.404.954.2051
            </a>
          </p>
          <p>
            <a
              href="https://calendly.com/paul-huntsberger/thirty-minute-meeting"
              className="link-underline-light text-white"
            >
              Schedule a Meeting
            </a>
          </p>
        </div>
      </footer>
      <KeepScrolling isVisible={isVisible} />
    </>
  );
}

export default App;
