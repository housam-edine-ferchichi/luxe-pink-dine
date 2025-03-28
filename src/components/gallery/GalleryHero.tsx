
import React from 'react';
import { motion } from 'framer-motion';

const GalleryHero = () => {
  return (
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
  );
};

export default GalleryHero;
