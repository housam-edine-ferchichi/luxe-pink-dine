
import React, { useEffect, useState } from 'react';

interface FoodSketch {
  id: number;
  src: string;
  alt: string;
  initialPosition: {
    x: string;
    y: string;
  };
  size: string;
  animationClass: string;
  rotationClass: string;
  delay: string;
}

// We'll create these food sketches with SVG or images later
const foodSketches: FoodSketch[] = [
  {
    id: 1,
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 24 24' fill='none' stroke='rgba(242, 132, 157, 0.5)' stroke-width='0.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9.5 7.5V2h9v11a2 2 0 1 1-4 0V9'/%3E%3Cpath d='M5.5 7.5V11a5.5 5.5 0 0 0 11 0V7.5'/%3E%3C/svg%3E",
    alt: "Wine glass",
    initialPosition: { x: '10%', y: '20%' },
    size: 'w-16 h-16',
    animationClass: 'animate-float',
    rotationClass: 'rotate-12',
    delay: 'animation-delay-0'
  },
  {
    id: 2,
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 24 24' fill='none' stroke='rgba(242, 132, 157, 0.5)' stroke-width='0.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 8h1a4 4 0 0 1 0 8h-1'/%3E%3Cpath d='M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z'/%3E%3Cline x1='6' y1='1' x2='6' y2='4'/%3E%3Cline x1='10' y1='1' x2='10' y2='4'/%3E%3Cline x1='14' y1='1' x2='14' y2='4'/%3E%3C/svg%3E",
    alt: "Coffee cup",
    initialPosition: { x: '80%', y: '15%' },
    size: 'w-14 h-14',
    animationClass: 'animate-float-reverse',
    rotationClass: 'rotate-0',
    delay: 'animation-delay-300'
  },
  {
    id: 3,
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 24 24' fill='none' stroke='rgba(242, 132, 157, 0.5)' stroke-width='0.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'/%3E%3Cpolyline points='9 22 9 12 15 12 15 22'/%3E%3C/svg%3E",
    alt: "Knife",
    initialPosition: { x: '70%', y: '70%' },
    size: 'w-10 h-10',
    animationClass: 'animate-float',
    rotationClass: '-rotate-12',
    delay: 'animation-delay-600'
  },
  {
    id: 4,
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 24 24' fill='none' stroke='rgba(242, 132, 157, 0.5)' stroke-width='0.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='5' x2='12' y2='19'/%3E%3Cpolyline points='19 12 12 19 5 12'/%3E%3C/svg%3E",
    alt: "Fork",
    initialPosition: { x: '25%', y: '65%' },
    size: 'w-12 h-12',
    animationClass: 'animate-float-reverse',
    rotationClass: 'rotate-45',
    delay: 'animation-delay-900'
  },
  {
    id: 5,
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 24 24' fill='none' stroke='rgba(242, 132, 157, 0.5)' stroke-width='0.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20'/%3E%3Cpath d='M2 12h20'/%3E%3C/svg%3E",
    alt: "Plate",
    initialPosition: { x: '85%', y: '85%' },
    size: 'w-20 h-20',
    animationClass: 'animate-float',
    rotationClass: 'rotate-0',
    delay: 'animation-delay-1200'
  },
  {
    id: 6,
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 24 24' fill='none' stroke='rgba(242, 132, 157, 0.5)' stroke-width='0.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 10c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z'/%3E%3Cpath d='M15 5c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z'/%3E%3Cpath d='M9 15c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z'/%3E%3Cpath d='M15 15c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z'/%3E%3C/svg%3E",
    alt: "Spoon",
    initialPosition: { x: '15%', y: '40%' },
    size: 'w-14 h-14',
    animationClass: 'animate-float',
    rotationClass: 'rotate-12',
    delay: 'animation-delay-1500'
  },
];

// Helper function to generate styles with delays
const addDelayStyles = () => {
  const style = document.createElement('style');
  let css = '';

  for (let i = 0; i <= 2000; i += 300) {
    css += `.animation-delay-${i} { animation-delay: ${i}ms; }`;
  }

  style.innerHTML = css;
  document.head.appendChild(style);
};

const AnimatedFoodSketch: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    addDelayStyles();
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {foodSketches.map((sketch) => (
        <div
          key={sketch.id}
          className={`absolute opacity-30 dark:opacity-20 ${sketch.size} ${sketch.animationClass} ${sketch.rotationClass} ${sketch.delay}`}
          style={{
            left: sketch.initialPosition.x,
            top: sketch.initialPosition.y,
          }}
        >
          <img 
            src={sketch.src} 
            alt={sketch.alt} 
            className="w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default AnimatedFoodSketch;
