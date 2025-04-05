
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PageNavigationProps {
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
}

const PageNavigation: React.FC<PageNavigationProps> = ({
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage
}) => {
  return (
    <div className="flex justify-center gap-8 mt-6">
      <button
        onClick={onPrevPage}
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
        onClick={onNextPage}
        disabled={currentPage === totalPages - 1}
        className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 dark:bg-midnight-800/90 shadow-lg backdrop-blur-sm transition-all
          ${currentPage === totalPages - 1 
            ? 'opacity-50 cursor-not-allowed' 
            : 'hover:bg-white hover:scale-105 hover:shadow-xl'
          }`}
        aria-label="Next page"
      >
        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Next</span>
        <ChevronRight className="w-5 h-5 text-gray-800 dark:text-gray-200" />
      </button>
    </div>
  );
};

export default PageNavigation;
