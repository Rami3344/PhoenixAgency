import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import gif from "./giphy.gif";
import logo from "./logo.png";
import Footer from "../Footer/Footer";
function Home() {
  return (
    <div>
      <div className="disc">
        <div className="gif">
          <img src={gif} />
        </div>
        <h1>
          A Web3 Native <br /> Marketing Agency
        </h1>
        <p>
          We are a web3 native marketing team helping projects with everything
          from go-to-market strategy to authority building and web3 growth
          initiatives.
        </p>
        <Link to="/Proposal">
          <button>GET A PROPOSAL</button>
        </Link>
        <ul className="partner-logo">
          <li>
            <img src={logo} />
          </li>
          <li>
            <img src={logo} />
          </li>
          <li>
            <img src={logo} />
          </li>
          <li>
            <img src={logo} />
          </li>
          <li>
            <img src={logo} />
          </li>
          <li>
            <img src={logo} />
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
