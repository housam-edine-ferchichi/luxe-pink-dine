
import React, { useState, useEffect } from 'react';
import AnimatedFoodSketch from '../components/common/AnimatedFoodSketch';
import ContactHero from '../components/contact/ContactHero';
import ContactTabs from '../components/contact/ContactTabs';
import ContactInformation from '../components/contact/ContactInformation';
import ContactForm from '../components/contact/ContactForm';
import BookingInfo from '../components/contact/BookingInfo';
import BookingImage from '../components/contact/BookingImage';
import LocationMap from '../components/contact/LocationMap';
import ChatbotButton from '../components/contact/ChatbotButton';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('contact');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white dark:bg-midnight-950 pt-24">
      <AnimatedFoodSketch />
      
      {/* Contact Hero */}
      <ContactHero />
      
      {/* Tabs */}
      <ContactTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Contact Form Section */}
      <section className={`py-12 px-6 ${activeTab === 'contact' ? 'block' : 'hidden'}`}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <ContactInformation />
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Booking Section */}
      <section className={`py-12 px-6 ${activeTab === 'booking' ? 'block' : 'hidden'}`}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Booking Info */}
            <div>
              <BookingInfo />
            </div>
            
            {/* Booking Image */}
            <BookingImage />
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <LocationMap />
      
      {/* Chatbot */}
      <ChatbotButton />
    </div>
  );
};

export default Contact;
