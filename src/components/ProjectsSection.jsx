import React from "react";
import { motion } from "framer-motion";
import pro1 from "../assets/pro1.jpg";
import pro2 from "../assets/pro2.jpg";
import pro3 from "../assets/pro3.jpg";
import pro4 from "../assets/pro4.jpg";
import pro5 from "../assets/pro5.jpg";
import pro6 from "../assets/pro6.jpg";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A robust online store with integrated payment systems and user management.",
    image: pro1,  // Use imported images
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "A user-friendly mobile application with seamless navigation and real-time updates.",
    image: pro2,  // Use imported images
  },
  {
    id: 3,
    title: "Corporate Website Redesign",
    description: "A modern and responsive website redesign for a corporate client with enhanced UX/UI.",
    image: pro3,  // Use imported images
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing work, skills, and projects with a sleek and minimal design.",
    image: pro4,  // Use imported images
  },
  {
    id: 5,
    title: "Social Media App",
    description: "A social media application with real-time messaging, content sharing, and user engagement.",
    image: pro5,  // Use imported images
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "A content management system for bloggers to create, publish, and share posts with interactive features.",
    image: pro6,  // Use imported images
  }
];




const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-[#8d8eff] text-white py-16">
      <h2 className="text-center text-4xl font-bold">Projects</h2>
      <div className="mt-10 flex flex-wrap justify-center gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="w-80 bg-primary rounded-lg p-4 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-t-lg"
            />
            <h3 className="text-xl font-bold mt-4">{project.title}</h3>
            <p className="text-sm mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

