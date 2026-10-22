import { useState } from "react";

import "./Contact.css";


function ContactPage() {
  const [submitted, setSubmitted] =
    useState(false);

  const [error, setError] =
    useState("");

  const [submitting, setSubmitting] =
    useState(false);


  async function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(false);
    setError("");
    setSubmitting(true);

    const form =
      event.currentTarget;

    const formData =
      new FormData(form);

    const payload = {
      name:
        formData.get("name"),

      email:
        formData.get("email"),

      phone:
        formData.get("phone"),

      company:
        formData.get("company"),

      subject:
        "Website Contact Form",

      message:
        formData.get("message"),
    };


    try {
      const response =
        await fetch(
          `${import.meta.env.VITE_API_URL}/api/contact`,
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify(payload),
          }
        );


      const data =
        await response.json();


      if (
        !response.ok ||
        !data.success
      ) {
        throw new Error(
          data.message ||
            "Unable to submit your message."
        );
      }


      setSubmitted(true);

      form.reset();

    } catch (error) {

      setError(
        error.message
      );

    } finally {

      setSubmitting(false);

    }
  }


  return (
    <main className="contact-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">

        <div className="contact-hero-overlay" />

        <div className="contact-hero-content">

          <span>
            CONTACT US
          </span>

          <h1>
            LET’S TALK ABOUT YOUR MARKING
            <br />
            REQUIREMENTS
          </h1>

        </div>

      </section>


      {/* =====================================================
          CONTACT DETAILS + FORM
      ===================================================== */}

      <section className="contact-main-section">

        <div className="contact-container contact-main-grid">


          {/* =================================================
              LEFT — CONTACT INFORMATION
          ================================================= */}

          <div className="contact-info">

            <span className="contact-small-title">
              CONTACT INFORMATION
            </span>


            <h2>
              We’re Here To{" "}

              <strong>
                Assist You
              </strong>
            </h2>


            <p className="contact-intro">
              Reach out to us for product enquiries,
              technical support, or customised industrial
              marking solutions.
            </p>


            {/* PHONE */}

            <div className="contact-detail-block">

              <h3>
                PHONE
              </h3>

              <a href="tel:+919500388724">
                +91 95003 88724
              </a>

            </div>


            {/* EMAIL */}

            <div className="contact-detail-block">

              <h3>
                EMAIL
              </h3>

              <a href="mailto:qualityenggsoln@gmail.com">
                qualityenggsoln@gmail.com
              </a>

            </div>


            {/* LOCATION */}

            <div className="contact-detail-block">

              <h3>
                LOCATION
              </h3>

              <p>
                No.25, IOB Colony,
                Rajajipuram,
                <br />

                Poonga Nagar,
                <br />

                Thiruvallur – 602 001
              </p>

            </div>


            {/* OFFICE TIMING */}

            <div className="contact-detail-block">

              <h3>
                OFFICE TIMING
              </h3>

              <p>
                Monday – Saturday
                <br />
                9:00 AM – 6:00 PM
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT — FORM
          ================================================= */}

          <div className="contact-form-card">

            <h2>
              Send Us A Message
            </h2>


            <p className="contact-form-intro">
              Fill out the form below, and our team will
              get back to you as soon as possible.
            </p>


            {submitted && (
              <div className="contact-success">
                Thank you. Your message has been
                submitted successfully.
              </div>
            )}


            {error && (
              <div className="contact-error">
                {error}
              </div>
            )}


            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                required
              />


              <input
                type="email"
                name="email"
                placeholder="Your Email*"
                required
              />


              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number*"
                required
              />


              <input
                type="text"
                name="company"
                placeholder="Company*"
                required
              />


              <textarea
                name="message"
                placeholder="Enter Your Message*"
                required
              />


              <button
                type="submit"
                disabled={submitting}
              >
                {submitting
                  ? "Submitting..."
                  : "Submit"}
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAP
      ===================================================== */}

      <section className="contact-map-section">

        <div className="contact-container">

          <div className="contact-map-heading">

            <h2>
              Visit Our Office
            </h2>

            <p>
              Find us easily using the map below or
              contact us to schedule a visit.
            </p>

          </div>


          <div className="contact-map">

            <iframe
              title="QES Office Location"
              src="https://www.google.com/maps?q=Thiruvallur,Tamil%20Nadu&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-  en-downgrade"
            />

          </div>

        </div>

      </section>

    </main>
  );
}


export default ContactPage;