import React from "react";
import "./home.css";
import bottom from "../../assests/Bottom.svg";
import top from "../../assests/Top.svg";
import PemaLingpa from "../PemaLingpa/PemaLingpa";

const Home = () => {
  return (
    <div className="main-container">
      <div>
        <img src={top} alt="Top Image" className="top-img" />
      </div>
      <div className="main-content"></div>
      <div>
        <img src={bottom} alt="Bottom Image" className="bottom-img" />
      </div>
    </div>
  );
};

export default Home;
