import React from "react";
import "./Programs.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

export default function Programs() {
  return (
    <div className="row programs   ">
      <div className="program col-12 col-md-6 col-lg-4 mb-3 ">
        <img className="" src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program col-12 col-md-6 col-lg-4 mb-3 ">
        <img className="" src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program col-12 col-md-6 col-lg-4 mb-3 ">
        <img className="" src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Post Graduation </p>
        </div>
      </div>
    </div>
  );
}
