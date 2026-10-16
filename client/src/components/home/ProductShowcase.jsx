import { useRef } from "react";
import { Link } from "react-router-dom";

import homepage4 from "../../assets/homepage4thimage.png";
import homepage5 from "../../assets/homepage5thimage.png";
import homepage6 from "../../assets/homepage6thimage.png";


const products = [
  {
    title: "Conventional Marking Systems",
    image: homepage4,
    link: "/products/conventional-marking-systems",
  },
  {
    title: "Pin (Dot Peen) Marking Machines",
    image: homepage5,
    link: "/products/dot-peen-marking",
  },
  {
    title: "Laser Marking Machines",
    image: homepage6,
    link: "/products/laser-marking-machines",
  },
];


const ProductShowcase = () => {
  const sliderRef = useRef(null);


  const scrollProducts = (direction) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const card =
      slider.querySelector(
        ".home-product-card"
      );

    if (!card) return;

    const styles =
      window.getComputedStyle(slider);

    const gap =
      parseFloat(styles.columnGap) ||
      parseFloat(styles.gap) ||
      18;

    const amount =
      card.getBoundingClientRect().width +
      gap;

    slider.scrollBy({
      left:
        direction === "next"
          ? amount
          : -amount,

      behavior: "smooth",
    });
  };


  return (
    <section className="home-products">

      <div className="home-products-container">

        <div className="home-products-copy">

          <span className="home-products-eyebrow">
            OUR PRODUCTS
          </span>

         <h2>
  Complete Industrial
  <br />
  Marking Solutions
</h2>

          <p>
            Explore our range of precision marking
            systems designed to deliver permanent
            identification, reliability, and efficiency
            across diverse manufacturing applications.
          </p>

          <div className="home-products-arrows">

            <button
              type="button"
              aria-label="Previous product"
              onClick={() =>
                scrollProducts("previous")
              }
            >
              ←
            </button>

            <button
              type="button"
              aria-label="Next product"
              onClick={() =>
                scrollProducts("next")
              }
            >
              →
            </button>

          </div>

        </div>


        <div
          className="home-products-slider"
          ref={sliderRef}
        >

          {products.map((product) => (

            <Link
              to={product.link}
              className="home-product-card"
              key={product.title}
            >

              <div className="home-product-image">

                <img
                  src={product.image}
                  alt={product.title}
                />

              </div>

              <h3>
                {product.title}
              </h3>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
};


export default ProductShowcase;
