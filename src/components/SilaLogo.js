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
        transition={{ duration: 0.3 }}
    >
        <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6C63FF" />
                <stop offset="50%" stopColor="#845EC2" />
                <stop offset="100%" stopColor="#FF4D6D" />
            </linearGradient>
        </defs>

        <motion.rect
            x="4"
            y="4"
            width="48"
            height="48"
            rx="12"
            fill="#2A2A2A"
            stroke="url(#logoGradient)"
            strokeWidth="2"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
        />

        <motion.text
            x="50%"
            y="55%"
            dominantBaseline="middle"  // Bu satırı ekledik
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            textAnchor="middle"
        >
            <tspan
                fill="url(#logoGradient)"
                fontSize="32"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
                letterSpacing="0"
            >
                SI
            </tspan>
        </motion.text>
    </motion.svg>
);

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

export default SilaLogo;
export { LogoComponent };
