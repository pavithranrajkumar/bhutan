import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SupineCards.module.css";
import { SUPINE_INFORMATION } from "../../../../constants/Characters/Supine";
import { BHUTAN } from "../../../../constants/languages/Language";

const CardsContainerText = ({ children, fontSize }) => {
  return (
    <div className={styles.CardsContainerText} style={{ fontSize }}>
      {children}
    </div>
  );
};

const SupineCards = ({ language, onCardClick, showCards }) => {
  const titleStyle =
    language === BHUTAN ? { fontSize: "1.6rem" } : { fontSize: "21px" };
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
          className={`${styles.card} ${styles.ReligiousCard}`}
          onClick={() => onCardClick("historic")}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: cardAnimationStart ? 1 : 0,
            opacity: cardAnimationStart ? 1 : 0,

            originX: 1,
          }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }} // Start fade immediately
          exit={{ scaleX: 0, opacity: 0, transition: { duration: 2.5 } }}
        >
          {showTitles && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: cardAnimationStart ? "auto" : 0,
                opacity: cardAnimationStart ? 1 : 0,
              }}
              exit={{ scaleX: 0, opacity: 0, transition: { duration: 1 } }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 3 }}
            >
              <CardsContainerText style={titleStyle}>
                {SUPINE_INFORMATION[language].religious.title}
              </CardsContainerText>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SupineCards;
