
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Certifications from '../components/Certifications';
import Experience from '../components/Experience';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import CustomCursor from '../components/CustomCursor';
import { ThemeProvider } from '../context/ThemeContext';

const Index: React.FC = () => {
  // Animation on scroll functionality
  useEffect(() => {
    const observerOptions = {
      root: null, // using the viewport
      rootMargin: '0px',
      threshold: 0.1 // trigger when 10% of the element is visible
    };

    // Create an observer to handle fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          // Stop observing after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with the fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      // Clean up observer on component unmount
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <ScrollProgress />
        <CustomCursor />
        <Header />
        <main>
          <Hero />
          <Projects />
          <About />
          <Certifications />
          <Experience />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
