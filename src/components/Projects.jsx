import React from "react";
import Project from "./Project";

const Projects = () => {
  const projectsData = [
    {
      image: "/Images/ProjectsImages/movie review website project.png",
      title: "Movie Review App",
      description: "Developed a movie review web app using React and TMDB API.",
      tech: ["React", "JavaScript", "TMDB API"],
    },
    {
      image: "/Images/ProjectsImages/dental healthcare platform.jpeg",
      title: "Dentists Platform",
      description: "A hackathon project that helps dentists manage their patients and communicate.",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
        image: "/Images/ProjectsImages/java2DGame.png",
        title: "2D Batman Game",
        description: "a 2D game in Java as part of my university coursework.",
        tech: ["Java"],
    },
    {
        image: "/Images/ProjectsImages/oldPortfolioWbsite.jpeg",
        title: "Previous Portfolio Website",
        description: "My previous portfolio website that I developed using HTML, CSS, and JavaScript.",
        tech: ["HTML", "CSS", "JavaScript"],
    },  
  ];

  return (
    <div className="Projects">
        <h1 style={{justifySelf:"center"}}>Projects</h1>
        <div style={{display:"flex", flexWrap:"wrap", gap:"15px", justifyContent:"space-evenly"}}>
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
