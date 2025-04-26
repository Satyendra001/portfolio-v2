import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.h2 
        className="text-3xl font-bold text-[#ccd6f6] mb-8 flex items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <span className="text-[#64ffda] font-mono mr-2">01.</span>
        About Me
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-[#8892b0] mb-4">
            Hello! My name is Satyendra and I enjoy creating things that live on the internet.
            My interest in web development started back in 2012 when I decided to try editing
            custom Tumblr themes — turns out hacking together a custom reblog button taught
            me a lot about HTML & CSS!
          </p>
          <p className="text-[#8892b0]">
            Fast-forward to today, and I've had the privilege of working at various organizations.
            My main focus these days is building accessible, inclusive products and digital
            experiences.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="relative group">
            <div className="w-64 h-64 relative mx-auto">
              <div className="absolute inset-0 bg-[#64ffda] rounded-md opacity-20 group-hover:opacity-0 transition-opacity"></div>
              <img 
                src="/path-to-your-image.jpg" 
                alt="Profile" 
                className="rounded-md grayscale hover:grayscale-0 transition-all"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
