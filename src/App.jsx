/* global submitAPI */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import FoodCategoryPage from './pages/FoodCategoryPage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import './App.css';

function App() {
    const submitForm = (formData, navigate) => {
        console.log('Form Data:', formData);
        navigate('/confirmed');
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/product" element={<ProductPage />} />
                    <Route path="/food-category" element={<FoodCategoryPage />} />
                    <Route path="/booking" element={<BookingPage />} />
                    <Route path="/confirmed" element={<ConfirmedBooking />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App; 