import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main/Main";
import NaringDragBook from "./Characters/PemaLingpa/BookAnimation/NaringDragBook/NaringDragBook";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/animation" element={<NaringDragBook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
