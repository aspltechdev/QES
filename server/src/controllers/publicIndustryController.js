const pool = require("../config/db");


/* =========================================================
   GET ALL ACTIVE INDUSTRIES
========================================================= */

const getPublicIndustries = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        id,
        name,
        slug,
        title,
        description,
        image,
        applications,
        is_active,
        created_at
      FROM industries
      WHERE is_active = TRUE
      ORDER BY created_at ASC
    `);

    return res.json({
      success: true,
      industries: result.rows,
    });
  } catch (error) {
    console.error(
      "Get public industries error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Unable to load industries",
    });
  }
};


module.exports = {
  getPublicIndustries,
};