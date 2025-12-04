import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'Basic Bay Rental',
      price: 'Rp 150k / hr',
      description: 'Just the space. Simply tools.',
      features: ['Designated Bay', 'Paddock Stand', 'Waste Oil Disposal', 'Shop Towels'],
    },
    {
      title: 'Standard Bay Rental',
      price: 'Rp 200k / hr',
      description: 'Bay with lift and basic tools.',
      features: ['Hydraulic Lift', 'Basic Tool Set', 'Air Compressor', 'Work Bench'],
    },
    {
      title: 'Pro Bay Rental',
      price: 'Rp 250k / hr',
      description: 'Full access to everything.',
      features: [
        'Hydraulic Lift',
        'Master Tool Set',
        'Specialty Tools',
        'Diagnostic Scanner',
        'Electric Tools'
      ],
    },
  ];

  return (
    <div className="page-container container section">
      <SEO
        title="Services & Pricing"
        description="Check our rental rates for motorcycle work bays, tools, and tire changing services in Bali."
      />
      <div className="section-header">
        <h1>Services & Pricing</h1>
        <p>Transparent pricing. No hidden fees.</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <div className="additional-info section">
        <h2>Membership Options</h2>
        <p>Frequent fixer? Ask us about our monthly membership plans for unlimited access.</p>
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
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .additional-info {
          text-align: center;
          margin-top: 2rem;
          padding: 3rem;
          background-color: var(--color-bg-card);
          border-radius: 8px;
        }
        .additional-info h2 {
          color: var(--color-accent-orange);
          margin-bottom: 1rem;
        }
        .additional-info p {
          color: var(--color-text-primary);
        }
      `}</style>
    </div>
  );
};

export default Services;
