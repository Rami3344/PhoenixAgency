import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Industries.css";
import chain from "./chain.svg";
import web3 from "./web3.svg";
import defi from "./defi.svg";
import CollabList from "../Home/Collab/CollabList";
function Industries() {
  return (
    <div>
      <div className="head">
        <h2>MARKETING FOR WEB3 INDUSTRIES</h2>
        <p>
          We work exclusively with crypto, NFT, GameFi, and DeFi companies, and
          focus on growth-ready companies that will gain maximum value from our
          services.
        </p>
        <Link to="/Proposal">
          <button>GET A PROPOSAL</button>
        </Link>
      </div>
      <div className="container">
        <div className="cont">
          <h2>Digital Collectibles, Web3 & NFT Project Marketing</h2>
          <p>
            Amplify your Crypto or NFT project and dominate your niche with
            sustainable and targeted community growth.
          </p>
          <img src={web3} />
        </div>
        <div className="cont">
          <h2>DeFi & Crypto Token Marketing</h2>
          <p>
            Leverage your project into a decentralized future with innovative,
            Web3 marketing strategies and our team's expertise.
          </p>
          <img src={chain} />
        </div>
        <div className="cont">
          <h2>NFT Game & GameFi Marketing</h2>
          <p>
            Enjoy the traction and visibility you deserve with nuanced marketing
            campaigns and relevant network connections in the GameFi space.
          </p>
          <img src={defi} />
        </div>
      </div>
      <div className="get-prop">
        <h2>GET A PROPOSAL</h2>
        <p>Book a discovery call and explore our wide range of services.</p>
        <Link to="/Proposal">
          <a href="#">CONTACT US TODAY</a>
        </Link>
      </div>
      <div className="indust-collab">
        <div className="collab-home">
          <CollabList />
        </div>
        <h1>BECOME ONE OF OUR SUCCESS STORIES</h1>
        <p>
          Become one of our success stories and be a leader paving the way
          forward in the blockchain sphere. We are proud to say we have
          collaborated with more than 100 growth-driven companies in the crypto
          and Web3 sector, using our industry expertise and top-level
          connections to reach your targeted audience.
        </p>
      </div>
      <Footer />
    </div>
  );
}
export default Industries;
