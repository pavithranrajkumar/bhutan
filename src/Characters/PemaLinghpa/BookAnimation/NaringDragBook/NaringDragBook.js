import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HTMLFlipBook from "react-pageflip";
import styles from "./NaringDragBook.module.css";
import coverIgm from "../../../../assests/PemaLingpa/Revelations/NaringDrag.png";
import NarinDragBookImg2 from "../../../../assests/PemaLingpa/NaringDragBook/NaringDragBook1.png";
import NarinDragBookImg1 from "../../../../assests/PemaLingpa/Revelations/NaringDrag.png";
import NarinDragBookImg3 from "../../../../assests/PemaLingpa/NaringDragBook/NaringDragBook3.png";
import NarinDragBookImg4 from "../../../../assests/PemaLingpa/NaringDragBook/NaringDragBook4.png";
import NarinDragBookImg5 from "../../../../assests/PemaLingpa/NaringDragBook/NaringDragImg5.png";
import { PEMA_LINGPA_INFORMATION } from "../../../../constants/Characters/PremaLingpa";
import { BHUTAN } from "../../../../constants/languages/Language";

const NaringDragBook = ({ language, onBurningLakeAnimationCardClick }) => {
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
    <motion.div
      initial={{ opacity: 0 }} // Start invisible
      animate={{ opacity: 1 }} // Fade in
      exit={{ opacity: 0 }} // Fade out when removed
      transition={{ duration: 0.5, delay: 0.5 }} // Duration of fade effect
    >
      <div
        className={`${styles.flipbookContainer} ${
          isVisible ? styles.fadeIn : styles.fadeInHidden
        }`}
      >
        <HTMLFlipBook
          width={180}
          height={250}
          className={styles.flipBook}
          maxShadowOpacity={0}
          startPage={7}
        >
          <div className={styles.transparentPage}>
            <img src={coverIgm} alt="Comic Book Cover" />
          </div>
          <div className={styles.page}>
            <img src={NarinDragBookImg1} alt="Comic Book Cover" />
          </div>
          <div className={styles.page}>
            <img src={NarinDragBookImg2} alt="Inner Left Page" />
          </div>
          <div className={styles.page}>
            <img src={NarinDragBookImg3} alt="Inner Right Page" />
          </div>
          <div className={styles.page}>
            <img src={NarinDragBookImg4} alt="Inner Left Page" />
          </div>
          <div className={styles.page}>
            <img src={NarinDragBookImg5} alt="Inner Right Page" />
          </div>
          <div className={styles.page}>
            <img src={NarinDragBookImg1} alt="Comic Book Cover" />
          </div>
        </HTMLFlipBook>
        <motion.div
          className={styles.revelationsCard}
          onClick={onBurningLakeAnimationCardClick}
          initial={{ opacity: 0 }} // Start invisible
          animate={{ opacity: 1 }} // Fade in
          exit={{ opacity: 0 }} // Optional: Fade out when removed
          transition={{ duration: 0.5, delay:1 }} // Duration of the card fade effect
        >
          <motion.div
            className={styles.title}
            style={{ fontSize: fonstSize }}
            initial={{ opacity: 0 }} // Start invisible
            animate={{ opacity: 1 }} // Fade in
            transition={{ duration: 0.5, delay: 1.5 }} // Delay text fade in after card
          >
            {PEMA_LINGPA_INFORMATION[language].burningLake.title}
          </motion.div>
          <motion.div
            className={styles.header}
            style={{ fontSize: headerFontSize }}
            initial={{ opacity: 0 }} // Start invisible
            animate={{ opacity: 1 }} // Fade in
            transition={{ duration: 0.5, delay: 1.8 }} // Slightly later delay for the header
          >
            {PEMA_LINGPA_INFORMATION[language].burningLake.header}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NaringDragBook;
