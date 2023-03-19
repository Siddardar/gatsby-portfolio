import React from "react";
import Navbar from "../components/Navbar";
import AutoTyping, { BlinkCursor } from "react-auto-typing";

import "../assets/css/home.css";

const home = () => {
  return (
    <>
      <Navbar />
      <div className="home-page">
        <title> Sidd's Website </title>
        <AutoTyping
          className="home-text"
          active={true} // <boolean>
          textRef="Welcome" // <string>
          writeSpeed={300} // <number>
          deleteSpeed={300} // <number>
          delayToWrite={1000} // <number>
          delayToDelete={3000} // <number>
        />
        <BlinkCursor
          className="blinker"
          active // <boolean>
          blinkSpeed={500} // <number>
        />
      </div>
    </>
  );
};

export default home;
