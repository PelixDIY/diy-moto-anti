import React from 'react';
import BookingForm from '../components/BookingForm';

const Booking = () => {
  return (
    <div className="page-container container section">
          <div className="section-header">
        <h1>Book Your Bay</h1>
        <p>Select your time and tools below.</p>
      </div>

      <div className="booking-wrapper">
        <BookingForm />
      </div>

      <div className="booking-info">
        <h3>Booking Policy</h3>
        <ul>
          <li>Please arrive 15 minutes before your scheduled time.</li>
          <li>Cancellations must be made at least 24 hours in advance.</li>
          <li>Safety gear (closed-toe shoes) is mandatory.</li>
        </ul>
      </div>

      <style>{`
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .section-header h1 {
          margin-bottom: 0.5rem;
        }
        .section-header p {
          color: var(--color-text-secondary);
        }
        .booking-wrapper {
          margin-bottom: 3rem;
        }
        .booking-info {
          background-color: var(--color-bg-card);
          padding: 2rem;
          border-radius: 8px;
          border-left: 4px solid var(--color-accent-orange);
        }
        .booking-info h3 {
          margin-bottom: 1rem;
        }
        .booking-info ul {
          padding-left: 1.5rem;
          color: var(--color-text-secondary);
        }
        .booking-info li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default Booking;
