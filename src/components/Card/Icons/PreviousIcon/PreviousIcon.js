import React from "react";
import { motion } from "framer-motion";
import styles from "./PreviousIcon.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const PreviousIcon = ({
  showIcons,
  onClick,
  left,
  top,
  bottom,
  right,
  height,
  marginTop,
  background,
  color,
}) => {
  return (
    <div>
      <motion.div
        style={{ left, right, bottom, top, height, background }}
        className={styles.PreviousIconContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: showIcons ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        onClick={onClick}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={styles.PreviousIcon}
          style={{ marginTop, color }}
        />
      </motion.div>
    </div>
  );
};

export default PreviousIcon;
