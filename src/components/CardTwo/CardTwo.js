import React from "react";
import { motion } from "framer-motion";
import styles from "./CardTwo.module.css";

const CardTwo = ({
  title,
  content,
  showIntro,
  backgroundColor,
  color,
  width,
  header,
  language,
  borderBottom,
  subContent,
}) => {
  const cardStyles = {
    fontSize: language === "bhutan" ? "12px" : "15px",
  };
  const cardTitle = {
    fontSize: language === "bhutan" ? "25px" : "40px",
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
        className={styles.introduction}
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showIntro ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.cardTitleContainer}>
            <div className={styles.CardHeader}>{header}</div>
            <div className={styles.CardTitle} style={cardTitle}>
              {title}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showIntro ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.CardContent} style={cardStyles}>
            {content}
          </div>
          <div className={styles.CardSubContent} style={cardStyles}>
            {subContent}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CardTwo;
