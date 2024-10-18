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

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 }, // Start hidden and below
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6, // Smooth transition duration
        delay: i * 0.3, // Delay based on index for staggered effect
        ease: "easeOut", // Easing function
      },
    }),
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  const cardVariants = {
    hidden: { height: 0, opacity: 0 }, // Start hidden with zero height
    visible: {
      height: "auto", // Set height to auto for expansion
      opacity: 1,
      transition: {
        duration: 0.5, // Smooth expansion duration
        when: "beforeChildren", // Animate card before children
        staggerChildren: 0.1, // Stagger child animations
      },
    },
    exit: {
      height: 0, // Collapse height on exit
      opacity: 0,
      transition: { duration: 0.5 },
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
            <div style={{ fontSize: fonstSize, lineHeight: paraLineHeight }}>
              {Object.values(
                ZHABRUNG_INFORMATION[language].sealOfZhabdrungStatement.content
              ).map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={paragraphVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={index} // Pass index for staggered animation
                  style={{ fontSize: fonstSize }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default SealCard;
