
import React from 'react';

interface GalleryImage {
  id: string | number;
  src: string;
  alt: string;
  category: string;
}

interface GalleryLightboxProps {
  selectedImage: GalleryImage | null;
  onClose: () => void;
}

const GalleryLightbox = ({ selectedImage, onClose }: GalleryLightboxProps) => {
  if (!selectedImage) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative max-w-6xl w-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
        <img 
          src={selectedImage.src}
          alt={selectedImage.alt}
          className="w-full h-full object-contain"
        />
        <button 
          className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="absolute bottom-4 left-0 right-0 text-center text-white">
          <p className="text-lg font-serif">{selectedImage.alt}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryLightbox;
