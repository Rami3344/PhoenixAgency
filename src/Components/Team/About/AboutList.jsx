import React from "react";
import t1 from "./t1.jpg";
import t2 from "./t2.webp";
import t3 from "./t3.webp";
import t4 from "./t4.jpg";
import t5 from "./t5.jpg";
import AboutCard from "./AboutCard";
function AboutList() {
  const arr = [
    { img: t1, name: "Ethan Thompson", pro: "CEO" },
    { img: t2, name: "Samuel Collins", pro: "COO" },
    { img: t3, name: "Benjamin Reed", pro: "Head Of Community Growth" },
    { img: t4, name: "Jarrod Frankel", pro: "Head of Influencer Marketing" },
    { img: t5, name: "William Rejström", pro: "Head of Content and Strategy" },
    { img: t5, name: "William Baker", pro: "Community Manager" },
  ];
  return (
    <div className="about-card-list">
      {arr.map((e) => (
        <AboutCard img={e.img} name={e.name} pro={e.pro} />
      ))}
    </div>
  );
}

export default AboutList;
