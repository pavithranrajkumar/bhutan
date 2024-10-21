import React, { useState } from "react";
import { ZHABRUNG_INFORMATION } from "../../../../constants/Characters/ZhabrungNgawangNamgyal";
import BigCard from "../../../../components/BigCard/BigCard";
import histoiric from "../../../../assests/Zhabrung/Cards/Historic/Historic.png";
import styles from "./HistoricCard.module.css";
import { BHUTAN } from "../../../../constants/languages/Language";
import { motion } from "framer-motion";

const HistoricCard = ({ showIntro, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "20px";
  const fonstSize = language === BHUTAN ? "8px" : "11.3px";
  console.log("Show Intro:", showIntro);
  return (
    <div>
      {showIntro && (
        <>
          <BigCard
            width="240px"
            height="313px"
            titleFontSize={titleFontSize}
            cardFontSize={fonstSize}
            borderBottom="1px solid #6A1F11"
            backgroundColor="#FFDFC3"
            color="#6A1F11"
            title={ZHABRUNG_INFORMATION[language].historicBackground.title}
            content={ZHABRUNG_INFORMATION[language].historicBackground.content}
            subContent={
              ZHABRUNG_INFORMATION[language].historicBackground.subContent
            }
            language={language}
            showIntro={showIntro}
          />
          <div
            className={styles.ZhabrungHistoryImage}
          >
            <motion.img
              src={histoiric}
              alt=""
              initial={{ opacity: 0 }} // Initial state
              animate={{ opacity: 1 }} // Animation state
              transition={{ duration: 3, delay: 3.5 }}
              exit={{ opacity: 0, transition: { duration: 2 } }}
            />
          </div>
          
        </>
      )}
    </div>
  );
};

export default HistoricCard;
