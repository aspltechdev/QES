import {
  useEffect,
  useState,
} from "react";

import "../AdminProducts/AdminProducts.css";

const API = `${import.meta.env.VITE_API_URL}/api/admin/content`;

const emptyForm = {
  title: "",
  description: "",
  file: null,
  preview_image: "",
  resource_type: "",
  is_active: true,
};

function AdminDownloads() {
  const [items, setItems] =
    useState([]);

  const [form, setForm] =
    useState(emptyForm);

  const [editingId, setEditingId] =
    useState(null);

  const [saving, setSaving] =
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
        `${API}/downloads`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      const data =
        await response.json();

      if (data.success) {
        setItems(data.resources || []);
      }
    } catch (error) {
      console.error(
        "Load downloads error:",
        error
      );
    }
  }

  function handleChange(event) {
    const {
      name,
      value,
      type,
      checked,
      files,
    } = event.target;

    setForm((previous) => ({
      ...previous,

      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0] || null
          : value,
    }));
  }

  async function save(event) {
    event.preventDefault();

    if (!editingId && !form.file) {
      alert(
        "Please select a PDF or document."
      );
      return;
    }

    try {
      setSaving(true);

      const formData =
        new FormData();

      formData.append(
        "title",
        form.title
      );

      formData.append(
        "description",
        form.description
      );

      formData.append(
        "resource_type",
        form.resource_type
      );

      formData.append(
        "is_active",
        form.is_active
      );

      if (form.file) {
        formData.append(
          "file",
          form.file
        );
      }

      const response = await fetch(
        editingId
          ? `${API}/downloads/${editingId}`
          : `${API}/downloads`,
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

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Unable to save download"
        );
      }

      alert(
        editingId
          ? "Download updated successfully."
          : "Download uploaded successfully."
      );

      setForm(emptyForm);
      setEditingId(null);

      await loadItems();
    } catch (error) {
      console.error(
        "Save download error:",
        error
      );

      alert(
        error.message ||
          "Unable to save download."
      );
    } finally {
      setSaving(false);
    }
  }

  function edit(item) {
    setEditingId(item.id);

    setForm({
      title:
        item.title || "",

      description:
        item.description || "",

      file: null,

      preview_image:
        item.preview_image || "",

      resource_type:
        item.resource_type || "",

      is_active:
        item.is_active,
    });
  }

  async function remove(id) {
    if (
      !window.confirm(
        "Delete this download?"
      )
    ) {
      return;
    }

    try {
      const response =
        await fetch(
          `${API}/downloads/${id}`,
          {
            method: "DELETE",

            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

      const data =
        await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Unable to delete download"
        );
      }

      await loadItems();
    } catch (error) {
      console.error(
        "Delete download error:",
        error
      );

      alert(
        error.message ||
          "Unable to delete download."
      );
    }
  }

  function cancelEdit() {
    setEditingId(null);
    setForm(emptyForm);
  }

  return (
    <section className="admin-crud-page">

      <div className="admin-crud-card">

        <div className="admin-crud-heading">
          <div>
            <span>
              DOWNLOAD MANAGEMENT
            </span>

            <h2>
              {editingId
                ? "Edit Download"
                : "Add Download"}
            </h2>
          </div>
        </div>

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
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>
              Resource Type
            </label>

            <input
              name="resource_type"
              value={
                form.resource_type
              }
              onChange={handleChange}
              placeholder="Brochure"
            />
          </div>

          {/* =========================
              DOCUMENT UPLOAD
          ========================= */}

          <div className="full">

            <label>
              Upload PDF / Document
            </label>

            <input
              type="file"
              name="file"
              accept="
                .pdf,
                .doc,
                .docx,
                application/pdf,
                application/msword,
                application/vnd.openxmlformats-officedocument.wordprocessingml.document
              "
              onChange={handleChange}
              required={!editingId}
            />

            {form.file && (
              <small>
                Selected file:{" "}
                {form.file.name}
              </small>
            )}

            {editingId && (
              <small>
                Leave empty to keep the
                existing document.
              </small>
            )}

          </div>

          <div className="full">

            <label>
              Preview Image
            </label>

            <input
              name="preview_image"
              value={
                form.preview_image
              }
              onChange={handleChange}
              placeholder="Preview image URL"
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
              onChange={handleChange}
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
              disabled={saving}
            >
              {saving
                ? "Uploading..."
                : editingId
                ? "Update Download"
                : "Save Download"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={cancelEdit}
              >
                Cancel
              </button>
            )}

          </div>

        </form>

      </div>

      <div className="admin-crud-card">

        <div className="admin-table-wrap">

          <table className="admin-table">

            <thead>
              <tr>
                <th>Title</th>
                <th>Type</th>
                <th>File</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {items.map((item) => (
                <tr key={item.id}>

                  <td>
                    {item.title}
                  </td>

                  <td>
                    {item.resource_type}
                  </td>

                  <td>
                    {item.file_url
                      ? item.file_url
                          .split("/")
                          .pop()
                      : "No file"}
                  </td>

                  <td>

                    <div className="admin-row-actions">

                      <button
                        type="button"
                        onClick={() =>
                          edit(item)
                        }
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        className="delete"
                        onClick={() =>
                          remove(item.id)
                        }
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}

export default AdminDownloads;