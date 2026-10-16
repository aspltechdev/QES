const express = require("express");

const {
  createContactEnquiry,
} = require("../controllers/contactController");

const router = express.Router();

// POST /api/contact
router.post("/", createContactEnquiry);

module.exports = router;