import React from 'react';
import './Card.css';

function Card({ img, price, productName, review }) {
    return (
        <div className="card">
            <img src={img} alt={productName} className="card-img" />
            <h2>{productName}</h2>
            <p>Price: ${price}</p>
            <p>Review: {review}</p>
        </div>
    );
}

export default Card; 