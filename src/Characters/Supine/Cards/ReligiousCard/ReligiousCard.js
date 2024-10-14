import React from "react";
import styles from "./ReligiousCard.module.css";
import { SUPINE_INFORMATION } from "../../../../constants/Characters/Supine";
import Card from "../../../../components/Card/Card";
import Religious from "../../../../assests/Supine/Religious.png";
import { BHUTAN } from "../../../../constants/languages/Language";
import { motion } from "framer-motion";

const ReligiousCard = ({
  showIntro,
  language,
  onHimalayanClick,
  onBhutanClick,
}) => {
  const headerFontSize = language === BHUTAN ? "0.875rem" : "0.5625rem";
  const subHeaderFontSize = language === BHUTAN ? "0.625rem" : "0.9375rem";
  const contentLineHeight = language === BHUTAN ? "1.5" : "";

  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="220px"
            height="240px"
            borderBottom="0.5px solid #3A3C25"
            color="#3A3C25"
            backgroundColor="#CECE9B"
            title={SUPINE_INFORMATION[language].religious.title}
            content={SUPINE_INFORMATION[language].religious.content}
            language={language}
            showIntro={showIntro}
          />
          <motion.div
            className={styles.ReligiousImg}
            initial={{ opacity: 0, scale: 0.8 }} // Initial state
            animate={{ opacity: 1, scale: 1 }} // Animate to this state
            transition={{ duration: 1.5 }} // Transition settings
          >
            <div className={styles.ReligiousImg}>
              <img src={Religious} alt="religious" />
            </div>
          </motion.div>

          <motion.div
            className={styles.ReligiousCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className={styles.ReligiousCard}>
              <div className={styles.HimalayanCard} onClick={onHimalayanClick}>
                <div
                  className={styles.HimalayanCardFirstText}
                  style={{
                    fontSize: headerFontSize,
                    lineHeight: contentLineHeight,
                  }}
                >
                  {SUPINE_INFORMATION[language].himalayanCard.header}
                </div>
                <div
                  className={styles.HimalayanCardSecondtext}
                  style={{
                    fontSize: subHeaderFontSize,
                    lineHeight: contentLineHeight,
                  }}
                >
                  {SUPINE_INFORMATION[language].himalayanCard.title}
                </div>
              </div>
              <div className={styles.BhutanCard} onClick={onBhutanClick}>
                <div
                  className={styles.HimalayanCardFirstText}
                  style={{
                    fontSize: headerFontSize,
                    lineHeight: contentLineHeight,
                  }}
                >
                  {SUPINE_INFORMATION[language].bhutanCard.header}
                </div>
                <div
                  className={styles.HimalayanCardSecondtext}
                  style={{
                    fontSize: subHeaderFontSize,
                    lineHeight: contentLineHeight,
                  }}
                >
                  {SUPINE_INFORMATION[language].bhutanCard.title}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ReligiousCard;
