import React, { useState } from "react";
import styles from "./DriglamCard.module.css";
import Card from "../../../../components/Card/Card";
import { ZHABRUNG_INFORMATION } from "../../../../constants/Characters/ZhabrungNgawangNamgyal";
import { BHUTAN } from "../../../../constants/languages/Language";

const DriglamCard = ({ showIntro, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "20px";
  const fonstSize = language === BHUTAN ? "5px" : "11px";
  const headerFontSize = language === BHUTAN ? "8px" : "13px";
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="330px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #8F4110"
            backgroundColor="#FFDFC3"
            color="#6A1F11"
            title={ZHABRUNG_INFORMATION[language].driglamNamzhag.title}
            content={ZHABRUNG_INFORMATION[language].driglamNamzhag.content}
            language={language}
            showIntro={showIntro}
          />
          <div className={styles.DriglamNamzhagTopCard}>
            <div style={{ margin: "20px" }}>
              <p style={{ fontSize: headerFontSize }}>
                {ZHABRUNG_INFORMATION[language].driglamNamzhagStatement.first}
              </p>
              <p style={{ fontSize: headerFontSize }}>
                {ZHABRUNG_INFORMATION[language].driglamNamzhagStatement.second}
              </p>
              <p style={{ fontSize: headerFontSize }}>
                {ZHABRUNG_INFORMATION[language].driglamNamzhagStatement.third}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DriglamCard;
