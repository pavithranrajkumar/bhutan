import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import PemaLingpa from "./pages/PemaLingpa/PemaLingpa";
import Main from "./pages/Main/Main";
import AnimatedCharacter from "./Animation/MyAnimation";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route
            path="/"
            element={<AnimatedCharacter characterName="character5" />}
          /> */}
          <Route path="/" element={<Main />} />

          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
