import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HomeWhite from "../../../../assests/SideIcons/HomeWhite.png";
import Home from "../../../../assests/SideIcons/HomeIcon2.png";
import Supine from "../../../../assests/SideIcons/SupineHome.png";

import styles from "./HomeIcon.module.css";

const HomeIcon = ({
  top,
  bottom,
  showIcons,
  left,
  right,
  onClick,
  whiteImage,
  background,
  supine,
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
    <div className={styles.cardContainer} style={{ position: 'fixed', top, left }}>
      {/* Vertical Line Animation */}
      <motion.div
        className={styles.line}
        initial={{ height: 0 }}
        animate={{ height: lineAnimationComplete ? "100%" : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          right: "0%",
          top: 0,
          width: "3px",
          background: background,
          zIndex: 1,
        }}
      />

      {/* Card Animation */}
      <motion.div
      className={whiteImage ? styles.LanguageWhiteIcon : styles.LanguageIcon}
      style={{
          left,
          position: "absolute",
          right: "0%", // Start at the left side
          top: 0,
          background,
          overflow: "hidden",
          zIndex: 0,
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: cardAnimationStart ? 1 : 0,
          opacity: cardAnimationStart ? 1 : 0,
          originX: 1, // Ensures scaling is from the left
        }}
        transition={{ duration: 1, ease: "easeOut", delay: 4 }}
        exit={{ scaleX: 0, opacity: 0 }}
        onClick={onClick}

      >
         <div className={styles.HomeIconContainer}>
        <img
          src={whiteImage ? HomeWhite : supine ? Supine : Home}
          alt="LanguageIcon"
        />
      </div>
      </motion.div>
    </div>
  );
};

export default HomeIcon;
