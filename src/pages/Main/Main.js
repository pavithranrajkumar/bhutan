import React from "react";
import "./main.css";
import bottom from "../../assests/Bottom.png";
// import bottomVideo from "../../assests/Videos/BgVideo/TextVideo.mp4";
import ZhabrungNgawangNamgyal from "../../Characters/ZhabrungNgawangNamgyal/ZhabrungNgawangNamgyal";
import Tibetan from "../../Characters/Tibetan/Tibetan";
import Guru from "../../Characters/Guru/Guru";
import Supine from "../../Characters/Supine/Supine";
import PemaLinghpa from "../../Characters/PemaLinghpa/PemaLinghpa";
import ZhabrungNgawangNamgyalTwo from "../../topImgCharacters/ZhabrungNgawangNamgyal2/ZhabrungNgawangNamgyal2";
import PemaLinghpa2 from "../../topImgCharacters/PemaLinghpa/PemaLinghpa";
import TibetanTwo from "../../topImgCharacters/Tibetan/Tibetan";
import Guru2 from "../../topImgCharacters/Guru/Guru";
import SupineTwo from "../../topImgCharacters/Supine/Supine";
import MainComponent from "../MainComponent/MainComponent";

const Main = () => {
  return (
    <div className="main-container">
       {/* <video autoPlay loop  className="background-video">
        <source src={bottomVideo} type="video/mp4" />
      </video> */}
      <div className="image-container bottom-image-container upside-down">
        <img src={bottom} alt="top" className="n" />
        <PemaLinghpa2 />
        <ZhabrungNgawangNamgyalTwo />
        <TibetanTwo />
        <Guru2 />
        <SupineTwo />
      </div>
      <div className="main-content">
        <div className="main-content-container">
          <MainComponent />
        </div>
      </div>
      <div className="image-container bottom-image-container ">
        <img src={bottom} alt="Bottom" />
        <PemaLinghpa />
        <ZhabrungNgawangNamgyal />
        <Tibetan />
        <Guru />
        <Supine />
      </div>
    </div>
  );
};

export default Main;
