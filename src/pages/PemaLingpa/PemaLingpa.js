import React, { useState } from "react";
import pemaLingpa from "../../assests/PemaLingpa.png";
import "./PemaLingpa.css";

const PemaLingpa = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [showYearContainer, setShowYearContainer] = useState(true);
  const [cardText, setCardText] = useState("PEMA LINGPA");

  const handleCardClick = () => {
    setIsCardOpen(!isCardOpen);
    setShowYearContainer(!showYearContainer);
    setCardText(isCardOpen ? "PEMA LINGPA" : "PEMA LINGPA ");
  };

  return (
    <div className="overlay-image-container">
      {showYearContainer && (
        <div className="year-container">
          <div>1450</div>
          <div>-1521</div>
        </div>
      )}
      <div>
        <img src={pemaLingpa} alt="Overlay Image" className="overlay-img" />
      </div>

      <div
        className={`card ${isCardOpen ? "rotate-card" : ""}`}
        style={{ width: "150%" }}
        onClick={handleCardClick}
      >
        <p>{cardText}</p>
      </div>

      <div className={`additional-card ${isCardOpen ? "slide-down" : ""}`}>
        <p
          className={`additional-text ${isCardOpen ? "fade-in slide-up" : ""}`}
        >
          Additional Information About Pema Lingpa
        </p>
      </div>
    </div>
  );
};

export default PemaLingpa;
