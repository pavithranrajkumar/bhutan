import React, { useState } from "react";
import styles from "./DriglamCard.module.css";
import Card from "../../../../components/Card/Card";
import { ZHABRUNG_INFORMATION } from "../../../../constants/Characters/ZhabrungNgawangNamgyal";
import { BHUTAN } from "../../../../constants/languages/Language";
import { delay, motion } from "framer-motion";

const DriglamCard = ({ showIntro, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "20px";
  const fonstSize = language === BHUTAN ? "5.19px" : "11px";
  const headerFontSize = language === BHUTAN ? "0.95rem" : "13px";
  const contentLineHeight = language === BHUTAN ? "1" : "";

  const cardVariants = {
    hidden: { scaleX: 0, opacity: 0 }, // Start hidden with zero scale
    visible: {
      scaleX: 1, // Set scale to normal for expansion
      opacity: 1,
      transition: {
        duration: 1.5, // Smooth expansion duration
        ease: "easeOut",
        delay: 3,
      },
    },
    exit: {
      scaleX: 0, // Collapse scale on exit
      opacity: 0,
      transition: { duration: 0.5, delay: 1 },
    },
  };

  // Animation variants for each paragraph
  const paragraphVariants = {
    hidden: { opacity: 0 }, // Start hidden
    visible: (i) => ({
      opacity: 1,
      transition: {
        duration: 0.5, // Duration for the fade-in effect
        ease: "easeOut",
        delay: 1 + i * 0.5, // Start with 1 second delay and then stagger
      },
    }),
    exit: {
      opacity: 0,
      transition: { duration: 1.5, ease: "easeIn" },
    },
  };

  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="330px"
            height="230px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #8F4110"
            backgroundColor="#FFDFC3"
            color="#6A1F11"
            title={ZHABRUNG_INFORMATION[language].driglamNamzhag.title}
            content={ZHABRUNG_INFORMATION[language].driglamNamzhag.content}
            language={language}
            showIntro={showIntro}
          />
          <motion.div
            className={styles.DriglamNamzhagTopCard}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ overflow: "hidden" }} // Prevent overflow during animation
          >
            {Object.values(
              ZHABRUNG_INFORMATION[language].driglamNamzhagStatement
            ).map((statement, index) => (
              <motion.p
                key={index}
                variants={paragraphVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={index} // Pass index for staggered animation
                style={{
                  fontSize: headerFontSize,
                  lineHeight: contentLineHeight,
                }}
              >
                {statement}
              </motion.p>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default DriglamCard;
