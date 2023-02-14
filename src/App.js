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
import Privacy from "./Components/Footer/NavFooter/Privacy/Privacy";
import Responsibility from "./Components/Footer/NavFooter/Responsibility/Responsibility";
import Terms from "./Components/Footer/NavFooter/Terms/Terms";
function App() {
  return (
    <div className="App">
      <Router>
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
