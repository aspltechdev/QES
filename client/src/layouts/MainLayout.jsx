import { Outlet, useLocation, Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function MainLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      {isHomePage && (
        <section
          style={{
            width: "100%",
            minHeight: "280px",
            background:
              "linear-gradient(90deg, #f25b50 0%, #ff7066 50%, #f25b50 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: "min(900px, calc(100% - 40px))",
              padding: "60px 20px",
              boxSizing: "border-box",
            }}
          >
            <h2
              style={{
                margin: "0 0 14px",
                color: "#ffffff",
                fontSize: "clamp(30px, 4vw, 46px)",
                fontWeight: "700",
                lineHeight: "1.1",
              }}
            >
              Ready to Transform Your Marking Process?
            </h2>

            <p
              style={{
                maxWidth: "720px",
                margin: "0 auto 26px",
                color: "rgba(255,255,255,0.92)",
                fontSize: "13px",
                lineHeight: "1.7",
              }}
            >
              Partner with Quality Engineering Solutions for reliable
              industrial marking technologies that deliver precision,
              durability, and long-term performance.
            </p>

            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "42px",
                padding: "0 24px",
                borderRadius: "6px",
                background: "#ffffff",
                color: "#f25b50",
                fontSize: "11px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
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