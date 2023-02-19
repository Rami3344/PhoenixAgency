import React from "react";
import Footer from "../Footer/Footer";
import "./Proposal.css";
function Proposal() {
  return (
    <div>
      <form action="#">
        <table>
          <tr>
            <td>
              <span>CONTACT US</span>
              <button className="book-meeting">BOOK MEETING</button>
            </td>
          </tr>
          <input className="inpt" placeholder="Name" type="text" />

          <input className="inpt" placeholder="Email" type="email" />

          <input className="inpt" placeholder="Website" type="text" />

          <tr>
            <h2>Business / Product Type</h2>
          </tr>
          <tr className="rad">
            <ul>
              <li>
                <input name="a" type="radio" />
                NFT
              </li>
              <li>
                <input name="a" type="radio" />
                DeFi
              </li>
              <li>
                <input name="a" type="radio" />
                ICO / Token Sale
              </li>
            </ul>
            <ul>
              <li>
                <input name="a" type="radio" />
                P2E
              </li>
              <li>
                <input name="a" type="radio" />
                Exchange / DEX
              </li>
              <li>
                <input name="a" type="radio" />
                Something else
              </li>
            </ul>
          </tr>
          <tr>
            <h2>How soon do you want to work with our agency ?</h2>
          </tr>
          <tr className="rad-two">
            <ul>
              <li>
                <input type="radio" name="b" /> In less than a week
              </li>
              <li>
                <input type="radio" name="b" /> 1 week - 1 month
              </li>
            </ul>
            <ul>
              <li>
                <input type="radio" name="b" /> In 1-3 months
              </li>
              <li>
                <input type="radio" name="b" /> In 3 months or more from now
              </li>
            </ul>
          </tr>
          <tr>
            <h2>Monthly Media Budget</h2>
            <select>
              <option value="0">Select one...</option>
              <option value="0">$1-$5000</option>
              <option value="0">$5001-$10000</option>
              <option value="0">$10001-$30000</option>
              <option value="0">$30001-$50000</option>
              <option value="0">$50001-$200000</option>
              <option value="0">$200001+</option>
            </select>
          </tr>
          <tr>
            <h2>Message</h2>
            <textarea name="" id="" cols="85" rows="3"></textarea>
          </tr>
          <tr>
            <input
              type="checkbox"
              style={{ marginRight: "5px", cursor: "pointer" }}
            />
            By submitting, I agree to Phoenix Strategy's
            <a href="#">Privacy Policy</a>
          </tr>
          <tr>
            <input className="submit-btn" type="submit" value="SUBMIT" />
          </tr>
        </table>
      </form>
      <Footer />
    </div>
  );
}

export default Proposal;
