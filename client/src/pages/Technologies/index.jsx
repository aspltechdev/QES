import { Link } from "react-router-dom";
import "./Technologies.css";

const technologies = [
  {
    title: "Laser Technologies",
    description:
      "Fiber, CO₂, UV, green, and vanadate laser systems for permanent marking on metals, plastics, glass, and industrial components.",
  },
  {
    title: "Dot Peen Technology",
    description:
      "Pin-based marking for durable serial numbers, VINs, Data Matrix codes, and component identification.",
  },
  {
    title: "Scribe Technology",
    description:
      "Continuous-line marking with quiet operation for hardened steel, plastics, and precision components.",
  },
  {
    title: "Machine Vision",
    description:
      "Industrial cameras for OCR, barcode verification, mark inspection, orientation checking, and quality control.",
  },
  {
    title: "Industrial Robotics",
    description:
      "Robotic systems for pick-and-place, loading, unloading, assembly, transfer, welding, and material handling.",
  },
  {
    title: "PLC Integration",
    description:
      "Reliable communication between marking systems, production equipment, sensors, robots, and automation controls.",
  },
  {
    title: "MES Integration",
    description:
      "Connect marking and traceability data with manufacturing execution systems for production tracking and reporting.",
  },
  {
    title: "ERP Integration",
    description:
      "Synchronize product identification, production records, and traceability information with enterprise systems.",
  },
  {
    title: "Barcode & QR Systems",
    description:
      "Generate, mark, read, and verify barcodes, QR codes, and Data Matrix codes throughout production.",
  },
  {
    title: "IoT & Industry 4.0",
    description:
      "Connect equipment, production data, monitoring tools, and analytics platforms across the smart factory.",
  },
];

function TechnologiesPage() {
  return (
    <main>
      <section className="technologies-hero">
        <div className="technologies-container">
          <span>Technologies</span>
          <h1>Industrial technologies that connect marking, automation, and data</h1>
          <p>
            QES combines marking hardware, machine vision, robotics, controls,
            and software integration to create complete manufacturing systems.
          </p>
        </div>
      </section>

      <section className="technologies-section">
        <div className="technologies-container">
          <div className="technologies-heading">
            <span>Core Capabilities</span>
            <h2>Technologies engineered for reliable production</h2>
          </div>

          <div className="technologies-grid">
            {technologies.map((technology, index) => (
              <article className="technology-card" key={technology.title}>
                <div className="technology-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>{technology.title}</h3>
                <p>{technology.description}</p>

                <Link
                  to={`/technologies/${technology.title
                    .toLowerCase()
                    .replace(/&/g, "and")
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "")}`}
                >
                  Explore technology →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="technology-flow">
        <div className="technologies-container">
          <div className="technologies-heading">
            <span>Connected Manufacturing</span>
            <h2>How the technologies work together</h2>
          </div>

          <div className="flow-grid">
            <div>
              <strong>01</strong>
              <h3>Identify</h3>
              <p>
                Laser, dot peen, or scribe systems permanently mark the product.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <h3>Verify</h3>
              <p>
                Machine vision checks the mark, code quality, position, and readability.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Automate</h3>
              <p>
                Robots, conveyors, sensors, and PLCs move and control the production process.
              </p>
            </div>

            <div>
              <strong>04</strong>
              <h3>Connect</h3>
              <p>
                MES, ERP, and Industry 4.0 systems store and synchronize traceability data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="technologies-cta">
        <div className="technologies-container">
          <div>
            <span>Technology Integration</span>
            <h2>Need help selecting the right technology?</h2>
          </div>

          <Link to="/contact">Speak with an Engineer</Link>
        </div>
      </section>
    </main>
  );
}

export default TechnologiesPage;