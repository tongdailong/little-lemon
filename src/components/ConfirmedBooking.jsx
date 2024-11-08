import React from 'react';
import NavBar from './NavBar';
import HeroBanner from './HeroBanner';
function ConfirmedBooking() {
    return (
        <>
            <NavBar />
            <HeroBanner />
            <div>
                <h1>Booking Confirmed!</h1>
                <p>Your booking has been successfully confirmed. Thank you!</p>
            </div>
        </>
    );
}

export default ConfirmedBooking; 