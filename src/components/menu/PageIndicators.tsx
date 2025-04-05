
import React from 'react';

interface PageIndicatorsProps {
  pages: Array<{ id: number; image: string; title: string }>;
  currentPage: number;
  onPageChange: (pageIndex: number) => void;
}

const PageIndicators: React.FC<PageIndicatorsProps> = ({ 
  pages, 
  currentPage, 
  onPageChange 
}) => {
  return (
    <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2 z-20">
      {pages.map((_, idx) => (
        <button
          key={idx}
          onClick={() => onPageChange(idx)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentPage === idx 
              ? 'bg-rose-500 scale-125' 
              : 'bg-gray-300 dark:bg-gray-600'
          }`}
          aria-label={`Go to page ${idx + 1}`}
        />
      ))}
    </div>
  );
};

export default PageIndicators;
