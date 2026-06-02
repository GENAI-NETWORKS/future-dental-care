import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import './ServiceCard.css';

interface ServiceCardProps {
  title: string;
  description?: string;
  icon: LucideIcon;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, delay = 0 }) => {
  return (
    <motion.div 
      className="service-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <div className="service-icon-wrapper">
        <Icon size={32} className="service-icon" />
      </div>
      <h3 className="service-title">{title}</h3>
      {description && <p className="service-desc">{description}</p>}
    </motion.div>
  );
};

export default ServiceCard;
