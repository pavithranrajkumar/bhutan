import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [showVerticalLine, setShowVerticalLine] = useState(true);

  const headerFontSize = language === BHUTAN ? "0.7vw" : "0.52083vw";
  const titleFontSize = language === BHUTAN ? "0.7vw" : "0.52083vw";
  const contentFontSize = language === BHUTAN ? "0.36vw" : "0.29166667vw";
  const contentLineHeight = language === BHUTAN ? "1.2" : "";
  const headerLineHeight = language === BHUTAN ? "0.8" : "";

  // Reset animation flags when `showIntro` changes
  useEffect(() => {
    if (showIntro) {
      setLineAnimationComplete(false);
      const timer = setTimeout(() => {
        setLineAnimationComplete(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setCardAnimationStart(false);
      setShowVerticalLine(true); // Reset the vertical line for re-entry animation
    }
  }, [showIntro]);

  // Start card animation after line animation completes
  useEffect(() => {
    if (lineAnimationComplete && showIntro) {
      const timer = setTimeout(() => {
        setCardAnimationStart(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [lineAnimationComplete, showIntro]);

  // Hide vertical line after card animation starts
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
      <AnimatePresence mode="wait">
        {showIntro && (
          <>
            {/* Vertical Line Animation */}
            {showVerticalLine && (
              <motion.div
                className={styles.line}
                initial={{ height: 0, opacity: 1 }}
                animate={{
                  height: lineAnimationComplete ? "100%" : 0,
                  opacity: lineAnimationComplete ? 1 : 0,
                }}
                exit={{ height: 0, opacity: 0 }} // Exit animation for vertical line
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
              exit={{
                scaleX: 0, // Scale down to 0 for closing animation
                opacity: 0, // Fade out during closing
                originX: 0,
                transition: {
                  duration: 0.8, // Extended duration for smoother close
                  ease: "easeInOut",
                },
              }} // This handles the closing animation
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className={styles.introduction}>
                {/* Header Animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: cardAnimationStart ? 1 : 0 }}
                  exit={{ opacity: 0 }} // Exit fade-out
                  transition={{
                    duration: 1.2,
                    delay: cardAnimationStart ? 1.2 : 0,
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

                {/* Title Animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: cardAnimationStart ? 1 : 0 }}
                  exit={{ opacity: 0 }} // Exit fade-out
                  transition={{
                    duration: 1.2,
                    delay: cardAnimationStart ? 1.2 : 0,
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

                {/* Line under Title */}
                <motion.hr
                  className={styles.borderBottom}
                  style={{ borderBottom }}
                  initial={{ width: 0 }}
                  animate={{ width: cardAnimationStart ? "100%" : 0 }}
                  exit={{ width: 0 }} // Reverse exit for line
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                    delay: cardAnimationStart ? 1.5 : 0,
                  }}
                />

                {/* Content Animation */}
                <motion.div
                  initial={{ opacity: 0, x: "-3px" }}
                  animate={{
                    opacity: cardAnimationStart ? 1 : 0,
                    x: cardAnimationStart ? 0 : "-3px",
                  }}
                  exit={{ opacity: 0, x: "-3px" }} // Reverse exit
                  transition={{
                    duration: 0.8,
                    delay: cardAnimationStart ? 1.8 : 0,
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
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Card;
