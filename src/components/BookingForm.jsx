import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingForm.css';

function BookingForm({ submitForm }) {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedMeal, setSelectedMeal] = useState('');
    const navigate = useNavigate();

    const meals = [
        { id: 1, name: 'Lemon Chicken' },
        { id: 2, name: 'Lemon Pasta' },
        { id: 3, name: 'Lemon Tart' },
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            date: selectedDate,
            meal: selectedMeal,
        };
        submitForm(formData, navigate);
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <h2>Book Your Table</h2>
            <div className="form-group">
                <label htmlFor="date">Choose a date:</label>
                <input
                    type="date"
                    id="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="meal">Choose a meal:</label>
                <select
                    id="meal"
                    value={selectedMeal}
                    onChange={(e) => setSelectedMeal(e.target.value)}
                    required
                >
                    <option value="">Select a meal</option>
                    {meals.map((meal) => (
                        <option key={meal.id} value={meal.name}>
                            {meal.name}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
}

export default BookingForm; 