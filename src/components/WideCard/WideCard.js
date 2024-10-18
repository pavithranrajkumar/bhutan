import React from "react";
import { motion } from "framer-motion"; // Import motion
import styles from "./WideCard.module.css";
import { BHUTAN } from "../../constants/languages/Language";

const WideCard = ({
  FrstHeader,
  ScndHeader,
  para,
  width,
  height,
  headerFontSize,
  paraFontSize,
  onClick,
  isActive,
  language,
}) => {
  const contentLineHeight = language === BHUTAN ? "1" : "";

  // Framer Motion variants for animation
  const cardVariants = {
    hidden: { opacity: 0, x: -100 }, // Initial state
    visible: { opacity: 1, x: 0 }, // Final state
  };

  return (
    <motion.div
      className={`${styles.WideCard} ${isActive ? styles.activeCard : ""}`}
      style={{ width, height }}
      onClick={onClick}
      initial="hidden" // Initial state
      animate="visible" // Animate to final state
      exit={{ opacity: 0, transition: { duration: 2 }, delay:1.5 }}
      variants={cardVariants} // Animation variants
      transition={{ duration: 1.2, ease: "easeOut", delay:3 }} // Animation duration and easing
    >
      <div className={styles.WideCardTextContainer}>
        <div
          className={styles.WideCardHeader}
          style={{ fontSize: headerFontSize, lineHeight: contentLineHeight }}
        >
          {FrstHeader} <span>{ScndHeader}</span>
        </div>
        <div
          className={styles.WideCardPara}
          style={{ fontSize: paraFontSize, lineHeight: contentLineHeight }}
        >
          {para}
        </div>
      </div>
    </motion.div>
  );
};

export default WideCard;
