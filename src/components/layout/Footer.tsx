
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-midnight-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-rose-400">L'Élégance</h2>
            <p className="text-gray-300 max-w-xs">
              An exquisite culinary journey through the heart of French gastronomy with a modern twist.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-rose-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-rose-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-rose-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6">Navigation</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-gray-400 hover:text-rose-400 transition-colors py-2">Home</Link>
              <Link to="/menu" className="text-gray-400 hover:text-rose-400 transition-colors py-2">Menu</Link>
              <Link to="/gallery" className="text-gray-400 hover:text-rose-400 transition-colors py-2">Gallery</Link>
              <Link to="/about" className="text-gray-400 hover:text-rose-400 transition-colors py-2">About Us</Link>
              <Link to="/contact" className="text-gray-400 hover:text-rose-400 transition-colors py-2">Contact</Link>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors py-2">Reservations</a>
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">123 Gourmet Street, Paris, France</p>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">+33 1 23 45 67 89</p>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">info@lelegance.com</p>
              </div>
              <div className="pt-4">
                <h4 className="font-medium mb-2">Opening Hours:</h4>
                <p className="text-gray-300">
                  Monday - Sunday: 12:00 PM - 11:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} L'Élégance. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-rose-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-rose-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
