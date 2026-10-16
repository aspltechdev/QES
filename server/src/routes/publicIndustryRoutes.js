const express = require("express");

const {
  getPublicIndustries,
} = require(
  "../controllers/publicIndustryController"
);

const router = express.Router();


/* GET /api/industries */

router.get(
  "/",
  getPublicIndustries
);


module.exports = router;