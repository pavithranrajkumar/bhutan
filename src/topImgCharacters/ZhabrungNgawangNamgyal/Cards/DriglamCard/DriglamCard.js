import React from "react";
import styles from "./DriglamCard.module.css";
import Card from "../../../../components/Card/Card";
import { ZHABRUNG_INFORMATION } from "../../../../constants/Characters/ZhabrungNgawangNamgyal";
import { BHUTAN } from "../../../../constants/languages/Language";
import { motion } from "framer-motion";

const DriglamCard = ({ showIntro, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "20px";
  const fontSize = language === BHUTAN ? "5.19px" : "11px";
  const headerFontSize = language === BHUTAN ? "0.95rem" : "13px";
  const contentLineHeight = language === BHUTAN ? "1" : "";

  const cardVariants = {
    hidden: {
      scaleX: 0, // Collapse from the right
      opacity: 0,
      transformOrigin: "right", // Anchor expansion to the right side
    },
    visible: {
      scaleX: 1, // Expand fully to the right
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 3,
      },
    },
    exit: {
      scaleX: 0, // Collapse back to the right
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0 }, // Start hidden
    visible: (i) => ({
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 4 + i * 0.5, // Delay for each paragraph
      },
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  return (
    <div style={{ overflow: "hidden", display: "flex", justifyContent: "flex-end" }}>
      {showIntro && (
        <>
          <Card
            width="330px"
            height="230px"
            titleFontSize={titleFontSize}
            contentFontSize={fontSize}
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
            style={{
              overflow: "hidden",
              justifyContent: "flex-end", // Align card to the right
              transformOrigin: "right", // Ensure expansion is anchored to the right
            }}
          >
            {Object.values(ZHABRUNG_INFORMATION[language].driglamNamzhagStatement).map((statement, index) => (
              <motion.p
                key={index}
                variants={paragraphVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={index}
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
