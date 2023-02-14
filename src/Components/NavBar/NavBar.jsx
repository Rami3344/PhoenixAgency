import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";
import logo from "./Phoenix-white.png";
const NavBar = () => {
  return (
    <div className="nav-body">
      <div className="logo">
        <Link to="/Home">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="nav-list">
        <ul className="nav-list-ul">
          <li className="nav-list-li">
            <Link to="/Cases">
              <a href="#">CASES</a>
            </Link>
          </li>

          <li className="nav-list-li">
            <Link to="/Solutions">
              <a href="#">SOLUTIONS</a>
            </Link>
          </li>

          <li className="nav-list-li">
            <Link to="/Industries">
              <a href="#">INDUSTRIES</a>
            </Link>
          </li>
          <li className="nav-list-li">
            <Link to="/Team">
              <a href="#">TEAM PHOENIX</a>
            </Link>
          </li>
          <li className="nav-list-li">
            <Link to="/Blog">
              <a href="#">BLOG</a>
            </Link>
          </li>
          <li className="nav-list-li">
            <Nav>
              <NavDropdown title="COMMUNITY" id="nav-dropdown">
                <ul className="drop-nav">
                  <li>
                    <a href="#">TWITTER</a>
                  </li>
                  <li>
                    <a href="#">INSTAGRAM</a>
                  </li>
                  <li>
                    <a href="#">DISCORD</a>
                  </li>
                  <li>
                    <a href="#">TELEGRAM</a>
                  </li>
                </ul>
              </NavDropdown>
            </Nav>
          </li>
        </ul>
        <div className="book-meet">
          <Link to="/Proposal">
            <button>BOOK MEETING</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
