import React from 'react';
import { useTranslation } from 'react-i18next';
import BookingForm from '../components/BookingForm';

const Booking = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container container section">
      <div className="section-header">
        <h1>{t('booking.title')}</h1>
        <p>{t('booking.subtitle')}</p>
      </div>

      <div className="booking-wrapper">
        <BookingForm />
      </div>

      <div className="booking-info">
        <h3>{t('booking.policy.title')}</h3>
        <ul>
          <li>{t('booking.policy.arrival')}</li>
          <li>{t('booking.policy.cancellation')}</li>
          <li>{t('booking.policy.safety')}</li>
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
