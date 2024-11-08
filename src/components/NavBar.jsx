import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="nav-menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/food-category">Food Category</Link></li>
                <li><Link to="/booking">Book Table</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar; 