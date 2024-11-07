import React from 'react';
import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';
import './HomePage.css';

function HomePage() {
    const meals = [
        { img: 'meal1.jpg', price: 12.99, productName: 'Lemon Chicken', review: '4.5/5' },
        { img: 'meal2.jpg', price: 9.99, productName: 'Lemon Pasta', review: '4.7/5' },
        { img: 'meal3.jpg', price: 14.99, productName: 'Lemon Tart', review: '4.8/5' },
    ];

    return (
        <div className="homepage">
            <HeroBanner />
            <div className="cards-container">
                <div className="meal-cards">
                    {meals.map((meal, index) => (
                        <Card key={index} {...meal} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage; 