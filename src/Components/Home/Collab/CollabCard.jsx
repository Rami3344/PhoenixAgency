import React from "react";
import star from "./star.png";
import "./Collab.css";
function CollabCard(props) {
  return (
    <div className="collab-card">
      <div className="stars">
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
      </div>
      <div className="comment">
        <p>{props.comment}</p>
      </div>
      <div className="profile">
        <img src={props.pic} />
        <p>{props.name}</p>
        <span>{props.pro}</span>
      </div>
    </div>
  );
}

export default CollabCard;
