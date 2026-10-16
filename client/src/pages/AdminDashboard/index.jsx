import { useEffect, useState } from "react";
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";

import "./AdminDashboard.css";

const API = "http://localhost:5000";

const menuItems = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: "⌂",
    path: "/admin",
  },
  {
    key: "products",
    label: "Products",
    icon: "▦",
    path: "/admin/products",
  },
  {
    key: "industries",
    label: "Industries",
    icon: "◇",
    path: "/admin/industries",
  },
  {
    key: "gallery",
    label: "Gallery",
    icon: "▣",
    path: "/admin/gallery",
  },
  {
    key: "downloads",
    label: "Downloads",
    icon: "↓",
    path: "/admin/downloads",
  },
  {
    key: "enquiries",
    label: "Enquiries",
    icon: "✉",
    path: "/admin/enquiries",
  },
];

function AdminDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    products: 0,
    industries: 0,
    gallery: 0,
    enquiries: 0,
  });

  useEffect(() => {
    verifyAdmin();
  }, []);

  useEffect(() => {
    if (location.pathname === "/admin") {
      loadStats();
    }
  }, [location.pathname]);

  function getToken() {
    return localStorage.getItem("qes_admin_token");
  }

  async function verifyAdmin() {
    const token = getToken();

    if (!token) {
      navigate("/admin/login");
      return;
    }

    try {
      const response = await fetch(
        `${API}/api/admin/auth/me`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error("Session expired");
      }

      setAdmin(data.admin);
    } catch {
      localStorage.removeItem("qes_admin_token");
      localStorage.removeItem("qes_admin_user");

      navigate("/admin/login");
    } finally {
      setLoading(false);
    }
  }

  async function loadStats() {
    const token = getToken();

    if (!token) return;

    try {
      const response = await fetch(
        `${API}/api/admin/content/stats`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (data.success) {
        setStats(data.stats);
      }
    } catch (error) {
      console.error("Stats error:", error);
    }
  }

  function handleLogout() {
    localStorage.removeItem("qes_admin_token");
    localStorage.removeItem("qes_admin_user");

    navigate("/admin/login");
  }

  function getCurrentPageTitle() {
    const item = menuItems.find((menuItem) => {
      if (menuItem.path === "/admin") {
        return location.pathname === "/admin";
      }

      return location.pathname.startsWith(menuItem.path);
    });

    return item?.label || "Dashboard";
  }

  if (loading) {
    return (
      <div className="admin-loading">
        Loading QES Admin...
      </div>
    );
  }

  const isDashboard =
    location.pathname === "/admin";

  return (
    <main className="admin-dashboard">

      <aside className="admin-sidebar">

        <div className="admin-sidebar-logo">
          QES
          <span>ADMIN</span>
        </div>

        <nav className="admin-sidebar-nav">

          {menuItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.path}
              end={item.path === "/admin"}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              <span>{item.icon}</span>

              {item.label}
            </NavLink>
          ))}

        </nav>

        <button
          type="button"
          className="admin-logout"
          onClick={handleLogout}
        >
          Sign Out
        </button>

      </aside>


      <section className="admin-content">

        <header className="admin-topbar">

          <div>
            <span>QES ADMINISTRATION</span>

            <h1>
              {getCurrentPageTitle()}
            </h1>
          </div>

          <div className="admin-user">

            <div>
              {admin?.name
                ?.charAt(0)
                .toUpperCase()}
            </div>

            <span>
              <strong>
                {admin?.name}
              </strong>

              {admin?.email}
            </span>

          </div>

        </header>


        {isDashboard && (
          <>
            <section className="admin-welcome">

              <div>
                <span>WELCOME BACK</span>

                <h2>
                  Website Management
                </h2>

                <p>
                  Manage the content displayed on your
                  QES website from one place.
                </p>
              </div>

            </section>


            <section className="admin-stats">

              <article>
                <span>PRODUCTS</span>

                <strong>
                  {stats.products}
                </strong>

                <p>
                  Database products
                </p>
              </article>


              <article>
                <span>INDUSTRIES</span>

                <strong>
                  {stats.industries}
                </strong>

                <p>
                  Industry entries
                </p>
              </article>


              <article>
                <span>GALLERY</span>

                <strong>
                  {stats.gallery}
                </strong>

                <p>
                  Gallery projects
                </p>
              </article>


              <article>
                <span>ENQUIRIES</span>

                <strong>
                  {stats.enquiries}
                </strong>

                <p>
                  Contact messages
                </p>
              </article>

            </section>


            <section className="admin-management">

              <h2>
                Website Management
              </h2>

              <div className="admin-management-grid">

                {menuItems
                  .filter(
                    (item) =>
                      item.key !== "dashboard"
                  )
                  .map((item) => (
                    <button
                      type="button"
                      key={item.key}
                      onClick={() =>
                        navigate(item.path)
                      }
                    >
                      <span>
                        {item.icon}
                      </span>

                      <div>
                        <strong>
                          Manage {item.label}
                        </strong>

                        <p>
                          Add, edit and manage{" "}
                          {item.label.toLowerCase()}.
                        </p>
                      </div>

                      <b>→</b>
                    </button>
                  ))}

              </div>

            </section>
          </>
        )}


        {!isDashboard && (
          <Outlet />
        )}

      </section>

    </main>
  );
}

export default AdminDashboard;