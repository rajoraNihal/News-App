import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        News App made by -{" "}
        <a href="https://www.linkedin.com/in/nihalrajora/" target="__blank">
          Nihal Singh Rajora
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="#" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/nihalrajora/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/nihalrajora/" target="__blank">
          <i className="fas fa-link fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
