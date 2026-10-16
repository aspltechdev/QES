import {
  useEffect,
  useState,
} from "react";

import "../AdminProducts/AdminProducts.css";

const API =
  "http://localhost:5000/api/admin/content";

const emptyForm = {
  name: "",
  slug: "",
  title: "",
  description: "",
  applications: "",
  is_active: true,
};

function AdminIndustries() {
  const [items, setItems] =
    useState([]);

  const [form, setForm] =
    useState(emptyForm);

  const [imageFile, setImageFile] =
    useState(null);

  const [existingImage, setExistingImage] =
    useState("");

  const [editingId, setEditingId] =
    useState(null);

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const token =
    localStorage.getItem(
      "qes_admin_token"
    );

  useEffect(() => {
    loadItems();
  }, []);

  async function loadItems() {
    try {
      const response = await fetch(
        `${API}/industries`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      const data =
        await response.json();

      if (
        !response.ok ||
        !data.success
      ) {
        throw new Error(
          data.message ||
            "Unable to load industries"
        );
      }

      setItems(
        data.industries || []
      );
    } catch (err) {
      console.error(
        "Load industries error:",
        err
      );
    }
  }

  function slugify(value) {
    return value
      .toLowerCase()
      .trim()
      .replace(
        /[^a-z0-9]+/g,
        "-"
      )
      .replace(
        /^-|-$/g,
        ""
      );
  }

  function handleChange(event) {
    const {
      name,
      value,
      type,
      checked,
    } = event.target;

    setForm((current) => ({
      ...current,

      [name]:
        type === "checkbox"
          ? checked
          : value,

      ...(name === "name" &&
      !editingId
        ? {
            slug:
              slugify(value),
          }
        : {}),
    }));
  }

  function handleImageChange(
    event
  ) {
    const file =
      event.target.files?.[0] ||
      null;

    setImageFile(file);
  }

  async function save(event) {
    event.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);

    try {
      const formData =
        new FormData();

      formData.append(
        "name",
        form.name
      );

      formData.append(
        "slug",
        form.slug
      );

      formData.append(
        "title",
        form.title
      );

      formData.append(
        "description",
        form.description
      );

      const applications =
        form.applications
          .split(",")
          .map((item) =>
            item.trim()
          )
          .filter(Boolean);

      formData.append(
        "applications",
        JSON.stringify(
          applications
        )
      );

      formData.append(
        "is_active",
        String(
          form.is_active
        )
      );

      if (imageFile) {
        formData.append(
          "industry_image",
          imageFile
        );
      }

      const response =
        await fetch(
          editingId
            ? `${API}/industries/${editingId}`
            : `${API}/industries`,
          {
            method:
              editingId
                ? "PUT"
                : "POST",

            headers: {
              Authorization:
                `Bearer ${token}`,
            },

            body: formData,
          }
        );

      const data =
        await response.json();

      if (
        !response.ok ||
        !data.success
      ) {
        throw new Error(
          data.message ||
            "Unable to save industry"
        );
      }

      setMessage(
        editingId
          ? "Industry updated successfully"
          : "Industry added successfully"
      );

      setEditingId(null);
      setForm(emptyForm);
      setImageFile(null);
      setExistingImage("");

      await loadItems();

    } catch (err) {
      setError(
        err.message
      );

    } finally {
      setLoading(false);
    }
  }

  function edit(item) {
    setMessage("");
    setError("");

    setEditingId(
      item.id
    );

    setForm({
      name:
        item.name || "",

      slug:
        item.slug || "",

      title:
        item.title || "",

      description:
        item.description || "",

      applications:
        Array.isArray(
          item.applications
        )
          ? item.applications.join(
              ", "
            )
          : "",

      is_active:
        item.is_active ?? true,
    });

    setExistingImage(
      item.image || ""
    );

    setImageFile(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function cancelEdit() {
    setEditingId(null);
    setForm(emptyForm);
    setImageFile(null);
    setExistingImage("");
    setMessage("");
    setError("");
  }

  async function remove(id) {
    if (
      !window.confirm(
        "Delete this industry?"
      )
    ) {
      return;
    }

    setMessage("");
    setError("");

    try {
      const response =
        await fetch(
          `${API}/industries/${id}`,
          {
            method:
              "DELETE",

            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

      const data =
        await response.json();

      if (
        !response.ok ||
        !data.success
      ) {
        throw new Error(
          data.message ||
            "Unable to delete industry"
        );
      }

      setMessage(
        "Industry deleted successfully"
      );

      await loadItems();

    } catch (err) {
      setError(
        err.message
      );
    }
  }

  return (
    <section className="admin-crud-page">

      <div className="admin-crud-card">

        <div className="admin-crud-heading">
          <div>
            <span>
              INDUSTRY MANAGEMENT
            </span>

            <h2>
              {editingId
                ? "Edit Industry"
                : "Add Industry"}
            </h2>
          </div>
        </div>

        {message && (
          <div className="admin-crud-message">
            {message}
          </div>
        )}

        {error && (
          <div
            className="admin-crud-message"
            style={{
              background:
                "#fef2f2",
              color:
                "#b91c1c",
              border:
                "1px solid #fecaca",
            }}
          >
            {error}
          </div>
        )}

        <form
          className="admin-crud-form"
          onSubmit={save}
        >

          <div>
            <label>
              Name
            </label>

            <input
              name="name"
              value={form.name}
              onChange={
                handleChange
              }
              required
            />
          </div>

          <div>
            <label>
              Slug
            </label>

            <input
              name="slug"
              value={form.slug}
              onChange={
                handleChange
              }
              required
            />
          </div>

          <div className="full">
            <label>
              Title
            </label>

            <input
              name="title"
              value={form.title}
              onChange={
                handleChange
              }
            />
          </div>

          <div className="full">
            <label>
              Description
            </label>

            <textarea
              name="description"
              value={
                form.description
              }
              onChange={
                handleChange
              }
            />
          </div>

          <div className="full">
            <label>
              Industry Image
            </label>

            <input
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif"
              onChange={
                handleImageChange
              }
              required={
                !editingId
              }
            />

            {editingId &&
              existingImage && (
                <p
                  style={{
                    marginTop:
                      "8px",
                    fontSize:
                      "12px",
                    color:
                      "#64748b",
                  }}
                >
                  Current image:
                  {" "}
                  {existingImage}
                </p>
              )}
          </div>

          <div className="full">
            <label>
              Applications
            </label>

            <input
              name="applications"
              value={
                form.applications
              }
              onChange={
                handleChange
              }
              placeholder="Automotive, Aerospace, Engineering"
            />
          </div>

          <label className="admin-checkbox">

            <input
              type="checkbox"
              name="is_active"
              checked={
                form.is_active
              }
              onChange={
                handleChange
              }
            />

            Active

          </label>

          <div className="admin-form-actions">

            <button
              type="submit"
              className="admin-primary-btn"
              disabled={
                loading
              }
            >
              {loading
                ? "Saving..."
                : editingId
                ? "Update Industry"
                : "Add Industry"}
            </button>

            {editingId && (
              <button
                type="button"
                className="admin-secondary-btn"
                onClick={
                  cancelEdit
                }
              >
                Cancel
              </button>
            )}

          </div>

        </form>

      </div>

      <div className="admin-crud-card">

        <div className="admin-crud-heading">
          <div>
            <span>
              INDUSTRIES
            </span>

            <h2>
              Industry Entries
            </h2>
          </div>

          <strong>
            {items.length}
          </strong>
        </div>

        <div className="admin-table-wrap">

          <table className="admin-table">

            <thead>
              <tr>
                <th>
                  Name
                </th>

                <th>
                  Title
                </th>

                <th>
                  Status
                </th>

                <th>
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>

              {items.map(
                (item) => (
                  <tr
                    key={
                      item.id
                    }
                  >

                    <td>
                      {item.name}
                    </td>

                    <td>
                      {item.title}
                    </td>

                    <td>
                      <span
                        className={
                          item.is_active
                            ? "status-active"
                            : "status-inactive"
                        }
                      >
                        {item.is_active
                          ? "Active"
                          : "Inactive"}
                      </span>
                    </td>

                    <td>
                      <div className="admin-row-actions">

                        <button
                          type="button"
                          onClick={() =>
                            edit(
                              item
                            )
                          }
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          className="delete"
                          onClick={() =>
                            remove(
                              item.id
                            )
                          }
                        >
                          Delete
                        </button>

                      </div>
                    </td>

                  </tr>
                )
              )}

              {!items.length && (
                <tr>
                  <td colSpan="4">
                    No industries added yet.
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}

export default AdminIndustries;