import React from "react";
import { FiGithub, FiInstagram, FiCode, FiMail } from "react-icons/fi";
import { IconContext } from "react-icons";
import { TbBrandTelegram } from "react-icons/tb";
import { FaChessBishop } from "react-icons/fa";
import "../assets/css/sidebar.css";

const Sidebar = () => {
  return (
    <>
      <IconContext.Provider value={{ size: "1.4em" }}>
        <ul className="sidebar-icons">
          <a href="https://github.com/Siddardar" target="blank">
            <li className="icon">
              <FiGithub />
            </li>
          </a>
          <a href="https://leetcode.com/srsanagala1011/" target="blank">
            <li className="icon">
              <FiCode />
            </li>
          </a>
          <a href="mailto:sr.sanagala@outlook.com" target="blank">
            <li className="icon">
              <FiMail />
            </li>
          </a>
          <a href="https://www.instagram.com/siddardar/" target="blank">
            <li className="icon">
              <FiInstagram />
            </li>
          </a>
          <a href="https://t.me/siddardar" target="blank">
            <li className="icon">
              <TbBrandTelegram />
            </li>
          </a>
          <a href="https://www.chess.com/member/atonist" target="blank">
            <li className="icon">
              <FaChessBishop />
            </li>
          </a>
        </ul>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
