
import React from 'react';

const GalleryQuote = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-midnight-900 mt-12">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <svg className="w-12 h-12 text-rose-300 dark:text-rose-700 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.375 23.05c-.15-.1-.275-.25-.275-.45V15.8c0-1.5.15-2.95.45-4.3.35-1.4.85-2.7 1.55-3.9.75-1.2 1.7-2.3 2.85-3.3 1.15-1 2.5-1.85 4.05-2.55.25-.1.5-.05.7.1.2.15.3.4.3.65v3c0 .25-.1.45-.25.6-.15.15-.35.25-.6.3-1.2.3-2.2.8-3 1.5-.8.65-1.4 1.4-1.8 2.25-.4.8-.6 1.65-.6 2.5v.15c0 .25.1.5.25.7.2.2.4.3.65.3h8.25c.25 0 .45.1.6.25.15.15.25.35.25.6v6.55c0 .25-.1.45-.25.6-.15.15-.35.25-.6.25H11.85c-.2 0-.35-.05-.475-.15zm-11 0c-.15-.1-.25-.25-.25-.45V15.8c0-1.5.15-2.95.45-4.3.35-1.4.85-2.7 1.55-3.9.75-1.2 1.7-2.3 2.85-3.3 1.15-1 2.5-1.85 4.05-2.55.25-.1.5-.05.7.1.2.15.3.4.3.65v3c0 .25-.1.45-.25.6-.15.15-.35.25-.6.3-1.2.3-2.2.8-3 1.5-.8.65-1.4 1.4-1.8 2.25-.4.8-.6 1.65-.6 2.5v.15c0 .25.1.5.25.7.2.2.4.3.65.3h8.25c.25 0 .45.1.6.25.15.15.25.35.25.6v6.55c0 .25-.1.45-.25.6-.15.15-.35.25-.6.25H.85c-.2 0-.35-.05-.475-.15z"/>
          </svg>
          <blockquote className="text-2xl font-serif italic text-gray-700 dark:text-gray-300">
            We eat with our eyes first, which is why we emphasize both culinary excellence and visual beauty in every aspect of Gourmande is 50's .
          </blockquote>
          <div className="mt-6">
            <p className="font-medium text-gray-900 dark:text-white">Chef Antoine Dubois</p>
            <p className="text-sm text-rose-600 dark:text-rose-400">Executive Chef</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryQuote;
