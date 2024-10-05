import React, { useState } from "react";
import styles from "./Palace.module.css";
import Card from "../../../../../components/Card/Card";
import { GURU_INFORMATION } from "../../../../../constants/Characters/Guru";
import PalaceImg from "../../../../../assests/Guru/Palace/PalaceImg.png";
import { BHUTAN } from "../../../../../constants/languages/Language";

const Palace = ({ showIntro, onPalaceImgClick, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "20px";
  const fonstSize = language === BHUTAN ? "7px" : "11.5px";
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="300px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #2B455D"
            color="#2B455D"
            backgroundColor="#C9D7EE"
            title={GURU_INFORMATION[language].palace.title}
            content={GURU_INFORMATION[language].palace.content}
            language={language}
            showIntro={showIntro}
          />
          <div className={styles.PalaceImg} onClick={onPalaceImgClick}>
            <img src={PalaceImg} alt="temple" />
          </div>
        </>
      )}
    </div>
  );
};

export default Palace;
