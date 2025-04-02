
import React from 'react';
import { motion } from 'framer-motion';

const AboutHero: React.FC = () => {
  return (
    <section className="relative py-16 px-6 bg-gray-50 dark:bg-midnight-900 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div 
            className="relative order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://sjdunwlftwdzeetlxpxj.supabase.co/storage/v1/object/public/images//jade%20host.png" 
                alt="You're Host" 
                className="w-full h-full object-cover"
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-rose-100 dark:bg-rose-900/30 rounded-full z-0"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gold-100 dark:bg-gold-900/30 rounded-full z-0"></div>
            </div>
          </motion.div>
          
          {/* Right side - Text content */}
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm uppercase tracking-wider text-rose-500 dark:text-rose-400 font-medium">Our story</span>
            <h1 className="heading-lg mt-2 text-gray-900 dark:text-white">
              About Jade 
            </h1>
            <p className="mt-4 body-lg text-gray-600 dark:text-gray-300">
              Je suis Jade, 34 ans, passionnée de pâtisserie et pin-up dans l'âme depuis de nombreuses années.
            </p>
            <p className="mt-4 body-md text-gray-600 dark:text-gray-300">
              Maman de 3 princesses en bas âge, dont une super héroïne, j'aime les défis et mène des combats sans jamais me décourager pour arriver au bout de mes rêves.
              J'ai les cheveux roses depuis 10 ans bientôt et ma chevelure de princesse, c'est uniquement grâce à la best @lamaisondublondbyflorinacannet.
              J'ai un tempérament de feu et donne tout pour ceux que j'aime, mais aussi pour mon travail !! Je suis une vraie acharnée et ne lâche jamais l'affaire !
              Ma devise : toujours croire en ses rêves !
            </p>
            
            {/* Quote */}
            <blockquote className="mt-8 pl-4 border-l-4 border-rose-500 dark:border-rose-400 italic text-gray-700 dark:text-gray-300">
              "🧁La gourmandise commence quand on n'a plus faim !."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
