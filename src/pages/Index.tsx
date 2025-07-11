
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
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
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 text-center text-gray-light bg-navy-medium">
        <p className="font-mono text-sm">
          © 2024 Portfolio. Built with React, TypeScript & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default Index;
