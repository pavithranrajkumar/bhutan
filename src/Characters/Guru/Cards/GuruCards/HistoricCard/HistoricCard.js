import React, { useState } from "react";
import styles from "./HistoricCard.module.css";
import Card from "../../../../../components/Card/Card";
import { GURU_INFORMATION } from "../../../../../constants/Characters/Guru";
import temple from "../../../../../assests/Guru/Historic/GuruHistoric.png";
import { BHUTAN } from "../../../../../constants/languages/Language";
import { motion } from "framer-motion";

const HistoricCard = ({ showIntro, onKurjeClick, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "25px";
  const fonstSize = language === BHUTAN ? "8px" : "11px";
  const KurjeFonstSize = language === BHUTAN ? "1.3rem" : "15px";
  const contentLineHeight = language === BHUTAN ? "1" : "";

  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="330px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #A06611"
            color="#A06611"
            backgroundColor="#FADFB6"
            title={GURU_INFORMATION[language].historicBackground.title}
            content={GURU_INFORMATION[language].historicBackground.content}
            language={language}
            showIntro={showIntro}
          />
          <motion.div
            className={styles.GuruHistoricCard}
            onClick={onKurjeClick}
            initial={{ opacity: 0 }} // Initial opacity for title
            animate={{ opacity: 1 }} // Final opacity for title
            transition={{ duration: 0.5, delay: 4 }} // Fade duration for title
            exit={{ opacity: 0, transition: { duration: 2.8 } }}
          >
            <motion.div
              style={{
                marginTop: "11px",
                display: "flex",
                flexDirection: "column",
                fontSize: KurjeFonstSize,
                lineHeight: contentLineHeight,
              }}
              initial={{ opacity: 0 }} // Initial opacity for title
              animate={{ opacity: 1 }} // Final opacity for title
              transition={{ duration: 0.5, delay: 4.5 }} // Fade duration for title
              exit={{ opacity: 0, transition: { duration: 2.8 } }}
            >
              {GURU_INFORMATION[language].kurjeCard.title}{" "}
              <span>{GURU_INFORMATION[language].kurjeCard.subTitle}</span>
            </motion.div>
          </motion.div>

          <div className={styles.GuruHistoricCardImg} onClick={onKurjeClick}>
            <motion.img
              src={temple}
              alt=""
              initial={{ opacity: 0 }} // Initial state
              animate={{ opacity: 1 }} // Animation state
              transition={{ duration: 5.5, delay: 4.2 }}
              exit={{ opacity: 0, transition: { duration: 2 } }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default HistoricCard;
