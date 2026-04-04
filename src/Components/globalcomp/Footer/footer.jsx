import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section footer-brand">
          <img src="/images/logo.png" alt="Rentiva Logo" />
          <h2>RENTIVA</h2>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/cars">Cars</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: tushar.dev011@gmail.com</p>
          <p>Phone: +91 7876080XXX</p>
          <p>Address: Kangra HP, India</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://github.com/tushardev011-maker" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.instagram.com/tushar_mehra_031" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p> RENTIVA : Your Trusted Partner for Reliable Car Rentals.</p>
      </div>
    </footer>
  );
}

export default Footer;
