
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
              className="max-w-full max-h-full object-contain"
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
