import React from "react";
import projects from "../data/projects";
import Project from "./Project";

const Portfolio = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="portfolio-section">
          <h2>Portfolio</h2>
          <div className="projects-wrapper">
            {projects.map((project) => {
              return <Project project={project} key={project.id} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
