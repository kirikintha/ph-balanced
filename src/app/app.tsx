// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NeonSign from './neon-sign';
import NoirVideo from './noir-video';

export function App() {
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid text-center">
          <span className="navbar-brand mx-auto playwrite-fr-moderne-400">
            PH-Balanced Solutions
          </span>
        </div>
      </nav>
      <div className={`container-fluid ${styles.lightbox}`}>
        <div className="row">
          <section className="col-lg-6">
            <NeonSign />
            <NoirVideo className="los-angeles" src="/assets/La-Noir.mov" />
          </section>
          <section className="col-lg-6">
            <div className="row">
              <section className="col-6">
                <NoirVideo
                  className="jazz"
                  src="/assets/Jazz-Noir.mov"
                  delay={1000}
                />
              </section>
              <section className="col-6">
                <NoirVideo
                  className="co-springs"
                  src="/assets/CoSprings-Noir.mov"
                  delay={4000}
                />
              </section>
              <section className="col-6">
                <NoirVideo
                  className="desert"
                  src="/assets/Desert-Noir.mov"
                  delay={3000}
                />
              </section>
              <section className="col-6">
                <NoirVideo
                  className="savannah"
                  delay={2000}
                  src="/assets/Savannah-Noir.mov"
                />
              </section>
            </div>
          </section>
        </div>
      </div>
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <div className="container">
          <p className="mb-0">
            ©2024 PH-Balanced Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;