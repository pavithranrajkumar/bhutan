import React, { useState } from "react";
import styles from "./DriglamCard.module.css";
import Card from "../../../../components/Card/Card";
import { ZHABRUNG_INFORMATION } from "../../../../constants/Characters/ZhabrungNgawangNamgyal";
import { BHUTAN } from "../../../../constants/languages/Language";

const DriglamCard = ({ showIntro, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "20px";
  const fonstSize = language === BHUTAN ? "5.19px" : "11px";
  const headerFontSize = language === BHUTAN ? "0.95rem" : "13px";
  const contentLineHeight = language === BHUTAN ? "1" : "";

  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="330px"
            height="230px"

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
            <div className={styles.DriglamNamzhagTopCard}>
              <p style={{ fontSize: headerFontSize,lineHeight: contentLineHeight,  }}>
                {ZHABRUNG_INFORMATION[language].driglamNamzhagStatement.first}
              </p>
              <p style={{ fontSize: headerFontSize,lineHeight: contentLineHeight,  }}>
                {ZHABRUNG_INFORMATION[language].driglamNamzhagStatement.second}
              </p>
              <p style={{ fontSize: headerFontSize,lineHeight: contentLineHeight,  }}>
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
