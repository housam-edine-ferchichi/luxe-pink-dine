
import React from 'react';
import { motion } from 'framer-motion';
import ImageOptimizer from '../common/ImageOptimizer';

interface MenuPageProps {
  image: string;
  alt: string;
  direction: number;
}

const MenuPage: React.FC<MenuPageProps> = ({ image, alt, direction }) => {
  // Page turn variants
  const pageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? -15 : 15,
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)"
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)"
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? -15 : 15,
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)"
    })
  };

  return (
    <motion.div
      custom={direction}
      variants={pageVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        rotateY: { duration: 0.5 }
      }}
      className="absolute inset-0 w-full h-full flex items-center justify-center bg-white dark:bg-midnight-900"
      style={{
        transformOrigin: direction > 0 ? "left center" : "right center",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
      }}
    >
      <ImageOptimizer
        src={image}
        alt={alt}
        className="w-full h-full object-contain"
      />
      
      {/* Page curl effect */}
      <div 
        className={`absolute ${direction >= 0 ? 'right-0' : 'left-0'} top-0 bottom-0 w-16 pointer-events-none`}
        style={{
          background: `linear-gradient(${direction >= 0 ? 'to left' : 'to right'}, rgba(0,0,0,0.05), rgba(0,0,0,0))`,
        }}
      ></div>
    </motion.div>
  );
};

export default MenuPage;
