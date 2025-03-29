
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Instagram } from 'lucide-react';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  
  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 dark:bg-midnight-950/90 backdrop-blur-md py-3 shadow-md' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="relative z-10">
          <h1 className="font-display text-2xl font-bold text-rose-600 dark:text-rose-400">
            L'Élégance
          </h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'text-rose-500 after:w-full' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Social Media & Actions */}
        <div className="flex items-center space-x-4">
          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-3">
            <a 
              href="https://www.instagram.com/gourmande_is_50s/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-midnight-800 transition-colors text-rose-500 hover:text-rose-600"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://ubereats.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-sm p-2 hover:bg-gray-100 dark:hover:bg-midnight-800 rounded-full transition-colors text-rose-500 hover:text-rose-600"
              aria-label="UberEats"
            >
              UberEats
            </a>
          </div>
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-midnight-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-midnight-600" />
            )}
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="block md:hidden p-2 rounded-lg"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-white dark:bg-midnight-950 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col h-full pt-24 px-6 space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-2xl font-display ${isActive(link.path) ? 'text-rose-500' : 'text-foreground'}`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mobile Social Links */}
          <div className="flex items-center space-x-4 pt-4">
            <a 
              href="https://www.instagram.com/gourmande_is_50s/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-rose-500"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
            <a 
              href="https://ubereats.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-rose-500"
              aria-label="UberEats"
            >
              UberEats
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
