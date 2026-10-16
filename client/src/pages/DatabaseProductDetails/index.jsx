import {
  useEffect,
  useState,
} from "react";

import {
  Link,
  useParams,
} from "react-router-dom";


/* =========================================================
   SECTION 1 IMAGES
========================================================= */

import image20 from "../../assets/20.png";
import image21 from "../../assets/21.png";
import image22 from "../../assets/22.png";
import image23 from "../../assets/23.png";
import image24 from "../../assets/24.png";
import image25 from "../../assets/25.png";
import image26 from "../../assets/26.png";
import image27 from "../../assets/27.png";
import image28 from "../../assets/28.png";


/* =========================================================
   SECTION 2 IMAGES
========================================================= */

import image30 from "../../assets/30.png";
import image31 from "../../assets/31.png";
import image32 from "../../assets/32.png";
import image33 from "../../assets/33.png";
import image34 from "../../assets/34.png";
import image35 from "../../assets/35.png";


/* =========================================================
   SECTION 3 IMAGES
========================================================= */

import image36 from "../../assets/36.png";
import image37 from "../../assets/37.png";
import image38 from "../../assets/38.png";


import "./DatabaseProductDetails.css";


const API =
  "http://localhost:5000/api/products";


/* =========================================================
   PRODUCT IMAGES

   These make View Details use exactly the
   same image as the main Products page.
========================================================= */

const productImageOverrides = {

  /* SECTION 1 */

  "hand-held-punches": image20,

  "impact-press": image21,

  "interchangeable-steel-types": image22,

  "label-markers": image23,

  "roll-marker": image24,

  "numerator": image25,

  "rotary-numerator": image26,

  "stamp-marks": image27,

  "special-type-punches": image28,


  /* SECTION 2 */

  "benchmark-320": image30,

  "benchmark-460": image31,

  "portadot-60-30": image32,

  "portadot-130-30": image33,

  "benchmark-xl": image34,

  "custom-dot-peen-systems": image35,


  /* SECTION 3 */

  "fiber-laser-marking-machine": image36,

  "co2-laser-marking-machine": image37,

  "uv-laser-marking-machine": image38,
};


/* =========================================================
   PRODUCT DESCRIPTIONS

   IMPORTANT:
   Every existing product has its own paragraph.

   New products created through Admin Panel will
   automatically use product.description from PostgreSQL.
========================================================= */

const productDescriptionOverrides = {

  /* =======================================================
     SECTION 1
     CONVENTIONAL MARKING SYSTEMS
  ======================================================= */

  "hand-held-punches":
    "Hand Held Punches are designed to produce clear, permanent impressions on a variety of metal surfaces. Manufactured from premium hardened steel, these tools offer exceptional durability, accuracy, and long service life. Ideal for workshops, fabrication units, engineering industries, and maintenance applications, they provide a simple yet reliable solution for permanent product identification without requiring any external power source.",


  "impact-press":
    "Impact Press marking systems are designed to produce consistent and permanent identification on industrial components through controlled impact force. Their robust mechanical construction provides excellent marking accuracy, repeatability, and long service life. Suitable for engineering workshops, fabrication facilities, maintenance departments, and production environments, Impact Press systems provide a reliable solution for marking serial numbers, identification codes, component information, and other permanent manufacturing details.",


  "interchangeable-steel-types":
    "Interchangeable Steel Types provide a flexible and reliable solution for permanent marking of letters, numbers, symbols, and identification codes. Manufactured from hardened tool steel, the characters provide accurate impressions and excellent resistance to wear during repeated industrial use. Their interchangeable construction allows operators to quickly change marking information, making them ideal for serial numbers, batch codes, manufacturing dates, component identification, and customized industrial marking applications.",


  "label-markers":
    "Label Markers are designed for clear and permanent identification of labels, nameplates, tags, plates, and manufactured components. Their compact construction and straightforward operation make them suitable for production environments where consistent marking quality and quick setup are essential. These systems provide durable impressions and reliable performance for equipment identification, product labels, industrial tags, component information, and routine manufacturing applications.",


  "roll-marker":
    "Roll Markers provide smooth and continuous permanent marking across flat, round, and cylindrical industrial components. The controlled rolling action distributes marking pressure evenly across the workpiece, resulting in consistent impressions while reducing the possibility of unnecessary component deformation. They are ideal for marking pipes, shafts, rods, plates, cylindrical components, and other manufactured parts requiring reliable identification and traceability.",


  "numerator":
    "Numerators are designed for fast and accurate sequential numbering of industrial components, plates, labels, tags, and manufactured products. They simplify repetitive identification processes by allowing numbers to advance in sequence while maintaining consistent character alignment. Their rugged construction and reliable operation make them suitable for serial numbering, batch identification, production tracking, manufacturing dates, and component traceability applications.",


  "rotary-numerator":
    "Rotary Numerators provide an efficient solution for sequential numbering and repetitive permanent marking operations. Their rotary mechanism allows operators to quickly select and change number combinations while maintaining accurate alignment and consistent impressions. Built for reliable industrial use, they are suitable for serial numbers, batch codes, date marking, production tracking, and permanent component identification across a wide range of manufacturing applications.",


  "stamp-marks":
    "Stamp Marks are precision-manufactured marking tools designed for permanent identification using letters, numbers, logos, symbols, and customized characters. Produced from hardened steel for excellent wear resistance, these tools create sharp and durable impressions on metal components. They can be used in both manual and machine-assisted marking processes and are suitable for manufacturing, fabrication, maintenance, engineering, and product traceability applications.",


  "special-type-punches":
    "Special Type Punches are custom-engineered marking tools developed for specialized industrial identification requirements. They can be manufactured with unique characters, company logos, symbols, custom shapes, or application-specific marking patterns. Designed for accuracy, durability, and repeatable performance, these punches provide manufacturers with a reliable permanent marking solution when standard character punches cannot meet the required application.",


  /* =======================================================
     SECTION 2
     DOT PEEN MARKING MACHINES
  ======================================================= */

  "benchmark-320":
    "The Benchmark 320 is a compact bench-top dot peen marking machine engineered for accurate and permanent industrial identification. Its rigid construction and precise marking mechanism provide consistent results for serial numbers, batch codes, logos, text, and traceability information. Designed for easy integration into workshop and manufacturing environments, the Benchmark 320 delivers reliable marking performance while maintaining a compact footprint and straightforward operation.",


  "benchmark-460":
    "The Benchmark 460 is a heavy-duty bench-top dot peen marking system developed for medium and large industrial components. Its larger marking capacity, robust construction, and precision-controlled marking head enable clear and permanent identification across a wide variety of materials. Suitable for engineering workshops, production facilities, and continuous manufacturing environments, the Benchmark 460 provides reliable marking for serial numbers, traceability codes, logos, and component identification.",


  "portadot-60-30":
    "The Portadot 60-30 is a compact and portable dot peen marking machine designed for flexible industrial identification applications. Its lightweight construction allows operators to mark components directly at the point of use, making it especially suitable for large parts or assemblies that cannot easily be moved to a fixed marking station. The machine delivers accurate and permanent identification while providing convenient operation for workshop, maintenance, and on-site applications.",


  "portadot-130-30":
    "The Portadot 130-30 is a powerful portable dot peen marking system designed for larger industrial components, fabricated structures, and heavy assemblies. Its rugged construction and portable configuration allow permanent identification to be applied directly to components that are difficult to transport. Providing excellent marking accuracy and dependable performance, the Portadot 130-30 is suitable for manufacturing, fabrication, heavy engineering, maintenance, and industrial traceability applications.",


  "benchmark-xl":
    "The Benchmark XL is a large-format dot peen marking machine engineered for oversized industrial components and demanding production applications. Its extended marking area provides manufacturers with the flexibility to permanently identify large plates, fabricated structures, assemblies, and engineering components. Designed for accuracy, durability, and continuous operation, the Benchmark XL supports serial numbers, text, codes, logos, and complete product traceability information.",


  "custom-dot-peen-systems":
    "Custom Dot Peen Systems are engineered specifically for specialized manufacturing and industrial marking requirements. These systems can be configured with dedicated fixtures, automated movement, production-line integration, component handling, specialized marking areas, and application-specific controls. Each solution is designed around the customer's manufacturing process to provide accurate, permanent, repeatable, and reliable product identification while improving production efficiency and traceability.",


  /* =======================================================
     SECTION 3
     LASER MARKING MACHINES
  ======================================================= */

  "fiber-laser-marking-machine":
    "Fiber Laser Marking Machines provide high-speed, permanent, and high-contrast identification on metals and selected industrial materials. Using a precise non-contact laser process, these systems create exceptionally clear markings without applying mechanical force to the component. They are ideal for serial numbers, QR codes, barcodes, logos, text, data matrix codes, and product traceability information in automotive, engineering, electronics, manufacturing, and industrial production environments.",


  "co2-laser-marking-machine":
    "CO₂ Laser Marking Machines provide clean and permanent identification on a wide range of non-metallic materials including plastics, acrylic, wood, leather, coated materials, packaging surfaces, and selected industrial products. Their non-contact marking process ensures excellent consistency and precision without mechanically affecting the component. These systems are suitable for product identification, branding, coding, labeling, serialization, and industrial traceability applications.",


  "uv-laser-marking-machine":
    "UV Laser Marking Machines are designed for ultra-fine and high-precision identification applications where minimal heat influence is required. Their short laser wavelength enables sharp and highly detailed marking on sensitive plastics, electronics, glass, coated materials, medical components, and delicate industrial surfaces. The process creates permanent identification while minimizing thermal damage, making UV laser systems ideal for precision manufacturing and high-quality traceability applications.",
};


/* =========================================================
   PRODUCT SECTIONS

   We use slug groups instead of relying only on
   database category names.

   This guarantees Related Products come from
   the correct one of your 3 product sections.
========================================================= */

const productSections = {

  conventional: [
    "hand-held-punches",
    "impact-press",
    "interchangeable-steel-types",
    "label-markers",
    "roll-marker",
    "numerator",
    "rotary-numerator",
    "stamp-marks",
    "special-type-punches",
  ],

  dotPeen: [
    "benchmark-320",
    "benchmark-460",
    "portadot-60-30",
    "portadot-130-30",
    "benchmark-xl",
    "custom-dot-peen-systems",
  ],

  laser: [
    "fiber-laser-marking-machine",
    "co2-laser-marking-machine",
    "uv-laser-marking-machine",
  ],
};


/* =========================================================
   FIND PRODUCT SECTION
========================================================= */

function getProductSection(slug) {

  if (
    productSections.conventional.includes(
      slug
    )
  ) {
    return productSections.conventional;
  }


  if (
    productSections.dotPeen.includes(
      slug
    )
  ) {
    return productSections.dotPeen;
  }


  if (
    productSections.laser.includes(
      slug
    )
  ) {
    return productSections.laser;
  }


  return null;
}


/* =========================================================
   COMPONENT
========================================================= */

function DatabaseProductDetails() {

  const { slug } =
    useParams();


  const [
    product,
    setProduct,
  ] = useState(null);


  const [
    allProducts,
    setAllProducts,
  ] = useState([]);


  const [
    loading,
    setLoading,
  ] = useState(true);


  const [
    error,
    setError,
  ] = useState("");


  /* =========================================================
     LOAD WHEN SLUG CHANGES
  ========================================================= */

  useEffect(() => {

    loadPage();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  }, [slug]);


  /* =========================================================
     LOAD PRODUCT + ALL PRODUCTS
  ========================================================= */

  async function loadPage() {

    try {

      setLoading(true);

      setError("");


      const [
        productResponse,
        productsResponse,
      ] = await Promise.all([

        fetch(
          `${API}/${encodeURIComponent(slug)}`
        ),

        fetch(API),

      ]);


      const productData =
        await productResponse.json();


      const productsData =
        await productsResponse.json();


      /* CURRENT PRODUCT */

      if (
        !productResponse.ok ||
        !productData.success
      ) {

        throw new Error(
          productData.message ||
          "Product not found"
        );

      }


      setProduct(
        productData.product
      );


      /* ALL PRODUCTS */

      if (
        productsResponse.ok &&
        productsData.success
      ) {

        setAllProducts(
          productsData.products ||
          []
        );

      } else {

        setAllProducts([]);

      }


    } catch (error) {

      console.error(
        "Product details error:",
        error
      );


      setError(
        error.message
      );


    } finally {

      setLoading(false);

    }

  }


  /* =========================================================
     LOADING
  ========================================================= */

  if (loading) {

    return (
      <main className="db-product-status">

        Loading product...

      </main>
    );

  }


  /* =========================================================
     NOT FOUND
  ========================================================= */

  if (
    error ||
    !product
  ) {

    return (
      <main className="db-product-status">

        <h1>
          Product not found
        </h1>

        <p>
          {error}
        </p>

        <Link to="/products">
          Back to Products
        </Link>

      </main>
    );

  }


  /* =========================================================
     CURRENT IMAGE
  ========================================================= */

  const displayImage =
    productImageOverrides[
      product.slug
    ] ||
    product.image ||
    product.hero_image ||
    "";


  const heroImage =
    productImageOverrides[
      product.slug
    ] ||
    product.hero_image ||
    product.image ||
    "";


  /* =========================================================
     CURRENT FULL DESCRIPTION

     Existing product:
     -> our correct custom paragraph

     New Admin product:
     -> database description

     fallback:
     -> short description
  ========================================================= */

  const fullDescription =
    productDescriptionOverrides[
      product.slug
    ] ||
    product.description ||
    product.short_description ||
    "Contact QES for complete product specifications and application details.";


  /* =========================================================
     RELATED PRODUCTS
  ========================================================= */

  const currentSection =
    getProductSection(
      product.slug
    );


  let relatedProducts = [];


  if (currentSection) {

    relatedProducts =
      allProducts
        .filter(
          (item) =>
            item.slug !==
              product.slug &&
            currentSection.includes(
              item.slug
            ) &&
            item.is_active !==
              false
        )
        .sort(
          (a, b) =>
            currentSection.indexOf(
              a.slug
            ) -
            currentSection.indexOf(
              b.slug
            )
        )
        .slice(0, 3);

  } else {

    /*
      For a NEW product created from Admin,
      related products come from the same
      database category.
    */

    relatedProducts =
      allProducts
        .filter(
          (item) =>
            item.slug !==
              product.slug &&
            item.category ===
              product.category &&
            item.is_active !==
              false
        )
        .slice(0, 3);

  }


  return (
    <main className="db-product-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="db-product-hero"

        style={
          heroImage
            ? {
                backgroundImage: `
                  linear-gradient(
                    90deg,
                    rgba(5, 7, 10, 0.72),
                    rgba(5, 7, 10, 0.35)
                  ),
                  url("${heroImage}")
                `,
              }
            : undefined
        }
      >

        <div className="db-product-hero-content">

          <span>
            {
              product.category ||
              "QES PRODUCT"
            }
          </span>


          <h1>
            {product.name}
          </h1>


          {product.short_description && (

            <p>
              {
                product.short_description
              }
            </p>

          )}

        </div>

      </section>


      {/* =====================================================
          MAIN PRODUCT DETAILS
      ===================================================== */}

      <section className="db-product-details">

        <div className="db-product-shell db-product-grid">


          {/* =================================================
              PRODUCT IMAGE
          ================================================= */}

          <div className="db-product-main-image">

            {displayImage ? (

              <img
                src={displayImage}
                alt={product.name}
              />

            ) : (

              <div className="db-product-image-placeholder">

                QES

              </div>

            )}

          </div>


          {/* =================================================
              PRODUCT CONTENT
          ================================================= */}

          <div className="db-product-copy">

            <span>
              PRODUCT DETAILS
            </span>


            <h2>
              {product.name}
            </h2>


            {/* IMPORTANT:
                THIS IS THE FULL PRODUCT-SPECIFIC PARAGRAPH
            */}

            <p className="db-product-description">

              {fullDescription}

            </p>


            {/* =================================================
                FEATURES
            ================================================= */}

            {Array.isArray(
              product.features
            ) &&
              product.features.length >
                0 && (

                <>

                  <h3>
                    KEY FEATURES
                  </h3>


                  <div className="db-product-features">

                    {product.features.map(
                      (
                        feature,
                        index
                      ) => (

                        <div
                          key={`${feature}-${index}`}
                        >

                          <span>
                            ✓
                          </span>

                          {feature}

                        </div>

                      )
                    )}

                  </div>

                </>

              )}


            {/* =================================================
                SPECIFICATIONS
            ================================================= */}

            <h3 className="db-spec-title">

              SPECIFICATIONS

            </h3>


            <div className="db-product-specs">


              <div className="db-product-spec-card">

                <span>
                  CATEGORY
                </span>

                <strong>
                  {
                    product.category ||
                    "Industrial Marking"
                  }
                </strong>

              </div>


              <div className="db-product-spec-card">

                <span>
                  APPLICATION
                </span>

                <strong>
                  Industrial
                </strong>

              </div>


              <div className="db-product-spec-card">

                <span>
                  MARKING
                </span>

                <strong>
                  Permanent
                </strong>

              </div>


              <div className="db-product-spec-card">

                <span>
                  STATUS
                </span>

                <strong>
                  {
                    product.is_active ===
                    false
                      ? "Inactive"
                      : "Available"
                  }
                </strong>

              </div>

            </div>


            {/* =================================================
                BUTTONS
            ================================================= */}

            <div className="db-product-actions">

              <Link to="/contact">

                Request a Quote

              </Link>


              <Link
                to="/products"
                className="secondary"
              >

                Back to Products

              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          RELATED PRODUCTS
      ===================================================== */}

      {relatedProducts.length > 0 && (

        <section className="db-related-products">

          <div className="db-product-shell">


            <div className="db-related-heading">

              <span>
                YOU MAY ALSO LIKE
              </span>

              <h2>
                Related Products
              </h2>

            </div>


            <div className="db-related-grid">

              {relatedProducts.map(
                (related) => {

                  const relatedImage =
                    productImageOverrides[
                      related.slug
                    ] ||
                    related.image ||
                    related.hero_image ||
                    "";


                  const relatedDescription =
                    productDescriptionOverrides[
                      related.slug
                    ] ||
                    related.short_description ||
                    related.description ||
                    "Industrial marking solution.";


                  return (

                    <Link
                      to={`/products/database/${related.slug}`}
                      className="db-related-card"
                      key={
                        related.id ||
                        related.slug
                      }
                    >


                      <div className="db-related-image">

                        {relatedImage ? (

                          <img
                            src={relatedImage}
                            alt={related.name}
                          />

                        ) : (

                          <div className="db-related-placeholder">

                            QES

                          </div>

                        )}

                      </div>


                      <div className="db-related-content">

                        <h3>
                          {related.name}
                        </h3>


                        <p>
                          {relatedDescription}
                        </p>


                        <span className="db-related-arrow">

                          →

                        </span>

                      </div>

                    </Link>

                  );

                }
              )}

            </div>

          </div>

        </section>

      )}

    </main>
  );
}


export default DatabaseProductDetails;