import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="slide-in space-y-8">
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Hi, I'm Satyendra
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Full-stack developer passionate about creating meaningful web experiences
        </p>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
          {/* Add your content here */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Latest Skills</h2>
          {/* Add your content here */}
        </div>
      </section>
    </div>
  );
};

export default Home;
