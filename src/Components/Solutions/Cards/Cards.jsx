import React from "react";
import "./Cards.css";
function Cards(props) {
  return (
    <div className="cards">
      <img src={props.icon} />
      <p>{props.content}</p>
    </div>
  );
}

export default Cards;
