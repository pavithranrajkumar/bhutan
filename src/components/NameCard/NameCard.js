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

  return (
    <motion.div
    style={{ top, bottom, width, height }}
    className={styles.pemaNameCard}
    animate={{ backgroundColor: background, color: color }}
    transition={{ duration: 0.5 }} // Adjust the duration as needed
  >

      <div className={styles.pemaNameCardTitle} style={{ color: color }}>
        <div
          className={styles.namedCardText}
          style={{ fontSize, lineHeight: contentLineHeight }}
        >
          {cardName}
        </div>
        <div
          className={styles.namedCardText}
          style={{ fontSize, lineHeight: contentLineHeight }}
        >
          {cardNameTwo}
        </div>
        <div
          className={styles.subCardnameContains}
          style={{
            fontSize: subCardnameFontSize,
            marginLeft: subCardnameMarginLeft,
            lineHeight: contentLineHeight
          }}
        >
          {subCardname}
        </div>
        <p style={{ color: paraColor, fontSize: paraSize, marginTop:"3px" }}>{year}</p>
      </div>
    </motion.div>
  );
};

export default NameCard;
