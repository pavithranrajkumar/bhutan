import React, { useEffect, useState } from "react";
import { color, motion } from "framer-motion";
import CloseIconWhite from "../../../../assests/SideIcons/CloseIcon.png";
import styles from "./CloseIcon.module.css";

const CloseIcon = ({
  top,
  bottom,
  showIcons,
  left,
  right,
  onClick,
  background,
}) => {
  const [lineAnimationComplete, setLineAnimationComplete] = useState(false);
  const [cardAnimationStart, setCardAnimationStart] = useState(false);
  useEffect(() => {
    if (showIcons) {
      setLineAnimationComplete(false);
      const timer = setTimeout(() => {
        setLineAnimationComplete(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setCardAnimationStart(false); // Reset card animation
    }
  }, [showIcons]);

  useEffect(() => {
    if (lineAnimationComplete && showIcons) {
      const timer = setTimeout(() => {
        setCardAnimationStart(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [lineAnimationComplete, showIcons]);

  return (
    <div>
      {/* Vertical line that appears instantly when showIcons is true */}
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
          background: "transparent",
          zIndex: 1,
        }}
      />

      {/* Card animation */}
      <motion.div
        className={styles.LanguageWhiteIcon}
        onClick={onClick}
        style={{
          left: left,
          right: right,
          top: top,
          bottom: bottom,
          background,
          overflow: "hidden",
          marginLeft: cardAnimationStart ? "0%" : "-100%",
          zIndex: 0,
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: cardAnimationStart ? 1 : 0,
          opacity: cardAnimationStart ? 1 : 0,
          originX: 1,
        }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1 }} // Start fade immediately
        exit={{ scaleX: 0, opacity: 0, transition: { duration: 2 } }}
      >
        <div className={styles.HomeIconContainer}>
          <img src={CloseIconWhite} alt="CloseIcon" />
        </div>
      </motion.div>
    </div>
  );
};


export default CloseIcon;
