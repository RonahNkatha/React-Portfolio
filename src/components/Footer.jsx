import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link to="#">
            <FaGithub />
          </Link>
        </li>
        <li>
          <Link to="#">
            <FaLinkedin />
          </Link>
        </li>
        <li>
          <Link to="#">
            <FaStackOverflow />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
