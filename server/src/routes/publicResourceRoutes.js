const express = require("express");

const {
  getPublicResources,
} = require("../controllers/publicResourceController");

const router = express.Router();

router.get("/", getPublicResources);

module.exports = router;