import React from "react";
import { PEMA_LINGPA_INFORMATION } from "../../../../constants/Characters/PremaLingpa";
import Card from "../../../../components/Card/Card";
import styles from "./RevelationsCard.module.css";
import NaringDragBookImg from "../../../../assests/PemaLingpa/Revelations/NaringDrag.png";
import burningLakeBookImg from "../../../../assests/PemaLingpa/Revelations/BurningLake.png";

const RevelationsCard = ({
  showIntro,
  language,
  onNaringDragClick,
  onBurningLakeClick,
}) => {
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="350px"
            titleFontSize="30px"
            contentFontSize="13.2px"
            borderBottom="0.5px solid #6A1F11"
            backgroundColor="#FFD9BC"
            color="#6A1F11"
            title={PEMA_LINGPA_INFORMATION[language].revelations.title}
            content={PEMA_LINGPA_INFORMATION[language].revelations.content}
            language={language}
            showIntro={showIntro}
          />
          <div style={{ gap: "10px" }}>
            <div className={styles.revelationsCard} onClick={onNaringDragClick}>
              <div className={styles.title}>
                {PEMA_LINGPA_INFORMATION[language].naringDrag.header}
              </div>
              <div className={styles.header}>
                {PEMA_LINGPA_INFORMATION[language].naringDrag.title}
              </div>
              <div className={styles.NaringDragBookImg}>
                <img src={NaringDragBookImg} alt="NaringDragBookImg" />
              </div>
            </div>
            <div
              className={styles.burningLakeCard}
              onClick={onBurningLakeClick}
            >
              <div className={styles.burningLakeTitle}>
                {PEMA_LINGPA_INFORMATION[language].burningLake.header}
              </div>
              <div className={styles.burningLakeHeader}>
                {PEMA_LINGPA_INFORMATION[language].burningLake.title}
              </div>
              <div className={styles.burningLakeBookImg}>
                <img src={burningLakeBookImg} alt="burningLakeBookImg" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RevelationsCard;
