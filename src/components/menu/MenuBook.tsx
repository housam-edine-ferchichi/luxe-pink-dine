
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImageOptimizer from '../common/ImageOptimizer';

const menuPages = [
  {
    id: 1,
    image: "https://sjdunwlftwdzeetlxpxj.supabase.co/storage/v1/object/public/gourmande//carte%20brunch.d4476e96bc4825115954.png",
    title: "Menu Brunch"
  },
  {
    id: 2,
    image: "https://sjdunwlftwdzeetlxpxj.supabase.co/storage/v1/object/public/gourmande//hot%20drink%20menu.a4f764ca6cfb47878165.png",
    title: "Hot Drinks Menu"
  },
  {
    id: 3,
    image: "https://sjdunwlftwdzeetlxpxj.supabase.co/storage/v1/object/public/gourmande//hot%20&%20fresh%20drink%20menu%202.330c75af97cfea499fe7.png",
    title: "Menu Brunch"
  },
  {
    id: 4,
    image: "https://sjdunwlftwdzeetlxpxj.supabase.co/storage/v1/object/public/gourmande//lunch.a80d15764bf5773c4589.png",
    title: "Menu: Les Bagels"
  },
  {
    id: 5,
    image: "https://sjdunwlftwdzeetlxpxj.supabase.co/storage/v1/object/public/gourmande//tarifs.810ffafff74e8e8736d3.png",
    title: "Prestations Sur Commande"
  }
];

const MenuBook: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right, 0 for initial
  
  // Get the actual image dimensions on load to maintain aspect ratio
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = menuPages.map(page => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = page.image;
          img.onload = () => {
            resolve({ width: img.width, height: img.height });
          };
          img.onerror = () => {
            resolve({ width: 1200, height: 800 }); // Fallback dimensions
          };
        });
      });
      
      const loadedDimensions = await Promise.all(imagePromises);
      // Use the first image's dimensions as reference
      if (loadedDimensions.length > 0) {
        const firstImageDims = loadedDimensions[0] as { width: number, height: number };
        setDimensions(firstImageDims);
      }
    };
    
    preloadImages();
  }, []);
  
  const nextPage = () => {
    if (currentPage < menuPages.length - 1) {
      setDirection(1);
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage(prev => prev - 1);
    }
  };
  
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

  // Calculate maximum size while maintaining aspect ratio
  const getBookStyles = () => {
    const maxWidth = Math.min(1200, window.innerWidth - 40); // Max width with 20px padding on each side
    const aspectRatio = dimensions.width / dimensions.height;
    
    // If portrait orientation (height > width)
    if (aspectRatio < 1) {
      const height = Math.min(800, window.innerHeight * 0.7);
      return {
        height: `${height}px`,
        width: `${height * aspectRatio}px`
      };
    } 
    // For landscape orientation
    else {
      return {
        width: `${maxWidth}px`,
        height: `${maxWidth / aspectRatio}px`
      };
    }
  };

  return (
    <div className="relative mx-auto my-12 flex flex-col items-center">
      {/* Menu Book Container */}
      <div 
        className="relative bg-white dark:bg-midnight-900 rounded-xl shadow-2xl overflow-hidden"
        style={{
          ...getBookStyles(),
          perspective: "1200px",
          transformStyle: "preserve-3d",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3), 0 0 8px rgba(0, 0, 0, 0.1) inset"
        }}
      >
        {/* Book binding decoration */}
        <div 
          className="absolute left-1/2 top-0 bottom-0 w-4 -ml-2 bg-gradient-to-r from-rose-800 to-rose-600 z-10"
          style={{ boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)" }}
        ></div>
        
        {/* Book cover texture overlay */}
        <div 
          className="absolute inset-0 bg-rose-50 dark:bg-midnight-800 opacity-10 pointer-events-none z-0"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentPage}
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
              src={menuPages[currentPage].image}
              alt={`Menu page ${currentPage + 1}`}
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
        </AnimatePresence>

        {/* Page indicators */}
        <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2 z-20">
          {menuPages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentPage ? 1 : -1);
                setCurrentPage(idx);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPage === idx 
                  ? 'bg-rose-500 scale-125' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Buttons - Outside the book for cleaner look */}
      <div className="flex justify-center gap-8 mt-6">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 dark:bg-midnight-800/90 shadow-lg backdrop-blur-sm transition-all
            ${currentPage === 0 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:bg-white hover:scale-105 hover:shadow-xl'
            }`}
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800 dark:text-gray-200" />
          <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Previous</span>
        </button>
        
        <button
          onClick={nextPage}
          disabled={currentPage === menuPages.length - 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 dark:bg-midnight-800/90 shadow-lg backdrop-blur-sm transition-all
            ${currentPage === menuPages.length - 1 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:bg-white hover:scale-105 hover:shadow-xl'
            }`}
          aria-label="Next page"
        >
          <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Next</span>
          <ChevronRight className="w-5 h-5 text-gray-800 dark:text-gray-200" />
        </button>
      </div>

      {/* Current page info */}
      <div className="mt-4 text-center">
        <p className="font-medium text-rose-600 dark:text-rose-400">
          {menuPages[currentPage].title} - Page {currentPage + 1} of {menuPages.length}
        </p>
      </div>
    </div>
  );
};

export default MenuBook;
