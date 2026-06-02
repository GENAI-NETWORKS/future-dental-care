import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Microscope, Heart, Clock, ArrowRight, Star } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import DoctorCard from '../components/DoctorCard';
import { services, doctors, stats, clinicInfo } from '../data/clinicData';
import './Home.css';

const Home: React.FC = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    // Simple count-up animation for stats
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep === steps) {
        setCounts(stats.map(s => s.value));
        clearInterval(timer);
      } else {
        setCounts(stats.map(s => {
          const val = (s.value / steps) * currentStep;
          return s.value % 1 !== 0 ? Number(val.toFixed(1)) : Math.floor(val);
        }));
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const features = [
    { icon: ShieldCheck, title: "Certified Specialists", desc: "Expert care from highly qualified professionals." },
    { icon: Microscope, title: "Advanced Technology", desc: "State-of-the-art equipment for precise treatments." },
    { icon: Heart, title: "Patient-First Care", desc: "Comfortable, pain-free experience tailored to you." },
    { icon: Clock, title: "Flexible Appointments", desc: "Convenient scheduling to fit your busy lifestyle." }
  ];

  const testimonials = [
    { name: "Rahul S.", rating: 5, text: "Excellent experience. The doctors are highly skilled and the clinic is exceptionally clean." },
    { name: "Priya M.", rating: 5, text: "Got my root canal done here. It was completely painless. Highly recommended!" },
    { name: "Karthik V.", rating: 4, text: "Very professional staff and modern equipment. Happy with my teeth whitening results." }
  ];

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Your Smile Is Our Priority</h1>
            <p className="hero-subtitle">Expert dental care with modern technology in Salem</p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary">Book Appointment</Link>
              <Link to="/services" className="btn btn-outline">View Services</Link>
            </div>
          </motion.div>

          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-value">
                  {counts[idx]}{stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">Comprehensive dental solutions under one roof</p>
          </div>
          
          <div className="services-grid">
            {services.slice(0, 5).map((service, idx) => (
              <ServiceCard 
                key={service.id} 
                title={service.title} 
                icon={service.icon} 
                delay={idx * 0.1}
              />
            ))}
          </div>
          
          <div className="view-all-wrapper">
            <Link to="/services" className="view-all-link">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Doctors Preview Section */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Meet Our Experts</h2>
            <p className="section-subtitle">Dedicated professionals committed to your oral health</p>
          </div>
          
          <div className="doctors-grid">
            {doctors.map((doctor, idx) => (
              <DoctorCard key={doctor.id} doctor={doctor} delay={idx * 0.2} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-primary text-surface">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title text-surface">Why Choose Us</h2>
            <p className="section-subtitle text-surface" style={{ opacity: 0.8 }}>
              We set the standard for premium dental care
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={idx} 
                  className="feature-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="feature-icon-wrapper">
                    <Icon size={32} className="feature-icon" />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Patient Stories</h2>
            <p className="section-subtitle">Don't just take our word for it</p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((test, idx) => (
              <motion.div 
                key={idx} 
                className="testimonial-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className={i < test.rating ? "star-filled" : "star-empty"} 
                      fill={i < test.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <p className="testimonial-text">"{test.text}"</p>
                <p className="testimonial-author">- {test.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment CTA Banner */}
      <section className="cta-banner">
        <div className="container text-center">
          <h2 className="cta-title">Ready for a Healthier Smile?</h2>
          <p className="cta-phone">{clinicInfo.phone}</p>
          <div className="cta-actions">
            <a href={`tel:${clinicInfo.phoneRaw}`} className="btn btn-accent btn-large">
              Call Now
            </a>
            <Link to="/contact" className="btn btn-outline text-surface border-surface">
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
