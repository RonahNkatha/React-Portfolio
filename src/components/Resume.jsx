import React from "react";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="resume-content">
          <h2>Resume</h2>
          <Link to="/resume.pdf" target="_blank" className="resume-button">
            Download my resume
          </Link>
          <div className="skills">
            <h3>Front-end Proficiencies</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="skills">
            <h3>Back-end Proficiencies</h3>
            <ul>
              <li>Node</li>
              <li>Express</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
