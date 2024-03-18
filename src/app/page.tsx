import React from 'react';

import Banner from '@/components/Banner';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <Banner />
      <Projects />
      <Services />
      <Testimonials />
    </div>
  );
};

export default HomePage;
