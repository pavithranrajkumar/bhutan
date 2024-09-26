import React from "react";
import "./main.css";
import bottom from "../../assests/Bottom.svg";
import top from "../../assests/Top.svg";
import PemaLingpa from "../../Characters/PemaLingpa/PemaLingpa";
import ZhabrungNgawangNamgyal from "../../Characters/ZhabrungNgawangNamgyal/ZhabrungNgawangNamgyal";
import Tibetan from "../../Characters/Tibetan/Tibetan";
import Guru from "../../Characters/Guru/Guru";
import Supine from "../../Characters/Supine/Supine";

const Main = () => {
  return (
    <div className="main-container">
      <div className="image-container">
        <img src={top} alt="Top Image" />
      </div>
      <div className="main-content"></div>
      <div className="image-container bottom-image-container">
        <img src={bottom} alt="Bottom Image" />
        <PemaLingpa />
        <ZhabrungNgawangNamgyal />
        <Tibetan />
        <Guru />
        <Supine />
      </div>
    </div>
  );
};

export default Main;
