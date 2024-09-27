import React from "react";
import { motion } from "framer-motion";
import Language from "../../../../assests/SideIcons/HomeIcon.png";
import LanguageWhite from "../../../../assests/SideIcons/LanguageWhite.png";
import Supine from "../../../../assests/SideIcons/LanguageSupine.png";

import styles from "./LanguageIcon.module.css";

const LanguageIcon = ({
  top,
  showIcons,
  left,
  right,
  onClick,
  whiteImage,
  width,
  height,
  margin,
  bottom,
  background,
  iconWidth,
  IconHeight,
  supine,
}) => {
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
    >
      <div
        className={styles.LanguageIconContainer}
        onClick={onClick}
        style={{ margin: margin }}
      >
        <img
          src={whiteImage ? LanguageWhite : supine ? Supine : Language}
          style={{ height: IconHeight, width: iconWidth }}
          alt="LanguageIcon"
        />
      </div>
    </motion.div>
  );
};

export default LanguageIcon;
