import {
  useState,
} from "react";


const testimonials = [
  {
    quote:
      "Quality Engineering Solutions delivered a reliable marking system that improved our production efficiency and product traceability. Their technical support was exceptional throughout the project.",

    name:
      "Praveen Kumar M",

    role:
      "Production Manager, Manufacturing Company",

    initials:
      "PK",
  },

  {
    quote:
      "The marking solution provided by QES integrated smoothly into our production line. The system is reliable, accurate, and easy for our operators to use.",

    name:
      "Rajesh K",

    role:
      "Operations Manager",

    initials:
      "RK",
  },

  {
    quote:
      "From installation to technical support, the QES team provided excellent service. Their engineering knowledge helped us choose the right solution for our application.",

    name:
      "Arun S",

    role:
      "Plant Engineering Manager",

    initials:
      "AS",
  },
];


const Testimonials = () => {
  const [
    active,
    setActive,
  ] = useState(0);


  return (
    <section className="home-testimonials">

      <div className="home-testimonials-container">


        <h2 className="home-testimonials-title">

          What Our{" "}

          <span>
            Clients
          </span>{" "}

          Say

        </h2>


        {/* TESTIMONIAL */}

        <div className="testimonial-card">

          <div className="testimonial-quote-icon">
            “
          </div>


          <p className="testimonial-text">

            "{testimonials[active].quote}"

          </p>


          <div className="testimonial-person">

            <div className="testimonial-avatar">

              {testimonials[active].initials}

            </div>


            <h3>

              {testimonials[active].name}

            </h3>


            <span>

              {testimonials[active].role}

            </span>

          </div>

        </div>


        {/* SLIDER DOTS */}

        <div className="testimonial-dots">

          {testimonials.map(
            (_, index) => (

              <button
                key={index}

                type="button"

                aria-label={`Show testimonial ${index + 1}`}

                className={
                  active === index
                    ? "testimonial-dot active"
                    : "testimonial-dot"
                }

                onClick={() =>
                  setActive(index)
                }
              />

            )
          )}

        </div>


        {/* =========================================
            CLIENT LOGO STRIP
        ========================================= */}

        <div className="home-client-logo-strip">

          <span className="client-google">
            Google
          </span>

          <span className="client-microsoft">
            <b>▦</b>
            Microsoft
          </span>

          <span className="client-nvidia">
            ◉ NVIDIA
          </span>

          <span className="client-ibm">
            IBM
          </span>

          <span className="client-aws">
            aws
          </span>

          <span className="client-intel">
            intel.
          </span>

          <span className="client-oracle">
            ORACLE
          </span>

          <span className="client-ericsson">
            ≡
          </span>

          <span className="client-vmware">
            vmware
          </span>

        </div>


      </div>

    </section>
  );
};


export default Testimonials;