import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects }) => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
