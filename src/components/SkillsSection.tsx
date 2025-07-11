
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
          <h2 className="font-headline font-bold text-4xl md:text-5xl mb-6 text-primary">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          <p className="font-subheading text-lg text-gray-light mt-6 max-w-2xl mx-auto">
            Hover over the cards to see detailed proficiency levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {portfolioConfig.skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="skill-card h-64"
            >
              <div className="skill-card-inner">
                {/* Front of card */}
                <div className="skill-card-front glass p-6 flex flex-col items-center justify-center text-center">
                  <h3 className="font-subheading font-semibold text-xl mb-4 text-primary">
                    {skillGroup.category}
                  </h3>
                  <div className="text-3xl font-mono font-bold text-cyan-bright mb-2">
                    {calculateAverage(skillGroup.skills)}%
                  </div>
                  <p className="text-sm text-gray-light">Average Proficiency</p>
                  <div className="mt-4 text-xs text-gray-light">
                    {skillGroup.skills.length} skills
                  </div>
                </div>

                {/* Back of card */}
                <div className="skill-card-back glass p-6">
                  <h3 className="font-subheading font-semibold text-lg mb-4 text-primary text-center">
                    {skillGroup.category}
                  </h3>
                  <div className="space-y-3">
                    {skillGroup.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-sm font-mono text-primary">
                            {skill.proficiency}%
                          </span>
                        </div>
                        <div className="skill-bar">
                          <div
                            className="skill-bar-fill"
                            data-percentage={skill.proficiency}
                            style={{ width: `${skill.proficiency}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
