import "./Hero.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="hero-badge">
          ✨ New Beauty Collection 2026
        </span>

        <h1>
          Reveal Your
          <br />
          Natural Beauty
        </h1>

        <p>
          Discover premium skincare, makeup, haircare, fragrances,
          and beauty essentials crafted to make you look and feel
          your absolute best.
        </p>

        <div className="hero-buttons">

          <Link to="/products" className="shop-btn">
            Shop Now
            <FaArrowRight />
          </Link>

          <Link to="/beauty-quiz" className="explore-btn">
            Beauty Quiz
          </Link>

        </div>

      </div>

      <div className="hero-image">

        <img
          src="/images/hero.jpg"
          alt="Beauty Products"
        />

      </div>

    </section>
  );
}

export default Hero;