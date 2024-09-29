import React, { useState } from "react";
import styles from "./Introuduciton.module.css";
import { GURU_INFORMATION } from "../../../../constants/Characters/Guru";
import Card from "../../../../components/Card/Card";

const Introduction = ({ showIntro, language }) => {
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="280px"
            titleFontSize="20px"
            contentFontSize="11.1px"
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
