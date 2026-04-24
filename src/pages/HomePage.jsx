import React from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WhatsNew from '../components/WhatsNew';
import About from '../components/About';
import Stats from '../components/Stats';
import Mission from '../components/Mission';
import Programs from '../components/Programs';
import Facilities from '../components/Facilities';
import Coaches from '../components/Coaches';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import BottomFooter from '../components/BottomFooter';
import './HomePage.css';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatsNew />
      <About />
      <Stats />
      <Mission />
      <Programs />
      <Facilities />
      <Coaches />
      <Services />
      <Testimonials />
      <Footer />
      <BottomFooter />
    </>
  );
}
