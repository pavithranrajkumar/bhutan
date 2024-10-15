import React, { useState } from "react";
import styles from "./Introuduciton.module.css";
import { GURU_INFORMATION } from "../../../../constants/Characters/Guru";
import Card from "../../../../components/Card/Card";
import { BHUTAN } from "../../../../constants/languages/Language";

const Introduction = ({ showIntro, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "20px";
  const fonstSize = language === BHUTAN ? "7px" : "11.1px";
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="250px"
            height="385px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid white"
            title={GURU_INFORMATION[language].introduction.title}
            content={GURU_INFORMATION[language].introduction.content}
            language={language}
            showIntro={showIntro}
          />
        </>
      )}
    </div>
  );
};

export default Introduction;
