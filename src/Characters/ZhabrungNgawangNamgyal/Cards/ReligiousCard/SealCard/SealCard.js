import React, { useState } from "react";
import Card from "../../../../../components/Card/Card";
import styles from "./SealCard.module.css";
import { ZHABRUNG_INFORMATION } from "../../../../../constants/Characters/ZhabrungNgawangNamgyal";
import seal from "../../../../../assests/Zhabrung/Cards/Historic/Seal.png";
import { BHUTAN } from "../../../../../constants/languages/Language";
import { motion } from "framer-motion";

const SealCard = ({ showIntro, language }) => {
  const fonstSize = language === BHUTAN ? "0.8rem" : "9px";
  const titleFontSize = language === BHUTAN ? "12px" : "20px";
  const cardFonstSize = language === BHUTAN ? "7px" : "10.5px";
  const contentLineHeight = language === BHUTAN ? "1" : "";
  const paraLineHeight = language === BHUTAN ? "0.5" : "";

  const cardVariants = {
    hidden: { height: 0, opacity: 0 }, // Start hidden with zero height
    visible: {
      height: "auto", // Set height to auto for expansion
      opacity: 1,
      transition: {
        duration: 0.5, // Smooth expansion duration
        delay: 3, // Delay before starting the card's animation
      },
    },
    exit: {
      height: 0, // Collapse height on exit
      opacity: 0,
      transition: { duration: 0.5, delay: 1 },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0 }, // Start hidden
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5, // Duration for the fade-in effect
        ease: "easeOut", // Easing function
        delay: 3.5
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="260px"
            height="190px"
            titleFontSize={titleFontSize}
            contentFontSize={cardFonstSize}
            borderBottom="0.5px solid #193145"
            backgroundColor="#C9D7EE"
            color="#193145"
            title={ZHABRUNG_INFORMATION[language].sealOfZhabdrung.title}
            content={ZHABRUNG_INFORMATION[language].sealOfZhabdrung.content}
            language={language}
            showIntro={showIntro}
          />
          <div className={styles.sealImage}>
            <motion.img
              src={seal}
              alt=""
              initial={{ opacity: 0 }} // Initial state
              animate={{ opacity: 1 }} // Animation state
              transition={{ duration: 5.5, delay: 1 }}
              exit={{ opacity: 0, transition: { duration: 2 } }}
            />
          </div>

          <motion.div
            className={styles.sealOfZhabdrungStatementCard}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              style={{ fontSize: fonstSize, lineHeight: paraLineHeight }}
              variants={paragraphVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {Object.values(
                ZHABRUNG_INFORMATION[language].sealOfZhabdrungStatement.content
              ).map((paragraph, index) => (
                <p key={index} style={{ fontSize: fonstSize }}>
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default SealCard;
