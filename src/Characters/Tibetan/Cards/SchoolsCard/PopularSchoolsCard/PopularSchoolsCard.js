import React, { useEffect, useState } from "react";
import { TIBETAN_INFORMATION } from "../../../../../constants/Characters/Tibetan";
import BigCard from "../../../../../components/BigCard/BigCard";
import styles from "./PopularSchoolsCard.module.css";
import popularImg from "../../../../../assests/Tibetan/PopularSchools/PopularSchools.png";
import { BHUTAN } from "../../../../../constants/languages/Language";

const PopularSchoolsCard = ({
  showIntro,
  language,
  onPopularSchoolsImgClick,
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (showIntro) {
      setAnimate(true);
    }
  }, [showIntro]);

  const titleFontSize = language === BHUTAN ? "12px" : "25px";
  const fonstSize = language === BHUTAN ? "7px" : "10.5px";
  return (
    <div>
      {showIntro && (
        <>
          <BigCard
            width="350px"
            height="290px"

            titleFontSize={titleFontSize}
            cardFontSize={fonstSize}
            borderBottom="1px solid #001829"
            backgroundColor="#C9D7EE"
            color="#001829"
            title={TIBETAN_INFORMATION[language].popularSchools.title}
            content={TIBETAN_INFORMATION[language].popularSchools.content}
            subContent={TIBETAN_INFORMATION[language].popularSchools.subContent}
            language={language}
            showIntro={showIntro}
          />
          <div
            className={`${styles.PopularSchoolsImgCard} ${
              animate ? styles.fadeIn : ""
            }`}
            onClick={onPopularSchoolsImgClick}
          >
            <img src={popularImg} alt="popularImg" />
          </div>
        </>
      )}
    </div>
  );
};

export default PopularSchoolsCard;
