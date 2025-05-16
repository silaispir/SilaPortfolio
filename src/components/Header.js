import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import SilaLogo from "./SilaLogo";
import "./Header.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? "scrolled" : ""}`}>
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <NavLink to="/" onClick={closeMenu}>
                            <SilaLogo size={48} />
                        </NavLink>
                    </div>

                    <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
                        <ul className="nav-list">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    onClick={closeMenu}
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    Ana Sayfa
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/about"
                                    onClick={closeMenu}
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    Hakkımda
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/skills"
                                    onClick={closeMenu}
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    Yetenekler
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/portfolio"
                                    onClick={closeMenu}
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    Portfolyo
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/experience"
                                    onClick={closeMenu}
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    Deneyim
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/contact"
                                    onClick={closeMenu}
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    İletişim
                                </NavLink>
                            </li>
                        </ul>

                        <div className="menu-close" onClick={toggleMenu}>
                            <FaTimes />
                        </div>
                    </nav>

                    <div className="menu-toggle" onClick={toggleMenu}>
                        <FaBars />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

