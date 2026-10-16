import {
  useState,
} from "react";


const faqs = [
  {
    question:
      "What types of marking solutions do you offer?",

    answer:
      "We provide a complete range of industrial marking solutions, including Conventional Marking Systems, Pin (Dot Peen) Marking Machines, Laser Marking Machines, and customized marking solutions for different manufacturing requirements.",
  },

  {
    question:
      "Which industries do your products serve?",

    answer:
      "Our solutions support metal fabrication, automotive, medical, robotics, oil and gas, energy, industrial equipment, engineering, and other manufacturing industries.",
  },

  {
    question:
      "How do I choose the right marking machine?",

    answer:
      "The right marking system depends on your material, marking depth, production volume, required mark quality, automation requirements, and traceability needs. Our engineering team can help you select the appropriate technology.",
  },

  {
    question:
      "Do you provide installation and technical support?",

    answer:
      "Yes. We provide installation, commissioning, operator training, technical assistance, preventive maintenance, troubleshooting, and system support.",
  },

  {
    question:
      "Can your machines create permanent markings?",

    answer:
      "Yes. Our marking systems are designed to create permanent identification such as serial numbers, product IDs, logos, barcodes, QR codes, Data Matrix codes, and other traceability information.",
  },
];


const FAQ = () => {
  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0);


  const toggleFAQ = (index) => {
    setActiveIndex(
      activeIndex === index
        ? null
        : index
    );
  };


  return (
    <section className="home-faq">

      <div className="home-faq-container">


        {/* LEFT */}

        <div className="home-faq-intro">

          <span>
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2>
            Answers to Your
            <br />
            Most Common
            <br />
            Questions
          </h2>

          <p>
            Find quick answers about our industrial marking
            solutions, product selection, installation, and support.
            Our team is always ready to assist if you need more
            information.
          </p>

        </div>


        {/* RIGHT */}

        <div className="home-faq-list">

          {faqs.map(
            (faq, index) => {

              const isOpen =
                activeIndex === index;

              return (
                <article
                  className={`home-faq-item ${
                    isOpen
                      ? "active"
                      : ""
                  }`}
                  key={faq.question}
                >

                  <button
                    type="button"
                    className="home-faq-question"
                    onClick={() =>
                      toggleFAQ(index)
                    }
                    aria-expanded={isOpen}
                  >

                    <span>
                      {faq.question}
                    </span>

                    <span className="home-faq-icon">
                      {isOpen
                        ? "−"
                        : "+"}
                    </span>

                  </button>


                  {isOpen && (

                    <div className="home-faq-answer">

                      <p>
                        {faq.answer}
                      </p>

                    </div>

                  )}

                </article>
              );
            }
          )}

        </div>

      </div>

    </section>
  );
};


export default FAQ;