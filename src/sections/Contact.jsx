import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiCode } from 'react-icons/fi';

const socialLinks = [
  {
    Icon: FiGithub,
    url: 'https://github.com/Satyendra001',
    label: 'GitHub'
  },
  {
    Icon: FiLinkedin,
    url: 'https://www.linkedin.com/in/satyendra-singh1',
    label: 'LinkedIn'
  },
  {
    Icon: FiCode,
    url: 'https://leetcode.com/u/Satyendra001/',
    label: 'LeetCode'
  },
  {
    Icon: FiMail,
    url: 'mailto:satyendrasingh.tech01@gmail.com',
    label: 'Email'
  }
];

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2 
        className="text-3xl font-bold text-[#ccd6f6] mb-4 flex items-center justify-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <span className="text-[#64ffda] font-mono mr-2">05.</span>
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-[#8892b0] mb-8 max-w-xl mx-auto"
      >
        I'm a Full Stack Developer passionate about creating impactful web solutions. 
        With expertise in MERN stack and a strong foundation in Data Structures & Algorithms, 
        I'm always eager to take on new challenges and collaborate on innovative projects.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="border-2 border-[#64ffda] text-[#64ffda] px-8 py-4 rounded hover:bg-[#64ffda]/10 mb-12"
        onClick={() => window.location.href = 'mailto:satyendrasingh.tech01@gmail.com'}
      >
        Let's Connect
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex justify-center gap-8"
      >
        {socialLinks.map(({ Icon, url, label }, index) => (
          <motion.a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="text-[#8892b0] hover:text-[#64ffda] transition-colors group relative"
          >
            <Icon size={24} />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-[#64ffda]">
              {label}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Contact;
