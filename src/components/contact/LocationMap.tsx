
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
            Located in the heart of Mouans-Sartoux, Gourmande is 50's is easily accessible by public transportation or car
          </p>
        </div>
        
        <div className="rounded-xl overflow-hidden shadow-lg h-96">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d858.3053541175765!2d6.976850037928869!3d43.613807911446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgourmande%20is%2050&#39;s!5e0!3m2!1sen!2stn!4v1743175522222!5m2!1sen!2stn" 
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
          About
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
              Accessibility
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
              Wheelchair-accessible car park
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
              Service options
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
              Delivery & Takeaway
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
              Dining options
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
              Breakfast & Dessert
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
