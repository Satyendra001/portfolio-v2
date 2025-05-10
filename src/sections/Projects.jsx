import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import chat from '../assets/chat.png';
import chess from '../assets/chess.png';
import wePlay from '../assets/wePlay.png';
import tap from '../assets/tap.png';
import flappy from '../assets/flappy.png';
import go_oauth from '../assets/go-oauth.png';

const projects = [
  {
    title: "Chat Application",
    description: "A simplistic chat application built using Node.js and React which enables real time messages using Sockets. Provides a realtime status of online and offline users.",
    tech: ["React.js", "JavaScript", "Node.js", "WebSocket", "Tailwind CSS"],
    github: "https://github.com/Satyendra001/ChatApp",
    live: "",
    image: chat
  },
  {
    title: "Chess strategy game",
    description: "A simple web API that provides information on the valid moves of chess pieces based on the current position of opponent pieces. Built in Python using Flask.",
    tech: ["Python", "Falsk", "SQLite3", "Postman", "VSCode", "Git"],
    github: "https://github.com/Satyendra001/ChessServer",
    live: "",
    image: chess
  },
  {
    title: "Music player App",
    description: "A fun and challenging project to get my hands dirty in Android dev. Got a good understanding of threading in Java and Android functionalities.",
    tech: ["Java", "Android Studio", "App dev", "Firebase", "SQLite"],
    github: "https://github.com/Satyendra001/MusicPlayer",
    live: "",
    image: wePlay
  },
  {
    title: "Flappy Bird Game",
    description: "A fun and interesting game Flappy Bird which is built in python using Pygame library. Understood game physics and usecase of python in gaming.",
    tech: ["Python", "Pygame", "Git", "GameDev", "Git", "Algorithm"],
    github: "https://github.com/Satyendra001/FlappyBirdie",
    live: "",
    image: flappy
  },
  {
    title: "Utility App to Run Taps",
    description: "A web app built to automate the manual QA tasks. It performs checks on latest changes in taps. Taps are scheduler that pulls data from data sources.",
    tech: ["Python", "Django", "React", "Javascript", "MUI", "Docker"],
    github: "https://github.com/Satyendra001/TapRunner-Utility",
    live: "",
    image: tap
  },
  {
    title: "GoOauth",
    description: "An OAuth Application server built in Golang. It provides a secure way to authenticate users and authorize third-party applications to access user data without sharing passwords.",
    tech: ["Golang", "OAuth 2.0", "JWT", "PostgreSQL", "Docker"],
    github: "https://github.com/Satyendra001/Go-OAuth",
    live: "",
    image: go_oauth
  }
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-7xl mx-auto py-20">
      <motion.h2 
        className="text-3xl font-bold text-[#ccd6f6] mb-12 flex items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <span className="text-[#64ffda] font-mono mr-2">03.</span>
        Some Things I've Built
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <div className="relative bg-[#112240] rounded-lg overflow-hidden">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transition-all duration-300 
                           group-hover:scale-110 group-hover:brightness-50"
                />
                <div className="absolute inset-0 bg-[#0a192f]/50 transition-opacity 
                              duration-300 opacity-0 group-hover:opacity-100" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#ccd6f6]">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors cursor-pointer"
                      whileHover={{ y: -2 }}
                    >
                      <FiGithub size={20} />
                    </motion.a>
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                        whileHover={{ y: -2 }}
                      >
                        <FiExternalLink size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>

                <p className="text-[#8892b0] text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono text-[#64ffda] px-2 py-1 rounded-full 
                                border border-[#64ffda]/30 bg-[#64ffda]/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
