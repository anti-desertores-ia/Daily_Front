import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import StreakView from "./streak/StreakView";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/contact" element={<h1>Contact</h1>} />
            <Route path="/streak" element={<StreakView/>} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
