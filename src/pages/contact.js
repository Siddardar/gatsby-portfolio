import React from "react";
import Navbar from "../components/Navbar";
import "../assets/css/main.css";
import Contactbar from "../components/Contactbar";
import { Link } from "gatsby";

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
        <Link to="mail">
          <button className="contact-btn"> Say Hi!</button>
        </Link>
        <Contactbar />
      </main>
    </>
  );
};

export default contact;
