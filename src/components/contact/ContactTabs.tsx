
import React from 'react';

interface ContactTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ContactTabs: React.FC<ContactTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
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
            Your Host Jade
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTabs;
