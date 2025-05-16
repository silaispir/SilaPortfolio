
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
                <stop offset="100%" stopColor="#845EF7" />
            </linearGradient>
            <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>

        <motion.circle
            cx="28"
            cy="28"
            r="26"
            fill="#2A2A2A"
            stroke="url(#logoGradient)"
            strokeWidth="2"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
        />

        <motion.circle
            cx="28"
            cy="28"
            r="22"
            stroke="rgba(108, 99, 255, 0.3)"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <motion.text
            x="50%"
            y="55%"
            textAnchor="middle"
            fill="#fff"
            fontSize="24"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ letterSpacing: "1px" }}
        >
            SI
        </motion.text>

        <motion.path
            d="M28 18 L28 38"
            stroke="url(#logoGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8 }}
        />

        <motion.path
            d="M18 28 L38 28"
            stroke="url(#logoGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        />
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
