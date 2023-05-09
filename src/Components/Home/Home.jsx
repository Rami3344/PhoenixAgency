import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import case1 from "./case-1.webp";
import case2 from "./case-2.webp";
import case3 from "./case-4.webp";
import case4 from "./case-7.webp";
import logo1 from "./logo1.webp";
import logo2 from "./logo2.webp";
import logo3 from "./logo3.png";
import logo4 from "./logo4.webp";
import logo5 from "./logo5.webp";
import logo6 from "./logo6.png";
import logo from "./Phoenix-white.png";
import Footer from "../Footer/Footer";
import Carousel from "react-bootstrap/Carousel";
import CardsList from "../Solutions/Cards/CardsList";
import CollabList from "./Collab/CollabList";
import AboutList from "../Team/About/AboutList";
function Home() {
  return (
    <div>
      <div className="disc">
        <div className="gif">
          <img src={logo} />
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
            <img src={logo1} />
          </li>
          <li>
            <img src={logo2} />
          </li>
          <li>
            <img src={logo3} />
          </li>
          <li>
            <img src={logo4} />
          </li>
          <li>
            <img src={logo5} />
          </li>
          <li>
            <img src={logo6} />
          </li>
        </ul>
      </div>
      <div className="cases">
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
        <h1>OUR CASES</h1>
        <p>
          We’re proud to share some of our current and past cases, with some of
          the web3 industry leaders.
        </p>
        <tr className="num">
          <td>100+</td>
          <td>1M+</td>
          <td>20+</td>
        </tr>
        <tr className="content">
          <td>Web3 Clients</td>
          <td>Followers gained</td>
          <td>Employees</td>
        </tr>
        <Link to="/Cases">
          <a href="#">VIEW ALL</a>
        </Link>
      </div>
      <div className="solutions">
        <div className="card-home">
          <CardsList />
        </div>
        <h1>SOLUTIONS</h1>
        <p>
          We offer a full 360 marketing solution with everything from
          go-to-market strategy to authority building and web3 community growth
          initiatives. <br /> Take a look at our catalog of solutions.
        </p>
        <Link to="/Solutions">
          <a href="#">VIEW ALL</a>
        </Link>
      </div>
      <div className="testimonials">
        <div className="collab-home">
          <CollabList />
        </div>
        <h1>TESTIMONIALS</h1>
        <p>
          We are proud to say we have collaborated with more than 100 web3
          projects, here is what some of our collaborators have to say about us.{" "}
        </p>
      </div>
      <div className="about">
        <div className="about-list">
          <AboutList />
        </div>
        <h1>ABOUT US</h1>
        <p>
          Established in May 2019, Phoenix Strategy has quickly risen to the
          forefront of the Blockchain marketing industry by establishing
          critical relationships with crypto industry influencers, role players,
          and thought leaders.
        </p>
        <p>
          Our industry-leading experts in traditional and Web3 marketing offer
          SEO, Google Ads, social media management, influencer marketing, paid
          ad campaigns, blog creation, content creation, community management,
          and public relations services to our ever-growing client base.
        </p>
      </div>
      <div className="notif">
        <h2>STAY IN THE LOOP</h2>
        <p>
          Stay up to date with everything web3, web3 marketing, and team Phoenix
          Strategy.
        </p>
        <h1>ENTER EMAIL ADDRESS</h1>
        <input type="email" />
        <button>SUBSCRIBE</button>
      </div>
      <div className="latest">
        <h1>LATEST BLOG ARTICLES</h1>
        <p>
          Stay up to date with everything web3, web3 marketing, and team Phoenix
          Strategy.
        </p>
        {/*articles*/}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
