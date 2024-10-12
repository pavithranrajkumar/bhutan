import React from "react";
import { motion } from "framer-motion";
import styles from "./SupineCards.module.css";
import { SUPINE_INFORMATION } from "../../../../constants/Characters/Supine";

const SupineCards = ({ isFadingOut, language, onCardClick }) => {
  const titleStyle =
    language === "bhutan" ? { fontSize: "15px" } : { fontSize: "21px" };
  return (
    <div>
      <motion.div
        className={styles.cardsContainer}
        initial={{ opacity: 1 }}
        animate={{ opacity: isFadingOut ? 0 : 1 }}
        transition={{ duration: 0 }}
      >
        <motion.div
          className={styles.ReligiousCard}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={() => onCardClick("religious")}
        >
          <div className={styles.CardsContainerText} style={titleStyle}>
            {SUPINE_INFORMATION[language].religious.title}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SupineCards;
