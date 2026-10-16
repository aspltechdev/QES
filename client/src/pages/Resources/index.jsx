
import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import downloadPreviewImage from "../../assets/8.png";

import "./Resources.css";


/* =========================================================
   BACKEND
========================================================= */

const BACKEND =
  "http://localhost:5000";

const API =
  `${BACKEND}/api/resources`;


/* =========================================================
   EXISTING STATIC DOWNLOADS
========================================================= */

const staticDownloads = [
  {
    title: "Product Catalogue",
    description:
      "Complete overview of our industrial marking solutions.",
    file_url:
      `${BACKEND}/uploads/catalogues/product-catalogue.pdf`,
    resource_type: "Catalogue",
    source: "static",
  },

  {
    title: "Conventional Marking Systems",
    description:
      "Brochure covering our complete range of conventional marking products.",
    file_url: "#",
    resource_type: "Brochure",
    source: "static",
  },

  {
    title: "Pin (Dot Peen) Marking Machines",
    description:
      "Technical brochure featuring our pin marking machine range.",
    file_url: "#",
    resource_type: "Brochure",
    source: "static",
  },

  {
    title: "Laser Marking Machines",
    description:
      "Explore our laser marking solutions and technical specifications.",
    file_url: "#",
    resource_type: "Brochure",
    source: "static",
  },

  {
    title: "Company Profile",
    description:
      "Learn more about Quality Engineering Solutions and our expertise.",
    file_url: "#",
    resource_type: "Company Profile",
    source: "static",
  },
];


/* =========================================================
   CONVERT DATABASE FILE URL TO BACKEND URL
========================================================= */

function getFileUrl(fileUrl) {
  if (!fileUrl || fileUrl === "#") {
    return "#";
  }

  if (
    fileUrl.startsWith("http://") ||
    fileUrl.startsWith("https://")
  ) {
    return fileUrl;
  }

  if (fileUrl.startsWith("/")) {
    return `${BACKEND}${fileUrl}`;
  }

  return `${BACKEND}/${fileUrl}`;
}


/* =========================================================
   COMPONENT
========================================================= */

function ResourcesPage() {
  const [
    databaseDownloads,
    setDatabaseDownloads,
  ] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");


  /* =========================================================
     LOAD DOWNLOADS
  ========================================================= */

  useEffect(() => {
    loadDownloads();
  }, []);


  async function loadDownloads() {
    try {
      setLoading(true);
      setError("");

      const response =
        await fetch(API);

      const data =
        await response.json();

      if (
        !response.ok ||
        !data.success
      ) {
        throw new Error(
          data.message ||
            "Unable to load downloads"
        );
      }

      const converted =
        (data.resources || []).map(
          (item) => {
            const isProductCatalogue =
              item.title ===
              "Product Catalogue";

            return {
              id: item.id,

              title:
                item.title,

              description:
                item.description ||
                "",

              file_url:
                isProductCatalogue
                  ? `${BACKEND}/uploads/catalogues/product-catalogue.pdf`
                  : getFileUrl(
                      item.file_url
                    ),

              preview_image:
                item.preview_image ||
                "",

              resource_type:
                item.resource_type ||
                "Download",

              source:
                "database",
            };
          }
        );

      setDatabaseDownloads(
        converted
      );
    } catch (error) {
      console.error(
        "Public resources error:",
        error
      );

      setError(
        error.message
      );
    } finally {
      setLoading(false);
    }
  }


  /* =========================================================
     DOWNLOAD ANY RESOURCE
  ========================================================= */

  async function downloadResource(
    event,
    item
  ) {
    event.preventDefault();

    const fileUrl =
      getFileUrl(
        item.file_url
      );

    if (
      !fileUrl ||
      fileUrl === "#"
    ) {
      return;
    }

    try {
      const response =
        await fetch(fileUrl);

      if (!response.ok) {
        throw new Error(
          "Unable to download file"
        );
      }

      const blob =
        await response.blob();

      const blobUrl =
        window.URL.createObjectURL(
          blob
        );

      const link =
        document.createElement("a");

      link.href =
        blobUrl;

      const fileName =
        fileUrl
          .split("/")
          .pop()
          ?.split("?")[0] ||
        "QES-Download";

      link.download =
        fileName;

      document.body.appendChild(
        link
      );

      link.click();

      document.body.removeChild(
        link
      );

      window.URL.revokeObjectURL(
        blobUrl
      );
    } catch (error) {
      console.error(
        "Resource download error:",
        error
      );

      /*
       * Fallback:
       * Open the actual backend file URL.
       */
      window.open(
        fileUrl,
        "_blank",
        "noopener,noreferrer"
      );
    }
  }


  /* =========================================================
     DOWNLOAD LIST
  ========================================================= */

  const allDownloads =
    databaseDownloads.length > 0
      ? databaseDownloads
      : staticDownloads;


  /* =========================================================
     PREVIEW IMAGE
  ========================================================= */

  const previewImage =
    downloadPreviewImage;


  return (
    <main className="resources-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="resources-hero">

        <div className="resources-hero-overlay" />

        <div className="resources-hero-content">

          <span>
            DOWNLOADS
          </span>

          <h1>
            BROCHURES & TECHNICAL RESOURCES
          </h1>

        </div>

      </section>


      {/* =====================================================
          DOWNLOAD CENTER
      ===================================================== */}

      <section className="resources-download-section">

        <div className="resources-container">


          <div className="resources-heading">

            <span>
              DOWNLOAD CENTER
            </span>

            <h2>
              Everything You Need,{" "}
              <strong>
                All In One Place
              </strong>
            </h2>

            <p>
              Download product brochures,
              technical specifications, and
              company resources to learn more
              about our marking solutions and
              applications.
            </p>

          </div>


          {/* =================================================
              LOADING
          ================================================= */}

          {loading && (
            <div className="resources-status">
              Loading downloads...
            </div>
          )}


          {/* =================================================
              ERROR
          ================================================= */}

          {error && (
            <div className="resources-status resources-status-error">
              {error}
            </div>
          )}


          <div className="resources-download-layout">


            {/* ===============================================
                PREVIEW IMAGE
            =============================================== */}

            <div className="resources-preview-image">

              <img
                src={previewImage}
                alt="QES product brochures"
              />

            </div>


            {/* ===============================================
                DOWNLOAD LIST
            =============================================== */}

            <div className="resources-download-list">

              {allDownloads.map(
                (item, index) => {

                  const isRealFile =
                    item.file_url &&
                    item.file_url !== "#";


                  return (
                    <a
                      href={
                        isRealFile
                          ? getFileUrl(
                              item.file_url
                            )
                          : "#"
                      }

                      className="resource-download-item"

                      key={
                        item.source ===
                        "database"
                          ? `db-${item.id}`
                          : `static-${index}`
                      }

                      onClick={
                        isRealFile
                          ? (event) =>
                              downloadResource(
                                event,
                                item
                              )
                          : (event) =>
                              event.preventDefault()
                      }
                    >

                      <div>

                        {item.resource_type && (
                          <span className="resource-type">
                            {item.resource_type}
                          </span>
                        )}

                        <h3>
                          {item.title}
                        </h3>

                        <p>
                          {item.description}
                        </p>

                      </div>


                      <span className="resource-download-icon">
                        ↓
                      </span>

                    </a>
                  );
                }
              )}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="resources-cta">

        <div className="resources-cta-overlay" />

        <div className="resources-container resources-cta-content">

          <div>

            <span>
              NEED MORE INFORMATION?
            </span>

            <h2>
              Can't Find the Document You're
              <br />
              Looking For?
            </h2>

            <p>
              Contact our team for product
              brochures, technical documentation,
              or application-specific information.
            </p>

          </div>


          <Link to="/contact">
            Contact Us
          </Link>

        </div>

      </section>

    </main>
  );
}


export default ResourcesPage;

