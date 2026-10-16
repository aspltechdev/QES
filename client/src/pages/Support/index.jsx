import { Link } from "react-router-dom";
import "./Support.css";

const supportOptions = [
  {
    title: "Customer Portal",
    description:
      "Access support resources, service history, documents, and customer-specific information.",
  },
  {
    title: "Request Service",
    description:
      "Submit a request for troubleshooting, repair, maintenance, or on-site technical assistance.",
  },
  {
    title: "Software Downloads",
    description:
      "Download approved marking software, utilities, updates, and related support files.",
  },
  {
    title: "Warranty",
    description:
      "Review warranty information and request assistance for covered equipment.",
  },
  {
    title: "Manuals",
    description:
      "Access operation manuals, installation guides, maintenance instructions, and technical documents.",
  },
  {
    title: "Contact Support",
    description:
      "Speak with our technical team for help with marking, vision, robotics, software, and integration.",
  },
];

function SupportPage() {
  return (
    <main>
      <section className="support-hero">
        <div className="support-container">
          <span>Support</span>
          <h1>Technical support for your industrial systems</h1>
          <p>
            Access service assistance, manuals, software, warranty information,
            and technical guidance for your marking and automation equipment.
          </p>
        </div>
      </section>

      <section className="support-section">
        <div className="support-container">
          <div className="support-heading">
            <span>Support Center</span>
            <h2>Find the help and resources you need</h2>
          </div>

          <div className="support-grid">
            {supportOptions.map((item, index) => (
              <article className="support-card" key={item.title}>
                <div className="support-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <Link to="/contact">Get support →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="support-emergency">
        <div className="support-container">
          <div className="support-heading">
            <span>Before You Contact Us</span>
            <h2>Information that helps us respond faster</h2>
          </div>

          <div className="support-checklist">
            <div>
              <strong>01</strong>
              <p>Machine or system model</p>
            </div>

            <div>
              <strong>02</strong>
              <p>Serial number</p>
            </div>

            <div>
              <strong>03</strong>
              <p>Error message or issue description</p>
            </div>

            <div>
              <strong>04</strong>
              <p>Photos, screenshots, or production details</p>
            </div>
          </div>
        </div>
      </section>

      <section className="support-cta">
        <div className="support-container support-cta-content">
          <div>
            <span>Need Assistance?</span>
            <h2>Our technical team is ready to help</h2>
            <p>
              Contact QES for troubleshooting, service scheduling, spare parts,
              software support, or system upgrades.
            </p>
          </div>

          <Link to="/contact">Contact Support</Link>
        </div>
      </section>
    </main>
  );
}

export default SupportPage;