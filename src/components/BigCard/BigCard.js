import React, { useEffect, useState } from "react";
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
  language,
  borderBottom,
  height,
  fontWeight,
  subContent,
}) => {
  const [lineAnimationComplete, setLineAnimationComplete] = useState(false);
  const [cardAnimationStart, setCardAnimationStart] = useState(false);
  const [showVerticalLine, setShowVerticalLine] = useState(true);
  const contentLines = content.split("\n");

  const headerFontSize = language === BHUTAN ? "0.7vw" : "0.52083vw";
  const titleFontSize = language === BHUTAN ? "0.7vw" : "0.7vw";
  const contentFontSize = language === BHUTAN ? "0.36vw" : "0.29166667vw";
  const contentLineHeight = language === BHUTAN ? "1.2" : "";
  const headerLineHeight = language === BHUTAN ? "0.6" : "";

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

  useEffect(() => {
    if (cardAnimationStart) {
      const timer = setTimeout(() => {
        setShowVerticalLine(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [cardAnimationStart]);

  return (
    <div className={styles.cardContainer}>
      {showVerticalLine && (
        <motion.div
          className={styles.line}
          initial={{ height: 0, opacity: 1 }}
          animate={{
            height: lineAnimationComplete ? "100%" : 0,
            opacity: lineAnimationComplete ? 1 : 0,
          }}
          exit={{
            height: 0,
            opacity: 0,
            transition: { duration: 5, ease: "easeOut" },
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            left: "0%",
            top: 0,
            width: "3px",
            background: backgroundColor || "#2b455d",
            zIndex: 1,
          }}
        />
      )}

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
          transition: { duration: 0.5, ease: "easeOut", delay: 1 },
        }}
      >
        <div className={styles.introduction}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: cardAnimationStart ? 1 : 0 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            }}
            transition={{
              duration: 0.5,
              delay: cardAnimationStart ? 1.5 : 0,
              ease: "easeInOut",
            }}
          >
            <div
              className={styles.CardHeader}
              style={{
                fontSize: headerFontSize,
                lineHeight: headerLineHeight,
              }}
            >
              {header}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: cardAnimationStart ? 1 : 0 }}
            exit={{
              opacity: 0,
              transition: { duration: 1, ease: "easeOut" },
            }}
            transition={{
              duration: 0.5,
              delay: cardAnimationStart ? 1.5 : 0,
              ease: "easeInOut",
            }}
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

          <motion.hr
            className={styles.borderBottom}
            style={{ borderBottom }}
            initial={{ width: 0 }}
            animate={{ width: cardAnimationStart ? "100%" : 0 }}
            exit={{ width: 0, transition: { duration: 0.5, ease: "easeOut" } }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              delay: cardAnimationStart ? 2 : 0,
            }}
          />

          <motion.div
            initial={{ opacity: 0, x: "-3px" }}
            animate={{
              opacity: cardAnimationStart ? 1 : 0,
              x: cardAnimationStart ? 0 : "-3px",
            }}
            exit={{
              opacity: 0,
              x: "-3px",
              transition: { duration: 0, ease: "easeOut" },
            }} // Exit animation for content
            transition={{
              duration: 0.5,
              delay: cardAnimationStart ? 3 : 0,
            }}
            className={styles.CardContent}
            style={{
              fontSize: contentFontSize,
              lineHeight: contentLineHeight,
            }}
          >
            {content}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: cardAnimationStart ? 1 : 0,
              x: cardAnimationStart ? 0 : -20,
            }}
            exit={{
              opacity: 0,
              x: "-3px",
              transition: { duration: 0, ease: "easeOut" },
            }} // Exit animation for content
            transition={{
              duration: 0.5,
              delay: cardAnimationStart ? 3.2 : 0,
            }}
            className={styles.CardSubContent}
            style={{ fontSize: contentFontSize, lineHeight: contentLineHeight }}
          >
            {subContent}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default BigCard;
