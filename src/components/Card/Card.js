import React from "react";
import { motion } from "framer-motion";
import styles from "./Card.module.css";

const Card = ({ title, content, showIntro }) => {
  return (
    <motion.div
      className={styles.detailCard}
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
      <motion.div
        className={styles.introduction}
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 1 : 0 }}
        transition={{ duration: 1, delay: showIntro ? 0 : 0.5 }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: showIntro ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.CardTitle}>{title}</div>
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: showIntro ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {content}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Card;
