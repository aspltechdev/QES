import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("qes_admin_token");

    if (token) {
      navigate("/admin");
    }
  }, [navigate]);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: form.email,
            password: form.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem(
        "qes_admin_token",
        data.token
      );

      localStorage.setItem(
        "qes_admin_user",
        JSON.stringify(data.admin)
      );

      navigate("/admin");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="admin-login-page">
      <section className="admin-login-panel">

        <div className="admin-login-brand">
          <div className="admin-login-logo">
            QES
          </div>

          <span>ADMINISTRATION</span>

          <h1>
            Manage your
            <br />
            QES website
          </h1>

          <p>
            Sign in to manage products, industries,
            gallery items, downloads and enquiries.
          </p>
        </div>


        <div className="admin-login-card">
          <div className="admin-login-heading">
            <span>ADMIN PORTAL</span>
            <h2>Welcome Back</h2>
            <p>
              Enter your administrator credentials.
            </p>
          </div>

          {error && (
            <div className="admin-login-error">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="admin-login-field">
              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="admin@qes.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="admin-login-field">
              <label htmlFor="password">
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                autoComplete="current-password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Signing In..."
                : "Sign In"}
            </button>

          </form>
        </div>

      </section>
    </main>
  );
}

export default AdminLogin;