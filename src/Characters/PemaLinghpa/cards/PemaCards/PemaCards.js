import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./PemaCards.module.css";
import { PEMA_LINGPA_INFORMATION } from "../../../../constants/Characters/PremaLingpa";
import { BHUTAN } from "../../../../constants/languages/Language";

const PemaCards = ({ language, onCardClick }) => {
  const fonstSize = language === BHUTAN ? "1.2rem" : "18px";
  const [cardAnimationStart, setCardAnimationStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCardAnimationStart(true);
    }, 500); // Delay before starting animations
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className={styles.cardsContainer}>
        <motion.div
          className={styles.HistoricCard}
          onClick={() => onCardClick("historic")}
          initial={{ scaleX: 0, opacity: 0 }} // Initial state for animation
          animate={{
            scaleX: cardAnimationStart ? 1 : 0,
            opacity: cardAnimationStart ? 1 : 0,
            originX: 0,
          }}
          transition={{ duration: 0.5, ease: "easeOut", delay: cardAnimationStart ? 0.5 : 0 }}
        >
          <div
            className={styles.CardsContainerText}
            style={{ fontSize: fonstSize }}
          >
            {PEMA_LINGPA_INFORMATION[language].historicBackground.title}
          </div>
        </motion.div>

        <motion.div
          className={styles.LineageCard}
          onClick={() => onCardClick("lineage")}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: cardAnimationStart ? 1 : 0,
            opacity: cardAnimationStart ? 1 : 0,
            originX: 0,
          }}
          transition={{ duration: 0.5, ease: "easeOut", delay: cardAnimationStart ? 0.8 : 0 }}
        >
          <div
            className={styles.CardsContainerText}
            style={{ fontSize: fonstSize }}
          >
            {PEMA_LINGPA_INFORMATION[language].lineage.title}
          </div>
        </motion.div>

        <motion.div
          className={styles.RevelationsCard}
          onClick={() => onCardClick("revelations")}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: cardAnimationStart ? 1 : 0,
            opacity: cardAnimationStart ? 1 : 0,
            originX: 0,
          }}
          transition={{ duration: 0.5, ease: "easeOut", delay: cardAnimationStart ? 1.1 : 0 }}
        >
          <div
            className={styles.CardsContainerText}
            style={{ fontSize: fonstSize }}
          >
            {PEMA_LINGPA_INFORMATION[language].revelations.title}
          </div>
        </motion.div>

        <motion.div
          className={styles.LegacyCard}
          onClick={() => onCardClick("legacy")}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: cardAnimationStart ? 1 : 0,
            opacity: cardAnimationStart ? 1 : 0,
            originX: 0,
          }}
          transition={{ duration: 0.5, ease: "easeOut", delay: cardAnimationStart ? 1.4 : 0 }}
        >
          <div
            className={styles.CardsContainerText}
            style={{ fontSize: fonstSize }}
          >
            {PEMA_LINGPA_INFORMATION[language].legacy.title}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PemaCards;
