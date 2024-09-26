import React, { useState } from "react";
import styles from "./DriglamCard.module.css";
import Card from "../../../../components/Card/Card";
import { ZHABRUNG_INFORMATION } from "../../../../constants/Characters/ZhabrungNgawangNamgyal";

const DriglamCard = ({ showIntro }) => {
  const [language, setLanguage] = useState("english");

  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="330px"
            titleFontSize="20px"
            contentFontSize="11px"
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
              <p>
                Physical Discipline includes what to wear and how to behave
                while eating, walking, sitting and how to show respect to
                seniors and elders.
              </p>
              <p>
                Verbal Discipline includes how to maintain decorum while
                speaking.
              </p>
              <p>
                Mental Discipline influences the mindset one should have to love
                the country, King, and people besides respect for the rule of
                law.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DriglamCard;
