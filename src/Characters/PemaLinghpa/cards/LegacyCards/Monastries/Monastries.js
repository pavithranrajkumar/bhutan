import React from "react";
import Card from "../../../../../components/Card/Card";
import { PEMA_LINGPA_INFORMATION } from "../../../../../constants/Characters/PremaLingpa";
import monastriesAndTemplesImg from "../../../../../assests/PemaLingpa/Legacy/Monastries/MonasteriesImg.png";
import styles from "./Monastries.module.css";
import { BHUTAN } from "../../../../../constants/languages/Language";

const Monastries = ({ showIntro, language, onMonasteriesImgClick }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "20px";
  const fonstSize = language === BHUTAN ? "8.5px" : "11.1px";
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="280px"
            height="280px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #001829"
            backgroundColor="#C9D7EE"
            color="#001829"
            title={PEMA_LINGPA_INFORMATION[language].monastriesAndTemples.title}
            content={
              PEMA_LINGPA_INFORMATION[language].monastriesAndTemples.content
            }
            language={language}
            showIntro={showIntro}
          />
          <div
            className={styles.MonasteriesImg}
            onClick={onMonasteriesImgClick}
          >
            <img src={monastriesAndTemplesImg} alt="monastriesAndTemplesImg" />
          </div>
        </>
      )}
    </div>
  );
};

export default Monastries;
