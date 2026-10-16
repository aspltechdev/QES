const pool = require("../config/db");


/* =========================================================
   GET ALL ACTIVE PRODUCTS
========================================================= */

const getPublicProducts = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        id,
        name,
        slug,
        category,
        short_description,
        description,
        image,
        hero_image,
        features,
        is_active,
        created_at
      FROM products
      WHERE is_active = TRUE
      ORDER BY created_at DESC
    `);

    return res.json({
      success: true,
      products: result.rows,
    });
  } catch (error) {
    console.error(
      "Get public products error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Unable to load products",
    });
  }
};


/* =========================================================
   GET SINGLE ACTIVE PRODUCT
========================================================= */

const getPublicProductBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const result = await pool.query(
      `
      SELECT
        id,
        name,
        slug,
        category,
        short_description,
        description,
        image,
        hero_image,
        features,
        is_active,
        created_at
      FROM products
      WHERE slug = $1
        AND is_active = TRUE
      LIMIT 1
      `,
      [slug]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.json({
      success: true,
      product: result.rows[0],
    });
  } catch (error) {
    console.error(
      "Get public product error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Unable to load product",
    });
  }
};


module.exports = {
  getPublicProducts,
  getPublicProductBySlug,
};