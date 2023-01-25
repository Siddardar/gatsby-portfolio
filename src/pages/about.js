import React from "react";
import Navbar from "../components/Navbar";
import selfie from "../assets/images/selfie.jpg";
import Sidebar from "../components/Sidebar";
import "../assets/css/about.css";

const about = () => {
  return (
    <>
      <Navbar />

      <div className="about-page">
        <Sidebar />
        <div className="frame">
          <img className="about-img" src={selfie} alt="selfie"></img>
        </div>

        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hi I'm Sidd and I love building things that live in both the
            physical and virtual worlds.
            <br />
            <br />
            Growing up one of my earliest memories include tinkering with an old
            white desktop, with a screen thicker than my head, and I've been in
            love with computers ever since.
            <br />
            <br />
            Fast forward to today, I decided to use the time between my A Levels
            and university to brush up on my coding skills. What started as a
            way to check the availability of badminton courts around my home,
            quickly turned into multiple projects that I'm proud of.
            <br />
            <br />
            Other than coding, my hobbies include playing badminton, chess and
            learning new languages.
          </p>
        </div>
      </div>
    </>
  );
};

export default about;
