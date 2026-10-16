import { Link, useParams } from "react-router-dom";
import "./ProductItemDetails.css";

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


const itemDetails = {
  /* =========================================================
     CONVENTIONAL MARKING PRODUCTS
  ========================================================= */

  "hand-held-punches": {
    title: "HAND HELD PUNCHES",
    description:
      "Hand Held Punches are designed to produce clear, permanent impressions on a variety of metal surfaces. Manufactured from premium hardened steel, these tools offer exceptional durability, accuracy, and long service life.",

    image:
      image20,

    features: [
      "Manual Operation",
      "Permanent Marking",
      "High Precision",
      "Durable Performance",
      "Hardened Steel Construction",
      "Multiple Character Sizes",
    ],

    specifications: [
      ["Material", "Hardened Steel"],
      ["Character Sizes", "Multiple Sizes"],
      ["Marking", "Permanent"],
      ["Application", "Industrial"],
    ],

    category: "conventional",
  },

  "impact-press": {
    title: "IMPACT PRESS",

    description:
      "Reliable impact marking equipment designed for consistent and repeatable industrial identification applications.",

    image:
      image21,

    features: [
      "High Precision",
      "Heavy-Duty Build",
      "Easy Operation",
      "Long Service Life",
    ],

    specifications: [
      ["Operation", "Impact Marking"],
      ["Construction", "Industrial Grade"],
      ["Application", "Industrial"],
      ["Marking", "Permanent"],
    ],

    category: "conventional",
  },

  "interchangeable-steel-types": {
    title: "INTERCHANGEABLE STEEL TYPES",

    description:
      "Precision-crafted interchangeable steel types designed for permanent industrial marking and flexible character combinations.",

    image:
      image22,

    features: [
      "Manual Operation",
      "Permanent Marking",
      "Hardened Steel",
      "Industrial Grade",
    ],

    specifications: [
      ["Material", "Hardened Steel"],
      ["Type", "Interchangeable"],
      ["Marking", "Permanent"],
      ["Application", "Industrial"],
    ],

    category: "conventional",
  },

  "label-markers": {
    title: "LABEL MARKERS",

    description:
      "Efficient industrial marking solutions designed for labels, tags, nameplates, and identification applications.",

    image:
      image23,

    features: [
      "Clear Impressions",
      "Quick Setup",
      "Durable Construction",
      "Industrial Use",
    ],

    specifications: [
      ["Application", "Labels & Nameplates"],
      ["Construction", "Industrial Grade"],
      ["Operation", "Manual"],
      ["Marking", "Permanent"],
    ],

    category: "conventional",
  },

  "roll-marker": {
    title: "ROLL MARKER",

    description:
      "Industrial roll marking equipment designed for continuous and accurate marking on flat and cylindrical components.",

    image:
      image24,

    features: [
      "Continuous Marking",
      "Manual Operation",
      "Adjustable Design",
      "High Accuracy",
    ],

    specifications: [
      ["Process", "Roll Marking"],
      ["Application", "Flat & Cylindrical Parts"],
      ["Operation", "Manual"],
      ["Marking", "Permanent"],
    ],

    category: "conventional",
  },

  numerator: {
    title: "NUMERATOR",

    description:
      "Precision numbering equipment designed for sequential and permanent product identification.",

    image:
      image25,

    features: [
      "Sequential Numbering",
      "Precision Mechanism",
      "Easy Adjustment",
      "Long-Lasting",
    ],

    specifications: [
      ["Process", "Sequential Numbering"],
      ["Operation", "Manual"],
      ["Application", "Industrial"],
      ["Marking", "Permanent"],
    ],

    category: "conventional",
  },

  "rotary-numerator": {
    title: "ROTARY NUMERATOR",

    description:
      "Fast and reliable rotary numbering equipment designed for repetitive industrial marking applications.",

    image:
      image26,

    features: [
      "Rotary Mechanism",
      "Sequential Marking",
      "Durable Build",
      "Smooth Operation",
    ],

    specifications: [
      ["Mechanism", "Rotary"],
      ["Process", "Sequential Marking"],
      ["Application", "Industrial"],
      ["Construction", "Heavy Duty"],
    ],

    category: "conventional",
  },

  "stamp-marks": {
    title: "STAMP MARKS",

    description:
      "Custom marking stamps engineered for permanent logos, symbols, characters, and industrial identification.",

    image:
      image27,

    features: [
      "Permanent Impressions",
      "Custom Designs",
      "Hardened Steel",
      "Precision Finish",
    ],

    specifications: [
      ["Material", "Hardened Steel"],
      ["Design", "Custom"],
      ["Application", "Industrial"],
      ["Marking", "Permanent"],
    ],

    category: "conventional",
  },

  "special-type-punches": {
    title: "SPECIAL TYPE PUNCHES",

    description:
      "Custom-engineered marking punches developed for specialized industrial marking applications.",

    image:
      image28,

    features: [
      "Custom Profiles",
      "High Precision",
      "Industrial Grade",
      "Made to Order",
    ],

    specifications: [
      ["Design", "Custom"],
      ["Material", "Hardened Steel"],
      ["Application", "Special Purpose"],
      ["Marking", "Permanent"],
    ],

    category: "conventional",
  },

  /* =========================================================
     DOT PEEN PRODUCTS
  ========================================================= */

  "benchmark-320": {
    title: "BENCHMARK® 320",

    description:
      "Compact bench-top dot peen marking machine designed for accurate, repeatable, and permanent industrial identification.",

    image:
      image30,

    features: [
      "High Precision",
      "Permanent Marking",
      "Compact Design",
      "Industrial Grade",
    ],

    specifications: [
      ["Machine Type", "Bench-Top Dot Peen"],
      ["Marking", "Permanent"],
      ["Operation", "Industrial"],
      ["Application", "Metal Components"],
    ],

    category: "dot-peen",
  },

  "benchmark-460": {
    title: "BENCHMARK® 460",

    description:
      "Heavy-duty bench-top dot peen marking machine designed for medium and large industrial components.",

    image:
      image31,

    features: [
      "Large Marking Area",
      "High-Speed Operation",
      "Durable Construction",
      "Production Ready",
    ],

    specifications: [
      ["Machine Type", "Bench-Top Dot Peen"],
      ["Construction", "Heavy Duty"],
      ["Marking", "Permanent"],
      ["Application", "Industrial Components"],
    ],

    category: "dot-peen",
  },

  "portadot-60-30": {
    title: "PORTADOT® 60-30",

    description:
      "Portable dot peen marking machine designed for flexible on-site and workshop marking applications.",

    image:
      image32,

    features: [
      "Portable Design",
      "Lightweight",
      "Permanent Marking",
      "Easy Operation",
    ],

    specifications: [
      ["Machine Type", "Portable Dot Peen"],
      ["Operation", "Portable"],
      ["Marking", "Permanent"],
      ["Application", "Workshop & Field"],
    ],

    category: "dot-peen",
  },

  "portadot-130-30": {
    title: "PORTADOT® 130-30",

    description:
      "Powerful portable dot peen marking solution engineered for larger industrial parts and assemblies.",

    image:
      image33,

    features: [
      "Large Components",
      "Rugged Build",
      "High Precision",
      "Reliable Performance",
    ],

    specifications: [
      ["Machine Type", "Portable Dot Peen"],
      ["Construction", "Rugged"],
      ["Marking", "Permanent"],
      ["Application", "Large Components"],
    ],

    category: "dot-peen",
  },

  "benchmark-xl": {
    title: "BENCHMARK XL",

    description:
      "Large-format dot peen marking system designed for oversized industrial components and demanding manufacturing environments.",

    image:
      image34,

    features: [
      "Extra Large Area",
      "High Accuracy",
      "Heavy-Duty",
      "Continuous Operation",
    ],

    specifications: [
      ["Machine Type", "Large Format Dot Peen"],
      ["Marking Area", "Extra Large"],
      ["Operation", "Continuous"],
      ["Application", "Oversized Components"],
    ],

    category: "dot-peen",
  },

  "custom-dot-peen-systems": {
    title: "CUSTOM DOT PEEN SYSTEMS",

    description:
      "Tailor-made dot peen marking solutions designed for specialized industrial automation and traceability applications.",

    image:
      image35,

    features: [
      "Custom Designs",
      "Automation Ready",
      "Flexible Integration",
      "Industrial Grade",
    ],

    specifications: [
      ["System Type", "Custom Dot Peen"],
      ["Integration", "Automation Ready"],
      ["Design", "Application Specific"],
      ["Application", "Industrial"],
    ],

    category: "dot-peen",
  },

  /* =========================================================
     LASER MARKING PRODUCTS
  ========================================================= */

  "fiber-laser-marking-machine": {
    title: "FIBER LASER MARKING MACHINE",

    description:
      "High-speed fiber laser marking system designed for permanent identification of metals and industrial components.",

    image:
      image36,

    features: [
      "High-Speed Marking",
      "Non-Contact Process",
      "High Precision",
      "Industrial Grade",
    ],

    specifications: [
      ["Laser Type", "Fiber Laser"],
      ["Process", "Non-Contact"],
      ["Marking", "Permanent"],
      ["Application", "Metals"],
    ],

    category: "laser",
  },

  "co2-laser-marking-machine": {
    title: "CO₂ LASER MARKING MACHINE",

    description:
      "CO₂ laser marking solution designed for plastics, wood, acrylic, leather, glass, and other non-metal materials.",

    image:
      image37,

    features: [
      "Clean Marking",
      "High Accuracy",
      "Non-Metal Materials",
      "Reliable Performance",
    ],

    specifications: [
      ["Laser Type", "CO₂"],
      ["Process", "Non-Contact"],
      ["Material", "Non-Metals"],
      ["Application", "Industrial Marking"],
    ],

    category: "laser",
  },

  "uv-laser-marking-machine": {
    title: "UV LASER MARKING MACHINE",

    description:
      "Ultra-fine UV laser marking system designed for precise identification on sensitive and delicate materials.",

    image:
      image38,

    features: [
      "Ultra Fine Marking",
      "Heat-Free Process",
      "High Precision",
      "Premium Finish",
    ],

    specifications: [
      ["Laser Type", "UV Laser"],
      ["Process", "Cold Marking"],
      ["Precision", "Ultra Fine"],
      ["Application", "Sensitive Materials"],
    ],

    category: "laser",
  },
};

/* =========================================================
   RELATED PRODUCTS
========================================================= */

const relatedGroups = {
  conventional: [
    "impact-press",
    "interchangeable-steel-types",
    "label-markers",
    "roll-marker",
  ],

  "dot-peen": [
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

function ProductItemDetails() {
  const { itemId } = useParams();

  const product = itemDetails[itemId];

  if (!product) {
    return (
      <main className="item-not-found">
        <h1>Product not found</h1>

        <Link to="/products">
          Back to Products
        </Link>
      </main>
    );
  }

  const relatedProducts = (
    relatedGroups[product.category] || []
  )
    .filter((slug) => slug !== itemId)
    .slice(0, 3)
    .map((slug) => ({
      slug,
      ...itemDetails[slug],
    }));

  return (
    <main className="item-detail-page">

      {/* =====================================================
          MAIN PRODUCT DETAIL
      ===================================================== */}

      <section className="item-detail-main">
        <div className="item-detail-shell item-detail-grid">

          <div className="item-detail-image">
            <img
              src={product.image}
              alt={product.title}
            />
          </div>


          <div className="item-detail-content">

            <h1>
              {product.title}
            </h1>

            <p className="item-description">
              {product.description}
            </p>


            {/* KEY FEATURES */}

            <h3>
              KEY FEATURES
            </h3>

            <div className="item-features">

              {product.features.map((feature) => (
                <div key={feature}>
                  <span>✓</span>

                  {feature}
                </div>
              ))}

            </div>


            {/* SPECIFICATIONS */}

            <h3>
              SPECIFICATION
            </h3>

            <div className="item-specifications">

              {product.specifications.map(
                ([name, value]) => (
                  <div
                    className="item-spec-card"
                    key={name}
                  >
                    <span>
                      {name}
                    </span>

                    <strong>
                      {value}
                    </strong>
                  </div>
                )
              )}

            </div>


            {/* BUTTONS */}

            <div className="item-buttons">

              <a href="#related">
                Download Brochure
              </a>

              <Link to="/contact">
                Request a Quote →
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          RELATED PRODUCTS
      ===================================================== */}

      <section
        className="item-related"
        id="related"
      >
        <div className="item-detail-shell">

          <h2>
            Related Products
          </h2>


          <div className="item-related-grid">

            {relatedProducts.map((related) => (
              <Link
                key={related.slug}
                to={`/products/items/${related.slug}`}
              >

                <div className="related-image">
                  <img
                    src={related.image}
                    alt={related.title}
                  />
                </div>


                <h3>
                  {related.title}
                </h3>

                <p>
                  {related.description}
                </p>

              </Link>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="item-detail-cta">

        <div className="item-detail-shell item-cta-inner">

          <div>

            <h2>
              Need Help Choosing the Right
              <br />
              {product.title}?
            </h2>

            <p>
              Our experts can help you select the ideal
              marking solution based on your material,
              production requirements, and application.
            </p>

          </div>


          <Link to="/contact">
            Request a Quote →
          </Link>

        </div>

      </section>

    </main>
  );
}

export default ProductItemDetails;