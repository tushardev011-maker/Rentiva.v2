import React from "react";
import "./portfolio.css";
import profileImg from "/images/profile.jpeg"; 

function Portfolio() {
  return (
    <section className="portfolio" id="portfolios">

      <div className="portfolio-hero">
        <img src={profileImg} alt="Tushar" className="profile-img" />

        <div className="hero-text">
          <h1>Tushar</h1>
          <p className="portfolio-tagline">
            Web Developer 
          </p>

          <p className="intro">
            I am a passionate Web Developer with hands-on experience in building
            responsive and user-friendly websites using HTML, CSS, JavaScript,
            and React.
          </p>
        </div>
      </div>

      <div className="skills">
        <h3>Skills</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React JS</li>
          <li>Responsive Design</li>
        </ul>
      </div>


      <div className="projects">
        <h3>Projects</h3>

        <div className="project-card">
          <h4>Car Rental Website (Rentiva)</h4>
          <p>
            A modern car rental website with Home, About, Cars, Booking,
            Contact and Portfolio pages using React Router.
          </p>
        </div>

        <div className="project-card">
          <h4>Cafe Website</h4>
          <p>
            A modern cafe website designed to showcase menu items, ambiance, and online reservations. Built with responsive design for seamless user experience across devices.
          </p>
        </div>
      </div>

      <div className="portfolio-contact">
        <h3>Contact</h3>
        <p><strong>Email:</strong> tushar.dev011@gmail.com</p>
        <p><strong>Location:</strong> Himachal Pradesh, India</p>
      </div>

    </section>
  );
}

export default Portfolio;
