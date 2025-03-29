
import React from 'react';
import { motion } from 'framer-motion';

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
                src="images/menu/Jade.png" 
                alt="Your host Jade " 
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
                — Jade
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
              <span className="text-sm uppercase tracking-wider text-rose-500 dark:text-rose-400 font-medium">Welcome to Gourmande is 50's </span>
              <h2 className="heading-lg mt-2 text-gray-900 dark:text-white">
                A Culinary Journey with Jade
              </h2>
              <p className="mt-4 body-lg text-gray-700 dark:text-gray-300">
                Je suis Jade, 34 ans, passionnée de pâtisserie et pin-up dans l’âme depuis de nombreuses années.
Maman de 3 princesses en bas âge, dont une super héroïne, j'aime les défis et mène des combats sans jamais me décourager pour arriver au bout de mes rêves.
J'ai les cheveux roses depuis 10 ans bientôt et ma chevelure de princesse, c'est uniquement grâce à la best @lamaisondublondbyflorinacannet.
J'ai un tempérament de feu et donne tout pour ceux que j'aime, mais aussi pour mon travail !! Je suis une vraie acharnée et ne lâche jamais l'affaire !
Ma devise : toujours croire en ses rêves !
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
