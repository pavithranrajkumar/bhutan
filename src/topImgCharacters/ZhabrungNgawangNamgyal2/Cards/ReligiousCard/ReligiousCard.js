import React, { useState } from "react";
import { ZHABRUNG_INFORMATION } from "../../../../constants/Characters/ZhabrungNgawangNamgyal";
import Card from "../../../../components/Card/Card";
import styles from "./ReligiousCard.module.css";
import { BHUTAN } from "../../../../constants/languages/Language";

const ReligiousCard = ({ showIntro, onSealClick, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "15px";
  const fonstSize = language === BHUTAN ? "6.2px" : "11px";
  const cardFonstSize = language === BHUTAN ? "11.5px" : "23px";
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="320px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            // borderBottom="1px solid #8F4110"
            backgroundColor="#FFDFC3"
            color="#6A1F11"
            title={ZHABRUNG_INFORMATION[language].religiousInflunce.title}
            content={ZHABRUNG_INFORMATION[language].religiousInflunce.content}
            language={language}
            showIntro={showIntro}
          />
          <div className={styles.sealOfZhabdrungCard} onClick={onSealClick}>
            <div style={{ fontSize: cardFonstSize }}>
              {ZHABRUNG_INFORMATION[language].sealOfZhabdrung.title}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ReligiousCard;
