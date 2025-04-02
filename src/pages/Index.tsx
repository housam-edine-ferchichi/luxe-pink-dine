
import React, { useEffect } from 'react';
import AnimatedFoodSketch from '../components/common/AnimatedFoodSketch';
import HeroSection from '../components/home/HeroSection';
import IntroSection from '../components/home/IntroSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-midnight-950">
      <AnimatedFoodSketch />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Introduction Section */}
      <IntroSection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Index;
