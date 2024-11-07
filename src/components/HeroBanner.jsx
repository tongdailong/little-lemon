import React from 'react';
import './HeroBanner.css';

function HeroBanner() {
    return (
        <div className="hero-banner">
            <nav className="nav-menu">
                <ul>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#product">Product</a></li>
                    <li><a href="#food-category">Food Category</a></li>
                </ul>
            </nav>
            <h1>Welcome to Little Lemon</h1>
            <button className="cta-button">Book Table Now</button>
        </div>
    );
}

export default HeroBanner; 