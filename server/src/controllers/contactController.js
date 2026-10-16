const pool = require("../config/db");

const createContactEnquiry = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      subject,
      message,
    } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required",
      });
    }

    const result = await pool.query(
      `
        INSERT INTO contact_enquiries
        (
          name,
          email,
          phone,
          company,
          subject,
          message,
          status
        )
        VALUES
        ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *
      `,
      [
        name.trim(),
        email.trim().toLowerCase(),
        phone?.trim() || null,
        company?.trim() || null,
        subject?.trim() || "Website Contact Form",
        message.trim(),
        "new",
      ]
    );

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      enquiry: result.rows[0],
    });
  } catch (error) {
    console.error(
      "CREATE CONTACT ENQUIRY ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Unable to submit enquiry",
    });
  }
};

module.exports = {
  createContactEnquiry,
};