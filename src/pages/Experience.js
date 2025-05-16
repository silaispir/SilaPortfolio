
import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience-page">
      <div className="container">
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Deneyimlerim
        </motion.h1>

        <motion.div 
          className="experience-timeline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="timeline-item">
            <div className="timeline-point">
              <i className="fas fa-drone"></i>
            </div>
            <div className="timeline-content">
              <span className="timeline-date">2024 - 2025</span>
              <h3 className="timeline-title">MISYA İHA Takımı</h3>
              <h4 className="timeline-subtitle">Yazılım Ekibi Üyesi</h4>
              <p className="timeline-description">
                Balıkesir Üniversitesi İnsansız Hava Aracı Takımı'nda yazılım ekibinde görev alıyorum. 
                Takımda görüntü işleme, uçuş kontrol sistemleri ve otonom görev planlaması üzerine çalışmalar yapıyorum.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

