import React from "react";
import Card from "../../../../../components/Card/Card";
import { PEMA_LINGPA_INFORMATION } from "../../../../../constants/Characters/PremaLingpa";
import burningLakeBookImg from "../../../../../assests/PemaLingpa/Revelations/BurningLake.png";
import styles from "./BurningLake.module.css";

const BurningLake = ({ showIntro, language, onBurningLakeBookImgClick }) => {
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="330px"
            titleFontSize="20px"
            contentFontSize="11.1px"
            borderBottom="0.5px solid white"
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
