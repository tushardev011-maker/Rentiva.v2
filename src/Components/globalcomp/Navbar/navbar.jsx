import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
        <header className="navbar">
            <div className="logo">
                <img src="/images/logo.png" alt="Rentiva Logo" />
                <span>RENTIVA</span>
            </div>

            <nav className="menu">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/cars">Cars</Link>
                <Link to="/booking">Booking</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Navbar;
