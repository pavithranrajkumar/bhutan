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
  whiteImge,
  color,
  background,
}) => {
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
          whiteImge
            ? styles.PreviousIconWhiteContainer
            : styles.PreviousIconContainer
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: showIcons ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        onClick={onClick}
      >
        <FontAwesomeIcon
          style={{ color }}
          icon={faChevronRight}
          className={whiteImge ? styles.PreviousIcon : styles.PreviousIcon}
        />
      </motion.div>
    </div>
  );
};

export default NextIcon;
