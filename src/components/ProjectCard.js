import React from "react";
import "./Projects.css"; 

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <img src={project.image} alt={project.title} />
      </a>
      <div className="project-info">
        <h4>{project.category}</h4>
        <h3>{project.title}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
