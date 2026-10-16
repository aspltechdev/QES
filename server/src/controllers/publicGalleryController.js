const pool = require("../config/db");


/* =========================================================
   GET ALL ACTIVE GALLERY ITEMS
========================================================= */

const getPublicGallery = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        id,
        title,
        description,
        image,
        category,
        is_active,
        created_at
      FROM gallery
      WHERE is_active = TRUE
      ORDER BY created_at DESC
    `);

    return res.json({
      success: true,
      gallery: result.rows,
    });
  } catch (error) {
    console.error(
      "Get public gallery error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Unable to load gallery",
    });
  }
};


module.exports = {
  getPublicGallery,
};