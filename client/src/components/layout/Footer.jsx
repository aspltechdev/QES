import { Link } from "react-router-dom";

import qesLogo from "../../assets/qes-logo.jpeg";

import "./Footer.css";


function Footer() {

  const year =
    new Date().getFullYear();


  return (

    <footer className="qes-footer">

      <div className="qes-footer-container">

        <div className="qes-footer-main">


          {/* =================================================
              COMPANY
          ================================================= */}

          <div className="qes-footer-brand">

            <Link
              to="/"
              className="qes-footer-logo"
              aria-label="Quality Engineering Solutions Home"
            >

              <img
                src={qesLogo}
                alt="Quality Engineering Solutions"
              />

            </Link>


            <p>
              Providing innovative industrial marking and
              traceability solutions for manufacturers
              across diverse industries.
            </p>


            <div className="qes-socials">

              <a
                href="#"
                aria-label="WhatsApp"
              >
                W
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
              >
                in
              </a>

              <a
                href="#"
                aria-label="Facebook"
              >
                f
              </a>

              <a
                href="#"
                aria-label="Instagram"
              >
                ◎
              </a>

            </div>

          </div>


          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div className="qes-footer-column">

            <h3>
              Quick Links
            </h3>


            <nav>

              <Link to="/">
                Home
              </Link>

              <Link to="/about">
                About Us
              </Link>

              <Link to="/products">
                Products
              </Link>

              <Link to="/industries">
                Industries We Serve
              </Link>

              <Link to="/gallery">
                Gallery
              </Link>

              <Link to="/resources">
                Downloads
              </Link>

              <Link to="/contact">
                Contact Us
              </Link>

            </nav>

          </div>


          {/* =================================================
              PRODUCTS
          ================================================= */}

          <div
            className="
              qes-footer-column
              qes-footer-products
            "
          >

            <h3>
              Products
            </h3>


            <nav>

              <Link
                to="/products/conventional-marking-systems"
              >
                Conventional Marking Systems
              </Link>


              <Link
                to="/products/dot-peen-marking"
              >
                Pin (Dot Peen) Marking Machines
              </Link>


              <Link
                to="/products/laser-marking-machines"
              >
                Laser Marking Machines
              </Link>

            </nav>

          </div>


          {/* =================================================
              CONTACT
          ================================================= */}

          <div
            className="
              qes-footer-column
              qes-footer-contact
            "
          >

            <h3>
              Contact
            </h3>


            <p>
              No.25, IOB Colony, Rajajipuram,
              <br />
              Poonga Nagar,
              <br />
              Thiruvallur - 602 001
            </p>


            <p>
              Phone:{" "}

              <a href="tel:+919500388724">
                +91 95003 88724
              </a>
            </p>


            <p>

              <a
                href="mailto:qualityenggsoln@gmail.com"
              >
                qualityenggsoln@gmail.com
              </a>

            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          COPYRIGHT
      ===================================================== */}

      <div className="qes-footer-bottom">

        <div className="qes-footer-bottom-inner">

          <p>
            © {year} Quality Engineering Solutions.
            All Rights Reserved.
          </p>


          <div>

            <Link to="/legal">
              Privacy Policy
            </Link>

            <Link to="/legal">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>

  );
}


export default Footer;