
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedFoodSketch from '../components/common/AnimatedFoodSketch';

// Menu data
const menuCategories = [
  {
    id: 'starters',
    name: 'Starters',
    items: [
      {
        name: 'Soupe à l\'Oignon',
        description: 'Classic French onion soup with caramelized onions, beef broth, and topped with melted Gruyère cheese',
        price: '€14',
        isSignature: false,
        isVegetarian: false,
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
      },
      {
        name: 'Escargots de Bourgogne',
        description: 'Burgundy snails baked with garlic herb butter and served with artisanal bread',
        price: '€16',
        isSignature: true,
        isVegetarian: false,
        image: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1546&q=80'
      },
      {
        name: 'Salade Niçoise',
        description: 'Traditional salad with tuna, green beans, potatoes, olives, eggs, and anchovy vinaigrette',
        price: '€15',
        isSignature: false,
        isVegetarian: false,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
      },
      {
        name: 'Tartare de Betteraves',
        description: 'Beetroot tartare with goat cheese mousse, candied walnuts, and microgreens',
        price: '€13',
        isSignature: false,
        isVegetarian: true,
        image: 'https://images.unsplash.com/photo-1534533983688-c1b3cd781d14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1734&q=80'
      }
    ]
  },
  {
    id: 'mains',
    name: 'Main Courses',
    items: [
      {
        name: 'Boeuf Bourguignon',
        description: 'Slow-cooked beef in red wine sauce with pearl onions, mushrooms, and lardons',
        price: '€29',
        isSignature: true,
        isVegetarian: false,
        image: 'https://images.unsplash.com/photo-1608039590651-5b53f4f2c3b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80'
      },
      {
        name: 'Canard à l\'Orange',
        description: 'Roast duck with a classic orange and Grand Marnier sauce, served with root vegetables',
        price: '€32',
        isSignature: true,
        isVegetarian: false,
        image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
      },
      {
        name: 'Coq au Vin',
        description: 'Chicken braised with wine, lardons, mushrooms, and garlic, served with creamy mashed potatoes',
        price: '€27',
        isSignature: false,
        isVegetarian: false,
        image: 'https://images.unsplash.com/photo-1623595119708-26b1f7500caa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80'
      },
      {
        name: 'Ratatouille Provençale',
        description: 'Traditional southern French vegetable stew with saffron rice and herbed goat cheese',
        price: '€24',
        isSignature: false,
        isVegetarian: true,
        image: 'https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80'
      }
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    items: [
      {
        name: 'Crème Brûlée',
        description: 'Classic vanilla bean custard with a caramelized sugar crust',
        price: '€12',
        isSignature: true,
        isVegetarian: true,
        image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
      },
      {
        name: 'Tarte Tatin',
        description: 'Upside-down caramelized apple tart served with vanilla bean ice cream',
        price: '€13',
        isSignature: false,
        isVegetarian: true,
        image: 'https://images.unsplash.com/photo-1516717334666-8e9f2c21c702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80'
      },
      {
        name: 'Soufflé au Chocolat',
        description: 'Warm chocolate soufflé with a molten center, dusted with powdered sugar',
        price: '€14',
        isSignature: true,
        isVegetarian: true,
        image: 'https://images.unsplash.com/photo-1611329695918-1b2e40f3965d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80'
      }
    ]
  },
  {
    id: 'drinks',
    name: 'Drinks & Wines',
    items: [
      {
        name: 'Champagne Laurent-Perrier Rosé',
        description: 'Elegant and fresh champagne with notes of red fruits',
        price: '€25 (glass) / €120 (bottle)',
        isSignature: false,
        isVegetarian: true,
        image: 'https://images.unsplash.com/photo-1546881963-ac8d67aee789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1634&q=80'
      },
      {
        name: 'Château Margaux Grand Vin 2015',
        description: 'Premier Grand Cru Classé with complex flavors of black fruit, oak, and spices',
        price: '€45 (glass) / €320 (bottle)',
        isSignature: true,
        isVegetarian: true,
        image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80'
      },
      {
        name: 'Cocktail L\'Élégance',
        description: 'House special with French gin, elderflower liqueur, fresh lemon, and champagne',
        price: '€16',
        isSignature: true,
        isVegetarian: true,
        image: 'https://images.unsplash.com/photo-1556855810-ac404aa91e85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80'
      }
    ]
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Filter menu items based on selected filter
  const filterItems = (items) => {
    if (filter === 'all') return items;
    if (filter === 'vegetarian') return items.filter(item => item.isVegetarian);
    if (filter === 'signature') return items.filter(item => item.isSignature);
    return items;
  };
  
  return (
    <div className="min-h-screen bg-white dark:bg-midnight-950 pt-24">
      <AnimatedFoodSketch />
      
      {/* Menu Hero */}
      <section className="relative py-16 px-6 bg-gray-50 dark:bg-midnight-900 mb-12">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm uppercase tracking-wider text-rose-500 dark:text-rose-400 font-medium">Culinary Excellence</span>
              <h1 className="heading-lg mt-2 text-gray-900 dark:text-white">
                Our Menu
              </h1>
              <p className="mt-4 body-lg text-gray-600 dark:text-gray-300">
                Discover our curated selection of authentic French cuisine, prepared with the finest ingredients and served with elegance
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Menu Categories Navigation */}
      <section className="sticky top-20 z-30 bg-white/95 dark:bg-midnight-950/95 backdrop-blur-md py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Category Navigation */}
            <div className="flex overflow-x-auto space-x-2 pb-2 md:pb-0 w-full md:w-auto">
              {menuCategories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeCategory === category.id
                      ? 'bg-rose-500 text-white'
                      : 'bg-gray-100 dark:bg-midnight-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-midnight-700'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* Filters */}
            <div className="flex space-x-2 w-full md:w-auto justify-end">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === 'all'
                    ? 'bg-midnight-900 dark:bg-white text-white dark:text-midnight-900'
                    : 'bg-gray-100 dark:bg-midnight-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-midnight-700'
                }`}
                onClick={() => setFilter('all')}
              >
                All Items
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === 'vegetarian'
                    ? 'bg-midnight-900 dark:bg-white text-white dark:text-midnight-900'
                    : 'bg-gray-100 dark:bg-midnight-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-midnight-700'
                }`}
                onClick={() => setFilter('vegetarian')}
              >
                Vegetarian
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === 'signature'
                    ? 'bg-midnight-900 dark:bg-white text-white dark:text-midnight-900'
                    : 'bg-gray-100 dark:bg-midnight-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-midnight-700'
                }`}
                onClick={() => setFilter('signature')}
              >
                Signature
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Menu Items */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          {menuCategories.map(category => (
            <div
              key={category.id}
              className={`mb-16 ${activeCategory === category.id ? 'block' : 'hidden'}`}
            >
              <h2 className="heading-md text-gray-900 dark:text-white mb-8">
                {category.name}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {filterItems(category.items).map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-midnight-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="md:w-1/3 h-48 md:h-auto relative">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                      {item.isSignature && (
                        <div className="absolute top-2 left-2 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          Signature
                        </div>
                      )}
                      {item.isVegetarian && (
                        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          Veg
                        </div>
                      )}
                    </div>
                    <div className="p-6 md:w-2/3 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white">
                            {item.name}
                          </h3>
                          <span className="text-rose-600 dark:text-rose-400 font-medium ml-2 whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Chef's Note */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-midnight-900">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-sm uppercase tracking-wider text-rose-500 dark:text-rose-400 font-medium">A Personal Touch</span>
              <h2 className="heading-md mt-2 text-gray-900 dark:text-white">
                From the Chef
              </h2>
            </div>
            
            <div className="bg-white dark:bg-midnight-800 p-8 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" 
                    alt="Chef Antoine Dubois" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white">
                    Chef Antoine Dubois
                  </h3>
                  <p className="text-rose-600 dark:text-rose-400">Executive Chef</p>
                </div>
              </div>
              
              <blockquote className="text-gray-600 dark:text-gray-300 italic">
                "Our menu is a celebration of French culinary heritage with a contemporary vision. We source only the finest seasonal ingredients, supporting local producers wherever possible. Each dish is crafted with precision and passion, designed to create a memorable sensory experience. The true essence of L'Élégance lies in our commitment to honoring tradition while embracing innovation."
              </blockquote>
              
              <div className="mt-6 text-right">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40' fill='none'%3E%3Cpath d='M20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30Z' stroke='%23F43F72' stroke-width='1'/%3E%3Cpath d='M10 20H30' stroke='%23F43F72' stroke-width='1'/%3E%3Cpath d='M20 10V30' stroke='%23F43F72' stroke-width='1'/%3E%3Cpath d='M40 16H100' stroke='%23F43F72' stroke-width='0.5'/%3E%3Cpath d='M40 24H100' stroke='%23F43F72' stroke-width='0.5'/%3E%3C/svg%3E" 
                  alt="Signature" 
                  className="inline-block h-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Dietary Information */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="heading-sm text-gray-900 dark:text-white">
                Dietary Information
              </h3>
            </div>
            
            <div className="bg-white dark:bg-midnight-900 p-6 rounded-xl shadow-md">
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                We are committed to accommodating dietary requirements. Please inform your server of any allergies or dietary restrictions.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-midnight-800 rounded-lg">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Vegetarian options</span>
                  <span className="text-green-500 text-2xl">✓</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-midnight-800 rounded-lg">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Vegan options</span>
                  <span className="text-green-500 text-2xl">✓</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-midnight-800 rounded-lg">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Gluten-free options</span>
                  <span className="text-green-500 text-2xl">✓</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-midnight-800 rounded-lg">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Nut-free options</span>
                  <span className="text-green-500 text-2xl">✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
