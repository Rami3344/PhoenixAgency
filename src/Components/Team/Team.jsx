import React from "react";
import Footer from "../Footer/Footer";
import AboutList from "./About/AboutList";
import "./Team.css";

function Team() {
  return (
    <div>
      <div className="head">
        <h2>PHOENIX SPECIALISTS</h2>
        <p>
          The Phoenix Strategy HQ is in Lisbon, Portugal. <br />
          Each member that joins our team is passionate about the Web3 space,
          whether they have invested in crypto, minted their own NFTs, or know
          that decentralization is the future.
          <br />
          We give you an external team of specialists equipped that know how to
          promote your crypto project and build your ideal community to get the
          results you desire.
        </p>
      </div>
      <div className="team">
        <div className="team-list">
          <AboutList />
        </div>
        <div className="join-team">
          <h1>JOIN THE TEAM</h1>
          <p>
            Join our growing team, learn about our exciting opportunities. Get a
            chance to work with some passionate, talented and creative
            individuals.
          </p>
          <a href="#">SEE OPEN POSITIONS</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Team;
