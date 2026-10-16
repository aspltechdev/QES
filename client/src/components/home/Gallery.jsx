import { Link } from "react-router-dom";

import image14 from "../../assets/image14.png";
import image15 from "../../assets/image15.png";
import image16 from "../../assets/image16.png";
import image17 from "../../assets/image17.png";
import image18 from "../../assets/image18.png";
import image19 from "../../assets/image19.jpg";
import image20 from "../../assets/image20.png";
import image21 from "../../assets/image21.png";
import image22 from "../../assets/image22.png";
import image23 from "../../assets/image23.jpg";
import image24 from "../../assets/image24.png";


const Gallery = () => {
  return (
    <section className="home-gallery">

      <div className="home-gallery-container">


        {/* =========================================
            HEADING
        ========================================= */}

        <div className="home-gallery-heading">

          <div className="home-gallery-heading-copy">

            <span>
              GALLERY
            </span>

            <h2>
              Engineering
              <br />
              Excellence in Action
            </h2>

            <p>
              Explore real installations, machine demonstrations,
              and industrial applications showcasing the precision
              and reliability of our marking solutions.
            </p>

          </div>


          <Link
            to="/gallery"
            className="home-gallery-btn"
          >
            Discover More
          </Link>

        </div>


        {/* =========================================
            FIGMA 5-COLUMN IMAGE GALLERY
        ========================================= */}

        <div className="home-gallery-columns">


          {/* COLUMN 1 */}

          <div className="home-gallery-column">

            <img
              className="gallery-img"
              src={image14}
              alt="Industrial marking machine"
            />

            <img
              className="gallery-img"
              src={image15}
              alt="Industrial production line"
            />

          </div>


          {/* COLUMN 2 */}

          <div className="home-gallery-column">

            <img
              className="gallery-img"
              src={image16}
              alt="Industrial marking equipment"
            />

            <img
              className="gallery-img"
              src={image17}
              alt="Factory production floor"
            />

          </div>


          {/* COLUMN 3 */}

          <div className="home-gallery-column">

            <img
              className="gallery-img"
              src={image18}
              alt="Industrial marking process"
            />

            <img
              className="gallery-img"
              src={image19}
              alt="Machine control system"
            />

          </div>


          {/* COLUMN 4 */}

          <div className="home-gallery-column">

            <img
              className="gallery-img"
              src={image20}
              alt="Precision marking"
            />

            <img
              className="gallery-img"
              src={image21}
              alt="Industrial manufacturing"
            />

          </div>


          {/* COLUMN 5 */}

          <div className="home-gallery-column">

            <img
              className="gallery-img"
              src={image22}
              alt="Packaging automation"
            />

            <img
              className="gallery-img"
              src={image23}
              alt="Manufacturing facility"
            />

            <img
              className="gallery-img"
              src={image24}
              alt="Laser marking system"
            />

          </div>

        </div>

      </div>

    </section>
  );
};


export default Gallery;