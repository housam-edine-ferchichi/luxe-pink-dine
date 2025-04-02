
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedFoodSketch from '../components/common/AnimatedFoodSketch';
import MenuBook from '../components/menu/MenuBook';

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white dark:bg-midnight-950 pt-24">
      <AnimatedFoodSketch />
      
      {/* Menu Hero */}
      <section className="relative py-16 px-6 bg-gray-50 dark:bg-midnight-900 mb-12">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm uppercase tracking-wider text-rose-500 dark:text-rose-400 font-medium">Culinary Excellence</span>
              <h1 className="heading-lg mt-2 text-gray-900 dark:text-white">
                Our Menu
              </h1>
              <p className="mt-4 body-lg text-gray-600 dark:text-gray-300">
                Discover our curated selection of authentic French cuisine, prepared with the finest ingredients and served with elegance
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Menu Book View */}
      <MenuBook />
      
      {/* Chef's Note */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-midnight-900">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-sm uppercase tracking-wider text-rose-500 dark:text-rose-400 font-medium">A Personal Touch</span>
              <h2 className="heading-md mt-2 text-gray-900 dark:text-white">
                From your Host
              </h2>
            </div>
            
            <div className="bg-white dark:bg-midnight-800 p-8 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img 
                    src="https://sjdunwlftwdzeetlxpxj.supabase.co/storage/v1/object/public/gourmande//jade%20host.webp" 
                    alt="You're Host Jade" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white">
                    Jade
                  </h3>
                  <p className="text-rose-600 dark:text-rose-400"></p>
                </div>
              </div>
              
              <blockquote className="text-gray-600 dark:text-gray-300 italic">
                "🧁La gourmandise commence quand on n'a plus faim ! @gourmande_is_50s."
              </blockquote>
              
              <div className="mt-6 text-right">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40' fill='none'%3E%3Cpath d='M20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30Z' stroke='%23F43F72' stroke-width='1'/%3E%3Cpath d='M10 20H30' stroke='%23F43F72' stroke-width='1'/%3E%3Cpath d='M20 10V30' stroke='%23F43F72' stroke-width='1'/%3E%3Cpath d='M40 16H100' stroke='%23F43F72' stroke-width='0.5'/%3E%3Cpath d='M40 24H100' stroke='%23F43F72' stroke-width='0.5'/%3E%3C/svg%3E" 
                  alt="Sweet" 
                  className="inline-block h-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
