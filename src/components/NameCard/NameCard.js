import React from "react";
import { motion } from "framer-motion";
import styles from "./NameCard.module.css";

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
  return (
    <motion.div
      style={{ background: background, top, bottom, width, height }}
      className={styles.pemaNameCard}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      {/* <img src={Namecard} alt="Pema Lingpa" className={styles.OverLayImage} /> */}

      <div className={styles.pemaNameCardTitle} style={{ color: color }}>
        <div className={styles.namedCardText} style={{ fontSize }}>
          {cardName}
        </div>
        <div className={styles.namedCardText} style={{ fontSize }}>
          {cardNameTwo}
        </div>
        <div
          className={styles.subCardnameContains}
          style={{
            fontSize: subCardnameFontSize,
            marginLeft: subCardnameMarginLeft,
          }}
        >
          {subCardname}
        </div>
        <p style={{ color: paraColor, fontSize: paraSize }}>{year}</p>
      </div>
    </motion.div>
  );
};

export default NameCard;
