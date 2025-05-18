import React from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const achievements = [
  {
    title: "K8S deployment on GCP",
    organization: "Infilect Technologies",
    date: "2025",
    description: "Deployed the entire Data Management Tool , which was developed by us, on GCP Kubernetes cluster. This made the tool more scalable and reliable where it can handle a huge load of users.",
  },
  {
    title: "Leetcode top 4%",
    organization: "Leetcode",
    date: "2023",
    description: "Was among the top 4% of Leetcode users in 2023 leetcode contest.",
  },
  {
    title: "Robocon 2019 Winner",
    organization: "Robocon LDCE",
    date: "2019",
    description: "Robocon is a national level robotics competition organized by the Asia-Pacific Broadcasting Union (ABU). We won the national level competition in 2019.",
  },
  {
    title: "District topper in 12th",
    organization: "GSEB",
    date: "2018",
    description: "I was the district topper in 12th standard in GSEB board with 92% marks. Awarded with Ishwar Buxani Trophy and a scholarship for the same.",
  }
];

const Achievements = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <motion.h2 
        className="text-5xl font-bold text-[#ccd6f6] mb-15 flex items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <span className="text-[#64ffda] font-mono mr-2"></span>
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
