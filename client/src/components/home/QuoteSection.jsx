import { useState } from "react";
import "./QuoteSection.css";
import homepage7thimage from "../../assets/homepage7thimage.png";


const QuoteSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section
      className="home-quote"
    >
      <div className="home-quote-overlay" />

      <div className="home-quote-container">

        <div className="home-quote-copy">

          <span className="home-quote-eyebrow">
            REQUEST A QUOTE
          </span>

          <h2>
            Ready to Find the Right
            <br />
            Marking Solution?
          </h2>

          <p>
            Whether you’re looking for conventional marking systems,
            pin (dot peen) marking machines, or laser marking solutions,
            our team is here to help you choose the right technology
            for your business.
          </p>

        </div>


        <div className="home-quote-card">

          <h3>
            Request a Quote
          </h3>

          {submitted && (
            <div className="home-quote-success">
              Thank you. Your request has been submitted.
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="home-quote-row">

              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
              />

            </div>


            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
            />


            <select
              name="category"
              required
              defaultValue=""
            >

              <option
                value=""
                disabled
              >
                Product Category
              </option>

              <option>
                Conventional Marking Systems
              </option>

              <option>
                Pin (Dot Peen) Marking Machines
              </option>

              <option>
                Laser Marking Machines
              </option>

              <option>
                Machine Vision
              </option>

              <option>
                Automation Solutions
              </option>

            </select>


            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              required
            />


            <button type="submit">
              Request a Quote
            </button>

          </form>


          <small>
            By submitting this form, you agree to our Privacy Policy.
            Our team will contact you within one business day.
          </small>

        </div>

      </div>
    </section>
  );
};


export default QuoteSection;