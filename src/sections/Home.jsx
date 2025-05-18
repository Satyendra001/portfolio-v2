import React, { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";
import Lottie from "react-lottie-player";
import animationData from "../lotties/person-coding.json";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiCode, FiDownload } from "react-icons/fi";
import resume from "../assets/resume.pdf"; // Adjust the path to your resume file
const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // lottie config
  const defaultOptions = {
    loop: true,
    play: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const particlesOptions = {
    particles: {
      color: {
        value: "#64ffda",
      },
      links: {
        color: "#64ffda",
        distance: 150,
        enable: true,
        opacity: 0.2,
      },
      move: {
        enable: true,
        speed: 1,
      },
      size: {
        value: { min: 1, max: 3 },
      },
      opacity: {
        value: 0.3,
      },
    },
  };

  return (
    <div className="relative min-h-screen">
      <Particles
        className="absolute inset-0"
        init={particlesInit}
        options={particlesOptions}
      />

      {/* Social Links */}
      <motion.div
        className="fixed left-10 bottom-90 hidden md:flex flex-col items-center gap-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
      >
        <motion.a
          href="https://github.com/Satyendra001"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: 0, color: "#64ffda" }}
          className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
        >
          <FiGithub size={22} />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/satyendra-singh1"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -4, color: "#64ffda" }}
          className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
        >
          <FiLinkedin size={22} />
        </motion.a>
        <motion.a
          href="https://leetcode.com/u/Satyendra001/"
          whileHover={{ y: -4, color: "#64ffda" }}
          className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
        >
          <FiCode size={22} />
        </motion.a>
        <motion.a
          href="mailto:satyendrasingh10101@gmail.com"
          whileHover={{ y: -4, color: "#64ffda" }}
          className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
        >
          <FiMail size={22} />
        </motion.a>
      </motion.div>

      {/* Main Content */}
      <div className="flex items-center justify-between min-h-screen px-8 relative z-10">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#64ffda] font-mono mb-4"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl font-bold text-[#ccd6f6] mb-4"
          >
            Satyendra Singh
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl font-bold text-[#8892b0] mb-6"
          >
            <TypeAnimation
              sequence={[
                "I build things for the web",
                2000,
                "I create scalable backend applications",
                2000,
                "I develop innovative solutions",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-[#8892b0] mb-12"
          >
            I'm a software engineer specializing in building quality solutions
            to empower current technological needs. I have a passion for
            creating efficient and scalable applications. I am always eager to
            learn and adapt to new challenges.
          </motion.p>

          <div className="flex gap-4">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative inline-block px-8 py-4 font-medium group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#64ffda] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-[#0a192f] border-2 border-[#64ffda] group-hover:bg-[#64ffda]/10"></span>
              <span className="relative text-[#64ffda] group-hover:text-[#ffffff]">
                Check out my work!
              </span>
            </motion.button>

            <motion.a
              href={resume}// Add your resume file path here
              download="Satyendra_Singh_Resume.pdf"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="relative inline-block px-8 py-4 font-medium group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#64ffda] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-[#0a192f] border-2 border-[#64ffda] group-hover:bg-[#64ffda]/10"></span>
              <span className="relative text-[#64ffda] group-hover:text-[#ffffff] flex items-center gap-2">
                <FiDownload />
                Resume
              </span>
            </motion.a>
          </div>
        </div>

        {/* Enhanced Tilt Component */}
        <div className="relative z-index-[5] h-[90%] w-[45%]">
          <Lottie {...defaultOptions} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.p
          className="text-[#8892b0] text-sm font-mono"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Scroll Down
        </motion.p>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiArrowDown className="text-[#64ffda]" size={20} />
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] to-[#112240] -z-20" />
    </div>
  );
};

export default Home;
