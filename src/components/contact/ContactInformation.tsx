
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInformation = () => {
  return (
    <div className="bg-white dark:bg-midnight-900 p-8 rounded-xl shadow-lg h-full">
      <h2 className="font-serif text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Contact Information
      </h2>
      
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="bg-rose-100 dark:bg-rose-900/30 p-3 rounded-full">
            <MapPin className="w-5 h-5 text-rose-500" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">Address</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              123 Gourmet Street<br />
              Paris, France
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-rose-100 dark:bg-rose-900/30 p-3 rounded-full">
            <Phone className="w-5 h-5 text-rose-500" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">Phone</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              +33 1 23 45 67 89
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-rose-100 dark:bg-rose-900/30 p-3 rounded-full">
            <Mail className="w-5 h-5 text-rose-500" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              info@lelegance.com
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-rose-100 dark:bg-rose-900/30 p-3 rounded-full">
            <Clock className="w-5 h-5 text-rose-500" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">Opening Hours</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Monday - Sunday<br />
              12:00 PM - 11:00 PM
            </p>
          </div>
        </div>
      </div>
      
      {/* Social Media Links */}
      <div className="mt-8">
        <h3 className="font-medium text-gray-900 dark:text-white mb-3">Follow Us</h3>
        <div className="flex space-x-4">
          <a 
            href="#" 
            className="bg-gray-100 dark:bg-midnight-800 p-2 rounded-full hover:bg-rose-100 dark:hover:bg-rose-900/30 transition-colors"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 dark:text-gray-300">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a 
            href="#" 
            className="bg-gray-100 dark:bg-midnight-800 p-2 rounded-full hover:bg-rose-100 dark:hover:bg-rose-900/30 transition-colors"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 dark:text-gray-300">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a 
            href="#" 
            className="bg-gray-100 dark:bg-midnight-800 p-2 rounded-full hover:bg-rose-100 dark:hover:bg-rose-900/30 transition-colors"
            aria-label="Twitter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 dark:text-gray-300">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
