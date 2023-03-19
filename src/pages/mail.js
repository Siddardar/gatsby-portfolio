import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../assets/css/mail.css";
import Navbar from "../components/Navbar";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const notify = (message) =>
    toast(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    notify("🚀 Sending Email");
    emailjs
      .sendForm(
        "service_rwjqjq5",
        "template_0s8vn26",
        form.current,
        "PLiTuNI83CQOAlL3K"
      )

      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");
          e.target.reset();

          notify("✉️ Email sent");
        },
        (error) => {
          console.log(error.text);
          notify("Something went wrong.");
          notify("Reach me at sr.sanagala@outlook.com");
        }
      );
  };

  return (
    <>
      <div className="contact-wrapper">
        <title> Contact </title>
        <Navbar />
        <div class="contact-container">
          <div class="contact-box">
            <div class="left"></div>
            <div class="right">
              <h2>Contact Me</h2>
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  class="field"
                  placeholder="Your Name"
                  name="user_name"
                />
                <input
                  type="text"
                  class="field"
                  placeholder="Your Email"
                  name="user_email"
                />

                <textarea
                  placeholder="Message"
                  class="field"
                  name="message"
                ></textarea>

                <button onClick={notify} class="btn">
                  Send
                </button>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
                {/* Same as */}
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
