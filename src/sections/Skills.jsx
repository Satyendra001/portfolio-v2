import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "MongoDB"]
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "AWS", "Linux", "VS Code"]
  }
];

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.h2 
        className="text-3xl font-bold text-[#ccd6f6] mb-12 flex items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <span className="text-[#64ffda] font-mono mr-2">02.</span>
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-[#112240] p-6 rounded-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-[#64ffda] font-mono mb-4">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
                  className="flex items-center text-[#8892b0]"
                >
                  <span className="text-[#64ffda] mr-2">▹</span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
