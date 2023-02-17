import React from "react";
import "./Study.css";
function StudyCard(props) {
  return (
    <div className="study-card">
      <img src={props.img} />
      <h3>{props.header}</h3>
      <p>{props.cont}</p>
    </div>
  );
}

export default StudyCard;
