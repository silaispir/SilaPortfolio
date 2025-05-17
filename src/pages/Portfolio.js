import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Portfolio.css";

const Portfolio = () => {
    const [filter, setFilter] = useState("all");

    // Animasyon varyantları
    const pageVariants = {
        initial: {
            opacity: 0,
            y: 60,
        },
        in: {
            opacity: 1,
            y: 0,
        },
        out: {
            opacity: 0,
            y: -60,
        },
    };

    const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.6,
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
            transition: {
                duration: 0.2,
            },
        },
        tap: {
            scale: 0.95,
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        },
    };

    const projects = [
        {
            id: 1,
            title: "Adam Asmaca",
            category: "desktop",
            description: "C# ile geliştirilmiş klasik kelime tahmin oyunu.",
            tags: ["C#", ".NET", "Game Development"],
            githubLink: "https://github.com/silaispir/adamasmaca",
            liveLink: "#",
        },
        {
            id: 2,
            title: "Fatura Takip Sistemi",
            category: "desktop",
            description:
                "PyQt5 ile geliştirilmiş kapsamlı fatura ve müşteri takip uygulaması.",
            tags: ["Python", "PyQt5", "SQLite"],
            githubLink: "https://github.com/silaispir/faturatakipsistemi",
            liveLink: "#",
        },
        {
            id: 3,
            title: "GP Question Bank",
            category: "desktop",
            description: "Python tabanlı soru bankası yönetim sistemi.",
            tags: ["Python", "Database", "Education"],
            githubLink: "https://github.com/silaispir/gpquestionbank",
            liveLink: "#",
        },
        {
            id: 4,
            title: "OpenCV Color Detection",
            category: "desktop",
            description:
                "OpenCV kullanarak gerçek zamanlı renk tespiti yapan uygulama.",
            tags: ["Python", "OpenCV", "Computer Vision"],
            githubLink: "https://github.com/silaispir/opencvcolordetection",
            liveLink: "#",
        },
        {
            id: 5,
            title: "Personal Portfolio",
            category: "web",
            description:
                "React ve Framer Motion ile geliştirilmiş kişisel portfolyo web sitesi.",
            tags: ["React", "CSS", "Framer Motion"],
            githubLink: "https://github.com/silaispir/silaportfolio",
            liveLink: "#",
        },
        {
            id: 6,
            title: "Todo List",
            category: "desktop",
            description: "Python ile geliştirilmiş görev yönetim uygulaması.",
            tags: ["Python", "Task Management"],
            githubLink: "https://github.com/silaispir/todolistpy",
            liveLink: "#",
        },
        {
            id: 7,
            title: "Word Processor",
            category: "desktop",
            description: "Temel metin işleme özellikleri sunan uygulama.",
            tags: ["Python", "Text Processing"],
            githubLink: "https://github.com/silaispir/wordprocessor",
            liveLink: "#",
        },
    ];

    const filteredProjects =
        filter === "all"
            ? projects
            : projects.filter((project) => project.category === filter);

    return (
        <motion.section
            className="portfolio-section"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div className="container">
                <motion.h1
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Neler Yaptım
                </motion.h1>

                <motion.div
                    className="portfolio-description"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <p>
                        Aşağıda geliştirdiğim çeşitli projelerden bir seçki
                        bulabilirsiniz. Her proje, belirli bir sorunu çözmek
                        veya belirli bir kullanıcı deneyimini iyileştirmek
                        amacıyla oluşturuldu. Daha fazla bilgi için her projeye
                        tıklayabilir veya GitHub linkini ziyaret edebilirsiniz.
                    </p>
                </motion.div>

                <motion.div
                    className="portfolio-filters"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <motion.button
                        className={filter === "all" ? "active" : ""}
                        onClick={() => setFilter("all")}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        Tümü
                    </motion.button>
                    <motion.button
                        className={filter === "web" ? "active" : ""}
                        onClick={() => setFilter("web")}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        Web Geliştirme
                    </motion.button>
                    <motion.button
                        className={filter === "desktop" ? "active" : ""}
                        onClick={() => setFilter("desktop")}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        Uygulamalar
                    </motion.button>
                    <motion.button
                        className={filter === "design" ? "active" : ""}
                        onClick={() => setFilter("design")}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        Görüntü İşleme
                    </motion.button>
                </motion.div>

                <motion.div
                    className="portfolio-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            className="portfolio-item"
                            key={project.id}
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <div className="portfolio-image">
                                {/* Proje resmi burada olacak */}
                                <div className="portfolio-image-placeholder"></div>
                                <div className="portfolio-overlay">
                                    <div className="portfolio-links">
                                        <motion.a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="GitHub"
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <FaGithub />
                                        </motion.a>
                                        <motion.a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Live Preview"
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <FaExternalLinkAlt />
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="portfolio-tags">
                                    {project.tags.map((tag, index) => (
                                        <motion.span
                                            key={index}
                                            whileHover={{
                                                backgroundColor: "#FF4D6D",
                                                color: "white",
                                                scale: 1.05,
                                            }}
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Portfolio;



