import React, { useEffect, useState } from "react";
import Card from "../../../../components/Card/Card";
import { TIBETAN_INFORMATION } from "../../../../constants/Characters/Tibetan";
import styles from "./SchoolsCard.module.css";
import { BHUTAN } from "../../../../constants/languages/Language";
import { motion } from "framer-motion";

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
            height="250px"
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
          <motion.div
            className={styles.PopularCards}
            onClick={onPopularSchoolsClick}
            initial={{ opacity: 0 }} // Initial opacity for title
            animate={{ opacity: 1 }} // Final opacity for title
            transition={{ duration: 0.5, delay: 4 }} // Fade duration for title
            exit={{ opacity: 0, transition: { duration: 2.8 } }}
          >
            <motion.div
              style={{
                marginTop: "15px",
                fontSize: headerFontSize,
                lineHeight: contentLineHeight,
              }}
              initial={{ opacity: 0 }} // Initial opacity for title
              animate={{ opacity: 1 }} // Final opacity for title
              transition={{ duration: 0.5, delay: 4.6 }} // Fade duration for title
              exit={{ opacity: 0, transition: { duration: 2.8 } }}
            >
              {TIBETAN_INFORMATION[language].popularSchools.title}
            </motion.div>
          </motion.div>
          <motion.div
            className={styles.DrukpaCards}
            onClick={onDrukpaKagyuClick}
            initial={{ opacity: 0 }} // Initial opacity for title
            animate={{ opacity: 1 }} // Final opacity for title
            transition={{ duration: 0.5, delay: 4.5 }} // Fade duration for title
            exit={{ opacity: 0, transition: { duration: 2.8 } }}
          >
            <motion.div
               style={{
                marginTop: "15px",
                fontSize: headerFontSize,
                lineHeight: contentLineHeight,
              }}
              initial={{ opacity: 0 }} // Initial opacity for title
              animate={{ opacity: 1 }} // Final opacity for title
              transition={{ duration: 0.5, delay: 4.8 }} // Fade duration for title
              exit={{ opacity: 0, transition: { duration: 2.8 } }}
            >
                {TIBETAN_INFORMATION[language].drukpaKagyu.title}
                </motion.div>
          </motion.div>
          </div>

        
        </>
      )}
    </div>
  );
};

export default SchoolsCard;
