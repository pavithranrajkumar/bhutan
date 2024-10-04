import React from "react";
import Card from "../../../../../components/Card/Card";
import { PEMA_LINGPA_INFORMATION } from "../../../../../constants/Characters/PremaLingpa";
import styles from "./PelingDance.module.css";
import pelingdanceImg from "../../../../../assests/PemaLingpa/Legacy/Peling/VideoBlock.png";

const PelingDance = ({ showIntro, language, onPelingdanceImgClick }) => {
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="280px"
            titleFontSize="20px"
            contentFontSize="11.1px"
            borderBottom="0.5px solid #001829"
            backgroundColor="#C9D7EE"
            color="#001829"
            title={PEMA_LINGPA_INFORMATION[language].pelingdance.title}
            content={PEMA_LINGPA_INFORMATION[language].pelingdance.content}
            language={language}
            showIntro={showIntro}
          />
          <div
            className={styles.pelingdanceImg}
            onClick={onPelingdanceImgClick}
          >
            <img src={pelingdanceImg} alt="monastriesAndTemplesImg" />
          </div>
        </>
      )}
    </div>
  );
};

export default PelingDance;
