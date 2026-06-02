import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DoctorCard from '../components/DoctorCard';
import { doctors } from '../data/clinicData';
import './Doctors.css';

const Doctors: React.FC = () => {
  return (
    <main className="doctors-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <motion.div 
            className="page-hero-content text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">Meet Our Experts</h1>
            <p className="page-subtitle text-muted">
              Dedicated professionals committed to excellence in dental care
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="doctors-page-grid">
            {doctors.map((doctor, idx) => (
              <DoctorCard 
                key={doctor.id} 
                doctor={doctor} 
                delay={idx * 0.2} 
              />
            ))}
          </div>
          
          <motion.div 
            className="expertise-summary text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p>
              Combined expertise across General Dentistry, Periodontics & Implantology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Schedule an Appointment</h2>
          <p className="section-subtitle">
            Choose your preferred doctor and book a consultation today.
          </p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Book Now
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Doctors;
