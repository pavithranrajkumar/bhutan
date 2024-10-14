import React, { useEffect, useState } from "react";
import Card from "../../../../components/Card/Card";
import { TIBETAN_INFORMATION } from "../../../../constants/Characters/Tibetan";
import styles from "./SchoolsCard.module.css";
import { BHUTAN } from "../../../../constants/languages/Language";

const SchoolsCard = ({
  showIntro,
  language,
  onDrukpaKagyuClick,
  onPopularSchoolsClick,
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (showIntro) {
      setAnimate(true);
    }
  }, [showIntro]);
  const titleFontSize = language === BHUTAN ? "12px" : "25px";
  const fonstSize = language === BHUTAN ? "7px" : "10.5px";
  const headerFontSize = language === BHUTAN ? "1.2rem" : "18px";
  const contentLineHeight = language === BHUTAN ? "1" : "";

  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="350px"
            height="230px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #8F4110"
            backgroundColor="#FFDFC3"
            color="#6A1F11"
            title={TIBETAN_INFORMATION[language].bhddhistSchools.title}
            content={TIBETAN_INFORMATION[language].bhddhistSchools.content}
            language={language}
            showIntro={showIntro}
          />
          <div className={styles.SchoolsTopCards}>
            <div
              className={`${styles.PopularCards} ${
                animate ? styles.fadeIn : ""
              }`}
              onClick={onPopularSchoolsClick}
            >
              <div style={{ marginTop: "15px", fontSize: headerFontSize, lineHeight: contentLineHeight, }}>
                {TIBETAN_INFORMATION[language].popularSchools.title}
              </div>
            </div>
            <div
              className={`${styles.DrukpaCards} ${
                animate ? styles.fadeIn : ""
              }`}
              onClick={onDrukpaKagyuClick}
            >
              <div style={{ marginTop: "15px", fontSize: headerFontSize, lineHeight: contentLineHeight, }}>
                {TIBETAN_INFORMATION[language].drukpaKagyu.title}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SchoolsCard;
