import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaJava,
  FaBitbucket,
  FaDocker,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiPython,
  SiGo,
  SiC,
  SiHtml5,
  SiCss3,
  SiDjango,
  SiFastapi,
  SiNodedotjs,
  SiBitbucket,
  SiDocker,
  SiKubernetes,
  SiRabbitmq,
  SiPostgresql,
  SiElastic,
  SiCelery,
  SiGooglecloud,
  SiTestinglibrary,
  SiReact,
  SiMui,
  SiElasticstack,
  SiKibana,
} from "react-icons/si";

import { BiLogoVisualStudio } from "react-icons/bi";
import {
  TbBrandCpp,
  TbBrandPython,
  TbBrandGolang,
  TbApi,
} from "react-icons/tb";
import { FiDatabase } from "react-icons/fi";

const experiences = [
  {
    title: "Software Development Engineer",
    company: "Infilect technologies Pvt Ltd",
    date: "Sept 2023 - Present",
    description: [
      "Architected and created a Data Management Tool with synchronous data validation and asynchronous data ingestion which is used to automate the ingestion of 100,000+ master data records into databases",
      "Designed and Developed a secure OAuth 2.0 backend server using Golang, enabling seamless third-party authentication for a React.js frontend",
      "Implemented Store Standardisation workflow in our current product which increases the store visibility by 30% using the historical store data and providing actionable insights",
    ],
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Golang", icon: <SiGo /> },
      { name: "RabbitMQ", icon: <SiRabbitmq /> },
      { name: "Celery", icon: <SiCelery /> },
      { name: "GCP", icon: <SiGooglecloud /> },
      { name: "GCP", icon: <SiPostgresql /> },
    ],
  },
  {
    title: "Software Engineer",
    company: "Crest Data Systems",
    date: "Jul 2022 - Sep 2023",
    description: [
      "Worked with a team of skilled developers to create and maintain schedulars, called taps, to extract data from data sources like Amazon S3, Stripe to DataWarehouses like Snowflake, Google Cloud",
      "Enhanced a tool to migrate data from Elastic Search to Splunk by adding new features and latest version support.",
      "Partnered with Service Now organization to implement dashboard for analytics in their system which will help in reducing incident reporting and monitoring by 20",
    ],
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React", icon: <SiReact /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "MUI", icon: <SiMui /> },
      { name: "MUI", icon: <SiKibana /> },
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Crest Data Systems",
    date: "Dec 2022 - Jul 2022",
    description: [
      "Developed an innovative web app that automated the execution of integration code from GitHub, generating detailed reports on 10 key parameters for QA and development analysis, drastically improving project efficiency",
      "Built responsive web applications using modern technologies",
      "Contributed to team projects and learned industry best practices",
    ],
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "VS Code", icon: <BiLogoVisualStudio /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Bitbucket", icon: <FaBitbucket /> },
      
    ],
  },
];

const skillIcons = {
  "programming languages": [
    { name: "Python", icon: <SiPython /> },
    { name: "Golang", icon: <SiGo /> },
    { name: "C++", icon: <TbBrandCpp /> },
    { name: "C", icon: <SiC /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Java", icon: <FaJava /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
  ],
  "framework/libraries": [
    { name: "Django", icon: <SiDjango /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "Chi", icon: <SiGo /> },
    { name: "React", icon: <FaReact /> },
    { name: "Nodejs", icon: <SiNodedotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ],
  databases: [
    { name: "Postgres", icon: <SiPostgresql /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Elastic", icon: <SiElastic /> },
  ],
  tools: [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Bitbucket", icon: <FaBitbucket /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "VS Code", icon: <BiLogoVisualStudio /> },
    { name: "RabbitMQ", icon: <SiRabbitmq /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Linux", icon: <FaLinux /> },
  ],
};

const SkillCategory = ({ category, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="bg-[#112240] p-6 rounded-lg"
  >
    <h3 className="text-[#64ffda] font-mono mb-4 capitalize">{category}</h3>
    <div className="flex flex-wrap gap-4">
      {skills.map(({ name, icon }, index) => (
        <motion.div
          key={name}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1 * index }}
          className="group flex flex-col items-center gap-2"
        >
          <div
            className="text-[#8892b0] hover:text-[#64ffda] transition-colors text-2xl 
                         p-3 rounded-lg bg-[#0a192f] hover:bg-[#112240] cursor-pointer
                         border border-[#233554] hover:border-[#64ffda]"
          >
            {icon}
          </div>
          <span className="text-xs text-[#8892b0] group-hover:text-[#64ffda] transition-colors">
            {name}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const SkillsAndExperience = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-8">
      <motion.h2
        className="text-3xl font-bold text-[#ccd6f6] mb-16 flex items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <span className="text-[#64ffda] font-mono mr-2">02.</span>
        Experience & Skills
      </motion.h2>

      {/* Experience Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#112240] p-6 rounded-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-bold text-[#ccd6f6] mb-1">
                {exp.title}
              </h3>
              <p className="text-[#64ffda] font-mono text-sm mb-4">
                {exp.company} • {exp.date}
              </p>
              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-[#8892b0] flex items-start">
                    <span className="text-[#64ffda] mr-2">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map(({skill_name, icon}, i) => (

                    <span
                      key={i}
                      className="text-xl font-mono text-[#8892b0] hover:text-[#64ffda] px-3 py-3 rounded border border-[#64ffda]/30 cursor-pointer"
                    >
                      {icon}
                    </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="space-y-8">
          {Object.entries(skillIcons).map(([category, skills], index) => (
            <SkillCategory key={category} category={category} skills={skills} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsAndExperience;
