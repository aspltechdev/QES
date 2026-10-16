import { Link } from "react-router-dom";
import "./Solutions.css";

const solutions = [
  {
    title: "Product Traceability",
    slug: "product-traceability",
    description:
      "Track products and components throughout manufacturing using permanent marks, barcodes, QR codes, and production data.",
  },
  {
    title: "Product Identification",
    slug: "product-identification",
    description:
      "Create permanent serial numbers, VINs, Data Matrix codes, logos, and product IDs for industrial components.",
  },
  {
    title: "Factory Automation",
    slug: "factory-automation",
    description:
      "Automate production processes using conveyors, robots, sensors, PLC systems, and integrated control solutions.",
  },
  {
    title: "Machine Vision",
    slug: "machine-vision",
    description:
      "Use industrial cameras for OCR, barcode reading, mark verification, orientation checks, and quality inspection.",
  },
  {
    title: "Quality Inspection",
    slug: "quality-inspection",
    description:
      "Verify product markings, component presence, dimensions, labels, and production quality automatically.",
  },
  {
    title: "Robotics Integration",
    slug: "robotics-integration",
    description:
      "Integrate industrial robots for loading, unloading, assembly, transfer, welding, and material handling.",
  },
  {
    title: "Turnkey Automation",
    slug: "turnkey-automation",
    description:
      "Complete custom-engineered systems combining marking, vision, robotics, conveyors, and traceability software.",
  },
  {
    title: "Industry 4.0",
    slug: "industry-4-0",
    description:
      "Connect marking and automation systems with MES, ERP, IoT, and production-monitoring platforms.",
  },
];

function SolutionsPage() {
  return (
    <main>
      <section className="solutions-hero">
        <div className="solutions-container">
          <span>Solutions</span>
          <h1>Integrated solutions for modern manufacturing</h1>
          <p>
            Improve traceability, productivity, quality, and automation with
            systems designed around your production requirements.
          </p>
        </div>
      </section>

      <section className="solutions-section">
        <div className="solutions-container">
          <div className="solutions-heading">
            <span>What We Deliver</span>
            <h2>From permanent marking to complete factory integration</h2>
          </div>

          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <article className="solution-card" key={solution.slug}>
                <div className="solution-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>{solution.title}</h3>
                <p>{solution.description}</p>

                <Link to={`/solutions/${solution.slug}`}>
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-process">
        <div className="solutions-container">
          <div className="solutions-heading process-heading">
            <span>Our Process</span>
            <h2>How we develop your solution</h2>
          </div>

          <div className="process-grid">
            <div>
              <strong>01</strong>
              <h3>Requirement Analysis</h3>
              <p>
                We study your product, material, production volume, marking
                requirements, and integration environment.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <h3>System Design</h3>
              <p>
                Our engineers select the marking, vision, robotics, software,
                and control technologies required.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Integration</h3>
              <p>
                We connect the system with production lines, PLCs, robots,
                conveyors, MES, ERP, and inspection systems.
              </p>
            </div>

            <div>
              <strong>04</strong>
              <h3>Support</h3>
              <p>
                We provide installation, training, technical support,
                preventive maintenance, and future upgrades.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="solutions-cta">
        <div className="solutions-container">
          <div>
            <span>Custom Engineering</span>
            <h2>Need a solution designed for your production line?</h2>
          </div>

          <Link to="/contact">Discuss Your Project</Link>
        </div>
      </section>
    </main>
  );
}

export default SolutionsPage;