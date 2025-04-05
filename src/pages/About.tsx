
import React, { useEffect } from 'react';
import AnimatedFoodSketch from '../components/common/AnimatedFoodSketch';
import AboutHero from '../components/about/AboutHero';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white dark:bg-midnight-950 pt-24">
      <AnimatedFoodSketch />
      
      {/* About Hero Section */}
      <AboutHero />
    </div>
  );
};

export default About;
