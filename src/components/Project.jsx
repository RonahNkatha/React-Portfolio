import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  return (
    <div className="project">
      <Link to={project.deployed} target="_blank">
        <img src={project.image} alt={project.title} />
      </Link>
      <div className="project-content">
        <h3>
          <span>{project.name}</span>
          <Link to={project.github} target="_blank">
            <FaGithub />
          </Link>
        </h3>
        <p>{project.stack}</p>
      </div>
    </div>
  );
};

export default Project;
