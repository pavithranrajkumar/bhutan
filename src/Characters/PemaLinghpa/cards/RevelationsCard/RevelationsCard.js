import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PEMA_LINGPA_INFORMATION } from "../../../../constants/Characters/PremaLingpa";
import Card from "../../../../components/Card/Card";
import styles from "./RevelationsCard.module.css";
import NaringDragBookImg from "../../../../assests/PemaLingpa/Revelations/NaringDrag.png";
import burningLakeBookImg from "../../../../assests/PemaLingpa/Revelations/BurningLake.png";
import { BHUTAN } from "../../../../constants/languages/Language";

const RevelationsCard = ({
  showIntro,
  language,
  onNaringDragClick,
  onBurningLakeClick,
}) => {
  const titleFontSize = language === BHUTAN ? "12px" : "30px";
  const fonstSize = language === BHUTAN ? "10px" : "13.2px";
  const headerFontSize = language === BHUTAN ? "1.2rem" : "12px";
  const subHeaderFontSize = language === BHUTAN ? "1rem" : "20px";
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
            width="250px"
            height="300px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #6A1F11"
            backgroundColor="#FFD9BC"
            color="#6A1F11"
            title={PEMA_LINGPA_INFORMATION[language].revelations.title}
            content={PEMA_LINGPA_INFORMATION[language].revelations.content}
            language={language}
            showIntro={showIntro}
          />

          <div className={styles.cardsContainer}>
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
                className={styles.revelationsCard}
                onClick={onNaringDragClick}
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
                  className={styles.title}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: titleAnimationStart ? 1 : 0,
                  }}
                  exit={{ opacity: 0, transition: { duration: 2 } }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: cardAnimationStart ? 3 : 0,
                  }}
                  style={{
                    fontSize: headerFontSize,
                    lineHeight: contentLineHeight,
                  }}
                >
                  {PEMA_LINGPA_INFORMATION[language].naringDrag.title}
                </motion.div>

                <motion.div
                  className={styles.header}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: titleAnimationStart ? 1 : 0,
                  }}
                  exit={{ opacity: 0, transition: { duration: 2 } }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: cardAnimationStart ? 4.5 : 0,
                  }}
                  style={{
                    fontSize: subHeaderFontSize,
                    lineHeight: contentLineHeight,
                  }}
                >
                  {PEMA_LINGPA_INFORMATION[language].naringDrag.header}
                </motion.div>
              </motion.div>

              <motion.div
                className={styles.NaringDragBookImg}
                onClick={onNaringDragClick}
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
                <img src={NaringDragBookImg} alt="NaringDragBookImg" />
              </motion.div>
            </div>

            <div className={styles.cardWrapper}>
              <motion.div
                className={styles.burningLakeCard}
                onClick={onBurningLakeClick}
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
                  className={styles.burningLakeTitle}
                  initial={{ opacity: 0 }} // Start off invisible
                  animate={{
                    opacity: titleAnimationStart ? 1 : 0,
                  }}
                  exit={{ opacity: 0, transition: { duration: 2 } }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: cardAnimationStart ? 4 : 0, // Sync with card animation
                  }}
                  style={{
                    fontSize: headerFontSize,
                    lineHeight: contentLineHeight,
                  }}
                >
                  {PEMA_LINGPA_INFORMATION[language].burningLake.title}
                </motion.div>
                <motion.div
                  className={styles.burningLakeHeader}
                  initial={{ opacity: 0 }} // Start off invisible
                  animate={{
                    opacity: titleAnimationStart ? 1 : 0,
                  }}
                  exit={{ opacity: 0, transition: { duration: 2 } }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: cardAnimationStart ? 4.5 : 0, // Sync with title animation
                  }}
                  style={{
                    fontSize: subHeaderFontSize,
                    lineHeight: contentLineHeight,
                  }}
                >
                  {PEMA_LINGPA_INFORMATION[language].burningLake.header}
                </motion.div>
              </motion.div>
              <motion.div
                className={styles.burningLakeBookImg}
                onClick={onBurningLakeClick}
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
                <img src={burningLakeBookImg} alt="burningLakeBookImg" />
              </motion.div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RevelationsCard;