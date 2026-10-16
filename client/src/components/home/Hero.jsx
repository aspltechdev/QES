import { Link } from "react-router-dom";

import heroBanner from "../../assets/herobanner.png";


const Hero = () => {
  return (
    <section
      className="home-hero"
      style={{
        backgroundImage: `url(${heroBanner})`,
      }}
    >
      <div className="home-hero-overlay" />

      <div className="home-hero-content">

        <span className="home-hero-eyebrow">
          WELCOME TO QUALITY ENGINEERING SOLUTIONS
        </span>

        <h1>
          PRECISION MARKING
          <br />
          FOR MODERN
          <br />
          MANUFACTURING
        </h1>

        <Link
          to="/contact"
          className="home-hero-btn"
        >
          Request a Quote
        </Link>

      </div>
    </section>
  );
};


export default Hero;