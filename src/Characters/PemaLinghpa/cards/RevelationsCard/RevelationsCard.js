import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

  const [cardAnimationStart, setCardAnimationStart] = useState(false);
  const [lineAnimationComplete, setLineAnimationComplete] = useState(false);
  const [titleAnimationStart, setTitleAnimationStart] = useState(false);
  const [contentAnimationStart, setContentAnimationStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLineAnimationComplete(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

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

          <motion.div
            className={styles.cardsContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            style={{ gap: "10px" }}
          >
            <motion.div
              className={styles.VerticalLine}
              initial={{ height: 0 }}
              animate={{
                height: lineAnimationComplete ? "100%" : 0,
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
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
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
                delay: cardAnimationStart ? 3.5 : 0,
              }}
            >
              <motion.div
                className={styles.title}
                initial={{ x: -50, opacity: 0 }}
                animate={{
                  x: titleAnimationStart ? 0 : -50,
                  opacity: titleAnimationStart ? 1 : 0,
                }}
                exit={{ x: -50, opacity: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: cardAnimationStart ? 4 : 0,
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
                initial={{ x: -50, opacity: 0 }}
                animate={{
                  x: titleAnimationStart ? 0 : -50,
                  opacity: titleAnimationStart ? 1 : 0,
                }}
                exit={{ x: -50, opacity: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
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
              className={styles.burningLakeCard}
              onClick={onBurningLakeClick}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: cardAnimationStart ? 1 : 0,
                opacity: cardAnimationStart ? 1 : 0,
                originX: 0,
              }}
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
                delay: cardAnimationStart ? 3.5 : 0,
              }}
            >
              <motion.div
                className={styles.burningLakeTitle}
                initial={{ x: 50, opacity: 0 }} // Start slightly off the right
                animate={{
                  x: titleAnimationStart ? 0 : 50, // Only animate when titleAnimationStart is true
                  opacity: titleAnimationStart ? 1 : 0,
                }} // Move to original position
                exit={{ x: 50, opacity: 0 }} // Exit back to the right
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: cardAnimationStart ? 4 : 0,
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
                initial={{ x: 50, opacity: 0 }} // Start slightly off the right
                animate={{
                  x: titleAnimationStart ? 0 : 50, // Only animate when titleAnimationStart is true
                  opacity: titleAnimationStart ? 1 : 0,
                }} // Move to original position
                exit={{ x: 50, opacity: 0 }} // Exit back to the right
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: cardAnimationStart ? 4.5 : 0,
                }}
                style={{
                  fontSize: subHeaderFontSize,
                  lineHeight: contentLineHeight,
                }}
              >
                {PEMA_LINGPA_INFORMATION[language].burningLake.header}
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className={styles.burningLakeBookImg}
            onClick={onBurningLakeClick}
            initial={{ x: 50, opacity: 0 }} // Start slightly off the right
            animate={{
              x: cardAnimationStart ? 0 : 50, // Only animate when cardAnimationStart is true
              opacity: cardAnimationStart ? 1 : 0,
            }} // Move to original position
            exit={{ x: 50, opacity: 0 }} // Exit back to the right
            transition={{
              duration: 1.5,
              ease: "easeOut",
              delay: cardAnimationStart ? 5 : 0,
            }}
          >
            <img src={burningLakeBookImg} alt="burningLakeBookImg" />
          </motion.div>

          <motion.div
            className={styles.NaringDragBookImg}
            onClick={onNaringDragClick}
            initial={{ x: -50, opacity: 0 }} // Start slightly off the left
            animate={{
              x: cardAnimationStart ? 0 : -50, // Only animate when cardAnimationStart is true
              opacity: cardAnimationStart ? 1 : 0,
            }} // Move to original position
            exit={{ x: -50, opacity: 0 }} // Exit back to the left
            transition={{
              duration: 1.5,
              ease: "easeOut",
              delay: cardAnimationStart ? 5 : 0,
            }}
          >
            <img src={NaringDragBookImg} alt="NaringDragBookImg" />
          </motion.div>
        </>
      )}
    </div>
  );
};

export default RevelationsCard;
