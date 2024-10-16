import React from "react";
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
  const fadeInDelay = 6; // Delay for 5 seconds

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
      onClick={onClick}
    >
      <div className={styles.HomeIconContainer}>
        <img
          src={whiteImage ? HomeWhite : supine ? Supine : Home}
          alt="LanguageIcon"
        />
      </div>
    </motion.div>
  );
};

export default HomeIcon;
