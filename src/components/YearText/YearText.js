import React from "react";
import styles from "./YearText.module.css";
import { motion } from "framer-motion";


const YearText = ({ fontSize, BornYear, Endyear, marginLeft }) => {
  return (
    <motion.div
    className={styles.YearTextContainer}
    style={{ fontSize }}
    initial={{ opacity: 1, x: 0 }}   // Start fully visible and in position
    animate={{ opacity: 1, x: 0 }}    // Keep it in position
    exit={{ opacity: 0, x: 150 }}       // Fade out and move to the right
    transition={{ duration: 3 }}     // Duration for the fade and move
  >
    <div style={{ marginLeft }}>{BornYear}</div>
    <span>{Endyear}</span>
  </motion.div>
  );
};

export default YearText;
