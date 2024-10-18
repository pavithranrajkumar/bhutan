import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ZhabrungCards.module.css";
import { ZHABRUNG_INFORMATION } from "../../../../constants/Characters/ZhabrungNgawangNamgyal";
import { BHUTAN } from "../../../../constants/languages/Language";

const CardsContainerText = ({ children, fontSize }) => {
  return (
    <div className={styles.CardsContainerText} style={{ fontSize }}>
      {children}
    </div>
  );
};

const ZhabrungCards = ({ language, onCardClick, showCards }) => {
  const fontSize = language === BHUTAN ? "1.2rem" : "18px";
  const [lineAnimationComplete, setLineAnimationComplete] = useState(false);
  const [cardAnimationStart, setCardAnimationStart] = useState(false);
  const [showTitles, setShowTitles] = useState(false);

  useEffect(() => {
    if (showCards) {
      setLineAnimationComplete(false);
      setShowTitles(false);
      const timer = setTimeout(() => {
        setLineAnimationComplete(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      // Reset states for exit animation
      setCardAnimationStart(false);
      setShowTitles(false);
      setLineAnimationComplete(false);
    }
  }, [showCards]);

  useEffect(() => {
    if (lineAnimationComplete && showCards) {
      const timer = setTimeout(() => {
        setCardAnimationStart(true);
        setShowTitles(true); // Show titles after the card animation starts
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [lineAnimationComplete, showCards]);

  return (
    <div
      className={styles.cardsContainer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: showCards ? 1 : 0, y: showCards ? 0 : 20 }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.5 } }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      {/* Historic Card */}
      <div className={styles.cardWrapper}>
        <motion.div
          className={styles.VerticalLine}
          initial={{ height: 0 }}
          animate={{ height: lineAnimationComplete ? "100%" : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          exit={{ scaleX: 0, opacity: 0, transition: { duration: 2 } }}

        />
        <motion.div
          className={`${styles.card} ${styles.HistoricCard}`}
          onClick={() => onCardClick("driglam")}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: cardAnimationStart ? 1 : 0,
            opacity: cardAnimationStart ? 1 : 0,

            originX: 1,
          }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }} // Start fade immediately
          exit={{ scaleX: 0, opacity: 0, transition: { duration: 2 } }}
        >
          {showTitles && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: cardAnimationStart ? "auto" : 0,
                opacity: cardAnimationStart ? 1 : 0,
              }}
              exit={{ scaleX: 0, opacity: 0, transition: { duration: 1 } }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            >
              <CardsContainerText fontSize={fontSize}>
              {ZHABRUNG_INFORMATION[language].driglamNamzhag.title}
              </CardsContainerText>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Lineage Card */}
      <div className={styles.cardWrapper}>
        <motion.div
          className={styles.VerticalLine}
          initial={{ height: 0 }}
          animate={{ height: lineAnimationComplete ? "100%" : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className={`${styles.card} ${styles.religiousCard}`}
          onClick={() => onCardClick("secrecy")}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: cardAnimationStart ? 1 : 0,
            opacity: cardAnimationStart ? 1 : 0,
            originX: 0,
          }}
          exit={{ scaleX: 0, opacity: 0, transition: { duration: 0.5 } }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: cardAnimationStart ? 1.5 : 0,
          }}
        >
          {showTitles && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: cardAnimationStart ? "auto" : 0,
                opacity: cardAnimationStart ? 1 : 0,
              }}
              exit={{ scaleX: 0, opacity: 0, transition: { duration: 0.5 } }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
            >
              <CardsContainerText fontSize={fontSize}>
              {ZHABRUNG_INFORMATION[language].secrecyAtDeath.title}
              </CardsContainerText>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Revelations Card */}
      <div className={styles.cardWrapper}>
        <motion.div
          className={styles.VerticalLine}
          initial={{ height: 0 }}
          animate={{ height: lineAnimationComplete ? "100%" : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className={`${styles.card} ${styles.PoliticalCard}`}
          onClick={() => onCardClick("political")}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: cardAnimationStart ? 1 : 0,
            opacity: cardAnimationStart ? 1 : 0,
            originX: 1,
          }}
          exit={{ scaleX: 0, opacity: 0, transition: { duration: 0.5 } }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: cardAnimationStart ? 1.5 : 0,
          }}
        >
          {showTitles && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: cardAnimationStart ? "auto" : 0,
                opacity: cardAnimationStart ? 1 : 0,
              }}
              exit={{ scaleX: 0, opacity: 0, transition: { duration: 0.5 } }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 2 }}
            >
              <CardsContainerText fontSize={fontSize}>
              {ZHABRUNG_INFORMATION[language].politicalInfluence.title}
              </CardsContainerText>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Legacy Card */}
      <div className={styles.cardWrapper}>
        <motion.div
          className={styles.VerticalLine}
          initial={{ height: 0 }}
          animate={{ height: lineAnimationComplete ? "100%" : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className={`${styles.card} ${styles.AdministartionCard}`}
          onClick={() => onCardClick("administration")}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: cardAnimationStart ? 1 : 0,
            opacity: cardAnimationStart ? 1 : 0,
            originX: 0,
          }}
          exit={{ scaleX: 0, opacity: 0, transition: { duration: 0.5 } }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: cardAnimationStart ? 1.5 : 0,
          }}
        >
          {showTitles && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: cardAnimationStart ? "auto" : 0,
                opacity: cardAnimationStart ? 1 : 0,
              }}
              exit={{ scaleX: 0, opacity: 0, transition: { duration: 0.5 } }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 2.5 }}
            >
              <CardsContainerText fontSize={fontSize}>
              {ZHABRUNG_INFORMATION[language].administration.title}
              </CardsContainerText>
            </motion.div>
          )}
        </motion.div>
      </div>

      <div className={styles.cardWrapper}>
        <motion.div
          className={styles.VerticalLine}
          initial={{ height: 0 }}
          animate={{ height: lineAnimationComplete ? "100%" : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className={`${styles.card} ${styles.SecrecyyCard}`}
          onClick={() => onCardClick("religious")}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: cardAnimationStart ? 1 : 0,
            opacity: cardAnimationStart ? 1 : 0,
            originX: 1
          }}
          exit={{ scaleX: 0, opacity: 0, transition: { duration: 0.5 } }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: cardAnimationStart ? 1.5 : 0,
          }}
        >
          {showTitles && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: cardAnimationStart ? "auto" : 0,
                opacity: cardAnimationStart ? 1 : 0,
              }}
              exit={{ scaleX: 0, opacity: 0, transition: { duration: 0.5 } }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 2.5 }}
            >
              <CardsContainerText fontSize={fontSize}>
              {ZHABRUNG_INFORMATION[language].religiousInflunce.title}
              </CardsContainerText>
            </motion.div>
          )}
        </motion.div>
      </div>

      <div className={styles.cardWrapper}>
        <motion.div
          className={styles.VerticalLine}
          initial={{ height: 0 }}
          animate={{ height: lineAnimationComplete ? "100%" : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className={`${styles.card} ${styles.DriglamCard}`}
          onClick={() => onCardClick("historic")}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: cardAnimationStart ? 1 : 0,
            opacity: cardAnimationStart ? 1 : 0,
            originX: 0,
          }}
          exit={{ scaleX: 0, opacity: 0, transition: { duration: 0.5 } }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: cardAnimationStart ? 1.5 : 0,
          }}
        >
          {showTitles && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: cardAnimationStart ? "auto" : 0,
                opacity: cardAnimationStart ? 1 : 0,
              }}
              exit={{ scaleX: 0, opacity: 0, transition: { duration: 0.5 } }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 2.5 }}
            >
              <CardsContainerText fontSize={fontSize}>
              {ZHABRUNG_INFORMATION[language].historicBackground.title}
              </CardsContainerText>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ZhabrungCards;
