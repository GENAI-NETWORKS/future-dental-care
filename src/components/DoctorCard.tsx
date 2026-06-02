import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Stethoscope } from 'lucide-react';
import './DoctorCard.css';

interface DoctorCardProps {
  doctor: {
    id: string;
    name: string;
    degrees: string;
    role: string;
    phone: string;
    phoneRaw: string;
    specialties: string[];
  };
  delay?: number;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, delay = 0 }) => {
  // Generate initials for the avatar placeholder
  const initials = doctor.name
    .replace('Dr. ', '')
    .split(' ')
    .filter(word => word.length > 0 && !word.includes('.'))
    .slice(0, 2)
    .map(word => word[0])
    .join('')
    .toUpperCase();

  return (
    <motion.div 
      className="doctor-card"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <div className="doctor-avatar-wrapper">
        <div className="doctor-avatar">
          {initials}
        </div>
      </div>
      
      <div className="doctor-info">
        <div className="doctor-header">
          <h3 className="doctor-name">{doctor.name}</h3>
          <span className="doctor-degree">{doctor.degrees}</span>
        </div>
        
        <div className="doctor-role">
          <Stethoscope size={18} className="role-icon" />
          <span>{doctor.role}</span>
        </div>
        
        <a href={`tel:${doctor.phoneRaw}`} className="doctor-phone">
          <Phone size={18} className="phone-icon" />
          <span>{doctor.phone}</span>
        </a>
        
        <div className="doctor-tags">
          {doctor.specialties.map((specialty, index) => (
            <span key={index} className="doctor-tag">
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DoctorCard;
