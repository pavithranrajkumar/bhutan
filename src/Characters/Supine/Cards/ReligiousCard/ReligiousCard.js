import React from "react";
import styles from "./ReligiousCard.module.css";
import { SUPINE_INFORMATION } from "../../../../constants/Characters/Supine";
import Card from "../../../../components/Card/Card";
import Religious from "../../../../assests/Supine/Religious.png";

const ReligiousCard = ({
  showIntro,
  language,
  onHimalayanClick,
  onBhutanClick,
}) => {
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="220px"
            titleFontSize="20px"
            contentFontSize="12px"
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
              <div className={styles.HimalayanCardFirstText}>
                TEMPLES WITHIN
              </div>
              <div className={styles.HimalayanCardSecondtext}>
                HIMALAYAN LANDSCAPE
              </div>
            </div>
            <div className={styles.BhutanCard} onClick={onBhutanClick}>
              <div
                className={styles.HimalayanCardFirstText}
                style={{ marginTop: "10px" }}
              >
                TEMPLES IN
              </div>
              <div className={styles.HimalayanCardSecondtext}>BHUTAN</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ReligiousCard;
