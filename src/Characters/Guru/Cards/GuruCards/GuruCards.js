import React from "react";
import { motion } from "framer-motion";
import styles from "./GuruCards.module.css";
import { GURU_INFORMATION } from "../../../../constants/Characters/Guru";
import { BHUTAN } from "../../../../constants/languages/Language";

const GuruCards = ({ isFadingOut, language, onCardClick }) => {
  const fonstSize = language === BHUTAN ? "11.5px" : "15px";
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
            {GURU_INFORMATION[language].historicBackground.title}
          </div>
        </motion.div>
        <motion.div
          className={styles.ManifestationCard}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={() => onCardClick("manifestation")}
        >
          <div
            className={styles.CardsContainerText}
            style={{ fontSize: fonstSize }}
          >
            {GURU_INFORMATION[language].guruCards.title}{" "}
          </div>
        </motion.div>
        <motion.div
          className={styles.PalaceCard}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={() => onCardClick("palace")}
        >
          <div
            className={styles.CardsContainerText}
            style={{ fontSize: fonstSize }}
          >
            {GURU_INFORMATION[language].guruCards.header}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GuruCards;
