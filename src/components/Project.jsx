import React, { useState } from "react";

const Project = ({ image, title, description, tech }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div
      className={`project-card ${isExpanded ? "expanded" : ""}`}
      onClick={toggleExpand}
    >
      <img src={image} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      {isExpanded && (
        <div className="project-details">
          <p className="project-description">{description}</p>
          <div className="project-tech">
            {tech.map((item, index) => (
              <div className="tech" key={index}>{item}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
