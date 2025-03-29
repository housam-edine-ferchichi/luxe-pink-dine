
import React from 'react';

interface GalleryFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const GalleryFilters = ({ activeFilter, onFilterChange }: GalleryFiltersProps) => {
  return (
    <section className="pb-8 px-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {['all', 'interior', 'food', 'drinks', 'events', 'kitchen'].map(filter => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-rose-500 text-white'
                  : 'bg-gray-100 dark:bg-midnight-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-midnight-700'
              }`}
              onClick={() => onFilterChange(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryFilters;
