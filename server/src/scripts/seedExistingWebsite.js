require("dotenv").config();

const pool = require("../config/db");


/* =========================================================
   EXISTING INDUSTRIES FROM THE FRONTEND
========================================================= */

const industries = [
  {
    name: "Automotive",
    slug: "automotive",
    title:
      "Precision Marking For Automotive Manufacturing",
    description:
      "Our marking solutions help manufacturers permanently identify engine components, chassis parts, VIN plates, and production assemblies, ensuring complete traceability throughout the manufacturing process.",
    image:
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1200&q=85",
    applications: [
      "Engine Components",
      "Chassis Parts",
      "VIN & Serial Number Marking",
      "Production Assemblies",
      "Quality Traceability",
      "OEM Manufacturing",
    ],
  },

  {
    name: "Aerospace",
    slug: "aerospace",
    title:
      "High-Precision Marking For Critical Components",
    description:
      "Engineered for aerospace manufacturing, our marking systems deliver permanent, high-accuracy identification that meets stringent quality and traceability standards.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85",
    applications: [
      "Aircraft Components",
      "Turbine Parts",
      "Precision Components",
      "Compliance Marking",
      "Long-Term Durability",
      "Component Traceability",
    ],
  },

  {
    name: "Engineering",
    slug: "engineering",
    title:
      "Reliable Marking For Precision Engineering",
    description:
      "We deliver advanced marking solutions for precision-engineered components, industrial machinery, and specialized equipment. Our technologies help manufacturers improve product identification, operational efficiency, and consistency across every stage of production.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=85",
    applications: [
      "Machine Components",
      "Industrial Equipment",
      "Tooling",
      "Precision Parts",
      "Product Identification",
      "Custom Marking",
    ],
  },

  {
    name: "Heavy Industries",
    slug: "heavy-industries",
    title:
      "Built For Demanding Industrial Environments",
    description:
      "Our industrial marking systems are designed to perform reliably in heavy-duty manufacturing and harsh operating conditions. From large machinery to structural components, we provide durable marking solutions that withstand demanding industrial environments.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
    applications: [
      "Heavy Machinery",
      "Structural Components",
      "Industrial Equipment",
      "Steel Manufacturing",
      "Mining Equipment",
      "Infrastructure Projects",
    ],
  },

  {
    name: "Fabrication",
    slug: "fabrication",
    title:
      "Permanent Identification For Fabricated Products",
    description:
      "Our marking solutions help fabrication industries achieve accurate identification of structural steel, welded assemblies, and custom-built metal components. Built for durability and precision, they support efficient production and complete traceability.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=85",
    applications: [
      "Sheet Metal",
      "Structural Steel",
      "Welded Assemblies",
      "Fabricated Parts",
      "Custom Components",
      "Production Tracking",
    ],
  },

  {
    name: "Metal Industries",
    slug: "metal-industries",
    title:
      "Engineered For Metal Processing",
    description:
      "From raw materials to finished metal products, our marking technologies provide permanent and high-quality identification across a wide range of manufacturing processes. We help metal industries improve product traceability, quality assurance, and operational efficiency.",
    image:
      "https://images.unsplash.com/photo-1565619624098-cf4168a1a70f?auto=format&fit=crop&w=1200&q=85",
    applications: [
      "Steel",
      "Stainless Steel",
      "Aluminium",
      "Brass & Copper",
      "Metal Sheets",
      "Industrial Components",
    ],
  },
];


/* =========================================================
   EXISTING GALLERY ITEMS FROM THE FRONTEND
========================================================= */

const galleryItems = [
  {
    title: "Automotive Production Line",
    description:
      "Permanent marking for automotive production and traceability.",
    image:
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1200&q=85",
    category: "Automotive",
  },

  {
    title: "Aerospace Component Marking",
    description:
      "High-precision identification for critical aerospace parts.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85",
    category: "Aerospace",
  },

  {
    title: "Precision Metal Processing",
    description:
      "Reliable identification for modern metal manufacturing.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85",
    category: "Metal Processing",
  },

  {
    title: "Steel Fabrication Project",
    description:
      "Permanent marking for fabricated steel and metal components.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
    category: "Fabrication",
  },

  {
    title: "Heavy Engineering Facility",
    description:
      "Durable marking solutions for demanding industrial applications.",
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1200&q=85",
    category: "Heavy Engineering",
  },

  {
    title: "Pin (Dot Peen) Marking System",
    description:
      "Industrial dot peen marking for permanent traceability.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=85",
    category: "Dot Peen",
  },

  {
    title: "Machine Installation",
    description:
      "QES engineers installing and testing marking equipment.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=85",
    category: "Installation",
  },

  {
    title: "Industrial Marking Solutions",
    description:
      "Reliable manufacturing identification technologies.",
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1200&q=85",
    category: "Industrial Marking",
  },
];


/* =========================================================
   EXISTING DOWNLOADS FROM THE FRONTEND
========================================================= */

const resources = [
  {
    title: "Product Catalogue",
    description:
      "Complete overview of our industrial marking solutions.",
    resource_type: "Catalogue",
    file_url: null,
    preview_image: null,
  },

  {
    title: "Conventional Marking Systems",
    description:
      "Brochure covering our complete range of conventional marking products.",
    resource_type: "Brochure",
    file_url: null,
    preview_image: null,
  },

  {
    title: "Pin (Dot Peen) Marking Machines",
    description:
      "Technical brochure featuring our pin marking machine range.",
    resource_type: "Brochure",
    file_url: null,
    preview_image: null,
  },

  {
    title: "Laser Marking Machines",
    description:
      "Explore our laser marking solutions and technical specifications.",
    resource_type: "Brochure",
    file_url: null,
    preview_image: null,
  },

  {
    title: "Company Profile",
    description:
      "Learn more about Quality Engineering Solutions and our expertise.",
    resource_type: "Company Profile",
    file_url: null,
    preview_image: null,
  },
];


/* =========================================================
   SEED INDUSTRIES
========================================================= */

async function seedIndustries(client) {
  console.log("\nSeeding industries...");

  for (const industry of industries) {
    const result = await client.query(
      `
      INSERT INTO industries (
        name,
        slug,
        title,
        description,
        image,
        applications,
        is_active
      )
      VALUES (
        $1,
        $2,
        $3,
        $4,
        $5,
        $6::jsonb,
        TRUE
      )

      ON CONFLICT (slug)
      DO UPDATE SET
        name = EXCLUDED.name,
        title = EXCLUDED.title,
        description = EXCLUDED.description,
        image = EXCLUDED.image,
        applications = EXCLUDED.applications,
        updated_at = CURRENT_TIMESTAMP

      RETURNING id, name;
      `,
      [
        industry.name,
        industry.slug,
        industry.title,
        industry.description,
        industry.image,
        JSON.stringify(industry.applications),
      ]
    );

    console.log(
      `✓ Industry: ${result.rows[0].name}`
    );
  }
}


/* =========================================================
   SEED GALLERY
========================================================= */

async function seedGallery(client) {
  console.log("\nSeeding gallery...");

  for (const item of galleryItems) {
    const existing = await client.query(
      `
      SELECT id
      FROM gallery
      WHERE title = $1
      LIMIT 1
      `,
      [item.title]
    );

    if (existing.rows.length > 0) {
      console.log(
        `- Gallery already exists: ${item.title}`
      );

      continue;
    }

    await client.query(
      `
      INSERT INTO gallery (
        title,
        description,
        image,
        category,
        is_active
      )
      VALUES (
        $1,
        $2,
        $3,
        $4,
        TRUE
      )
      `,
      [
        item.title,
        item.description,
        item.image,
        item.category,
      ]
    );

    console.log(
      `✓ Gallery: ${item.title}`
    );
  }
}


/* =========================================================
   SEED RESOURCES
========================================================= */

async function seedResources(client) {
  console.log("\nSeeding downloads...");

  for (const resource of resources) {
    const existing = await client.query(
      `
      SELECT id
      FROM resources
      WHERE title = $1
      LIMIT 1
      `,
      [resource.title]
    );

    if (existing.rows.length > 0) {
      console.log(
        `- Download already exists: ${resource.title}`
      );

      continue;
    }

    await client.query(
      `
      INSERT INTO resources (
        title,
        description,
        file_url,
        preview_image,
        resource_type,
        is_active
      )
      VALUES (
        $1,
        $2,
        $3,
        $4,
        $5,
        TRUE
      )
      `,
      [
        resource.title,
        resource.description,
        resource.file_url,
        resource.preview_image,
        resource.resource_type,
      ]
    );

    console.log(
      `✓ Download: ${resource.title}`
    );
  }
}


/* =========================================================
   RUN SEED
========================================================= */

async function runSeed() {
  const client =
    await pool.connect();

  try {
    console.log(
      "======================================"
    );

    console.log(
      "QES EXISTING WEBSITE DATA MIGRATION"
    );

    console.log(
      "======================================"
    );

    await client.query("BEGIN");

    await seedIndustries(client);
    await seedGallery(client);
    await seedResources(client);

    await client.query("COMMIT");

    console.log(
      "\n======================================"
    );

    console.log(
      "✓ Existing website content seeded successfully."
    );

    console.log(
      "======================================"
    );

    console.log(
      "\nYou can now view these records in the Admin Panel."
    );
  } catch (error) {
    await client.query("ROLLBACK");

    console.error(
      "\nSeed failed:"
    );

    console.error(error);
  } finally {
    client.release();

    await pool.end();
  }
}


runSeed();