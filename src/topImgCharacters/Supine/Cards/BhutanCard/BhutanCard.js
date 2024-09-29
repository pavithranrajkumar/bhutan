import React from "react";
import { SUPINE_INFORMATION } from "../../../../constants/Characters/Supine";
import Card from "../../../../components/Card/Card";
import styles from "./BhutanCard.module.css";
import Kyichu from "../../.../../../../assests/Supine/BhutanCard/Kyichu.png";
import Jambay from "../../.../../../../assests/Supine/BhutanCard/Jambay.png";

const BhutanCard = ({ showIntro, language, onJamBayClick, onKyichuClick }) => {
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="220px"
            titleFontSize="20px"
            contentFontSize="12px"
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
                }}
              >
                JAMBAY <span>LHAKHANG</span>
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
                }}
              >
                KYICHU <span>LHAKHANG</span>
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
