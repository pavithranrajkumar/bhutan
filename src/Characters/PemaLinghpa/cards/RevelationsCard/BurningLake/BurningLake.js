import React from "react";
import Card from "../../../../../components/Card/Card";
import { PEMA_LINGPA_INFORMATION } from "../../../../../constants/Characters/PremaLingpa";
import burningLakeBookImg from "../../../../../assests/PemaLingpa/Revelations/BurningLake.png";
import styles from "./BurningLake.module.css";
import { BHUTAN } from "../../../../../constants/languages/Language";

const BurningLake = ({ showIntro, language, onBurningLakeBookImgClick }) => {
  const titleFontSize = language === BHUTAN ? "11px" : "20px";
  const fonstSize = language === BHUTAN ? "6.5px" : "11.1px";
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="330px"
            height="305px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #001829"
            backgroundColor="#C9D7EE"
            color="#001829"
            fontWeight="800"
            header={PEMA_LINGPA_INFORMATION[language].burningLake.header}
            title={PEMA_LINGPA_INFORMATION[language].burningLake.title}
            content={PEMA_LINGPA_INFORMATION[language].burningLake.content}
            language={language}
            showIntro={showIntro}
          />
          <div
            className={styles.burningLakeBookImg}
            onClick={onBurningLakeBookImgClick}
          >
            <img src={burningLakeBookImg} alt="burningLakeBookImg" />
          </div>
        </>
      )}
    </div>
  );
};

export default BurningLake;
