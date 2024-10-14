import React, { useState } from "react";
import styles from "./Introduction.module.css";
import Card from "../../../../components/Card/Card";
import { TIBETAN_INFORMATION } from "../../../../constants/Characters/Tibetan";
import { BHUTAN } from "../../../../constants/languages/Language";

const Introduction = ({ showIntro, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "20px";
  const fonstSize = language === BHUTAN ? "7px" : "11.5px";
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="350px"
            height="280px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid white"
            title={TIBETAN_INFORMATION[language].introduction.title}
            content={TIBETAN_INFORMATION[language].introduction.content}
            language={language}
            showIntro={showIntro}
          />
        </>
      )}
    </div>
  );
};

export default Introduction;
