
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass py-3' : 'py-4'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="font-headline font-bold text-xl text-white cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          Portfolio
        </div>
        
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-light hover:text-primary transition-colors duration-300 font-subheading"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-gray-light hover:text-primary transition-colors duration-300 font-subheading"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-gray-light hover:text-primary transition-colors duration-300 font-subheading"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-gray-light hover:text-primary transition-colors duration-300 font-subheading"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
