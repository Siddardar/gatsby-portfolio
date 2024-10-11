import { Link } from "gatsby";
import React from "react";
import logo from "../assets/images/logov8.png";
import resume from "../assets/others/resume-edit.pdf";
import "../assets/css/main.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/#homeid">
        <img src={logo} alt="" className="nav-logo" />
      </Link>
      <div>
        <ul className="nav-bar">
          <li>
            <Link to="/#homeid" className="normal-link">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/#aboutid" className="normal-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/#projectsid" className="normal-link">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/#contactid" className="normal-link">
              Contact
            </Link>
          </li>
          <li>
            <a href={resume} target="blank">
              <button className="resume-btn">Resume</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
