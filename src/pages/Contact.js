import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLocationDot, FaXTwitter, FaGithub, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        content: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // Animasyon varyantları
    const pageVariants = {
        initial: {
            opacity: 0,
            y: 60
        },
        in: {
            opacity: 1,
            y: 0
        },
        out: {
            opacity: 0,
            y: -60
        }
    };

    const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.6
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error when field is being edited
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Ad Soyad alanı zorunludur';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'E-posta alanı zorunludur';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Geçerli bir e-posta adresi giriniz';
        }

        if (!formData.content.trim()) {
            newErrors.content = 'Mesaj alanı zorunludur';
        } else if (formData.content.trim().length < 10) {
            newErrors.content = 'Mesaj en az 10 karakter olmalıdır';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);

            // Simülasyon amaçlı setTimeout - Gerçek projede bir API çağrısı yapılacak
            setTimeout(() => {
                setIsSubmitting(false);
                setSubmitSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    content: ''
                });

                // Başarı mesajını 5 saniye sonra kaldır
                setTimeout(() => {
                    setSubmitSuccess(false);
                }, 5000);
            }, 1500);
        }
    };

    return (
        <motion.section
            className="contact-section"
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
                    İletişime Geç
                </motion.h1>

                <motion.div
                    className="contact-description"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                >
                    <p>
                        Bir proje hakkında konuşmak, bir soru sormak veya sadece merhaba demek mi istiyorsunuz?
                        Aşağıdaki formu kullanarak benimle iletişime geçebilirsiniz. En kısa sürede size geri döneceğim.
                    </p>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        className="contact-form-container"
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                    >
                        <h2>Mesaj Gönder</h2>

                        <motion.form
                            className="contact-form"
                            onSubmit={handleSubmit}
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div className="form-group" variants={itemVariants}>
                                <label htmlFor="name">Ad Soyad</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={errors.name ? 'error' : ''}
                                    placeholder="Adınız ve Soyadınız"
                                />
                                {errors.name && <div className="error-message">{errors.name}</div>}
                            </motion.div>

                            <motion.div className="form-group" variants={itemVariants}>
                                <label htmlFor="email">E-posta</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={errors.email ? 'error' : ''}
                                    placeholder="E-posta adresiniz"
                                />
                                {errors.email && <div className="error-message">{errors.email}</div>}
                            </motion.div>

                            <motion.div className="form-group" variants={itemVariants}>
                                <label htmlFor="content">Mesaj</label>
                                <textarea
                                    id="content"
                                    name="content"
                                    value={formData.content}
                                    onChange={handleChange}
                                    className={errors.content ? 'error' : ''}
                                    placeholder="Mesajınızı buraya yazın..."
                                    rows="6"
                                ></textarea>
                                {errors.content && <div className="error-message">{errors.content}</div>}
                            </motion.div>

                            <motion.button
                                type="submit"
                                className="btn"
                                disabled={isSubmitting}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                            </motion.button>

                            {submitSuccess && (
                                <motion.div
                                    className="success-message"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    Mesajınız başarıyla gönderildi. Teşekkürler!
                                </motion.div>
                            )}
                        </motion.form>
                    </motion.div>

                    <motion.div
                        className="contact-info"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4 }}
                    >
                        <h2>İletişim Bilgileri</h2>

                        <motion.div className="info-item" variants={itemVariants}>
                            <div className="info-icon">
                                <FaEnvelope />
                            </div>
                            <div className="info-content">
                                <h3>E-posta</h3>
                                <p><a href="mailto:silaispir9505@gmail.com">silaispir9505@gmail.com</a></p>
                            </div>
                        </motion.div>

                        <motion.div className="info-item" variants={itemVariants}>
                            <div className="info-icon">
                                <FaPhone />
                            </div>
                            <div className="info-content">
                                <h3>Telefon</h3>
                                <p>+90 552 755 2446</p>
                            </div>
                        </motion.div>

                        <motion.div className="info-item" variants={itemVariants}>
                            <div className="info-icon">
                                <FaLocationDot />
                            </div>
                            <div className="info-content">
                                <h3>Konum</h3>
                                <p>Balikesir, Turkiye</p>
                            </div>
                        </motion.div>

                        <motion.div className="social-info" variants={itemVariants}>
                            <h3>Sosyal Medya</h3>
                            <div className="social-icons">
                                <motion.a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Twitter"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaXTwitter />
                                </motion.a>
                                <motion.a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaGithub />
                                </motion.a>
                                <motion.a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaFacebookF />
                                </motion.a>
                                <motion.a
                                    href="https://www.linkedin.com/in/sıla-ispir-638526329/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaLinkedinIn />
                                </motion.a>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;



