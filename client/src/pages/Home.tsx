import React from 'react';
import { Hero } from '../components/Hero';
import { Partners } from '../components/Partners';
import { About } from '../components/About';
import { ImpactStats } from '../components/ImpactStats';
import { DonationImpact } from '../components/DonationImpact';
import { Programs } from '../components/Programs';
import { Testimonials } from '../components/Testimonials';
import { InstagramSection } from '../components/InstagramSection';
import { Volunteer } from '../components/Volunteer';
import { ContactSection } from '../components/ContactSection';

export const Home = () => {
  return (
    <main>
      <Hero />
      <Partners />
      <About />
      <ImpactStats />
      <DonationImpact />
      <Programs />
      <Testimonials />
      <InstagramSection />
      <Volunteer />
      <ContactSection />
    </main>
  );
};

export default Home;
