
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import AnimatedFoodSketch from '../components/common/AnimatedFoodSketch';
import BookingButton from '../components/common/BookingButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-white dark:bg-midnight-950 pt-24">
      <AnimatedFoodSketch />
      
      {/* Contact Hero */}
      <section className="relative py-16 px-6 bg-gray-50 dark:bg-midnight-900 mb-12">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm uppercase tracking-wider text-rose-500 dark:text-rose-400 font-medium">Get in Touch</span>
              <h1 className="heading-lg mt-2 text-gray-900 dark:text-white">
                Contact Us
              </h1>
              <p className="mt-4 body-lg text-gray-600 dark:text-gray-300">
                We'd love to hear from you. Reach out for reservations, inquiries, or to share your experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Tabs */}
      <section className="pb-8 px-6">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="bg-gray-100 dark:bg-midnight-900 rounded-full p-1 inline-flex">
              <button 
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'contact' 
                    ? 'bg-rose-500 text-white' 
                    : 'hover:bg-gray-200 dark:hover:bg-midnight-800 text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => setActiveTab('contact')}
              >
                Contact
              </button>
              <button 
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'booking' 
                    ? 'bg-rose-500 text-white' 
                    : 'hover:bg-gray-200 dark:hover:bg-midnight-800 text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => setActiveTab('booking')}
              >
                Reservation
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className={`py-12 px-6 ${activeTab === 'contact' ? 'block' : 'hidden'}`}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="md:col-span-1">
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
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white dark:bg-midnight-900 p-8 rounded-xl shadow-lg">
                <h2 className="font-serif text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Send Us a Message
                </h2>
                
                {isSubmitted ? (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mx-auto mb-4">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <h3 className="text-xl font-medium text-green-800 dark:text-green-200 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-green-700 dark:text-green-300">
                      Your message has been sent successfully. We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Your Name
                        </label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-midnight-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white dark:bg-midnight-800 dark:text-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Email Address
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-midnight-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white dark:bg-midnight-800 dark:text-white"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Phone Number (Optional)
                        </label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-midnight-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white dark:bg-midnight-800 dark:text-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Subject
                        </label>
                        <select 
                          id="subject" 
                          name="subject" 
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-midnight-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white dark:bg-midnight-800 dark:text-white"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Reservation">Reservation</option>
                          <option value="Feedback">Feedback</option>
                          <option value="Private Event">Private Event</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Message
                      </label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={6} 
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-midnight-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white dark:bg-midnight-800 dark:text-white resize-none"
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className={`btn-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
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
            </div>
            
            {/* Booking Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Restaurant interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-rose-100 dark:bg-rose-900/30 rounded-full z-0"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gold-100 dark:bg-gold-900/30 rounded-full z-0"></div>
              
              {/* Caption */}
              <div className="absolute bottom-8 left-8 bg-white/90 dark:bg-midnight-900/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  "Our elegant dining room awaits, where each table is set for a memorable experience."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
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
      
      {/* Chatbot (Placeholder) */}
      <div className="fixed bottom-6 right-6 z-30">
        <button className="bg-rose-500 hover:bg-rose-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Contact;
