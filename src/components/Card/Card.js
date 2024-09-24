import React from "react";
import { motion } from "framer-motion";
import styles from "./Card.module.css";

const Card = ({ title, content, showIntro, backgroundColor, color, width }) => {
  return (
    <motion.div
      className={styles.detailCard}
      style={{ background: backgroundColor, color: color, width: width }}
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className={styles.line}
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1 }}
      />

      {/* Title and Content */}
      <motion.div
        className={styles.introduction}
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 1 : 0 }}
        transition={{ duration: 1 }} // Removed delay for now
      >
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: showIntro ? 1 : 0 }}
          transition={{ duration: 0.8 }} // Removed delay
        >
          <div className={styles.CardTitle}>{title}</div>
          <div className={styles.CardLine}></div>
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: showIntro ? 1 : 0 }}
          transition={{ duration: 0.8 }} // Removed delay
        >
          <div className={styles.CardContent}>{content}</div>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Card;
