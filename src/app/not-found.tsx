import React from 'react';

const NotFound = () => {
  return (
    <div className="container-fluid not-found">
      <div className="row mt-3">
        <section className="col text-white text-center">
          <h1>404 - Page Not Found</h1>
          <img
            className="img-fluid poirot"
            src="/assets/Poirot.jpeg"
            alt="I will find your page!"
          />
          <h3>
            Sorry, the page you are looking for does not exist, however our
            in-house detective is the greatest detective in the world!
          </h3>
          <a href="/" className="link-underline-light neon purple">
            Solve the mystery!
          </a>
        </section>
      </div>
    </div>
  );
};

export default NotFound;
