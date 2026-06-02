import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Award, MapPin, Phone, Mail } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';
import './About.css';

const About: React.FC = () => {
  const values = [
    { icon: Target, title: "Innovation", desc: "We continually invest in the latest dental technologies and techniques." },
    { icon: Heart, title: "Care", desc: "Every treatment is personalized to prioritize your comfort and well-being." },
    { icon: Award, title: "Excellence", desc: "Our commitment to premium quality ensures lasting results for your smile." }
  ];

  return (
    <main className="about-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <motion.div 
            className="page-hero-content text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">About {clinicInfo.name}</h1>
            <p className="page-subtitle text-muted">
              {clinicInfo.address}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="mission-content">
            <motion.div 
              className="mission-text-box"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Our Mission</h2>
              <p className="mission-text">
                At Future Dental Care, we believe that a healthy smile is the foundation of confidence and overall well-being. Our mission is to provide world-class dental care in a welcoming, stress-free environment. 
              </p>
              <p className="mission-text">
                We combine advanced dental technology with compassionate care to ensure that every patient leaves our clinic with a smile that truly increases their face value.
              </p>
            </motion.div>
            
            <motion.div 
              className="mission-image-placeholder"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="placeholder-gradient"></div>
              <div className="experience-badge">
                <span className="exp-number">10+</span>
                <span className="exp-text">Years of<br/>Excellence</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">The principles that guide our practice every day</p>
          </div>
          
          <div className="values-grid">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div 
                  key={idx}
                  className="value-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                >
                  <div className="value-icon-wrapper">
                    <Icon size={32} className="value-icon" />
                  </div>
                  <h3 className="value-title">{val.title}</h3>
                  <p className="value-desc">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section bg-primary text-surface">
        <div className="container">
          <div className="location-grid">
            <motion.div 
              className="location-info"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title text-surface">Visit Our Clinic</h2>
              <p className="location-subtitle text-surface">
                We are conveniently located in Salem, equipped with modern facilities to serve you better.
              </p>
              
              <ul className="location-details">
                <li>
                  <MapPin size={24} className="detail-icon" />
                  <div>
                    <strong>Address:</strong>
                    <p>{clinicInfo.address}</p>
                  </div>
                </li>
                <li>
                  <Phone size={24} className="detail-icon" />
                  <div>
                    <strong>Phone:</strong>
                    <p>{clinicInfo.phone}</p>
                  </div>
                </li>
                <li>
                  <Mail size={24} className="detail-icon" />
                  <div>
                    <strong>Email:</strong>
                    <p>{clinicInfo.email}</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="location-map"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {/* Map Placeholder */}
              <div className="map-placeholder">
                <MapPin size={48} className="map-pin-icon" />
                <span>Interactive Map View</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
