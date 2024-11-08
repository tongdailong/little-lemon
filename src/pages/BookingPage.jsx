import React from 'react';
import NavBar from '../components/NavBar';
import BookingForm from '../components/BookingForm';
import './BookingPage.css';

function BookingPage() {
    return (
        <div className="booking-page">
            <NavBar />
            <div className="booking-content">
                <BookingForm submitForm={(formData, navigate) => {
                    console.log('Form Data:', formData);
                    navigate('/confirmed');
                }} />
            </div>
        </div>
    );
}

export default BookingPage; 