import React from "react";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import "../../assets/css/carousel.css";
import "react-multi-carousel/lib/styles.css";

const projects = () => {
  return (
    <>
      <Navbar />
      <div className="carosel">
        <Carousel />
      </div>
    </>
  );
};

export default projects;
