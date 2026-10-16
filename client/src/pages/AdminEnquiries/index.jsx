import {
  useEffect,
  useState,
} from "react";

import "../AdminProducts/AdminProducts.css";

const API =
  "http://localhost:5000/api/admin/content";

function AdminEnquiries() {
  const [items, setItems] =
    useState([]);

  const token =
    localStorage.getItem(
      "qes_admin_token"
    );

  useEffect(() => {
    loadItems();
  }, []);

  async function loadItems() {
    const response = await fetch(
      `${API}/enquiries`,
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
      setItems(data.enquiries);
    }
  }

  async function changeStatus(
    id,
    status
  ) {
    await fetch(
      `${API}/enquiries/${id}/status`,
      {
        method: "PATCH",

        headers: {
          "Content-Type":
            "application/json",

          Authorization:
            `Bearer ${token}`,
        },

        body:
          JSON.stringify({
            status,
          }),
      }
    );

    loadItems();
  }

  async function remove(id) {
    if (
      !window.confirm(
        "Delete this enquiry?"
      )
    ) return;

    await fetch(
      `${API}/enquiries/${id}`,
      {
        method: "DELETE",

        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );

    loadItems();
  }

  return (
    <section className="admin-crud-page">

      <div className="admin-crud-card">

        <div className="admin-crud-heading">

          <div>
            <span>
              CONTACT MESSAGES
            </span>

            <h2>
              Customer Enquiries
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
                <th>Name</th>
                <th>Contact</th>
                <th>Message</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {items.map((item) => (
                <tr key={item.id}>

                  <td>
                    <strong>
                      {item.name}
                    </strong>

                    <small>
                      {item.company}
                    </small>
                  </td>

                  <td>
                    {item.email}

                    <small>
                      {item.phone}
                    </small>
                  </td>

                  <td>
                    {item.message}
                  </td>

                  <td>
                    <select
                      value={
                        item.status
                      }
                      onChange={(e) =>
                        changeStatus(
                          item.id,
                          e.target.value
                        )
                      }
                    >
                      <option value="new">
                        New
                      </option>

                      <option value="contacted">
                        Contacted
                      </option>

                      <option value="closed">
                        Closed
                      </option>
                    </select>
                  </td>

                  <td>
                    <div className="admin-row-actions">

                      <button
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

              {!items.length && (
                <tr>
                  <td colSpan="5">
                    No enquiries yet.
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

export default AdminEnquiries;