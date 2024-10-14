import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import styles from "./BurningLake.module.css";
import BurningLakeBookImg from "../../../assests/PemaLingpa/Revelations/BurningLake.png";
import BurningLakeBookImg1 from "../../../assests/PemaLingpa/Revelations/BurningLake.png";
import BurningLakeBookImg2 from "../../../assests/PemaLingpa/BurningLakeBook/BurningLakeBookImg2.png";
import BurningLakeBookImg3 from "../../../assests/PemaLingpa/BurningLakeBook/BurningLakeBookImg3.png";

import { PEMA_LINGPA_INFORMATION } from "../../../constants/Characters/PremaLingpa";
import { BHUTAN } from "../../../constants/languages/Language";

const BurningLakeBook = ({ language, onNaringDragAnimationCardClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const fonstSize = language === BHUTAN ? "10px" : "12px";
  const headerFontSize = language === BHUTAN ? "10px" : "20px";

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
      {" "}
      <HTMLFlipBook
        width={230}
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
      <div
        className={styles.revelationsCard}
        onClick={onNaringDragAnimationCardClick}
      >
        <div className={styles.title} style={{ fontSize: fonstSize }}>
          {PEMA_LINGPA_INFORMATION[language].naringDrag.header}
        </div>
        <div className={styles.header} style={{ fontSize: headerFontSize }}>
          {PEMA_LINGPA_INFORMATION[language].naringDrag.title}
        </div>
      </div>
    </div>
  );
};

export default BurningLakeBook;
