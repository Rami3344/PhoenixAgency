import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import CollabList from "../Home/Collab/CollabList";
import CardsList from "./Cards/CardsList";
import Carousel from "react-bootstrap/Carousel";
import case1 from "./case-1.webp";
import case2 from "./case-2.webp";
import case3 from "./case-4.webp";
import case4 from "./case-7.webp";
import "./Solutions.css";

function Solutions() {
  return (
    <div>
      <div className="head">
        <h2>YOUR IDEAS + OUR EXPERTISE = SUCCESS</h2>
        <p>
          As a Web3 marketing agency with a focus on customer satisfaction,
          Phoenix Strategy has tailor made the service offering to include
          services that serve to build and grow your Web3 project. <br />
          Through a tailored Web3 marketing strategy that uses a mixture of Web3
          influencers, paid advertising, Web3 social media management, Web3 PR,
          and Web3 community management, the Phoenix Strategy team drives growth
          for your Web3 project. <br />
          Consistency in reporting and communication allows clients and partners
          to stay in the know and always aware of how their project is
          performing in relation to the goals and objectives they are trying to
          achieve.
        </p>
        <Link to="/Proposal">
          <button>GET A PROPOSAL</button>
        </Link>
        <div className="cardSol">
          <CardsList />
        </div>
      </div>
      <div className="story">
        <div className="story-list">
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
      <div className="defi">
        <Carousel>
          <Carousel.Item>
            <img src={case1} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={case2} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={case3} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={case4} />
          </Carousel.Item>
        </Carousel>
        <h1>YOUR DEFI & WEB3 GROWTH PARTNER</h1>
        <p>
          We excel at building authentic communities by curating bespoke Web3
          and crypto activations for growth-ready companies. Applying our
          industry-leading expertise gained by collaborating with 100+ Web3
          clients and launching more than 1,000 campaigns since 2019, we know
          what actually works.
        </p>
        <tr className="num">
          <td>100+</td>
          <td>500+</td>
          <td>20+</td>
        </tr>
        <tr className="content">
          <td>Web3 Clients</td>
          <td>Growth Strategies</td>
          <td>Employees</td>
        </tr>
        <Link to="/Cases">
          <a href="#">VIEW ALL</a>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
export default Solutions;
