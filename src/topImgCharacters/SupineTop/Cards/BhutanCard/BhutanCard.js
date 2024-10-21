import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SUPINE_INFORMATION } from "../../../../constants/Characters/Supine";
import Card from "../../../../components/Card/Card";
import styles from "./BhutanCard.module.css";
import Kyichu from "../../.../../../../assests/Supine/BhutanCard/Kyichu.png";
import Jambay from "../../.../../../../assests/Supine/BhutanCard/Jambay.png";
import { BHUTAN } from "../../../../constants/languages/Language";

const BhutanCard = ({ showIntro, language, onJamBayClick, onKyichuClick }) => {
  const titleFontSize = language === BHUTAN ? "16px" : "20px";
  const fonstSize = language === BHUTAN ? "8.74px" : "12px";

  const headerFontSize = language === BHUTAN ? "1.3rem" : "1.5625rem";
  const subHeaderFontSize = language === BHUTAN ? "1.3rem" : "1.5625rem";
  const contentLineHeight = language === BHUTAN ? "1" : "";

  const [lineAnimationComplete, setLineAnimationComplete] = useState(false);
  const [cardAnimationStart, setCardAnimationStart] = useState(false);
  const [titleAnimationStart, setTitleAnimationStart] = useState(false);
  const [contentAnimationStart, setContentAnimationStart] = useState(false);

  useEffect(() => {
    if (showIntro) {
      const timer = setTimeout(() => {
        setLineAnimationComplete(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  useEffect(() => {
    if (lineAnimationComplete) {
      const timer = setTimeout(() => {
        setCardAnimationStart(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [lineAnimationComplete]);

  useEffect(() => {
    if (cardAnimationStart) {
      const timer = setTimeout(() => {
        setTitleAnimationStart(true);
      }, 200); // Delay for title animation
      return () => clearTimeout(timer);
    }
  }, [cardAnimationStart]);

  useEffect(() => {
    if (titleAnimationStart) {
      const timer = setTimeout(() => {
        setContentAnimationStart(true);
      }, 100); // Delay for content animation
      return () => clearTimeout(timer);
    }
  }, [titleAnimationStart]);
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="210px"
            height="276px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #193145"
            backgroundColor="#C9D7EE"
            color="#193145"
            title={SUPINE_INFORMATION[language].bhutan.title}
            content={SUPINE_INFORMATION[language].bhutan.content}
            language={language}
            showIntro={showIntro}
          />
          <div className={styles.ButanCardsContainer}>
            <div className={styles.cardWrapper}>
              <motion.div
                className={styles.VerticalLine}
                initial={{ height: 0 }}
                animate={{
                  height: lineAnimationComplete ? "100%" : 0,
                }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                exit={{ opacity: 0, transition: { duration: 2 } }}
              />
              <motion.div
                className={styles.JamBayCard}
                onClick={onJamBayClick}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{
                  scaleX: cardAnimationStart ? 1 : 0,
                  opacity: cardAnimationStart ? 1 : 0,
                  originX: 1,
                }}
                exit={{ opacity: 0, transition: { duration: 2 } }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                  delay: cardAnimationStart ? 3.5 : 0,
                }}
              >
                <motion.div
                  className={styles.header}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: titleAnimationStart ? 1 : 0,
                  }}
                  exit={{ opacity: 0, transition: { duration: 2 } }}
                  transition={{
                    duration: 2.5,
                    ease: "easeInOut",
                    delay: cardAnimationStart ? 4.5 : 0,
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "15px",
                    fontSize: headerFontSize,
                  }}
                >
                  {SUPINE_INFORMATION[language].jambayName.header}{" "}
                  <span
                    style={{
                      fontSize: subHeaderFontSize,
                      lineHeight: contentLineHeight,
                    }}
                  >
                    {SUPINE_INFORMATION[language].jambayName.title}
                  </span>{" "}
                </motion.div>
              </motion.div>

              <motion.div
                className={styles.JamBayImg}
                onClick={onJamBayClick}
                initial={{ x: -50, opacity: 0 }} // Start slightly off the left
                animate={{
                  x: cardAnimationStart ? 0 : -50, // Only animate when cardAnimationStart is true
                  opacity: cardAnimationStart ? 1 : 0,
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                  delay: cardAnimationStart ? 5 : 0,
                }}
                exit={{ opacity: 0, transition: { duration: 2 } }}
              >
                <img src={Jambay} alt="NaringDragBookImg" />
              </motion.div>
            </div>

            <div className={styles.cardWrapper}>
              <motion.div
                className={styles.KyichuCard}
                onClick={onKyichuClick}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{
                  scaleX: cardAnimationStart ? 1 : 0,
                  opacity: cardAnimationStart ? 1 : 0,
                  originX: 0,
                }}
                exit={{ opacity: 0, transition: { duration: 2 } }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                  delay: cardAnimationStart ? 3.5 : 0,
                }}
              >
                <motion.div
                  className={styles.burningLakeHeader}
                  initial={{ opacity: 0 }} // Start off invisible
                  animate={{
                    opacity: titleAnimationStart ? 1 : 0,
                  }}
                  exit={{ opacity: 0, transition: { duration: 2 } }}
                  transition={{
                    duration: 2.5,
                    ease: "easeInOut",
                    delay: cardAnimationStart ? 4.5 : 0, // Sync with title animation
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "15px",
                    fontSize: headerFontSize,
                  }}
                >
                  {SUPINE_INFORMATION[language].kyichuName.header}{" "}
                  <span
                    style={{
                      fontSize: subHeaderFontSize,
                      lineHeight: contentLineHeight,
                    }}
                  >
                    {SUPINE_INFORMATION[language].kyichuName.title}
                  </span>{" "}
                </motion.div>
              </motion.div>
              <motion.div
                className={styles.KyichuImg}
                onClick={onKyichuClick}
                initial={{ x: 50, opacity: 0 }} // Start slightly off the right
                animate={{
                  x: cardAnimationStart ? 0 : 50, // Only animate when cardAnimationStart is true
                  opacity: cardAnimationStart ? 1 : 0,
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                  delay: cardAnimationStart ? 5 : 0,
                }}
                exit={{ opacity: 0, transition: { duration: 2 } }}
              >
                <img src={Kyichu} alt="" />
              </motion.div>
            </div>
          </div>
          ;
        </>
      )}
    </div>
  );
};

export default BhutanCard;
