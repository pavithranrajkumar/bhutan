import React, { useState } from "react";
import { ZHABRUNG_INFORMATION } from "../../../../constants/Characters/ZhabrungNgawangNamgyal";
import Card from "../../../../components/Card/Card";
import styles from "./ReligiousCard.module.css";
import { BHUTAN } from "../../../../constants/languages/Language";
import { motion } from "framer-motion";

const ReligiousCard = ({ showIntro, onSealClick, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "15px";
  const fonstSize = language === BHUTAN ? "6.2px" : "11px";
  const cardFonstSize = language === BHUTAN ? "1.2rem" : "22px";
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="320px"
            height="200px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #8F4110"
            backgroundColor="#FFDFC3"
            color="#6A1F11"
            title={ZHABRUNG_INFORMATION[language].religiousInflunce.title}
            content={ZHABRUNG_INFORMATION[language].religiousInflunce.content}
            language={language}
            showIntro={showIntro}
          />
          <motion.div
            className={styles.sealOfZhabdrungCard}
            onClick={onSealClick}
            initial={{ opacity: 0 }} // Initial opacity for title
            animate={{ opacity: 1 }} // Final opacity for title
            transition={{ duration: 0.5, delay: 4 }} // Fade duration for title
            exit={{ opacity: 0, transition: { duration: 2.8 } }}
          >
            <motion.div
              style={{ fontSize: cardFonstSize }}
              initial={{ opacity: 0 }} // Initial opacity for title
              animate={{ opacity: 1 }} // Final opacity for title
              transition={{ duration: 0.5, delay: 4.5 }} // Fade duration for title
              exit={{ opacity: 0, transition: { duration: 2.8 } }}
            >
              {ZHABRUNG_INFORMATION[language].sealOfZhabdrung.title}
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ReligiousCard;
