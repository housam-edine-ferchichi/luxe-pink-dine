
import React from 'react';
import { motion } from 'framer-motion';

// Timeline events data
export const timelineEvents = [
  {
    year: '2010',
    title: 'The Beginning',
    description: 'Chef Antoine Dubois begins his quest to create a restaurant that honors French culinary traditions while embracing modern innovation.'
  },
  {
    year: '2012',
    title: 'Finding the Perfect Location',
    description: 'After an extensive search, the historic building in the heart of Paris is chosen as the home for L\'Élégance.'
  },
  {
    year: '2014',
    title: 'Grand Opening',
    description: 'L\'Élégance opens its doors, introducing guests to a new standard of French fine dining.'
  },
  {
    year: '2016',
    title: 'First Michelin Star',
    description: 'The restaurant receives its first Michelin star, recognizing the exceptional quality of cuisine and service.'
  },
  {
    year: '2018',
    title: 'Expansion & Innovation',
    description: 'The restaurant expands with a private dining room and introduces a seasonal tasting menu showcasing innovative techniques.'
  },
  {
    year: '2020',
    title: 'Second Michelin Star',
    description: 'L\'Élégance is awarded a second Michelin star, cementing its place among the world\'s finest restaurants.'
  },
  {
    year: '2023',
    title: 'Today',
    description: 'L\'Élégance continues to evolve, maintaining its commitment to excellence while constantly seeking new ways to delight guests.'
  }
];

const JourneyTimeline: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-midnight-900">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm uppercase tracking-wider text-rose-500 dark:text-rose-400 font-medium">Our History</span>
            <h2 className="heading-lg mt-2 text-gray-900 dark:text-white">
              Our Journey
            </h2>
          </motion.div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-midnight-800"></div>
          
          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={index}
                className="relative flex flex-col md:flex-row items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Year (Left on odd, right on even) */}
                <div className={`md:w-1/2 mb-4 md:mb-0 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:order-3 md:text-left md:pl-8'}`}>
                  <div className="inline-block bg-white dark:bg-midnight-800 px-4 py-2 rounded-lg shadow-md">
                    <span className="font-serif text-2xl font-bold text-rose-500 dark:text-rose-400">
                      {event.year}
                    </span>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="md:w-0 relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-rose-500 border-4 border-white dark:border-midnight-800"></div>
                </div>
                
                {/* Content (Right on odd, left on even) */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-3 md:text-left md:pl-8' : 'md:text-right md:pr-8'}`}>
                  <div className="bg-white dark:bg-midnight-800 p-6 rounded-xl shadow-md">
                    <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
