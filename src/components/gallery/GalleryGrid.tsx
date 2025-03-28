
import React from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from "@/components/ui/skeleton";

interface GalleryImage {
  id: string | number;
  src: string;
  alt: string;
  category: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  loading: boolean;
  onImageClick: (image: GalleryImage) => void;
}

const GalleryGrid = ({ images, loading, onImageClick }: GalleryGridProps) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="relative overflow-hidden rounded-xl aspect-square">
            <Skeleton className="w-full h-full" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group aspect-square"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          onClick={() => onImageClick(image)}
        >
          <img 
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p className="text-white text-sm font-medium">{image.alt}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GalleryGrid;
