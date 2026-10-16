const multer = require("multer");
const path = require("path");
const fs = require("fs");


/* =========================================================
   UPLOAD FOLDER
========================================================= */

const uploadFolder = path.join(
  __dirname,
  "../../uploads"
);


/* =========================================================
   CREATE FOLDER IF IT DOES NOT EXIST
========================================================= */

if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder, {
    recursive: true,
  });
}


/* =========================================================
   STORAGE SETTINGS
========================================================= */

const storage = multer.diskStorage({

  destination: function (
    req,
    file,
    cb
  ) {
    cb(null, uploadFolder);
  },


  filename: function (
    req,
    file,
    cb
  ) {
    const extension =
      path.extname(
        file.originalname
      );

    const cleanName =
      path
        .basename(
          file.originalname,
          extension
        )
        .toLowerCase()
        .replace(
          /[^a-z0-9]+/g,
          "-"
        )
        .replace(
          /^-+|-+$/g,
          ""
        );

    const uniqueName =
      `${Date.now()}-${Math.round(
        Math.random() * 1000000000
      )}`;

    cb(
      null,
      `${cleanName}-${uniqueName}${extension}`
    );
  },

});


/* =========================================================
   IMAGE FILTER
========================================================= */

const imageFileFilter = (
  req,
  file,
  cb
) => {

  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
  ];


  if (
    allowedTypes.includes(
      file.mimetype
    )
  ) {
    cb(null, true);

  } else {

    cb(
      new Error(
        "Only JPG, PNG, WEBP and GIF images are allowed"
      ),
      false
    );
  }

};


/* =========================================================
   DOCUMENT FILTER
========================================================= */

const documentFileFilter = (
  req,
  file,
  cb
) => {

  const allowedTypes = [
    "application/pdf",

    "application/msword",

    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];


  const allowedExtensions = [
    ".pdf",
    ".doc",
    ".docx",
  ];


  const extension =
    path
      .extname(
        file.originalname
      )
      .toLowerCase();


  if (
    allowedTypes.includes(
      file.mimetype
    ) &&
    allowedExtensions.includes(
      extension
    )
  ) {
    cb(null, true);

  } else {

    cb(
      new Error(
        "Only PDF, DOC and DOCX documents are allowed"
      ),
      false
    );
  }

};


/* =========================================================
   IMAGE UPLOAD
========================================================= */

const upload = multer({

  storage,

  fileFilter:
    imageFileFilter,

  limits: {
    fileSize:
      10 * 1024 * 1024,
  },

});


/* =========================================================
   DOCUMENT UPLOAD
========================================================= */

const documentUpload = multer({

  storage,

  fileFilter:
    documentFileFilter,

  limits: {
    fileSize:
      25 * 1024 * 1024,
  },

});


/* =========================================================
   EXPORT
========================================================= */

upload.documentUpload =
  documentUpload;


module.exports = upload;