import {
  useEffect,
  useState,
} from "react";

import "../AdminProducts/AdminProducts.css";

const API = `${import.meta.env.VITE_API_URL}/api/admin/content`;

const emptyForm = {
  title: "",
  description: "",
  category: "",
  is_active: true,
};

function AdminGallery() {
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
        `${API}/gallery`,
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
            "Unable to load gallery"
        );
      }

      setItems(
        data.gallery || []
      );

    } catch (err) {
      console.error(
        "Load gallery error:",
        err
      );
    }
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

    if (
      !editingId &&
      !imageFile
    ) {
      setError(
        "Please choose a gallery image."
      );

      return;
    }

    setLoading(true);

    try {
      const formData =
        new FormData();

      formData.append(
        "title",
        form.title
      );

      formData.append(
        "category",
        form.category
      );

      formData.append(
        "description",
        form.description
      );

      formData.append(
        "is_active",
        String(
          form.is_active
        )
      );

      if (imageFile) {
        formData.append(
          "gallery_image",
          imageFile
        );
      }

      const response =
        await fetch(
          editingId
            ? `${API}/gallery/${editingId}`
            : `${API}/gallery`,
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
            "Unable to save gallery item"
        );
      }

      setMessage(
        editingId
          ? "Gallery item updated successfully"
          : "Gallery item created successfully"
      );

      setForm(emptyForm);
      setImageFile(null);
      setExistingImage("");
      setEditingId(null);

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
      title:
        item.title || "",

      description:
        item.description || "",

      category:
        item.category || "",

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
        "Delete this gallery item?"
      )
    ) {
      return;
    }

    setMessage("");
    setError("");

    try {
      const response =
        await fetch(
          `${API}/gallery/${id}`,
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
            "Unable to delete gallery item"
        );
      }

      setMessage(
        "Gallery item deleted successfully"
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
              GALLERY MANAGEMENT
            </span>

            <h2>
              {editingId
                ? "Edit Gallery Item"
                : "Add Gallery Item"}
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
              Title
            </label>

            <input
              name="title"
              value={
                form.title
              }
              onChange={
                handleChange
              }
              required
            />
          </div>

          <div>
            <label>
              Category
            </label>

            <input
              name="category"
              value={
                form.category
              }
              onChange={
                handleChange
              }
            />
          </div>

          <div className="full">
            <label>
              Gallery Image
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
                ? "Update Gallery Item"
                : "Save Gallery Item"}
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
              GALLERY
            </span>

            <h2>
              Gallery Entries
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
                  Title
                </th>

                <th>
                  Category
                </th>

                <th>
                  Image
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
                      {item.title}
                    </td>

                    <td>
                      {item.category}
                    </td>

                    <td>
                      {item.image
                        ? "Uploaded"
                        : "-"}
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
                  <td colSpan="5">
                    No gallery items added yet.
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

export default AdminGallery;