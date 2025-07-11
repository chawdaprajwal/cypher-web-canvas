
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioConfig } from '../config/portfolio';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    
    skillBars.forEach((bar) => {
      const percentage = bar.getAttribute('data-percentage');
      
      ScrollTrigger.create({
        trigger: bar,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(bar, {
            scaleX: percentage ? parseInt(percentage) / 100 : 0,
            duration: 1,
            ease: 'power2.out'
          });
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const calculateAverage = (skills: { proficiency: number }[]) => {
    const sum = skills.reduce((acc, skill) => acc + skill.proficiency, 0);
    return Math.round(sum / skills.length);
  };

  const getTotalTechnologies = () => {
    return portfolioConfig.skills.reduce((acc, category) => acc + category.skills.length, 0);
  };

  const getOverallAverage = () => {
    const totalSkills = portfolioConfig.skills.flatMap(category => category.skills);
    return calculateAverage(totalSkills);
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 bg-navy-dark">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-headline font-bold text-4xl md:text-5xl mb-6 text-white">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          <p className="font-subheading text-lg text-gray-light mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {portfolioConfig.skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass p-6 rounded-2xl h-full hover:scale-105 transition-all duration-300 border border-gray-light/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-subheading font-semibold text-lg text-white">
                    {skillGroup.category}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-sm font-mono">
                      {skillGroup.skills.length}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {skillGroup.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-light">
                          {skill.name}
                        </span>
                        <span className="text-sm font-mono text-primary">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-medium/20 rounded-full h-2 overflow-hidden">
                        <div
                          className="skill-bar-fill h-full bg-gradient-to-r from-primary to-primary/80 rounded-full origin-left scale-x-0"
                          data-percentage={skill.proficiency}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary font-mono mb-2">
              {getTotalTechnologies()}+
            </div>
            <div className="text-gray-light text-sm font-subheading">
              Technologies
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary font-mono mb-2">
              {portfolioConfig.skills.length}
            </div>
            <div className="text-gray-light text-sm font-subheading">
              Skill Categories
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary font-mono mb-2">
              2+
            </div>
            <div className="text-gray-light text-sm font-subheading">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary font-mono mb-2">
              {getOverallAverage()}%
            </div>
            <div className="text-gray-light text-sm font-subheading">
              Avg Proficiency
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
