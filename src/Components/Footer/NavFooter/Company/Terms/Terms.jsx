import React from "react";
import Footer from "../../../Footer";
import "./Terms.css";
import "../responsive.css";
function Terms() {
  return (
    <div>
      <div className="cnt">
        <h1>TERMS OF PAYMENT</h1>
        <p>
          Lunar Holding Lda., is a legal entity that works and renders services
          of marketing and consulting services of digital marketing to
          crypto-related projects and other legal or individual entities. <br />
          Lunar Holding Lda accepts cryptocurrencies as a payment method (USDT,
          BUSD, USDC, ETH, BNB or BTC) this after filling out a know your
          customer form (KYC). This process usually only takes a few minutes.
          <br />
          Lunar Holding Lda also accepts normal bank transfers in euro, GBP or
          USD.
          <br />
          Lunar Holding Lda does not issue refunds for purchased services.
          <br />
          Due to the nature of the crypto industry all payments are done upfront
          before the work start.
        </p>
      </div>
      <Footer />
    </div>
  );
}
export default Terms;
