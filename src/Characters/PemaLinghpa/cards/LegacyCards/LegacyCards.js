import React from "react";
import { PEMA_LINGPA_INFORMATION } from "../../../../constants/Characters/PremaLingpa";
import Card from "../../../../components/Card/Card";
import styles from "./LegacyCard.module.css";
import MonasteriesCardImg from "../../../../assests/PemaLingpa/Legacy/MonasteriesCard.png";
import PelingDanceCardImg from "../../../../assests/PemaLingpa/Legacy/PelingDanceCard.png";
import { BHUTAN } from "../../../../constants/languages/Language";

const LegacyCards = ({
  showIntro,
  language,
  onMonasteriesCardClick,
  onPelingDanceCardClick,
}) => {
  const titleFontSize = language === BHUTAN ? "12px" : "30px";
  const fonstSize = language === BHUTAN ? "9px" : "13.2px";
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="300px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #6A1F11"
            backgroundColor="#FFD9BC"
            color="#6A1F11"
            title={PEMA_LINGPA_INFORMATION[language].legacy.title}
            content={PEMA_LINGPA_INFORMATION[language].legacy.content}
            language={language}
            showIntro={showIntro}
          />
          <div>
            <div
              className={styles.MonasteriesCard}
              onClick={onMonasteriesCardClick}
            >
              <div className={styles.MonasteriesCardImg}>
                <img src={MonasteriesCardImg} alt="MonasteriesCardImg" />
              </div>
              <div className={styles.MonasteriesCardTitle}>
                {PEMA_LINGPA_INFORMATION[language].monastriesAndTemples.header}
              </div>
              <div className={styles.MonasteriesCardContent}>
                {PEMA_LINGPA_INFORMATION[language].monastriesAndTemples.title}
              </div>
            </div>
            <div
              className={styles.PelingDanceCard}
              onClick={onPelingDanceCardClick}
            >
              <div className={styles.PelingDanceCardImg}>
                <img src={PelingDanceCardImg} alt="PelingDanceCardImg" />
              </div>

              <div className={styles.PelingDanceCardTitle}>
                {PEMA_LINGPA_INFORMATION[language].pelingdance.header}
              </div>
              <div className={styles.PelingDanceCardContent}>
                {PEMA_LINGPA_INFORMATION[language].pelingdance.title}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LegacyCards;
