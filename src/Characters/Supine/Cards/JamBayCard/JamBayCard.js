import React from "react";
import Card from "../../../../components/Card/Card";
import { SUPINE_INFORMATION } from "../../../../constants/Characters/Supine";
import styles from "./JamBayCard.module.css";
import jambayImg from "../../../../assests/Supine/JambayCard/JambayCard.png";

const JamBayCard = ({ showIntro, language, onJamBayCardImageClick }) => {
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="300px"
            titleFontSize="20px"
            contentFontSize="11.1px"
            borderBottom="0.5px solid #555835"
            backgroundColor="#CECE9B"
            color="#555835"
            title={SUPINE_INFORMATION[language].jambay.title}
            content={SUPINE_INFORMATION[language].jambay.content}
            language={language}
            showIntro={showIntro}
          />
          <div
            className={styles.JamBayCardImg}
            onClick={onJamBayCardImageClick}
          >
            <img src={jambayImg} alt="jambayimg" />
          </div>
        </>
      )}
    </div>
  );
};

export default JamBayCard;
