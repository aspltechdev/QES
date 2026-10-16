
const pool = require("../config/db");

/* =========================================================
   HELPER
========================================================= */

function createSlug(text = "") {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}


/* =========================================================
   DASHBOARD STATS
========================================================= */

const getDashboardStats = async (req, res) => {
  try {
    const [
      productsResult,
      industriesResult,
      galleryResult,
      resourcesResult,
      enquiriesResult,
    ] = await Promise.all([
      pool.query("SELECT COUNT(*) FROM products"),
      pool.query("SELECT COUNT(*) FROM industries"),
      pool.query("SELECT COUNT(*) FROM gallery"),
      pool.query("SELECT COUNT(*) FROM resources"),
      pool.query("SELECT COUNT(*) FROM contact_enquiries"),
    ]);

    return res.json({
      success: true,

      stats: {
        products: Number(productsResult.rows[0].count),
        industries: Number(industriesResult.rows[0].count),
        gallery: Number(galleryResult.rows[0].count),
        downloads: Number(resourcesResult.rows[0].count),
        enquiries: Number(enquiriesResult.rows[0].count),
      },
    });
  } catch (error) {
    console.error("Dashboard stats error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to load dashboard statistics",
    });
  }
};


/* =========================================================
   PRODUCTS
========================================================= */

/* GET ALL PRODUCTS */

const getProducts = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT *
      FROM products
      ORDER BY created_at DESC
    `);

    return res.json({
      success: true,
      products: result.rows,
    });
  } catch (error) {
    console.error("Get products error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to load products",
    });
  }
};


/* CREATE PRODUCT */

const createProduct = async (req, res) => {
  try {
    const {
      name,
      slug,
      category,
      short_description,
      description,
      features,
      is_active,
    } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Product name is required",
      });
    }

    const finalSlug = createSlug(
      slug && slug.trim() ? slug : name
    );

    const productFile =
      req.files?.product_image?.[0];

    const heroFile =
      req.files?.hero_image?.[0];

    const image = productFile
      ? `/uploads/${productFile.filename}`
      : null;

    const hero_image = heroFile
      ? `/uploads/${heroFile.filename}`
      : null;

    let parsedFeatures = [];

    try {
      parsedFeatures = Array.isArray(features)
        ? features
        : JSON.parse(features || "[]");
    } catch {
      parsedFeatures = [];
    }

    const result = await pool.query(
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
        $9
      )
      RETURNING *
      `,
      [
        name,
        finalSlug,
        category || null,
        short_description || null,
        description || null,
        image,
        hero_image,
        JSON.stringify(parsedFeatures),
        is_active !== "false" &&
          is_active !== false,
      ]
    );

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      product: result.rows[0],
    });
  } catch (error) {
    console.error("Create product error:", error);

    if (error.code === "23505") {
      return res.status(400).json({
        success: false,
        message: "A product with this slug already exists",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Unable to create product",
    });
  }
};


/* UPDATE PRODUCT */

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      slug,
      category,
      short_description,
      description,
      features,
      is_active,
    } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Product name is required",
      });
    }

    const existingResult = await pool.query(
      `
      SELECT *
      FROM products
      WHERE id = $1
      `,
      [id]
    );

    if (existingResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const existingProduct =
      existingResult.rows[0];

    const productFile =
      req.files?.product_image?.[0];

    const heroFile =
      req.files?.hero_image?.[0];

    const image = productFile
      ? `/uploads/${productFile.filename}`
      : existingProduct.image;

    const hero_image = heroFile
      ? `/uploads/${heroFile.filename}`
      : existingProduct.hero_image;

    let parsedFeatures = [];

    try {
      parsedFeatures = Array.isArray(features)
        ? features
        : JSON.parse(features || "[]");
    } catch {
      parsedFeatures = [];
    }

    const finalSlug = createSlug(
      slug && slug.trim()
        ? slug
        : name
    );

    const result = await pool.query(
      `
      UPDATE products
      SET
        name = $1,
        slug = $2,
        category = $3,
        short_description = $4,
        description = $5,
        image = $6,
        hero_image = $7,
        features = $8::jsonb,
        is_active = $9,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $10
      RETURNING *
      `,
      [
        name,
        finalSlug,
        category || null,
        short_description || null,
        description || null,
        image,
        hero_image,
        JSON.stringify(
          Array.isArray(parsedFeatures)
            ? parsedFeatures
            : []
        ),
        is_active !== "false" &&
          is_active !== false,
        id,
      ]
    );

    return res.json({
      success: true,
      message: "Product updated successfully",
      product: result.rows[0],
    });
  } catch (error) {
    console.error(
      "Update product error:",
      error
    );

    if (error.code === "23505") {
      return res.status(400).json({
        success: false,
        message:
          "A product with this slug already exists",
      });
    }

    return res.status(500).json({
      success: false,
      message:
        "Unable to update product",
    });
  }
};


/* DELETE PRODUCT */

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `
      DELETE FROM products
      WHERE id = $1
      RETURNING *
      `,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error(
      "Delete product error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Unable to delete product",
    });
  }
};


/* =========================================================
   INDUSTRIES
========================================================= */

/* GET ALL INDUSTRIES */

const getIndustries = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT *
      FROM industries
      ORDER BY created_at DESC
    `);

    return res.json({
      success: true,
      industries: result.rows,
    });
  } catch (error) {
    console.error(
      "Get industries error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Unable to load industries",
    });
  }
};


/* CREATE INDUSTRY */

const createIndustry = async (req, res) => {
  try {
    const {
      name,
      slug,
      title,
      description,
      applications,
      is_active,
    } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Industry name is required",
      });
    }

    const industryFile =
      req.files?.industry_image?.[0];

    const image = industryFile
      ? `/uploads/${industryFile.filename}`
      : null;

    let parsedApplications = [];

    try {
      parsedApplications =
        Array.isArray(applications)
          ? applications
          : JSON.parse(
              applications || "[]"
            );
    } catch {
      parsedApplications = String(
        applications || ""
      )
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }

    const finalSlug = createSlug(
      slug && slug.trim()
        ? slug
        : name
    );

    const result = await pool.query(
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
        $7
      )
      RETURNING *
      `,
      [
        name,
        finalSlug,
        title || null,
        description || null,
        image,
        JSON.stringify(
          Array.isArray(parsedApplications)
            ? parsedApplications
            : []
        ),
        is_active !== "false" &&
          is_active !== false,
      ]
    );

    return res.status(201).json({
      success: true,
      message:
        "Industry created successfully",
      industry: result.rows[0],
    });
  } catch (error) {
    console.error(
      "Create industry error:",
      error
    );

    if (error.code === "23505") {
      return res.status(400).json({
        success: false,
        message:
          "An industry with this slug already exists",
      });
    }

    return res.status(500).json({
      success: false,
      message:
        "Unable to create industry",
    });
  }
};


/* UPDATE INDUSTRY */

const updateIndustry = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      slug,
      title,
      description,
      applications,
      is_active,
    } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Industry name is required",
      });
    }

    const existingResult =
      await pool.query(
        `
        SELECT *
        FROM industries
        WHERE id = $1
        `,
        [id]
      );

    if (existingResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Industry not found",
      });
    }

    const existingIndustry =
      existingResult.rows[0];

    const industryFile =
      req.files?.industry_image?.[0];

    const image = industryFile
      ? `/uploads/${industryFile.filename}`
      : existingIndustry.image;

    let parsedApplications = [];

    try {
      parsedApplications =
        Array.isArray(applications)
          ? applications
          : JSON.parse(
              applications || "[]"
            );
    } catch {
      parsedApplications = String(
        applications || ""
      )
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }

    const finalSlug = createSlug(
      slug && slug.trim()
        ? slug
        : name
    );

    const result = await pool.query(
      `
      UPDATE industries
      SET
        name = $1,
        slug = $2,
        title = $3,
        description = $4,
        image = $5,
        applications = $6::jsonb,
        is_active = $7,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $8
      RETURNING *
      `,
      [
        name,
        finalSlug,
        title || null,
        description || null,
        image,
        JSON.stringify(
          Array.isArray(
            parsedApplications
          )
            ? parsedApplications
            : []
        ),
        is_active !== "false" &&
          is_active !== false,
        id,
      ]
    );

    return res.json({
      success: true,
      message:
        "Industry updated successfully",
      industry:
        result.rows[0],
    });
  } catch (error) {
    console.error(
      "Update industry error:",
      error
    );

    if (error.code === "23505") {
      return res.status(400).json({
        success: false,
        message:
          "An industry with this slug already exists",
      });
    }

    return res.status(500).json({
      success: false,
      message:
        "Unable to update industry",
    });
  }
};


/* DELETE INDUSTRY */

const deleteIndustry = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `
      DELETE FROM industries
      WHERE id = $1
      RETURNING *
      `,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Industry not found",
      });
    }

    return res.json({
      success: true,
      message:
        "Industry deleted successfully",
    });
  } catch (error) {
    console.error(
      "Delete industry error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to delete industry",
    });
  }
};


/* =========================================================
   GALLERY
========================================================= */

/* GET GALLERY */

const getGallery = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT *
      FROM gallery
      ORDER BY created_at DESC
    `);

    return res.json({
      success: true,
      gallery: result.rows,
    });
  } catch (error) {
    console.error(
      "Get gallery error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Unable to load gallery",
    });
  }
};


/* CREATE GALLERY ITEM */

const createGalleryItem = async (req, res) => {
  try {
    const {
      title,
      category,
      description,
      is_active,
    } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message:
          "Gallery title is required",
      });
    }

    const galleryFile =
      req.files?.gallery_image?.[0];

    if (!galleryFile) {
      return res.status(400).json({
        success: false,
        message:
          "Gallery image is required",
      });
    }

    const image =
      `/uploads/${galleryFile.filename}`;

    const result = await pool.query(
      `
      INSERT INTO gallery (
        title,
        category,
        description,
        image,
        is_active
      )
      VALUES (
        $1,
        $2,
        $3,
        $4,
        $5
      )
      RETURNING *
      `,
      [
        title,
        category || null,
        description || null,
        image,
        is_active !== "false" &&
          is_active !== false,
      ]
    );

    return res.status(201).json({
      success: true,
      message:
        "Gallery item created successfully",
      galleryItem:
        result.rows[0],
    });
  } catch (error) {
    console.error(
      "Create gallery item error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to create gallery item",
    });
  }
};


/* UPDATE GALLERY ITEM */

const updateGalleryItem = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      title,
      category,
      description,
      is_active,
    } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message:
          "Gallery title is required",
      });
    }

    const existingResult =
      await pool.query(
        `
        SELECT *
        FROM gallery
        WHERE id = $1
        `,
        [id]
      );

    if (existingResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message:
          "Gallery item not found",
      });
    }

    const existingGalleryItem =
      existingResult.rows[0];

    const galleryFile =
      req.files?.gallery_image?.[0];

    const image = galleryFile
      ? `/uploads/${galleryFile.filename}`
      : existingGalleryItem.image;

    const result = await pool.query(
      `
      UPDATE gallery
      SET
        title = $1,
        category = $2,
        description = $3,
        image = $4,
        is_active = $5,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $6
      RETURNING *
      `,
      [
        title,
        category || null,
        description || null,
        image,
        is_active !== "false" &&
          is_active !== false,
        id,
      ]
    );

    return res.json({
      success: true,
      message:
        "Gallery item updated successfully",
      galleryItem:
        result.rows[0],
    });
  } catch (error) {
    console.error(
      "Update gallery item error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to update gallery item",
    });
  }
};


/* DELETE GALLERY ITEM */

const deleteGalleryItem = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `
      DELETE FROM gallery
      WHERE id = $1
      RETURNING *
      `,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message:
          "Gallery item not found",
      });
    }

    return res.json({
      success: true,
      message:
        "Gallery item deleted successfully",
    });
  } catch (error) {
    console.error(
      "Delete gallery error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to delete gallery item",
    });
  }
};


/* =========================================================
   DOWNLOADS / RESOURCES
========================================================= */

/* GET RESOURCES */

const getResources = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT *
      FROM resources
      ORDER BY created_at DESC
    `);

    return res.json({
      success: true,
      resources: result.rows,
    });
  } catch (error) {
    console.error(
      "Get resources error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to load downloads",
    });
  }
};


/* CREATE RESOURCE */

const createResource = async (req, res) => {
  try {
    const {
      title,
      description,
      preview_image,
      resource_type,
      is_active,
    } = req.body || {};

    const resourceFile =
      req.files?.file?.[0];

    if (!title) {
      return res.status(400).json({
        success: false,
        message:
          "Resource title is required",
      });
    }

    if (!resourceFile) {
      return res.status(400).json({
        success: false,
        message:
          "Please upload a PDF, DOC or DOCX file",
      });
    }

    const fileUrl =
      `/uploads/${resourceFile.filename}`;

    const result = await pool.query(
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
        $6
      )
      RETURNING *
      `,
      [
        title,
        description || null,
        fileUrl,
        preview_image || null,
        resource_type || null,
        is_active !== "false" &&
          is_active !== false,
      ]
    );

    return res.status(201).json({
      success: true,
      message:
        "Download uploaded successfully",
      resource:
        result.rows[0],
    });
  } catch (error) {
    console.error(
      "Create resource error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "Unable to create download",
    });
  }
};


/* UPDATE RESOURCE */

const updateResource = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      title,
      description,
      preview_image,
      resource_type,
      is_active,
    } = req.body || {};

    const resourceFile =
      req.files?.file?.[0];

    if (!title) {
      return res.status(400).json({
        success: false,
        message:
          "Resource title is required",
      });
    }

    const currentResult =
      await pool.query(
        `
        SELECT *
        FROM resources
        WHERE id = $1
        `,
        [id]
      );

    if (currentResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message:
          "Download not found",
      });
    }

    const currentResource =
      currentResult.rows[0];

    const fileUrl =
      resourceFile
        ? `/uploads/${resourceFile.filename}`
        : currentResource.file_url;

    const result = await pool.query(
      `
      UPDATE resources
      SET
        title = $1,
        description = $2,
        file_url = $3,
        preview_image = $4,
        resource_type = $5,
        is_active = $6,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $7
      RETURNING *
      `,
      [
        title,
        description || null,
        fileUrl || null,
        preview_image || null,
        resource_type || null,
        is_active !== "false" &&
          is_active !== false,
        id,
      ]
    );

    return res.json({
      success: true,
      message:
        resourceFile
          ? "Download and document updated successfully"
          : "Download updated successfully",
      resource:
        result.rows[0],
    });
  } catch (error) {
    console.error(
      "Update resource error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "Unable to update download",
    });
  }
};


/* DELETE RESOURCE */

const deleteResource = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `
      DELETE FROM resources
      WHERE id = $1
      RETURNING *
      `,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message:
          "Download not found",
      });
    }

    return res.json({
      success: true,
      message:
        "Download deleted successfully",
    });
  } catch (error) {
    console.error(
      "Delete resource error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to delete download",
    });
  }
};


/* =========================================================
   ENQUIRIES
========================================================= */

/* GET ENQUIRIES */

const getEnquiries = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT *
      FROM contact_enquiries
      ORDER BY created_at DESC
    `);

    return res.json({
      success: true,
      enquiries: result.rows,
    });
  } catch (error) {
    console.error(
      "Get enquiries error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to load enquiries",
    });
  }
};


/* UPDATE ENQUIRY STATUS */

const updateEnquiryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body || {};

    if (!status) {
      return res.status(400).json({
        success: false,
        message:
          "Enquiry status is required",
      });
    }

    const result = await pool.query(
      `
      UPDATE contact_enquiries
      SET
        status = $1
      WHERE id = $2
      RETURNING *
      `,
      [status, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message:
          "Enquiry not found",
      });
    }

    return res.json({
      success: true,
      message:
        "Enquiry status updated successfully",
      enquiry:
        result.rows[0],
    });
  } catch (error) {
    console.error(
      "Update enquiry status error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to update enquiry status",
    });
  }
};


/* DELETE ENQUIRY */

const deleteEnquiry = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `
      DELETE FROM contact_enquiries
      WHERE id = $1
      RETURNING *
      `,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message:
          "Enquiry not found",
      });
    }

    return res.json({
      success: true,
      message:
        "Enquiry deleted successfully",
    });
  } catch (error) {
    console.error(
      "Delete enquiry error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to delete enquiry",
    });
  }
};


/* =========================================================
   EXPORTS
========================================================= */

module.exports = {
  getDashboardStats,

  // PRODUCTS
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,

  // INDUSTRIES
  getIndustries,
  createIndustry,
  updateIndustry,
  deleteIndustry,

  // GALLERY
  getGallery,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,

  // DOWNLOADS
  getResources,
  createResource,
  updateResource,
  deleteResource,

  // ENQUIRIES
  getEnquiries,
  updateEnquiryStatus,
  deleteEnquiry,
};

