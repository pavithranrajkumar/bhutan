import React from "react";
import { motion } from "framer-motion";
import styles from "./NextIcon.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const NextIcon = ({
  showIcons,
  onClick,
  left,
  top,
  bottom,
  right,
  whiteImage,
  color,
  background,
}) => {
  const fadeInDelay = 4.5; // Delay for 5 seconds

  return (
    <div>
      <motion.div
        style={{
          left: left,
          right: right,
          bottom: bottom,
          top: top,
          background,
        }}
        className={
          whiteImage
            ? styles.PreviousIconWhiteContainer
            : styles.PreviousIconContainer
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: showIcons ? 1 : 0 }}
        transition={{ duration: 0.5, delay: showIcons ? fadeInDelay : 0 }} // Delay for 5 seconds
        onClick={onClick}
      >
        <FontAwesomeIcon
          style={{ color }}
          icon={faChevronRight}
          className={styles.PreviousIcon}
        />
      </motion.div>
    </div>
  );
};

export default NextIcon;
