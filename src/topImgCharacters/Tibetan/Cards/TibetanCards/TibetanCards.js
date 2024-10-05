import React from "react";
import { motion } from "framer-motion";
import styles from "./TibetanCards.module.css";
import { TIBETAN_INFORMATION } from "../../../../constants/Characters/Tibetan";
import { BHUTAN } from "../../../../constants/languages/Language";

const TibetanCards = ({ isFadingOut, language, onCardClick }) => {
  const fonstSize = language === BHUTAN ? "11px" : "14px";

  return (
    <div>
      <motion.div
        className={styles.cardsContainer}
        initial={{ opacity: 1 }}
        animate={{ opacity: isFadingOut ? 0 : 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className={styles.ArrivalCard}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={() => onCardClick("arrival")}
        >
          <div
            className={styles.CardsContainerText}
            style={{ fontSize: fonstSize }}
          >
            {TIBETAN_INFORMATION[language].arrival.title}
          </div>
        </motion.div>
        <motion.div
          className={styles.SchoolsCard}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={() => onCardClick("schools")}
        >
          <div
            className={styles.CardsContainerText}
            style={{ fontSize: fonstSize }}
          >
            {" "}
            {TIBETAN_INFORMATION[language].bhddhistSchools.title}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TibetanCards;
