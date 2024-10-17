import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LanguageColor from "../../../../assests/SideIcons/HomeIcon.png";
import LanguageWhite from "../../../../assests/SideIcons/LanguageWhite.png";
import BhutanIcon from "../../../../assests/SideIcons/BhutanLanguageWhite.png";
import styles from "./LanguageIcon.module.css";
import { BHUTAN, ENGLISH } from "../../../../constants/languages/Language";

const LanguageIcon = ({
  top,
  left,
  showIcons,
  onClick,
  whiteImage,
  background,
  language,
}) => {
  const [lineAnimationComplete, setLineAnimationComplete] = useState(false);
  const [cardAnimationStart, setCardAnimationStart] = useState(false);

  const handleClick = () => {
    console.log("LanguageIcon clicked!");
    onClick(); // Call the toggleLanguage function
  };

  const iconSrc =
    language === ENGLISH
      ? LanguageWhite
      : language === BHUTAN
      ? BhutanIcon
      : LanguageColor;

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
        exit={{ scaleX: 0, opacity: 0, transition: { duration: 2 } }}
        onClick={handleClick}
      >
        <div className={styles.LanguageIconContainer}>
          <img src={iconSrc} alt="LanguageIcon" />
        </div>
      </motion.div>
    </div>
  );
};

export default LanguageIcon;
