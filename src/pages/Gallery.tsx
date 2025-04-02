
import React, { useState, useEffect } from 'react';
import AnimatedFoodSketch from '../components/common/AnimatedFoodSketch';
import { useGalleryImages, fallbackImages } from '@/hooks/useGalleryImages';
import { GalleryImage } from '@/types/gallery';

// Gallery Components
import GalleryHero from '@/components/gallery/GalleryHero';
import GalleryFilters from '@/components/gallery/GalleryFilters';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import GalleryLightbox from '@/components/gallery/GalleryLightbox';
import GalleryQuote from '@/components/gallery/GalleryQuote';
import InstagramFeed from '@/components/gallery/InstagramFeed';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const { galleryImages, loading } = useGalleryImages();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const displayImages = galleryImages.length > 0 ? galleryImages : fallbackImages;
  
  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  const filteredImages = activeFilter === 'all' 
    ? displayImages 
    : displayImages.filter(image => image.category === activeFilter);
  
  return (
    <div className="min-h-screen bg-white dark:bg-midnight-950 pt-24">
      <AnimatedFoodSketch />
      
      <GalleryHero />
      
      <GalleryFilters 
        activeFilter={activeFilter} 
        onFilterChange={setActiveFilter} 
      />
      
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <GalleryGrid 
            images={filteredImages}
            loading={loading}
            onImageClick={openLightbox}
          />
        </div>
      </section>
      
      <GalleryLightbox 
        selectedImage={selectedImage}
        onClose={closeLightbox}
      />
      
      <InstagramFeed />
      
      <GalleryQuote />
    </div>
  );
};

export default Gallery;
