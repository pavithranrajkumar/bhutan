import React, { useState } from "react";
import styles from "./HistoricCard.module.css";
import Card from "../../../../../components/Card/Card";
import { GURU_INFORMATION } from "../../../../../constants/Characters/Guru";
import temple from "../../../../../assests/Guru/Historic/GuruHistoric.png";

const HistoricCard = ({ showIntro, onKurjeClick }) => {
  const [language, setLanguage] = useState("english");

  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="330px"
            titleFontSize="25px"
            contentFontSize="11px"
            borderBottom="0.5px solid #A06611"
            color="#A06611"
            backgroundColor="#FADFB6"
            title={GURU_INFORMATION[language].historicBackground.title}
            content={GURU_INFORMATION[language].historicBackground.content}
            language={language}
            showIntro={showIntro}
          />
          <div className={styles.GuruHistoricCard} onClick={onKurjeClick}>
            <div
              style={{
                marginTop: "18px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              KURJE <span>LHAKHANG</span>
            </div>
          </div>
          <div className={styles.GuruHistoricCardImg}>
            <img src={temple} alt="temple" />
          </div>
        </>
      )}
    </div>
  );
};

export default HistoricCard;
