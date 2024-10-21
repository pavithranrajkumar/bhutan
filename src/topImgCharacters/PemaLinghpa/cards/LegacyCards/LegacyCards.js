import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PEMA_LINGPA_INFORMATION } from "../../../../constants/Characters/PremaLingpa";
import Card from "../../../../components/Card/Card";
import styles from "./LegacyCard.module.css";
import MonasteriesCardImg from "../../../../assests/PemaLingpa/Legacy/MonasteriesCard.png";
import PelingDanceCardImg from "../../../../assests/PemaLingpa/Legacy/PelingDanceCard.png";
import { BHUTAN } from "../../../../constants/languages/Language";

const LegacyCards = ({
  showIntro,
  language,
  onMonasteriesCardClick,
  onPelingDanceCardClick,
}) => {
  const titleFontSize = language === BHUTAN ? "12px" : "30px";
  const fonstSize = language === BHUTAN ? "9px" : "13.2px";

  const headerFontSize = language === BHUTAN ? "1.2rem" : "12px";
  const subHeaderFontSize = language === BHUTAN ? "1.2rem" : "20px";

  const [cardAnimationStart, setCardAnimationStart] = useState(false);
  const [lineAnimationComplete, setLineAnimationComplete] = useState(false);

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

  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="300px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #6A1F11"
            backgroundColor="#FFD9BC"
            color="#6A1F11"
            title={PEMA_LINGPA_INFORMATION[language].legacy.title}
            content={PEMA_LINGPA_INFORMATION[language].legacy.content}
            language={language}
            showIntro={showIntro}
          />
          <motion.div
            className={styles.cardsContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 2 } }}
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

            {/* Monasteries Card */}
            <motion.div
              className={styles.MonasteriesCard}
              onClick={onMonasteriesCardClick}
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
              {/* Monasteries Card Text */}
              <motion.div
                className={styles.MonasteriesCardTitle}
                style={{ fontSize: headerFontSize }}
                initial={{ x: 20, opacity: 0 }} // Start slightly off the right
                animate={{
                  x: cardAnimationStart ? 0 : 20, // Move to original position
                  opacity: cardAnimationStart ? 1 : 0,
                }}
                exit={{ opacity: 0, transition: { duration: 2 } }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: cardAnimationStart ? 5 : 0, // Delay after card expansion
                }}
              >
                {PEMA_LINGPA_INFORMATION[language].monastriesAndTemples.title}
              </motion.div>
              <motion.div
                className={styles.MonasteriesCardContent}
                style={{ fontSize: subHeaderFontSize }}
                initial={{ x: 20, opacity: 0 }} // Start slightly off the right
                animate={{
                  x: cardAnimationStart ? 0 : 20, // Move to original position
                  opacity: cardAnimationStart ? 1 : 0,
                }}
                exit={{ opacity: 0, transition: { duration: 2 } }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: cardAnimationStart ? 5.5 : 0, // Delay after card expansion
                }}
              >
                {PEMA_LINGPA_INFORMATION[language].monastriesAndTemples.header}
              </motion.div>
            </motion.div>

            {/* Peling Dance Card */}
            <motion.div
              className={styles.PelingDanceCard}
              onClick={onPelingDanceCardClick}
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
              {/* Peling Dance Card Text */}
              <motion.div
                className={styles.PelingDanceCardTitle}
                style={{ fontSize: headerFontSize }}
                initial={{ x: 20, opacity: 0 }} // Start slightly off the right
                animate={{
                  x: cardAnimationStart ? 0 : 20, // Move to original position
                  opacity: cardAnimationStart ? 1 : 0,
                }}
                exit={{ opacity: 0, transition: { duration: 2 } }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: cardAnimationStart ? 5 : 0, // Delay after card expansion
                }}
              >
                {PEMA_LINGPA_INFORMATION[language].pelingdance.title}
              </motion.div>
              <motion.div
                className={styles.PelingDanceCardContent}
                style={{ fontSize: subHeaderFontSize }}
                initial={{ x: 20, opacity: 0 }} // Start slightly off the right
                animate={{
                  x: cardAnimationStart ? 0 : 20, // Move to original position
                  opacity: cardAnimationStart ? 1 : 0,
                }}
                exit={{ opacity: 0, transition: { duration: 2 } }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: cardAnimationStart ? 5.5 : 0, // Delay after card expansion
                }}
              >
                {PEMA_LINGPA_INFORMATION[language].pelingdance.header}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Images for the cards */}
          <motion.div
            className={styles.MonasteriesCardImg}
            initial={{ x: 50, opacity: 0 }} // Start slightly off the right
            animate={{
              x: cardAnimationStart ? 0 : 50, // Only animate when cardAnimationStart is true
              opacity: cardAnimationStart ? 1 : 0,
            }} // Move to original position
            exit={{ opacity: 0, transition: { duration: 2 } }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              delay: cardAnimationStart ? 5 : 0,
            }}
          >
            <div onClick={onMonasteriesCardClick}>
              <img src={MonasteriesCardImg} alt="MonasteriesCardImg" />
            </div>
          </motion.div>

          <motion.div
            className={styles.PelingDanceCardImg}
            initial={{ x: -50, opacity: 0 }} // Start slightly off the left
            animate={{
              x: cardAnimationStart ? 0 : -50, // Only animate when cardAnimationStart is true
              opacity: cardAnimationStart ? 1 : 0,
            }} // Move to original position
            exit={{ opacity: 0, transition: { duration: 2 } }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              delay: cardAnimationStart ? 5 : 0, // Delay for NaringDrag
            }}
          >
            <div onClick={onPelingDanceCardClick}>
              <img src={PelingDanceCardImg} alt="PelingDanceCardImg" />
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default LegacyCards;
