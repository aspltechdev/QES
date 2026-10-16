const pool = require("../config/db");

/* =========================================================
   GET ALL ACTIVE RESOURCES / DOWNLOADS
========================================================= */

const getPublicResources = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        id,
        title,
        description,
        file_url,
        preview_image,
        resource_type,
        is_active,
        created_at
      FROM resources
      WHERE is_active = TRUE
      ORDER BY created_at DESC
    `);

    return res.json({
      success: true,
      resources: result.rows,
    });
  } catch (error) {
    console.error("Get public resources error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to load downloads",
    });
  }
};

module.exports = {
  getPublicResources,
};