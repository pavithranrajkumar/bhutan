import React from "react";

import styles from "./KyichuCard.module.css";
import kyichuImg from "../../../../assests/Supine/JambayCard/KyichuCard.png";
import { SUPINE_INFORMATION } from "../../../../constants/Characters/Supine";
import Card from "../../../../components/Card/Card";
import { BHUTAN } from "../../../../constants/languages/Language";

const KyichuCard = ({ showIntro, language, onKyichuCardImageClick }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "20px";
  const fonstSize = language === BHUTAN ? "7px" : "11.1px";
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="250px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #555835"
            backgroundColor="#CECE9B"
            color="#555835"
            title={SUPINE_INFORMATION[language].kyichu.title}
            content={SUPINE_INFORMATION[language].kyichu.content}
            language={language}
            showIntro={showIntro}
          />
          <div
            className={styles.KyichuCardImg}
            onClick={onKyichuCardImageClick}
          >
            <img src={kyichuImg} alt="jambayimg" />
          </div>
        </>
      )}
    </div>
  );
};

export default KyichuCard;
