
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioConfig } from '../config/portfolio';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, cardIndex]);
            
            // Animate skill bars with delay
            setTimeout(() => {
              const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
              skillBars.forEach((bar, index) => {
                const percentage = bar.getAttribute('data-percentage');
                setTimeout(() => {
                  gsap.to(bar, {
                    scaleX: percentage ? parseInt(percentage) / 100 : 0,
                    duration: 1.2,
                    ease: 'power2.out'
                  });
                }, index * 100);
              });
            }, 300);
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll('.skill-card');
    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
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
    <section id="skills" ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-navy-dark to-charcoal">
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
            <div
              key={skillGroup.category}
              data-index={index}
              className={`skill-card group ${visibleCards.includes(index) ? 'animate-in' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="glass p-6 rounded-2xl h-full hover:scale-105 transition-all duration-300 border border-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-subheading font-semibold text-lg text-white">
                    {skillGroup.category}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                    <span className="text-primary text-sm font-mono font-bold">
                      {skillGroup.skills.length}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-light group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm font-mono text-primary font-bold">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-medium/10 rounded-full h-2.5 overflow-hidden border border-gray-medium/20">
                        <div
                          className="skill-bar-fill h-full bg-gradient-to-r from-primary to-primary/70 rounded-full origin-left scale-x-0 shadow-sm"
                          data-percentage={skill.proficiency}
                          style={{
                            boxShadow: `0 0 8px hsla(var(--primary), 0.3)`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-medium/20">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-subheading text-gray-medium">
                      Average Proficiency
                    </span>
                    <span className="text-lg font-mono font-bold text-primary">
                      {calculateAverage(skillGroup.skills)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center glass p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-primary font-mono mb-2">
              {getTotalTechnologies()}+
            </div>
            <div className="text-gray-light text-sm font-subheading">
              Technologies
            </div>
          </div>
          <div className="text-center glass p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-primary font-mono mb-2">
              {portfolioConfig.skills.length}
            </div>
            <div className="text-gray-light text-sm font-subheading">
              Skill Categories
            </div>
          </div>
          <div className="text-center glass p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-primary font-mono mb-2">
              3+
            </div>
            <div className="text-gray-light text-sm font-subheading">
              Years Experience
            </div>
          </div>
          <div className="text-center glass p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
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
