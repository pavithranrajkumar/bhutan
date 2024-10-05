import React from "react";
import { PEMA_LINGPA_INFORMATION } from "../../../../constants/Characters/PremaLingpa";
import Card from "../../../../components/Card/Card";
import styles from "./RevelationsCard.module.css";
import NaringDragBookImg from "../../../../assests/PemaLingpa/Revelations/NaringDrag.png";
import burningLakeBookImg from "../../../../assests/PemaLingpa/Revelations/BurningLake.png";
import { BHUTAN } from "../../../../constants/languages/Language";

const RevelationsCard = ({
  showIntro,
  language,
  onNaringDragClick,
  onBurningLakeClick,
}) => {
  const titleFontSize = language === BHUTAN ? "12px" : "30px";
  const fonstSize = language === BHUTAN ? "10px" : "13.2px";

  const headerFontSize = language === BHUTAN ? "10px" : "12px";
  const subHeaderFontSize = language === BHUTAN ? "12px" : "20px";

  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="350px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
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
              <div
                className={styles.title}
                style={{ fontSize: headerFontSize }}
              >
                {PEMA_LINGPA_INFORMATION[language].naringDrag.header}
              </div>
              <div
                className={styles.header}
                style={{ fontSize: subHeaderFontSize }}
              >
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
              <div
                className={styles.burningLakeTitle}
                style={{ fontSize: headerFontSize }}
              >
                {PEMA_LINGPA_INFORMATION[language].burningLake.header}
              </div>
              <div
                className={styles.burningLakeHeader}
                style={{ fontSize: subHeaderFontSize }}
              >
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
