import * as React from "react";
import Homepage from "./home";
import Aboutpage from "./about";
import Contactpage from "./contact";
import ProjectPage from "./projects/index";
import "../assets/css/main.css";

export default function Home() {
  return (
    <div className="container">
      <section className="page-home" id="homeid">
        <Homepage />
      </section>

      <section className="page-about" id="aboutid">
        <Aboutpage />
      </section>

      <section className="page-projects" id="projectsid">
        <ProjectPage />
      </section>

      <section className="page-contact" id="contactid">
        <Contactpage />
      </section>
    </div>
  );
}
