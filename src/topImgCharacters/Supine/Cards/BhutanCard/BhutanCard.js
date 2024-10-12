import React from "react";
import { SUPINE_INFORMATION } from "../../../../constants/Characters/Supine";
import Card from "../../../../components/Card/Card";
import styles from "./BhutanCard.module.css";
import Kyichu from "../../.../../../../assests/Supine/BhutanCard/Kyichu.png";
import Jambay from "../../.../../../../assests/Supine/BhutanCard/Jambay.png";
import { BHUTAN } from "../../../../constants/languages/Language";

const BhutanCard = ({ showIntro, language, onJamBayClick, onKyichuClick }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "20px";
  const fonstSize = language === BHUTAN ? "8.74px" : "12px";

  const headerFontSize = language === BHUTAN ? "15px" : "25px";
  const subHeaderFontSize = language === BHUTAN ? "15px" : "25px";
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="220px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #193145"
            backgroundColor="#C9D7EE"
            color="#193145"
            title={SUPINE_INFORMATION[language].bhutan.title}
            content={SUPINE_INFORMATION[language].bhutan.content}
            language={language}
            showIntro={showIntro}
          />
          <div className={styles.ButanCardsContainer}>
            <div className={styles.JamBayCard} onClick={onJamBayClick}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "15px",
                  fontSize: headerFontSize,
                }}
              >
                {SUPINE_INFORMATION[language].jambayName.header}{" "}
                <span style={{ fontSize: subHeaderFontSize }}>
                  {SUPINE_INFORMATION[language].jambayName.title}
                </span>
              </div>
              <div className={styles.JamBayImg}>
                <img src={Jambay} alt="Jambay" />
              </div>
            </div>
            <div className={styles.KyichuCard} onClick={onKyichuClick}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "15px",
                  fontSize: headerFontSize,
                }}
              >
                {SUPINE_INFORMATION[language].kyichuName.header}{" "}
                <span style={{ fontSize: subHeaderFontSize }}>
                  {SUPINE_INFORMATION[language].kyichuName.title}
                </span>
              </div>
              <div className={styles.KyichuImg}>
                <img src={Kyichu} alt="Kyichu" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BhutanCard;
