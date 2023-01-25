import React from "react";
import Navbar from "../components/Navbar";
import "../assets/css/main.css";
import Contactbar from "../components/Contactbar";

const contact = () => {
  return (
    <>
      <Navbar />
      <main className="contact-page">
        <h1>Get in touch</h1>

        <p className="contact-text">
          I’m always looking for any new opportunities
          <br />
          and would love to discuss them further. Whether you have a question
          <br /> or just want to say hi, please feel free to reach out.
        </p>

        <button className="contact-btn"> Say Hi!</button>
        <Contactbar />
        <p className="footer">
          <span>
            &copy; {new Date().getFullYear()} Built & Designed by Sidd
          </span>
        </p>
      </main>
    </>
  );
};

export default contact;
