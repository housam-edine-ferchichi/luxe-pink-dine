
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedFoodSketch from '../components/common/AnimatedFoodSketch';

// Team members data
const teamMembers = [
  {
    name: 'Antoine Dubois',
    role: 'Executive Chef',
    bio: 'With over 20 years of experience in prestigious kitchens across France, Chef Antoine brings his passion for traditional French cuisine with a modern twist to L\'Élégance.',
    image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80'
  },
  {
    name: 'Sophie Laurent',
    role: 'Head Sommelier',
    bio: 'Sophie\'s exceptional knowledge of wines and ability to create perfect food pairings has earned her recognition from wine enthusiasts and critics alike.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1461&q=80'
  },
  {
    name: 'Jean-Pierre Moreau',
    role: 'Pastry Chef',
    bio: 'A master of French patisserie, Jean-Pierre\'s desserts are works of art that perfectly balance tradition with innovation and visual beauty.',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80'
  },
  {
    name: 'Isabelle Rousseau',
    role: 'Restaurant Manager',
    bio: 'With her keen eye for detail and commitment to exceptional service, Isabelle ensures that every guest enjoys a flawless dining experience.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80'
  }
];

// Timeline events
const timelineEvents = [
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

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white dark:bg-midnight-950 pt-24">
      <AnimatedFoodSketch />
      
      {/* About Hero */}
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
              Je suis Jade, 34 ans, passionnée de pâtisserie et pin-up dans l’âme depuis de nombreuses années.

              </p>
              <p className="mt-4 body-md text-gray-600 dark:text-gray-300">
              Maman de 3 princesses en bas âge, dont une super héroïne, j'aime les défis et mène des combats sans jamais me décourager pour arriver au bout de mes rêves.
J'ai les cheveux roses depuis 10 ans bientôt et ma chevelure de princesse, c'est uniquement grâce à la best @lamaisondublondbyflorinacannet.
J'ai un tempérament de feu et donne tout pour ceux que j'aime, mais aussi pour mon travail !! Je suis une vraie acharnée et ne lâche jamais l'affaire !
Ma devise : toujours croire en ses rêves !
              </p>
              
              {/* Quote */}
              <blockquote className="mt-8 pl-4 border-l-4 border-rose-500 dark:border-rose-400 italic text-gray-700 dark:text-gray-300">
                "🧁La gourmandise commence quand on n’a plus faim !."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Philosophy */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-sm uppercase tracking-wider text-rose-500 dark:text-rose-400 font-medium">Our Beliefs</span>
              <h2 className="heading-lg mt-2 text-gray-900 dark:text-white">
                Our Philosophy
              </h2>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Philosophy Item 1 */}
            <motion.div
              className="bg-white dark:bg-midnight-900 p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-500">
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Respect for Ingredients
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We source only the finest seasonal ingredients, working closely with local farmers, fishermen, and artisanal producers who share our commitment to quality and sustainability.
              </p>
            </motion.div>
            
            {/* Philosophy Item 2 */}
            <motion.div
              className="bg-white dark:bg-midnight-900 p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-500">
                  <path d="M3 12h4l3 8 4-16 3 8h4"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Tradition & Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We honor classical French culinary techniques while embracing modern approaches and global influences, creating dishes that are both familiar and surprising.
              </p>
            </motion.div>
            
            {/* Philosophy Item 3 */}
            <motion.div
              className="bg-white dark:bg-midnight-900 p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-500">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Exceptional Service
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe that genuine hospitality is as important as exceptional cuisine. Our team is dedicated to creating a warm, personalized experience for every guest.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Journey Timeline */}
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
      
      {/* Meet the Team */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-sm uppercase tracking-wider text-rose-500 dark:text-rose-400 font-medium">The People</span>
              <h2 className="heading-lg mt-2 text-gray-900 dark:text-white">
                Meet Our Team
              </h2>
              <p className="mt-4 body-md text-gray-600 dark:text-gray-300">
                Our dedicated team of culinary professionals is passionate about creating exceptional dining experiences
              </p>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-midnight-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-rose-600 dark:text-rose-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-midnight-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-sm uppercase tracking-wider text-rose-500 dark:text-rose-400 font-medium">What Drives Us</span>
              <h2 className="heading-lg mt-2 text-gray-900 dark:text-white">
                Our Values
              </h2>
              <p className="mt-4 body-md text-gray-600 dark:text-gray-300">
                The principles that guide everything we do at Gourmande is 50's , from our kitchen to our dining room
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-500">
                      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Passion
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We bring enthusiasm and dedication to every aspect of our work, consistently striving for excellence.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-500">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="m16.24 7.76-4.24 4.24-4.24-4.24"/>
                      <path d="m7.76 16.24 4.24-4.24 4.24 4.24"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Integrity
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We are committed to honesty, transparency, and ethical practices in all our operations.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-500">
                      <rect width="18" height="10" x="3" y="11" rx="2"/>
                      <circle cx="12" cy="5" r="2"/>
                      <path d="M12 7v4"/>
                      <line x1="8" y1="16" x2="8" y2="16"/>
                      <line x1="16" y1="16" x2="16" y2="16"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Innovation
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We continuously explore new ideas and approaches while respecting culinary traditions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right side - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80" 
                  alt="Chef preparing food" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-rose-100 dark:bg-rose-900/30 rounded-full z-0"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold-100 dark:bg-gold-900/30 rounded-full z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
