import { Link } from "react-router-dom";

import homepage8thimage from "../../assets/homepage8thimage.jpg";
import homepage9thimage from "../../assets/homepage9thimage.jpg";
import homepage10thimage from "../../assets/homepage10thimage.jpg";
import homepage11thimage from "../../assets/homepage11thimage.jpg";
import homepage12thimage from "../../assets/homepage12thimage.jpg";
import homepage13thimage from "../../assets/homepage13thimage.jpg";


const industries = [
  {
    title: "Metal Fabrication",

    description:
      "Reliable identification for fabricated metal components.",

    image: homepage8thimage,

    link:
      "/industries/metal-fabrication",

    size:
      "tall",
  },

  {
    title: "Medical",

    image: homepage9thimage,

    link:
      "/industries/medical-devices",

    size:
      "short",
  },

  {
    title: "Robotics",

    image: homepage10thimage,

    link:
      "/industries/robotics",

    size:
      "tall",
  },

  {
    title: "Oil & Gas / Energy",

    image: homepage11thimage,

    link:
      "/industries/oil-and-gas",

    size:
      "short",
  },

  {
    title: "Automotive",

    image: homepage12thimage,

    link:
      "/industries/automotive",

    size:
      "tall",
  },

  {
    title: "Industrial Equipment",

    image: homepage13thimage,

    link:
      "/industries/heavy-engineering",

    size:
      "short",
  },
];


const Industries = () => {

  /*
    Duplicate the exact same six cards.

    This lets one copy leave the screen
    while the second copy enters,
    creating an endless right-to-left loop.
  */

  const scrollingIndustries = [
    ...industries,
    ...industries,
  ];


  return (
    <section className="home-industries">

      <div className="home-industries-container">


        {/* TITLE */}

        <h2 className="home-industries-title">

          <span>
            Industries
          </span>{" "}

          we serve

        </h2>


        {/* MOVING INDUSTRIES */}

        <div className="home-industries-marquee">

          <div className="home-industries-track">

            {scrollingIndustries.map(
              (industry, index) => (

                <Link
                  to={industry.link}

                  className={`
                    home-industry-card
                    home-industry-${industry.size}
                  `}

                  key={`${industry.title}-${index}`}
                >

                  <img
                    src={industry.image}
                    alt={industry.title}
                  />


                  <div className="home-industry-overlay" />


                  <div className="home-industry-content">

                    <h3>
                      {industry.title}
                    </h3>


                    {industry.description && (

                      <p>
                        {industry.description}
                      </p>

                    )}

                  </div>

                </Link>

              )
            )}

          </div>

        </div>


        {/* BUTTON */}

        <div className="home-industries-action">

          <Link to="/industries">
            Explore Industries
          </Link>

        </div>

      </div>

    </section>
  );
};


export default Industries;