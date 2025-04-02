
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Testimonial data
const testimonials = [
  {
    name: 'Sophie Laurent',
    role: 'Food Critic',
    content: "Gourmande is 50's  delivers an exceptional dining experience that honors French culinary traditions while embracing modern creativity. Every dish is a masterpiece.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  },
  {
    name: 'Michel Dubois',
    role: 'Regular Guest',
    content: "The atmosphere is as impressive as the cuisine. I've dined at many fine establishments, but Gourmande is 50's  stands out with its perfect balance of sophistication and warmth.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  },
  {
    name: 'Antoine Moreau',
    role: 'Gourmet Enthusiast',
    content: "Une expérience culinaire incroyable! Les plats sont préparés avec précision et créativité. Le service est impeccable et l'ambiance élégante.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  },
  {
    name: 'Émilie Renaud',
    role: 'Culinary Blogger',
    content: "J'ai adoré chaque instant passé dans ce restaurant. La fusion des saveurs traditionnelles et modernes est exceptionnelle. Un vrai délice pour les sens!",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  },
  {
    name: 'Jean-Pierre Blanc',
    role: 'Business Executive',
    content: "Le cadre parfait pour les réunions d'affaires. Cuisine raffinée, service discret et attentionné. Je recommande vivement pour impressionner vos clients.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  },
  {
    name: 'Claire Dubois',
    role: 'Local Resident',
    content: "Un trésor caché dans notre quartier. J'y retourne régulièrement pour la qualité constante et l'accueil chaleureux. La carte des vins est particulièrement remarquable.",
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  }
];

const TestimonialsSection: React.FC = () => {
  return (
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-midnight-900 rounded-xl p-8 shadow-lg h-full flex flex-col"
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
              <blockquote className="text-gray-600 dark:text-gray-300 italic flex-grow">
                "{testimonial.content}"
              </blockquote>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/testimonials" className="inline-flex items-center text-rose-500 dark:text-rose-400 hover:text-rose-600 dark:hover:text-rose-300 font-medium transition-colors">
              <span>View all reviews</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
