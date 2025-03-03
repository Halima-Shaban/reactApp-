import React from "react";
import "./Campus.css";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import wight_arrow from "../../assets/white-arrow.png";

export default function Campus() {
  return (
    <div className=" campus text-center">
      <div className="row gallery  justify-content-center  ">
        <img
          className="img-fluid  col-12  col-md-4 col-lg-3  mb-3 "
          src={gallery_1}
          alt=""
        />
        <img
          className="img-fluid col-12  col-md-4 col-lg-3  mb-3"
          src={gallery_2}
          alt=""
        />
        <img
          className="img-fluid col-12  col-md-4 col-lg-3 mb-3 "
          src={gallery_3}
          alt=""
        />
        <img
          className="img-fluid col-12  col-md-4 col-lg-3 mb-3 "
          src={gallery_4}
          alt=""
        />
      </div>
      <button className="btn dark-btn">
        Sea More Here <img className="img-fluid" src={wight_arrow} alt="" />{" "}
      </button>
    </div>
  );
}
