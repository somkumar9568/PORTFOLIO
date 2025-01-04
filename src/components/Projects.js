import React from "react";
import ProjectList from "./ProjectList";
import "./Projects.css";
import img1 from './images/library-management-system.jpg'; // Import the image

const Projects = () => {
  const projectList = [
    {
      title: "Library Management System",
      category: "Web  development",
      image: img1, 
    },
    {
      title: "",
      category: "Web Development",
      image: "https://via.placeholder.com/300x200", // Placeholder image
    },
    {
      title: "",
      category: "Web Development",
      image: "https://via.placeholder.com/300x200", // Placeholder image
    },
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <p>Some Of My Distinguished Works</p>
      <ProjectList projects={projectList} />
    </section>
  );
};

export default Projects;
