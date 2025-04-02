
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const menuPages = [
  {
    id: 1,
    image: "public/lovable-uploads/17f23997-b572-4518-8385-76094eb6b032.png",
    title: "Hot & Fresh Drinks Menu"
  },
  {
    id: 2,
    image: "public/lovable-uploads/5dbc29bc-d1ce-43f1-9ef8-08125637a91c.png",
    title: "Hot Drinks Menu"
  },
  {
    id: 3,
    image: "public/lovable-uploads/0a67fe32-da76-46f8-9f29-d831e01f2df3.png",
    title: "Menu Brunch"
  },
  {
    id: 4,
    image: "public/lovable-uploads/f4fd0fdd-7cdb-4664-bd16-abe2f532e2ba.png",
    title: "Menu: Les Bagels"
  },
  {
    id: 5,
    image: "public/lovable-uploads/e5c85dd7-c30f-47bf-9582-ecdfea0bddc6.png",
    title: "Prestations Sur Commande"
  }
];

const MenuBook: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage((prev) => (prev === menuPages.length - 1 ? prev : prev + 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? prev : prev - 1));
  };

  return (
    <div className="relative max-w-4xl mx-auto my-12">
      {/* Menu Book Container */}
      <div className="relative aspect-[4/3] bg-gray-100 dark:bg-midnight-900 rounded-lg shadow-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={menuPages[currentPage].image}
              alt={`Menu page ${currentPage + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Page indicators */}
        <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
          {menuPages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`w-3 h-3 rounded-full ${
                currentPage === idx 
                  ? 'bg-rose-500 scale-125' 
                  : 'bg-gray-300 dark:bg-gray-600'
              } transition-all duration-300`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`rounded-full bg-white/80 dark:bg-midnight-800/80 p-2 shadow-lg backdrop-blur-sm transition-all
            ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white hover:scale-110'}`}
          aria-label="Previous page"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        </button>
        
        <button
          onClick={nextPage}
          disabled={currentPage === menuPages.length - 1}
          className={`rounded-full bg-white/80 dark:bg-midnight-800/80 p-2 shadow-lg backdrop-blur-sm transition-all
            ${currentPage === menuPages.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white hover:scale-110'}`}
          aria-label="Next page"
        >
          <ChevronRight className="w-6 h-6 text-gray-800 dark:text-gray-200" />
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
