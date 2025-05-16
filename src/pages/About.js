import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hakkımda
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Bilgisayar mühendisliği temeline sahip, yazılım geliştirme ve
              temel donanım entegrasyonu konularında pratik deneyim kazanmış bir
              adayım. Akademik projeler ve kişisel çalışmalar aracılığıyla
              programlama, hata ayıklama ve devre analizi gibi konularda
              yetkinlik kazandım.
            </p>
            <p>
              Şimdi bu teknik altyapımı; web geliştirme, yazılım geliştirme,
              gömülü sistemler ve yapay zeka gibi alanlarda proje ve çalışma
              yaparak geliştirmeye çalışıyorum. Programlama mantığına olan
              hakimiyetim, analitik düşünme becerim ve yeni teknolojilere olan
              ilgimle gerçek dünya projelerine katkı sağlamayı hedefliyorum.
            </p>

            <div className="about-details">
              <div className="detail-item">
                <h3>Eğitim</h3>
                <ul>
                  <li>
                    <span className="detail-title">
                      Bilgisayar Mühendisliği
                    </span>
                    <span className="detail-info">
                      Balıkesir Üniversitesi (2023-2027)
                    </span>
                  </li>
                  <li>
                    <span className="detail-title">Lise Diploması</span>
                    <span className="detail-info">
                      Elbistan BIST Fen Lisesi, Kahramanmaraş (2023)
                    </span>
                  </li>
                </ul>
              </div>

              <div className="detail-item">
                <h3>Diller</h3>
                <ul>
                  <li>
                    <span className="detail-title">İngilizce</span>
                    <span className="detail-info">Upper Intermediate (B2)</span>
                  </li>
                  <li>
                    <span className="detail-title">Almanca</span>
                    <span className="detail-info">Elementary (A2)</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;





