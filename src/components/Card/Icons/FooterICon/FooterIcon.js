import React from "react";
import styles from "./FooterIcon.module.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const FooterIcon = ({ onClick, showIcons }) => {
  return (
    <motion.div
      className={styles.detailCardFooter}
      initial={{ opacity: 0 }}
      animate={{ opacity: showIcons ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faHome} className={styles.icon} />
    </motion.div>
  );
};

export default FooterIcon;
