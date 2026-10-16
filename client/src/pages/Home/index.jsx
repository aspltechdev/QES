import { Link } from "react-router-dom";

import Hero from "../../components/home/Hero";
import AboutIntro from "../../components/home/AboutIntro";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import ProductShowcase from "../../components/home/ProductShowcase";
import Industries from "../../components/home/Industries";
import Testimonials from "../../components/home/Testimonials";
import Downloads from "../../components/home/Downloads";
import Gallery from "../../components/home/Gallery";
import FAQ from "../../components/home/FAQ";

import background2 from "../../assets/background2.png";

import "./Home.css";

function Home() {
  return (
    <main className="home-page">
      <Hero />
      <AboutIntro />
      <WhyChooseUs />
      <ProductShowcase />

      {/* REQUEST A QUOTE */}
     <section
  className="home-quote-cta"
  style={{
    backgroundImage: `
      linear-gradient(
        90deg,
        rgba(8, 14, 22, 0.92) 0%,
        rgba(8, 14, 22, 0.72) 48%,
        rgba(8, 14, 22, 0.42) 100%
      ),
      url(${background2})
    `,
  }}
>
  <div className="home-quote-cta-overlay" />

  <div className="home-quote-cta-container">
    <span className="home-quote-cta-eyebrow">
      REQUEST A QUOTE
    </span>

    <h2>
      Ready to Find the Right Marking Solution?
    </h2>

    <p>
      Whether you’re looking for conventional marking systems, pin
      (dot peen) marking machines, or laser marking solutions, our
      team is here to help you choose the right technology for your
      business.
    </p>

    <div className="home-quote-cta-buttons">
     <Link
  to="/contact#contacts"
  className="home-quote-cta-btn home-quote-cta-btn-primary"
>
  Request a Quote
</Link>

<Link
  to="/contact#contacts"
  className="home-quote-cta-btn home-quote-cta-btn-secondary"
>
  Contact Us
</Link>
    </div>
  </div>
</section>

      <Industries />
      <Testimonials />
      <Downloads />
      <Gallery />
      <FAQ />
    </main>
  );
}

export default Home;

