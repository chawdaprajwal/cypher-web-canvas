
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-navy-dark">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-headline font-bold text-4xl md:text-5xl mb-6 text-white">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          <p className="font-subheading text-lg text-gray-light mt-6 max-w-2xl mx-auto">
            A showcase of my cybersecurity and software development work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {portfolioConfig.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl overflow-hidden group"
            >
              {project.image && (
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {project.link && (
                    <div className="absolute top-4 right-4">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="glass p-2 rounded-full text-primary hover:bg-primary/20 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    </div>
                  )}
                </div>
              )}
              
              <div className="p-6">
                <h3 className="font-subheading font-semibold text-xl mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-medium mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-mono text-sm"
                  >
                    View Project <ExternalLink size={14} className="ml-1" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
