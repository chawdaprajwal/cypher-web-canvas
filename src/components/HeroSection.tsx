
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-navy-dark via-navy-medium to-charcoal">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <img
              src={portfolioConfig.personal.profileImage}
              alt={portfolioConfig.personal.name}
              className="w-32 h-32 rounded-full mx-auto mb-8 glass p-1 hover:animate-glow transition-all duration-300"
            />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-headline font-bold text-5xl md:text-7xl mb-6 bg-gradient-to-r from-primary to-cyan-muted bg-clip-text text-transparent"
          >
            {portfolioConfig.personal.name}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-subheading text-xl md:text-2xl text-gray-light mb-8 max-w-2xl mx-auto"
          >
            {portfolioConfig.personal.tagline}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="space-x-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary text-navy-dark px-8 py-4 rounded-lg font-subheading font-semibold hover:bg-cyan-muted transition-colors duration-300"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block glass px-8 py-4 rounded-lg font-subheading font-semibold text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
