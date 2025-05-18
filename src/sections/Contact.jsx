import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiCode } from 'react-icons/fi';
import satyendra_resume from '../assets/resume.pdf';

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
    url: 'mailto:satyendrasingh10101@gmail.com',
    label: 'Email'
  }
];

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto text-center min-h-[80vh] flex flex-col justify-center">
      <motion.h2 
        className="text-5xl font-bold text-[#ccd6f6] mb-4 flex items-center justify-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <span className="text-[#64ffda] font-mono mr-2"></span>
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-[#8892b0] mb-8 max-w-l mx-auto px-4 text-lg"
      >
        Thanks for reading this far.<br />
If you have any questions or just want to say hi, feel free to reach out! <br/> I'm always open to discussing new projects, creative ideas,         or opportunities to be part of your vision.
<br />
      </motion.p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-[#64ffda] text-[#64ffda] px-8 py-3 rounded hover:bg-[#64ffda]/10 hover:cursor-pointer"
          onClick={() => window.location.href = 'mailto:satyendrasingh10101@gmail.com'}
        >
          Say Hello
        </motion.button>

        <motion.a
          href={satyendra_resume}
          download="Satyendra_Singh_Resume.pdf"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-[#64ffda] text-[#64ffda] px-8 py-3 rounded hover:bg-[#64ffda]/10"
        >
          Download CV
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex justify-center gap-8 mb-8"
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
