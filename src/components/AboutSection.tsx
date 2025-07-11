
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-charcoal">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-headline font-bold text-4xl md:text-5xl mb-6 text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-2xl"
          >
            <h3 className="font-subheading font-semibold text-xl mb-4 text-primary">
              Bio
            </h3>
            <p className="text-lg leading-relaxed text-gray-medium">
              {portfolioConfig.personal.bio}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-2xl"
          >
            <h3 className="font-subheading font-semibold text-xl mb-4 text-primary">
              Skills & Expertise
            </h3>
            <div className="text-lg leading-relaxed text-gray-medium">
              {portfolioConfig.personal.skillsList}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
