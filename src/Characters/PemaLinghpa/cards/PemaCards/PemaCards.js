import React from "react";
import { motion } from "framer-motion";
import styles from "./PemaCards.module.css";
import { PEMA_LINGPA_INFORMATION } from "../../../../constants/Characters/PremaLingpa";
import { BHUTAN } from "../../../../constants/languages/Language";

const PemaCards = ({ isFadingOut, language, onCardClick }) => {
  const fonstSize = language === BHUTAN ? "15px" : "18px";
  return (
    <div>
      <motion.div
        className={styles.cardsContainer}
        initial={{ opacity: 1 }}
        animate={{ opacity: isFadingOut ? 0 : 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className={styles.HistoricCard}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={() => onCardClick("historic")}
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
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={() => onCardClick("lineage")}
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
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={() => onCardClick("revelations")}
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
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={() => onCardClick("legacy")}
        >
          <div
            className={styles.CardsContainerText}
            style={{ fontSize: fonstSize }}
          >
            {PEMA_LINGPA_INFORMATION[language].legacy.title}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PemaCards;
