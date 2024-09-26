import React, { useState } from "react";
import { ZHABRUNG_INFORMATION } from "../../../../constants/Characters/ZhabrungNgawangNamgyal";
import Card from "../../../../components/Card/Card";
import styles from "./ReligiousCard.module.css";

const ReligiousCard = ({ showIntro, onSealClick }) => {
  const [language, setLanguage] = useState("english");

  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="320px"
            titleFontSize="15px"
            contentFontSize="11px"
            borderBottom="0.5px solid #8F4110"
            backgroundColor="#FFDFC3"
            color="#6A1F11"
            title={ZHABRUNG_INFORMATION[language].religiousInflunce.title}
            content={ZHABRUNG_INFORMATION[language].religiousInflunce.content}
            language={language}
            showIntro={showIntro}
          />
          <div className={styles.sealOfZhabdrungCard} onClick={onSealClick}>
            <div style={{ marginTop: "18px" }}>SEAL OF ZHABRUNG</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ReligiousCard;
