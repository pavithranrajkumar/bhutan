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
  whiteImage,
  background,
  supine,
}) => {
  console.log("HomeIcon rendered, showIcons:", showIcons);

  return (
    <motion.div
      style={{
        left: left,
        right: right,
        top: top,
        bottom: bottom,
        // width: width,
        // height: height,
        background,
      }}
      className={styles.LanguageWhiteIcon }
      initial={{ opacity: 0 }}
      animate={{ opacity: showIcons ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
    >
      <div
        className={styles.HomeIconContainer}
        // style={{ height: iconHeight, width: iconWidth, margin }}
      >
        <img
          src={CloseIconWhite}
          alt="LanguageIcon"
        />
      </div>
    </motion.div>
  );
};

export default CloseIcon;
