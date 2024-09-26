import React, { useState } from "react";
import styles from "./Introduction.module.css";
import Card from "../../../../components/Card/Card";
import { TIBETAN_INFORMATION } from "../../../../constants/Characters/Tibetan";

const Introduction = ({ showIntro }) => {
  const [language, setLanguage] = useState("english");

  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="280px"
            titleFontSize="20px"
            contentFontSize="11px"
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
