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
  const headerFontSize = language === BHUTAN ? "1.3rem" : "0.5625rem";
  const subHeaderFontSize = language === BHUTAN ? "1rem" : "0.9375rem";
  const contentLineHeight = language === BHUTAN ? "1" : "";

  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="210px"
            height="240px"
            borderBottom="0.5px solid #3A3C25"
            color="#3A3C25"
            backgroundColor="#CECE9B"
            title={SUPINE_INFORMATION[language].religious.title}
            content={SUPINE_INFORMATION[language].religious.content}
            language={language}
            showIntro={showIntro}
          />

          <div className={styles.ReligiousImg}>
            <motion.img
              src={Religious}
              alt=""
              initial={{ opacity: 0 }} // Initial state
              animate={{ opacity: 1 }} // Animation state
              transition={{ duration: 3, delay: 3 }}
              exit={{ opacity: 0, transition: { duration: 2 } }}
            />
          </div>

          <div className={styles.ReligiousCard}>
            <motion.div
              className={styles.HimalayanCard}
              onClick={onHimalayanClick}
              initial={{ opacity: 0 }} // Initial opacity for title
              animate={{ opacity: 1 }} // Final opacity for title
              transition={{ duration: 0.5, delay: 4 }} // Fade duration for title
              exit={{ opacity: 0, transition: { duration: 2.8 } }}
            >
              <motion.div
                initial={{ opacity: 0 }} // Initial opacity for title
                animate={{ opacity: 1 }} // Final opacity for title
                transition={{ duration: 0.5, delay: 4.6 }} // Fade duration for title
                exit={{ opacity: 0, transition: { duration: 2.8 } }}
              >
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
                </div>{" "}
              </motion.div>
            </motion.div>
            <motion.div
              className={styles.BhutanCard}
              onClick={onBhutanClick}
              initial={{ opacity: 0 }} // Initial opacity for title
              animate={{ opacity: 1 }} // Final opacity for title
              transition={{ duration: 0.5, delay: 4.5 }} // Fade duration for title
              exit={{ opacity: 0, transition: { duration: 2.8 } }}
            >
              <motion.div
                initial={{ opacity: 0 }} // Initial opacity for title
                animate={{ opacity: 1 }} // Final opacity for title
                transition={{ duration: 0.5, delay: 4.8 }} // Fade duration for title
                exit={{ opacity: 0, transition: { duration: 2.8 } }}
              >
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
                </div>{" "}
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
};

export default ReligiousCard;
