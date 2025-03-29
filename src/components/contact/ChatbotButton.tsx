
import React from 'react';
import { MessageCircle } from 'lucide-react';

const ChatbotButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-30">
      <button className="bg-rose-500 hover:bg-rose-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ChatbotButton;
