import React from "react";
import Card from "../../../../../components/Card/Card";
import { TIBETAN_INFORMATION } from "../../../../../constants/Characters/Tibetan";
import DrukpaImg from "../../../../../assests/Tibetan/Drukpakagyu/DrukpaKagyu.png";
import styles from "./DrukpaKagyu.module.css";
import { BHUTAN } from "../../../../../constants/languages/Language";

const DrukpaKagyu = ({ showIntro, language, onDrugpaKagyuImgClick }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "20px";
  const fonstSize = language === BHUTAN ? "7px" : "11.5px";
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="300px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="1px solid #001829"
            backgroundColor="#C9D7EE"
            color="#001829"
            title={TIBETAN_INFORMATION[language].drukpaKagyu.title}
            content={TIBETAN_INFORMATION[language].drukpaKagyu.content}
            language={language}
            showIntro={showIntro}
          />
          <div
            className={styles.DrukpaKagyuImgCard}
            onClick={onDrugpaKagyuImgClick}
          >
            <img src={DrukpaImg} alt="popularImg" />
          </div>
        </>
      )}
    </div>
  );
};

export default DrukpaKagyu;
