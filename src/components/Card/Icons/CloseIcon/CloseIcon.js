import React from "react";
import { motion } from "framer-motion";
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
      className={styles.LanguageWhiteIcon}
      initial={{ opacity: 0 }}
      animate={{ opacity: showIcons ? 1 : 0 }}
      transition={{ duration: 0.5, delay: showIcons ? fadeInDelay : 0 }} // Delay for 5 seconds
      onClick={onClick}
    >
      <div className={styles.HomeIconContainer}>
        <img
          src={CloseIconWhite}
          alt="CloseIcon"
        />
      </div>
    </motion.div>
  );
};

export default CloseIcon;
