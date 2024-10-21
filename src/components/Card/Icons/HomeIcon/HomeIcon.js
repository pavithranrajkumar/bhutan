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
  background,
  supine,
}) => {
  const [lineAnimationComplete, setLineAnimationComplete] = useState(false);
  const [cardAnimationStart, setCardAnimationStart] = useState(false);
  const [iconVisible, setIconVisible] = useState(false); 

  useEffect(() => {
    if (showIcons) {
      setLineAnimationComplete(false);
      const timer = setTimeout(() => {
        setLineAnimationComplete(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setCardAnimationStart(false); // Reset card animation
      setIconVisible(false); // Hide icon when not showing icons
    }
  }, [showIcons]);

  useEffect(() => {
    if (lineAnimationComplete && showIcons) {
      const timer = setTimeout(() => {
        setCardAnimationStart(true);
        // Delay icon visibility until the card is fully expanded
        setIconVisible(true); // Show icon after card animation starts
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [lineAnimationComplete, showIcons]);

  return (
    <div
      className={styles.cardContainer}
      style={{ position: "fixed", top, left }}
    >
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
        className={styles.LanguageWhiteIcon}
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
        transition={{ duration: 1.5, ease: "easeOut", delay: 1 }} // Start fade immediately
        exit={{ scaleX: 0, opacity: 0, transition: { duration: 1 } }}
        onClick={onClick}
      >
        <motion.div
          initial={{ opacity: 0 }} // Start with the icon invisible
          animate={{ opacity: iconVisible ? 1 : 0 }} // Fade in when iconVisible is true
          transition={{ duration: 0.5, delay: 2 }} // Fade in after card animation
          className={styles.HomeIconContainer}
        >
          <img src={HomeWhite} alt="LanguageIcon" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomeIcon;
