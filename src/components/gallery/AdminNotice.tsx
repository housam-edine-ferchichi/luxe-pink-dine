
import React from 'react';

const AdminNotice = () => {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto bg-white dark:bg-midnight-900 p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-500">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white">
              Admin Dashboard
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            As the restaurant administrator, you can manage the gallery content through the admin dashboard. Add, update, or remove images to keep your gallery fresh and engaging.
          </p>
          <a href="#" className="btn-secondary inline-flex">
            Access Admin Panel
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdminNotice;
