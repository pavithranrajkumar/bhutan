import React from "react";
import { motion } from "framer-motion";
import styles from "./SupineCards.module.css";

const SupineCards = ({ isFadingOut, language, onCardClick }) => {
  return (
    <div>
      <motion.div
        className={styles.cardsContainer}
        initial={{ opacity: 1 }}
        animate={{ opacity: isFadingOut ? 0 : 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className={styles.ReligiousCard}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={() => onCardClick("religious")}
        >
          <div className={styles.CardsContainerText}>RELIGIOUS INFLUENCE</div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SupineCards;
