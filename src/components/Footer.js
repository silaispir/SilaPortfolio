import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaLocationDot } from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
    const handleLinkClick = (e, path) => {
        e.preventDefault();
        // Sayfayı yavaşça yukarı kaydıry
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Belirli bir süre beklemeden sayfayı aç
        setTimeout(() => {
            // İlgili sayfayı aç
            window.history.pushState({}, '', path);
            // Sayfada yönlendirme işlemi gerçekleştir
            window.dispatchEvent(new Event('popstate'));
        }, 500);
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-about">
                        <h2 className="footer-logo">Sıla İspir</h2>
                        <p>
                            Bilgisayar Mühendisliği öğrencisi. Web geliştirme ve yazılım mühendisliği
                            alanlarında kendimi geliştiriyorum. Yenilikçi ve kullanıcı dostu
                            uygulamalar geliştirmek için çalışıyorum.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h3>Hızlı Bağlantılar</h3>
                        <ul>
                            <li><Link to="/" onClick={(e) => handleLinkClick(e, '/')}>Ana Sayfa</Link></li>
                            <li><Link to="/about" onClick={(e) => handleLinkClick(e, '/about')}>Hakkımda</Link></li>
                            <li><Link to="/skills" onClick={(e) => handleLinkClick(e, '/skills')}>Yetenekler</Link></li>
                            <li><Link to="/portfolio" onClick={(e) => handleLinkClick(e, '/portfolio')}>Portfolyo</Link></li>
                            <li><Link to="/contact" onClick={(e) => handleLinkClick(e, '/contact')}>İletişim</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>İletişim Bilgileri</h3>
                        <ul>
                            <li>
                                <span className="contact-icon"><FaPhone /></span>
                                <span>+90 552 755 2446</span>
                            </li>
                            <li>
                                <span className="contact-icon"><FaEnvelope /></span>
                                <span>silaispir9505@gmail.com</span>
                            </li>
                            <li>
                                <span className="contact-icon"><FaLocationDot /></span>
                                <span>Balikesir, Turkiye</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Sıla İspir. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;