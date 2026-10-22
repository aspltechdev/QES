import { Outlet, useLocation, Link } from "react-router-dom";
import "./MainLayout.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function MainLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div>
      <Navbar />

      <main >
        <Outlet />
      </main>

      {isHomePage && (
        <section>
          <div>
            <h2>
              Ready to Transform Your Marking Process?
            </h2>

            <p>
              Partner with Quality Engineering Solutions for reliable
              industrial marking technologies that deliver precision,
              durability, and long-term performance.
            </p>

            <Link
              to="/contact">
              Request a Quote
            </Link>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

export default MainLayout;