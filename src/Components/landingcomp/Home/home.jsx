import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <>
      <section className="hero" id="homes">
        <div className="hero-text">
          <p className="hero-label">PREMIUM CAR RENTALS</p>

          <h1>
            Luxury Cars <br />
            <span>Without Compromise</span>
          </h1>

          <p className="hero-desc">
            Experience premium driving with our hand-picked
            luxury fleet. Designed for comfort, elegance and trust.
          </p>

          <div className="hero-actions">
            <Link to="/cars" className="btn-dark">View Cars</Link>
            <Link to="/booking" className="btn-light">Book Now</Link>
          </div>
        </div>

        <div className="hero-image">
          <img src="/images/homee.png" alt="Luxury Car" />
        </div>
      </section>
    </>
  );
}

export default Home;