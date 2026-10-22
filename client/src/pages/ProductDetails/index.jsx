import {
  Link,
  useParams,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";
import "./ProductDetails.css";

import product1Hero from "../../assets/product1hero.png";
import product2Hero from "../../assets/producthero2.png";
import product3Hero from "../../assets/producthero3.png";
import getImageUrl from "../../utils/imageUrl";
import image20 from "../../assets/20.png";
import image21 from "../../assets/21.png";
import image22 from "../../assets/22.png";
import image23 from "../../assets/23.png";
import image24 from "../../assets/24.png";
import image25 from "../../assets/25.png";
import image26 from "../../assets/26.png";
import image27 from "../../assets/27.png";
import image28 from "../../assets/28.png";
import image30 from "../../assets/30.png";
import image31 from "../../assets/31.png";
import image32 from "../../assets/32.png";
import image33 from "../../assets/33.png";
import image34 from "../../assets/34.png";
import image35 from "../../assets/35.png";
import image36 from "../../assets/36.png";
import image37 from "../../assets/37.png";
import image38 from "../../assets/38.png";

const productPages = {

  /* =========================================================
     PRODUCT 1
     CONVENTIONAL MARKING SYSTEMS
  ========================================================= */

  "conventional-marking-systems": {
    heroImage: product1Hero,

    eyebrow: "CONVENTIONAL MARKING SYSTEMS",

    titleLine1: "RELIABLE SOLUTIONS FOR PERMANENT",
    titleLine2: "INDUSTRIAL MARKING",

    features: [
      {
        icon: "♙",
        title: "PERMANENT MARKING",
        text: "Long-lasting industrial identification.",
      },
      {
        icon: "◎",
        title: "PRECISION ENGINEERING",
        text: "Accurate and consistent marking performance.",
      },
      {
        icon: "◇",
        title: "INDUSTRIAL DURABILITY",
        text: "Built for demanding manufacturing environments.",
      },
      {
        icon: "⚙",
        title: "CUSTOM SOLUTIONS",
        text: "Designed to meet unique application requirements.",
      },
    ],

    sectionTitleStart: "Precision Tools For",
    sectionTitleAccent: "Every Application",

    sectionDescription:
      "Crafted to deliver permanent marking across a wide range of industrial environments.",

    ctaTitle:
      "Ready to Find the Right Marking Solution?",

    ctaText:
      "Whether you're looking for conventional marking systems, pin (dot peen) marking machines, or laser marking solutions, our experts are ready to help you choose the ideal solution for your application.",

    products: [
      {
        title: "HAND HELD PUNCHES",
        slug: "hand-held-punches",

        description:
          "Precision-crafted punches for permanent industrial marking.",

        image:
          "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=85",

        features: [
          "Manual Operation",
          "Permanent Marking",
          "Hardened Steel",
          "Industrial Grade",
        ],
      },

      {
        title: "IMPACT PRESS",
        slug: "impact-press",

        description:
          "Reliable impact marking for consistent industrial identification.",

        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=85",

        features: [
          "High Precision",
          "Heavy-Duty Build",
          "Easy Operation",
          "Long Service Life",
        ],
      },

      {
        title: "INTERCHANGEABLE STEEL TYPES",
        slug: "interchangeable-steel-types",

        description:
          "Precision-crafted punches for permanent industrial marking.",

        image:
          "https://images.unsplash.com/photo-1565439396-43a7c52c6c10?auto=format&fit=crop&w=900&q=85",

        features: [
          "Manual Operation",
          "Permanent Marking",
          "Hardened Steel",
          "Industrial Grade",
        ],
      },

      {
        title: "LABEL MARKERS",
        slug: "label-markers",

        description:
          "Efficient marking solutions for labels and nameplates.",

        image:
          "https://images.unsplash.com/photo-1581092919535-7146d74e5f1f?auto=format&fit=crop&w=900&q=85",

        features: [
          "Clear Impressions",
          "Quick Setup",
          "Durable Construction",
          "Industrial Use",
        ],
      },

      {
        title: "ROLL MARKER",
        slug: "roll-marker",

        description:
          "Designed for continuous marking on flat and cylindrical surfaces.",

        image:
          "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=900&q=85",

        features: [
          "Continuous Marking",
          "Manual Operation",
          "Adjustable Design",
          "High Accuracy",
        ],
      },

      {
        title: "NUMERATOR",
        slug: "numerator",

        description:
          "Sequential numbering for permanent product identification.",

        image:
          "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=85",

        features: [
          "Sequential Numbering",
          "Precision Mechanism",
          "Easy Adjustment",
          "Long-Lasting",
        ],
      },

      {
        title: "ROTARY NUMERATOR",
        slug: "rotary-numerator",

        description:
          "Fast and reliable numbering for repetitive marking tasks.",

        image:
          "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85",

        features: [
          "Rotary Mechanism",
          "Sequential Marking",
          "Durable Build",
          "Smooth Operation",
        ],
      },

      {
        title: "STAMP MARKS",
        slug: "stamp-marks",

        description:
          "Custom marking stamps for logos, symbols, and identification.",

        image:
          "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=900&q=85",

        features: [
          "Permanent Impressions",
          "Custom Designs",
          "Hardened Steel",
          "Precision Finish",
        ],
      },

      {
        title: "SPECIAL TYPE PUNCHES",
        slug: "special-type-punches",

        description:
          "Custom-engineered punches for specialized marking applications.",

        image:
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=85",

        features: [
          "Custom Profiles",
          "High Precision",
          "Industrial Grade",
          "Made to Order",
        ],
      },
    ],
  },


  /* =========================================================
     PRODUCT 2
     PIN DOT PEEN
  ========================================================= */

  "dot-peen-marking": {
    heroImage: product2Hero,

    eyebrow: "PIN (DOT PEEN) MARKING MACHINES",

    titleLine1: "PRECISION DOT PEEN MARKING FOR",
    titleLine2: "COMPLETE TRACEABILITY",

    features: [
      {
        icon: "◎",
        title: "HIGH PRECISION",
        text: "Accurate and consistent marking performance.",
      },
      {
        icon: "♙",
        title: "PERMANENT TRACEABILITY",
        text: "Durable marking for reliable product identification.",
      },
      {
        icon: "▥",
        title: "INDUSTRIAL PERFORMANCE",
        text: "Built for demanding manufacturing environments.",
      },
      {
        icon: "⚙",
        title: "SMART INTEGRATION",
        text: "Seamlessly integrates with production systems.",
      },
    ],

    sectionTitleStart:
      "Precision Marking Solutions For",

    sectionTitleAccent:
      "Every Industry",

    sectionDescription:
      "Discover our range of pin (dot peen) marking machines engineered to deliver permanent identification, exceptional accuracy, and reliable performance across modern manufacturing environments.",

    ctaTitle:
      "Ready to Find the Right Marking Solution?",

    ctaText:
      "Our experts can help you select the right dot peen marking system based on your component size, marking requirements, production environment, and integration needs.",

    products: [
      {
    title: "BENCHMARK® 320",
    slug: "benchmark-320",

    description:
      "Compact bench-top marking machine designed for precision and repeatable industrial marking.",

    image: image30,

    features: [
      "High Precision",
      "Permanent Marking",
      "Compact Design",
      "Industrial Grade",
    ],
  },

  {
    title: "BENCHMARK® 460",
    slug: "benchmark-460",

    description:
      "Heavy-duty bench-top marking system for medium and large industrial components.",

    image: image31,

    features: [
      "Large Marking Area",
      "High-Speed Operation",
      "Durable Construction",
      "Production Ready",
    ],
  },

  {
    title: "PORTADOT® 60-30",
    slug: "portadot-60-30",

    description:
      "Portable marking machine designed for flexible on-site and workshop applications.",

    image: image32,

    features: [
      "Portable Design",
      "Lightweight",
      "Permanent Marking",
      "Easy Operation",
    ],
  },

  {
    title: "PORTADOT® 130-30",
    slug: "portadot-130-30",

    description:
      "Powerful portable marking solution for larger industrial parts and assemblies.",

    image: image33,

    features: [
      "Large Components",
      "Rugged Build",
      "High Precision",
      "Reliable Performance",
    ],
  },

  {
    title: "BENCHMARK XL",
    slug: "benchmark-xl",

    description:
      "Large-format marking machine for oversized industrial components.",

    image: image34,

    features: [
      "Extra Large Area",
      "High Accuracy",
      "Heavy-Duty",
      "Continuous Operation",
    ],
  },

  {
    title: "CUSTOM DOT PEEN SYSTEMS",
    slug: "custom-dot-peen-systems",

    description:
      "Tailor-made marking solutions designed for specialized industrial applications.",

    image: image35,

    features: [
      "Custom Designs",
      "Automation Ready",
      "Flexible Integration",
      "Industrial Grade",
    ],
  },
],
  },


  /* =========================================================
     PRODUCT 3
     LASER MARKING
  ========================================================= */

  "laser-marking-machines": {
    heroImage: product3Hero,

    eyebrow: "LASER MARKING MACHINES",

    titleLine1: "HIGH-SPEED LASER MARKING FOR",
    titleLine2: "PERMANENT IDENTIFICATION",

    features: [
      {
        icon: "◎",
        title: "HIGH-SPEED MARKING",
        text: "Fast and efficient marking performance.",
      },
      {
        icon: "♙",
        title: "PERMANENT PRECISION",
        text: "Sharp, accurate, and long-lasting results.",
      },
      {
        icon: "◇",
        title: "NON-CONTACT PROCESS",
        text: "Marks without damaging the material.",
      },
      {
        icon: "⚙",
        title: "SMART AUTOMATION",
        text: "Ready for modern production environments.",
      },
    ],

    sectionTitleStart: "Advanced",

    sectionTitleAccent:
      "Laser Marking Solutions",

    sectionDescription:
      "Explore our range of laser marking machines designed for high precision, permanent identification, and seamless industrial integration.",

    ctaTitle:
      "Need Help Choosing the Right Laser Marking Machine?",

    ctaText:
      "Our experts will help you select the ideal laser marking solution based on your material, production requirements, and applications.",

    products: [
      {
        title: "FIBER LASER MARKING MACHINE",
        slug: "fiber-laser-marking-machine",

        description:
          "High-speed laser marking solution for permanent metal identification.",

        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=85",

        features: [
          "High-Speed Marking",
          "Non-Contact Process",
          "High Precision",
          "Industrial Grade",
        ],
      },

      {
        title: "CO₂ LASER MARKING MACHINE",
        slug: "co2-laser-marking-machine",

        description:
          "Ideal for marking plastics, wood, acrylic, leather, and non-metal materials.",

        image:
          "https://images.unsplash.com/photo-1581092919535-7146d74e5f1f?auto=format&fit=crop&w=900&q=85",

        features: [
          "Clean Marking",
          "High Accuracy",
          "Non-Metal Materials",
          "Reliable Performance",
        ],
      },

      {
        title: "UV LASER MARKING MACHINE",
        slug: "uv-laser-marking-machine",

        description:
          "Designed for ultra-fine and high-precision marking on delicate materials.",

        image:
          "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=85",

        features: [
          "Ultra Fine Marking",
          "Heat-Free Process",
          "High Precision",
          "Premium Finish",
        ],
      },
    ],
  },
};


const conventionalProductImages = {
  "hand-held-punches": image20,
  "impact-press": image21,
  "interchangeable-steel-types": image22,
  "label-markers": image23,
  "roll-marker": image24,
  numerator: image25,
  "rotary-numerator": image26,
  "stamp-marks": image27,
  "special-type-punches": image28,
};


const dotPeenProductImages = {
  "benchmark-320": image30,
  "benchmark-460": image31,
  "portadot-60-30": image32,
  "portadot-130-30": image33,
  "benchmark-xl": image34,
  "custom-dot-peen-systems": image35,
};


const laserProductImages = {
  "fiber-laser-marking-machine": image36,
  "co2-laser-marking-machine": image37,
  "uv-laser-marking-machine": image38,
};


function ProductDetails() {
  const { id } = useParams();

  const [databaseProducts, setDatabaseProducts] =
    useState([]);

  const [loadingDatabaseProducts, setLoadingDatabaseProducts] =
    useState(true);

  const currentId =
    id || "conventional-marking-systems";

  const productPage =
    productPages[currentId];

  useEffect(() => {
    loadDatabaseProducts();
  }, []);

  async function loadDatabaseProducts() {
    try {
      /*
        This uses the public products endpoint.

        It must return:
        {
          success: true,
          products: [...]
        }
      */

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/products`
      );

      const data =
        await response.json();

      if (
        response.ok &&
        data.success
      ) {
        setDatabaseProducts(
          data.products || []
        );
      } else {
        console.error(
          "Unable to load database products:",
          data.message
        );
      }
    } catch (error) {
      console.error(
        "Public products error:",
        error
      );
    } finally {
      setLoadingDatabaseProducts(
        false
      );
    }
  }

  /*
    If someone enters an invalid product
    section URL, show a proper message.
  */

  if (!productPage) {
    return (
      <main className="product1-page">

        <section
          style={{
            minHeight: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent:
              "center",
            textAlign: "center",
            padding: "120px 20px",
          }}
        >
          <div>
            <h1>
              Product section not found
            </h1>

            <p>
              The requested product
              section does not exist.
            </p>

            <Link
              to="/products/conventional-marking-systems"
              style={{
                color: "#ff6259",
              }}
            >
              Back to Products
            </Link>
          </div>
        </section>

      </main>
    );
  }

  /*
    Only products assigned to THIS
    section are added here.

    Example:

    currentId =
      "dot-peen-marking"

    therefore only database products
    whose category is
      "dot-peen-marking"
    will appear.
  */

  /*
    ---------------------------------------------------------
    PRODUCT / DATABASE MERGE
    ---------------------------------------------------------

    The original 18 products are assigned to their section by
    the productPages object above, NOT by the database category.

    This prevents an old/wrong database category from moving a
    product into another section.

    If the same product exists in PostgreSQL, its database data
    is merged by SLUG and its detail button continues to use the
    database detail page.

    Truly new Admin-created products are appended only when
    their category belongs to the current section.
  */

  const categoryAliases = {
    "conventional-marking-systems": [
      "conventional-marking-systems",

      /*
        Compatibility with the old project data where the
        conventional section was incorrectly called
        "laser-marking-systems".
      */
      "laser-marking-systems",
    ],

    "dot-peen-marking": [
      "dot-peen-marking",
    ],

    "laser-marking-machines": [
      "laser-marking-machines",
    ],
  };


  const getLocalImage = (productSlug) => {
    if (
      currentId ===
      "conventional-marking-systems"
    ) {
      return (
        conventionalProductImages[
          productSlug
        ] || ""
      );
    }

    if (
      currentId ===
      "dot-peen-marking"
    ) {
      return (
        dotPeenProductImages[
          productSlug
        ] || ""
      );
    }

    if (
      currentId ===
      "laser-marking-machines"
    ) {
      return (
        laserProductImages[
          productSlug
        ] || ""
      );
    }

    return "";
  };


  /*
    Build the fixed products for the selected category first.
    Their membership is controlled by productPages[currentId].
  */

  const fixedProducts =
    (productPage.products || []).map(
      (staticProduct) => {
        const databaseProduct =
          databaseProducts.find(
            (item) =>
              item.slug ===
              staticProduct.slug
          );

        return {
          id:
            databaseProduct?.id ||
            staticProduct.slug,

          title:
            databaseProduct?.name ||
            staticProduct.title,

          slug:
            staticProduct.slug,

          description:
            databaseProduct?.short_description ||
            databaseProduct?.description ||
            staticProduct.description ||
            "",

          image:
  getImageUrl(
    databaseProduct?.image ||
    databaseProduct?.hero_image ||
    staticProduct.image ||
    ""
  ),

          features:
            Array.isArray(
              databaseProduct?.features
            ) &&
            databaseProduct.features.length >
              0
              ? databaseProduct.features
              : staticProduct.features || [],

          databaseProduct:
            Boolean(databaseProduct),
        };
      }
    );


  const fixedSlugs =
    new Set(
      fixedProducts.map(
        (product) => product.slug
      )
    );


  /*
    Add only genuinely new Admin products to this category.
    Existing products are NOT duplicated.
  */

  const allowedCategories =
    categoryAliases[currentId] || [
      currentId,
    ];


  const newDatabaseProducts =
    databaseProducts
      .filter((product) => {
        const active =
          product.is_active !== false;

        const correctCategory =
          allowedCategories.includes(
            product.category
          );

        const isNewProduct =
          !fixedSlugs.has(product.slug);

        return (
          active &&
          correctCategory &&
          isNewProduct
        );
      })
      .map((product) => ({
        id: product.id,

        title: product.name,

        slug: product.slug,

        description:
          product.short_description ||
          product.description ||
          "",

       image:
  getImageUrl(
    product.image ||
    product.hero_image ||
    ""
  ),

        features:
          Array.isArray(
            product.features
          )
            ? product.features
            : [],

        databaseProduct: true,
      }));


  const allProducts = [
    ...fixedProducts,
    ...newDatabaseProducts,
  ];

  return (
    <main className="product1-page">

      {/* =====================================
          HERO
      ===================================== */}

      <section
        className="product1-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(5, 7, 10, 0.62),
              rgba(5, 7, 10, 0.25)
            ),
            url(${productPage.heroImage})
          `,
        }}
      >

        <div className="product1-hero-overlay" />

        <div className="product1-hero-content">

          <span>
            {productPage.eyebrow}
          </span>

          <h1>
            {productPage.titleLine1}

            <br />

            {productPage.titleLine2}
          </h1>

        </div>

      </section>


      {/* =====================================
          FEATURES
      ===================================== */}

      <section className="product1-features">

        <div className="product1-shell product1-feature-grid">

          {productPage.features.map(
            (feature) => (

              <div
                className="product1-feature-card"
                key={
                  feature.title
                }
              >

                <div className="product1-feature-icon">
                  {feature.icon}
                </div>

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.text}
                </p>

              </div>

            )
          )}

        </div>

      </section>


      {/* =====================================
          PRODUCTS
      ===================================== */}

      <section className="product1-products">

        <div className="product1-shell">

          <div className="product1-section-heading">

            <h2>
              {
                productPage.sectionTitleStart
              }{" "}

              <span>
                {
                  productPage.sectionTitleAccent
                }
              </span>
            </h2>

            <p>
              {
                productPage.sectionDescription
              }
            </p>

          </div>


          {loadingDatabaseProducts && (
            <p
              style={{
                textAlign: "center",
                marginBottom: "30px",
              }}
            >
              Loading products...
            </p>
          )}


          <div className="product1-grid">

            {allProducts.map(
              (product) => (

                <article
                  className="product1-card"
                  key={
                    `${
                      product.databaseProduct
                        ? "db"
                        : "static"
                    }-${product.slug}`
                  }
                >

                  <div className="product1-card-image">

                    {product.image ? (
                      <img
                        src={
                          product.image
                        }
                        alt={
                          product.title
                        }
                      />
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          minHeight:
                            "250px",
                          display: "grid",
                          placeItems:
                            "center",
                          background:
                            "#101827",
                          color:
                            "#ffffff",
                        }}
                      >
                        No Image
                      </div>
                    )}

                  </div>


                  <div className="product1-card-body">

                    <h3>
                      {product.title}
                    </h3>

                    <p>
                      {
                        product.description
                      }
                    </p>


                    <div className="product1-card-features">

                      {(
                        product.features ||
                        []
                      ).map(
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


                    <Link
                      to={
                        product.databaseProduct
                          ? `/products/database/${product.slug}`
                          : `/products/items/${product.slug}`
                      }
                      className="product1-view-btn"
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

        </div>

      </section>


      {/* =====================================
          CTA
      ===================================== */}

      <section className="product1-cta">

        <div className="product1-cta-overlay" />

        <div className="product1-shell product1-cta-content">

          <div>

            <h2>
              {
                productPage.ctaTitle
              }
            </h2>

            <p>
              {
                productPage.ctaText
              }
            </p>

          </div>


          <Link to="/contact">

            Request a Quote

            <span>
              →
            </span>

          </Link>

        </div>

      </section>

    </main>
  );
}

export default ProductDetails;