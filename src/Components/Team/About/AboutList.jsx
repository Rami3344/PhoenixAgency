import React from "react";
import test from "./test.jfif";
import AboutCard from "./AboutCard";
function AboutList() {
  const arr = [
    { img: test, name: "William Baker", pro: "Head Of Community Growth" },
    { img: test, name: "William Baker", pro: "Head Of Community Growth" },
    { img: test, name: "William Baker", pro: "Head Of Community Growth" },
    { img: test, name: "William Baker", pro: "Head Of Community Growth" },
    { img: test, name: "William Baker", pro: "Head Of Community Growth" },
    { img: test, name: "William Baker", pro: "Head Of Community Growth" },
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
