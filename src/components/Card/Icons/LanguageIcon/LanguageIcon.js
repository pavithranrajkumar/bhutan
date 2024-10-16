import React from "react";
import { motion } from "framer-motion";
import LanguageColor from "../../../../assests/SideIcons/HomeIcon.png";
import LanguageWhite from "../../../../assests/SideIcons/LanguageWhite.png";
import BhutanIcon from "../../../../assests/SideIcons/BhutanLanguageWhite.png";
import Supine from "../../../../assests/SideIcons/LanguageSupine.png";

import styles from "./LanguageIcon.module.css";
import { BHUTAN, ENGLISH } from "../../../../constants/languages/Language";

const LanguageIcon = ({
  top,
  showIcons,
  left,
  right,
  onClick,
  whiteImage,
  bottom,
  background,
  language,
}) => {
  console.log("Current language in LanguageIcon:", language); // Check the value here
  console.log("Props in LanguageIcon:", {
    top,
    showIcons,
    left,
    right,
    onClick,
    whiteImage,
    language,
  });

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

  const fadeInDelay = 4.5; // Delay for 5 seconds

  return (
    <motion.div
      style={{
        left: left,
        right: right,
        top: top,
        bottom: bottom,
        background,
      }}
      className={whiteImage ? styles.LanguageWhiteIcon : styles.LanguageIcon}
      initial={{ opacity: 0 }}
      animate={{ opacity: showIcons ? 1 : 0 }}
      transition={{ duration: 0.5, delay: showIcons ? fadeInDelay : 0 }} // Delay for 5 seconds
      onClick={handleClick}
    >
      <div className={styles.LanguageIconContainer}>
        <img
          src={iconSrc}
          alt="LanguageIcon"
        />
      </div>
    </motion.div>
  );
};

export default LanguageIcon;
