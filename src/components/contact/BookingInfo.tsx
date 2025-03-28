
import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import BookingButton from '../common/BookingButton';

const BookingInfo = () => {
  return (
    <div className="bg-white dark:bg-midnight-900 p-8 rounded-xl shadow-lg h-full">
      <h2 className="font-serif text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Make a Reservation
      </h2>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Reserve your table at L'Élégance for an unforgettable dining experience. We recommend booking in advance to secure your preferred date and time.
      </p>
      
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="bg-rose-100 dark:bg-rose-900/30 p-3 rounded-full">
            <Phone className="w-5 h-5 text-rose-500" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">By Phone</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              For immediate assistance and reservations, please call us at<br />
              <span className="text-rose-600 dark:text-rose-400 font-medium">+33 1 23 45 67 89</span>
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-rose-100 dark:bg-rose-900/30 p-3 rounded-full">
            <Mail className="w-5 h-5 text-rose-500" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">By Email</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Send us your reservation details at<br />
              <span className="text-rose-600 dark:text-rose-400 font-medium">reservations@lelegance.com</span>
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-rose-100 dark:bg-rose-900/30 p-3 rounded-full">
            <MessageCircle className="w-5 h-5 text-rose-500" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">Online Booking</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Use our convenient online reservation system to book your table 24/7.
            </p>
            <div className="mt-4">
              <BookingButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingInfo;
