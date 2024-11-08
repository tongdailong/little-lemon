import React, { useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';
import BookingForm from '../components/BookingForm';
import Modal from '../components/Modal';
import NavBar from '../components/NavBar';
import './HomePage.css';

function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const meals = [
        { img: 'meal1.jpg', price: 12.99, productName: 'Lemon Chicken', review: '4.5/5' },
        { img: 'meal2.jpg', price: 9.99, productName: 'Lemon Pasta', review: '4.7/5' },
        { img: 'meal3.jpg', price: 14.99, productName: 'Lemon Tart', review: '4.8/5' },
    ];

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="homepage">
            <NavBar />
            <HeroBanner />
            <div className="cards-container">
                <div className="meal-cards">
                    {meals.map((meal, index) => (
                        <Card key={index} {...meal} />
                    ))}
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <BookingForm submitForm={(formData, navigate) => {
                    console.log('Form Data:', formData);
                    navigate('/confirmed');
                    closeModal();
                }} />
            </Modal>
        </div>
    );
}

export default HomePage; 