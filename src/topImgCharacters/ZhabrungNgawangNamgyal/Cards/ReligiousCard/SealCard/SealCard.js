import React from "react";
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 4,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
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
            style={{ overflow: "hidden", transformOrigin: "right" }} // Set origin to right
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
