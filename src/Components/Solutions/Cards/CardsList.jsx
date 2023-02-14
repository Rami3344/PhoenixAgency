import React from "react";
import Cards from "./Cards";
import influence from "./influence.png";
import ads from "./bullhorn.png";
import commange from "./commange.png";
import mediamana from "./mediamana.png";
import pubrel from "./pubrel.png";
import meeting from "./meeting.png";
function CardsList() {
  const arr = [
    {
      content: "Influencer Marketing",
      icon: influence,
    },
    {
      content: "Paid Ads",
      icon: ads,
    },
    {
      content: "Public Relations",
      icon: pubrel,
    },
    {
      content: "Community Management",
      icon: commange,
    },
    {
      content: "Social Media Management",
      icon: mediamana,
    },
    {
      content: "BOOK MEETING ...",
      icon: meeting,
    },
  ];
  return (
    <div className="card-list">
      {arr.map((e) => (
        <Cards content={e.content} icon={e.icon} />
      ))}
    </div>
  );
}

export default CardsList;
