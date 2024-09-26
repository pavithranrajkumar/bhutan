import React from "react";
import { motion } from "framer-motion";
import styles from "./GuruCards.module.css";
import { GURU_INFORMATION } from "../../../../constants/Characters/Guru";

const GuruCards = ({ isFadingOut, language, onCardClick }) => {
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
          <div className={styles.CardsContainerText}>
            {GURU_INFORMATION[language].historicBackground.title}
          </div>
        </motion.div>
        <motion.div
          className={styles.ManifestationCard}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={() => onCardClick("religious")}
        >
          <div className={styles.CardsContainerText}>
            GURU TSHENGYE 8 MANIFESTATIONS
          </div>
        </motion.div>
        <motion.div
          className={styles.PalaceCard}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={() => onCardClick("political")}
        >
          <div className={styles.CardsContainerText}>
            GURU IN WANGDUECHHOELING PALACE
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GuruCards;
