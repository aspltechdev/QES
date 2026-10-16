const express = require("express");

const {
  getPublicGallery,
} = require(
  "../controllers/publicGalleryController"
);

const router = express.Router();


router.get(
  "/",
  getPublicGallery
);


module.exports = router;