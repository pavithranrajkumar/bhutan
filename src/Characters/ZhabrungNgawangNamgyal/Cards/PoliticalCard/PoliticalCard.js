import React, { useState } from "react";
import BigCard from "../../../../components/BigCard/BigCard";
import { ZHABRUNG_INFORMATION } from "../../../../constants/Characters/ZhabrungNgawangNamgyal";
import styles from "./PoliticalCard.module.css";
import { BHUTAN } from "../../../../constants/languages/Language";
import { motion } from "framer-motion";

const PoliticalCard = ({ showIntro, onTravelerClick, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "15px";
  const fonstSize = language === BHUTAN ? "7.5px" : "12px";
  const headerFontSize = language === BHUTAN ? "1.2rem" : "20px";
  return (
    <div>
      {showIntro && (
        <>
          <BigCard
            width="325px"
            height="293px"
            titleFontSize={titleFontSize}
            cardFontSize={fonstSize}
            borderBottom="1px solid #6A1F11"
            backgroundColor="#FFDFC3"
            color="#6A1F11"
            title={ZHABRUNG_INFORMATION[language].politicalInfluence.title}
            content={ZHABRUNG_INFORMATION[language].politicalInfluence.content}
            subContent={
              ZHABRUNG_INFORMATION[language].politicalInfluence.subContent
            }
            language={language}
            showIntro={showIntro}
          />

          <motion.div
            className={styles.TravellersCard}
            onClick={onTravelerClick}
            initial={{ opacity: 0 }} // Initial opacity for title
            animate={{ opacity: 1 }} // Final opacity for title
            transition={{ duration: 0.5, delay: 4 }} // Fade duration for title
            exit={{ opacity: 0, transition: { duration: 2.8 } }}
          >
            <motion.div
              className={styles.text}
              style={{ fontSize: headerFontSize }}
              initial={{ opacity: 0 }} // Initial opacity for title
              animate={{ opacity: 1 }} // Final opacity for title
              transition={{ duration: 0.5, delay: 4.5 }} // Fade duration for title
              exit={{ opacity: 0, transition: { duration: 2.8 } }}
            >
              {ZHABRUNG_INFORMATION[language].foreignTravellers.title}
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default PoliticalCard;
