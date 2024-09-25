import React from "react";
import { motion } from "framer-motion";
import styles from "./Card.module.css";

const Card = ({
  title,
  content,
  showIntro,
  backgroundColor,
  color,
  width,
  header,
  language,
  borderBottom,
}) => {
  const cardStyles = {
    fontSize: language === "bhutan" ? "12px" : "18px",
  };
  const cardTitle = {
    fontSize: language === "bhutan" ? "25px" : "64px",
    borderBottom: borderBottom,
  };
  return (
    <motion.div
      className={styles.detailCard}
      style={{ background: backgroundColor, color: color, width: width }}
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className={styles.line}
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className={styles.introduction}
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: showIntro ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.cardTitleContainer}>
            <div className={styles.CardHeader}>
              <p className={styles.CardHeader}>{header}</p>
            </div>

            <div className={styles.CardTitle} style={cardTitle}>
              {title}
            </div>
          </div>
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: showIntro ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.CardContent} style={cardStyles}>
            {content}
          </div>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Card;
