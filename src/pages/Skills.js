import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
    const skillCategories = [
        {
            title: "Programlama Dilleri",
            skills: [
                {
                    name: "Python",
                    level: 78, // Ortalama ve makul
                    description:
                        "Masaüstü uygulamalar, nesne tabanlı programlama, makine öğrenmesi ve görüntü işleme projeleri",
                },
                {
                    name: "Java",
                    level: 58,
                    description:
                        "Veri yapıları, algoritmalar ve nesne tabanlı programlama",
                },
                {
                    name: "C#",
                    level: 68,
                    description:
                        "Temel düzeyde nesne tabanlı programlama ve Windows Forms uygulamaları",
                },
                {
                    name: "JavaScript",
                    level: 60,
                    description: "Web arayüzü geliştirme ve dinamik etkileşimler",
                },
            ],
        },
        {
            title: "Web Geliştirme",
            skills: [
                {
                    name: "HTML & CSS",
                    level: 68,
                    description: "Modern, responsive kullanıcı arayüzleri tasarımı",
                },
                {
                    name: "React.js",
                    level: 60,
                    description:
                        "Bileşen tabanlı arayüz geliştirme, temel state ve props yönetimi",
                },
                {
                    name: "Proje: Kişisel Portfolyo",
                    level: 85,
                    description:
                        "React.js ile geliştirilmiş responsive ve modern portfolyo sitesi",
                },
            ],
        },
        {
            title: "Masaüstü Uygulama Geliştirme",
            skills: [
                {
                    name: "PyQt5",
                    level: 78,
                    description:
                        "Kullanıcı dostu arayüzler, form yönetimi, veritabanı bağlantısı, sinyal-slot mekanizması",
                },
                {
                    name: "Proje: Fatura Takip Sistemi",
                    level: 82,
                    description: "PyQt5 ile geliştirilmiş kapsamlı masaüstü uygulaması",
                },
            ],
        },
        {
            title: "Nesne Tabanlı Programlama",
            skills: [
                {
                    name: "OOP Kavramları",
                    level: 85,
                    description: "Sınıflar, kalıtım, kapsülleme, çok biçimlilik",
                },
                {
                    name: "OOP Uygulamaları",
                    level: 78,
                    description:
                        "Python ile uygulamalı projeler geliştirme ve OOP prensiplerini aktif kullanma",
                },
            ],
        },
        {
            title: "Makine Öğrenmesi",
            skills: [
                {
                    name: "ML Kütüphaneleri",
                    level: 55,
                    description: "Python ile sklearn, pandas, numpy kullanımı",
                },
                {
                    name: "ML Algoritmaları",
                    level: 50,
                    description: "Temel ML algoritmaları (SVM, KNN, Decision Tree vb.)",
                },
                {
                    name: "Model Geliştirme",
                    level: 50,
                    description: "Model eğitimi, test ve değerlendirme süreçleri",
                },
            ],
        },
        {
            title: "Görüntü İşleme ve Derin Öğrenme",
            skills: [
                {
                    name: "OpenCV",
                    level: 73,
                    description:
                        "Görüntü işleme teknikleri (filtreleme, segmentasyon, nesne tanıma)",
                },
                {
                    name: "CNN",
                    level: 65,
                    description: "CNN tabanlı derin öğrenmeye giriş ve deneysel projeler",
                },
                {
                    name: "Gerçek Zamanlı Analiz",
                    level: 65,
                    description: "Kamera ile gerçek zamanlı analiz uygulamaları",
                },
            ],
        },
        {
            title: "Veritabanı Yönetimi",
            skills: [
                {
                    name: "SQLite",
                    level: 45,
                    description: "CRUD işlemleri ve veritabanı tasarımı",
                },
                {
                    name: "Veritabanı Entegrasyonu",
                    level: 50,
                    description:
                        "PyQt5 ile veritabanı bağlantısı ve veri analizi işlemleri",
                },
            ],
        },
    ];

    return (
        <section className="skills-section">
            <div className="container">
                <motion.h1
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Neler Yapabilirim
                </motion.h1>

                <motion.div
                    className="skills-description"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p>
                        Geniş bir teknik beceri setine sahibim. Programlama dillerinden veri
                        bilimi ve yapay zekaya kadar farklı alanlarda deneyim sahibiyim.
                        Aşağıda uzman olduğum temel alanları ve teknolojileri detaylı olarak
                        bulabilirsiniz.
                    </p>
                </motion.div>

                <div className="skills-categories">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            className="skills-category"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h2>{category.title}</h2>
                            <ul className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.li
                                        key={skillIndex}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1 + skillIndex * 0.1,
                                        }}
                                    >
                                        <span className="skill-name">{skill.name}</span>
                                        <div className="skill-bar">
                                            <motion.div
                                                className="skill-progress"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                            ></motion.div>
                                        </div>
                                        <p className="skill-description">{skill.description}</p>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
