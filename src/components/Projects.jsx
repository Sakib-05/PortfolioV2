import React from "react";
import Project from "./Project";

const Projects = () => {
  const projectData = [
    {
      image: "https://via.placeholder.com/300",
      title: "Project 1",
      description: "This is a description for Project 1.",
      tech: ["React", "CSS", "JavaScript"],
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Project 2",
      description: "This is a description for Project 2.",
      tech: ["HTML", "CSS", "Node.js"],
    },
  ];

  return (
    <div className="projects-container">
      {projectData.map((project, index) => (
        <Project
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
          tech={project.tech}
        />
      ))}
    </div>
  );
};

export default Projects;
