import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const SilaLogo = ({ size = 56, className = "" }) => (
    <motion.svg
        width={size}
        height={size}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`sila-logo ${className}`}
        style={{ display: 'block' }}
        whileHover={{ scale: 1.1 }}
        transition={{
            scale: {
                duration: 0.3
            }
        }}
    >
        {/* Arka plan gradyanı */}
        <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4B3F9F" /> {/* Daha koyu mor */}
                <stop offset="100%" stopColor="#5D4294" /> {/* Daha koyu mor-mavi */}
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>

        {/* Ana daire */}
        <motion.circle
            cx="28"
            cy="28"
            r="26"
            fill="url(#logoGradient)"
            stroke="#ffffff"
            strokeWidth="1"
            whileHover={{ fill: "#5D4294" }}
            filter="url(#glow)"
        />

        {/* İç daire detayı */}
        <circle cx="28" cy="28" r="22" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.6" />

        {/* Logo metni - biraz aşağı indirdim */}
        <motion.text
            x="50%"
            y="58%"
            textAnchor="middle"
            fill="#fff"
            fontSize="2.2rem"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
            dy=".1em"
            whileHover={{ scale: 1.1 }}
            style={{ textShadow: "0px 0px 3px rgba(255, 255, 255, 0.5)" }}
        >
            SI
        </motion.text>

        {/* Dekoratif detaylar */}
        <path
            d="M28 16 L28 40"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
        <path
            d="M8 28 L14 28"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
        <path
            d="M42 28 L48 28"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
    </motion.svg>
);

export default SilaLogo;

const LogoComponent = ({ closeMenu }) => (
    <motion.div
        className="logo"
        whileHover={{ scale: 1.05 }}
    >
        <NavLink to="/" onClick={closeMenu}>
            <SilaLogo size={48} className="logo-animated" />
        </NavLink>
    </motion.div>
);

export { LogoComponent };
