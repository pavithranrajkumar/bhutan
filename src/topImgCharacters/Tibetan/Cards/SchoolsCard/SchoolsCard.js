import React from "react";
import Card from "../../../../components/Card/Card";
import { TIBETAN_INFORMATION } from "../../../../constants/Characters/Tibetan";
import styles from "./SchoolsCard.module.css";

const SchoolsCard = ({
  showIntro,
  language,
  onDrukpaKagyuClick,
  onPopularSchoolsClick,
}) => {
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="350px"
            titleFontSize="25px"
            contentFontSize="10.5px"
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
              className={styles.PopularCards}
              onClick={onPopularSchoolsClick}
            >
              <div style={{ marginTop: "15px" }}>POPULAR SCHOOLS</div>
            </div>
            <div className={styles.DrukpaCards} onClick={onDrukpaKagyuClick}>
              <div style={{ marginTop: "15px" }}>DRUKPA KAGYU</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SchoolsCard;
