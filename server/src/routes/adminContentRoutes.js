const express = require("express");

const protectAdmin = require(
  "../middleware/authMiddleware"
);

const upload = require(
  "../middleware/uploadMiddleware"
);

const {
  getDashboardStats,

  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,

  getIndustries,
  createIndustry,
  updateIndustry,
  deleteIndustry,

  getGallery,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,

  getResources,
  createResource,
  updateResource,
  deleteResource,

  getEnquiries,
  updateEnquiryStatus,
  deleteEnquiry,
} = require(
  "../controllers/adminContentController"
);

const router = express.Router();


/* =========================================================
   ALL ROUTES BELOW REQUIRE ADMIN LOGIN
========================================================= */

router.use(protectAdmin);


/* =========================================================
   DASHBOARD
========================================================= */

router.get(
  "/stats",
  getDashboardStats
);


/* =========================================================
   PRODUCTS
========================================================= */

router.get(
  "/products",
  getProducts
);


/*
  PRODUCT IMAGE FIELDS:

  product_image
  hero_image
*/

router.post(
  "/products",

  upload.fields([
    {
      name: "product_image",
      maxCount: 1,
    },
    {
      name: "hero_image",
      maxCount: 1,
    },
  ]),

  createProduct
);


router.put(
  "/products/:id",

  upload.fields([
    {
      name: "product_image",
      maxCount: 1,
    },
    {
      name: "hero_image",
      maxCount: 1,
    },
  ]),

  updateProduct
);


router.delete(
  "/products/:id",
  deleteProduct
);


/* =========================================================
   INDUSTRIES
========================================================= */

router.get(
  "/industries",
  getIndustries
);


/*
  INDUSTRY IMAGE FIELD:

  industry_image
*/

router.post(
  "/industries",

  upload.fields([
    {
      name: "industry_image",
      maxCount: 1,
    },
  ]),

  createIndustry
);


router.put(
  "/industries/:id",

  upload.fields([
    {
      name: "industry_image",
      maxCount: 1,
    },
  ]),

  updateIndustry
);


router.delete(
  "/industries/:id",
  deleteIndustry
);


/* =========================================================
   GALLERY
========================================================= */

router.get(
  "/gallery",
  getGallery
);


/*
  GALLERY IMAGE FIELD:

  gallery_image
*/

router.post(
  "/gallery",

  upload.fields([
    {
      name: "gallery_image",
      maxCount: 1,
    },
  ]),

  createGalleryItem
);


router.put(
  "/gallery/:id",

  upload.fields([
    {
      name: "gallery_image",
      maxCount: 1,
    },
  ]),

  updateGalleryItem
);


router.delete(
  "/gallery/:id",
  deleteGalleryItem
);


/* =========================================================
   DOWNLOADS
========================================================= */

router.get(
  "/downloads",
  getResources
);


router.post(
  "/downloads",
  upload.documentUpload.fields([
    {
      name: "file",
      maxCount: 1,
    },
  ]),
  createResource
);


router.put(
  "/downloads/:id",
  upload.documentUpload.fields([
    {
      name: "file",
      maxCount: 1,
    },
  ]),
  updateResource
);


router.delete(
  "/downloads/:id",
  deleteResource
);


/* =========================================================
   ENQUIRIES
========================================================= */

router.get(
  "/enquiries",
  getEnquiries
);


router.patch(
  "/enquiries/:id/status",
  updateEnquiryStatus
);


router.delete(
  "/enquiries/:id",
  deleteEnquiry
);


module.exports = router;