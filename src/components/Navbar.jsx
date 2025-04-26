import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'skills & Experience', 'projects', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a192f]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            className="text-2xl font-bold text-[#64ffda]"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-[#64ffda]">{`<S/S>`}</span>
          </motion.div>
          <div className="flex items-center space-x-8">
            {['home', 'about', 'skills', 'skills & Experience', 'projects', 'achievements', 'contact'].map((item, index) => (
              <motion.button
                key={item}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item)}
                className={`text-xl font-medium capitalize transition-colors ${
                  activeSection === item
                    ? 'text-[#64ffda]'
                    : 'text-gray-300 hover:text-[#64ffda] cursor-pointer'
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
