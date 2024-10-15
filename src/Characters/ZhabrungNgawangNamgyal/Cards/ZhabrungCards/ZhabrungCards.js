import React from "react";
import { motion } from "framer-motion";
import styles from "./ZhabrungCards.module.css";
import { ZHABRUNG_INFORMATION } from "../../../../constants/Characters/ZhabrungNgawangNamgyal";
import { BHUTAN } from "../../../../constants/languages/Language";

const ZhabrungCards = ({ isFadingOut, language, onCardClick }) => {
  const fonstSize = language === BHUTAN ? "1.2rem" : "14px";
  const contentLineHeight = language === BHUTAN ? "1" : "";

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
          onClick={() => onCardClick("driglam")}
        >
          <div
            className={styles.CardsContainerText}
            style={{ fontSize: fonstSize, lineHeight: contentLineHeight }}
          >
            {" "}
            {ZHABRUNG_INFORMATION[language].driglamNamzhag.title}
          </div>
        </motion.div>
        <motion.div
          className={styles.religiousCard}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={() => onCardClick("secrecy")}
        >
          <div
            className={styles.CardsContainerText}
            style={{ fontSize: fonstSize, lineHeight: contentLineHeight }}
          >
            {" "}
            {ZHABRUNG_INFORMATION[language].secrecyAtDeath.title}
          </div>
        </motion.div>
        <motion.div
          className={styles.PoliticalCard}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={() => onCardClick("political")}
        >
          <div
            className={styles.CardsContainerText}
            style={{ fontSize: fonstSize, lineHeight: contentLineHeight }}
          >
            {" "}
            {ZHABRUNG_INFORMATION[language].politicalInfluence.title}
          </div>
        </motion.div>
        <motion.div
          className={styles.AdministartionCard}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={() => onCardClick("administration")}
        >
          <div
            className={styles.CardsContainerText}
            style={{ fontSize: fonstSize, lineHeight: contentLineHeight }}
          >
            {ZHABRUNG_INFORMATION[language].administration.title}
          </div>
        </motion.div>
        <motion.div
          className={styles.SecrecyyCard}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={() => onCardClick("religious")}
        >
          <div
            className={styles.CardsContainerText}
            style={{ fontSize: fonstSize, lineHeight: contentLineHeight }}
          >
            {" "}
            {ZHABRUNG_INFORMATION[language].religiousInflunce.title}
          </div>
        </motion.div>
        <motion.div
          className={styles.DriglamCard}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={() => onCardClick("historic")}
        >
          <div
            className={styles.CardsContainerText}
            style={{ fontSize: fonstSize, lineHeight: contentLineHeight }}
          >
            {ZHABRUNG_INFORMATION[language].historicBackground.title}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ZhabrungCards;
