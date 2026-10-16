const express = require("express");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const pool = require("./src/config/db");


/* =========================================================
   ROUTES
========================================================= */

const authRoutes = require(
  "./src/routes/authRoutes"
);

const adminContentRoutes = require(
  "./src/routes/adminContentRoutes"
);

const contactRoutes = require(
  "./src/routes/contactRoutes"
);

const publicProductRoutes = require(
  "./src/routes/publicProductRoutes"
);

const publicIndustryRoutes = require(
  "./src/routes/publicIndustryRoutes"
);

const publicGalleryRoutes = require(
  "./src/routes/publicGalleryRoutes"
);

const publicResourceRoutes = require(
  "./src/routes/publicResourceRoutes"
);


const app = express();


/* =========================================================
   MIDDLEWARE
========================================================= */

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);


/* JSON BODY */

app.use(
  express.json()
);


/* FORM BODY */

app.use(
  express.urlencoded({
    extended: true,
  })
);


/* =========================================================
   STATIC UPLOADS
========================================================= */

/*
  Files saved inside:

  server/uploads/

  become available at:

  http://localhost:5000/uploads/filename.jpg
*/

app.use(
  "/uploads",
  express.static(
    path.join(
      __dirname,
      "uploads"
    )
  )
);


/* =========================================================
   HOME
========================================================= */

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "QES API is running",
  });
});


/* =========================================================
   DATABASE HEALTH
========================================================= */

app.get(
  "/api/health",
  async (req, res) => {
    try {
      const result =
        await pool.query(`
          SELECT
            current_database() AS database,
            NOW() AS time
        `);

      return res.json({
        success: true,

        message:
          "Backend and PostgreSQL are connected",

        database:
          result.rows[0].database,

        databaseTime:
          result.rows[0].time,
      });

    } catch (error) {

      console.error(
        "Database connection error:",
        error
      );

      return res.status(500).json({
        success: false,

        message:
          "Database connection failed",
      });
    }
  }
);


/* =========================================================
   PUBLIC PRODUCTS
========================================================= */

app.use(
  "/api/products",
  publicProductRoutes
);


/* =========================================================
   PUBLIC INDUSTRIES
========================================================= */

app.use(
  "/api/industries",
  publicIndustryRoutes
);


/* =========================================================
   PUBLIC GALLERY
========================================================= */

app.use(
  "/api/gallery",
  publicGalleryRoutes
);


/* =========================================================
   PUBLIC DOWNLOADS / RESOURCES
========================================================= */

app.use(
  "/api/resources",
  publicResourceRoutes
);


/* =========================================================
   PUBLIC CONTACT
========================================================= */

app.use(
  "/api/contact",
  contactRoutes
);


/* =========================================================
   ADMIN AUTH
========================================================= */

app.use(
  "/api/admin/auth",
  authRoutes
);


/* =========================================================
   ADMIN CONTENT
========================================================= */

app.use(
  "/api/admin/content",
  adminContentRoutes
);


/* =========================================================
   404
========================================================= */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message:
      "API endpoint not found",
  });
});


/* =========================================================
   GLOBAL ERROR HANDLER
========================================================= */

app.use(
  (
    error,
    req,
    res,
    next
  ) => {

    console.error(
      "Server error:",
      error
    );


    /*
      Multer file-size error
    */

    if (
      error.code ===
      "LIMIT_FILE_SIZE"
    ) {
      return res
        .status(400)
        .json({
          success: false,

          message:
            "Image is too large. Maximum file size is 10MB.",
        });
    }


    /*
      Multer unexpected field error
    */

    if (
      error.code ===
      "LIMIT_UNEXPECTED_FILE"
    ) {
      return res
        .status(400)
        .json({
          success: false,

          message:
            "Unexpected image field.",
        });
    }


    /*
      File type errors from uploadMiddleware
    */

    if (
      error.message &&
      error.message.includes(
        "Only JPG"
      )
    ) {
      return res
        .status(400)
        .json({
          success: false,

          message:
            error.message,
        });
    }


    return res
      .status(500)
      .json({
        success: false,

        message:
          "Internal server error",
      });
  }
);


/* =========================================================
   SERVER
========================================================= */

const PORT =
  process.env.PORT || 5000;


app.listen(PORT, () => {

  console.log(
    `QES server running on http://localhost:${PORT}`
  );

  console.log(
    `Uploads: http://localhost:${PORT}/uploads`
  );

  console.log(
    `Products API: http://localhost:${PORT}/api/products`
  );

  console.log(
    `Industries API: http://localhost:${PORT}/api/industries`
  );

  console.log(
    `Gallery API: http://localhost:${PORT}/api/gallery`
  );

  console.log(
    `Resources API: http://localhost:${PORT}/api/resources`
  );

  console.log(
    `Contact API: POST http://localhost:${PORT}/api/contact`
  );

  console.log(
    `Admin API: http://localhost:${PORT}/api/admin/content`
  );

});