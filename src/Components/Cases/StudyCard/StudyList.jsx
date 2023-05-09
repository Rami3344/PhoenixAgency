import React from "react";
import StudyCard from "./StudyCard";
import case1 from "./case-1.webp";
import case2 from "./case-2.webp";
import case3 from "./case-3.webp";
import case4 from "./case-4.webp";
import case5 from "./case-5.webp";
import case6 from "./case-6.webp";
import case7 from "./case-7.webp";
import case8 from "./case-8.webp";
import case9 from "./case-9.webp";
import case10 from "./case-10.webp";
import case11 from "./case-11.webp";
import case12 from "./case-12.webp";
function StudyList() {
  const arr = [
    {
      img: case1,
      header: "PixelPix",
      cont: "GameFi",
    },
    {
      img: case2,
      header: "Kounotori",
      cont: "Crypto",
    },
    {
      img: case3,
      header: "Nobility Token",
      cont: "GameFi",
    },
    {
      img: case4,
      header: "superhow.ART",
      cont: "NFT",
    },
    {
      img: case5,
      header: "JPEGvault",
      cont: "NFT",
    },
    {
      img: case6,
      header: "Dark Frontiers",
      cont: "GameFi",
    },
    {
      img: case7,
      header: "Game Starter",
      cont: "GameFi",
    },
    {
      img: case8,
      header: "Murdrex",
      cont: "DeFi",
    },
    {
      img: case9,
      header: "Oasis Foundation",
      cont: "DeFi",
    },
    {
      img: case10,
      header: "Recast1",
      cont: "DeFi",
    },
    {
      img: case11,
      header: "Sahara Protocol",
      cont: "DeFi",
    },
    {
      img: case12,
      header: "Olympus Game",
      cont: "GameFi",
    },
  ];
  return (
    <div className="study-list">
      {arr.map((e) => (
        <StudyCard img={e.img} header={e.header} cont={e.cont} />
      ))}
    </div>
  );
}

export default StudyList;
