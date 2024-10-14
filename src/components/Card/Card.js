import React from "react";
import { motion } from "framer-motion";
import styles from "./Card.module.css";
import { BHUTAN } from "../../constants/languages/Language";

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
  height,
}) => {
  const headerFontSize = language === BHUTAN ? "1.125rem" : "1.25rem";
  const titleFontSize = language === BHUTAN ? "0.9375rem" : "1.25rem";
  const contentFontSize = language === BHUTAN ? "0.625rem" : "0.6875rem";
  const contentLineHeight = language === BHUTAN ? "1.5" : "";

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
              style={{
                fontSize: headerFontSize,
                lineHeight: contentLineHeight,
              }}
            >
              {header}
            </div>
            <div
              className={styles.CardTitle}
              style={{
                borderBottom,
                fontSize: titleFontSize,
                lineHeight: contentLineHeight,
              }}
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
            style={{ fontSize: contentFontSize, lineHeight: contentLineHeight }}
          >
            {content}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
