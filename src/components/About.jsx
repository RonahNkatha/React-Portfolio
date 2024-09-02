import React from "react";
import avatar from "../assets/avatar.png";

const About = () => {
  return (
    <section className="section">
      <div class="container">
        <div className="about-content">
          <h2>About me</h2>
          <img src={avatar} alt="avatar" />
          <p>
            Born and raised in Kenya, I relocated to the US in the year 2022,
            before then I was in the paramilitary for seven years, after I left
            in search for a new career, I enrolled at J sergent Reynolds
            community college where I graduated with Associate degree in social
            Sciences and General Studies. I developed an interest in coding,
            took a few free online classes on Youtube before I enrolled to a six
            months coding bootCamp in University of Richmond.
          </p>
          <p>
            My hobbies include working out, hiking and learning new things, I
            enjoy learning about new cultures. I run a charity group back in
            Kenya, where we raise funds to help orphans and less privileged.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
