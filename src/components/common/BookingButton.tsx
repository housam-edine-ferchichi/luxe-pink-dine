
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BookingButtonProps {
  className?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  onClick?: () => void;
}

const BookingButton: React.FC<BookingButtonProps> = ({ 
  className = '',
  variant = 'default',
  size = 'default',
  onClick
}) => {
  return (
    <Button 
      variant={variant} 
      size={size} 
      className={cn(
        "hover:-translate-y-1 transition-transform duration-300", 
        className
      )}
      asChild
    >
      <Link 
        to="/reservations"
        onClick={onClick}
      >
        Book a Table
        <ArrowRight className="w-4 h-4" />
      </Link>
    </Button>
  );
};

export default BookingButton;
