import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie-player';
import education from '../lotties/education.json'; // Import your Lottie animation file
import ldce_logo from '../assets/ldce-logo.png'; // Import your logo file
import images from '../assets/images.jpeg'; // Adjust the path as necessary
// lottie config
const defaultOptions = {
    loop: true,
    play: true,
    animationData: education,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

const Education = () => {
  const educationData = [
    {
      school: "LD College of Engineering, Ahmedabad",
      degree: "B.E in Computer Engineering",
      duration: "2018 - 2022",
      logo: ldce_logo, // Add your logo path here
      description: "Core coursework in Data Structures, Algorithms, Operating Systems, and Database Management Systems",
      achievements: [
        "CGPA: 9.3/10",
        "Technical Lead of Robotics Club",
        "Member of National level winning ROBOCON team"
      ]
    },
    {
      school: "Adarsh MahaVidyalaya, Gandhidham",
      degree: "Higher Secondary Education (XII)",
      duration: "2016 - 2018",
      logo: images, // Add your logo path here
      description: "Focused on Physics, Chemistry, and Mathematics",
      achievements: [
        "Percentage: 95%",
        "School topper in Mathematics",
        "Active participant in science exhibitions"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <motion.h2 
        className="text-3xl font-bold text-[#ccd6f6] mb-16 flex items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <span className="text-[#64ffda] font-mono mr-2">02.</span>
        Education
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Lottie Animation on the left */}
        <div className="md:w-1/2">
          <div className="top-24">
            <Lottie 
              {...defaultOptions}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="space-y-8 ml-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="hover:bg-[#112240] p-6 hover:shadow-lg rounded-lg transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    src={edu.logo}
                    alt={`${edu.school} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-[#ccd6f6]">{edu.school}</h3>
                  <p className="text-[#64ffda] font-mono">{edu.degree}</p>
                  <p className="text-[#8892b0] text-sm mb-2">{edu.duration}</p>
                  <p className="text-[#8892b0] mb-2">{edu.description}</p>
                  <ul className="list-disc list-inside text-[#8892b0]">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm">{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;