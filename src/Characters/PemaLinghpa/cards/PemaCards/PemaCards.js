import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./PemaCards.module.css";
import { PEMA_LINGPA_INFORMATION } from "../../../../constants/Characters/PremaLingpa";
import { BHUTAN } from "../../../../constants/languages/Language";

const CardsContainerText = ({ children, fontSize }) => {
  return (
    <div className={styles.CardsContainerText} style={{ fontSize }}>
      {children}
    </div>
  );
};

const PemaCards = ({ language, onCardClick }) => {
  const fontSize = language === BHUTAN ? "1.2rem" : "18px";
  const [cardAnimationStart, setCardAnimationStart] = useState(false);
  const [lineAnimationComplete, setLineAnimationComplete] = useState(false);

  // Start the line animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLineAnimationComplete(true);
    }, 500); // Duration for the line to drop
    return () => clearTimeout(timer);
  }, []);

  // Start card animations after the line animation is complete
  useEffect(() => {
    if (lineAnimationComplete) {
      const timer = setTimeout(() => {
        setCardAnimationStart(true);
      }, 300); // Delay card animation after line
      return () => clearTimeout(timer);
    }
  }, [lineAnimationComplete]);

  return (
    <div>
      <div className={styles.cardsContainer}>
        {/* Historic Card */}
        <div className={styles.cardWrapper}>
          <motion.div
            className={styles.VerticalLine}
            initial={{ height: 0 }}
            animate={{
              height: lineAnimationComplete ? "100%" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <motion.div
            className={`${styles.card} ${styles.HistoricCard}`}
            onClick={() => onCardClick("historic")}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: cardAnimationStart ? 1 : 0,
              opacity: cardAnimationStart ? 1 : 0,
              originX: 0,
            }}
            transition={{ duration: 0.5, ease: "easeOut", delay: cardAnimationStart ? 0.5 : 0 }}
          >
            <CardsContainerText fontSize={fontSize}>
              {PEMA_LINGPA_INFORMATION[language].historicBackground.title}
            </CardsContainerText>
          </motion.div>
        </div>

        {/* Lineage Card */}
        <div className={styles.cardWrapper}>
          <motion.div
            className={styles.VerticalLine}
            initial={{ height: 0 }}
            animate={{
              height: lineAnimationComplete ? "100%" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <motion.div
            className={`${styles.card} ${styles.LineageCard}`}
            onClick={() => onCardClick("lineage")}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: cardAnimationStart ? 1 : 0,
              opacity: cardAnimationStart ? 1 : 0,
              originX: 0,
            }}
            transition={{ duration: 0.5, ease: "easeOut", delay: cardAnimationStart ? 1.1 : 0 }}
          >
            <CardsContainerText fontSize={fontSize}>
              {PEMA_LINGPA_INFORMATION[language].lineage.title}
            </CardsContainerText>
          </motion.div>
        </div>

        {/* Revelations Card */}
        <div className={styles.cardWrapper}>
          <motion.div
            className={styles.VerticalLine}
            initial={{ height: 0 }}
            animate={{
              height: lineAnimationComplete ? "100%" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <motion.div
            className={`${styles.card} ${styles.RevelationsCard}`}
            onClick={() => onCardClick("revelations")}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: cardAnimationStart ? 1 : 0,
              opacity: cardAnimationStart ? 1 : 0,
              originX: 0,
            }}
            transition={{ duration: 0.5, ease: "easeOut", delay: cardAnimationStart ? 1.7 : 0 }}
          >
            <CardsContainerText fontSize={fontSize}>
              {PEMA_LINGPA_INFORMATION[language].revelations.title}
            </CardsContainerText>
          </motion.div>
        </div>

        {/* Legacy Card */}
        <div className={styles.cardWrapper}>
          <motion.div
            className={styles.VerticalLine}
            initial={{ height: 0 }}
            animate={{
              height: lineAnimationComplete ? "100%" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <motion.div
            className={`${styles.card} ${styles.LegacyCard}`}
            onClick={() => onCardClick("legacy")}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: cardAnimationStart ? 1 : 0,
              opacity: cardAnimationStart ? 1 : 0,
              originX: 0,
            }}
            transition={{ duration: 0.5, ease: "easeOut", delay: cardAnimationStart ? 2.3 : 0 }}
          >
            <CardsContainerText fontSize={fontSize}>
              {PEMA_LINGPA_INFORMATION[language].legacy.title}
            </CardsContainerText>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PemaCards;
