import React from "react";
import { motion } from "framer-motion";
import HomeWhite from "../../../../assests/SideIcons/HomeWhite.png";
import Home from "../../../../assests/SideIcons/HomeIcon2.png";

import styles from "./HomeIcon.module.css";

const HomeIcon = ({
  top,
  bottom,
  showIcons,
  left,
  right,
  onClick,
  whiteImage,
  width,
  height,
  margin,
  background,
  iconHeight,
  iconWidth,
}) => {
  console.log("HomeIcon rendered, showIcons:", showIcons);

  return (
    <motion.div
      style={{
        left: left,
        right: right,
        top: top,
        bottom: bottom,
        width: width,
        height: height,
        background,
      }}
      className={whiteImage ? styles.LanguageWhiteIcon : styles.LanguageIcon}
      initial={{ opacity: 0 }}
      animate={{ opacity: showIcons ? 1 : 0 }}
      transition={{ duration: 1 }}
      onClick={onClick}
    >
      <div
        className={styles.HomeIconContainer}
        style={{ height: iconHeight, width: iconWidth, margin }}
      >
        <img src={whiteImage ? HomeWhite : Home} alt="LanguageIcon" />
      </div>
    </motion.div>
  );
};

export default HomeIcon;
