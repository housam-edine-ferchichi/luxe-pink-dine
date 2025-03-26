
import React from 'react';
import { motion } from 'framer-motion';

const introFeatures = [
  {
    title: 'Fine Dining',
    description: 'Experience culinary excellence with our carefully crafted dishes made from the finest ingredients.',
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23f43f72' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z'/%3E%3Cpath d='M7 21h10'/%3E%3Cpath d='M19.5 12 22 6'/%3E%3Cpath d='M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.07.82.38 1.66.62 2.18.24.52.11 1.03 0 1.5-.1.45-.39.9-.5.94'/%3E%3Cpath d='M12.5 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.82.38 1.66.61 2.18.24.52.11 1.03 0 1.5-.11.45-.39.9-.5.94'/%3E%3Cpath d='M8.75 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.07.82.38 1.66.62 2.18.24.52.11 1.03 0 1.5-.1.45-.39.9-.5.94'/%3E%3Cpath d='M4.5 12 2 6'/%3E%3C/svg%3E"
  },
  {
    title: 'Elegant Ambiance',
    description: 'Immerse yourself in a sophisticated atmosphere that blends modern design with timeless elegance.',
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23f43f72' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2 12h20'/%3E%3Cpath d='M12 2v20'/%3E%3Cpath d='m4.93 4.93 14.14 14.14'/%3E%3Cpath d='m19.07 4.93-14.14 14.14'/%3E%3C/svg%3E"
  },
  {
    title: 'Expert Sommelier',
    description: 'Our sommelier will guide you through an exceptional wine selection to complement your meal perfectly.',
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23f43f72' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 22h8'/%3E%3Cpath d='M12 11v11'/%3E%3Cpath d='m19 3-7 8-7-8Z'/%3E%3C/svg%3E"
  }
];

const IntroSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-midnight-950 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Replace with your high-quality restaurant interior image */}
              <img 
                src="https://images.unsplash.com/photo-1546195885-9a82a6bc621a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" 
                alt="Elegant restaurant interior" 
                className="w-full h-full object-cover"
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-rose-100 dark:bg-rose-900/30 rounded-full z-0"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gold-100 dark:bg-gold-900/30 rounded-full z-0"></div>
            </div>
            
            {/* Caption */}
            <div className="absolute bottom-8 right-8 bg-white/90 dark:bg-midnight-900/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
              <p className="text-sm italic text-gray-700 dark:text-gray-300">
                "Every dish tells a story of passion and tradition."
              </p>
              <p className="text-right mt-2 text-xs font-medium text-rose-600 dark:text-rose-400">
                — Chef Antoine Dubois
              </p>
            </div>
          </motion.div>
          
          {/* Right side - Text content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-sm uppercase tracking-wider text-rose-500 dark:text-rose-400 font-medium">Welcome to L'Élégance</span>
              <h2 className="heading-lg mt-2 text-gray-900 dark:text-white">
                A Culinary Journey Through France
              </h2>
              <p className="mt-4 body-lg text-gray-700 dark:text-gray-300">
                L'Élégance offers a refined dining experience inspired by the rich culinary heritage of France, 
                reimagined with contemporary flair. We celebrate exceptional ingredients, meticulous technique, 
                and artistic presentation in a setting of unparalleled elegance.
              </p>
            </motion.div>
            
            {/* Features */}
            <div className="grid gap-6 mt-8">
              {introFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-rose-50 dark:bg-rose-900/20 p-3 rounded-full">
                    <img src={feature.icon} alt={feature.title} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
