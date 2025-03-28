
import React from 'react';

const LocationMap = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-midnight-900">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-md text-gray-900 dark:text-white">
            Find Us
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Located in the heart of Paris, L'Élégance is easily accessible by public transportation or car
          </p>
        </div>
        
        <div className="rounded-xl overflow-hidden shadow-lg h-96">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.75769374692!2d2.2770197828646247!3d48.85883773922035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1622021370268!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Restaurant location"
          ></iframe>
        </div>
        
        <div className="mt-8 bg-white dark:bg-midnight-800 p-6 rounded-xl shadow-md">
          <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Getting Here
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                By Metro
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Take Line 1 or Line 8 to Concorde station. Exit toward Rue de Rivoli and walk 5 minutes.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                By Bus
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Bus lines 24, 42, 72, and 73 all stop within a 3-minute walk of the restaurant.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                Parking
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Paid parking is available at the nearby Saint-Honoré parking garage (2-minute walk).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
