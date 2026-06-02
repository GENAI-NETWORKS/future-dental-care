import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/clinicData';
import './Services.css';

const Services: React.FC = () => {
  return (
    <main className="services-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <motion.div 
            className="page-hero-content text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">Our Services</h1>
            <p className="page-subtitle text-muted">
              Comprehensive dental care tailored to your unique needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="services-page-grid">
            {services.map((service, idx) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-surface text-center">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-surface">Not sure what treatment you need?</h2>
            <p className="section-subtitle text-surface" style={{ opacity: 0.8 }}>
              Book a consultation with our experts to get a personalized treatment plan.
            </p>
            <Link to="/contact" className="btn btn-accent btn-large mt-4">
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;
