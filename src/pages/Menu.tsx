
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedFoodSketch from '../components/common/AnimatedFoodSketch';
import path from 'path';

// Menu data
const menuCategories = [
  {
    id: 'Menu Brunch',
    name: 'Menu Brunch',
    items: [
      {
        name: 'Egg muffin cheddar ',
        description: 'Classic French onion soup with caramelized onions, beef broth, and topped with melted Gruyère cheese',
        price: '€5.50',
        isSweet: false,
        isSalty: true,
        image: 'housam-edine-ferchichi/luxe-pink-dine/images/menu/egg muffin cheddar.png',
      },
      {
        name: 'Egg muffin bacon cheddar ',
        description: 'Burgundy snails baked with garlic herb butter and served with artisanal bread',
        price: '€5.80',
        isSweet: false,
        isSalty: true,
        image: 'images/menu/egg muffin bacon cheddar.png'
      },
      {
        name: 'Ouefs brouillés ',
        description: 'Traditional salad with tuna, green beans, potatoes, olives, eggs, and anchovy vinaigrette',
        price: '€5.50',
        isSweet: false,
        isSalty: true,
        image: 'images/menu/ouefs brouillés.png'
      },
      {
        name: 'Ouefs brouillés cheddar ',
        description: 'Traditional salad with tuna, green beans, potatoes, olives, eggs, and anchovy vinaigrette',
        price: '€5.90',
        isSweet: false,
        isSalty: true,
        image: 'images/menu/ouefs brouillés cheddar.png'
      },
      {
        name: 'Ouefs brouillés bacon cheddar ',
        description: 'Traditional salad with tuna, green beans, potatoes, olives, eggs, and anchovy vinaigrette',
        price: '€6.20',
        isSweet: false,
        isSalty: true,
        image: 'images/menu/egg brouillés bacon cheddar.png'
      },
      {
        name: 'Croque jombon ',
        description: 'Traditional salad with tuna, green beans, potatoes, olives, eggs, and anchovy vinaigrette',
        price: '€6.00',
        isSweet: false,
        isSalty: true,
        image: 'images/menu/croque jombon.png'
      },
      {
        name: 'Croque truffé',
        description: 'Beetroot tartare with goat cheese mousse, candied walnuts, and microgreens',
        price: '€7.5',
        isSweet: false,
        isSalty: true,
        image: 'images/menu/croque jombon.png'
      },
      {
        name: 'Tartine saumon avocat ',
        description: 'Traditional salad with tuna, green beans, potatoes, olives, eggs, and anchovy vinaigrette',
        price: '€7.00',
        isSweet: false,
        isSalty: true,
        image: 'images/menu/Tartine saumon avocat.png'
      },
      {
        name: 'Mac & Cheese ',
        description: 'Traditional salad with tuna, green beans, potatoes, olives, eggs, and anchovy vinaigrette',
        price: '€8.00',
        isSweet: false,
        isSalty: true,
        image: 'images/menu/mac & cheese.png'
      },
      {
        name: 'Tartine pink avocado ',
        description: 'Traditional salad with tuna, green beans, potatoes, olives, eggs, and anchovy vinaigrette',
        price: '€7.00',
        isSweet: false,
        isSalty: true,
        image: 'images/menu/tartine pink avocado.png'
      },
    
      {
        name: 'Coockie ',
        description: 'Traditional salad with tuna, green beans, potatoes, olives, eggs, and anchovy vinaigrette',
        price: '€2.28',
        isSweet: true,
        isSalty: false,
        image: 'images/menu/coockie.png'
      },
      {
        name: 'Muffin ',
        description: 'Traditional salad with tuna, green beans, potatoes, olives, eggs, and anchovy vinaigrette',
        price: '€4.50',
        isSweet: true,
        isSalty: false,
        image: 'images/menu/Muffin.png'
      },
      {
        name: 'Cupcake ',
        description: 'Traditional salad with tuna, green beans, potatoes, olives, eggs, and anchovy vinaigrette',
        price: '€3.80',
        isSweet: true,
        isSalty: false,
        image: 'images/menu/cupcake.png'
      },
      {
        name: 'Brownie ',
        description: 'Traditional salad with tuna, green beans, potatoes, olives, eggs, and anchovy vinaigrette',
        price: '€3.80',
        isSweet: true,
        isSalty: false,
        image: 'images/menu/brownie.png'
      },
      {
        name: 'Carrot Cake ',
        description: 'Traditional salad with tuna, green beans, potatoes, olives, eggs, and anchovy vinaigrette',
        price: '€4.20',
        isSweet: true,
        isSalty: false,
        image: 'images/menu/carrot cake.png'
      },
      {
        name: 'Cake',
        description: 'Traditional salad with tuna, green beans, potatoes, olives, eggs, and anchovy vinaigrette',
        price: '€3.00',
        isSweet: true,
        isSalty: false,
        image: 'images/menu/cake.png'
      },
      {
        name: 'Trio pancakes ',
        description: 'Traditional salad with tuna, green beans, potatoes, olives, eggs, and anchovy vinaigrette',
        price: '€6.50',
        isSweet: true,
        isSalty: false,
        image: 'images/menu/trio pancakes.png'
      },
      {
        name: 'Smoothie bowl ',
        description: 'Traditional salad with tuna, green beans, potatoes, olives, eggs, and anchovy vinaigrette',
        price: '€7.50',
        isSweet: true,
        isSalty: false,
        image: 'images/menu/smoothie bowl.png'
      }

    ]
  },
  {
    id: 'Drinks',
    name: 'Drinks menu',
    items: [
      {
        name: 'Espresso',
        description: 'Single shot of espresso',
        price: '€1.70',
        isSweet: false,
        isSalty: false,
        image: 'images/menu/espresso.png'
      },
      {
        name: 'Café long',  
        description: 'Single shot of espresso with hot water',
        price: '€1.70',
        isSweet: false,
        isSalty: false,
        image: 'images/menu/cafe long.png'
      },
      {
        name: 'Noisette',
        description: 'Single shot of espresso with a dash of milk',
        price: '€1.80',
        isSweet: false,
        isSalty: false,
        image: 'images/menu/Noisette.png'
      },
      {
        name: 'Américain',
        description: 'Double shot of espresso with hot water',
        price: '€2.10',
        isSweet: false,
        isSalty: false,
        image: 'images/menu/americain.png'
      },
      {
        name: 'Cappuccino',
        description: 'Single shot of espresso with steamed milk and milk foam',
        price: '€3.60',
        isSweet: false,
        isSalty: false,
        image: 'images/menu/Cappuccino.png'
      },
      {
        name: 'Latté',
        description: 'Single shot of espresso with steamed milk',
        price: '€3.80',
        isSweet: false,
        isSalty: false,
        image: 'images/menu/latté.png'
      },
      {
        name: 'Hot Chocolate sucette',
        description: 'Single shot of espresso with a dash of milk',
        price: '€4.50',
        isSweet: false,
        isSalty: false,
        image: 'images/menu/hot chocolate sucette.png'
      },
      {
        name: 'Thé kusmi tea',
        description: 'Thé kusmi tea',
        price: '€3.60',
        isSweet: false,
        isSalty: false,
        image: 'images/menu/kusmi tea.png'
      },
      {
        name: 'Café viennois',
        description: 'Single shot of espresso with a dash of milk',
        price: '€4.00',
        isSweet: false,
        isSalty: false,
        image: 'images/menu/café viennois.png'
      }
    ]
  },
  {
    id: 'menu',
    name: 'menu',
    items: [
      {
        name: 'Crème Brûlée',
        description: 'Classic vanilla bean custard with a caramelized sugar crust',
        price: '€12',
        isSweet: true,
        isSalty: true,
        image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
      },
      {
        name: 'Tarte Tatin',
        description: 'Upside-down caramelized apple tart served with vanilla bean ice cream',
        price: '€13',
        isSweet: false,
        isSalty: true,
        image: 'https://images.unsplash.com/photo-1516717334666-8e9f2c21c702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80'
      },
      {
        name: 'Soufflé au Chocolat',
        description: 'Warm chocolate soufflé with a molten center, dusted with powdered sugar',
        price: '€14',
        isSweet: true,
        isSalty: true,
        image: 'https://images.unsplash.com/photo-1611329695918-1b2e40f3965d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80'
      }
    ]
  },
  {
    id: 'Prestation sur commande',
    name: 'Prestation sur commande',
    items: [
      {
        name: 'Champagne Laurent-Perrier Rosé',
        description: 'Elegant and fresh champagne with notes of red fruits',
        price: '€25 (glass) / €120 (bottle)',
        isSweet: false,
        isSalty: true,
        image: 'https://images.unsplash.com/photo-1546881963-ac8d67aee789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1634&q=80'
      },
      {
        name: 'Château Margaux Grand Vin 2015',
        description: 'Premier Grand Cru Classé with complex flavors of black fruit, oak, and spices',
        price: '€45 (glass) / €320 (bottle)',
        isSweet: true,
        isSalty: true,
        image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80'
      },
      {
        name: 'Cocktail L\'Élégance',
        description: 'House special with French gin, elderflower liqueur, fresh lemon, and champagne',
        price: '€16',
        isSweet: true,
        isSalty: true,
        image: 'https://images.unsplash.com/photo-1556855810-ac404aa91e85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80'
      }
    ]
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Menu Brunch');
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Filter menu items based on selected filter
  const filterItems = (items) => {
    if (filter === 'all') return items;
    if (filter === 'Salty') return items.filter(item => item.isSalty);
    if (filter === 'Sweet') return items.filter(item => item.isSweet);
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
                  filter === 'Salty'
                    ? 'bg-midnight-900 dark:bg-white text-white dark:text-midnight-900'
                    : 'bg-gray-100 dark:bg-midnight-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-midnight-700'
                }`}
                onClick={() => setFilter('Salty')}
              >
                Salty
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === 'Sweet'
                    ? 'bg-midnight-900 dark:bg-white text-white dark:text-midnight-900'
                    : 'bg-gray-100 dark:bg-midnight-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-midnight-700'
                }`}
                onClick={() => setFilter('Sweet')}
              >
                Sweet
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
                      {item.isSweet && (
                        <div className="absolute top-2 left-2 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          Sweet
                        </div>
                      )}
                      {item.isSalty && (
                        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          Salty
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
                From your Host
              </h2>
            </div>
            
            <div className="bg-white dark:bg-midnight-800 p-8 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img 
                    src="images/menu/jade host.png" 
                    alt="Chef Antoine Dubois" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white">
                    Jade
                  </h3>
                  <p className="text-rose-600 dark:text-rose-400"></p>
                </div>
              </div>
              
              <blockquote className="text-gray-600 dark:text-gray-300 italic">
                "🧁La gourmandise commence quand on n’a plus faim ! @gourmande_is_50s."
              </blockquote>
              
              <div className="mt-6 text-right">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40' fill='none'%3E%3Cpath d='M20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30Z' stroke='%23F43F72' stroke-width='1'/%3E%3Cpath d='M10 20H30' stroke='%23F43F72' stroke-width='1'/%3E%3Cpath d='M20 10V30' stroke='%23F43F72' stroke-width='1'/%3E%3Cpath d='M40 16H100' stroke='%23F43F72' stroke-width='0.5'/%3E%3Cpath d='M40 24H100' stroke='%23F43F72' stroke-width='0.5'/%3E%3C/svg%3E" 
                  alt="Sweet" 
                  className="inline-block h-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Dietary Information */}
     
    </div>
  );
};

export default Menu;
