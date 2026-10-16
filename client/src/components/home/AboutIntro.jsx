import { Link } from "react-router-dom";

import homepage1stimage from "../../assets/homepage1stimage.png";
import homepage2ndimage from "../../assets/homepage2ndimage.png";

const AboutIntro = () => {
  return (
    <section className="home-about">
      <div className="home-about-container">

        <div className="home-about-left">
          <div className="home-about-main-image">
            <img
              src={homepage1stimage}
              alt="Industrial marking machine"
            />

            <div className="home-about-business-card">
              <span>Trusted Businesses</span>
              <strong>100+</strong>
            </div>
          </div>

          <div className="home-about-partner">
            <h3>
              Your Trusted Partner in Industrial Marking
            </h3>

            <p>
              We help manufacturers improve productivity and product
              identification through innovative marking technologies designed
              for precision, durability, and long-term performance.
            </p>

            <Link to="/about" className="home-about-btn">
              Learn More
            </Link>
          </div>
        </div>

        <div className="home-about-right">
          <h2>
            Engineering
            <br />
            <span>Excellence.</span>
            <br />
            Precision You
            <br />
            Can <span>Trust.</span>
          </h2>

          <p className="home-about-description">
            Quality Engineering Solutions provides innovative industrial
            marking and traceability solutions that enable manufacturers to
            achieve permanent identification, operational efficiency, and
            reliable product traceability.
          </p>

          <div className="home-about-stats">
            <div>
              <strong>20+</strong>
              <span>Years of Experience</span>
            </div>

            <div>
              <strong>500+</strong>
              <span>Successful Projects</span>
            </div>
          </div>

          <div className="home-about-small-image">
            <img
              src={homepage2ndimage}
              alt="Industrial manufacturing facility"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutIntro;