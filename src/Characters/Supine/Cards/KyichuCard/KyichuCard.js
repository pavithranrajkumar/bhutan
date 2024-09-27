import React from "react";

import styles from "./KyichuCard.module.css";
import kyichuImg from "../../../../assests/Supine/JambayCard/KyichuCard.png";
import { SUPINE_INFORMATION } from "../../../../constants/Characters/Supine";
import Card from "../../../../components/Card/Card";

const KyichuCard = ({ showIntro, language, onKyichuCardImageClick }) => {
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="250px"
            titleFontSize="20px"
            contentFontSize="11.1px"
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
