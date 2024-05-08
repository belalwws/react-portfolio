import React from "react";
import "./hero.css";
import Lottie from "lottie-react";

import frontAnimation from "../../../public/animation/frontend.json";

export default function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <img
            className="avatar"
            src="./WhatsApp Image 2024-04-30 at 9.28.10 PM-modified.png"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>
        <h1 className="tile">Front-End develper </h1>
        <p>
          iam Belal Ahmed a computer emgineer student and front-end developer
        </p>
        <div className="icons flex">
          <div className="icon icon-x"></div>
          <div className="icon icon-instagram1"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin-square"></div>
        </div>
      </div>
      <div className="right-section animation ">
        <Lottie
          className="conactanimation"
          // loop={false}
          style={{ height: 500 }}
          animationData={frontAnimation}
        />
      </div>
    </section>
  );
}
