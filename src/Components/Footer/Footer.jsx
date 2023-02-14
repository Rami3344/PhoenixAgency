import React from "react";
import logo from "./Phoenix-black.png";
import "./Footer.css";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="line-one">
        <img src={logo} alt="logo" />
        <p>Phoenix Holding LDA</p>
        <p>
          Rua Nova de Sao Pedro,
          <br />
          No. 54, 2nd Floor,
          <br />
          Office D 9000-048 <br />
          Funchal, Portugal. <br />
        </p>
        <p>
          VAT: PT516 253 999 <br />
          info@lunarstrategy.com
        </p>
        <MDBBtn size="s" floating style={{ backgroundColor: "black" }} href="#">
          <MDBIcon fab icon="twitter" />
        </MDBBtn>
        <MDBBtn
          size="s"
          floating
          style={{ backgroundColor: "black", marginLeft: "5px" }}
          href="#"
        >
          <MDBIcon fab icon="instagram" />
        </MDBBtn>
        <MDBBtn
          size="s"
          floating
          style={{ backgroundColor: "black", marginLeft: "5px" }}
          href="#"
        >
          <MDBIcon fab icon="discord" />
        </MDBBtn>
        <MDBBtn
          size="s"
          floating
          style={{ backgroundColor: "black", marginLeft: "5px" }}
          href="#"
        >
          <MDBIcon fab icon="telegram" />
        </MDBBtn>
      </div>
      <div className="line-two">
        <h2>COMPANY</h2>
        <ul>
          <li>
            <a href="#">Phoenix Blog</a>
          </li>
          <li>
            <a href="#">Phoenix Academy</a>
          </li>
          <li>
            <a href="#">Our Specialists</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Guides</a>
          </li>
          <li>
            <a href="#">Press</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <Link to="/Privacy">
            <a href="#">Privacy & Policy</a>
            </Link>
          </li>
          <li>
            <Link to="/Terms">
            <a href="#">Terms of Payment</a>
            </Link>
          </li>
          <li>
            <Link to="/Responsibility">
            <a href="#">Responsibility Disclaimer</a>
            </Link>
          </li>
          <li>
            <a href="#">Google Partner</a>
          </li>
        </ul>
      </div>
      <div className="line-three">
        <h2>SERVICES</h2>
        <ul>
          <li>
            <a href="#">Blockchain PR</a>
          </li>
          <li>
            <a href="#">Web3 Community Management</a>
          </li>
          <li>
            <a href="#">Crypto Influencer Marketing</a>
          </li>
          <li>
            <a href="#">Crypto Paid Ads</a>
          </li>
          <li>
            <a href="#">Web3 Social Media</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
