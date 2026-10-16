const express = require("express");

const {
  getPublicProducts,
  getPublicProductBySlug,
} = require(
  "../controllers/publicProductController"
);

const router = express.Router();


/* PUBLIC PRODUCT LIST */

router.get(
  "/",
  getPublicProducts
);


/* PUBLIC SINGLE PRODUCT */

router.get(
  "/:slug",
  getPublicProductBySlug
);


module.exports = router;