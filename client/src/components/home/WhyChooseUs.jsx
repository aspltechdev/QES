import homepage3rdimage from "../../assets/homepage3rdimahe.png";

import precisionIcon from "../../assets/a.png";
import productRangeIcon from "../../assets/b.png";
import reliableIcon from "../../assets/c.png";
import expertiseIcon from "../../assets/d.png";
import customizedIcon from "../../assets/e.png";


const items = [
  {
    title: "Precision Engineering",
    icon: precisionIcon,
  },
  {
    title: "Complete Product Range",
    icon: productRangeIcon,
  },
  {
    title: "Reliable Quality",
    icon: reliableIcon,
  },
  {
    title: "Technical Expertise",
    icon: expertiseIcon,
  },
  {
    title: "Customized Solutions",
    icon: customizedIcon,
  },
];


const WhyChooseUs = () => {
  return (
    <section
      className="home-why"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(8, 12, 20, 0.58),
            rgba(8, 12, 20, 0.58)
          ),
          url(${homepage3rdimage})
        `,
      }}
    >
      <div className="home-why-overlay" />

      <div className="home-why-container">

        <span className="home-section-eyebrow">
          WHY CHOOSE QES
        </span>

        <h2>
          Built on Precision,
          <br />
          Reliability & Trust
        </h2>

        <div className="home-why-grid">

          {items.map((item) => (
            <article
              className="home-why-card"
              key={item.title}
            >

              <div className="home-why-icon">
                <img
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                />
              </div>

              <h3>
                {item.title}
              </h3>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};


export default WhyChooseUs;