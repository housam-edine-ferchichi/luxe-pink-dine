
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
          alt="Fine dining experience" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Experience Extraordinary Dining
            </h2>
            <p className="text-gray-200 mb-8">
              Join us for an unforgettable culinary journey through the flavors of France. 
              Create lasting memories with us.
            </p>
            <Link to="/menu" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-rose-600 hover:bg-rose-50 transition-colors rounded-md font-medium">
              Explore Our Menu
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
