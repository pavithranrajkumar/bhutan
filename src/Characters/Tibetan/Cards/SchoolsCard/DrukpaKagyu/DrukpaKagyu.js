import React from "react";
import Card from "../../../../../components/Card/Card";
import { TIBETAN_INFORMATION } from "../../../../../constants/Characters/Tibetan";
import DrukpaImg from "../../../../../assests/Tibetan/Drukpakagyu/DrukpaKagyu.png";
import styles from "./DrukpaKagyu.module.css";

const DrukpaKagyu = ({ showIntro, language }) => {
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="300px"
            titleFontSize="20px"
            contentFontSize="11.5px"
            borderBottom="1px solid #001829"
            backgroundColor="#C9D7EE"
            color="#001829"
            title={TIBETAN_INFORMATION[language].drukpaKagyu.title}
            content={TIBETAN_INFORMATION[language].drukpaKagyu.content}
            language={language}
            showIntro={showIntro}
          />
          <div className={styles.DrukpaKagyuImgCard}>
            <img src={DrukpaImg} alt="popularImg" />
          </div>
        </>
      )}
    </div>
  );
};

export default DrukpaKagyu;
