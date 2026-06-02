import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CalendarCheck } from 'lucide-react';
import { clinicInfo, services } from '../data/clinicData';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          date: '',
          service: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <main className="contact-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <motion.div 
            className="page-hero-content text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">Contact & Appointment</h1>
            <p className="page-subtitle text-muted">
              Get in touch with us to schedule your next visit
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="contact-layout">
            {/* Left: Contact Info */}
            <motion.div 
              className="contact-info-panel"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="panel-title">Get In Touch</h2>
              <p className="panel-desc">
                We're here to answer any questions you may have about your dental health or our services.
              </p>
              
              <ul className="contact-details-list">
                <li>
                  <div className="contact-icon-box">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-text">
                    <h3>Visit Us</h3>
                    <p>{clinicInfo.address}</p>
                  </div>
                </li>
                <li>
                  <div className="contact-icon-box">
                    <Phone size={24} />
                  </div>
                  <div className="contact-text">
                    <h3>Call Us</h3>
                    <a href={`tel:${clinicInfo.phoneRaw}`}>{clinicInfo.phone}</a>
                  </div>
                </li>
                <li>
                  <div className="contact-icon-box">
                    <Mail size={24} />
                  </div>
                  <div className="contact-text">
                    <h3>Email Us</h3>
                    <a href={`mailto:${clinicInfo.email}`}>{clinicInfo.email}</a>
                  </div>
                </li>
                <li>
                  <div className="contact-icon-box">
                    <Clock size={24} />
                  </div>
                  <div className="contact-text">
                    <h3>Working Hours</h3>
                    <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-accent">{clinicInfo.hours}</p>
                  </div>
                </li>
              </ul>
              
              <div className="map-embed-placeholder">
                <MapPin size={48} className="map-pin-icon" />
                <span>Interactive Map View</span>
              </div>
            </motion.div>

            {/* Right: Appointment Form */}
            <motion.div 
              className="appointment-form-panel"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="panel-title">Book an Appointment</h2>
              
              {submitSuccess ? (
                <div className="success-message">
                  <div className="success-icon-wrapper">
                    <CalendarCheck size={48} />
                  </div>
                  <h3>Request Sent Successfully!</h3>
                  <p>We will contact you shortly to confirm your appointment time.</p>
                </div>
              ) : (
                <form className="appointment-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required 
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="9876543210"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="date">Preferred Date *</label>
                      <input 
                        type="date" 
                        id="date" 
                        name="date" 
                        required 
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="service">Service Needed *</label>
                      <select 
                        id="service" 
                        name="service" 
                        required 
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="general">General Checkup</option>
                        {services.map(service => (
                          <option key={service.id} value={service.id}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Additional Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={4} 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any specific symptoms or questions?"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary w-fit mx-auto submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="loading-spinner"></span>
                    ) : (
                      <>
                        <CalendarCheck size={20} />
                        Request Appointment
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
