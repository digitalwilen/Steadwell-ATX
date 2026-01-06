import React from 'react';
import { motion } from 'framer-motion';

const AbstractArt: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center pointer-events-none select-none">
        {/* Main large circle (The Home/Stability) */}
        <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute w-64 h-64 md:w-80 md:h-80 bg-brand-stone rounded-full mix-blend-multiply opacity-80 top-10 left-10 md:left-20"
        />

        {/* Secondary Circle (The Move/Activity) - Terracotta */}
        <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="absolute w-48 h-48 md:w-64 md:h-64 bg-[#FAD7A0] rounded-full mix-blend-multiply opacity-90 bottom-10 right-10 md:right-20"
        />

        {/* The Connector (Logistics) - Green */}
        <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="absolute w-40 h-40 md:w-56 md:h-56 bg-[#A9DFBF] rounded-full mix-blend-multiply opacity-80 bottom-20 left-1/3"
        />

        {/* Floating Abstract Shape (Care/Love) */}
        <motion.svg 
            viewBox="0 0 200 200" 
            className="absolute w-32 h-32 md:w-48 md:h-48 text-brand-primary top-1/4 right-1/4 opacity-80"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
            <path fill="currentColor" d="M45.7,-51.2C59.9,-42.6,72.4,-30.8,75.8,-17.1C79.2,-3.4,73.5,12.2,63.9,24.3C54.3,36.4,40.9,45,27.3,50.7C13.7,56.4,-0.1,59.3,-13.4,56.7C-26.7,54.1,-39.5,46,-50.2,35.1C-60.9,24.2,-69.5,10.5,-68.6,-2.8C-67.6,-16.1,-57.1,-29,-45.5,-38C-33.9,-47,-21.2,-52.1,-7.7,-53.4C5.8,-54.7,19.3,-52.2,31.5,-59.8L45.7,-51.2Z" transform="translate(100 100)" />
        </motion.svg>
        
        {/* Simulating "Box" or Structure - Very subtle line art */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
             <div className="w-[80%] h-[80%] border-2 border-dashed border-gray-400 rounded-[3rem] transform -rotate-2"></div>
        </div>
    </div>
  );
};

export default AbstractArt;