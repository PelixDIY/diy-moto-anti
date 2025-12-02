import React, { useState } from 'react';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
        service: 'Basic Bay Rental (Rp 150k / hr)' // Default service
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, date, time, service } = formData;

        // Format the message for WhatsApp
        const message = `Hello, I would like to book a slot at DIY MotoGarage.%0A%0A*Name:* ${name}%0A*Service:* ${service}%0A*Date:* ${date}%0A*Time:* ${time}`;

        // WhatsApp API URL
        // Using the corrected number: +6287700077111
        const whatsappUrl = `https://wa.me/6287700077111?text=${message}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
    };

    // Get today's date for min attribute
    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="booking-form-container">
            <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="service">Service</label>
                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="form-input"
                    >
                        <option value="Basic Bay Rental (Rp 150k / hr)">Basic Bay Rental (Rp 150k / hr)</option>
                        <option value="Standard Bay Rental (Rp 200k / hr)">Standard Bay Rental (Rp 200k / hr)</option>
                        <option value="Pro Bay Rental (Rp 250k / hr)">Pro Bay Rental (Rp 250k / hr)</option>
                    </select>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            min={today}
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="time">Time</label>
                        <input
                            type="time"
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                    Book via WhatsApp
                </button>
            </form>

            <style>{`
                .booking-form-container {
                    max-width: 500px;
                    margin: 0 auto;
                    background-color: var(--color-bg-card);
                    padding: 2rem;
                    border-radius: 8px;
                    border: 1px solid var(--color-border);
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
                }
                
                .booking-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                
                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                
                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                }
                
                label {
                    color: var(--color-text-secondary);
                    font-size: 0.9rem;
                    font-weight: 500;
                }
                
                .form-input {
                    padding: 0.75rem;
                    background-color: var(--color-bg-dark);
                    border: 1px solid var(--color-border);
                    border-radius: 4px;
                    color: var(--color-text-primary);
                    font-family: var(--font-family-base);
                    font-size: 1rem;
                    transition: border-color var(--transition-fast);
                }
                
                .form-input:focus {
                    outline: none;
                    border-color: var(--color-accent-orange);
                }
                
                .submit-btn {
                    margin-top: 1rem;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 0.5rem;
                }

                @media (max-width: 600px) {
                    .form-row {
                        grid-template-columns: 1fr;
                    }
                }

                /* Invert calendar and time icons to white */
                input[type="date"]::-webkit-calendar-picker-indicator,
                input[type="time"]::-webkit-calendar-picker-indicator {
                    filter: invert(1);
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
};

export default BookingForm;
