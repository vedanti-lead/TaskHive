import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-12 w-12' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Base hexagon */}
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 text-primary-500 dark:text-darkPrimary-500"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <polygon
          points="50 0, 93.3 25, 93.3 75, 50 100, 6.7 75, 6.7 25"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0"
        />
      </motion.svg>
      
      {/* Middle hexagon */}
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 text-primary-400 dark:text-darkPrimary-400"
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <polygon
          points="50 15, 82.5 32.5, 82.5 67.5, 50 85, 17.5 67.5, 17.5 32.5"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0"
        />
      </motion.svg>
      
      {/* Inner hexagon */}
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 text-primary-300 dark:text-darkPrimary-300"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <polygon
          points="50 30, 71.7 40, 71.7 60, 50 70, 28.3 60, 28.3 40"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0"
        />
      </motion.svg>
      
      {/* Center hexagon */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 text-white dark:text-gray-900"
      >
        <polygon
          points="50 40, 60.8 45, 60.8 55, 50 60, 39.2 55, 39.2 45"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0"
        />
      </svg>
    </div>
  );
};

export default Logo;