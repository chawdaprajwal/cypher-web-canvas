
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import CursorEffect from '../components/CursorEffect';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-dark text-foreground">
      <CursorEffect />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 text-center text-gray-light bg-navy-dark">
        <p className="font-mono text-sm">
          © 2024 Portfolio. Crafted with security in mind.
        </p>
      </footer>
    </div>
  );
};

export default Index;
