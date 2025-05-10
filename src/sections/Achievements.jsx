import React from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const achievements = [
  {
    title: "Achievement One",
    organization: "Organization Name",
    date: "2023",
    description: "Description of the achievement and its significance."
  },
  // Add more achievements...
];

const Achievements = () => {
  return (
    <div className="max-w-7xl mx-auto py-20">
      <motion.h2 
        className="text-3xl font-bold text-[#ccd6f6] mb-12 flex items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <span className="text-[#64ffda] font-mono mr-2">04.</span>
        Achievements
      </motion.h2>

      <div className="space-y-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-[#112240] p-6 rounded-lg hover:shadow-xl transition-all"
            whileHover={{ x: 10 }}
          >
            <div className="flex items-start gap-4">
              <FiAward className="text-[#64ffda] text-2xl mt-1" />
              <div>
                <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">
                  {achievement.title}
                </h3>
                <p className="text-[#64ffda] font-mono text-sm mb-2">
                  {achievement.organization} • {achievement.date}
                </p>
                <p className="text-[#8892b0]">
                  {achievement.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
