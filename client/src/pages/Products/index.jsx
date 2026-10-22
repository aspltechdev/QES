import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import ProductDetails from "../ProductDetails";

import "./Products.css";

import getImageUrl from "../../utils/imageUrl";


const API = `${import.meta.env.VITE_API_URL}/api/products`;



function ProductsPage() {

  const [
    databaseProducts,
    setDatabaseProducts,
  ] = useState([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState("");


  useEffect(() => {

    loadProducts();

  }, []);


  async function loadProducts() {

    try {

      setLoading(true);

      setError("");


      const response =
        await fetch(API);


      const data =
        await response.json();


      if (
        !response.ok ||
        !data.success
      ) {

        throw new Error(
          data.message ||
          "Unable to load products"
        );

      }


      setDatabaseProducts(
        data.products || []
      );

    } catch (error) {

      console.error(
        "Public products error:",
        error
      );

      setError(
        error.message
      );

    } finally {

      setLoading(false);

    }

  }


  return (

    <main className="all-products-page">


      {/* =====================================================
          EXISTING PRODUCT CATEGORY 1
      ===================================================== */}

      <ProductDetails
        selectedId="laser-marking-systems"
      />


      {/* =====================================================
          EXISTING PRODUCT CATEGORY 2
      ===================================================== */}

      <ProductDetails
        selectedId="dot-peen-marking"
      />


      {/* =====================================================
          DATABASE PRODUCTS
      ===================================================== */}

      <section className="database-products-section">

        <div className="database-products-container">


          <div className="database-products-heading">

            <span>
              OUR PRODUCTS
            </span>

            <h2>
              Latest Product Solutions
            </h2>

            <p>
              Explore products added and managed
              through the QES administration
              system.
            </p>

          </div>


          {/* LOADING */}

          {loading && (

            <div className="database-products-message">

              Loading products...

            </div>

          )}


          {/* ERROR */}

          {!loading && error && (

            <div className="database-products-error">

              {error}

            </div>

          )}


          {/* EMPTY */}

          {!loading &&
            !error &&
            databaseProducts.length === 0 && (

              <div className="database-products-message">

                No additional products available
                at the moment.

              </div>

            )}


          {/* PRODUCT CARDS */}

          {!loading &&
            !error &&
            databaseProducts.length > 0 && (

              <div className="database-products-grid">

                {databaseProducts.map(
                  (product) => (

                    <article
                      className="database-product-card"
                      key={product.id}
                    >


                      {/* IMAGE */}

                      <div className="database-product-image">

                        {product.image ? (

                          <img
                            src={getImageUrl(
                              product.image
                            )}
                            alt={
                              product.name
                            }
                            onError={(event) => {
                              console.error(
                                "Product image failed:",
                                getImageUrl(
                                  product.image
                                )
                              );

                              event.currentTarget.style.display =
                                "none";
                            }}
                          />

                        ) : (

                          <div className="database-product-no-image">

                            QES

                          </div>

                        )}

                      </div>


                      {/* CONTENT */}

                      <div className="database-product-content">


                        {product.category && (

                          <span className="database-product-category">

                            {product.category}

                          </span>

                        )}


                        <h3>
                          {product.name}
                        </h3>


                        <p>

                          {
                            product.short_description ||
                            product.description ||
                            "Industrial marking solution from QES."
                          }

                        </p>


                        {/* FEATURES */}

                        {Array.isArray(
                          product.features
                        ) &&
                          product.features.length >
                            0 && (

                            <div className="database-product-features">

                              {product.features
                                .slice(0, 4)
                                .map(
                                  (
                                    feature,
                                    index
                                  ) => (

                                    <span
                                      key={`${feature}-${index}`}
                                    >

                                      <b>
                                        ✓
                                      </b>

                                      {feature}

                                    </span>

                                  )
                                )}

                            </div>

                          )}


                        <Link
                          to={`/products/database/${product.slug}`}
                          className="database-product-btn"
                        >

                          View Details

                          <span>
                            →
                          </span>

                        </Link>

                      </div>

                    </article>

                  )
                )}

              </div>

            )}

        </div>

      </section>

    </main>

  );

}


export default ProductsPage;