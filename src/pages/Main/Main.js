import React from "react";
import "./main.css";
// import bottom from "../../assests/Bottom.png";
//  import bottomVideo from "../../assests/BgVideo.mp4";
import ZhabrungNgawangNamgyal from "../../Characters/ZhabrungNgawangNamgyal/ZhabrungNgawangNamgyal";
import Tibetan from "../../Characters/Tibetan/Tibetan";
import Guru from "../../Characters/Guru/Guru";
import Supine from "../../Characters/Supine/Supine";
import PemaLinghpa from "../../Characters/PemaLinghpa/PemaLinghpa";
import PemaLinghpaTop from "../../topImgCharacters/PemaLinghpa/PemaLinghpaTop";
import GuruTop from "../../topImgCharacters/Guru/GuruTop";
import ZhabrungTop from "../../topImgCharacters/ZhabrungNgawangNamgyal/ZhabrungTop";
import TibetanTop from "../../topImgCharacters/Tibetan/TibetanTop";
import SupineTop from "../../topImgCharacters/SupineTop/SupineTop";

const Main = () => {
  return (
    <div className="main-container">
      {/* <video autoPlay  loop controls={false} className="background-video">
        <source src={bottomVideo} type="video/mp4" />
      </video> */}

      <div className="image-container upside-down">
        {/* <img src={bottom} alt="top" className="n" /> */}
        <div className="PemaLinghpa">
          <PemaLinghpaTop />
        </div>
        <ZhabrungTop />
        <TibetanTop />
        <GuruTop />
        <SupineTop />
      </div>

      {/* Bottom Components */}
      <div className="image-container">
        {/* <img src={bottom} alt="Bottom" /> */}
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
