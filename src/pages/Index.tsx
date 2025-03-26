
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedFoodSketch from '../components/common/AnimatedFoodSketch';
import HeroSection from '../components/home/HeroSection';
import IntroSection from '../components/home/IntroSection';
import BookingButton from '../components/common/BookingButton';

const specialDishes = [
  {
    name: 'Souffle au Fromage',
    image: 'https://images.unsplash.com/photo-1619221882220-947b3d3c8861?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    description: 'Light and airy cheese souffle with Gruyère and Emmental',
    price: '€18'
  },
  {
    name: 'Canard à l\'Orange',
    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    description: 'Roast duck with a classic orange and Grand Marnier sauce',
    price: '€32'
  },
  {
    name: 'Crème Brûlée',
    image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    description: 'Classic vanilla bean custard with a caramelized sugar crust',
    price: '€12'
  }
];

const testimonials = [
  {
    name: 'Sophie Laurent',
    role: 'Food Critic',
    content: 'L'Élégance delivers an exceptional dining experience that honors French culinary traditions while embracing modern creativity. Every dish is a masterpiece.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  },
  {
    name: 'Michel Dubois',
    role: 'Regular Guest',
    content: 'The atmosphere is as impressive as the cuisine. I've dined at many fine establishments, but L'Élégance stands out with its perfect balance of sophistication and warmth.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  }
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-midnight-950">
      <AnimatedFoodSketch />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Introduction Section */}
      <IntroSection />
      
      {/* Featured Dishes */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-midnight-900">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-sm uppercase tracking-wider text-rose-500 dark:text-rose-400 font-medium">Our Specialties</span>
              <h2 className="heading-lg mt-2 text-gray-900 dark:text-white">
                Signature Dishes
              </h2>
              <p className="mt-4 body-md text-gray-600 dark:text-gray-400">
                Discover our chef's carefully crafted dishes that blend traditional techniques with creative innovation
              </p>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {specialDishes.map((dish, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-midnight-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white">
                      {dish.name}
                    </h3>
                    <span className="text-rose-600 dark:text-rose-400 font-medium">
                      {dish.price}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {dish.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <a href="/menu" className="btn-secondary">View Full Menu</a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 px-6 bg-white dark:bg-midnight-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-gray-50 to-white dark:from-midnight-900 dark:to-midnight-950"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-sm uppercase tracking-wider text-rose-500 dark:text-rose-400 font-medium">What Guests Say</span>
              <h2 className="heading-lg mt-2 text-gray-900 dark:text-white">
                Testimonials
              </h2>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-midnight-900 rounded-xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <blockquote className="text-gray-600 dark:text-gray-300 italic">
                  "{testimonial.content}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
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
                Reserve Your Extraordinary Dining Experience
              </h2>
              <p className="text-gray-200 mb-8">
                Join us for an unforgettable culinary journey through the flavors of France. 
                Book your table now and create lasting memories.
              </p>
              <BookingButton size="lg" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
