import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  return (
    <section className="home-section">
      <div className="container home-container">
        <div className="home-content-wrapper">
          <motion.div 
            className="home-content"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 1,
              type: "spring",
              bounce: 0.4
            }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Merhaba, ben <span className="gradient-text">Sıla İspir</span>
            </motion.h1>
            <h2 className="home-subtitle">Bilgisayar Mühendisliği Öğrencisi</h2>
            <p className="home-description">
                Teknolojiye olan ilgim ve üretme tutkumla yazılım dünyasında kendime güçlü bir yol çizmeye çalışıyorum.
                Yeni şeyler öğrenmek, problemleri yaratıcı çözümlerle aşmak ve sürekli gelişmek benim hem hedefim
                hem de motivasyon kaynağım.
            </p>
            <div className="home-buttons">
              <Link to="/portfolio" className="btn">Projelerim</Link>
              <Link to="/contact" className="btn btn-outline">İletişime Geç</Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="profile-container"
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1.2,
              delay: 0.3,
              type: "spring",
              bounce: 0.5
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <div className="profile-frame">
                <img src="/images/profile.jpg" alt="Sıla İspir" className="profile-image" />
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="home-skills-preview"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.5,
            type: "spring",
            stiffness: 100
          }}
        >
          <div className="skills-tags">
            <span className="skill-tag">Python</span>
            <span className="skill-tag">Java</span>
            <span className="skill-tag">C#</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">HTML & CSS</span>
            <span className="skill-tag">PyQt5</span>
            <span className="skill-tag">Makine Öğrenmesi</span>
            <span className="skill-tag">Görüntü İşleme</span>
            <span className="skill-tag">SQLite</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;








