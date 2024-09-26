import React, { useState } from "react";
import { ZHABRUNG_INFORMATION } from "../../../../constants/Characters/ZhabrungNgawangNamgyal";
import BigCard from "../../../../components/BigCard/BigCard";
import histoiric from "../../../../assests/Zhabrung/Cards/Historic/Historic.png";
import styles from "./HistoricCard.module.css";

const HistoricCard = ({ showIntro }) => {
  const [language, setLanguage] = useState("english");

  console.log("Show Intro:", showIntro);
  return (
    <div>
      {showIntro && (
        <>
          <BigCard
            width="240px"
            titleFontSize="20px"
            cardFontSize="11.3px"
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
