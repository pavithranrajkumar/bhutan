import React from "react";
import pemaLingpa from "../../assests/PemaLingpa.png";
import "./PemaLingpa.css";

const PemaLingpa = () => {
  return (
    <div className="overlay-image-container">
      <div className="year-container">
        <div>1450</div>
        <div>-1521</div>
      </div>
      <div>
        <img src={pemaLingpa} alt="Overlay Image" className="overlay-img" />
      </div>

      <div className="card">
        <div>PEMA LINGPA</div>
      </div>
    </div>
  );
};

export default PemaLingpa;
