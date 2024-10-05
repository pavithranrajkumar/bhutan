import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main/Main";
import Puzzle from "./pages/Puzzle/Puzzle";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/puzzle" element={<Puzzle />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
