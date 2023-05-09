import React from "react";
import CollabCard from "./CollabCard";
import c1 from "./c1.webp";
import c2 from "./c2.webp";
import c3 from "./c3.webp";
import c4 from "./c4.webp";
import c5 from "./c5.webp";
import c6 from "./c6.webp";
function CollabList() {
  const arr = [
    {
      comment:
        "Working with Phoenix Strategy has been an absolute game-changer for my business. Their expertise and dedication to delivering exceptional results have left me beyond satisfied. From the moment we engaged their services, their team exhibited a deep understanding of my brand and industry.",
      pic: c1,
      name: "Sam Jackson",
      pro: "Coinzilla",
    },
    {
      comment:
        " Their creative concepts were innovative and perfectly aligned with my brand. The execution was flawless, resulting in increased brand visibility and customer engagement. Communication was excellent throughout the project.",
      pic: c2,
      name: "Paulus Haverinen",
      pro: "Founder, Hypecloud",
    },
    {
      comment:
        "Phoenix Strategy has demonstrated keen expertise in this field through successful and satisfying deliverables. They communicate thoroughly and responsively, streamlining the workflow and immersing in the tasks. Furthermore, their meticulousness, methodological approach, and foresight are noteworthy.",
      pic: c3,
      name: "Wouter Spruijtenburg",
      pro: "Director, Ecom Waves Group",
    },
    {
      comment:
        "I couldn't be happier with the exceptional service provided by Phoenix Strategy. From start to finish, their team displayed a level of professionalism and expertise that exceeded my expectations. They took the time to understand my business objectives and tailored a marketing strategy specifically designed to achieve those goals.",
      pic: c4,
      name: "Pepeklist",
      pro: "Owner, Ikirakenne Ltd",
    },
    {
      comment:
        "They are a top-notch marketing agency that I would highly recommend to anyone seeking outstanding results.",
      pic: c5,
      name: "Toms Selga",
      pro: "CFO, DoRac",
    },
    {
      comment:
        " I highly recommend Phoenix Strategy for their outstanding services as a top-tier marketing agency. They are the partner you need to take your business to the next level.",
      pic: c6,
      name: "Tyler Mullins",
      pro: "Founder, Omni Agency",
    },
  ];
  return (
    <div className="collab-list">
      {arr.map((e) => (
        <CollabCard comment={e.comment} pic={e.pic} name={e.name} pro={e.pro} />
      ))}
    </div>
  );
}

export default CollabList;
