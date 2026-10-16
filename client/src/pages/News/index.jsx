import { Link } from "react-router-dom";
import "./News.css";

const newsItems = [
  {
    category: "Company News",
    title: "QES Expands Industrial Automation Capabilities",
    date: "August 2026",
    description:
      "QES continues to strengthen its marking, traceability, machine vision, and automation portfolio for manufacturers.",
  },
  {
    category: "Product Launch",
    title: "New Laser Marking Solutions for High-Speed Production",
    date: "July 2026",
    description:
      "New laser systems support permanent identification on metals, plastics, and industrial components.",
  },
  {
    category: "Trade Show",
    title: "Meet QES at the Manufacturing Technology Expo",
    date: "June 2026",
    description:
      "See live demonstrations of marking, machine vision, robotics, and traceability systems.",
  },
  {
    category: "Webinar",
    title: "Improving Product Traceability with Data Matrix Codes",
    date: "May 2026",
    description:
      "Learn how manufacturers can improve lifecycle tracking, compliance, and quality control.",
  },
  {
    category: "Press Release",
    title: "QES Introduces Integrated Vision Verification",
    date: "April 2026",
    description:
      "The new solution verifies barcodes, QR codes, OCR data, and marking quality in real time.",
  },
  {
    category: "Industry Update",
    title: "The Role of Industry 4.0 in Permanent Part Marking",
    date: "March 2026",
    description:
      "Connected marking systems help synchronize production data with MES, ERP, and traceability platforms.",
  },
];

function NewsPage() {
  return (
    <main>
      <section className="news-hero">
        <div className="news-container">
          <span>News & Events</span>
          <h1>Latest updates from QES</h1>
          <p>
            Read company announcements, product launches, trade show updates,
            webinars, and industrial technology insights.
          </p>
        </div>
      </section>

      <section className="news-section">
        <div className="news-container">
          <div className="news-heading">
            <span>Latest Updates</span>
            <h2>Company news and industry insights</h2>
          </div>

          <div className="news-grid">
            {newsItems.map((item) => (
              <article className="news-card" key={item.title}>
                <div className="news-meta">
                  <span>{item.category}</span>
                  <time>{item.date}</time>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <button type="button">Read article →</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="news-events">
        <div className="news-container">
          <div className="news-heading">
            <span>Events</span>
            <h2>Meet our team and see the technology in action</h2>
          </div>

          <div className="event-list">
            <article>
              <div>
                <strong>15–17</strong>
                <span>September 2026</span>
              </div>

              <div>
                <h3>Manufacturing Technology Expo</h3>
                <p>Live marking, automation, and machine-vision demonstrations.</p>
              </div>
            </article>

            <article>
              <div>
                <strong>08</strong>
                <span>October 2026</span>
              </div>

              <div>
                <h3>Traceability Webinar</h3>
                <p>
                  Practical guidance for implementing Data Matrix and production
                  traceability systems.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="news-cta">
        <div className="news-container news-cta-content">
          <div>
            <span>Stay Connected</span>
            <h2>Want updates about products, events, and technology?</h2>
            <p>
              Contact our team to receive relevant product information and
              upcoming event announcements.
            </p>
          </div>

          <Link to="/contact">Contact QES</Link>
        </div>
      </section>
    </main>
  );
}

export default NewsPage;