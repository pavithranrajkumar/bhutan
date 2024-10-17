import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import styles from "./BurningLake.module.css";
import BurningLakeBookImg from "../../../assests/PemaLingpa/Revelations/BurningLake.png";
import BurningLakeBookImg1 from "../../../assests/PemaLingpa/Revelations/BurningLake.png";
import BurningLakeBookImg2 from "../../../assests/PemaLingpa/BurningLakeBook/BurningLakeBookImg2.png";
import BurningLakeBookImg3 from "../../../assests/PemaLingpa/BurningLakeBook/BurningLakeBookImg3.png";
import { motion } from "framer-motion";

import { PEMA_LINGPA_INFORMATION } from "../../../constants/Characters/PremaLingpa";
import { BHUTAN } from "../../../constants/languages/Language";

const BurningLakeBook = ({ language, onNaringDragAnimationCardClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const fonstSize = language === BHUTAN ? "18px" : "12px";
  const headerFontSize = language === BHUTAN ? "22px" : "20px";

  useEffect(() => {
    // Start fade-in effect on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay to allow for fade-in (adjust as needed)

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  return (
    <div
      className={`${styles.flipbookContainer} ${
        isVisible ? styles.fadeIn : styles.fadeInHidden
      }`}
    >
      <HTMLFlipBook
        width={180}
        height={330}
        className={styles.flipBook}
        startPage={7}
        maxShadowOpacity={0}
      >
        <div className={styles.transparentPage}>
          <img src={BurningLakeBookImg1} alt="Comic Book Cover" />
        </div>
        <div className={styles.page}>
          <img src={BurningLakeBookImg1} alt="Comic Book Cover" />
        </div>
        <div className={styles.page}>
          <img src={BurningLakeBookImg2} alt="Inner Left Page" />
        </div>
        <div className={styles.page}>
          <img src={BurningLakeBookImg3} alt="Inner Right Page" />
        </div>
        {/* <div className={styles.page}>
          <img src={BurningLakeBookImg3} alt="Inner Left Page" />
        </div> */}
        {/* <div className={styles.page}>
          <img src={BurningLakeLeft} alt="Inner Right Page" />
        </div> */}
        <div className={styles.page}>
          <img src={BurningLakeBookImg1} alt="Comic Book Cover" />
        </div>
      </HTMLFlipBook>
      
      <motion.div
      className={styles.revelationsCard}
      onClick={onNaringDragAnimationCardClick}
      initial={{ opacity: 0 }} // Start invisible
      animate={{ opacity: 1 }} // Fade in
      exit={{ opacity: 0 }} // Optional: Fade out when removed
      transition={{ duration: 0.5 }} // Duration of the card fade effect
    >
      <motion.div
        className={styles.title}
        style={{ fontSize: fonstSize }}
        initial={{ opacity: 0 }} // Start invisible
        animate={{ opacity: 1 }} // Fade in
        transition={{ duration: 0.5, delay: 1.5 }} // Delay text fade in after card
      >
        {PEMA_LINGPA_INFORMATION[language].naringDrag.title}
      </motion.div>
      <motion.div
        className={styles.header}
        style={{ fontSize: headerFontSize }}
        initial={{ opacity: 0 }} // Start invisible
        animate={{ opacity: 1 }} // Fade in
        transition={{ duration: 0.5, delay: 1.7 }} // Slightly later delay for the header
      >
        {PEMA_LINGPA_INFORMATION[language].naringDrag.header}
      </motion.div>
    </motion.div>
    </div>
  );
};

export default BurningLakeBook;
