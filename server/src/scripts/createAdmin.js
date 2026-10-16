require("dotenv").config();

const bcrypt = require("bcryptjs");
const pool = require("../config/db");

async function createAdmin() {
  try {
    const name = process.env.ADMIN_NAME;
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;

    if (!name || !email || !password) {
      console.error(
        "ADMIN_NAME, ADMIN_EMAIL and ADMIN_PASSWORD must be set in .env"
      );

      process.exit(1);
    }

    const existingAdmin = await pool.query(
      "SELECT id FROM admins WHERE email = $1",
      [email.toLowerCase()]
    );

    if (existingAdmin.rows.length > 0) {
      console.log("Admin already exists.");

      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await pool.query(
      `
      INSERT INTO admins
        (name, email, password)
      VALUES
        ($1, $2, $3)
      RETURNING id, name, email
      `,
      [
        name,
        email.toLowerCase(),
        hashedPassword,
      ]
    );

    console.log("Admin created successfully:");
    console.log(result.rows[0]);

    process.exit(0);
  } catch (error) {
    console.error("Create admin error:", error);

    process.exit(1);
  }
}

createAdmin();