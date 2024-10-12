import React, { useState } from "react";
import styles from "./HistoricCard.module.css";
import Card from "../../../../../components/Card/Card";
import { GURU_INFORMATION } from "../../../../../constants/Characters/Guru";
import temple from "../../../../../assests/Guru/Historic/GuruHistoric.png";
import { BHUTAN } from "../../../../../constants/languages/Language";

const HistoricCard = ({ showIntro, onKurjeClick, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "25px";
  const fonstSize = language === BHUTAN ? "8px" : "11px";
  const KurjeFonstSize = language === BHUTAN ? "8.5px" : "15px";

  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="330px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #A06611"
            color="#A06611"
            backgroundColor="#FADFB6"
            title={GURU_INFORMATION[language].historicBackground.title}
            content={GURU_INFORMATION[language].historicBackground.content}
            language={language}
            showIntro={showIntro}
          />
          <div
            className={`${styles.GuruHistoricCard} ${styles.slideIn}`}
            onClick={onKurjeClick}
          >
            <div
              style={{
                marginTop: "18px",
                display: "flex",
                flexDirection: "column",
                fontSize: KurjeFonstSize,
              }}
            >
              {GURU_INFORMATION[language].kurjeCard.title}{" "}
              <span>{GURU_INFORMATION[language].kurjeCard.subTitle}</span>
            </div>
          </div>
          <div
            className={`${styles.GuruHistoricCardImg} ${styles.zoomIn}`}
            onClick={onKurjeClick}
          >
            <img src={temple} alt="temple" />
          </div>
        </>
      )}
    </div>
  );
};

export default HistoricCard;
