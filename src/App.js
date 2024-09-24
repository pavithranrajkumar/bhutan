import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main/Main";
import FlipBook from "./pages/Trial/Trial";
import Trial from "./pages/Trial/Trial";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/animation" element={<FlipBook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
