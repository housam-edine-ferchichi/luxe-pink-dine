
import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="relative py-16 px-6 bg-gray-50 dark:bg-midnight-900 mb-12">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm uppercase tracking-wider text-rose-500 dark:text-rose-400 font-medium">Get in Touch</span>
            <h1 className="heading-lg mt-2 text-gray-900 dark:text-white">
              Contact Us
            </h1>
            <p className="mt-4 body-lg text-gray-600 dark:text-gray-300">
              We'd love to hear from you. Reach out for reservations, inquiries, or to share your experience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
