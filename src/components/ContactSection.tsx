
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio';

const ContactSection: React.FC = () => {
  const socialLinks = [
    { 
      name: 'GitHub', 
      url: portfolioConfig.personal.social.github, 
      icon: Github,
      color: 'hover:text-purple-400' 
    },
    { 
      name: 'LinkedIn', 
      url: portfolioConfig.personal.social.linkedin, 
      icon: Linkedin,
      color: 'hover:text-blue-400' 
    },
    { 
      name: 'Twitter', 
      url: portfolioConfig.personal.social.twitter, 
      icon: Twitter,
      color: 'hover:text-sky-400' 
    },
    { 
      name: 'Website', 
      url: portfolioConfig.personal.social.website, 
      icon: ExternalLink,
      color: 'hover:text-green-400' 
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-navy-dark">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-headline font-bold text-4xl md:text-5xl mb-6 text-primary">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          <p className="font-subheading text-lg text-gray-light mt-6 max-w-2xl mx-auto">
            Ready to collaborate on something amazing? Let's chat!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl text-center group hover:bg-primary/5 transition-colors duration-300"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
              <Mail className="text-primary" size={32} />
            </div>
            <h3 className="font-subheading font-semibold text-xl mb-4 text-primary">
              Email Me
            </h3>
            <a
              href={`mailto:${portfolioConfig.personal.email}`}
              className="text-gray-light hover:text-primary transition-colors duration-300 font-mono text-lg"
            >
              {portfolioConfig.personal.email}
            </a>
          </motion.div>

          {/* Social Links Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl text-center"
          >
            <h3 className="font-subheading font-semibold text-xl mb-6 text-primary">
              Find Me Online
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className={`flex flex-col items-center p-4 rounded-lg bg-navy-light/50 hover:bg-navy-light transition-all duration-300 ${social.color}`}
                >
                  <social.icon size={24} className="mb-2" />
                  <span className="text-sm font-medium">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href={`mailto:${portfolioConfig.personal.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary text-navy-dark px-8 py-4 rounded-lg font-subheading font-semibold hover:bg-cyan-muted transition-colors duration-300"
          >
            Start a Conversation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
