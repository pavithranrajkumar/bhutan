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
  const [showVerticalLine, setShowVerticalLine] = useState(true); // State for vertical line visibility
  const contentLines = content.split("\n");

  const headerFontSize = language === BHUTAN ? "0.7vw" : "0.52083vw";
  const titleFontSize = language === BHUTAN ? "0.7vw" : "0.52083vw";
  const contentFontSize = language === BHUTAN ? "0.36vw" : "0.29166667vw";
  const contentLineHeight = language === BHUTAN ? "1.2" : "";
  const headerLineHeight = language === BHUTAN ? "0.8" : "";

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

  // Use effect to hide the vertical line after the card animation starts
  useEffect(() => {
    if (cardAnimationStart) {
      const timer = setTimeout(() => {
        setShowVerticalLine(false); // Hide vertical line after the card animation starts
      }, 800); // Adjust delay as needed for smooth transition
      return () => clearTimeout(timer);
    }
  }, [cardAnimationStart]);

  return (
    <div className={styles.cardContainer}>
      {/* Vertical Line Animation */}
      {showVerticalLine && (
        <motion.div
          className={styles.line}
          initial={{ height: 0, opacity: 1 }} // Start with visible opacity
          animate={{
            height: lineAnimationComplete ? "100%" : 0,
            opacity: lineAnimationComplete ? 1 : 0,
          }}
          exit={{ height: 0, opacity: 0 }} // Exit transition for height and opacity
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
          {/* Header Animation with Fade Effect */}
          <motion.div
            initial={{ opacity: 0 }} // Start with hidden opacity
            animate={{ opacity: cardAnimationStart ? 1 : 0 }} // Fade in effect
            transition={{
              duration: 1.5, // Duration of the fade-in effect
              delay: cardAnimationStart ? 1.5 : 0, // Delayed fade-in
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

          {/* Title Animation with Fade Effect */}
          <motion.div
            initial={{ opacity: 0 }} // Start with hidden opacity
            animate={{ opacity: cardAnimationStart ? 1 : 0 }} // Fade in effect
            transition={{
              duration: 1.5, // Duration of the fade-in effect
              delay: cardAnimationStart ? 1.5 : 0, // Slightly delayed fade-in for the title
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

          {/* Extending Line (hr tag) Animation */}
          <motion.hr
            className={styles.borderBottom}
            style={{ borderBottom }}
            initial={{ width: 0 }} // Start with 0 width
            animate={{ width: cardAnimationStart ? "100%" : 0 }} // Extend to full width
            transition={{
              duration: 1.5,
              ease: "easeOut",
              delay: cardAnimationStart ? 2 : 0,
            }}
          />

          {/* Content Animation */}
          <motion.div
            initial={{ opacity: 0, x: "-3px" }} // Start from the margin (aligned with line)
            animate={{
              opacity: cardAnimationStart ? 1 : 0,
              x: cardAnimationStart ? 0 : "-3px",
            }}
            exit={{ opacity: 0, x: "-3px" }} // Exit animation
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
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
