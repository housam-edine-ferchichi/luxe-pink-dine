
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users } from 'lucide-react';
import AnimatedFoodSketch from '../components/common/AnimatedFoodSketch';
import ReservationForm from '../components/reservations/ReservationForm';

const Reservations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white dark:bg-midnight-950 pt-24">
      <AnimatedFoodSketch />
      
      {/* Reservation Hero */}
      <section className="relative py-16 px-6 bg-gray-50 dark:bg-midnight-900 mb-12">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm uppercase tracking-wider text-rose-500 dark:text-rose-400 font-medium">Book Your Table</span>
              <h1 className="heading-lg mt-2 text-gray-900 dark:text-white">
                Reservations
              </h1>
              <p className="mt-4 body-lg text-gray-600 dark:text-gray-300">
                Reserve your table at L'Élégance for an unforgettable culinary experience
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Reservation Content */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Reservation Form */}
            <div className="bg-white dark:bg-midnight-900 p-8 rounded-xl shadow-lg">
              <h2 className="font-serif text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Reserve Your Table
              </h2>
              
              <ReservationForm />
            </div>
            
            {/* Reservation Info */}
            <div>
              <div className="bg-white dark:bg-midnight-900 p-8 rounded-xl shadow-lg mb-8">
                <h2 className="font-serif text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Reservation Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-rose-100 dark:bg-rose-900/30 p-3 rounded-full">
                      <Calendar className="w-5 h-5 text-rose-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Availability</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        We accept reservations up to 3 months in advance. For same-day bookings, please call us directly.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-rose-100 dark:bg-rose-900/30 p-3 rounded-full">
                      <Clock className="w-5 h-5 text-rose-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Dining Hours</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        <span className="font-medium">Lunch:</span> 12:00 PM - 2:30 PM<br />
                        <span className="font-medium">Dinner:</span> 6:00 PM - 10:30 PM
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-rose-100 dark:bg-rose-900/30 p-3 rounded-full">
                      <Users className="w-5 h-5 text-rose-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Group Bookings</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        For parties larger than 20 guests, please contact us directly at +33 1 23 45 67 89 or email events@lelegance.com.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-midnight-900 p-8 rounded-xl shadow-lg">
                <h2 className="font-serif text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Cancellation Policy
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We understand plans may change. Please notify us of any cancellations at least 24 hours before your reservation to avoid a cancellation fee.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  For special events and holidays, a 48-hour cancellation policy applies. A credit card may be required to secure reservations for these occasions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Private Dining */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-midnight-900">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-md text-gray-900 dark:text-white">
              Private Dining
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Host your special event in one of our elegant private dining spaces
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-midnight-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1 duration-300">
              <div className="aspect-[4/3] relative">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Private dining room" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium text-gray-900 dark:text-white mb-2">
                  The Chef's Table
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  An intimate space for 8-10 guests with a view of our kitchen. Enjoy a personalized tasting menu with the chef's special creations.
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <p>Capacity: 10 guests</p>
                  <p>Minimum spend: €1000</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-midnight-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1 duration-300">
              <div className="aspect-[4/3] relative">
                <img 
                  src="https://images.unsplash.com/photo-1546195885-9a82a6bc621a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" 
                  alt="Wine cellar private room" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium text-gray-900 dark:text-white mb-2">
                  The Cellar
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Dine surrounded by our extensive wine collection. Perfect for wine enthusiasts and special celebrations.
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <p>Capacity: 16 guests</p>
                  <p>Minimum spend: €1600</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-midnight-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1 duration-300">
              <div className="aspect-[4/3] relative">
                <img 
                  src="https://images.unsplash.com/photo-1515169091-2809ef9b0356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Garden terrace" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium text-gray-900 dark:text-white mb-2">
                  The Terrace
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our beautiful garden terrace can be reserved for private events. Enjoy alfresco dining in an elegant setting.
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <p>Capacity: 30 guests</p>
                  <p>Minimum spend: €2500</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              To inquire about private dining options and event planning, please contact our events team:
            </p>
            <p className="font-medium text-rose-600 dark:text-rose-400">
              events@lelegance.com | +33 1 23 45 67 89
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservations;
