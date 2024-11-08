import React from 'react';
import { Link } from 'react-router-dom';
import './HeroBanner.css';

function HeroBanner() {
    return (
        <div className="hero-banner">
            <nav className="nav-menu">
                <ul>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/food-category">Food Category</Link></li>
                </ul>
            </nav>
            <h1>Welcome to Little Lemon</h1>
            <Link to="/booking">
                <button className="cta-button">Book Table Now</button>
            </Link>
        </div>
    );
}

export default HeroBanner; 