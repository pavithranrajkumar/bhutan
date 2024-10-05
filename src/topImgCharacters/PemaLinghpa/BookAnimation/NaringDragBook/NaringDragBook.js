import React from "react";
import HTMLFlipBook from "react-pageflip";
import styles from "./NaringDragBook.module.css";
import coverIgm from "../../../../assests/PemaLingpa/Revelations/NaringDrag.png";
import NarinDragBookImg1 from "../../../../assests/PemaLingpa/NaringDragBook/NaringDragBook1.png";
import NarinDragBookImg2 from "../../../../assests/PemaLingpa/NaringDragBook/NaringDragBook2.png";
import NarinDragBookImg3 from "../../../../assests/PemaLingpa/NaringDragBook/NaringDragBook3.png";
import NarinDragBookImg4 from "../../../../assests/PemaLingpa/NaringDragBook/NaringDragBook4.png";
import NarinDragBookImg5 from "../../../../assests/PemaLingpa/NaringDragBook/NaringDragImg5.png";
import { PEMA_LINGPA_INFORMATION } from "../../../../constants/Characters/PremaLingpa";
import { BHUTAN } from "../../../../constants/languages/Language";

const NaringDragBook = ({ language, onBurningLakeAnimationCardClick }) => {
  const fonstSize = language === BHUTAN ? "10px" : "12px";
  const headerFontSize = language === BHUTAN ? "10px" : "20px";
  return (
    <div className={styles.flipbookContainer}>
      <HTMLFlipBook
        width={200}
        height={250}
        className={styles.flipBook}
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
      <div
        className={styles.revelationsCard}
        onClick={onBurningLakeAnimationCardClick}
      >
        <div className={styles.title} style={{ fontSize: fonstSize }}>
          {PEMA_LINGPA_INFORMATION[language].burningLake.header}
        </div>
        <div className={styles.header} style={{ fontSize: headerFontSize }}>
          {PEMA_LINGPA_INFORMATION[language].burningLake.title}
        </div>
      </div>
    </div>
  );
};

export default NaringDragBook;
