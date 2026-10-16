import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    title: "System Integration",
    description:
      "Integration of marking, vision, robotics, conveyors, PLCs, MES, ERP, and production equipment.",
  },
  {
    title: "Installation",
    description:
      "Professional installation, commissioning, testing, and production-line setup.",
  },
  {
    title: "Training",
    description:
      "Operator and maintenance training for marking systems, software, and automation equipment.",
  },
  {
    title: "Technical Support",
    description:
      "Remote and on-site assistance for troubleshooting, repairs, software, and system operation.",
  },
  {
    title: "Preventive Maintenance",
    description:
      "Scheduled inspections and maintenance to reduce downtime and improve equipment life.",
  },
  {
    title: "Spare Parts",
    description:
      "Replacement components, marking pins, lenses, cables, accessories, and consumable parts.",
  },
  {
    title: "Upgrades",
    description:
      "Hardware, software, controls, vision, and automation upgrades for existing systems.",
  },
  {
    title: "Custom Engineering",
    description:
      "Turnkey solutions designed around your product, process, quality, safety, and traceability requirements.",
  },
];

function ServicesPage() {
  return (
    <main>
      <section className="services-hero">
        <div className="services-container">
          <span>Services</span>
          <h1>Engineering support throughout the system lifecycle</h1>
          <p>
            From design and installation to maintenance and upgrades, QES
            supports your marking and automation systems at every stage.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="services-container">
          <div className="services-heading">
            <span>Our Services</span>
            <h2>Reliable support for industrial production systems</h2>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <div className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <Link
                  to={`/services/${service.title
                    .toLowerCase()
                    .replace(/&/g, "and")
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "")}`}
                >
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-process">
        <div className="services-container">
          <div className="services-heading">
            <span>Support Process</span>
            <h2>How we support your operations</h2>
          </div>

          <div className="service-process-grid">
            <div>
              <strong>01</strong>
              <h3>Assess</h3>
              <p>We review the issue, application, system, and production impact.</p>
            </div>

            <div>
              <strong>02</strong>
              <h3>Respond</h3>
              <p>Our team provides remote guidance or schedules on-site support.</p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Resolve</h3>
              <p>We repair, configure, replace, or upgrade the required components.</p>
            </div>

            <div>
              <strong>04</strong>
              <h3>Prevent</h3>
              <p>We recommend maintenance and improvements to reduce future downtime.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="services-container">
          <div>
            <span>Technical Assistance</span>
            <h2>Need support for your marking or automation system?</h2>
          </div>

          <Link to="/contact">Request Service</Link>
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;