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
  headerFontSize,
  titleFontSize,
  contentFontSize,
  height,
}) => {
  const cardStyles = {
    fontSize: language === "bhutan" ? "12px" : "13px",
  };
  const cardTitle = {
    fontSize: language === "bhutan" ? "25px" : "40px",
    borderBottom: borderBottom,
  };
  return (
    <motion.div
      className={styles.detailCard}
      style={{
        background: backgroundColor,
        color: color,
        width: width,
        height,
      }}
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
            <div
              className={styles.CardHeader}
              style={{ fontSize: headerFontSize }}
            >
              {header}
            </div>
            <div
              className={styles.CardTitle}
              style={{ fontSize: titleFontSize, borderBottom }}
            >
              {title}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showIntro ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className={styles.CardContent}
            style={{ fontSize: contentFontSize }}
          >
            {content}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
