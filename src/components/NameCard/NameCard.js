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
}) => {
  const cardStyles = {
    fontSize: fontSize || (language === "bhutan" ? "13px" : "30px"),
  };
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
        <div className={styles.namedCardText} style={cardStyles}>
          {cardName}
        </div>
        <p style={{ color: paraColor, fontSize: paraSize }}>{year}</p>
      </div>
    </motion.div>
  );
};

export default NameCard;
