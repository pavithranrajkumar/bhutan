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
}) => {
  // const cardStyles = {
  //   fontSize: language === "bhutan" ? "13px" : "18px",
  // };
  return (
    <motion.div
      style={{ background: background, top, bottom }}
      className={styles.pemaNameCard}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      {/* <img src={Namecard} alt="Pema Lingpa" className={styles.OverLayImage} /> */}

      <div className={styles.pemaNameCardTitle} style={{ color: color }}>
        <div className={styles.namedCardText}>{cardName}</div>
        <p style={{ color: paraColor }}>{year}</p>
      </div>
    </motion.div>
  );
};

export default NameCard;
