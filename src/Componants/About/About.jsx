import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

export default function About() {
  return (
    <div className="row about d-flex align-items-center justify-content-between">
      <div className=" col-12 mb-4  col-lg-6 order-1 order-lg-2 about-left">
        <img src={about_img} alt="" className="about-img img-fluid" />
        <img src={play_icon} alt="" className="play-icon img-fluid" />
      </div>
      <div className="col-12 col-lg-6  order-2 order-lg-1 about-right">
        <h3>Lorem, ipsum.</h3>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          possimus laboriosam, commodi ipsam itaque iste?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          possimus laboriosam, commodi ipsam itaque iste?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          possimus laboriosam, commodi ipsam itaque iste?
        </p>
      </div>
    </div>
  );
}
