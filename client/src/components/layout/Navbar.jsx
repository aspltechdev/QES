import {
  Link,
  NavLink,
} from "react-router-dom";

import qesLogo from "../../assets/qes-logo.jpeg";

import "./Navbar.css";


const Navbar = () => {
  return (
    <header className="figma-navbar-wrap">

      <div className="figma-navbar">

        {/* LOGO */}
        <Link
          to="/"
          className="figma-logo"
          aria-label="Quality Engineering Solutions Home"
        >
          <img
            src={qesLogo}
            alt="Quality Engineering Solutions"
          />
        </Link>


        <nav className="figma-nav-links">

          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/about">
            About Us
          </NavLink>


          {/* PRODUCTS DROPDOWN */}
          <div className="figma-products-menu">

            <div className="figma-products-main">
              Products

              <span className="figma-products-arrow">
                ⌄
              </span>
            </div>


            <div className="figma-products-dropdown">

              <NavLink
                to="/products/conventional-marking-systems"
              >
                Conventional Marking Systems
              </NavLink>

              <NavLink
                to="/products/dot-peen-marking"
              >
                Pin (Dot Peen) Marking Machines
              </NavLink>

              <NavLink
                to="/products/laser-marking-machines"
              >
                Laser Marking Machines
              </NavLink>

            </div>

          </div>


          <NavLink to="/industries">
            Industries
          </NavLink>

          <NavLink to="/resources">
            Download
          </NavLink>

          <NavLink to="/gallery">
            Gallery
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>

        </nav>


        <Link
          to="/contact"
          className="figma-nav-quote"
        >
          Request a Quote
        </Link>

      </div>

    </header>
  );
};


export default Navbar;