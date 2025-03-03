import React from "react";
import "./Titel.css";

export default function Titel(props) {
  return (
    <div className="titel text-center">
      <p>{props.subTitel}</p>
      <h2>{props.titel}</h2>
    </div>
  );
}
