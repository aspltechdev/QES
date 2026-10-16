import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="home-final-cta">
      <div className="home-final-cta-content">
        <h2>Ready to Transform Your Marking Process?</h2>

        <p>
          Partner with Quality Engineering Solutions for reliable industrial
          marking technologies that deliver precision, durability, and
          long-term performance.
        </p>

        <Link to="/contact" className="home-final-cta-button">
          Request a Quote
        </Link>
      </div>
    </section>
  );
}

export default CTA;