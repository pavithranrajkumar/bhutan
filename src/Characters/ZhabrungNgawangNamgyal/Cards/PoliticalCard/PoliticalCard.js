import React, { useState } from "react";
import BigCard from "../../../../components/BigCard/BigCard";
import { ZHABRUNG_INFORMATION } from "../../../../constants/Characters/ZhabrungNgawangNamgyal";
import styles from "./PoliticalCard.module.css";

const PoliticalCard = ({ showIntro, onTravelerClick }) => {
  const [language, setLanguage] = useState("english");

  return (
    <div>
      {showIntro && (
        <>
          <BigCard
            width="325px"
            titleFontSize="15px"
            cardFontSize="12px"
            borderBottom="1px solid #6A1F11"
            backgroundColor="#FFDFC3"
            color="#6A1F11"
            title={ZHABRUNG_INFORMATION[language].politicalInfluence.title}
            content={ZHABRUNG_INFORMATION[language].politicalInfluence.content}
            subContent={
              ZHABRUNG_INFORMATION[language].politicalInfluence.subContent
            }
            language={language}
            showIntro={showIntro}
          />
          <div className={styles.TravellersCard} onClick={onTravelerClick}>
            <div style={{ marginTop: "18px" }}>
              EARLIEST FOREIGN TRAVELLERS IN BHUTAN
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PoliticalCard;
