import React from "react";
import { motion } from "framer-motion";
import styles from "./TibetanCards.module.css";
import { TIBETAN_INFORMATION } from "../../../../constants/Characters/Tibetan";

const TibetanCards = ({ isFadingOut, language, onCardClick }) => {
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
            {TIBETAN_INFORMATION[language].arrival.title}
          </div>
        </motion.div>
        <motion.div
          className={styles.religiousCard}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={() => onCardClick("religious")}
        >
          <div className={styles.CardsContainerText}>
            {" "}
            {TIBETAN_INFORMATION[language].bhddhistSchools.title}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TibetanCards;
