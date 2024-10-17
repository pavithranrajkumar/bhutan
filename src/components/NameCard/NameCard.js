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

  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      style={{ top, bottom, width, height }}
      className={styles.pemaNameCard}
      animate={{ backgroundColor: background, color: color }}
      transition={{ duration: 0.5 }} // Adjust the duration as needed
    >
      <div className={styles.pemaNameCardTitle} style={{ color: color }}>
        <motion.div
          variants={fadeAnimation}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 1.5 }}
        >
          <div
            className={styles.namedCardText}
            style={{ fontSize, lineHeight: contentLineHeight }}
          >
            {cardName}
          </div>
        </motion.div>

        <motion.div
          variants={fadeAnimation}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 2, delay: 0.1 }} // Optional delay for stagger effect
        >
          <div
            className={styles.namedCardText}
            style={{ fontSize, lineHeight: contentLineHeight }}
          >
            {cardNameTwo}
          </div>
        </motion.div>

        <motion.div
          variants={fadeAnimation}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 1.5, delay: 0.2 }} // Optional delay for stagger effect
          className={styles.subCardnameContains}
          style={{
            fontSize: subCardnameFontSize,
            marginLeft: subCardnameMarginLeft,
            lineHeight: contentLineHeight,
          }}
        >
          {subCardname}
        </motion.div>

        <motion.p
          variants={fadeAnimation}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 1.5, delay: 0.3 }} // Optional delay for stagger effect
          style={{ color: paraColor, fontSize: paraSize, marginTop: "3px" }}
        >
          {year}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default NameCard;
