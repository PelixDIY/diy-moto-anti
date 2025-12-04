import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
    const featuredServices = [
        {
            title: 'Bay Rental',
            price: 'Rp 200k / hr',
            description: 'Rent a professional work bay with a hydraulic lift.',
            features: ['Hydraulic Lift', 'Work Bench', 'Air Compressor', 'Basic Hand Tools'],
        },
        {
            title: 'Full Garage Access',
            price: 'Rp 250k / hr',
            description: 'The ultimate DIY experience with everything included.',
            features: ['Bay + Lift', 'All Specialty Tools', 'Oil Disposal', 'Expert Advice'],
        },
    ];

    return (
        <div className="home-page">
            <SEO
                title="Home"
                description="Rent a professional motorcycle work bay in Bali. Fully equipped with lifts and tools."
            />
            <Hero />

            <section className="section container">
                <div className="section-header">
                    <h2>Our Services</h2>
                    <p>Everything you need to maintain your ride.</p>
                </div>
                <div className="services-grid">
                    {featuredServices.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </section>

            <section className="section bg-card">
                <div className="container cta-section">
                    <h2>Ready to get your hands dirty?</h2>
                    <p>Book your slot now and start working on your motorcycle.</p>
                    <a href="/booking" className="btn btn-primary">Book Now</a>
                </div>
            </section>

            <style>{`
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: #fff;
        }
        .section-header p {
          color: var(--color-text-secondary);
          font-size: 1.1rem;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .bg-card {
          background-color: var(--color-bg-card);
          margin-top: 2rem;
        }
        .cta-section {
          text-align: center;
          padding: 4rem 0;
        }
        .cta-section h2 {
          margin-bottom: 1rem;
        }
        .cta-section p {
          margin-bottom: 2rem;
          color: var(--color-text-secondary);
        }
      `}</style>
        </div>
    );
};

export default Home;
