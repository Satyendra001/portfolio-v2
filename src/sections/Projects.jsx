import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "EasyCart",
    description: "An e-commerce platform built with Next.js and Redux. Features include user authentication, product catalog, shopping cart, order management, and admin dashboard. Integrated with Stripe for secure payments.",
    tech: ["Next.js", "Redux", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com/Satyendra001/EasyCart",
    live: "https://easy-cart-ten.vercel.app/",
    image: "src/assets/chat.png"
  },
  {
    title: "TalkTrove",
    description: "A real-time chat application built with MERN stack and Socket.IO. Features include user authentication, real-time messaging, group chats, and file sharing capabilities.",
    tech: ["React", "Node.js", "Socket.IO", "MongoDB", "Express"],
    github: "https://github.com/Satyendra001/TalkTrove",
    live: "https://talk-trove.vercel.app/",
    image: "src/assets/chess.png"
  },
  {
    title: "Workout-Tracker",
    description: "A full-stack fitness tracking application with JWT authentication. Users can create, track, and manage their workout routines with detailed exercise logging and progress monitoring.",
    tech: ["MERN Stack", "JWT", "Express", "MongoDB"],
    github: "https://github.com/Satyendra001/workout-tracker-project",
    live: "",
    image: "src/assets/wePlay.png"
  },
  {
    title: "TaskBoard",
    description: "A Kanban-style task management application built with React and Firebase. Features include drag-and-drop task management, real-time updates, and user collaboration.",
    tech: ["React", "Firebase", "Material-UI"],
    github: "https://github.com/Satyendra001/TaskBoard",
    live: "https://taskboard-satyendra.vercel.app/",
    image: "src/assets/flappy.png"
  },
  {
    title: "TaskBoard",
    description: "A Kanban-style task management application built with React and Firebase. Features include drag-and-drop task management, real-time updates, and user collaboration.",
    tech: ["React", "Firebase", "Material-UI"],
    github: "https://github.com/Satyendra001/TaskBoard",
    live: "https://taskboard-satyendra.vercel.app/",
    image: "src/assets/tap.png"
  },
  {
    title: "GoOauth",
    description: "A Kanban-style task management application built with React and Firebase. Features include drag-and-drop task management, real-time updates, and user collaboration.",
    tech: ["React", "Firebase", "Material-UI"],
    github: "https://github.com/Satyendra001/TaskBoard",
    live: "https://taskboard-satyendra.vercel.app/",
    image: "src/assets/tap.png"
  }
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-4">
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
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
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
                      className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
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

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-[#64ffda]/5 opacity-0 
                         transition-opacity duration-300"
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
