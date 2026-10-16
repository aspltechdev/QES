require("dotenv").config();

const pool = require("../config/db");


/* =========================================================
   ORIGINAL WEBSITE PRODUCTS
========================================================= */

const products = [

  /* =======================================================
     CONVENTIONAL MARKING SYSTEMS
     category = laser-marking-systems
  ======================================================= */

  {
    name: "HAND HELD PUNCHES",
    slug: "hand-held-punches",
    category: "laser-marking-systems",

    short_description:
      "Precision-crafted punches for permanent industrial marking.",

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
    name: "IMPACT PRESS",
    slug: "impact-press",
    category: "laser-marking-systems",

    short_description:
      "Reliable impact marking for consistent industrial identification.",

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
    name: "INTERCHANGEABLE STEEL TYPES",
    slug: "interchangeable-steel-types",
    category: "laser-marking-systems",

    short_description:
      "Precision-crafted punches for permanent industrial marking.",

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
    name: "LABEL MARKERS",
    slug: "label-markers",
    category: "laser-marking-systems",

    short_description:
      "Efficient marking solutions for labels and nameplates.",

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
    name: "ROLL MARKER",
    slug: "roll-marker",
    category: "laser-marking-systems",

    short_description:
      "Designed for continuous marking on flat and cylindrical surfaces.",

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
    name: "NUMERATOR",
    slug: "numerator",
    category: "laser-marking-systems",

    short_description:
      "Sequential numbering for permanent product identification.",

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
    name: "ROTARY NUMERATOR",
    slug: "rotary-numerator",
    category: "laser-marking-systems",

    short_description:
      "Fast and reliable numbering for repetitive marking tasks.",

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
    name: "STAMP MARKS",
    slug: "stamp-marks",
    category: "laser-marking-systems",

    short_description:
      "Custom marking stamps for logos, symbols, and identification.",

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
    name: "SPECIAL TYPE PUNCHES",
    slug: "special-type-punches",
    category: "laser-marking-systems",

    short_description:
      "Custom-engineered punches for specialized marking applications.",

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


  /* =======================================================
     PIN DOT PEEN
     category = dot-peen-marking
  ======================================================= */

  {
    name: "BENCHMARK® 320",
    slug: "benchmark-320",
    category: "dot-peen-marking",

    short_description:
      "Compact bench-top marking machine designed for precision and repeatable industrial marking.",

    description:
      "Compact bench-top marking machine designed for precision and repeatable industrial marking.",

    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=85",

    features: [
      "High Precision",
      "Permanent Marking",
      "Compact Design",
      "Industrial Grade",
    ],
  },

  {
    name: "BENCHMARK® 460",
    slug: "benchmark-460",
    category: "dot-peen-marking",

    short_description:
      "Heavy-duty bench-top marking system for medium and large industrial components.",

    description:
      "Heavy-duty bench-top marking system for medium and large industrial components.",

    image:
      "https://images.unsplash.com/photo-1581092919535-7146d74e5f1f?auto=format&fit=crop&w=900&q=85",

    features: [
      "Large Marking Area",
      "High-Speed Operation",
      "Durable Construction",
      "Production Ready",
    ],
  },

  {
    name: "PORTADOT® 60-30",
    slug: "portadot-60-30",
    category: "dot-peen-marking",

    short_description:
      "Portable marking machine designed for flexible on-site and workshop applications.",

    description:
      "Portable marking machine designed for flexible on-site and workshop applications.",

    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=85",

    features: [
      "Portable Design",
      "Lightweight",
      "Permanent Marking",
      "Easy Operation",
    ],
  },

  {
    name: "PORTADOT® 130-30",
    slug: "portadot-130-30",
    category: "dot-peen-marking",

    short_description:
      "Powerful portable marking solution for larger industrial parts and assemblies.",

    description:
      "Powerful portable marking solution for larger industrial parts and assemblies.",

    image:
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=900&q=85",

    features: [
      "Large Components",
      "Rugged Build",
      "High Precision",
      "Reliable Performance",
    ],
  },

  {
    name: "BENCHMARK XL",
    slug: "benchmark-xl",
    category: "dot-peen-marking",

    short_description:
      "Large-format marking machine for oversized industrial components.",

    description:
      "Large-format marking machine for oversized industrial components.",

    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=900&q=85",

    features: [
      "Extra Large Area",
      "High Accuracy",
      "Heavy-Duty",
      "Continuous Operation",
    ],
  },

  {
    name: "CUSTOM DOT PEEN SYSTEMS",
    slug: "custom-dot-peen-systems",
    category: "dot-peen-marking",

    short_description:
      "Tailor-made marking solutions designed for specialized industrial applications.",

    description:
      "Tailor-made marking solutions designed for specialized industrial applications.",

    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85",

    features: [
      "Custom Designs",
      "Automation Ready",
      "Flexible Integration",
      "Industrial Grade",
    ],
  },


  /* =======================================================
     LASER MARKING MACHINES
     category = laser-marking-machines
  ======================================================= */

  {
    name: "FIBER LASER MARKING MACHINE",
    slug: "fiber-laser-marking-machine",
    category: "laser-marking-machines",

    short_description:
      "High-speed laser marking solution for permanent metal identification.",

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
    name: "CO₂ LASER MARKING MACHINE",
    slug: "co2-laser-marking-machine",
    category: "laser-marking-machines",

    short_description:
      "Ideal for marking plastics, wood, acrylic, leather, and non-metal materials.",

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
    name: "UV LASER MARKING MACHINE",
    slug: "uv-laser-marking-machine",
    category: "laser-marking-machines",

    short_description:
      "Designed for ultra-fine and high-precision marking on delicate materials.",

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
];


/* =========================================================
   SEED ONE PRODUCT
========================================================= */

async function seedProduct(client, product) {

  const existing =
    await client.query(
      `
      SELECT id
      FROM products
      WHERE slug = $1
      LIMIT 1
      `,
      [product.slug]
    );


  if (existing.rows.length > 0) {

    console.log(
      `- Already exists: ${product.name}`
    );

    return;
  }


  await client.query(
    `
    INSERT INTO products (
      name,
      slug,
      category,
      short_description,
      description,
      image,
      hero_image,
      features,
      is_active
    )

    VALUES (
      $1,
      $2,
      $3,
      $4,
      $5,
      $6,
      $7,
      $8::jsonb,
      TRUE
    )
    `,
    [
      product.name,
      product.slug,
      product.category,

      product.short_description,
      product.description,

      product.image,

      /*
        Until you upload a separate hero image
        through Admin, use the card image.
      */
      product.image,

      JSON.stringify(
        product.features
      ),
    ]
  );


  console.log(
    `✓ Product: ${product.name}`
  );
}


/* =========================================================
   RUN
========================================================= */

async function runSeed() {

  const client =
    await pool.connect();


  try {

    console.log(
      "\n========================================"
    );

    console.log(
      "QES PRODUCT MIGRATION"
    );

    console.log(
      "========================================\n"
    );


    await client.query("BEGIN");


    for (const product of products) {

      await seedProduct(
        client,
        product
      );

    }


    await client.query("COMMIT");


    console.log(
      "\n========================================"
    );

    console.log(
      "✓ Original products migrated successfully."
    );

    console.log(
      `✓ Total original products: ${products.length}`
    );

    console.log(
      "========================================\n"
    );


    console.log(
      "Open Admin → Products to view them."
    );

  } catch (error) {

    await client.query(
      "ROLLBACK"
    );


    console.error(
      "\nProduct migration failed:"
    );

    console.error(error);

  } finally {

    client.release();

    await pool.end();

  }

}


runSeed();