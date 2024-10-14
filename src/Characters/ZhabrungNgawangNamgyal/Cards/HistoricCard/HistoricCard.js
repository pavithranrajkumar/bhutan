import React, { useState } from "react";
import { ZHABRUNG_INFORMATION } from "../../../../constants/Characters/ZhabrungNgawangNamgyal";
import BigCard from "../../../../components/BigCard/BigCard";
import histoiric from "../../../../assests/Zhabrung/Cards/Historic/Historic.png";
import styles from "./HistoricCard.module.css";
import { BHUTAN } from "../../../../constants/languages/Language";

const HistoricCard = ({ showIntro, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "20px";
  const fonstSize = language === BHUTAN ? "8px" : "11.3px";
  console.log("Show Intro:", showIntro);
  return (
    <div>
      {showIntro && (
        <>
          <BigCard
            width="240px"
            height="313px"
            titleFontSize={titleFontSize}
            cardFontSize={fonstSize}
            borderBottom="1px solid #6A1F11"
            backgroundColor="#FFDFC3"
            color="#6A1F11"
            title={ZHABRUNG_INFORMATION[language].historicBackground.title}
            content={ZHABRUNG_INFORMATION[language].historicBackground.content}
            subContent={
              ZHABRUNG_INFORMATION[language].historicBackground.subContent
            }
            language={language}
            showIntro={showIntro}
          />
          <div className={styles.ZhabrungHistoryImage}>
            <img src={histoiric} alt="history " />
          </div>
        </>
      )}
    </div>
  );
};

export default HistoricCard;
