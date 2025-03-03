import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

export default function Hero() {
  return (
    <div className="hero contain d-flex align-items-center justify-content-center flex-wrap  ">
      <div className=" hero-text text-center">
        <h1 className="m-3">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h1>
        <p className="m-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe totam
          aut nobis minima voluptatum aliquid placeat tenetur voluptas
          blanditiis! Expedita impedit fugit dolore facere consequatur ea
          obcaecati incidunt architecto dolores quos, repellendus voluptate
          voluptatum nisi sapiente error quidem facilis. Velit.
        </p>
        <button className="btn mb-3">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
}
