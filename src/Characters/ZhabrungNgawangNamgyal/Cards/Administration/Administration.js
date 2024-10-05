import React, { useState } from "react";
import { ZHABRUNG_INFORMATION } from "../../../../constants/Characters/ZhabrungNgawangNamgyal";
import styles from "./Administration.module.css";
import Card from "../../../../components/Card/Card";
import BhutanGovLogo from "../../../../assests/Zhabrung/Cards/Historic/BhutanGovtLogo.png";
import { BHUTAN } from "../../../../constants/languages/Language";

const Administration = ({ showIntro, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "20px";
  const fonstSize = language === BHUTAN ? "7px" : "11px";

  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="280px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #8F4110"
            backgroundColor="#FFDFC3"
            color="#6A1F11"
            title={ZHABRUNG_INFORMATION[language].administration.title}
            content={ZHABRUNG_INFORMATION[language].administration.content}
            language={language}
            showIntro={showIntro}
          />
          <div className={styles.BhutanGovLogo}>
            <img src={BhutanGovLogo} alt="BhutanGovLogo" />
          </div>
        </>
      )}
    </div>
  );
};

export default Administration;
