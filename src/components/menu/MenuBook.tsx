
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { menuPages } from './menuData';
import MenuPage from './MenuPage';
import PageNavigation from './PageNavigation';
import PageIndicators from './PageIndicators';

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

  const handlePageChange = (pageIndex: number) => {
    setDirection(pageIndex > currentPage ? 1 : -1);
    setCurrentPage(pageIndex);
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
        {/* Book cover texture overlay */}
        <div 
          className="absolute inset-0 bg-rose-50 dark:bg-midnight-800 opacity-10 pointer-events-none z-0"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <MenuPage 
            key={currentPage}
            image={menuPages[currentPage].image}
            alt={`Menu page ${currentPage + 1}`}
            direction={direction}
          />
        </AnimatePresence>

        {/* Page indicators */}
        <PageIndicators 
          pages={menuPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>

      {/* Navigation Buttons */}
      <PageNavigation 
        currentPage={currentPage}
        totalPages={menuPages.length}
        onPrevPage={prevPage}
        onNextPage={nextPage}
      />

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
