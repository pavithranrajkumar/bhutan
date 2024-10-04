import React from "react";
import styles from "./ReligiousCard.module.css";
import { SUPINE_INFORMATION } from "../../../../constants/Characters/Supine";
import Card from "../../../../components/Card/Card";
import Religious from "../../../../assests/Supine/Religious.png";
import { BHUTAN } from "../../../../constants/languages/Language";

const ReligiousCard = ({
  showIntro,
  language,
  onHimalayanClick,
  onBhutanClick,
}) => {
  const fonstSize = language === BHUTAN ? "7px" : "12px";
  const titleFontSize = language === BHUTAN ? "12px" : "20px";

  const headerFontSize = language === BHUTAN ? "8px" : "9px";
  const subHeaderFontSize = language === BHUTAN ? "6px" : "15px";

  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="220px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #3A3C25"
            color="#3A3C25"
            backgroundColor="#CECE9B"
            title={SUPINE_INFORMATION[language].religious.title}
            content={SUPINE_INFORMATION[language].religious.content}
            language={language}
            showIntro={showIntro}
          />
          <div className={styles.ReligiousImg}>
            <img src={Religious} alt="religious" />
          </div>
          <div className={styles.ReligiousCard}>
            <div className={styles.HimalayanCard} onClick={onHimalayanClick}>
              <div
                className={styles.HimalayanCardFirstText}
                style={{ fontSize: headerFontSize }}
              >
                {SUPINE_INFORMATION[language].himalayanCard.header}
              </div>
              <div
                className={styles.HimalayanCardSecondtext}
                style={{ fontSize: subHeaderFontSize }}
              >
                {SUPINE_INFORMATION[language].himalayanCard.title}
              </div>
            </div>
            <div className={styles.BhutanCard} onClick={onBhutanClick}>
              <div
                className={styles.HimalayanCardFirstText}
                style={{ marginTop: "10px", fontSize: headerFontSize }}
              >
                {SUPINE_INFORMATION[language].bhutanCard.header}
              </div>
              <div
                className={styles.HimalayanCardSecondtext}
                style={{ fontSize: subHeaderFontSize }}
              >
                {SUPINE_INFORMATION[language].bhutanCard.title}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ReligiousCard;
