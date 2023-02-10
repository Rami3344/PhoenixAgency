import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Proposal from "./Components/Proposal/Proposal";
import NavBar from "./Components/NavBar/NavBar";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route path="/Proposal" element={<Proposal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
