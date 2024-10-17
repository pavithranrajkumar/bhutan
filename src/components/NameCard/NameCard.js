import React from "react";
import { motion } from "framer-motion";
import styles from "./NameCard.module.css";
import { BHUTAN } from "../../constants/languages/Language";

const NameCard = ({
  cardName,
  year,
  background,
  color,
  top,
  bottom,
  paraColor,
  width,
  height,
  language,
  fontSize,
  paraSize,
  subCardname,
  subCardnameFontSize,
  subCardnameMarginLeft,
  cardNameTwo,
}) => {
  const contentLineHeight = language === BHUTAN ? "1.1" : "normal";

  // Fade animation configuration for smooth appearance
  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      style={{ top, bottom, width, height }}
      className={styles.pemaNameCard}
      animate={{ backgroundColor: background, color: color }}
      transition={{ duration: 0.5 }} // Transition for background and color
    >
      <div className={styles.pemaNameCardTitle} style={{ color: color }}>
        {/* Card Name Animation */}
        <motion.div
          variants={fadeAnimation}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 1.5 }} // Animation for card name
        >
          <div
            className={styles.namedCardText}
            style={{ fontSize, lineHeight: contentLineHeight }}
          >
            {cardName}
          </div>
        </motion.div>

        {/* Second Card Name Animation */}
        <motion.div
          variants={fadeAnimation}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{
            duration: 1.5,
            delay: 0.5, // Staggered delay for second card name
          }}
        >
          <div
            className={styles.namedCardText}
            style={{ fontSize, lineHeight: contentLineHeight }}
          >
            {cardNameTwo}
          </div>
        </motion.div>

        {/* Sub Card Name Animation */}
        <motion.div
          variants={fadeAnimation}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{
            duration: 1.5,
            delay: 1, // Further delay for sub card name
          }}
          className={styles.subCardnameContains}
          style={{
            fontSize: subCardnameFontSize,
            marginLeft: subCardnameMarginLeft,
            lineHeight: contentLineHeight,
          }}
        >
          {subCardname}
        </motion.div>
      </div>
      <motion.p
        key="year" // Ensure this key remains to help Framer Motion track the component
        variants={{
          hidden: { opacity: 0 }, // Initial hidden state
          visible: { opacity: 1 }, // Fade in
          exit: { opacity: 0 }, // Fade out
        }}
        initial="hidden" // Start from hidden state
        animate="visible" // Animate to visible state (fade in)
        exit="exit" // On exit, fade out
        transition={{
          duration: 2, // Slow fade effect (adjust duration as needed)
          ease: "easeInOut",
        }}
        className={styles.para}
        style={{ color: paraColor, fontSize: paraSize, marginTop: "3px" }}
      >
        {year}
      </motion.p>
    </motion.div>
  );
};

export default NameCard;
