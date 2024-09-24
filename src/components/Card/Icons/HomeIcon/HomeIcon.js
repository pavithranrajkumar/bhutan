import React from "react";
import { motion } from "framer-motion";
import HomeWhite from "../../../../assests/SideIcons/HomeWhite.png";
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
      }}
      className={whiteImage ? styles.LanguageWhiteIcon : styles.LanguageIcon}
      initial={{ opacity: 0 }}
      animate={{ opacity: showIcons ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <div
        className={styles.HomeIconContainer}
        onClick={onClick}
        style={{ margin: margin }}
      >
        <img src={HomeWhite} alt="LanguageIcon" />
      </div>
    </motion.div>
  );
};

export default HomeIcon;
