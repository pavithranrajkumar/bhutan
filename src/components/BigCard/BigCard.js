import React from "react";
import { motion } from "framer-motion";
import styles from "./BigCard.module.css";
import { BHUTAN } from "../../constants/languages/Language";

const BigCard = ({
  title,
  content,
  showIntro,
  backgroundColor,
  color,
  width,
  header,
  subContent,
  height,
  borderBottom,
  language
}) => {
  const headerFontSize = language === BHUTAN ? "0.5vw" : "0.52083vw"; // 1.125rem and 1.25rem converted
  const titleFontSize = language === BHUTAN ? "0.7vw" : "0.52083vw"; // 0.9375rem and 1.25rem converted
  const contentFontSize = language === BHUTAN ? "0.36vw" : "0.29166667vw"; // 0.625rem and 0.6875rem converted
  const contentLineHeight = language === BHUTAN ? "1.2" : "";

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
            <div className={styles.CardHeader}style={{
                fontSize: headerFontSize,
                lineHeight: contentLineHeight,
              }}>{header}</div>
            <div className={styles.CardTitle}  style={{
                borderBottom,
                fontSize: titleFontSize,
                lineHeight: contentLineHeight,
              }}>
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
          <div
            className={styles.CardSubContent}
            style={{ fontSize: contentFontSize, lineHeight: contentLineHeight }}
          >
            {subContent}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BigCard;
