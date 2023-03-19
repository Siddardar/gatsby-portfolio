import React from "react";
import Carousel from "react-multi-carousel";
import shuttle from "../assets/images/badminton.webp";
import chess from "../assets/images/chess.webp";
import atom from "../assets/images/atom.webp";
import sudoku from "../assets/images/sudoku.webp";
import farm from "../assets/images/farm.webp";
import maze from "../assets/images/maze.webp";
import "../assets/css/carousel.css";

const carousel = () => (
  <Carousel
    swipeable={true}
    draggable={false}
    showDots={false}
    responsive={{
      desktop: {
        breakpoint: { max: 3000, min: 1921 },
        items: 3,
        slidesToSlide: 2, // optional, default to 1.
      },
      smalldesktop: {
        breakpoint: { max: 1921, min: 1360 },
        items: 2,
        slidesToSlide: 1, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1360, min: 464 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    }}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    keyBoardControl={true}
    customTransition="transform 1s ease-in-out"
    transitionDuration={1000}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
  >
    <div className="card">
      <img className="card-img" src={shuttle} alt="Img1" />
      <div className="card-text">
        <h1>Court Scan</h1>
        <p>
          A Python script to check the availability of ActiveSG badminton courts
          based on your location
        </p>

        <div className="carousel-btn">
          <a
            href="https://github.com/Siddardar/court_scan"
            target={"_blank"}
            rel="noreferrer"
          >
            <button>Learn more!</button>
          </a>
        </div>
      </div>
    </div>
    <div className="card">
      <img className="card-img" src={chess} alt="Img2" />
      <div className="card-text">
        <h1>Chess Review</h1>
        <p>
          Analyzes your most recent chess.com game and helps you improve by
          spotting inaccuracies and mistakes
        </p>
        <div className="carousel-btn">
          <a
            href="https://github.com/Siddardar/chess-review"
            target={"_blank"}
            rel="noreferrer"
          >
            <button>Learn more!</button>
          </a>
        </div>
      </div>
    </div>
    <div className="card">
      <img className="card-img" src={atom} alt="Img4" />
      <div className="card-text">
        <h1>Portfolio</h1>

        <p>This website built using Gatsby.js a React-based framework</p>

        <div className="carousel-btn">
          <a
            href="https://github.com/Siddardar/gatsby-portfolio"
            target={"_blank"}
            rel="noreferrer"
          >
            <button>Learn more!</button>
          </a>
        </div>
      </div>
    </div>
    <div className="card">
      <img className="card-img" src={sudoku} alt="Img3" />
      <div className="card-text">
        <h1>Sudoku</h1>
        <p>
          A sudoku solver that is faster than 95% of accepted solutions on
          leetcode.com
        </p>
        <div className="carousel-btn">
          <a
            href="https://github.com/Siddardar/sudoku"
            target={"_blank"}
            rel="noreferrer"
          >
            <button>Learn more!</button>
          </a>
        </div>
      </div>
    </div>
    <div className="card">
      <img className="card-img" src={farm} alt="Img5" />
      <div className="card-text">
        <h1>Farm</h1>
        <p>
          A shop built to sell products farm with Razor Pages a .NET framework
        </p>
        <div className="carousel-btn">
          <button>Coming Soon!</button>
        </div>
      </div>
    </div>
    <div className="card">
      <img className="card-img" src={maze} alt="Img6" />
      <div className="card-text">
        <h1>Maze Finder</h1>
        <p>An algorithm visualizer that finds the quickest way out of a maze</p>
        <div className="carousel-btn">
          <button>Coming Soon!</button>
        </div>
      </div>
    </div>
  </Carousel>
);

export default carousel;
