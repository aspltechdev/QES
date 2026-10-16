import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const navigation = [
  {
    label: "About",
    path: "/about",
    children: [
      "Company Overview",
      "History",
      "Leadership",
      "Global Presence",
      "Certifications",
      "Careers",
    ],
  },
  {
    label: "Products",
    path: "/products",
    children: [
      "Laser Marking Systems",
      "Dot Peen Marking",
      "Scribe Marking",
      "Vision Systems",
      "Robotics & Automation",
      "Software",
    ],
  },
  {
    label: "Solutions",
    path: "/solutions",
    children: [
      "Product Traceability",
      "Product Identification",
      "Factory Automation",
      "Machine Vision",
      "Quality Inspection",
      "Robotics Integration",
      "Turnkey Automation",
      "Industry 4.0",
    ],
  },
  {
    label: "Industries",
    path: "/industries",
    children: [
      "Automotive",
      "Aerospace & Defense",
      "Medical Devices",
      "Electronics",
      "Packaging",
      "Food & Beverage",
      "Construction Equipment",
      "Railways",
      "Heavy Engineering",
      "Renewable Energy",
    ],
  },
  {
    label: "Technologies",
    path: "/technologies",
    children: [
      "Laser Technologies",
      "Dot Peen Technology",
      "Scribe Technology",
      "Machine Vision",
      "Industrial Robotics",
      "PLC Integration",
      "MES Integration",
      "ERP Integration",
      "Barcode & QR Systems",
      "IoT & Industry 4.0",
    ],
  },
  {
    label: "Services",
    path: "/services",
    children: [
      "System Integration",
      "Installation",
      "Training",
      "Technical Support",
      "Preventive Maintenance",
      "Spare Parts",
      "Upgrades",
      "Custom Engineering",
    ],
  },
  {
    label: "Resources",
    path: "/resources",
    children: [
      "Case Studies",
      "White Papers",
      "Product Brochures",
      "Technical Documentation",
      "Videos",
      "FAQs",
      "Downloads",
      "Blog",
    ],
  },
  {
    label: "Support",
    path: "/support",
    children: [
      "Customer Portal",
      "Request Service",
      "Software Downloads",
      "Warranty",
      "Manuals",
      "Contact Support",
    ],
  },
];

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/®/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileDropdown(null);
  };

  return (
    <header className="site-header">
      <div className="navbar-container">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark">Q</span>

          <span className="brand-text">
            <strong>QES</strong>
            <small>Quality Engineering Solutions</small>
          </span>
        </Link>

        <button
          type="button"
          className="menu-button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`main-navigation ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" className="nav-link" onClick={closeMenu}>
            Home
          </NavLink>

          {navigation.map((item, index) => (
            <div className="nav-dropdown" key={item.label}>
              <div className="nav-dropdown-heading">
                <NavLink
                  to={item.path}
                  className="nav-link"
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>

                <button
                  type="button"
                  className="dropdown-button"
                  aria-label={`Open ${item.label} menu`}
                  onClick={() =>
                    setMobileDropdown(
                      mobileDropdown === index ? null : index
                    )
                  }
                >
                  ▾
                </button>
              </div>

              <div
                className={`dropdown-menu ${
                  mobileDropdown === index ? "mobile-open" : ""
                }`}
              >
                {item.children.map((child) => (
                  <Link
                    key={child}
                    to={`${item.path}/${slugify(child)}`}
                    onClick={closeMenu}
                  >
                    {child}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <NavLink to="/news" className="nav-link" onClick={closeMenu}>
            News
          </NavLink>

          <NavLink to="/careers" className="nav-link" onClick={closeMenu}>
            Careers
          </NavLink>

          <NavLink
            to="/contact"
            className="contact-button"
            onClick={closeMenu}
          >
            Request a Demo
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;