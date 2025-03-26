
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedFoodSketch from '../components/common/AnimatedFoodSketch';

// Gallery content
const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    alt: 'Restaurant interior',
    category: 'interior'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1546195885-9a82a6bc621a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
    alt: 'Table setting',
    category: 'interior'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Restaurant terrace',
    category: 'interior'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    alt: 'Private dining room',
    category: 'interior'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'French onion soup',
    category: 'food'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1608039590651-5b53f4f2c3b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80',
    alt: 'Beef bourguignon',
    category: 'food'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'Crème brûlée',
    category: 'food'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1611329695918-1b2e40f3965d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80',
    alt: 'Chocolate soufflé',
    category: 'food'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1546881963-ac8d67aee789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1634&q=80',
    alt: 'Champagne glasses',
    category: 'drinks'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'Wine selection',
    category: 'drinks'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1557680717-6b245a5a4c45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
    alt: 'Private event',
    category: 'events'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    alt: 'Chef plating',
    category: 'kitchen'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);
  
  return (
    <div className="min-h-screen bg-white dark:bg-midnight-950 pt-24">
      <AnimatedFoodSketch />
      
      {/* Gallery Hero */}
      <section className="relative py-16 px-6 bg-gray-50 dark:bg-midnight-900 mb-12">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm uppercase tracking-wider text-rose-500 dark:text-rose-400 font-medium">Visual Experience</span>
              <h1 className="heading-lg mt-2 text-gray-900 dark:text-white">
                Gallery
              </h1>
              <p className="mt-4 body-lg text-gray-600 dark:text-gray-300">
                Immerse yourself in the visual story of L'Élégance, from our elegant interior to our exquisite culinary creations
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Gallery Filters */}
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
                onClick={() => setActiveFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group aspect-square"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => openLightbox(image)}
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
        </div>
      </section>
      
      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-6xl w-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <img 
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain"
            />
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              onClick={closeLightbox}
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
      )}
      
      {/* Gallery Quote */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-midnight-900 mt-12">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="w-12 h-12 text-rose-300 dark:text-rose-700 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.375 23.05c-.15-.1-.275-.25-.275-.45V15.8c0-1.5.15-2.95.45-4.3.35-1.4.85-2.7 1.55-3.9.75-1.2 1.7-2.3 2.85-3.3 1.15-1 2.5-1.85 4.05-2.55.25-.1.5-.05.7.1.2.15.3.4.3.65v3c0 .25-.1.45-.25.6-.15.15-.35.25-.6.3-1.2.3-2.2.8-3 1.5-.8.65-1.4 1.4-1.8 2.25-.4.8-.6 1.65-.6 2.5v.15c0 .25.1.5.25.7.2.2.4.3.65.3h8.25c.25 0 .45.1.6.25.15.15.25.35.25.6v6.55c0 .25-.1.45-.25.6-.15.15-.35.25-.6.25H11.85c-.2 0-.35-.05-.475-.15zm-11 0c-.15-.1-.25-.25-.25-.45V15.8c0-1.5.15-2.95.45-4.3.35-1.4.85-2.7 1.55-3.9.75-1.2 1.7-2.3 2.85-3.3 1.15-1 2.5-1.85 4.05-2.55.25-.1.5-.05.7.1.2.15.3.4.3.65v3c0 .25-.1.45-.25.6-.15.15-.35.25-.6.3-1.2.3-2.2.8-3 1.5-.8.65-1.4 1.4-1.8 2.25-.4.8-.6 1.65-.6 2.5v.15c0 .25.1.5.25.7.2.2.4.3.65.3h8.25c.25 0 .45.1.6.25.15.15.25.35.25.6v6.55c0 .25-.1.45-.25.6-.15.15-.35.25-.6.25H.85c-.2 0-.35-.05-.475-.15z"/>
            </svg>
            <blockquote className="text-2xl font-serif italic text-gray-700 dark:text-gray-300">
              We eat with our eyes first, which is why we emphasize both culinary excellence and visual beauty in every aspect of L'Élégance.
            </blockquote>
            <div className="mt-6">
              <p className="font-medium text-gray-900 dark:text-white">Chef Antoine Dubois</p>
              <p className="text-sm text-rose-600 dark:text-rose-400">Executive Chef</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Admin Notice (Placeholder) */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto bg-white dark:bg-midnight-900 p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-500">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white">
                Admin Dashboard
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              As the restaurant administrator, you can manage the gallery content through the admin dashboard. Add, update, or remove images to keep your gallery fresh and engaging.
            </p>
            <a href="#" className="btn-secondary inline-flex">
              Access Admin Panel
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
