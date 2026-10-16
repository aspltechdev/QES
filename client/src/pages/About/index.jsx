import { Link } from "react-router-dom";

import FAQ from "../../components/home/FAQ";

import aboutUsHero from "../../assets/aboutushero.png";
import aboutPage2Image from "../../assets/aboutpage2image.png";
import aboutPage3Image from "../../assets/aboutpage3image.png";

/* =========================================================
   OUR VALUES ICONS
========================================================= */

import valueIconF from "../../assets/f.png";
import valueIconG from "../../assets/g.png";
import valueIconH from "../../assets/h.png";
import valueIconI from "../../assets/i.png";

/* =========================================================
   WHY CHOOSE QES ICONS
========================================================= */

import whyIconA from "../../assets/a.png";
import whyIconB from "../../assets/b.png";
import whyIconC from "../../assets/c.png";
import whyIconD from "../../assets/d.png";
import whyIconE from "../../assets/e.png";

import "./About.css";


function AboutPage() {
  return (
    <main className="about-page">


      {/* =====================================================
          ABOUT TITLE + VIDEO
      ===================================================== */}

      <section className="about-top">

        <div className="about-shell">

          <h1>
            ABOUT US
          </h1>

          <div className="about-video">

            <img
              src={aboutUsHero}
              alt="Quality Engineering Solutions"
            />

            <button
              type="button"
              className="about-play-btn"
              aria-label="Play company video"
            >
              ▶
            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHO WE ARE
      ===================================================== */}

      <section className="about-who">

        <div className="about-shell about-who-grid">

          <div className="about-who-image">

            <img
              src={aboutPage2Image}
              alt="Engineer working with marking equipment"
            />

          </div>


          <div className="about-who-copy">

            <span>
              WHO WE ARE
            </span>

            <h2>
              Your <em>Trusted</em>
              <br />
              Industrial Marking
              <br />
              <em>Partner</em>
            </h2>

            <p>
              Quality Engineering Solutions (QES) specializes in industrial
              marking and identification systems that help manufacturers
              achieve permanent product identification and complete
              traceability. With expertise in conventional marking systems,
              pin (dot peen) marking machines, and laser marking technologies,
              we deliver solutions engineered for precision, durability, and
              efficiency.
            </p>


            <div className="about-stats">

              <div>
                <strong>
                  20+
                </strong>

                <span>
                  Years of Experience
                </span>
              </div>

              <div>
                <strong>
                  500+
                </strong>

                <span>
                  Successful Projects
                </span>
              </div>

              <div>
                <strong>
                  100+
                </strong>

                <span>
                  Trusted Businesses
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STORY / VISION / MISSION
      ===================================================== */}

      <section className="about-story">

        <div className="about-shell about-story-grid">

          <div className="about-story-image">

            <img
              src={aboutPage3Image}
              alt="QES engineering team"
            />

            <div className="about-story-overlay" />


            <div className="about-story-copy">

              <span>
                OUR STORY
              </span>

              <p>
                Driven by innovation and engineering excellence, QES has been
                helping industries achieve accurate, permanent, and reliable
                marking solutions for modern manufacturing.
              </p>

            </div>

          </div>


          <div className="about-purpose">

            <div className="about-purpose-card vision">

              <span>
                OUR VISION
              </span>

              <p>
                To become a trusted leader in industrial marking and
                traceability solutions, recognized for innovation, quality,
                and customer satisfaction.
              </p>

            </div>


            <div className="about-purpose-card mission">

              <span>
                OUR MISSION
              </span>

              <p>
                To provide precision-engineered marking solutions that help
                manufacturers improve identification, operational efficiency,
                and product traceability.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR VALUES
      ===================================================== */}

      <section className="about-values-section">

        <div className="about-values-overlay" />


        <div className="about-shell about-values-layout">

          <div className="about-values-copy">

            <span>
              OUR VALUES
            </span>

            <h2>
              The Principles
              <br />
              That Define Us
            </h2>

            <p>
              Driven by integrity, precision, and a passion for engineering
              excellence.
            </p>

          </div>


          <div className="about-values-grid">


            <article className="about-value-card">

              <div className="about-value-icon">

                <img
                  src={valueIconF}
                  alt="Precision"
                />

              </div>

              <span>
                PRECISION
              </span>

              <p>
                Delivering accurate and permanent marking solutions for every
                application.
              </p>

            </article>


            <article className="about-value-card">

              <div className="about-value-icon">

                <img
                  src={valueIconG}
                  alt="Innovation"
                />

              </div>

              <span>
                INNOVATION
              </span>

              <p>
                Continuously adopting advanced technologies to meet evolving
                industrial needs.
              </p>

            </article>


            <article className="about-value-card">

              <div className="about-value-icon">

                <img
                  src={valueIconH}
                  alt="Quality"
                />

              </div>

              <span>
                QUALITY
              </span>

              <p>
                Providing reliable products that deliver long-term performance.
              </p>

            </article>


            <article className="about-value-card">

              <div className="about-value-icon">

                <img
                  src={valueIconI}
                  alt="Customer Commitment"
                />

              </div>

              <span>
                CUSTOMER COMMITMENT
              </span>

              <p>
                Building lasting partnerships through trusted service and
                technical expertise.
              </p>

            </article>


          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE QES
      ===================================================== */}

      <section className="about-why">

        <div className="about-why-overlay" />


        <div className="about-shell about-why-content">

          <span>
            WHY CHOOSE QES
          </span>

          <h2>
            Built on Precision,
            <br />
            Reliability & Trust
          </h2>


          <div className="about-why-grid">


            <article className="about-why-card">

              <div className="about-why-icon">

                <img
                  src={whyIconA}
                  alt="Precision Engineering"
                />

              </div>

              <p>
                Precision Engineering
              </p>

            </article>


            <article className="about-why-card">

              <div className="about-why-icon">

                <img
                  src={whyIconB}
                  alt="Complete Product Range"
                />

              </div>

              <p>
                Complete Product Range
              </p>

            </article>


            <article className="about-why-card">

              <div className="about-why-icon">

                <img
                  src={whyIconC}
                  alt="Reliable Quality"
                />

              </div>

              <p>
                Reliable Quality
              </p>

            </article>


            <article className="about-why-card">

              <div className="about-why-icon">

                <img
                  src={whyIconD}
                  alt="Technical Expertise"
                />

              </div>

              <p>
                Technical Expertise
              </p>

            </article>


            <article className="about-why-card">

              <div className="about-why-icon">

                <img
                  src={whyIconE}
                  alt="Customized Solutions"
                />

              </div>

              <p>
                Customized Solutions
              </p>

            </article>


          </div>

        </div>

      </section>


      {/* =====================================================
          LOGOS
      ===================================================== */}

      <section className="about-logos">

        <div className="about-shell about-logo-row">

          <span>
            Google
          </span>

          <span>
            ▦ Microsoft
          </span>

          <span>
            ◉ NVIDIA
          </span>

          <span>
            IBM
          </span>

          <span>
            aws
          </span>

          <span>
            intel.
          </span>

          <span>
            ORACLE
          </span>

          <span>
            ERICSSON
          </span>

          <span>
            vmware
          </span>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <FAQ />


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="about-bottom-cta">

        <div className="about-bottom-cta-overlay" />


        <div className="about-bottom-cta-content">

          <h2>
            Ready to Transform Your Marking Process?
          </h2>

          <p>
            Partner with Quality Engineering Solutions for reliable industrial
            marking technologies that deliver precision,
            <br />
            durability, and long-term performance.
          </p>

          <Link
            to="/contact"
            className="about-bottom-cta-btn"
          >
            Request a Quote
          </Link>

        </div>

      </section>


    </main>
  );
}


export default AboutPage;