import React from "react";
import CollabCard from "./CollabCard";
import test from "./test.jfif";
function CollabList() {
  const arr = [
    {
      comment:
        "Lunar Strategy has demonstrated keen expertise in this field through successful and satisfying deliverables. They communicate thoroughly and responsively, streamlining the workflow and immersing in the tasks. Furthermore, their meticulousness, methodological approach, and foresight are noteworthy.",
      pic: test,
      name: "Sam Jackson",
      pro: "Software Engineer",
    },
    {
      comment:
        "Lunar Strategy has demonstrated keen expertise in this field through successful and satisfying deliverables. They communicate thoroughly and responsively, streamlining the workflow and immersing in the tasks. Furthermore, their meticulousness, methodological approach, and foresight are noteworthy.",
      pic: test,
      name: "Sam Jackson",
      pro: "Software Engineer",
    },
    {
      comment:
        "Lunar Strategy has demonstrated keen expertise in this field through successful and satisfying deliverables. They communicate thoroughly and responsively, streamlining the workflow and immersing in the tasks. Furthermore, their meticulousness, methodological approach, and foresight are noteworthy.",
      pic: test,
      name: "Sam Jackson",
      pro: "Software Engineer",
    },
    {
      comment:
        "Lunar Strategy has demonstrated keen expertise in this field through successful and satisfying deliverables. They communicate thoroughly and responsively, streamlining the workflow and immersing in the tasks. Furthermore, their meticulousness, methodological approach, and foresight are noteworthy.",
      pic: test,
      name: "Sam Jackson",
      pro: "Software Engineer",
    },
    {
      comment:
        "Lunar Strategy has demonstrated keen expertise in this field through successful and satisfying deliverables. They communicate thoroughly and responsively, streamlining the workflow and immersing in the tasks. Furthermore, their meticulousness, methodological approach, and foresight are noteworthy.",
      pic: test,
      name: "Sam Jackson",
      pro: "Software Engineer",
    },
    {
      comment:
        "Lunar Strategy has demonstrated keen expertise in this field through successful and satisfying deliverables. They communicate thoroughly and responsively, streamlining the workflow and immersing in the tasks. Furthermore, their meticulousness, methodological approach, and foresight are noteworthy.",
      pic: test,
      name: "Sam Jackson",
      pro: "Software Engineer",
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
