import React from "react";
import "./About.css";
function AboutCard(props) {
  return (
    <div className="card-about">
      <img src={props.img} />
      <p>{props.name}</p>
      <span>{props.pro}</span>
    </div>
  );
}

export default AboutCard;
