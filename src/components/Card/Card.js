import React, { useEffect, useState } from "react";
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
  fontWeight,
}) => {
  const [lineAnimationComplete, setLineAnimationComplete] = useState(false);
  const [cardAnimationStart, setCardAnimationStart] = useState(false);
  const contentLines = content.split("\n");

  const headerFontSize = language === BHUTAN ? "0.5vw" : "0.52083vw";
  const titleFontSize = language === BHUTAN ? "0.7vw" : "0.52083vw";
  const contentFontSize = language === BHUTAN ? "0.36vw" : "0.29166667vw";
  const contentLineHeight = language === BHUTAN ? "1.2" : "";

  useEffect(() => {
    if (showIntro) {
      setLineAnimationComplete(false);
      const timer = setTimeout(() => {
        setLineAnimationComplete(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setCardAnimationStart(false);
    }
  }, [showIntro]);

  useEffect(() => {
    if (lineAnimationComplete && showIntro) {
      const timer = setTimeout(() => {
        setCardAnimationStart(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [lineAnimationComplete, showIntro]);

  return (
    <div className={styles.cardContainer}>
      {/* Vertical Line Animation */}
      <motion.div
        className={styles.line}
        initial={{ height: 0 }}
        animate={{ height: lineAnimationComplete ? "100%" : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          left: "0%",
          top: 0,
          width: "3px",
          background: backgroundColor || "#2b455d",
          zIndex: 1,
        }}
      />

      {/* Card Animation */}
      <motion.div
        className={styles.detailCard}
        style={{
          backgroundColor,
          color,
          width,
          height,
          overflow: "hidden",
          position: "relative",
          marginLeft: lineAnimationComplete && showIntro ? "0%" : "-100%",
          zIndex: 0,
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: cardAnimationStart ? 1 : 0,
          opacity: cardAnimationStart ? 1 : 0,
          originX: 0,
        }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        exit={{
          scaleX: 0,
          opacity: 0,
          transition: { duration: 0.5, ease: "easeIn" }, // Exit transition
        }}
      >
        <div className={styles.introduction}>
          {/* Header Animation */}
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{
              x: cardAnimationStart ? 0 : "-100%",
              opacity: cardAnimationStart ? 1 : 0,
            }}
            exit={{ x: "-100%", opacity: 0 }} // Exit animation (reverse)
            transition={{ duration: 1.5, delay: cardAnimationStart ? 1.5 : 0 }}
          >
            <div
              className={styles.CardHeader}
              style={{
                fontSize: headerFontSize,
                lineHeight: contentLineHeight,
              }}
            >
              {header}
            </div>
          </motion.div>

          {/* Title Animation */}
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{
              x: cardAnimationStart ? 0 : "-100%",
              opacity: cardAnimationStart ? 1 : 0,
            }}
            exit={{ x: "-100%", opacity: 0 }} // Exit animation (reverse)
            transition={{ duration: 1.5, delay: cardAnimationStart ? 2 : 0 }}
          >
            <div
              className={styles.CardTitle}
              style={{
                fontSize: titleFontSize,
                fontWeight,
                lineHeight: contentLineHeight,
              }}
            >
              {title}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{
              x: cardAnimationStart ? 0 : "-100%",
              opacity: cardAnimationStart ? 1 : 0,
            }}
            exit={{ x: "-100%", opacity: 0 }} // Exit animation (reverse)
            transition={{ duration: 1.5, delay: cardAnimationStart ? 3.5 : 0 }}
          >
            <hr className={styles.borderBottom} style={{ borderBottom }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: cardAnimationStart ? 1 : 0,
              x: cardAnimationStart ? 0 : -20,
            }}
            exit={{ opacity: 0, x: -20 }} // Exit animation (reverse)
            transition={{
              duration: 0.5,
              delay: cardAnimationStart ? 4 : 0,
            }}
            className={styles.CardContent}
            style={{
              fontSize: contentFontSize,
              lineHeight: contentLineHeight,
            }}
          >
            {content}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
