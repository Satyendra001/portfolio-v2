import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import SkillsAndExperience from './sections/SkillsAndExperience';
import './styles/animations.css';
import Education from './sections/Education';

export default function App() {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.section-reveal').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans bg-[#0a192f] text-[#8892b0]">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <section id="home" className="min-h-screen py-20">
            <Home />
          </section>
          
          <section id="skills & Experience" className="min-h-screen py-20 section-reveal">
            <SkillsAndExperience />
          </section>
          
          {/* <section id="about" className="min-h-screen py-20 section-reveal">
            <About />
          </section> */}
          
          <section id="education" className="min-h-screen py-20 section-reveal">
            <Education />
          </section>

          
          <section id="projects" className="min-h-screen py-20 section-reveal">
            <Projects />
          </section>
          
          <section id="achievements" className="min-h-screen py-20 section-reveal">
            <Achievements />
          </section>
          
          <section id="contact" className="min-h-screen py-20 section-reveal">
            <Contact />
          </section>
        </motion.div>
      </main>
    </div>
  );
}