import React from "react";
import Project from "./Project";

const Projects = () => {
  const projectsData = [
    {
      image: "https://via.placeholder.com/300",
      title: "Movie Review App",
      description: "This is a description for Project 1.",
      tech: ["React", "HTML","CSS", "JavaScript", "TMDB API"],
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Dentists Platform",
      description: "This is a description for Project 2.",
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <div className="projects-container">
        <h1 style={{justifySelf:"center"}}>Projects</h1>
        <div style={{display:"flex"}}>
            {projectsData.map((project, index) => (
                <Project
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                tech={project.tech}
                />
            ))}

        </div>
      
    </div>
  );
};

export default Projects;
