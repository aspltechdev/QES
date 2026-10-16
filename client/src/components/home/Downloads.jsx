import { Link } from "react-router-dom";


const Downloads = () => {
  return (
    <section className="home-downloads">

      <div className="home-downloads-overlay" />

      <div className="home-downloads-container">

        <div className="home-downloads-content">

          <span>
            DOWNLOADS
          </span>

          <h2>
            Brochures & Technical
            <br />
            Resources
          </h2>

        </div>

        <Link
          to="/resources"
          className="home-downloads-btn"
        >
          Download Now
        </Link>

      </div>

    </section>
  );
};


export default Downloads;