import React from "react";
import { motion } from "framer-motion";
import styles from "./PreviousIcon.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const PreviousIcon = ({ showIcons, onClick, left, top, bottom, right }) => {
  return (
    <div>
      <motion.div
        style={{ left: left, right: right, bottom: bottom, top: top }}
        className={styles.PreviousIconContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: showIcons ? 1 : 0 }}
        transition={{ duration: 5 }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronLeft} className={styles.PreviousIcon} />
      </motion.div>
    </div>
  );
};

export default PreviousIcon;
