
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BookingButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const BookingButton: React.FC<BookingButtonProps> = ({ 
  className = '',
  variant = 'primary',
  size = 'md',
  onClick
}) => {
  // Base classes
  const baseClasses = "inline-flex items-center gap-2 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1";
  
  // Size classes
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };
  
  // Variant classes
  const variantClasses = {
    primary: "bg-gradient-to-br from-rose-400 to-rose-600 text-white hover:from-rose-500 hover:to-rose-700 shadow-md hover:shadow-lg",
    secondary: "border border-rose-400 text-rose-500 hover:text-white bg-transparent hover:bg-rose-500 shadow-sm hover:shadow-md",
    outline: "border border-white/20 backdrop-blur-sm text-white hover:bg-white/10",
  };
  
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
    >
      Book a Table
      <ArrowRight className="w-4 h-4" />
    </button>
  );
};

export default BookingButton;
