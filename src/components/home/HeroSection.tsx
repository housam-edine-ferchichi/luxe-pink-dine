
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
        
        {/* Hero Background Image - Replace with your image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/images/menu/HBB.png')",
            backgroundPosition: "center 30%"
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl">
        <motion.h1 
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Gourmande is 50's 
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Venez découvrir nos gourmandises et laissez-vous séduire par le charme de notre salon de thé sur roulotte.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="btn-outline">
            Explore Menu
          </button>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-white/80 text-sm mb-2"></span>
            <div className="w-0.5 h-16 bg-gradient-to-b from-white to-transparent animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
