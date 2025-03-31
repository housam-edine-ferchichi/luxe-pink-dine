
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ImageOptimizer from '@/components/common/ImageOptimizer';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
        
        {/* Hero Background Image - Using absolute URL for GitHub Pages compatibility */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
          <ImageOptimizer
            src="https://raw.githubusercontent.com/yourusername/luxe-pink-dine/main/images/menu/HBB.png"
            alt="Hero background"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>
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
          <Link to="/menu" className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
            Explore Menu
          </Link>
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
