import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";
import getImageUrl from "../../utils/imageUrl";
import image90 from "../../assets/90.png";
import image91 from "../../assets/91.png";
import image92 from "../../assets/92.png";
import image93 from "../../assets/93.png";

import image95 from "../../assets/95.png";
import image96 from "../../assets/96.png";
import image97 from "../../assets/97.png";
import image98 from "../../assets/98.png";

import "./Gallery.css";


/* =========================================================
   EXISTING 8 GALLERY CARDS

   IMAGE ORDER

   1 -> 90.png
   2 -> 91.png
   3 -> 92.png
   4 -> 93.png

   5 -> 95.png
   6 -> 96.png
   7 -> 97.png
   8 -> 98.png
========================================================= */

const existingGalleryItems = [
  {
    title: "Automotive Production Line",

    description:
      "Permanent marking for automotive production and traceability.",

    image: image90,

    size: "small",
  },

  {
    title: "Aerospace Component Marking",

    description:
      "High-precision identification for critical aerospace parts.",

    image: image91,

    size: "large",
  },

  {
    title: "Precision Metal Processing",

    description:
      "Reliable identification for modern metal manufacturing.",

    image: image92,

    size: "wide",
  },

  {
    title: "Steel Fabrication Project",

    description:
      "Permanent marking for fabricated steel and metal components.",

    image: image93,

    size: "large",
  },

  {
    title: "Heavy Engineering Facility",

    description:
      "Durable marking solutions for demanding industrial applications.",

    image: image95,

    size: "small",
  },

  {
    title: "Pin (Dot Peen) Marking System",

    description:
      "Industrial dot peen marking for permanent traceability.",

    image: image96,

    size: "small",
  },

  {
    title: "Machine Installation",

    description:
      "QES engineers installing and testing marking equipment.",

    image: image97,

    size: "small",
  },

  {
    title: "Industrial Marking Solutions",

    description:
      "Reliable permanent marking for long-lasting industrial identification.",

    image: image98,

    size: "small",
  },
];


const API = `${import.meta.env.VITE_API_URL}/api/gallery`;


function GalleryPage() {
  const [
    databaseGallery,
    setDatabaseGallery,
  ] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");


  /* =========================================================
     LOAD DATABASE GALLERY
  ========================================================= */

  useEffect(() => {
    loadGallery();
  }, []);


  async function loadGallery() {
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
            "Unable to load gallery"
        );
      }


      setDatabaseGallery(
        data.gallery || []
      );

    } catch (error) {

      console.error(
        "Public gallery error:",
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
     FIRST 8 EXISTING GALLERY ITEMS

     Local images control the first 8 cards.

     Database still controls:
     - title
     - description
     - category

     when those records exist.
  ========================================================= */

  const existingItems =
    existingGalleryItems.map(
      (localItem, index) => {

        const databaseItem =
          databaseGallery[index];


        return {
          id:
            databaseItem?.id ||
            `existing-${index}`,

          title:
            databaseItem?.title ||
            localItem.title,

          description:
            databaseItem?.description ||
            localItem.description,

          category:
            databaseItem?.category ||
            "",

          image:
            localItem.image,

          size:
            localItem.size,

          source:
            "existing",
        };
      }
    );


  /* =========================================================
     NEW ADMIN-CREATED GALLERY ITEMS

     Anything after the first 8 database records
     appears after the original gallery cards.

     New records use their own database image.
  ========================================================= */

 const newDatabaseItems =
  databaseGallery
    .slice(8)
    .map(
      (item) => ({

        id:
          item.id,

        title:
          item.title,

        description:
          item.description ||
          "",

        category:
          item.category ||
          "",

        image:
          getImageUrl(
            item.image
          ),

        size:
          "small",

        source:
          "database-new",

      })
    );

  /* =========================================================
     FINAL GALLERY
  ========================================================= */

  const allGalleryItems = [
    ...existingItems,
    ...newDatabaseItems,
  ];


  return (
    <main className="gallery-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="gallery-hero">

        <div className="gallery-hero-overlay" />


        <div className="gallery-hero-content">

          <span>
            GALLERY
          </span>


          <h1>
            REAL PROJECTS. REAL PRECISION.
          </h1>

        </div>

      </section>


      {/* =====================================================
          SHOWCASE
      ===================================================== */}

      <section className="gallery-showcase">

        <div className="gallery-container">


          <div className="gallery-heading">

            <span>
              OUR SHOWCASE
            </span>


            <h2>
              Precision{" "}

              <strong>
                In Action
              </strong>
            </h2>


            <p>
              Every project reflects our commitment
              to quality, innovation, and engineering
              excellence. Discover how our industrial
              marking solutions are helping
              manufacturers improve productivity,
              traceability, and operational efficiency.
            </p>

          </div>


          {/* =================================================
              LOADING
          ================================================= */}

          {loading && (
            <div className="gallery-status">
              Loading gallery...
            </div>
          )}


          {/* =================================================
              ERROR
          ================================================= */}

          {error && (
            <div className="gallery-status gallery-status-error">
              {error}
            </div>
          )}


          {/* =================================================
              GALLERY GRID
          ================================================= */}

          {!loading && (
            <div className="gallery-grid">

              {allGalleryItems.map(
                (item, index) => (

                  <article
                    className={`gallery-card gallery-card-${item.size}`}
                    key={`${item.source}-${item.id}-${index}`}
                  >


                    {/* IMAGE */}

                    {item.image ? (

                      <img
                        src={item.image}
                        alt={item.title}
                      />

                    ) : (

                      <div className="gallery-image-placeholder">
                        QES
                      </div>

                    )}


                    {/* OVERLAY */}

                    <div className="gallery-card-overlay" />


                    {/* CONTENT */}

                    <div className="gallery-card-content">

                      {item.category && (

                        <span className="gallery-card-category">
                          {item.category}
                        </span>

                      )}


                      <h3>
                        {item.title}
                      </h3>


                      {item.description && (

                        <p>
                          {item.description}
                        </p>

                      )}

                    </div>

                  </article>

                )
              )}

            </div>
          )}

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="gallery-cta">

        <div className="gallery-cta-overlay" />


        <div className="gallery-container gallery-cta-inner">

          <div>

            <span>
              LET'S BUILD TOGETHER
            </span>


            <h2>
              Inspired by What You See?
            </h2>


            <p>
              See how the same precision,
              reliability, and engineering expertise
              can support your next manufacturing
              project.
            </p>

          </div>


          <Link to="/contact">

            Request a Quote

            <span>
              →
            </span>

          </Link>

        </div>

      </section>

    </main>
  );
}


export default GalleryPage;