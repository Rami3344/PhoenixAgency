import React from "react";
import StudyCard from "./StudyCard";
import test from "./test.webp";
function StudyList() {
  const arr = [
    {
      img: test,
      header: "JPEGvault",
      cont: "NFT",
    },
    {
      img: test,
      header: "JPEGvault",
      cont: "NFT",
    },
    {
      img: test,
      header: "JPEGvault",
      cont: "NFT",
    },
    {
      img: test,
      header: "JPEGvault",
      cont: "NFT",
    },
    {
      img: test,
      header: "JPEGvault",
      cont: "NFT",
    },
    {
      img: test,
      header: "JPEGvault",
      cont: "NFT",
    },
    {
      img: test,
      header: "JPEGvault",
      cont: "NFT",
    },
    {
      img: test,
      header: "JPEGvault",
      cont: "NFT",
    },
    {
      img: test,
      header: "JPEGvault",
      cont: "NFT",
    },
    {
      img: test,
      header: "JPEGvault",
      cont: "NFT",
    },
    {
      img: test,
      header: "JPEGvault",
      cont: "NFT",
    },
    {
      img: test,
      header: "JPEGvault",
      cont: "NFT",
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
