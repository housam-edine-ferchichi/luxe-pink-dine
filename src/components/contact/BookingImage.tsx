
import React from 'react';
import ImageOptimizer from '@/components/common/ImageOptimizer';

const BookingImage = () => {
  return (
    <div className="relative">
      <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
        <ImageOptimizer 
          src="https://sjdunwlftwdzeetlxpxj.supabase.co/storage/v1/object/public/gourmande//jade%20host.webp" 
          alt="Restaurant interior" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-rose-100 dark:bg-rose-900/30 rounded-full z-0"></div>
      <div className="absolute -top-4 -left-4 w-16 h-16 bg-gold-100 dark:bg-gold-900/30 rounded-full z-0"></div>
      
      {/* Caption */}
      <div className="absolute bottom-8 left-8 bg-white/90 dark:bg-midnight-900/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          "Our elegant dining experience awaits, where every visit is a memorable journey."
        </p>
      </div>
    </div>
  );
};

export default BookingImage;
