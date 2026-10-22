import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpg";
import image4 from "../../assets/4.jpg";
import image5 from "../../assets/5.jpg";
import image6 from "../../assets/6.jpg";

import getImageUrl from "../../utils/imageUrl";

import "./Industries.css";


const API = `${import.meta.env.VITE_API_URL}/api/industries`;



function IndustriesPage() {

  const [
    databaseIndustries,
    setDatabaseIndustries,
  ] = useState([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState("");


  useEffect(() => {

    loadIndustries();

  }, []);


  async function loadIndustries() {

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
          "Unable to load industries"
        );

      }


      const converted =
        (data.industries || []).map(
          (industry) => ({

            id:
              industry.id,

            slug:
              industry.slug,

            eyebrow:
              industry.name
                ?.toUpperCase() ||
              "INDUSTRY",

            title:
              industry.title ||
              industry.name,

            description:
              industry.description ||
              "",

            image:
              getImageUrl(
                industry.image
              ),

            applications:
              Array.isArray(
                industry.applications
              )
                ? industry.applications
                : [],

            source:
              "database",

          })
        );


      setDatabaseIndustries(
        converted
      );

    } catch (error) {

      console.error(
        "Public industries error:",
        error
      );

      setError(
        error.message
      );

    } finally {

      setLoading(false);

    }

  }


  /*
    DATABASE INDUSTRIES ARE USED
    DIRECTLY.

    This is important because the
    database image must not be
    replaced by image1/image2/etc.
  */

 const allIndustries = databaseIndustries;


  return (

    <main className="industries-page">


      {/* HERO */}

      <section className="industries-hero">

        <div className="industries-hero-overlay" />

        <div className="industries-hero-content">

          <span>
            INDUSTRIES WE SERVE
          </span>

          <h1>
            PRECISION MARKING SOLUTIONS
            <br />
            ACROSS INDUSTRIES
          </h1>

        </div>

      </section>


      {/* INTRO */}

      <section className="industries-intro">

        <div className="industries-container">

          <span>
            OUR INDUSTRIES
          </span>

          <h2>

            Engineered For{" "}

            <strong>
              Every Application
            </strong>

          </h2>

          <p>

            From automotive manufacturing
            to heavy engineering, our
            marking solutions are trusted
            by businesses that demand
            precision, durability, and
            complete product traceability.

          </p>

        </div>

      </section>


      {/* INDUSTRIES */}

      <section className="industries-list">

        <div className="industries-container">


          {loading && (

            <div
              style={{
                textAlign:
                  "center",

                padding:
                  "25px",
              }}
            >

              Loading industries...

            </div>

          )}


          {error && (

            <div
              style={{
                marginBottom:
                  "25px",

                padding:
                  "15px",

                borderRadius:
                  "6px",

                background:
                  "#fef2f2",

                color:
                  "#b91c1c",

                textAlign:
                  "center",
              }}
            >

              {error}

            </div>

          )}


          {allIndustries.map(
            (
              industry,
              index
            ) => (

              <article
                className={`industry-row ${
                  index % 2 === 1
                    ? "industry-row-reverse"
                    : ""
                }`}
                key={
                  industry.source ===
                  "database"
                    ? `db-${industry.id}`
                    : `static-${industry.title}`
                }
              >


                {/* IMAGE */}

                <div className="industry-row-image">

                  {industry.image ? (

                    <img
                      src={
                        industry.image
                      }
                      alt={
                        industry.title
                      }

                      onError={(event) => {

                        console.error(
                          "Industry image failed:",
                          industry.image
                        );

                        event.currentTarget.style.display =
                          "none";

                      }}
                    />

                  ) : (

                    <div className="industry-image-placeholder">

                      QES

                    </div>

                  )}

                </div>


                {/* CONTENT */}

                <div className="industry-row-content">

                  <span>
                    {industry.eyebrow}
                  </span>

                  <h3>
                    {industry.title}
                  </h3>

                  <p>
                    {industry.description}
                  </p>


                  {industry.applications
                    .length > 0 && (

                    <div className="industry-applications">

                      {industry.applications.map(
                        (
                          application,
                          applicationIndex
                        ) => (

                          <div
                            key={`${application}-${applicationIndex}`}
                          >

                            <b>
                              ✓
                            </b>

                            {application}

                          </div>

                        )
                      )}

                    </div>

                  )}


                  <Link to="/contact">

                    Explore Solutions

                    <span>
                      →
                    </span>

                  </Link>

                </div>

              </article>

            )
          )}

        </div>

      </section>


      {/* CTA */}

      <section className="industries-cta">

        <div className="industries-cta-overlay" />

        <div className="industries-container industries-cta-inner">

          <div>

            <span>
              LET'S BUILD TOGETHER
            </span>

            <h2>

              Looking for the Right Marking
              <br />
              Solution for Your Industry?

            </h2>

            <p>

              Whether you operate in automotive,
              aerospace, engineering, heavy
              industries, fabrication, or metal
              manufacturing, our experts are
              ready to recommend the ideal
              marking solution for your
              application.

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


export default IndustriesPage;