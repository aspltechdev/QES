import {
  useEffect,
  useState,
} from "react";

import "./AdminProducts.css";

const API =
  "http://localhost:5000/api/admin/content";

const SERVER =
  "http://localhost:5000";


const productSections = [
  {
    value: "laser-marking-systems",
    label: "Conventional Marking Systems",
  },
  {
    value: "dot-peen-marking",
    label: "Pin (Dot Peen) Marking Machines",
  },
  {
    value: "laser-marking-machines",
    label: "Laser Marking Machines",
  },
];


const emptyForm = {
  name: "",
  slug: "",
  category: "",
  short_description: "",
  description: "",
  features: "",
  is_active: true,
};


function AdminProducts() {

  const [products, setProducts] =
    useState([]);

  const [form, setForm] =
    useState(emptyForm);

  const [productImage, setProductImage] =
    useState(null);

  const [heroImage, setHeroImage] =
    useState(null);

  const [existingProductImage, setExistingProductImage] =
    useState("");

  const [existingHeroImage, setExistingHeroImage] =
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
    loadProducts();
  }, []);


  /* =====================================================
     LOAD PRODUCTS
  ===================================================== */

  async function loadProducts() {

    try {

      const response = await fetch(
        `${API}/products`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      const data =
        await response.json();


      if (!response.ok) {

        throw new Error(
          data.message ||
          "Unable to load products"
        );

      }


      if (data.success) {

        setProducts(
          data.products || []
        );

      }

    } catch (err) {

      console.error(
        "Load products error:",
        err
      );

    }

  }


  /* =====================================================
     SLUG
  ===================================================== */

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


  /* =====================================================
     NORMAL INPUT CHANGE
  ===================================================== */

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


  /* =====================================================
     PRODUCT IMAGE
  ===================================================== */

  function handleProductImageChange(
    event
  ) {

    const file =
      event.target.files?.[0];

    if (file) {
      setProductImage(file);
    }

  }


  /* =====================================================
     HERO IMAGE
  ===================================================== */

  function handleHeroImageChange(
    event
  ) {

    const file =
      event.target.files?.[0];

    if (file) {
      setHeroImage(file);
    }

  }


  /* =====================================================
     SAVE PRODUCT
  ===================================================== */

  async function handleSubmit(
    event
  ) {

    event.preventDefault();

    setMessage("");
    setError("");


    if (!form.category) {

      setError(
        "Please select the product section."
      );

      return;

    }


    setLoading(true);


    try {

      /*
        IMPORTANT:
        We use FormData because images
        are being uploaded.
      */

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
        "category",
        form.category
      );

      formData.append(
        "short_description",
        form.short_description
      );

      formData.append(
        "description",
        form.description
      );


      /*
        Backend expects features
        as JSON string.
      */

      const featuresArray =
        form.features
          .split(",")
          .map((item) =>
            item.trim()
          )
          .filter(Boolean);


      formData.append(
        "features",
        JSON.stringify(
          featuresArray
        )
      );


      formData.append(
        "is_active",
        String(
          form.is_active
        )
      );


      /*
        VERY IMPORTANT:

        These names MUST match
        adminContentRoutes.js

        product_image
        hero_image
      */

      if (productImage) {

        formData.append(
          "product_image",
          productImage
        );

      }


      if (heroImage) {

        formData.append(
          "hero_image",
          heroImage
        );

      }


      const url =
        editingId
          ? `${API}/products/${editingId}`
          : `${API}/products`;


      const response =
        await fetch(
          url,
          {

            method:
              editingId
                ? "PUT"
                : "POST",

            /*
              DO NOT put:
              Content-Type: application/json

              Browser automatically creates
              multipart/form-data boundary.
            */

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
          "Something went wrong"
        );

      }


      setMessage(
        editingId
          ? "Product updated successfully"
          : "Product created successfully"
      );


      /*
        RESET FORM
      */

      setForm(emptyForm);

      setProductImage(null);
      setHeroImage(null);

      setExistingProductImage("");
      setExistingHeroImage("");

      setEditingId(null);


      /*
        Reset actual file inputs
      */

      const productInput =
        document.getElementById(
          "product-image-input"
        );

      const heroInput =
        document.getElementById(
          "hero-image-input"
        );


      if (productInput) {
        productInput.value = "";
      }

      if (heroInput) {
        heroInput.value = "";
      }


      await loadProducts();


    } catch (err) {

      console.error(
        "Save product error:",
        err
      );

      setError(
        err.message
      );


    } finally {

      setLoading(false);

    }

  }


  /* =====================================================
     EDIT PRODUCT
  ===================================================== */

  function editProduct(product) {

    setMessage("");
    setError("");

    setEditingId(
      product.id
    );


    setForm({

      name:
        product.name || "",

      slug:
        product.slug || "",

      category:
        product.category || "",

      short_description:
        product.short_description ||
        "",

      description:
        product.description || "",

      features:
        Array.isArray(
          product.features
        )
          ? product.features.join(
              ", "
            )
          : "",

      is_active:
        product.is_active ?? true,

    });


    /*
      Store old image paths.

      We DO NOT put old image inside
      file input because browsers
      do not allow that.
    */

    setExistingProductImage(
      product.image || ""
    );

    setExistingHeroImage(
      product.hero_image || ""
    );


    /*
      New images are empty until
      admin chooses another file.
    */

    setProductImage(null);
    setHeroImage(null);


    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  }


  /* =====================================================
     DELETE PRODUCT
  ===================================================== */

  async function deleteProduct(id) {

    const confirmed =
      window.confirm(
        "Delete this product?"
      );


    if (!confirmed) {
      return;
    }


    setMessage("");
    setError("");


    try {

      const response =
        await fetch(
          `${API}/products/${id}`,
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


      if (
        !response.ok ||
        !data.success
      ) {

        throw new Error(
          data.message ||
          "Unable to delete product"
        );

      }


      setMessage(
        "Product deleted successfully"
      );


      await loadProducts();


    } catch (err) {

      setError(
        err.message
      );

    }

  }


  /* =====================================================
     CANCEL EDIT
  ===================================================== */

  function cancelEdit() {

    setEditingId(null);

    setForm(emptyForm);

    setProductImage(null);
    setHeroImage(null);

    setExistingProductImage("");
    setExistingHeroImage("");

    setMessage("");
    setError("");


    const productInput =
      document.getElementById(
        "product-image-input"
      );

    const heroInput =
      document.getElementById(
        "hero-image-input"
      );


    if (productInput) {
      productInput.value = "";
    }

    if (heroInput) {
      heroInput.value = "";
    }

  }


  /* =====================================================
     SECTION LABEL
  ===================================================== */

  function getSectionLabel(
    category
  ) {

    const section =
      productSections.find(
        (item) =>
          item.value === category
      );


    return (
      section?.label ||
      category ||
      "-"
    );

  }


  /* =====================================================
     IMAGE URL HELPER
  ===================================================== */

  function getImageUrl(
    image
  ) {

    if (!image) {
      return "";
    }


    if (
      image.startsWith(
        "http://"
      ) ||
      image.startsWith(
        "https://"
      )
    ) {

      return image;

    }


    return `${SERVER}${image}`;

  }


  return (

    <section className="admin-crud-page">


      {/* =====================================
          ADD / EDIT PRODUCT
      ===================================== */}

      <div className="admin-crud-card">


        <div className="admin-crud-heading">

          <div>

            <span>
              PRODUCT MANAGEMENT
            </span>

            <h2>

              {editingId
                ? "Edit Product"
                : "Add Product"}

            </h2>

          </div>

        </div>


        {/* SUCCESS */}

        {message && (

          <div className="admin-crud-message">
            {message}
          </div>

        )}


        {/* ERROR */}

        {error && (

          <div
            className="admin-crud-message"
            style={{
              background: "#fef2f2",
              color: "#b91c1c",
              border:
                "1px solid #fecaca",
            }}
          >

            {error}

          </div>

        )}


        <form
          className="admin-crud-form"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >


          {/* PRODUCT NAME */}

          <div>

            <label>
              Product Name
            </label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter product name"
              required
            />

          </div>


          {/* SLUG */}

          <div>

            <label>
              Slug
            </label>

            <input
              name="slug"
              value={form.slug}
              onChange={handleChange}
              placeholder="product-slug"
              required
            />

          </div>


          {/* PRODUCT SECTION */}

          <div className="full">

            <label>
              Product Section *
            </label>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                minHeight: "52px",
                padding: "0 14px",
                border:
                  "1px solid #d1d5db",
                borderRadius: "7px",
                background: "#ffffff",
                font: "inherit",
              }}
            >

              <option value="">
                Select where this product should appear
              </option>


              {productSections.map(
                (section) => (

                  <option
                    key={
                      section.value
                    }
                    value={
                      section.value
                    }
                  >

                    {
                      section.label
                    }

                  </option>

                )
              )}

            </select>

          </div>


          {/* PRODUCT IMAGE UPLOAD */}

          <div>

            <label>
              Product Image
            </label>

            <input
              id="product-image-input"
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif"
              onChange={
                handleProductImageChange
              }
            />


            {productImage && (

              <small
                style={{
                  display: "block",
                  marginTop: "8px",
                }}
              >
                Selected:{" "}
                {productImage.name}
              </small>

            )}


            {editingId &&
              existingProductImage &&
              !productImage && (

              <div
                style={{
                  marginTop: "12px",
                }}
              >

                <small>
                  Current product image
                </small>

                <img
                  src={getImageUrl(
                    existingProductImage
                  )}
                  alt="Current product"
                  style={{
                    width: "100px",
                    height: "80px",
                    objectFit: "cover",
                    marginTop: "7px",
                    borderRadius: "6px",
                  }}
                />

              </div>

            )}

          </div>


          {/* HERO IMAGE UPLOAD */}

          <div>

            <label>
              Hero Image
            </label>

            <input
              id="hero-image-input"
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif"
              onChange={
                handleHeroImageChange
              }
            />


            {heroImage && (

              <small
                style={{
                  display: "block",
                  marginTop: "8px",
                }}
              >
                Selected:{" "}
                {heroImage.name}
              </small>

            )}


            {editingId &&
              existingHeroImage &&
              !heroImage && (

              <div
                style={{
                  marginTop: "12px",
                }}
              >

                <small>
                  Current hero image
                </small>

                <img
                  src={getImageUrl(
                    existingHeroImage
                  )}
                  alt="Current hero"
                  style={{
                    width: "100px",
                    height: "80px",
                    objectFit: "cover",
                    marginTop: "7px",
                    borderRadius: "6px",
                  }}
                />

              </div>

            )}

          </div>


          {/* SHORT DESCRIPTION */}

          <div className="full">

            <label>
              Short Description
            </label>

            <textarea
              name="short_description"
              value={
                form.short_description
              }
              onChange={handleChange}
              placeholder="Short description shown on the product card"
            />

          </div>


          {/* FULL DESCRIPTION */}

          <div className="full">

            <label>
              Full Description
            </label>

            <textarea
              name="description"
              value={
                form.description
              }
              onChange={handleChange}
              placeholder="Complete product description"
            />

          </div>


          {/* FEATURES */}

          <div className="full">

            <label>
              Features
            </label>

            <input
              name="features"
              value={form.features}
              onChange={handleChange}
              placeholder="High precision, Permanent marking, Industrial grade"
            />

          </div>


          {/* ACTIVE */}

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


          {/* BUTTONS */}

          <div className="admin-form-actions">

            <button
              type="submit"
              className="admin-primary-btn"
              disabled={loading}
            >

              {loading
                ? "Saving..."
                : editingId
                ? "Update Product"
                : "Add Product"}

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


      {/* =====================================
          DATABASE PRODUCTS
      ===================================== */}

      <div className="admin-crud-card">


        <div className="admin-crud-heading">

          <div>

            <span>
              DATABASE PRODUCTS
            </span>

            <h2>
              Products
            </h2>

          </div>


          <strong>
            {products.length}
          </strong>

        </div>


        <div className="admin-table-wrap">

          <table className="admin-table">

            <thead>

              <tr>

                <th>
                  Image
                </th>

                <th>
                  Name
                </th>

                <th>
                  Product Section
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


              {products.map(
                (product) => (

                  <tr
                    key={product.id}
                  >


                    {/* IMAGE */}

                    <td>

                      {product.image ? (

                        <img
                          src={getImageUrl(
                            product.image
                          )}
                          alt={
                            product.name
                          }
                          style={{
                            width: "60px",
                            height: "50px",
                            objectFit:
                              "cover",
                            borderRadius:
                              "5px",
                          }}
                        />

                      ) : (

                        <span>
                          No image
                        </span>

                      )}

                    </td>


                    {/* NAME */}

                    <td>

                      <strong>
                        {product.name}
                      </strong>

                      <small>
                        {product.slug}
                      </small>

                    </td>


                    {/* SECTION */}

                    <td>

                      {getSectionLabel(
                        product.category
                      )}

                    </td>


                    {/* STATUS */}

                    <td>

                      <span
                        className={
                          product.is_active
                            ? "status-active"
                            : "status-inactive"
                        }
                      >

                        {product.is_active
                          ? "Active"
                          : "Inactive"}

                      </span>

                    </td>


                    {/* ACTIONS */}

                    <td>

                      <div className="admin-row-actions">

                        <button
                          type="button"
                          onClick={() =>
                            editProduct(
                              product
                            )
                          }
                        >
                          Edit
                        </button>


                        <button
                          type="button"
                          className="delete"
                          onClick={() =>
                            deleteProduct(
                              product.id
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


              {!products.length && (

                <tr>

                  <td colSpan="5">
                    No products added yet.
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


export default AdminProducts;