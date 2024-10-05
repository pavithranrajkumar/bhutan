import React, { useState } from "react";
import BigCard from "../../../../components/BigCard/BigCard";
import { ZHABRUNG_INFORMATION } from "../../../../constants/Characters/ZhabrungNgawangNamgyal";
import styles from "./PoliticalCard.module.css";
import { BHUTAN } from "../../../../constants/languages/Language";

const PoliticalCard = ({ showIntro, onTravelerClick, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "15px";
  const fonstSize = language === BHUTAN ? "7.5px" : "12px";
  const headerFontSize = language === BHUTAN ? "10px" : "20px";
  return (
    <div>
      {showIntro && (
        <>
          <BigCard
            width="325px"
            titleFontSize={titleFontSize}
            cardFontSize={fonstSize}
            borderBottom="1px solid #6A1F11"
            backgroundColor="#FFDFC3"
            color="#6A1F11"
            title={ZHABRUNG_INFORMATION[language].politicalInfluence.title}
            content={ZHABRUNG_INFORMATION[language].politicalInfluence.content}
            subContent={
              ZHABRUNG_INFORMATION[language].politicalInfluence.subContent
            }
            language={language}
            showIntro={showIntro}
          />
          <div className={styles.TravellersCard} onClick={onTravelerClick}>
            <div style={{ marginTop: "18px", fontSize: headerFontSize }}>
              {ZHABRUNG_INFORMATION[language].foreignTravellers.title}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PoliticalCard;
