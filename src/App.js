import "./App.css";
import Home from "./Components/Home/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Proposal from "./Components/Proposal/Proposal";
import NavBar from "./Components/NavBar/NavBar";
import Cases from "./Components/Cases/Cases";
import Solutions from "./Components/Solutions/Solutions";
import Industries from "./Components/Industries/Industries";
import Team from "./Components/Team/Team";
import Blog from "./Components/Blog/Blog";
import Privacy from "./Components/Footer/NavFooter/Company/Privacy/Privacy";
import Responsibility from "./Components/Footer/NavFooter/Company/Responsibility/Responsibility";
import Terms from "./Components/Footer/NavFooter/Company/Terms/Terms";
import ScrollToTop from "./ScrollToTop";
import BlockChain from "./Components/Services/BlockChain";
import Web3 from "./Components/Services/Web3";
import SocMed from "./Components/Services/SocMed";
import CryptoPads from "./Components/Services/CryptoPads";
import CryptoInf from "./Components/Services/CryptoInf";
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Proposal" element={<Proposal />} />
            <Route path="/Cases" element={<Cases />} />
            <Route path="/Solutions" element={<Solutions />} />
            <Route path="/Industries" element={<Industries />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Privacy" element={<Privacy />} />
            <Route path="/Terms" element={<Terms />} />
            <Route path="/Responsibility" element={<Responsibility />} />
            <Route path="/BlockChain" element={<BlockChain />} />
            <Route path="/CryptoInf" element={<CryptoInf />} />
            <Route path="/CryptoPads" element={<CryptoPads />} />
            <Route path="/SocMed" element={<SocMed />} />
            <Route path="/Web3" element={<Web3 />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
